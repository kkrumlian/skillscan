#!/usr/bin/env python3
"""Aggregate skillscan --json outputs into report stats (stats.json).

Usage: aggregate.py <json_dir> <selected.tsv> <out_stats.json>
"""
import json
import statistics
import sys
from collections import Counter, defaultdict
from pathlib import Path

jdir, sel, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
stars = {}
for line in sel.read_text().splitlines():
    st, name, *_ = line.split("\t")
    stars[name] = int(st)

repos = []
for f in sorted(jdir.glob("*.json")):
    try:
        d = json.loads(f.read_text())
    except json.JSONDecodeError:
        continue
    name = f.stem.replace("_", "/", 1)
    d["repo"] = name
    d["stars"] = stars.get(name, 0)
    sha = f.with_suffix(".json.sha")
    d["sha"] = sha.read_text().strip() if sha.exists() else ""
    repos.append(d)

units = [u for r in repos for u in r["units"]]
kinds = Counter(u["kind"] for u in units)
repo_verdicts = Counter(r["verdict"] for r in repos)
unit_verdicts = Counter(u["verdict"] for u in units)

# capability prevalence per repo
cap_repos = Counter()
for r in repos:
    caps = set().union(*[set(u["caps"]) for u in r["units"]]) if r["units"] else set()
    cap_repos.update(caps)

# rule prevalence: repos and units with >=1 finding, by effective severity
rule_repos, rule_units, rule_findings = Counter(), Counter(), Counter()
rule_sev = defaultdict(Counter)
rule_desc = {}
examples = defaultdict(list)
for r in repos:
    seen_r = set()
    for u in r["units"]:
        seen_u = set()
        for fd in u["findings"]:
            k = fd["rule"]
            rule_findings[k] += 1
            rule_sev[k][fd["sev"]] += 1
            rule_desc.setdefault(k, fd["desc"].replace(" (in code example)", ""))
            if k not in seen_u:
                rule_units[k] += 1
                seen_u.add(k)
            if k not in seen_r:
                rule_repos[k] += 1
                seen_r.add(k)
            if len(examples[k]) < 40:
                examples[k].append({"repo": r["repo"], "stars": r["stars"], "unit": u["kind"], "file": fd["file"],
                                    "line": fd["line"], "sev": fd["sev"], "snippet": fd["snippet"], "auto_run": fd["auto_run"]})

# focused stats
skill_units = [u for u in units if u["kind"] == "skill"]
skills_bash_any = sum(1 for u in skill_units if any(fd["rule"] == "tools-bash-any" for fd in u["findings"]))
skills_with_allowed = sum(1 for u in skill_units if any(fd["rule"].startswith("tools-") for fd in u["findings"]))
hook_units = [u for u in units if u["kind"] == "hooks"]
hooks_network = sum(1 for u in hook_units if "network" in u["caps"])
hooks_auto_high = sum(1 for u in hook_units if any(fd["auto_run"] and fd["sev"] == "HIGH" for fd in u["findings"]))
mcp_units = [u for u in units if u["kind"] == "mcp"]
mcp_unpinned = sum(1 for u in mcp_units if any(fd["rule"] == "mcp-unpinned" for fd in u["findings"]))
mcp_remote = sum(1 for u in mcp_units if any(fd["rule"] == "mcp-remote" for fd in u["findings"]))
mcp_secret = sum(1 for u in mcp_units if any(fd["rule"] == "mcp-inline-secret" for fd in u["findings"]))
clean_units = sum(1 for u in units if not u["findings"])

stats = {
    "repos": len(repos),
    "stars_total": sum(r["stars"] for r in repos),
    "stars_median": statistics.median([r["stars"] for r in repos]) if repos else 0,
    "units": len(units),
    "units_by_kind": dict(kinds),
    "units_per_repo_median": statistics.median([len(r["units"]) for r in repos]) if repos else 0,
    "repo_verdicts": dict(repo_verdicts),
    "unit_verdicts": dict(unit_verdicts),
    "clean_units": clean_units,
    "repo_score_median": statistics.median([r["score"] for r in repos]) if repos else 0,
    "cap_repos": dict(cap_repos),
    "rules": {k: {"desc": rule_desc[k], "repos": rule_repos[k], "units": rule_units[k],
                  "findings": rule_findings[k], "sev": dict(rule_sev[k])} for k in rule_findings},
    "skills_total": len(skill_units),
    "skills_bash_any": skills_bash_any,
    "skills_with_allowed_tools_findings": skills_with_allowed,
    "hooks_units": len(hook_units),
    "hooks_network": hooks_network,
    "hooks_auto_high": hooks_auto_high,
    "mcp_units": len(mcp_units),
    "mcp_unpinned": mcp_unpinned,
    "mcp_remote": mcp_remote,
    "mcp_inline_secret": mcp_secret,
    "repo_list": [{"repo": r["repo"], "stars": r["stars"], "sha": r["sha"], "units": len(r["units"]),
                   "score": r["score"], "verdict": r["verdict"]} for r in sorted(repos, key=lambda r: -r["stars"])],
    "examples": examples,
}
out.write_text(json.dumps(stats, indent=2))
print(f"{len(repos)} repos, {len(units)} units -> {out}")
