# We scanned 100 popular AI agent skill bundles. Here's what we found.

*Static scan of 100 public GitHub repositories (4.6M combined stars, 9,535 skills, commands, subagents, hooks and MCP servers) with [skillscan](../README.md) 0.1, November 2026.*

> **Update, 24 Nov 2026:** the scanner now has a fourth verdict, **CAUTION**, for powerful bundles doing something deliberate, such as calling their own documented backend. **BLOCK** is now reserved for exfiltration-like patterns. Re-scanned under the new rules, no bundle is BLOCK. A handful moved to CAUTION, and the rest are OK or REVIEW. The numbers below are from the original scan. The live site has the current verdicts.

## TL;DR

- **We found no malware.** We saw no hidden-instruction smuggling, no real leaked credentials and no obfuscated payloads in auto-run hooks. Every high-severity pattern we checked by hand had a plausible stated purpose.
- **Most of the ecosystem is quiet.** 76% of units (7,209 of 9,535) had no findings at all, and the median bundle scored 94/100.
- **Power is broad, though, and it's rarely disclosed.** 71 of 100 bundles can run shell commands, 55 talk to the network, and 29 ship hooks that run automatically with no prompt. Nothing on a README tells you which.
- **The risky patterns are ordinary ones:** pre-approved unrestricted `Bash` (180 skills and commands in 13 bundles), `curl | sh` install steps (22 bundles), MCP servers pulled at `@latest` (7 of 50), and scripts that launch nested agent sessions with permissions turned off (3 bundles).
- **Regex alone isn't enough.** About a quarter of high-severity hits were text that *describes* or *warns against* a pattern, which is common in security skills. That's the gap a trust layer has to close.

## Why we did this

Skill and plugin bundles are the fastest-growing part of the agent ecosystem. Some gain thousands of stars a day, and one `install` command can add dozens of skills, hooks and MCP servers to a developer's machine. A skill can pre-approve shell access, a hook runs on every session without asking, and an MCP server can fetch new code at each launch. Today there is no common way to see what a bundle can do before you install it. We wanted a baseline: what do popular bundles actually ask for?

## What we scanned

| | |
|---|---|
| Repositories | 100 |
| Combined GitHub stars | 4,649,976 (median 30.3k) |
| Skills (`SKILL.md`) | 7,108 |
| Subagents | 1,301 |
| Slash commands | 1,047 |
| MCP server configs | 50 |
| Hook sets (auto-run) | 29 |
| Median units per repo | 12 |

**Selection.** We ran GitHub topic searches (`claude-skills`, `claude-code-skills`, `agent-skills`, `claude-code-plugin(s)`, `claude-code`, `skills`) sorted by stars. We kept non-fork, non-archived repos under 150 MB that contain at least one `SKILL.md` or `.claude-plugin` manifest, and took the top 100 by stars. Some are dedicated skill bundles. Others are apps that ship a handful of skills, and for those we scanned only the skill, command, agent, hook and MCP parts (`--skills-only`), not the app code. Test, example and CI folders were skipped because they don't ship to agents. The full list is in the appendix.

**Method.** Each repo was shallow-cloned, scanned read-only and deleted. Nothing from any repo was executed. The scanner is pattern-based (see [what it checks](../README.md#what-it-checks)), and we tuned it once against this corpus to remove known false positives before the final run (details below).

## Results

### Scores

| Verdict | Bundles | Units |
|---|---|---|
| OK (75–100) | 86 | 9,394 |
| REVIEW (40–74) | 12 | 131 |
| BLOCK (<40, or HIGH finding in an auto-run hook) | 2 | 10 |

Bundle scores: median 94, interquartile range 86–99, minimum 20. We read every finding behind the two BLOCK verdicts, and neither looks malicious:

- **A research skill.** It reuses the user's logged-in browser sessions by reading browser cookie stores (after a consent step), pre-approves unrestricted `Bash`, and launches a nested headless agent with permissions bypassed. Each of those has a stated reason. Together they are exactly what a reviewer should see before installing.
- **A browser-automation harness.** Its score is driven by dozens of POST examples in site-specific guides and two `curl | sh` installers, plus two false positives: code that *strips* zero-width characters.

The three large security-research collections, whose whole content is attack technique, scored 83–84 (two OK, one REVIEW). Much of their payload text sits next to words like "attack" or "payload", so it drops to LOW. Their worst units are also diluted across hundreds of units.

### What bundles can do

Share of the 100 bundles where at least one unit has the capability:

| Capability | Bundles |
|---|---|
| Runs shell commands | 71 |
| Network access | 55 |
| Text an agent may read as instructions (injection surface) | 44 |
| Writes files | 34 |
| Auto-run hooks | 29 |
| MCP servers | 19 |
| Touches credential locations (`~/.ssh`, `~/.aws`, browser data) | 17 |
| Encoded or obfuscated content | 9 |

Capabilities aren't risks by themselves. A deploy skill needs a shell. But a developer installing a 100-skill bundle today has no summary like this, and that's the gap.

### Most common risky patterns

Bundles with at least one MEDIUM or HIGH finding of each kind:

| Pattern | Bundles | What it usually was |
|---|---|---|
| "Without asking" or "do not ask the user" phrasing | 31 | Mostly workflow shortcuts ("answer inline without asking"). It's rarely about risky actions, but in one auto-run hook it tells the agent to skip confirmation. |
| `sudo` in instructions | 30 | Install and setup steps for system packages. |
| Pre-approved unrestricted `Bash` | 26 | `allowed-tools: Bash` or `Bash(*)`. That's 180 skills and commands in 13 bundles, plus subagents with full shell access in the rest. |
| Sends data to a remote host (POST/upload) | 26 | API clients (image generation, threat-intel lookups, SaaS integrations). We found no exfiltration. |
| `curl … \| sh` installers | 22 | Setup instructions for CLIs (Bun, Cursor, scanners). Agents will often follow these literally. |
| `eval` / `exec` / `shell=True` | 18 | Mostly launchers and test runners. One remote-admin helper runs a base64-encoded script on a jump host. |
| Credential-store paths | 17 | Mostly forensics and security references. One research skill really reads browser cookie stores, after a consent step. |
| Shell-rc, cron or LaunchAgent writes | 14 | `echo 'export KEY=…' >> ~/.bashrc` setup tips, and forensic path lists. |
| Permission bypass (`bypassPermissions`, `--dangerously-skip-permissions`, `--yolo`) | 9 | In 3 bundles, scripts launch a nested headless agent with permissions off. The rest is documentation, or linters that *detect* the mode. |
| Remote MCP servers | 6 | 13 servers reached over HTTPS. |
| Webhook / paste endpoints | 6 | Slack and Discord notifications in ops skills. |
| MCP packages fetched at `@latest` | 4 | 7 of 50 MCP configs run `npx …@latest` or unpinned `uvx`, so new code arrives on every launch. |

### Things we looked for and didn't find

- **Hidden instructions.** No invisible-unicode smuggling (bidi overrides, tag characters, zero-width runs inside ASCII). The 6 remaining hits are tools that detect, strip or deliberately generate such characters, such as a pseudo-localization helper.
- **Real secrets.** All 10 token-shaped strings are documented fakes (`ghp_abcdef…`, `xoxb-…-secret-token`, `AKIAEXPOSED…`).
- **Malicious hooks.** No auto-run hook downloads and executes remote code. Three hook sets use the network: a security-review hook that calls a model API, a memory plugin that sends session data to its own memory service, and a HEAD request that checks a URL. The memory plugin's behaviour is its purpose, but users should know about it. One hook ships Windows commands as base64 `-EncodedCommand` blobs. We decoded the pattern and found it benign, but it's unreadable to a reviewer.
- **Inline MCP secrets.** No MCP config hard-codes an API key in `env`.

## False positives and what we did about them

We ran the scan three times. After each pass we read samples of findings and fixed rules that fired on harmless text:

| Rule | Problem | Fix |
|---|---|---|
| Hidden unicode | Fired on emoji (ZWJ) and Persian/Hindi text (ZWNJ) | Flag only bidi and tag characters, or zero-width characters inside ASCII text |
| Hard-coded tokens | Fired on documented example keys | Skip `EXAMPLE`, `fake`, `test` and repeated-character keys |
| Persistence | Matched C# `=> u.Profile` and prose about LaunchAgents | Require an actual append to a home-dir rc file, a `.plist`, or a crontab edit |
| Raw IP URLs | 69% were `127.0.0.1` / private ranges | Public IPs only |
| Fake role markers | Matched `System: [name]` templates | Only real chat-template tokens (`<\|im_start\|>`, `<system-reminder>`, "new system directive") |
| Env dumps | Matched table cells and regexes | Only `env` / `printenv` used as a command, or full `os.environ` serialization |
| Warnings in prose | "Never run `curl \| sh`" was flagged as `curl \| sh` | Lines that warn, forbid or describe attacks drop to LOW |
| Code comments | Comments describing a risk were flagged | Ignored in scripts |

Between the first and final pass, HIGH hidden-unicode hits fell from 59 to 6, token hits from 51 to 10, and MEDIUM+ raw-IP hits from 282 to 15.

**Precision check.** We drew a random sample of 60 of the 670 final HIGH findings (seed 7) and labeled each by hand:

| Label | Count | Share |
|---|---|---|
| Accurate: the skill really does this | 44 | 73% |
| Descriptive: text explains, quotes or warns about the pattern | 15 | 25% |
| Wrong match | 1 | 2% |

Of the 44 accurate findings, **none looked malicious**. They were API clients, security tools doing their job, installers and broad tool grants. "Accurate" means "this skill has this power", not "this skill is dangerous".

Security-research skills are the hardest case. Their content is payloads and attack technique, so their individual units often score low. We think that's the right call for a scanner, since the model reads those payloads too. It's also why a single number shouldn't be read without the findings.

## What this suggests

1. **Most bundles would pass a basic gate today.** A `skills.lock` with `skillscan check` in CI would rarely block a popular bundle. Its value is in catching *changes*, such as a new hook, newly pre-approved `Bash`, or an MCP server that starts pulling `@latest`.
2. **Pin your MCP servers.** `@latest` in an MCP config means new code at every session start. Pinning a version is a one-line fix.
3. **Prefer scoped tools.** `Bash(git:*)` instead of `Bash`. In our sample, scoped grants were less common than unrestricted ones (96 scoped grants against 180 unrestricted skill and command grants).
4. **Skill authors should state capabilities.** A short "this skill runs shell, calls api.example.com, and installs X" note in each `SKILL.md` would make review much faster.
5. **Static scanning is a floor, not a ceiling.** It can show what a skill *could* do. Showing what it *does* needs the next steps: sandboxed runs on sample tasks and a semantic (LLM) pass that tells instructions apart from descriptions.

## Limits

- **Sample bias.** These are the 100 most-starred repos matching our topics. Long-tail, unstarred skills, which may be riskier, aren't covered.
- **Static only.** Nothing was executed. Code that downloads more code at runtime is only visible as the download step.
- **Pattern matching.** It can be evaded on purpose, for example by using the defensive-wording downgrade. A determined attacker would need the semantic and sandbox layers to be caught.
- **Snapshot.** Repos were scanned at their default branch HEAD in November 2026, and the commit SHAs are recorded in `data/repos.tsv`.
- **Tuned on this corpus.** The final rules were adjusted after looking at these repos, so the false-positive rate on new repos may be higher.

## Reproduce

```bash
cd skill-scanner
# scan any bundle the same way
./skillscan.py scan <owner/repo> --skills-only --json > out.json
# aggregate a folder of outputs
python3 report/aggregate.py <json_dir> report/data/repos.tsv stats.json
```

The aggregate numbers are in `report/data/aggregate.json`, and the repo list with commit SHAs is in `report/data/repos.tsv`. Per-repo findings aren't published with this report.

## Appendix: repositories scanned

Listed by stars, for transparency only. This report doesn't publish per-repo scores.

[obra/superpowers](https://github.com/obra/superpowers), [affaan-m/ECC](https://github.com/affaan-m/ECC), [anthropics/skills](https://github.com/anthropics/skills), [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills), [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach), [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything), [rtk-ai/rtk](https://github.com/rtk-ai/rtk), [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code), [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom), [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills), [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill), [ai-job-search-dev/ai-job-search](https://github.com/ai-job-search-dev/ai-job-search), [blader/humanizer](https://github.com/blader/humanizer), [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks), [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design), [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice), [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd), [emilkowalski/skills](https://github.com/emilkowalski/skills), [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills), [alibaba/open-code-review](https://github.com/alibaba/open-code-review), [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills), [herdrdev/herdr](https://github.com/herdrdev/herdr), [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official), [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent), [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto), [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api), [wshobson/agents](https://github.com/wshobson/agents), [chatboxai/chatbox](https://github.com/chatboxai/chatbox), [github/awesome-copilot](https://github.com/github/awesome-copilot), [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios), [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template), [alchaincyf/nuwa-skill](https://github.com/alchaincyf/nuwa-skill), [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill), [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw), [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io), [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills), [mksglu/context-mode](https://github.com/mksglu/context-mode), [alibaba/nacos](https://github.com/alibaba/nacos), [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph), [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides), [decolua/9router](https://github.com/decolua/9router), [googleworkspace/cli](https://github.com/googleworkspace/cli), [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo), [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw), [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills), [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill), [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud), [phuryn/pm-skills](https://github.com/phuryn/pm-skills), [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files), [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills), [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector), [titanwings/distilly](https://github.com/titanwings/distilly), [google/skills](https://github.com/google/skills), [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite), [KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills), [google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model), [latent-spaces/brag](https://github.com/latent-spaces/brag), [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs), [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py), [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter), [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep), [browser-use/browser-harness](https://github.com/browser-use/browser-harness), [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt), [MemoriLabs/Memori](https://github.com/MemoriLabs/Memori), [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills), [kubesphere/kubesphere](https://github.com/kubesphere/kubesphere), [dreammis/social-auto-upload](https://github.com/dreammis/social-auto-upload), [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian), [nidhinjs/prompt-master](https://github.com/nidhinjs/prompt-master), [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills), [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers), [Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs), [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU), [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS), [HKUSTDial/Supervisor-Skills](https://github.com/HKUSTDial/Supervisor-Skills), [genspark-ai/genoffice](https://github.com/genspark-ai/genoffice), [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video), [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills), [MemTensor/MemOS](https://github.com/MemTensor/MemOS), [ChenLiu-1996/figures4papers](https://github.com/ChenLiu-1996/figures4papers), [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red), [ibelick/ui-skills](https://github.com/ibelick/ui-skills), [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads), [aden-hive/hive](https://github.com/aden-hive/hive), [tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness), [mcp-use/mcp-use](https://github.com/mcp-use/mcp-use), [Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill), [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp), [alchaincyf/zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill), [android/skills](https://github.com/android/skills), [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills), [gamedev-skills/awesome-gamedev-agent-skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills), [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill), [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill), [miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop)
