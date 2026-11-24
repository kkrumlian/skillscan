# skillscan

Static trust scanner for agent skills, plugins and MCP servers: Claude Code skills, slash commands, subagents, hooks and `.mcp.json`. It reads files only and never runs anything from the target.

It needs Python 3.10+ and has no dependencies. Git is needed only to scan a repo URL.

## Use

```bash
# Before installing: what can this bundle do to my machine?
./skillscan.py scan owner/repo                               # owner/repo, git URL or local path
./skillscan.py scan ~/.claude/skills --per-unit              # every skill with its own score
./skillscan.py scan ./plugin --json                          # machine-readable
./skillscan.py scan ./plugin --fail-on BLOCK                 # exit 1 if blocked
./skillscan.py scan owner/app-repo --skills-only             # ignore app code outside skills/hooks/MCP

# Team approval + CI gate
./skillscan.py lock .claude/skills -o skills.lock            # approve the current state
./skillscan.py check .claude/skills --lock skills.lock       # exit 1 on new / changed skills
```

CI (GitHub Actions):
```yaml
- run: python3 tools/skillscan.py check .claude --lock skills.lock
```

## What it checks

| Area | Examples |
|---|---|
| Shell | `allowed-tools: Bash` (unrestricted), `!`cmd`` in commands, `curl \| sh`, broad recursive deletes, sudo, eval/exec, shell rc / LaunchAgent persistence |
| Network | curl/wget/fetch, POSTs to remote hosts, webhook/paste endpoints, raw-IP URLs, remote MCP servers |
| Secrets | reads of `~/.ssh`, `~/.aws`, keychain, `.env`; env dumps; hard-coded tokens; secrets inlined in MCP `env` |
| Prompt injection | "ignore previous instructions", "without asking the user", fake system tags, invisible/bidi unicode |
| Obfuscation | long base64 blobs, decode-and-exec |
| Hooks | Everything in hooks is weighted 1.5x and tagged `[auto-run]`, because hooks run with no prompt. |
| MCP | unpinned `npx`/`uvx` packages, privileged docker, remote URLs |

**Scoring.** Each unit (skill, command, agent, hook set or MCP server) starts at 100 and loses points for each distinct finding: 20 for HIGH, 8 for MED and 2 for LOW, with less weight for repeats. A score of 75 or more is OK, 40 to 74 is REVIEW, and below 40 is BLOCK. Any HIGH finding in an auto-run hook is a BLOCK. The bundle score blends the worst 20% of units with the average.

**Noise control.** `tests/`, `examples/`, `.github/` and `evals/` are skipped because they don't ship to agents (`--include-tests` scans them too). Code comments are ignored, and so is negated phrasing like "don't do X without asking". Findings inside markdown code fences drop one severity. Injection findings are the exception, because the model reads fenced text too.

## Site and daily scan

`site/` is a static ranking dashboard (trust scores, filters, per-bundle pages and pattern charts) served on GitHub Pages. `.github/workflows/daily-scan.yml` runs every day at 06:17 UTC. It does the following:

1. runs the unit tests,
2. re-scans every repo in `targets/repos.txt` with `scripts/scan_all.sh` (shallow clone, static scan, delete; nothing is executed),
3. rebuilds `site/data/bundles.*` with fresh stars and scores, and
4. deploys the site to Pages.

Raw per-repo scan output stays in the runner and is never committed. To add or remove a tracked repo, edit `targets/repos.txt`. See `site/README.md` to run the site locally.

## Report

`report/REPORT.md` (and `REPORT.html`) is "We scanned 100 popular AI agent skill bundles": aggregate results over 100 public repos and 9,535 units, with a hand-checked precision sample. The data is in `report/data/`. To rebuild the HTML, run `python3 report/build_html.py`.

## Demo

`demo/lock-check.txt` shows the CI gate passing on an approved skill set, then failing when a new skill is added and an approved one gains network access.

## Known limits (MVP)

- It uses regex heuristics. Security-research skills describe attacks, so they score lower by nature. Read the findings, not just the number.
- Sandboxed execution, LLM semantic review, the cross-tool compatibility matrix and the hosted registry are v2.

## Tests

```bash
python3 -m unittest discover -s tests -v
```
