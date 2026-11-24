#!/usr/bin/env python3
"""skillscan: static trust scanner for agent skills, plugins and MCP servers.

Reads files only. Never executes anything from the scanned target.

Usage:
  skillscan scan <path-or-git-url> [--json] [--per-unit] [--min-severity LOW|MED|HIGH]
  skillscan lock <path-or-git-url> [-o skills.lock]
  skillscan check <path-or-git-url> --lock skills.lock [--json]
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
import re
import subprocess
import sys
import tempfile
from dataclasses import dataclass, field, asdict
from pathlib import Path

VERSION = "0.1.0"

SEV_WEIGHT = {"HIGH": 20, "MED": 8, "LOW": 2}
SEV_ORDER = {"LOW": 0, "MED": 1, "HIGH": 2}

SKIP_DIRS = {".git", "node_modules", "__pycache__", ".venv", "venv", "dist", "build", ".next"}
# Dev-only paths: not shipped to users' agents. Skipped unless --include-tests.
DEV_DIRS = {"tests", "test", "__tests__", "spec", ".github", "examples", "benchmarks", "evals"}
INCLUDE_DEV = False
SKILLS_ONLY = False  # skip loose repo code that is not part of a skill/command/agent/hook/MCP unit
TEXT_EXT = {".md", ".sh", ".bash", ".zsh", ".py", ".js", ".mjs", ".cjs", ".ts", ".json",
            ".yaml", ".yml", ".toml", ".txt", ".rb", ".ps1", ""}
SCRIPT_EXT = {".sh", ".bash", ".zsh", ".py", ".js", ".mjs", ".cjs", ".ts", ".rb", ".ps1"}
MAX_FILE_BYTES = 512 * 1024


# --------------------------------------------------------------------------- rules

@dataclass
class Rule:
    id: str
    sev: str
    cap: str            # capability this implies: shell, network, fs-write, secrets, injection, obfuscation
    desc: str
    pattern: re.Pattern
    where: str = "any"  # any | script | md


def R(id, sev, cap, desc, pat, where="any", flags=re.I):
    return Rule(id, sev, cap, desc, re.compile(pat, flags), where)


RULES: list[Rule] = [
    # shell / destructive
    R("pipe-to-shell", "HIGH", "shell", "downloads and pipes straight into a shell",
      r"(curl|wget)[^\n|]{0,200}\|\s*(sudo\s+)?(ba|z)?sh\b"),
    R("rm-rf-broad", "HIGH", "fs-write", "recursive delete of home/root/variable path",
      r"\brm\s+-[a-z]*r[a-z]*f?[a-z]*\s+(-[a-z]+\s+)*(/|~|\$HOME|\$\{?[A-Z_]+\}?)(\s|/?\*|$)"),
    R("sudo", "MED", "shell", "uses sudo", r"(^|[\s;&|`(])sudo\s+\S"),
    R("chmod-exec", "LOW", "shell", "marks files executable / world-writable", r"\bchmod\s+(\+x|[0-7]*7[0-7]{0,2})\b"),
    R("dyn-exec", "MED", "shell", "dynamic code execution (eval/exec/os.system/shell=True)",
      r"(?<![\w.])(eval\s*\(|exec\s*\(|os\.system\s*\(|subprocess\.[a-z_]+\([^)]*shell\s*=\s*True|execSync\s*\()",
      where="script"),
    R("subprocess", "LOW", "shell", "spawns processes (child_process/subprocess)",
      r"(require\(['\"]child_process['\"]\)|from\s+['\"]child_process['\"]|\bimport\s+subprocess\b)", where="script"),
    R("bang-bash", "MED", "shell", "slash-command runs shell on invoke (!`cmd`)", r"(?:^|\s)!`[^`\n]+`", where="md", flags=re.M),
    R("persistence", "HIGH", "fs-write", "writes to shell rc / launch agents / crontab",
      r"(>>?\s*['\"]?(~|\$HOME|\$\{HOME\})/\.(bashrc|zshrc|profile|bash_profile|zprofile)\b|LaunchAgents/[\w.-]+\.plist|crontab\s+-[er]?\s*$|crontab\s+[\w./-]+\.(txt|cron)\b|/etc/cron\.)", flags=re.I | re.M),
    # network
    R("net-exfil-post", "HIGH", "network", "POSTs data to a remote host",
      r"(curl\s[^\n]*(-d|--data|-F|--form|-T|--upload-file)\s|requests\.post\(|fetch\([^)]*method:\s*['\"]POST|axios\.post\()"),
    R("net-fetch", "LOW", "network", "network fetch (curl/wget/requests/fetch)",
      r"\b(curl|wget)\s+(-[a-zA-Z-]+\s+)*['\"]?https?://|requests\.get\(|urllib\.request|\bfetch\(\s*['\"`]https?://"),
    R("webhook", "MED", "network", "sends to a chat/webhook/paste endpoint",
      r"(hooks\.slack\.com|discord(app)?\.com/api/webhooks|api\.telegram\.org/bot|pastebin\.com|webhook\.site|ngrok\.io|requestbin)"),
    R("raw-ip", "MED", "network", "hard-coded public IP address URL",
      r"https?://(?!(127\.|0\.0\.0\.0|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.))\d{1,3}(\.\d{1,3}){3}(:\d+)?"),
    # secrets
    R("secret-paths", "HIGH", "secrets", "reads credential stores (~/.ssh, ~/.aws, keychain, .env, browser data)",
      r"(~|\$HOME|/Users/[^/\s]+|/home/[^/\s]+)/\.(ssh|aws|gnupg|kube|docker/config|netrc|npmrc|pypirc)\b|"
      r"\bsecurity\s+find-(generic|internet)-password|Login\s+Data|Cookies\.binarycookies|\bcat\s+[^\n]*\.env\b"),
    R("env-dump", "MED", "secrets", "dumps all environment variables",
      r"((^|[;&]\s*|\$\(\s*)(printenv|env)\s*(\||>|$)|json\.dumps\(\s*dict\(\s*os\.environ\s*\)|JSON\.stringify\(process\.env\))", flags=re.I | re.M),
    R("token-literal", "HIGH", "secrets", "hard-coded API key/token",
      r"(\bsk-(ant|proj)-[A-Za-z0-9_-]{20,}|\bsk-[A-Za-z0-9]{32,}|ghp_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,})", flags=0),
    # prompt injection / agent manipulation
    R("inj-override", "HIGH", "injection", "instruction-override phrasing",
      r"(ignore|disregard|forget)\s+(all\s+)?(the\s+)?(previous|prior|above|earlier|system)\s+(instructions|prompts?|rules|messages)", where="md"),
    R("inj-no-confirm", "MED", "injection", "tells the agent to skip confirmation / hide actions from the user",
      r"(without\s+(asking|confirm\w*|permission|telling\s+the\s+user)|do\s+not\s+(tell|inform|notify|ask)\s+the\s+user|don't\s+(tell|ask)\s+the\s+user|silently\s+(run|execute|install|delete|send))", where="md"),
    R("inj-skip-perms", "HIGH", "injection", "disables agent permission checks",
      r"(--dangerously-skip-permissions|bypassPermissions|--yolo\b|dangerouslyDisableSandbox)"),
    R("inj-role", "MED", "injection", "fake system/role markers inside content",
      r"(<\|(system|im_start|im_end)\|>|\[SYSTEM\]|^\s*SYSTEM\s*:|</?(system-reminder|system_prompt)>|new system (directive|instruction|prompt))", where="md", flags=re.M),
    # obfuscation
    R("base64-blob", "MED", "obfuscation", "long base64 blob", r"[A-Za-z0-9+/]{160,}={0,2}", flags=0),
    R("b64-decode-exec", "HIGH", "obfuscation", "decodes base64 and executes",
      r"(base64\s+(-d|--decode)[^\n]*\|\s*(ba|z)?sh|eval\(\s*(atob|Buffer\.from)\(|exec\(\s*base64\.b64decode)"),
]

# Always suspicious: bidi overrides (Trojan Source) and Unicode tag characters (invisible ASCII smuggling).
HIDDEN_UNICODE = re.compile("[\u202a-\u202e\u2066-\u2069\U000e0000-\U000e007f]")
# Zero-width chars are normal in emoji (ZWJ) and Persian/Indic text (ZWNJ); flag only when they sit
# inside ASCII text or come in runs, which is how hidden instructions are usually smuggled.
ZERO_WIDTH = re.compile("(?<=[\x21-\x7e])[\u200b\u200e\u200f\u2060-\u2064\ufeff]+(?=[\x21-\x7e])|[\u200b-\u200f\u2060-\u2064\ufeff]{3,}")
DEFENSIVE = re.compile(r"\b(never|don't|do not|must not|refuse|reject|avoid|block(ed|s)?|banned|forbid\w*|untrusted|"
                       r"not as instructions|treat \w+ as data|e\.g\.|for example|such as|detect\w*|attack\w*|payloads?|"
                       r"malicious|injection|exploit\w*|vulnerab\w*|red.?team|pentest\w*|audit\w*|warn\w*|danger\w*)\b", re.I)
EXAMPLE_TOKEN = re.compile(r"(EXAMPLE|fake|dummy|test|x{4,}|a{6,}|0123456789|your)", re.I)
BIDI_UNICODE = re.compile("[\u202a-\u202e\u2066-\u2069]")  # Trojan Source in code


# --------------------------------------------------------------------------- model

@dataclass
class Finding:
    rule: str
    sev: str
    cap: str
    desc: str
    file: str
    line: int
    snippet: str
    auto_run: bool = False


@dataclass
class Unit:
    """One installable piece: a skill, command, agent, hook set, MCP server or plugin."""
    kind: str
    name: str
    path: str
    files: list[str] = field(default_factory=list)
    findings: list[Finding] = field(default_factory=list)
    caps: set[str] = field(default_factory=set)
    meta: dict = field(default_factory=dict)
    hash: str = ""
    score: int = 100
    verdict: str = "OK"


# --------------------------------------------------------------------------- helpers

def read_text(p: Path) -> str | None:
    try:
        if p.stat().st_size > MAX_FILE_BYTES:
            return None
        data = p.read_bytes()
    except OSError:
        return None
    if b"\x00" in data[:4096]:
        return None
    return data.decode("utf-8", errors="replace")


def walk(root: Path):
    for dirpath, dirnames, filenames in os.walk(root, followlinks=False):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and (INCLUDE_DEV or d not in DEV_DIRS)]
        for f in filenames:
            p = Path(dirpath) / f
            if p.is_symlink():
                continue
            if p.suffix.lower() in TEXT_EXT or f in ("Makefile", "Dockerfile"):
                yield p


def parse_frontmatter(text: str) -> dict:
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
    if not m:
        return {}
    out = {}
    for line in m.group(1).splitlines():
        if ":" in line and not line.startswith((" ", "\t", "-")):
            k, v = line.split(":", 1)
            out[k.strip()] = v.strip().strip("'\"")
    return out


def sha(files: list[Path], root: Path) -> str:
    h = hashlib.sha256()
    for f in sorted(files):
        h.update(str(f.relative_to(root)).encode())
        try:
            h.update(f.read_bytes())
        except OSError:
            pass
    return h.hexdigest()[:16]


def resolve_target(target: str) -> tuple[Path, str]:
    if re.match(r"^(https?://|git@)", target) or re.match(r"^[\w.-]+/[\w.-]+$", target) and not Path(target).exists():
        url = target if "://" in target or target.startswith("git@") else f"https://github.com/{target}"
        name = re.sub(r"\.git$", "", url.rstrip("/").split("/")[-1])
        cache = Path(os.environ.get("SKILLSCAN_CACHE", Path(tempfile.gettempdir()) / "skillscan-cache"))
        dest = cache / re.sub(r"[^\w.-]", "_", url.split("://")[-1])
        if not dest.exists():
            cache.mkdir(parents=True, exist_ok=True)
            print(f"cloning {url} ...", file=sys.stderr)
            # --no-checkout of hooks: git never runs repo hooks on clone; we only read files.
            subprocess.run(["git", "clone", "--depth", "1", "--quiet", url, str(dest)], check=True)
        return dest, name
    p = Path(target).expanduser().resolve()
    if not p.exists():
        sys.exit(f"skillscan: no such path: {target}")
    return p, p.name


# --------------------------------------------------------------------------- discovery

def discover(root: Path) -> list[Unit]:
    units: list[Unit] = []
    claimed: set[Path] = set()

    # Skills: any directory containing SKILL.md
    skill_dirs = sorted({p.parent for p in root.rglob("SKILL.md")
                         if not (set(p.relative_to(root).parts) & (SKIP_DIRS | (set() if INCLUDE_DEV else DEV_DIRS)))})
    # Only outermost? No: nested skills are distinct units; inner dirs claim their own files first.
    for d in sorted(skill_dirs, key=lambda x: -len(x.parts)):
        files = [f for f in walk(d) if f not in claimed]
        claimed.update(files)
        fm = parse_frontmatter(read_text(d / "SKILL.md") or "")
        units.append(Unit("skill", fm.get("name") or d.name, str(d.relative_to(root)) or ".",
                          [str(f) for f in files], meta={"allowed-tools": fm.get("allowed-tools", "")}))

    # Commands and agents: markdown under commands/ or agents/ dirs
    for kind, dirname in (("command", "commands"), ("agent", "agents")):
        for f in walk(root):
            if f in claimed or f.suffix != ".md" or dirname not in f.relative_to(root).parts[:-1]:
                continue
            claimed.add(f)
            fm = parse_frontmatter(read_text(f) or "")
            units.append(Unit(kind, fm.get("name") or f.stem, str(f.relative_to(root)), [str(f)],
                              meta={"allowed-tools": fm.get("allowed-tools") or fm.get("tools", "")}))

    # Hooks: hooks.json, settings*.json with "hooks", and files under hooks/
    hook_files = []
    for f in walk(root):
        if f in claimed:
            continue
        rel = f.relative_to(root)
        parts = rel.parts[:-1]
        # Agent hooks only: hooks.json, or a hooks/ dir inside .claude/ or next to a plugin manifest.
        # (Avoids counting React-style src/hooks/ in app repos.)
        in_agent_hooks = "hooks" in parts and (
            ".claude" in parts
            or (root.joinpath(*parts[:parts.index("hooks")]) / ".claude-plugin").is_dir()
            or (root.joinpath(*parts[:parts.index("hooks") + 1]) / "hooks.json").is_file())
        if f.name == "hooks.json" or in_agent_hooks:
            hook_files.append(f)
        elif f.suffix == ".json" and f.name.startswith("settings"):
            t = read_text(f) or ""
            if '"hooks"' in t:
                hook_files.append(f)
    if hook_files:
        claimed.update(hook_files)
        units.append(Unit("hooks", "hooks", "(hooks)", [str(f) for f in hook_files]))

    # MCP servers: .mcp.json / mcp.json / claude_desktop_config.json / plugin.json mcpServers
    for f in walk(root):
        if f.suffix != ".json" or not re.search(r"(^\.?mcp\.json$|claude_desktop_config\.json$|plugin\.json$)", f.name):
            continue
        try:
            data = json.loads(read_text(f) or "{}")
        except json.JSONDecodeError:
            continue
        servers = data.get("mcpServers") or data.get("servers") or {}
        if not isinstance(servers, dict):
            continue
        for name, cfg in servers.items():
            units.append(Unit("mcp", name, str(f.relative_to(root)), [str(f)], meta={"config": cfg}))

    # Leftover scripts: belong to "plugin" (repo-level) unit
    rest = [f for f in walk(root) if f not in claimed and f.suffix.lower() in SCRIPT_EXT]
    if rest and not SKILLS_ONLY:
        units.append(Unit("scripts", "loose-scripts", "(other)", [str(f) for f in rest]))
    return units


# --------------------------------------------------------------------------- scanning

FENCE = re.compile(r"^(```|~~~)", re.M)
COMMENT = re.compile(r"^\s*(//|#(?!!)|\*|/\*|<!--)")
DOWNGRADE = {"HIGH": "MED", "MED": "LOW", "LOW": "LOW"}


def fenced_lines(text: str) -> set[int]:
    """1-based line numbers inside ``` fenced blocks of a markdown file."""
    inside, out = False, set()
    for i, line in enumerate(text.splitlines(), 1):
        if FENCE.match(line.lstrip()):
            inside = not inside
            continue
        if inside:
            out.add(i)
    return out


def scan_file(path: Path, root: Path, auto_run: bool) -> list[Finding]:
    text = read_text(path)
    if text is None:
        return []
    rel = str(path.relative_to(root))
    is_md = path.suffix == ".md"
    is_script = path.suffix.lower() in SCRIPT_EXT or path.suffix == ""
    fenced = fenced_lines(text) if is_md else set()
    out = []
    lines = text.splitlines()
    for rule in RULES:
        if rule.where == "md" and not is_md:
            continue
        if rule.where == "script" and not is_script:
            continue
        for m in rule.pattern.finditer(text):
            ln = text.count("\n", 0, m.start()) + 1
            raw = lines[ln - 1] if ln - 1 < len(lines) else ""
            # Code comments describe behaviour; they don't perform it.
            if is_script and COMMENT.match(raw):
                continue
            sev, desc = rule.sev, rule.desc
            if rule.id == "token-literal" and EXAMPLE_TOKEN.search(m.group()):
                continue  # documented example keys (AKIA...EXAMPLE, ghp_fake...)
            if rule.id == "inj-skip-perms" and is_md:
                sev = "MED"  # docs that mention the mode; real use is in scripts/configs
            # Prose that warns about, forbids or describes a pattern is not an instruction to do it.
            if is_md and not auto_run and DEFENSIVE.search(raw):
                sev, desc = "LOW", desc + " (described or warned against)"
                out.append(Finding(rule.id, sev, rule.cap, desc, rel, ln, raw.strip()[:110], auto_run))
                continue
            # "don't do X without asking" is the opposite of an injection.
            if rule.id == "inj-no-confirm" and re.search(r"(n't|\bnot|\bnever|\bonly)\b[^.\n]{0,60}$", text[max(0, m.start() - 80):m.start()], re.I):
                continue
            # Markdown code fences are examples the agent may write, not steps the skill runs.
            # Injection rules keep full weight: the model reads fenced text too.
            if ln in fenced and rule.cap not in ("injection",) and not auto_run:
                sev, desc = DOWNGRADE[sev], desc + " (in code example)"
            out.append(Finding(rule.id, sev, rule.cap, desc, rel, ln, raw.strip()[:110], auto_run))
            if len(out) > 400:
                break
    textual = is_md or path.suffix in (".json", ".yaml", ".yml", ".txt")
    hits = list(HIDDEN_UNICODE.finditer(text)) if textual else list(BIDI_UNICODE.finditer(text))
    if textual:
        hits += list(ZERO_WIDTH.finditer(text))
    for m in sorted(hits, key=lambda m: m.start()):
        if m.start() == 0 and m.group() == "\ufeff":
            continue  # UTF-8 BOM at file start is harmless
        ln = text.count("\n", 0, m.start()) + 1
        out.append(Finding("hidden-unicode", "HIGH", "injection",
                           f"invisible/bidi unicode U+{ord(m.group()[0]):04X} (text the user can't see)",
                           rel, ln, repr(lines[ln - 1][:80]) if ln - 1 < len(lines) else "", auto_run))
        break
    return out


def scan_allowed_tools(u: Unit) -> list[Finding]:
    at = str(u.meta.get("allowed-tools") or "")
    if not at:
        return []
    out = []
    if re.search(r"\bBash\b(?!\()|Bash\(\s*\*\s*\)|Bash\(\s*\*\s*:", at):
        if u.kind == "agent":  # subagent `tools:` grants access; normal permission prompts still apply
            out.append(Finding("tools-bash-any", "MED", "shell", "subagent has unrestricted Bash", u.path, 1, f"tools: {at[:90]}"))
        else:
            out.append(Finding("tools-bash-any", "HIGH", "shell", "pre-approves unrestricted Bash", u.path, 1, f"allowed-tools: {at[:90]}"))
    elif "Bash(" in at:
        out.append(Finding("tools-bash-scoped", "LOW", "shell", "pre-approves scoped Bash", u.path, 1, f"allowed-tools: {at[:90]}"))
    if re.search(r"\b(Write|Edit|MultiEdit)\b", at):
        out.append(Finding("tools-write", "LOW", "fs-write", "pre-approves file writes", u.path, 1, f"allowed-tools: {at[:90]}"))
    if re.search(r"\bWebFetch\b|\bWebSearch\b", at):
        out.append(Finding("tools-web", "LOW", "network", "pre-approves web access", u.path, 1, f"allowed-tools: {at[:90]}"))
    return out


def scan_mcp(u: Unit) -> list[Finding]:
    cfg = u.meta.get("config") or {}
    out = []
    cmd = " ".join([str(cfg.get("command", ""))] + [str(a) for a in cfg.get("args", []) or []])
    url = str(cfg.get("url", ""))
    loc = u.path
    if url:
        out.append(Finding("mcp-remote", "MED", "network", f"remote MCP server {url[:60]}", loc, 1, url[:110]))
    if re.search(r"\b(npx|uvx|bunx|pipx\s+run)\b", cmd):
        pinned = re.search(r"@\d+\.\d+|==\d", cmd)
        out.append(Finding("mcp-unpinned" if not pinned else "mcp-pkg", "MED" if not pinned else "LOW", "shell",
                           "MCP server fetched from a package registry at launch" + ("" if pinned else " (unpinned version)"),
                           loc, 1, cmd[:110]))
    if re.search(r"\b(docker)\b.*--privileged|-v\s+/:/", cmd):
        out.append(Finding("mcp-docker-priv", "HIGH", "shell", "privileged docker / host root mount", loc, 1, cmd[:110]))
    env = cfg.get("env") or {}
    for k, v in env.items() if isinstance(env, dict) else []:
        if re.search(r"(KEY|TOKEN|SECRET|PASSWORD)", k, re.I) and v and not str(v).startswith("${"):
            out.append(Finding("mcp-inline-secret", "HIGH", "secrets", f"secret inlined in MCP env ({k})", loc, 1, f"{k}=***"))
    if cmd.strip():
        u.caps.add("shell")
    return out


def score_unit(u: Unit) -> None:
    deduct = 0.0
    by_rule: dict[str, list[Finding]] = {}
    for f in u.findings:
        by_rule.setdefault(f.rule, []).append(f)
    for rule, fs in by_rule.items():
        w = SEV_WEIGHT[fs[0].sev]
        if any(f.auto_run for f in fs):
            w *= 1.5  # hooks run with no prompt
        deduct += w * min(2.0, 1 + 0.25 * math.log2(len(fs)))
    u.score = max(0, round(100 - deduct))
    has_auto_high = any(f.sev == "HIGH" and f.auto_run for f in u.findings)
    if u.score < 40 or has_auto_high:
        u.verdict = "BLOCK"
    elif u.score < 75:
        u.verdict = "REVIEW"
    else:
        u.verdict = "OK"


def scan(root: Path) -> list[Unit]:
    units = discover(root)
    for u in units:
        files = [Path(f) for f in u.files]
        auto = u.kind == "hooks"
        if u.kind != "mcp":
            for f in files:
                u.findings.extend(scan_file(f, root, auto))
        u.findings.extend(scan_allowed_tools(u))
        if u.kind == "mcp":
            u.findings.extend(scan_mcp(u))
        if u.kind == "hooks":
            u.caps.add("hooks")
        u.caps.update(f.cap for f in u.findings if f.cap not in ("injection", "obfuscation"))
        if any(f.cap == "injection" for f in u.findings):
            u.caps.add("injection-surface")
        if any(f.cap == "obfuscation" for f in u.findings):
            u.caps.add("obfuscation")
        if u.kind == "mcp":
            u.caps.add("mcp")
            u.hash = hashlib.sha256(json.dumps(u.meta.get("config"), sort_keys=True).encode()).hexdigest()[:16]
        else:
            u.hash = sha(files, root)
        u.files = [str(Path(f).relative_to(root)) for f in u.files]
        score_unit(u)
    return units


def overall(units: list[Unit]) -> tuple[int, str]:
    if not units:
        return 100, "OK"
    # Bundle score: worst units dominate, but one bad unit in 80 doesn't zero the bundle.
    scores = sorted(u.score for u in units)
    worst = scores[: max(1, math.ceil(len(scores) * 0.2))]
    s = round(0.6 * (sum(worst) / len(worst)) + 0.4 * (sum(scores) / len(scores)))
    if any(u.verdict == "BLOCK" for u in units) and s >= 40:
        return s, "REVIEW" if s >= 60 else "BLOCK"
    return s, "BLOCK" if s < 40 else "REVIEW" if s < 75 else "OK"


# --------------------------------------------------------------------------- output

C = {"HIGH": "\033[31m", "MED": "\033[33m", "LOW": "\033[36m", "OK": "\033[32m", "REVIEW": "\033[33m",
     "BLOCK": "\033[31m", "dim": "\033[2m", "b": "\033[1m", "0": "\033[0m"}


def col(k, s, on):
    return f"{C[k]}{s}{C['0']}" if on else s


def report(name: str, units: list[Unit], per_unit: bool, min_sev: str, top: int, color: bool) -> str:
    s, v = overall(units)
    kinds = {}
    for u in units:
        kinds[u.kind] = kinds.get(u.kind, 0) + 1
    caps = sorted(set().union(*[u.caps for u in units])) if units else []
    out = []
    summary = ", ".join(f"{n} {k}{'s' if n != 1 and not k.endswith('s') else ''}" for k, n in sorted(kinds.items()))
    out.append(col("b", f"{name}", color) + f"  ({summary or 'nothing found'})")
    out.append(f"TRUST {col(v, f'{s}/100  {v}', color)}")
    allcaps = ["shell", "network", "fs-write", "secrets", "hooks", "mcp", "injection-surface", "obfuscation"]
    out.append("Capabilities: " + "  ".join(f"{c} {'✔' if c in caps else '✗'}" for c in allcaps))
    dist = {k: sum(1 for u in units if u.verdict == k) for k in ("OK", "REVIEW", "BLOCK")}
    out.append(f"Units: {col('OK', str(dist['OK']) + ' ok', color)}  {col('REVIEW', str(dist['REVIEW']) + ' review', color)}  {col('BLOCK', str(dist['BLOCK']) + ' block', color)}")
    out.append("")
    fs = [f for u in units for f in u.findings if SEV_ORDER[f.sev] >= SEV_ORDER[min_sev]]
    # dedupe by (rule,file) for the top list, highest severity first, auto-run first
    seen, ranked = set(), []
    for f in sorted(fs, key=lambda f: (-SEV_ORDER[f.sev], not f.auto_run, f.rule, f.file, f.line)):
        if (f.rule, f.file) in seen:
            continue
        seen.add((f.rule, f.file))
        ranked.append(f)
    for f in ranked[:top]:
        tag = " [auto-run]" if f.auto_run else ""
        out.append(f"  {col(f.sev, f'{f.sev:<4}', color)}  {f.file}:{f.line}  {f.desc}{tag}")
        if f.snippet:
            out.append(col("dim", f"        {f.snippet}", color))
    if len(ranked) > top:
        out.append(col("dim", f"  ... {len(ranked) - top} more (use --top N or --json)", color))
    if per_unit:
        out.append("")
        out.append("Per unit (worst first):")
        for u in sorted(units, key=lambda u: (u.score, u.name)):
            out.append(f"  {col(u.verdict, f'{u.score:>3} {u.verdict:<6}', color)} {u.kind:<8} {u.name}  "
                       + col("dim", ",".join(sorted(u.caps)) or "-", color))
    return "\n".join(out)


def to_json(name: str, units: list[Unit]) -> dict:
    s, v = overall(units)
    return {"target": name, "scanner": f"skillscan {VERSION}", "score": s, "verdict": v,
            "units": [{**{k: getattr(u, k) for k in ("kind", "name", "path", "hash", "score", "verdict")},
                       "caps": sorted(u.caps), "findings": [asdict(f) for f in u.findings]} for u in units]}


# --------------------------------------------------------------------------- lock / check

def unit_key(u: Unit) -> str:
    return f"{u.kind}:{u.path}:{u.name}"


def make_lock(name: str, units: list[Unit]) -> dict:
    return {"version": 1, "scanner": f"skillscan {VERSION}", "target": name,
            "units": {unit_key(u): {"hash": u.hash, "score": u.score, "verdict": u.verdict, "caps": sorted(u.caps)}
                      for u in units}}


def check_lock(units: list[Unit], lock: dict) -> list[str]:
    problems = []
    approved = lock.get("units", {})
    current = {unit_key(u): u for u in units}
    for k, u in current.items():
        a = approved.get(k)
        if a is None:
            problems.append(f"NEW        {k}  (score {u.score} {u.verdict}) not in lockfile")
            continue
        if a["hash"] != u.hash:
            gained = sorted(set(u.caps) - set(a["caps"]))
            extra = f"; gained caps: {', '.join(gained)}" if gained else ""
            problems.append(f"CHANGED    {k}  hash {a['hash']} -> {u.hash}{extra}")
        elif u.verdict == "BLOCK" and a["verdict"] != "BLOCK":
            problems.append(f"BLOCKED    {k}")
    for k in approved:
        if k not in current:
            problems.append(f"REMOVED    {k}  (in lockfile, not on disk; info only)")
    return problems


# --------------------------------------------------------------------------- cli

def main(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="skillscan", description="Static trust scanner for agent skills, plugins and MCP servers.")
    ap.add_argument("--version", action="version", version=f"skillscan {VERSION}")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("scan", help="scan a folder or git repo and print a trust report")
    p.add_argument("target")
    p.add_argument("--json", action="store_true")
    p.add_argument("--per-unit", action="store_true", help="list every skill/command/hook/MCP unit with its score")
    p.add_argument("--min-severity", default="LOW", choices=["LOW", "MED", "HIGH"])
    p.add_argument("--top", type=int, default=15)
    p.add_argument("--fail-on", choices=["REVIEW", "BLOCK"], help="exit 1 if verdict is at least this")
    p.add_argument("--include-tests", action="store_true", help="also scan tests/, examples/, .github/ (not shipped to agents)")
    p.add_argument("--skills-only", action="store_true", help="ignore repo code outside skill/command/agent/hook/MCP units")
    p = sub.add_parser("lock", help="write a lockfile approving the current state")
    p.add_argument("target")
    p.add_argument("-o", "--output", default="skills.lock")
    p = sub.add_parser("check", help="CI gate: fail if units are new, changed, or blocked vs the lockfile")
    p.add_argument("target")
    p.add_argument("--lock", default="skills.lock")
    p.add_argument("--json", action="store_true")
    a = ap.parse_args(argv)

    global INCLUDE_DEV, SKILLS_ONLY
    INCLUDE_DEV = getattr(a, "include_tests", False)
    SKILLS_ONLY = getattr(a, "skills_only", False)
    root, name = resolve_target(a.target)
    units = scan(root)
    color = sys.stdout.isatty() and not os.environ.get("NO_COLOR")

    if a.cmd == "scan":
        if a.json:
            print(json.dumps(to_json(name, units), indent=2))
        else:
            print(report(name, units, a.per_unit, a.min_severity, a.top, color))
        _, v = overall(units)
        if a.fail_on and SEV_ORDER.get({"OK": "LOW", "REVIEW": "MED", "BLOCK": "HIGH"}[v], 0) >= SEV_ORDER[{"REVIEW": "MED", "BLOCK": "HIGH"}[a.fail_on]]:
            return 1
        return 0
    if a.cmd == "lock":
        Path(a.output).write_text(json.dumps(make_lock(name, units), indent=2) + "\n")
        print(f"wrote {a.output}: {len(units)} units approved")
        return 0
    if a.cmd == "check":
        try:
            lock = json.loads(Path(a.lock).read_text())
        except FileNotFoundError:
            sys.exit(f"skillscan: lockfile not found: {a.lock}")
        problems = check_lock(units, lock)
        blocking = [p for p in problems if not p.startswith("REMOVED")]
        if a.json:
            print(json.dumps({"ok": not blocking, "problems": problems}, indent=2))
        else:
            for p in problems:
                print(p)
            print(f"\nskillscan check: {'PASS' if not blocking else 'FAIL'} ({len(units)} units, {len(blocking)} problems)")
        return 1 if blocking else 0
    return 2


if __name__ == "__main__":
    sys.exit(main())
