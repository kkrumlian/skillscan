#!/usr/bin/env python3
"""Build site/data/bundles.json from raw skillscan outputs.

Default output is ANONYMIZED: no repo names, links, exact stars, file paths or snippets.
Pass --names to include them (only do this once you've decided to publish named rankings).

Usage:
  python3 site/build_data.py [--names] [--src ../skill-scanner-private]
"""
import argparse
import datetime
import json
import os
import statistics
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
DEFAULT_SRC = HERE.parent.parent / "skill-scanner-private"

# Hand-assigned categories (from each repo's description). Unlisted repos fall back to "Other".
CATEGORY = {
    "Dev workflow": ["obra/superpowers", "addyosmani/agent-skills", "DietrichGebert/ponytail", "JuliusBrussee/caveman",
                     "ayghri/i-have-adhd", "shanraisshan/claude-code-best-practice", "luongnv89/claude-howto",
                     "alibaba/open-code-review", "tirth8205/code-review-graph", "OthmanAdi/planning-with-files",
                     "Jeffallan/claude-skills", "google/elephant-goldfish-model", "jarrodwatts/claude-hud",
                     "Egonex-AI/Understand-Anything", "nidhinjs/prompt-master", "Donchitos/Claude-Code-Game-Studios",
                     "gamedev-skills/awesome-gamedev-agent-skills", "Jakeschincariol/replica-skill",
                     "JCodesMore/ai-website-cloner-template", "android/skills", "google/skills", "googleworkspace/cli"],
    "Design & UI": ["Leonxlnx/taste-skill", "nextlevelbuilder/ui-ux-pro-max-skill", "cathrynlavery/diagram-design",
                    "emilkowalski/skills", "zarazhangrui/frontend-slides", "op7418/guizang-ppt-skill", "ibelick/ui-skills",
                    "miqdadbadjuber/anti-slop", "Agents365-ai/drawio-skill", "DayuanJiang/next-ai-draw-io",
                    "img2threejs/img2threejs", "ChenLiu-1996/figures4papers"],
    "Security": ["mukul975/Anthropic-Cybersecurity-Skills", "elementalsouls/Claude-BugHunter", "SnailSploit/Claude-Red",
                 "NVIDIA/SkillSpector"],
    "Research & writing": ["mvanhorn/last30days-skill", "Imbad0202/academic-research-skills", "blader/humanizer",
                           "wanshuiyin/Auto-claude-code-research-in-sleep", "Orchestra-Research/AI-Research-SKILLs",
                           "HKUSTDial/Supervisor-Skills", "virgiliojr94/book-to-skill", "yusufkaraaslan/Skill_Seekers",
                           "alchaincyf/nuwa-skill", "titanwings/distilly", "alchaincyf/zhangxuefeng-skill",
                           "teng-lin/notebooklm-py", "microsoft/SkillOpt", "obsidianmd/obsidian-skills",
                           "AgriciDaniel/claude-obsidian"],
    "Marketing & business": ["coreyhaines31/marketingskills", "AgriciDaniel/claude-seo", "AgriciDaniel/claude-ads",
                             "phuryn/pm-skills", "Ryze-AI-Adgent/open-seo-mcp-skills", "ai-job-search-dev/ai-job-search",
                             "latent-spaces/brag"],
    "Memory & context": ["rtk-ai/rtk", "headroomlabs-ai/headroom", "mksglu/context-mode", "MemoriLabs/Memori",
                         "EverMind-AI/EverOS", "NevaMind-AI/memU", "MemTensor/MemOS", "affaan-m/ECC"],
    "Media & content": ["JuneYaooo/rea-video", "kajisho5/ffmpeg-skill", "dreammis/social-auto-upload",
                        "JimLiu/baoyu-skills", "KKKKhazix/khazix-skills", "ConardLi/garden-skills"],
    "Browser & devices": ["browser-use/browser-harness", "citrolabs/ego-lite", "Panniantong/Agent-Reach",
                          "mobile-next/mobile-mcp"],
    "Collections": ["ComposioHQ/awesome-claude-skills", "composio-community/awesome-codex-skills", "github/awesome-copilot",
                    "alirezarezvani/claude-skills", "wshobson/agents", "anthropics/skills",
                    "anthropics/claude-plugins-official", "asgeirtj/system_prompts_leaks"],
    "Apps & harnesses": ["shareAI-lab/learn-claude-code", "herdrdev/herdr", "zhayujie/CowAgent", "Wei-Shaw/sub2api",
                         "chatboxai/chatbox", "agentscope-ai/QwenPaw", "alibaba/nacos", "decolua/9router",
                         "nanocoai/nanoclaw", "kubesphere/kubesphere", "genspark-ai/genoffice", "aden-hive/hive",
                         "tigerless-labs/autoharness", "mcp-use/mcp-use"],
}
REPO_CAT = {r: c for c, rs in CATEGORY.items() for r in rs}

RULE_LABEL = {
    "tools-bash-any": "Unrestricted Bash granted", "tools-bash-scoped": "Scoped Bash granted",
    "tools-write": "File writes pre-approved", "tools-web": "Web access pre-approved",
    "pipe-to-shell": "curl | sh installer", "rm-rf-broad": "Broad recursive delete", "sudo": "Uses sudo",
    "chmod-exec": "chmod +x", "dyn-exec": "eval / exec / shell=True", "subprocess": "Spawns processes",
    "bang-bash": "Shell runs on command invoke", "persistence": "Shell rc / cron / LaunchAgent write",
    "net-exfil-post": "Sends data to remote host", "net-fetch": "Network fetch", "webhook": "Webhook / paste endpoint",
    "raw-ip": "Public IP URL", "secret-paths": "Credential-store paths", "env-dump": "Dumps environment",
    "token-literal": "Token-shaped literal", "inj-override": "Instruction-override phrasing",
    "inj-no-confirm": "\"Without asking\" phrasing", "inj-skip-perms": "Permission bypass",
    "inj-role": "Fake role markers", "hidden-unicode": "Hidden unicode", "base64-blob": "Base64 blob",
    "b64-decode-exec": "Decode-and-execute", "mcp-remote": "Remote MCP server", "mcp-unpinned": "Unpinned MCP package",
    "mcp-pkg": "Pinned MCP package", "mcp-docker-priv": "Privileged docker MCP", "mcp-inline-secret": "Secret in MCP env",
}


def _scan_date(src: Path) -> str:
    stamp = src / "scan_date.txt"
    if stamp.exists():
        return stamp.read_text().strip()
    return datetime.date.today().isoformat()


def stars_bucket(n: int) -> str:
    for lo, label in ((200_000, "200k+"), (100_000, "100k–200k"), (50_000, "50k–100k"), (25_000, "25k–50k"),
                      (10_000, "10k–25k")):
        if n >= lo:
            return label
    return "<10k"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--names", action="store_true", help="include repo names, links, stars and findings detail")
    ap.add_argument("--src", default=str(DEFAULT_SRC))
    a = ap.parse_args()
    src = Path(a.src)

    stars, meta = {}, {}
    for line in (src / "selected.tsv").read_text().splitlines():
        st, name, *_ = line.split("\t")
        stars[name] = int(st)
    for line in (src / "meta.tsv").read_text().splitlines():
        parts = line.split("\t")
        meta[parts[0]] = {"description": parts[1] if len(parts) > 1 else "", "license": parts[3] if len(parts) > 3 else ""}

    bundles = []
    for f in sorted((src / "scans").glob("*.json")):
        d = json.loads(f.read_text())
        repo = f.stem.replace("_", "/", 1)
        units = d["units"]
        kinds = Counter(u["kind"] for u in units)
        caps = sorted(set().union(*[set(u["caps"]) for u in units])) if units else []
        rules = Counter()
        sev = Counter()
        for u in units:
            for x in u["findings"]:
                sev[x["sev"]] += 1
                if x["sev"] != "LOW":
                    rules[x["rule"]] += 1
        b = {
            "category": REPO_CAT.get(repo, "Other"),
            "score": d["score"], "verdict": d["verdict"],
            "units": len(units), "skills": kinds.get("skill", 0), "commands": kinds.get("command", 0),
            "agents": kinds.get("agent", 0), "hooks": kinds.get("hooks", 0), "mcp": kinds.get("mcp", 0),
            "unit_verdicts": dict(Counter(u["verdict"] for u in units)),
            "clean_units": sum(1 for u in units if not u["findings"]),
            "caps": caps, "sev": dict(sev),
            "rules": [{"rule": k, "label": RULE_LABEL.get(k, k), "count": n} for k, n in rules.most_common()],
            "stars_bucket": stars_bucket(stars.get(repo, 0)),
            "_stars": stars.get(repo, 0), "_repo": repo,
        }
        if a.names:
            sha = (src / "scans" / (f.name + ".sha"))
            b.update({
                "repo": repo, "url": f"https://github.com/{repo}", "stars": stars.get(repo, 0),
                "description": meta.get(repo, {}).get("description", ""), "license": meta.get(repo, {}).get("license", ""),
                "commit": sha.read_text().strip() if sha.exists() else "",
                "top_findings": sorted(
                    [{"rule": x["rule"], "label": RULE_LABEL.get(x["rule"], x["rule"]), "sev": x["sev"],
                      "file": x["file"], "line": x["line"], "auto_run": x["auto_run"]}
                     for u in units for x in u["findings"] if x["sev"] != "LOW"],
                    key=lambda x: ({"HIGH": 0, "MED": 1}[x["sev"]], x["rule"], x["file"]))[:25],
                "worst_units": [{"kind": u["kind"], "name": u["name"], "score": u["score"], "verdict": u["verdict"]}
                                for u in sorted(units, key=lambda u: u["score"])[:8] if u["score"] < 100],
            })
        bundles.append(b)

    # Stable anonymous ids: ordered by category then a hash-free shuffle (score, units) so ids don't leak star rank.
    bundles.sort(key=lambda b: (b["category"], -b["score"], b["units"], b["_repo"]))
    per_cat = Counter()
    for b in bundles:
        per_cat[b["category"]] += 1
        b["id"] = f"{b['category'][:3].upper()}-{per_cat[b['category']]:02d}"
        b["label"] = b.get("repo") or f"{b['category']} bundle #{per_cat[b['category']]}"
        del b["_stars"], b["_repo"]
    bundles.sort(key=lambda b: (-b["score"], b["id"]))

    scores = [b["score"] for b in bundles]
    total_units = sum(b["units"] for b in bundles)
    summary = {
        "named": a.names,
        "scan_date": os.environ.get("SCAN_DATE") or _scan_date(src),
        "scanner": "skillscan 0.1.0",
        "bundles": len(bundles),
        "units": total_units,
        "clean_units": sum(b["clean_units"] for b in bundles),
        "median_score": statistics.median(scores),
        "verdicts": dict(Counter(b["verdict"] for b in bundles)),
        "caps": dict(Counter(c for b in bundles for c in b["caps"])),
        "kinds": {k: sum(b[k] for b in bundles) for k in ("skills", "commands", "agents", "hooks", "mcp")},
        "rules": [{"rule": k, "label": RULE_LABEL.get(k, k), "bundles": n}
                  for k, n in Counter(r["rule"] for b in bundles for r in b["rules"]).most_common()],
        "categories": dict(Counter(b["category"] for b in bundles)),
    }
    out = HERE / "data" / "bundles.json"
    out.parent.mkdir(exist_ok=True)
    payload = json.dumps({"summary": summary, "bundles": bundles}, indent=1, ensure_ascii=False)
    out.write_text(payload)
    # Same data as a script so the site also works from file:// (no server needed).
    (out.parent / "bundles.js").write_text("window.SKILLSCAN_DATA = " + payload + ";\n")
    print(f"wrote {out} ({'NAMED' if a.names else 'anonymized'}, {len(bundles)} bundles)")


if __name__ == "__main__":
    main()
