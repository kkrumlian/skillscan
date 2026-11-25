window.SKILLSCAN_DATA = {
 "summary": {
  "named": true,
  "scan_date": "2026-11-25",
  "scanner": "skillscan 0.1.0",
  "bundles": 100,
  "units": 9544,
  "clean_units": 7207,
  "median_score": 94.5,
  "verdicts": {
   "OK": 88,
   "CAUTION": 4,
   "REVIEW": 8
  },
  "caps": {
   "hooks": 29,
   "mcp": 19,
   "shell": 72,
   "fs-write": 34,
   "network": 55,
   "injection-surface": 44,
   "secrets": 17,
   "obfuscation": 9
  },
  "kinds": {
   "skills": 7112,
   "commands": 1047,
   "agents": 1306,
   "hooks": 29,
   "mcp": 50
  },
  "rules": [
   {
    "rule": "inj-no-confirm",
    "label": "\"Without asking\" phrasing",
    "bundles": 31
   },
   {
    "rule": "sudo",
    "label": "Uses sudo",
    "bundles": 30
   },
   {
    "rule": "tools-bash-any",
    "label": "Unrestricted Bash granted",
    "bundles": 26
   },
   {
    "rule": "net-exfil-post",
    "label": "Sends data to remote host",
    "bundles": 26
   },
   {
    "rule": "pipe-to-shell",
    "label": "curl | sh installer",
    "bundles": 22
   },
   {
    "rule": "dyn-exec",
    "label": "eval / exec / shell=True",
    "bundles": 18
   },
   {
    "rule": "secret-paths",
    "label": "Credential-store paths",
    "bundles": 17
   },
   {
    "rule": "persistence",
    "label": "Shell rc / cron / LaunchAgent write",
    "bundles": 14
   },
   {
    "rule": "inj-override",
    "label": "Instruction-override phrasing",
    "bundles": 10
   },
   {
    "rule": "inj-skip-perms",
    "label": "Permission bypass",
    "bundles": 9
   },
   {
    "rule": "webhook",
    "label": "Webhook / paste endpoint",
    "bundles": 7
   },
   {
    "rule": "base64-blob",
    "label": "Base64 blob",
    "bundles": 5
   },
   {
    "rule": "b64-decode-exec",
    "label": "Decode-and-execute",
    "bundles": 5
   },
   {
    "rule": "mcp-unpinned",
    "label": "Unpinned MCP package",
    "bundles": 4
   },
   {
    "rule": "raw-ip",
    "label": "Public IP URL",
    "bundles": 4
   },
   {
    "rule": "inj-role",
    "label": "Fake role markers",
    "bundles": 4
   },
   {
    "rule": "mcp-remote",
    "label": "Remote MCP server",
    "bundles": 3
   },
   {
    "rule": "rm-rf-broad",
    "label": "Broad recursive delete",
    "bundles": 3
   },
   {
    "rule": "token-literal",
    "label": "Token-shaped literal",
    "bundles": 3
   },
   {
    "rule": "bang-bash",
    "label": "Shell runs on command invoke",
    "bundles": 3
   },
   {
    "rule": "hidden-unicode",
    "label": "Hidden unicode",
    "bundles": 2
   },
   {
    "rule": "exfil-combo",
    "label": "Reads secrets + sends to undeclared host",
    "bundles": 2
   }
  ],
  "categories": {
   "Apps & harnesses": 14,
   "Browser & devices": 4,
   "Collections": 8,
   "Design & UI": 12,
   "Dev workflow": 22,
   "Marketing & business": 7,
   "Media & content": 6,
   "Memory & context": 8,
   "Research & writing": 15,
   "Security": 4
  }
 },
 "bundles": [
  {
   "category": "Apps & harnesses",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "Wei-Shaw/sub2api",
   "url": "https://github.com/Wei-Shaw/sub2api",
   "stars": 46567,
   "description": "Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
   "license": "LGPL-3.0",
   "commit": "0f6671457132425d1b84f3d80536b53e02942424",
   "top_findings": [],
   "worst_units": [],
   "id": "APP-01",
   "label": "Wei-Shaw/sub2api"
  },
  {
   "category": "Apps & harnesses",
   "score": 100,
   "verdict": "OK",
   "units": 3,
   "skills": 3,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 3
   },
   "clean_units": 3,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "chatboxai/chatbox",
   "url": "https://github.com/chatboxai/chatbox",
   "stars": 42526,
   "description": "Powerful AI Client",
   "license": "GPL-3.0",
   "commit": "446bcf43e7a89a0411218821de54d87d7f3cfe11",
   "top_findings": [],
   "worst_units": [],
   "id": "APP-02",
   "label": "chatboxai/chatbox"
  },
  {
   "category": "Apps & harnesses",
   "score": 100,
   "verdict": "OK",
   "units": 5,
   "skills": 5,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 5
   },
   "clean_units": 5,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "herdrdev/herdr",
   "url": "https://github.com/herdrdev/herdr",
   "stars": 52664,
   "description": "the runtime your coding agents live on",
   "license": "Apache-2.0",
   "commit": "e8d7d9705a7a2c89cef4dd42079379f05685af87",
   "top_findings": [],
   "worst_units": [],
   "id": "APP-03",
   "label": "herdrdev/herdr"
  },
  {
   "category": "Apps & harnesses",
   "score": 100,
   "verdict": "OK",
   "units": 5,
   "skills": 1,
   "commands": 0,
   "agents": 2,
   "hooks": 1,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 5
   },
   "clean_units": 5,
   "caps": [
    "hooks",
    "mcp",
    "shell"
   ],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "tigerless-labs/autoharness",
   "url": "https://github.com/tigerless-labs/autoharness",
   "stars": 11147,
   "description": "Building the self-learning layer next-gen agents will ship with, learning skills from real work.",
   "license": "MIT",
   "commit": "6d85325ab5ef436d1d4d52ffa82e43ea0365d144",
   "top_findings": [],
   "worst_units": [],
   "id": "APP-04",
   "label": "tigerless-labs/autoharness"
  },
  {
   "category": "Apps & harnesses",
   "score": 100,
   "verdict": "OK",
   "units": 43,
   "skills": 43,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 43
   },
   "clean_units": 43,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "genspark-ai/genoffice",
   "url": "https://github.com/genspark-ai/genoffice",
   "stars": 12891,
   "description": "Free, open-source AI Office suite: Docs, Sheets, Slides, PDF, Markdown and HTML editors with a built-in AI agent, plus a `genoffice` CLI and agent skill so Claude Code, Codex and Cursor can create and edit real .docx/.xlsx/.pptx files locally. Bring your own key. macOS, Windows & Linux.",
   "license": "Apache-2.0",
   "commit": "c57dc1a2a20a2af38cdaeedb536d86960d7eb382",
   "top_findings": [],
   "worst_units": [],
   "id": "APP-05",
   "label": "genspark-ai/genoffice"
  },
  {
   "category": "Browser & devices",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "100k–200k",
   "repo": "Panniantong/Agent-Reach",
   "url": "https://github.com/Panniantong/Agent-Reach",
   "stars": 114515,
   "description": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
   "license": "MIT",
   "commit": "8d9ecc1f5521fe7d223cde782aaa4005695e2671",
   "top_findings": [],
   "worst_units": [],
   "id": "BRO-01",
   "label": "Panniantong/Agent-Reach"
  },
  {
   "category": "Collections",
   "score": 100,
   "verdict": "OK",
   "units": 865,
   "skills": 864,
   "commands": 1,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 865
   },
   "clean_units": 857,
   "caps": [
    "fs-write",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 8,
    "LOW": 10,
    "HIGH": 1
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 5
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 2
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "ComposioHQ/awesome-claude-skills",
   "url": "https://github.com/ComposioHQ/awesome-claude-skills",
   "stars": 80253,
   "description": "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows",
   "license": "2026-09-18T07:16:11Z",
   "commit": "be2a406907dbc61b73e6827ded415c96139d13a2",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "connect-apps-plugin/commands/setup.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "webapp-testing/scripts/with_server.py",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "langsmith-fetch/SKILL.md",
     "line": 393,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "langsmith-fetch/SKILL.md",
     "line": 394,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "document-skills/docx/SKILL.md",
     "line": 193,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "document-skills/docx/SKILL.md",
     "line": 195,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "document-skills/docx/SKILL.md",
     "line": 196,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "document-skills/pptx/SKILL.md",
     "line": 482,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "document-skills/pptx/SKILL.md",
     "line": 483,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "command",
     "name": "setup",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "docx",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "pptx",
     "score": 87,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "langsmith-fetch",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "webapp-testing",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "xlsx",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "mcp-builder",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "youtube-downloader",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "COL-01",
   "label": "ComposioHQ/awesome-claude-skills"
  },
  {
   "category": "Collections",
   "score": 100,
   "verdict": "OK",
   "units": 880,
   "skills": 880,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 880
   },
   "clean_units": 865,
   "caps": [
    "fs-write",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 11,
    "LOW": 18
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 8
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 2
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "composio-community/awesome-codex-skills",
   "url": "https://github.com/composio-community/awesome-codex-skills",
   "stars": 17421,
   "description": "A curated list of practical Codex skills for automating workflows across the Codex CLI and API.",
   "license": "2026-07-26T01:14:54Z",
   "commit": "0930e1373789d2eda449039f7ac154b33031de89",
   "top_findings": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "webapp-testing/scripts/with_server.py",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "langsmith-fetch/SKILL.md",
     "line": 393,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "langsmith-fetch/SKILL.md",
     "line": 394,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "codebase-migrate/SKILL.md",
     "line": 22,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "connect-apps/SKILL.md",
     "line": 15,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "connect/SKILL.md",
     "line": 46,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "datadog-logs/SKILL.md",
     "line": 21,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "deploy-pipeline/SKILL.md",
     "line": 21,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "issue-triage/SKILL.md",
     "line": 21,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "pr-review-ci-fix/SKILL.md",
     "line": 21,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "sentry-triage/SKILL.md",
     "line": 21,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "codebase-migrate",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "connect",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "connect-apps",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "datadog-logs",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "deploy-pipeline",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "issue-triage",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "langsmith-fetch",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "pr-review-ci-fix",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "COL-02",
   "label": "composio-community/awesome-codex-skills"
  },
  {
   "category": "Design & UI",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "ChenLiu-1996/figures4papers",
   "url": "https://github.com/ChenLiu-1996/figures4papers",
   "stars": 12481,
   "description": "My Python scripts to make high-quality figures for publications in top AI conferences and journals.",
   "license": "NOASSERTION",
   "commit": "daa2833f03878454cb9b6ad3f9ecb68acad36ade",
   "top_findings": [],
   "worst_units": [],
   "id": "DES-01",
   "label": "ChenLiu-1996/figures4papers"
  },
  {
   "category": "Dev workflow",
   "score": 100,
   "verdict": "OK",
   "units": 2,
   "skills": 1,
   "commands": 1,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 2
   },
   "clean_units": 2,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "JCodesMore/ai-website-cloner-template",
   "url": "https://github.com/JCodesMore/ai-website-cloner-template",
   "stars": 39731,
   "description": "Clone any website with one command using AI coding agents",
   "license": "MIT",
   "commit": "5426e0e2ec35dbc173a7a18f47a3dfe2a765313e",
   "top_findings": [],
   "worst_units": [],
   "id": "DEV-01",
   "label": "JCodesMore/ai-website-cloner-template"
  },
  {
   "category": "Dev workflow",
   "score": 100,
   "verdict": "OK",
   "units": 3,
   "skills": 2,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 3
   },
   "clean_units": 3,
   "caps": [
    "hooks"
   ],
   "sev": {},
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "ayghri/i-have-adhd",
   "url": "https://github.com/ayghri/i-have-adhd",
   "stars": 62167,
   "description": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
   "license": "MIT",
   "commit": "1ecea1993b7fce257ffbd686c070948b5e07eda6",
   "top_findings": [],
   "worst_units": [],
   "id": "DEV-02",
   "label": "ayghri/i-have-adhd"
  },
  {
   "category": "Dev workflow",
   "score": 100,
   "verdict": "OK",
   "units": 11,
   "skills": 11,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 11
   },
   "clean_units": 11,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "Jakeschincariol/replica-skill",
   "url": "https://github.com/Jakeschincariol/replica-skill",
   "stars": 10566,
   "description": "Eleven free Claude skills that clone any app: reverse-engineer it, rebuild it, test it for bugs, then fix what its users hate. Free, MIT.",
   "license": "MIT",
   "commit": "77c9436fb3d18c3d58169efb8caf4fe906b0dc51",
   "top_findings": [],
   "worst_units": [],
   "id": "DEV-03",
   "label": "Jakeschincariol/replica-skill"
  },
  {
   "category": "Dev workflow",
   "score": 100,
   "verdict": "OK",
   "units": 95,
   "skills": 95,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 95
   },
   "clean_units": 95,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "googleworkspace/cli",
   "url": "https://github.com/googleworkspace/cli",
   "stars": 32463,
   "description": " Community CLI for Google Workspace APIs.",
   "license": "Apache-2.0",
   "commit": "8e945eed02a8230af122ec6247cc218d28c1f1ce",
   "top_findings": [],
   "worst_units": [],
   "id": "DEV-04",
   "label": "googleworkspace/cli"
  },
  {
   "category": "Marketing & business",
   "score": 100,
   "verdict": "OK",
   "units": 114,
   "skills": 72,
   "commands": 42,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 114
   },
   "clean_units": 114,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "phuryn/pm-skills",
   "url": "https://github.com/phuryn/pm-skills",
   "stars": 28293,
   "description": "PM Skills Marketplace: 100+ agentic skills, commands, and plugins — from discovery to strategy, execution, launch, and growth.",
   "license": "MIT",
   "commit": "9af7bfd0bc47fdad43c2eaa7a43cd13918e7aaef",
   "top_findings": [],
   "worst_units": [],
   "id": "MAR-01",
   "label": "phuryn/pm-skills"
  },
  {
   "category": "Media & content",
   "score": 100,
   "verdict": "OK",
   "units": 18,
   "skills": 18,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 18
   },
   "clean_units": 18,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "dreammis/social-auto-upload",
   "url": "https://github.com/dreammis/social-auto-upload",
   "stars": 16938,
   "description": "自动化上传视频到社交媒体：抖音、小红书、视频号、tiktok、youtube、bilibili",
   "license": "MIT",
   "commit": "409d4fdd33f3eb0d946310af93633ddb5eebe1d5",
   "top_findings": [],
   "worst_units": [],
   "id": "MED-01",
   "label": "dreammis/social-auto-upload"
  },
  {
   "category": "Memory & context",
   "score": 100,
   "verdict": "OK",
   "units": 3,
   "skills": 2,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 3
   },
   "clean_units": 3,
   "caps": [
    "hooks"
   ],
   "sev": {},
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "headroomlabs-ai/headroom",
   "url": "https://github.com/headroomlabs-ai/headroom",
   "stars": 80779,
   "description": "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server.",
   "license": "Apache-2.0",
   "commit": "df4477f2753afc65528d2560429a62d33a730d26",
   "top_findings": [],
   "worst_units": [],
   "id": "MEM-01",
   "label": "headroomlabs-ai/headroom"
  },
  {
   "category": "Memory & context",
   "score": 100,
   "verdict": "OK",
   "units": 20,
   "skills": 13,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 6,
   "unit_verdicts": {
    "OK": 20
   },
   "clean_units": 20,
   "caps": [
    "hooks",
    "mcp",
    "shell"
   ],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "mksglu/context-mode",
   "url": "https://github.com/mksglu/context-mode",
   "stars": 34450,
   "description": "Free, local plugin that keeps tool output out of your coding agent's context window. Sandbox and SQLite FTS5 search, 99% fewer bytes in context. Works with Claude Code, Codex, Pi, OMP, OpenCode, Gemini CLI, Copilot CLI and 4 more agents. Zero telemetry.",
   "license": "NOASSERTION",
   "commit": "a2bced6d19ef1836179d070445b32dc5325e5017",
   "top_findings": [],
   "worst_units": [],
   "id": "MEM-02",
   "label": "mksglu/context-mode"
  },
  {
   "category": "Research & writing",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "alchaincyf/nuwa-skill",
   "url": "https://github.com/alchaincyf/nuwa-skill",
   "stars": 38956,
   "description": "你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks.",
   "license": "MIT",
   "commit": "8944932e35597bbcaf52b807e506c3900d0557c1",
   "top_findings": [],
   "worst_units": [],
   "id": "RES-01",
   "label": "alchaincyf/nuwa-skill"
  },
  {
   "category": "Research & writing",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "alchaincyf/zhangxuefeng-skill",
   "url": "https://github.com/alchaincyf/zhangxuefeng-skill",
   "stars": 10820,
   "description": "张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.skill生成。",
   "license": "MIT",
   "commit": "38bbd944e2ecbd7ec0232a7448fcb27ab4710da0",
   "top_findings": [],
   "worst_units": [],
   "id": "RES-02",
   "label": "alchaincyf/zhangxuefeng-skill"
  },
  {
   "category": "Research & writing",
   "score": 100,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 1,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "blader/humanizer",
   "url": "https://github.com/blader/humanizer",
   "stars": 73184,
   "description": "Agent skill that removes signs of AI-generated writing from text",
   "license": "MIT",
   "commit": "a32f24407364c74c812b43c15926d638bee1e072",
   "top_findings": [],
   "worst_units": [],
   "id": "RES-03",
   "label": "blader/humanizer"
  },
  {
   "category": "Research & writing",
   "score": 100,
   "verdict": "OK",
   "units": 7,
   "skills": 7,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 7
   },
   "clean_units": 7,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "obsidianmd/obsidian-skills",
   "url": "https://github.com/obsidianmd/obsidian-skills",
   "stars": 53659,
   "description": "Teach your agent to use Obsidian and open formats including Markdown, Bases, JSON Canvas.",
   "license": "MIT",
   "commit": "b110b2f8e9eb1f287892f937050dfd40af862cbb",
   "top_findings": [],
   "worst_units": [],
   "id": "RES-04",
   "label": "obsidianmd/obsidian-skills"
  },
  {
   "category": "Research & writing",
   "score": 100,
   "verdict": "OK",
   "units": 8,
   "skills": 2,
   "commands": 3,
   "agents": 2,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 8
   },
   "clean_units": 8,
   "caps": [
    "mcp",
    "shell"
   ],
   "sev": {},
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "yusufkaraaslan/Skill_Seekers",
   "url": "https://github.com/yusufkaraaslan/Skill_Seekers",
   "stars": 15365,
   "description": "Convert documentation websites, GitHub repositories, and PDFs into Claude AI skills with automatic conflict detection",
   "license": "MIT",
   "commit": "15a67e3c1e7ceb6c63b88f9f3fe480d7b547fe22",
   "top_findings": [],
   "worst_units": [],
   "id": "RES-05",
   "label": "yusufkaraaslan/Skill_Seekers"
  },
  {
   "category": "Security",
   "score": 100,
   "verdict": "OK",
   "units": 2,
   "skills": 1,
   "commands": 1,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 2
   },
   "clean_units": 2,
   "caps": [],
   "sev": {},
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "NVIDIA/SkillSpector",
   "url": "https://github.com/NVIDIA/SkillSpector",
   "stars": 27551,
   "description": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
   "license": "Apache-2.0",
   "commit": "0205488a8257869cac3054397ddd5a5d29180aab",
   "top_findings": [],
   "worst_units": [],
   "id": "SEC-01",
   "label": "NVIDIA/SkillSpector"
  },
  {
   "category": "Apps & harnesses",
   "score": 99,
   "verdict": "OK",
   "units": 25,
   "skills": 24,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 25
   },
   "clean_units": 23,
   "caps": [
    "mcp",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 5
   },
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "aden-hive/hive",
   "url": "https://github.com/aden-hive/hive",
   "stars": 11174,
   "description": "Multi-Agent Harness for Production AI",
   "license": "Apache-2.0",
   "commit": "6703b4343a123469288b1100855a80de90e35536",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "skill",
     "name": "queen-colony-debug",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "hive.terminal-tools-pty-sessions",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "APP-06",
   "label": "aden-hive/hive"
  },
  {
   "category": "Dev workflow",
   "score": 99,
   "verdict": "OK",
   "units": 10,
   "skills": 4,
   "commands": 6,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 10
   },
   "clean_units": 8,
   "caps": [
    "shell"
   ],
   "sev": {
    "LOW": 2
   },
   "rules": [],
   "stars_bucket": "50k–100k",
   "repo": "alibaba/open-code-review",
   "url": "https://github.com/alibaba/open-code-review",
   "stars": 56048,
   "description": "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
   "license": "Apache-2.0",
   "commit": "9007ae84e0de7b84d72f9833f6b12a2a731d5cbd",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "skill",
     "name": "open-code-review",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "open-code-review",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-05",
   "label": "alibaba/open-code-review"
  },
  {
   "category": "Dev workflow",
   "score": 99,
   "verdict": "OK",
   "units": 13,
   "skills": 12,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 13
   },
   "clean_units": 12,
   "caps": [
    "hooks",
    "shell"
   ],
   "sev": {
    "LOW": 4
   },
   "rules": [],
   "stars_bucket": "100k–200k",
   "repo": "DietrichGebert/ponytail",
   "url": "https://github.com/DietrichGebert/ponytail",
   "stars": 198063,
   "description": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
   "license": "MIT",
   "commit": "ebd8654c2c627f721eb8f9c0d1bd4090a29f9e10",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 96,
     "verdict": "OK"
    }
   ],
   "id": "DEV-06",
   "label": "DietrichGebert/ponytail"
  },
  {
   "category": "Dev workflow",
   "score": 99,
   "verdict": "OK",
   "units": 44,
   "skills": 28,
   "commands": 9,
   "agents": 6,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 44
   },
   "clean_units": 42,
   "caps": [
    "hooks",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 8
   },
   "rules": [],
   "stars_bucket": "100k–200k",
   "repo": "JuliusBrussee/caveman",
   "url": "https://github.com/JuliusBrussee/caveman",
   "stars": 122644,
   "description": "why use many token when few token do trick. Skill + local proxy for coding agents: shorter answers, smaller tool output, every original recoverable.",
   "license": "Apache-2.0",
   "commit": "47c61be2d10a354f0c5cbe2b90959d24c06b16c6",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "skill",
     "name": "caveman-compress",
     "score": 95,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "caveman-compress",
     "score": 95,
     "verdict": "OK"
    }
   ],
   "id": "DEV-07",
   "label": "JuliusBrussee/caveman"
  },
  {
   "category": "Dev workflow",
   "score": 99,
   "verdict": "OK",
   "units": 45,
   "skills": 8,
   "commands": 0,
   "agents": 37,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 45
   },
   "clean_units": 43,
   "caps": [
    "fs-write",
    "shell"
   ],
   "sev": {
    "LOW": 2,
    "MED": 1
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "google/elephant-goldfish-model",
   "url": "https://github.com/google/elephant-goldfish-model",
   "stars": 22698,
   "description": "Open-source plugin for designing and reviewing software with agents",
   "license": "Apache-2.0",
   "commit": "63e239d8d4c3ddc6774faf533b4997405f78c549",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude-plugin/agents/bootstrap_orchestrator.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "egm-bootstrap-orchestrator",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "egm-synthesizer",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-08",
   "label": "google/elephant-goldfish-model"
  },
  {
   "category": "Marketing & business",
   "score": 99,
   "verdict": "OK",
   "units": 9,
   "skills": 8,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 9
   },
   "clean_units": 8,
   "caps": [
    "mcp",
    "network"
   ],
   "sev": {
    "LOW": 1
   },
   "rules": [],
   "stars_bucket": "10k–25k",
   "repo": "Ryze-AI-Adgent/open-seo-mcp-skills",
   "url": "https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills",
   "stars": 10658,
   "description": "Free SEO MCP server + open-source SEO and GEO skills for Claude: keyword research, rank tracking, audits, backlinks, AI visibility on your real GSC/GA4/ads data. claude mcp add ryze --transport http https://connector.get-ryze.ai/mcp",
   "license": "MIT",
   "commit": "f587b0a69dc1ed92b65cdb241e4f14985b1031fd",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "mcp",
     "name": "ryze",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MAR-02",
   "label": "Ryze-AI-Adgent/open-seo-mcp-skills"
  },
  {
   "category": "Marketing & business",
   "score": 99,
   "verdict": "OK",
   "units": 60,
   "skills": 34,
   "commands": 0,
   "agents": 25,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 60
   },
   "clean_units": 54,
   "caps": [
    "fs-write",
    "hooks",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 7,
    "MED": 1
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "AgriciDaniel/claude-ads",
   "url": "https://github.com/AgriciDaniel/claude-ads",
   "stars": 11302,
   "description": "Claude-first paid-media operations skill for Claude Code across 12 ad platforms (Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit, Pinterest, Snapchat, X): source-grounded audits, deterministic findings and evidence coverage, versioned JSON reports, and capability-gated account changes.",
   "license": "MIT",
   "commit": "fc3908e786c318776df89a3a098333da377364be",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/release-verifier.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "release-verifier",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ads-setup",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ads",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "source-verifier",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "research-worker",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "visual-designer",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MAR-03",
   "label": "AgriciDaniel/claude-ads"
  },
  {
   "category": "Collections",
   "score": 98,
   "verdict": "OK",
   "units": 488,
   "skills": 185,
   "commands": 103,
   "agents": 199,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 488
   },
   "clean_units": 438,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 64,
    "MED": 28
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 14
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 11
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 1
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 1
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "wshobson/agents",
   "url": "https://github.com/wshobson/agents",
   "stars": 42868,
   "description": "Plugins, agents, skills, and commands for Claude Code, Codex CLI, Cursor, OpenCode, Antigravity CLI, GitHub Copilot, and Pi, written once in Markdown and adapted to each tool by generators with validation and evals.",
   "license": "MIT",
   "commit": "c96b5f6552dba32e4492307493ee613581430715",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/codebase-cleanup/commands/deps-audit.md",
     "line": 203,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/database-migrations/commands/migration-observability.md",
     "line": 192,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/database-migrations/commands/migration-observability.md",
     "line": 289,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/dependency-management/commands/deps-audit.md",
     "line": 203,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/error-debugging/commands/error-analysis.md",
     "line": 257,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/error-debugging/commands/error-trace.md",
     "line": 424,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/error-diagnostics/commands/error-analysis.md",
     "line": 257,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/error-diagnostics/commands/error-trace.md",
     "line": 424,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md",
     "line": 226,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/payment-processing/skills/paypal-integration/SKILL.md",
     "line": 85,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/payment-processing/skills/paypal-integration/references/details.md",
     "line": 23,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/payment-processing/skills/paypal-integration/references/details.md",
     "line": 61,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/payment-processing/skills/paypal-integration/references/details.md",
     "line": 118,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugins/python-development/skills/python-testing-patterns/references/details.md",
     "line": 213,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "plugins/python-development/skills/uv-package-manager/references/advanced-patterns.md",
     "line": 343,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "plugins/python-development/skills/python-packaging/references/details.md",
     "line": 296,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/agent-teams/agents/team-debugger.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/agent-teams/agents/team-implementer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/agent-teams/agents/team-lead.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/agent-teams/agents/team-reviewer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/conductor/agents/conductor-validator.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/operating-kit/agents/code-review-preshipment.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/operating-kit/agents/deploy-with-verification.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/operating-kit/agents/prod-logs-health-check.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "plugins/operating-kit/agents/session-end.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "paypal-integration",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "social-publishing-publisher",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "migration-observability",
     "score": 89,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "javascript-testing-patterns",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "python-testing-patterns",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "deps-audit",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "error-analysis",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "deps-audit",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "COL-03",
   "label": "wshobson/agents"
  },
  {
   "category": "Dev workflow",
   "score": 98,
   "verdict": "OK",
   "units": 16,
   "skills": 15,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 16
   },
   "clean_units": 13,
   "caps": [
    "hooks",
    "injection-surface",
    "shell"
   ],
   "sev": {
    "LOW": 2,
    "MED": 2
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    }
   ],
   "stars_bucket": "200k+",
   "repo": "obra/superpowers",
   "url": "https://github.com/obra/superpowers",
   "stars": 325792,
   "description": "An agentic skills framework & software development methodology that works.",
   "license": "MIT",
   "commit": "22f0b463e7a5e579904dd6211a520321035526f7",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/using-git-worktrees/SKILL.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/using-git-worktrees/SKILL.md",
     "line": 67,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "using-git-worktrees",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "brainstorming",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "writing-skills",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-09",
   "label": "obra/superpowers"
  },
  {
   "category": "Dev workflow",
   "score": 98,
   "verdict": "OK",
   "units": 22,
   "skills": 9,
   "commands": 0,
   "agents": 12,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 22
   },
   "clean_units": 19,
   "caps": [
    "hooks",
    "injection-surface",
    "shell"
   ],
   "sev": {
    "LOW": 2,
    "MED": 1
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "Egonex-AI/Understand-Anything",
   "url": "https://github.com/Egonex-AI/Understand-Anything",
   "stars": 94126,
   "description": "Graphs that teach > graphs that impress. Turn any code into an interactive knowledge graph you can explore, search, and ask questions about. Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.",
   "license": "MIT",
   "commit": "5338971c07a560c5fb6b26d85ad348b01315e2da",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "understand-anything-plugin/hooks/auto-update-prompt.md",
     "line": 3,
     "auto_run": true
    }
   ],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "understand",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "understand-knowledge",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-10",
   "label": "Egonex-AI/Understand-Anything"
  },
  {
   "category": "Dev workflow",
   "score": 98,
   "verdict": "OK",
   "units": 80,
   "skills": 80,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 80
   },
   "clean_units": 76,
   "caps": [
    "network",
    "shell"
   ],
   "sev": {
    "MED": 6,
    "LOW": 5,
    "HIGH": 1
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 6
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "gamedev-skills/awesome-gamedev-agent-skills",
   "url": "https://github.com/gamedev-skills/awesome-gamedev-agent-skills",
   "stars": 10732,
   "description": "Make games with your AI coding agent: 79 game-dev skills and a router for Godot, Unity, Unreal, Roblox, three.js, Phaser and 6 more engines. Checked on the real engines.",
   "license": "Apache-2.0",
   "commit": "c6ca6c41c839b68319ffc08430b99ab768debc32",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/unity/unity-csharp-scripting/references/agent-checks.md",
     "line": 54,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/assets/ci/github-actions.yml",
     "line": 34,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/assets/ci/github-actions.yml",
     "line": 35,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/assets/ci/github-actions.yml",
     "line": 95,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/assets/ci/github-actions.yml",
     "line": 96,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/references/project-and-builds.md",
     "line": 28,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ebitengine/ebitengine-game/references/project-and-builds.md",
     "line": 31,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "unity-csharp-scripting",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ebitengine-game",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "itch-publish",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "steam-publish",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-11",
   "label": "gamedev-skills/awesome-gamedev-agent-skills"
  },
  {
   "category": "Media & content",
   "score": 98,
   "verdict": "OK",
   "units": 19,
   "skills": 19,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 19
   },
   "clean_units": 17,
   "caps": [
    "shell"
   ],
   "sev": {
    "LOW": 25,
    "MED": 8
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 8
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "kajisho5/ffmpeg-skill",
   "url": "https://github.com/kajisho5/ffmpeg-skill",
   "stars": 10676,
   "description": "Local video editor for coding agents: 42 FFmpeg tools with a machine-readable contract and an MCP server, for Claude Code, Cursor and Codex. Cut, captions, reframe, loudness, platform exports. No cloud, no API keys.",
   "license": "MIT",
   "commit": "c7dad34c846099e7cf606ef943abe5e12d1ab0f9",
   "top_findings": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "README.md",
     "line": 804,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "bin/install.js",
     "line": 324,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_common/runner.py",
     "line": 26,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_common/runner.py",
     "line": 27,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_common/runner.py",
     "line": 28,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_contract.py",
     "line": 1247,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_contract.py",
     "line": 1254,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "scripts/_contract.py",
     "line": 1254,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "ffmpeg-skill",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "running-github-actions-efficiently",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MED-02",
   "label": "kajisho5/ffmpeg-skill"
  },
  {
   "category": "Collections",
   "score": 97,
   "verdict": "OK",
   "units": 713,
   "skills": 478,
   "commands": 0,
   "agents": 226,
   "hooks": 1,
   "mcp": 8,
   "unit_verdicts": {
    "OK": 710,
    "REVIEW": 3
   },
   "clean_units": 621,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 121,
    "MED": 77,
    "HIGH": 7
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 24
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 19
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 10
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 9
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 7
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 5
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 4
    },
    {
     "rule": "mcp-remote",
     "label": "Remote MCP server",
     "count": 3
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 2
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "github/awesome-copilot",
   "url": "https://github.com/github/awesome-copilot",
   "stars": 41524,
   "description": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
   "license": "MIT",
   "commit": "93fc8b9ee3ef56b9b5e7261e6ce92d314cb2c1cf",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/setup-my-iq/assets/templates/AGENTS.md",
     "line": 68,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "agents/droid.agent.md",
     "line": 238,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "agents/trojan-skill-hunter.agent.md",
     "line": 90,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "agents/trojan-skill-hunter.agent.md",
     "line": 90,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/java-testcontainers/references/environment-ci-troubleshooting.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/plantuml-ascii",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/rebase-current-branch",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 143,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 161,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 218,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 227,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 274,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 277,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/foundry-agentic-loop/scripts/evals.mjs",
     "line": 308,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/arm-migration.agent.md",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/modernization.agent.md",
     "line": 104,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/one-shot-feature-issue-planner.agent.md",
     "line": 14,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/salesforce-apex-triggers.agent.md",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/salesforce-apex-triggers.agent.md",
     "line": 142,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/salesforce-aura-lwc.agent.md",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/salesforce-flow.agent.md",
     "line": 54,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/salesforce-visualforce.agent.md",
     "line": 49,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/software-engineer-agent-v1.agent.md",
     "line": 63,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/agent-architecture/references/architecture-contract.md",
     "line": 78,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/azure-architecture-autopilot/references/phase1-advisor.md",
     "line": 584,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "setup-my-iq",
     "score": 69,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "Trojan Skill Hunter",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "plantuml-ascii",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "aspire",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "cli-mastery",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "java-testcontainers",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "rebase-current-branch",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "droid",
     "score": 80,
     "verdict": "OK"
    }
   ],
   "id": "COL-04",
   "label": "github/awesome-copilot"
  },
  {
   "category": "Design & UI",
   "score": 97,
   "verdict": "OK",
   "units": 10,
   "skills": 10,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 10
   },
   "clean_units": 8,
   "caps": [
    "injection-surface"
   ],
   "sev": {
    "MED": 2,
    "LOW": 1
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "ibelick/ui-skills",
   "url": "https://github.com/ibelick/ui-skills",
   "stars": 11386,
   "description": "Skills for Design Engineers",
   "license": "MIT",
   "commit": "7ef0076fce1dfa39dd2bc43b7dc13add6eda8a41",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/component-canvas/SKILL.md",
     "line": 121,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/create-canvas/SKILL.md",
     "line": 162,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "component-canvas",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "create-canvas",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DES-02",
   "label": "ibelick/ui-skills"
  },
  {
   "category": "Dev workflow",
   "score": 97,
   "verdict": "OK",
   "units": 10,
   "skills": 8,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 10
   },
   "clean_units": 8,
   "caps": [
    "hooks",
    "mcp",
    "shell"
   ],
   "sev": {
    "LOW": 1,
    "MED": 1
   },
   "rules": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "tirth8205/code-review-graph",
   "url": "https://github.com/tirth8205/code-review-graph",
   "stars": 32934,
   "description": "Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows.",
   "license": "MIT",
   "commit": "bbdda4b9e4b4818a9f04d7ef96ac0e50da13f208",
   "top_findings": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": ".mcp.json",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "mcp",
     "name": "code-review-graph",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "code-review-graph",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-12",
   "label": "tirth8205/code-review-graph"
  },
  {
   "category": "Marketing & business",
   "score": 97,
   "verdict": "OK",
   "units": 53,
   "skills": 53,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 53
   },
   "clean_units": 42,
   "caps": [
    "injection-surface",
    "network"
   ],
   "sev": {
    "MED": 3,
    "LOW": 14
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "coreyhaines31/marketingskills",
   "url": "https://github.com/coreyhaines31/marketingskills",
   "stars": 62464,
   "description": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
   "license": "MIT",
   "commit": "8fd2fcade2fd6629026e9dfe6d133b55b36968b9",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/competitor-profiling/SKILL.md",
     "line": 24,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/sales-enablement/references/demo-scripts.md",
     "line": 129,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/attribution/references/first-party-tracking.md",
     "line": 136,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "attribution",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "competitor-profiling",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "sales-enablement",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "social",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "conversion-tracking",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "directory-submissions",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "image",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "lead-magnets",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MAR-04",
   "label": "coreyhaines31/marketingskills"
  },
  {
   "category": "Apps & harnesses",
   "score": 96,
   "verdict": "OK",
   "units": 8,
   "skills": 7,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 8
   },
   "clean_units": 6,
   "caps": [
    "mcp",
    "network"
   ],
   "sev": {
    "LOW": 3,
    "MED": 1
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "mcp-use/mcp-use",
   "url": "https://github.com/mcp-use/mcp-use",
   "stars": 11005,
   "description": "The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents.",
   "license": "MIT",
   "commit": "8ff4b865e0e5712c66d5077e93392807daca9354",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/openapi-to-mcp/references/auth.md",
     "line": 119,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "openapi-to-mcp",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "mcp-use-docs",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "APP-07",
   "label": "mcp-use/mcp-use"
  },
  {
   "category": "Apps & harnesses",
   "score": 96,
   "verdict": "OK",
   "units": 104,
   "skills": 45,
   "commands": 0,
   "agents": 59,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 103,
    "REVIEW": 1
   },
   "clean_units": 89,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 23,
    "LOW": 68
   },
   "rules": [
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "count": 10
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 6
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 3
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 2
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "agentscope-ai/QwenPaw",
   "url": "https://github.com/agentscope-ai/QwenPaw",
   "stars": 38178,
   "description": "Your Personal AI Assistant; easy to install, deploy on your own machine or on the cloud; supports multiple chat apps with easily extensible capabilities.",
   "license": "Apache-2.0",
   "commit": "e64fd38fb773a1f110b46ee26a9b4b34e03b7eb5",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/use-cli/use-alibaba-cloud-cli-to-manage-oss-data.md",
     "line": 108,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "plugins/bundle/computer-use/skills/computer_use/SKILL.md",
     "line": 252,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/use-cli/managing-and-using-cli-plugins.md",
     "line": 258,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/use-cli/managing-and-using-cli-plugins.md",
     "line": 309,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/use-cli/managing-and-using-cli-plugins.md",
     "line": 327,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/terraform-skill/references/ci-cd-workflows.md",
     "line": 48,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/terraform-skill/references/security-compliance.md",
     "line": 42,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/en/PROFILE.md",
     "line": 215,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/en/PROFILE.md",
     "line": 217,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/en/PROFILE.md",
     "line": 248,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/en/PROFILE.md",
     "line": 250,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/en/PROFILE.md",
     "line": 261,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/zh/PROFILE.md",
     "line": 215,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/zh/PROFILE.md",
     "line": 217,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/zh/PROFILE.md",
     "line": 248,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/zh/PROFILE.md",
     "line": 250,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/agents/verifier/zh/PROFILE.md",
     "line": 261,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/common-tools/use-the-vim-editor.md",
     "line": 160,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/common-tools/use-the-vim-editor.md",
     "line": 397,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/common-tools/use-the-vim-editor.md",
     "line": 399,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/alicloud_cli/md_mirror/zh/cli/common-tools/use-the-vim-editor.md",
     "line": 399,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/terraform-cli-setup/SKILL.md",
     "line": 78,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/bundle/cloudpaw/skills/terraform-cli-setup/SKILL.md",
     "line": 90,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "alicloud_cli",
     "score": 62,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "terraform-cli-setup",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "PROFILE",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "PROFILE",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "terraform-skill",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "computer_use",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "docx",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "docx",
     "score": 97,
     "verdict": "OK"
    }
   ],
   "id": "APP-08",
   "label": "agentscope-ai/QwenPaw"
  },
  {
   "category": "Design & UI",
   "score": 96,
   "verdict": "OK",
   "units": 2,
   "skills": 2,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 2
   },
   "clean_units": 0,
   "caps": [
    "injection-surface",
    "shell"
   ],
   "sev": {
    "LOW": 6
   },
   "rules": [],
   "stars_bucket": "25k–50k",
   "repo": "zarazhangrui/frontend-slides",
   "url": "https://github.com/zarazhangrui/frontend-slides",
   "stars": 32852,
   "description": "Create beautiful slides on the web using a coding agent's frontend skills",
   "license": "MIT",
   "commit": "9906a34d640d2111f724544cbc50f7f130569ae1",
   "top_findings": [],
   "worst_units": [
    {
     "kind": "skill",
     "name": "frontend-slides",
     "score": 96,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "frontend-slides",
     "score": 96,
     "verdict": "OK"
    }
   ],
   "id": "DES-03",
   "label": "zarazhangrui/frontend-slides"
  },
  {
   "category": "Design & UI",
   "score": 96,
   "verdict": "OK",
   "units": 7,
   "skills": 6,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 7
   },
   "clean_units": 1,
   "caps": [
    "fs-write",
    "injection-surface",
    "mcp",
    "shell"
   ],
   "sev": {
    "LOW": 9,
    "MED": 1
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "miqdadbadjuber/anti-slop",
   "url": "https://github.com/miqdadbadjuber/anti-slop",
   "stars": 10062,
   "description": "Rules for an AI coding agent to filter out generic AI-generated UI designs, text, and code.",
   "license": "MIT",
   "commit": "7f6a03df2931c12cb244dc4ab14ee4866b0ac2ba",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/antislop/SKILL.md",
     "line": 277,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "antislop",
     "score": 95,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "antislop-human",
     "score": 96,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "antislop-code",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "antislop-copywriting",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "antislop-layoutmobile",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "antislop-ui",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DES-04",
   "label": "miqdadbadjuber/anti-slop"
  },
  {
   "category": "Design & UI",
   "score": 96,
   "verdict": "OK",
   "units": 8,
   "skills": 1,
   "commands": 7,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 8
   },
   "clean_units": 7,
   "caps": [
    "injection-surface"
   ],
   "sev": {
    "MED": 2
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "cathrynlavery/diagram-design",
   "url": "https://github.com/cathrynlavery/diagram-design",
   "stars": 72024,
   "description": "Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 52 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.",
   "license": "MIT",
   "commit": "67dbb00176980741a909c84c124f86ef91bbf546",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/diagram-design/SKILL.md",
     "line": 150,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/diagram-design/references/output-spec.md",
     "line": 201,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "diagram-design",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "DES-05",
   "label": "cathrynlavery/diagram-design"
  },
  {
   "category": "Dev workflow",
   "score": 96,
   "verdict": "OK",
   "units": 42,
   "skills": 42,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 41,
    "REVIEW": 1
   },
   "clean_units": 36,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 16,
    "HIGH": 4,
    "MED": 1
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 4
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "android/skills",
   "url": "https://github.com/android/skills",
   "stars": 10743,
   "description": "skills",
   "license": "2026-11-23T13:39:36Z",
   "commit": "7f7b21730a605d112ca9f79b6e40105ce7b670ee",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "devtools/android-cli/SKILL.md",
     "line": 37,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "devtools/android-cli/SKILL.md",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "devtools/android-cli/SKILL.md",
     "line": 39,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "devtools/android-cli/SKILL.md",
     "line": 40,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "security/android-permissions-security/references/android/guide/topics/manifest/permission-element.md",
     "line": 97,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "android-cli",
     "score": 67,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "android-permissions-security",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "android-profiler",
     "score": 95,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "play-policy-insights",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "litert-runtime",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "leanback-to-compose-tv-migration",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-13",
   "label": "android/skills"
  },
  {
   "category": "Dev workflow",
   "score": 96,
   "verdict": "OK",
   "units": 47,
   "skills": 9,
   "commands": 14,
   "agents": 20,
   "hooks": 1,
   "mcp": 3,
   "unit_verdicts": {
    "OK": 46,
    "REVIEW": 1
   },
   "clean_units": 39,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "shell"
   ],
   "sev": {
    "LOW": 6,
    "MED": 6
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 3
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 2
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "shanraisshan/claude-code-best-practice",
   "url": "https://github.com/shanraisshan/claude-code-best-practice",
   "stars": 69380,
   "description": "from vibe coding to agentic engineering - practice makes claude perfect",
   "license": "MIT",
   "commit": "ac1f392d5f7151eaa80877e6417ce3bcc2fde8e1",
   "top_findings": [
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/agents/development-workflows-research-agent.md",
     "line": 19,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/hooks/HOOKS-README.md",
     "line": 446,
     "auto_run": true
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/hooks/HOOKS-README.md",
     "line": 64,
     "auto_run": true
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/hooks/HOOKS-README.md",
     "line": 64,
     "auto_run": true
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/hooks/HOOKS-README.md",
     "line": 71,
     "auto_run": true
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agent-teams/.claude/agents/time-agent.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 68,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "development-workflows-research-agent",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "time-agent",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "time-svg-creator",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "agent-browser",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "playwright",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "context7",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "deepwiki",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-14",
   "label": "shanraisshan/claude-code-best-practice"
  },
  {
   "category": "Research & writing",
   "score": 96,
   "verdict": "OK",
   "units": 19,
   "skills": 15,
   "commands": 0,
   "agents": 3,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 19
   },
   "clean_units": 16,
   "caps": [
    "hooks",
    "shell"
   ],
   "sev": {
    "MED": 3
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 3
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "AgriciDaniel/claude-obsidian",
   "url": "https://github.com/AgriciDaniel/claude-obsidian",
   "stars": 16739,
   "description": "Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern.",
   "license": "MIT",
   "commit": "2e545563172f97f02ecaaaab376ceea1246a0583",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/verifier.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/wiki-ingest.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/wiki-lint.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "verifier",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "wiki-lint",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "wiki-ingest",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "RES-06",
   "label": "AgriciDaniel/claude-obsidian"
  },
  {
   "category": "Collections",
   "score": 95,
   "verdict": "OK",
   "units": 20,
   "skills": 20,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 20
   },
   "clean_units": 13,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 53,
    "MED": 6
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 3
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "count": 1
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    }
   ],
   "stars_bucket": "100k–200k",
   "repo": "anthropics/skills",
   "url": "https://github.com/anthropics/skills",
   "stars": 199966,
   "description": "Public repository for Agent Skills",
   "license": "2026-11-16T14:22:50Z",
   "commit": "e4bb5d960d87126ff3b3a8af1a104b7db67560ba",
   "top_findings": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/webapp-testing/scripts/with_server.py",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/claude-api/shared/managed-agents-onboarding-from-quickstart.md",
     "line": 54,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/claude-api/shared/managed-agents-onboarding-from-quickstart.md",
     "line": 57,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/claude-api/shared/model-migration.md",
     "line": 53,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "skills/claude-api/shared/managed-agents-core.md",
     "line": 289,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/claude-api/shared/managed-agents-self-hosted-sandboxes.md",
     "line": 186,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "claude-api",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "webapp-testing",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "skill-creator",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "docx",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "mcp-builder",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "pptx",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "xlsx",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "COL-05",
   "label": "anthropics/skills"
  },
  {
   "category": "Collections",
   "score": 95,
   "verdict": "OK",
   "units": 291,
   "skills": 279,
   "commands": 0,
   "agents": 12,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 289,
    "REVIEW": 2
   },
   "clean_units": 227,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "MED": 94,
    "LOW": 137,
    "HIGH": 12
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 36
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 33
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 21
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "count": 7
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "count": 3
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 3
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 2
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "asgeirtj/system_prompts_leaks",
   "url": "https://github.com/asgeirtj/system_prompts_leaks",
   "stars": 72583,
   "description": "Leaked system prompts of ChatGPT, Claude, Gemini and more. The hidden system prompt of every popular chatbot, in full, every version since May 2025. Also Anthropic Claude Code, OpenAI Codex, Google Antigravity, xAI Grok, Meta Muse, Moonshot Kimi, Alibaba Qwen, Z.ai GLM ZCode, MiniMax, Cursor, Perplexity, DeepSeek and 30+ others. Updated daily.",
   "license": "CC0-1.0",
   "commit": "74761cc521a4ea73a603b54e7465e057de8ced19",
   "top_findings": [
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 441,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 441,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 443,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 3193,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 3194,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 3204,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/agents/scripts/agents.py",
     "line": 3211,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/fleet-manager/scripts/fleet_manager.py",
     "line": 2326,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/fleet-manager/scripts/fleet_tmux.py",
     "line": 82,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/fleet-manager/scripts/fleet_tmux.py",
     "line": 604,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "Meta/muse-code/skills/fleet-manager/scripts/fleet_tmux.py",
     "line": 613,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "GLM/skills/pdf/briefs/academic.md",
     "line": 999,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 622,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 624,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 705,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 706,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 707,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 708,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/plugin-authoring/make-colors.js",
     "line": 709,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/artifact-types/motion/SKILL.md",
     "line": 110,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/claude-api/shared/managed-agents-onboarding-from-quickstart.md",
     "line": 56,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/claude-api/shared/model-migration.md",
     "line": 55,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/design-sync/non-storybook/SKILL.md",
     "line": 20,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/doctor/SKILL.md",
     "line": 164,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Anthropic/claude-code/skills/google-workspace/references/sheets.md",
     "line": 127,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "pdf",
     "score": 65,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "plugin-authoring",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "fleet-manager",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "agents",
     "score": 81,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "docx",
     "score": 83,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "claude-api",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "update-config",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "xlsx",
     "score": 85,
     "verdict": "OK"
    }
   ],
   "id": "COL-06",
   "label": "asgeirtj/system_prompts_leaks"
  },
  {
   "category": "Memory & context",
   "score": 95,
   "verdict": "OK",
   "units": 1849,
   "skills": 1089,
   "commands": 454,
   "agents": 304,
   "hooks": 1,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 1849
   },
   "clean_units": 1484,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 416,
    "MED": 261,
    "HIGH": 13
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 231
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 29
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 5
    },
    {
     "rule": "rm-rf-broad",
     "label": "Broad recursive delete",
     "count": 4
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 2
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "200k+",
   "repo": "affaan-m/ECC",
   "url": "https://github.com/affaan-m/ECC",
   "stars": 310210,
   "description": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
   "license": "MIT",
   "commit": "4adeee6732a12d1540f49a4d50a38ce8c97f9a53",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/story-lifecycle/SKILL.md",
     "line": 87,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".agents/skills/eval-harness",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".agents/skills/mle-workflow",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/commands/add-language-rules.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/commands/database-migration.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/commands/feature-development.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "commands/skill-create.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "docs/es/commands/skill-create.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "docs/ja-JP/commands/skill-create.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "docs/tr/commands/skill-create.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "docs/zh-CN/commands/skill-create.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "pi/core/skills/inherit-legacy-style",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/inherit-legacy-style",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agents/react-reviewer.md",
     "line": 80,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "commands/prp-plan.md",
     "line": 12,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "pi/core/commands/prp-plan.md",
     "line": 12,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/token-budget-advisor/SKILL.md",
     "line": 86,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/visa-doc-translate/SKILL.md",
     "line": 10,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": ".agents/skills/fal-ai-media/SKILL.md",
     "line": 215,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": ".agents/skills/security-review/SKILL.md",
     "line": 459,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": ".agents/skills/video-editing/SKILL.md",
     "line": 179,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": ".kiro/skills/django-security/SKILL.md",
     "line": 364,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": ".kiro/skills/security-review/SKILL.md",
     "line": 446,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/es/skills/security-review/SKILL.md",
     "line": 452,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/ja-JP/skills/django-security/SKILL.md",
     "line": 366,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "inherit-legacy-style",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "inherit-legacy-style",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "eval-harness",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "mle-workflow",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "story-lifecycle",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "database-migration",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "add-language-rules",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "feature-development",
     "score": 78,
     "verdict": "OK"
    }
   ],
   "id": "MEM-03",
   "label": "affaan-m/ECC"
  },
  {
   "category": "Browser & devices",
   "score": 94,
   "verdict": "OK",
   "units": 4,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 2,
   "unit_verdicts": {
    "OK": 4
   },
   "clean_units": 2,
   "caps": [
    "hooks",
    "mcp",
    "shell"
   ],
   "sev": {
    "MED": 2
   },
   "rules": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "mobile-next/mobile-mcp",
   "url": "https://github.com/mobile-next/mobile-mcp",
   "stars": 10855,
   "description": "Mobile MCP: let AI agents drive your iOS and Android apps. MCP server for simulators, emulators and real devices. Works with Claude Code, Codex, Cursor and any MCP client.",
   "license": "Apache-2.0",
   "commit": "6747dff92f61a48f2f8b4620236876f54a7779fc",
   "top_findings": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "mcp.json",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "plugin/.claude-plugin/plugin.json",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "mcp",
     "name": "mobile-mcp",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "mobile-mcp",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "BRO-02",
   "label": "mobile-next/mobile-mcp"
  },
  {
   "category": "Design & UI",
   "score": 94,
   "verdict": "OK",
   "units": 19,
   "skills": 13,
   "commands": 2,
   "agents": 1,
   "hooks": 0,
   "mcp": 3,
   "unit_verdicts": {
    "OK": 19
   },
   "clean_units": 7,
   "caps": [
    "mcp",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 8,
    "MED": 4
   },
   "rules": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "count": 3
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "100k–200k",
   "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
   "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
   "stars": 153755,
   "description": "An AI skill that provides design intelligence for building professional UI/UX across multiple platforms.",
   "license": "MIT",
   "commit": "8db36338810d0942567b97ce439affd1619fcf31",
   "top_findings": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "stack/.mcp.json",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "stack/.mcp.json",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "stack/.mcp.json",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "stack/.claude/agents/design-review.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "design-review",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "playwright",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "chrome-devtools",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "mcp",
     "name": "shadcn",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "brand",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "design",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "design-system",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ui-styling",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DES-06",
   "label": "nextlevelbuilder/ui-ux-pro-max-skill"
  },
  {
   "category": "Dev workflow",
   "score": 94,
   "verdict": "OK",
   "units": 42,
   "skills": 26,
   "commands": 10,
   "agents": 5,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 41,
    "CAUTION": 1
   },
   "clean_units": 35,
   "caps": [
    "hooks",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 4,
    "MED": 2,
    "HIGH": 2
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 1
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 1
    }
   ],
   "stars_bucket": "100k–200k",
   "repo": "addyosmani/agent-skills",
   "url": "https://github.com/addyosmani/agent-skills",
   "stars": 120205,
   "description": "Production-grade engineering skills for AI coding agents.",
   "license": "MIT",
   "commit": "e997ac5b9a74eab332d5e9793bb38a38c8cfdd74",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/source-driven-development/SKILL.md",
     "line": 110,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "hooks/sdd-cache-post.sh",
     "line": 82,
     "auto_run": true
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/doubt-driven-development/SKILL.md",
     "line": 219,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/planning-and-task-breakdown/SKILL.md",
     "line": 236,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 67,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "source-driven-development",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "doubt-driven-development",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "planning-and-task-breakdown",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "browser-testing-with-devtools",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "code-review-and-quality",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "build",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DEV-15",
   "label": "addyosmani/agent-skills"
  },
  {
   "category": "Dev workflow",
   "score": 94,
   "verdict": "OK",
   "units": 190,
   "skills": 43,
   "commands": 77,
   "agents": 63,
   "hooks": 1,
   "mcp": 6,
   "unit_verdicts": {
    "OK": 190
   },
   "clean_units": 127,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 51,
    "LOW": 47
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 36
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 11
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 3
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "luongnv89/claude-howto",
   "url": "https://github.com/luongnv89/claude-howto",
   "stars": 47568,
   "description": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
   "license": "MIT",
   "commit": "5609e68a6ce838579e15fd31ceb6025be08841df",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 75,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 330,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 686,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 330,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 684,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 686,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 747,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 748,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 748,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 748,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/self-assessment/SKILL.md",
     "line": 114,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/self-assessment/SKILL.md",
     "line": 351,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/self-assessment/references/deep-assessment-rounds.md",
     "line": 52,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": ".claude/skills/self-assessment/references/topic-recommendations.md",
     "line": 73,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/skills/lesson-quiz/references/question-bank.md",
     "line": 684,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/devops-automation/agents/alert-analyzer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/devops-automation/agents/deployment-specialist.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/devops-automation/agents/incident-commander.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/pr-review/agents/performance-analyzer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/pr-review/agents/security-reviewer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "07-plugins/pr-review/agents/test-checker.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "fa/07-plugins/devops-automation/agents/alert-analyzer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "fa/07-plugins/devops-automation/agents/deployment-specialist.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "fa/07-plugins/devops-automation/agents/incident-commander.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "fa/07-plugins/pr-review/agents/performance-analyzer.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "lesson-quiz",
     "score": 77,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "self-assessment",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "incident-commander",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "deployment-specialist",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "incident-commander",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "deployment-specialist",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "incident-commander",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "deployment-specialist",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "DEV-16",
   "label": "luongnv89/claude-howto"
  },
  {
   "category": "Research & writing",
   "score": 94,
   "verdict": "OK",
   "units": 12,
   "skills": 12,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 12
   },
   "clean_units": 9,
   "caps": [
    "injection-surface",
    "shell"
   ],
   "sev": {
    "MED": 4,
    "LOW": 5
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "HKUSTDial/Supervisor-Skills",
   "url": "https://github.com/HKUSTDial/Supervisor-Skills",
   "stars": 13493,
   "description": "将博导十年科研经验炼化为可直接调用的 AI 技能。从 Idea 构思到论文投稿，你的 AI 科研副导师。",
   "license": "NOASSERTION",
   "commit": "364d96236dab51eacbeb45bcfb56ebd7e3938d5c",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/intro-drafter/references/prose-delivery.md",
     "line": 52,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/paper-writer/references/prose-delivery.md",
     "line": 52,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "others/drawio-reconstruction/README.md",
     "line": 114,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "others/drawio-reconstruction/README.zh-CN.md",
     "line": 115,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "drawio-reconstruction",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "intro-drafter",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "paper-writer",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "RES-07",
   "label": "HKUSTDial/Supervisor-Skills"
  },
  {
   "category": "Research & writing",
   "score": 94,
   "verdict": "OK",
   "units": 27,
   "skills": 5,
   "commands": 16,
   "agents": 5,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 27
   },
   "clean_units": 20,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network"
   ],
   "sev": {
    "MED": 6,
    "LOW": 24
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 5
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "Imbad0202/academic-research-skills",
   "url": "https://github.com/Imbad0202/academic-research-skills",
   "stars": 58423,
   "description": "Academic Research Skills for Claude Code: research → write → review → revise → finalize",
   "license": "NOASSERTION",
   "commit": "df5b4ca2f16fbda18cdecc5927fca384f2b6c002",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "academic-paper-reviewer/agents/field_analyst_agent.md",
     "line": 83,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "academic-paper/agents/formatter_agent.md",
     "line": 526,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "academic-paper/agents/formatter_agent.md",
     "line": 1053,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "academic-paper/agents/peer_reviewer_agent.md",
     "line": 380,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "academic-pipeline/references/process_summary_protocol.md",
     "line": 15,
     "auto_run": false
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "sev": "MED",
     "file": "deep-research/references/chinese_literature_api_protocol.md",
     "line": 59,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "academic-paper",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "academic-paper-reviewer",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "deep-research",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "academic-pipeline",
     "score": 89,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "synthesis-agent",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "report-compiler-agent",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "research-architect-agent",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "RES-08",
   "label": "Imbad0202/academic-research-skills"
  },
  {
   "category": "Apps & harnesses",
   "score": 93,
   "verdict": "OK",
   "units": 9,
   "skills": 9,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 9
   },
   "clean_units": 3,
   "caps": [
    "network"
   ],
   "sev": {
    "MED": 6
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 6
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "decolua/9router",
   "url": "https://github.com/decolua/9router",
   "stars": 32818,
   "description": "Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tokens, never hit limits.",
   "license": "MIT",
   "commit": "5ae63d22847e07042e235b40e1d926b65e509013",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-embeddings/SKILL.md",
     "line": 41,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-image/SKILL.md",
     "line": 48,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-stt/SKILL.md",
     "line": 50,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-tts/SKILL.md",
     "line": 50,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-web-fetch/SKILL.md",
     "line": 80,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/9router-web-search/SKILL.md",
     "line": 44,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "9router-embeddings",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "9router-image",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "9router-stt",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "9router-tts",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "9router-web-fetch",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "9router-web-search",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "APP-09",
   "label": "decolua/9router"
  },
  {
   "category": "Marketing & business",
   "score": 93,
   "verdict": "OK",
   "units": 18,
   "skills": 3,
   "commands": 12,
   "agents": 3,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 18
   },
   "clean_units": 11,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 10,
    "MED": 4
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 3
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "ai-job-search-dev/ai-job-search",
   "url": "https://github.com/ai-job-search-dev/ai-job-search",
   "stars": 73304,
   "description": "The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep interviews. Fork it and own it.",
   "license": "MIT",
   "commit": "4e021e52f7e3d4016e0c22fc416c814a3d44c5c9",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": ".claude/commands/notion-sync.md",
     "line": 60,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/application-reviewer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/posting-fetcher.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/posting-scorer.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "posting-scorer",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "application-reviewer",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "posting-fetcher",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "notion-sync",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "scrape",
     "score": 94,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "job-application-assistant",
     "score": 96,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "upskill",
     "score": 96,
     "verdict": "OK"
    }
   ],
   "id": "MAR-05",
   "label": "ai-job-search-dev/ai-job-search"
  },
  {
   "category": "Browser & devices",
   "score": 92,
   "verdict": "OK",
   "units": 3,
   "skills": 3,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 3
   },
   "clean_units": 0,
   "caps": [
    "network",
    "shell"
   ],
   "sev": {
    "MED": 3
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "citrolabs/ego-lite",
   "url": "https://github.com/citrolabs/ego-lite",
   "stars": 24372,
   "description": "The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, without disturbing you. Zero cost, zero config.",
   "license": "MIT",
   "commit": "f499162d1b911ba9b320ed31b741dba7ebc2e4d6",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "package/ego-browser/skill-body/SKILL.md",
     "line": 466,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "plugins/ego/skills/ego-browser/scripts/install.sh",
     "line": 51,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/ego-browser/scripts/install.sh",
     "line": 51,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "ego-browser",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "skill-body",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ego-browser",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "BRO-03",
   "label": "citrolabs/ego-lite"
  },
  {
   "category": "Collections",
   "score": 92,
   "verdict": "CAUTION",
   "units": 830,
   "skills": 501,
   "commands": 191,
   "agents": 135,
   "hooks": 1,
   "mcp": 2,
   "unit_verdicts": {
    "OK": 825,
    "CAUTION": 2,
    "REVIEW": 2,
    "BLOCK": 1
   },
   "clean_units": 635,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "MED": 172,
    "LOW": 249,
    "HIGH": 46
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 105
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 26
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 23
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 21
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 15
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 10
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 5
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 4
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "count": 2
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "count": 2
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 1
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "count": 1
    },
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "count": 1
    },
    {
     "rule": "mcp-remote",
     "label": "Remote MCP server",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "alirezarezvani/claude-skills",
   "url": "https://github.com/alirezarezvani/claude-skills",
   "stars": 30432,
   "description": "410 Claude Code skills & agent skills & plugins (120+ Agents, custom commands, 410+ skills, customizable references, scripts)for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory, research, business operations, commercial & finance, and your daily productivity skills.",
   "license": "MIT",
   "commit": "ea7b5ab8da93bbba8880152d9ccb8c9979f12252",
   "top_findings": [
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "sev": "HIGH",
     "file": "engineering/skills/skill-security-auditor/SKILL.md",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "sev": "HIGH",
     "file": "engineering/i18n-localization/skills/i18n-localization/scripts/pseudo_localize.py",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "sev": "HIGH",
     "file": "engineering/skills/i18n-localization/scripts/pseudo_localize.py",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/assets/managed-settings.example.json",
     "line": 3,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 16,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 113,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 175,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 241,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 242,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/assets/managed-settings.example.json",
     "line": 3,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 16,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 113,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 175,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 241,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 242,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "agent-launcher/skills/stage-launch/scripts/launch_script_writer.py",
     "line": 52,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "agent-launcher/skills/stage-launch/scripts/launch_script_writer.py",
     "line": 61,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "agent-launcher/skills/stage-launch/scripts/launch_script_writer.py",
     "line": 71,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "agent-launcher/skills/stage-launch/scripts/launch_script_writer.py",
     "line": 78,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/coding-agent-rollout/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 117,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/skills/coding-agent-rollout/scripts/settings_linter.py",
     "line": 117,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/skills/full-page-screenshot/scripts/full-page-screenshot.mjs",
     "line": 626,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/skills/migration-architect/scripts/rollback_generator.py",
     "line": 156,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/skills/skill-security-auditor/SKILL.md",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "engineering/skills/tech-debt-tracker/assets/sample_codebase/src/frontend.js",
     "line": 355,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "coding-agent-rollout",
     "score": 0,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "coding-agent-rollout",
     "score": 0,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "skill-security-auditor",
     "score": 0,
     "verdict": "BLOCK"
    },
    {
     "kind": "skill",
     "name": "stage-launch",
     "score": 68,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "tech-debt-tracker",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "pr-review-expert",
     "score": 75,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "migration-architect",
     "score": 77,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "cs-handoff",
     "score": 78,
     "verdict": "OK"
    }
   ],
   "id": "COL-07",
   "label": "alirezarezvani/claude-skills"
  },
  {
   "category": "Design & UI",
   "score": 92,
   "verdict": "OK",
   "units": 1,
   "skills": 0,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "mcp",
    "shell"
   ],
   "sev": {
    "MED": 1
   },
   "rules": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "DayuanJiang/next-ai-draw-io",
   "url": "https://github.com/DayuanJiang/next-ai-draw-io",
   "stars": 37163,
   "description": "Draw and edit draw.io diagrams by chatting with an AI. Web app, desktop app, and an MCP server for Claude Code, Cursor, Codex and VS Code.",
   "license": "Apache-2.0",
   "commit": "9534a668e3bd53f9c08aa5b8d2d77f409ccd09d4",
   "top_findings": [
    {
     "rule": "mcp-unpinned",
     "label": "Unpinned MCP package",
     "sev": "MED",
     "file": "packages/claude-plugin/.mcp.json",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "mcp",
     "name": "drawio",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "DES-07",
   "label": "DayuanJiang/next-ai-draw-io"
  },
  {
   "category": "Design & UI",
   "score": 92,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "shell"
   ],
   "sev": {
    "MED": 1
   },
   "rules": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "op7418/guizang-ppt-skill",
   "url": "https://github.com/op7418/guizang-ppt-skill",
   "stars": 30370,
   "description": "AI-agent Skill for generating polished HTML slide decks: editorial magazine and Swiss layouts, image prompts, social covers, and a WebGL/low-power presentation runtime.",
   "license": "AGPL-3.0",
   "commit": "93d21bf4a73a851907a6eb00acbf30618236667a",
   "top_findings": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "scripts/validate-swiss-deck.mjs",
     "line": 150,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "guizang-ppt-skill",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "DES-08",
   "label": "op7418/guizang-ppt-skill"
  },
  {
   "category": "Dev workflow",
   "score": 92,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "injection-surface"
   ],
   "sev": {
    "MED": 1
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "nidhinjs/prompt-master",
   "url": "https://github.com/nidhinjs/prompt-master",
   "stars": 16301,
   "description": "A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or credits wasted. Full context and memory retention",
   "license": "MIT",
   "commit": "49b3a72469b1e7287d66387004ccfcca90e5968a",
   "top_findings": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "references/templates.md",
     "line": 415,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "prompt-master",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "DEV-17",
   "label": "nidhinjs/prompt-master"
  },
  {
   "category": "Marketing & business",
   "score": 92,
   "verdict": "OK",
   "units": 65,
   "skills": 40,
   "commands": 0,
   "agents": 24,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 65
   },
   "clean_units": 36,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 37,
    "MED": 23
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 18
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 5
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "AgriciDaniel/claude-seo",
   "url": "https://github.com/AgriciDaniel/claude-seo",
   "stars": 32186,
   "description": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
   "license": "MIT",
   "commit": "468ed5b0d9e3249394783710e54abb02837e326b",
   "top_findings": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/seo-image-gen/references/post-processing.md",
     "line": 14,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/seo-images/SKILL.md",
     "line": 259,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/seo-images/SKILL.md",
     "line": 260,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/seo-images/SKILL.md",
     "line": 454,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/seo-images/SKILL.md",
     "line": 455,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-agentic.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-backlinks.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-content.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-drift.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-ecommerce.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-geo.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-google.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-image-gen.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-local.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-maps.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-performance.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-schema.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-sitemap.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-sxo.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-technical.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "agents/seo-visual.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "extensions/banana/agents/seo-image-gen.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": "extensions/matomo/agents/seo-matomo.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "seo-images",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-sxo",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-maps",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-geo",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-local",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-google",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-performance",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "seo-sitemap",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "MAR-06",
   "label": "AgriciDaniel/claude-seo"
  },
  {
   "category": "Media & content",
   "score": 92,
   "verdict": "OK",
   "units": 6,
   "skills": 6,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 6
   },
   "clean_units": 4,
   "caps": [
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 6,
    "MED": 15
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 15
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "KKKKhazix/khazix-skills",
   "url": "https://github.com/KKKKhazix/khazix-skills",
   "stars": 22520,
   "description": "数字生命卡兹克开源的 AI Skills 合集 | Agent Skills: leader（帮你定义目标）, neat-freak 洁癖, hv-analysis, khazix-writer & more — Claude Code, Codex & 40+ agents",
   "license": "MIT",
   "commit": "76fc0f8e8245b40a809d8eed89b27f04cbcf81bb",
   "top_findings": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/SKILL.md",
     "line": 128,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/SKILL.md",
     "line": 128,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 36,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 36,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 45,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 47,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "storage-analyzer/references/linux.md",
     "line": 47,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "storage-analyzer",
     "score": 82,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "aihot",
     "score": 97,
     "verdict": "OK"
    }
   ],
   "id": "MED-03",
   "label": "KKKKhazix/khazix-skills"
  },
  {
   "category": "Apps & harnesses",
   "score": 91,
   "verdict": "OK",
   "units": 32,
   "skills": 32,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 32
   },
   "clean_units": 21,
   "caps": [
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "MED": 7,
    "LOW": 12,
    "HIGH": 3
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 9
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "kubesphere/kubesphere",
   "url": "https://github.com/kubesphere/kubesphere",
   "stars": 17088,
   "description": "The container platform tailored for Kubernetes multi-cloud, datacenter, and edge management ⎈ 🖥 ☁️",
   "license": "NOASSERTION",
   "commit": "04a29b5c601470fa6bc2f2e92358dcb802a0d414",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/kubesphere-core/scripts/ks_api.py",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/kubesphere-multi-tenant-management/scripts/ks_api.py",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/nodegroup/scripts/nodegroup_api.py",
     "line": 66,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/SKILL.md",
     "line": 137,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/SKILL.md",
     "line": 139,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/SKILL.md",
     "line": 140,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/SKILL.md",
     "line": 141,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/references/inspection.md",
     "line": 123,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "skills/frontend-forge-fe-operations/references/inspection.md",
     "line": 171,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "skills/kubesphere-devops-tenant/SKILL.md",
     "line": 689,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "kubesphere-core",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "kubesphere-multi-tenant-management",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "nodegroup",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "frontend-forge-fe-operations",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "kubesphere-devops-tenant",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "kubesphere-devops-jenkins",
     "score": 96,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "kubesphere-devops-pipeline",
     "score": 96,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "kubeeye",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "APP-10",
   "label": "kubesphere/kubesphere"
  },
  {
   "category": "Dev workflow",
   "score": 91,
   "verdict": "CAUTION",
   "units": 229,
   "skills": 225,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 4,
   "unit_verdicts": {
    "OK": 222,
    "REVIEW": 6,
    "BLOCK": 1
   },
   "clean_units": 153,
   "caps": [
    "fs-write",
    "injection-surface",
    "mcp",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 177,
    "MED": 41,
    "HIGH": 20
   },
   "rules": [
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 20
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 14
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 9
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 7
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 3
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 3
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 2
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "count": 2
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "google/skills",
   "url": "https://github.com/google/skills",
   "stars": 24621,
   "description": "Agent Skills for Google products and technologies",
   "license": "Apache-2.0",
   "commit": "a6782daef41b064c659f0b16cb46609cf4b8211d",
   "top_findings": [
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "HIGH",
     "file": "skills/cloud/google-cloud-filestore-nfs-browser/scripts/jump_host_engine.py",
     "line": 225,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/cloud/agent-platform-eval-flywheel/scripts/endpoint_evaluation.py",
     "line": 37,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/cloud/agent-platform-skill-registry/scripts/skill_registry_ops.py",
     "line": 65,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/cloud/apigee-agent-gateway-governance/scripts/ensure_apigee_environment.sh",
     "line": 255,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/cloud/google-cloud-solution-multi-agent-security/scripts/verify_egress_policies.py",
     "line": 26,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/identity/sign-in-with-google-web/SKILL.md",
     "line": 66,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "skills/cloud/secops-hunt/references/03_edge_appliances_and_zero_day_exploitation.md",
     "line": 59,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/cloud/google-cicd-deploy/SKILL.md",
     "line": 245,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/cloud/secops-cases/SKILL.md",
     "line": 50,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/cloud/secops-hunt/references/01_nation_state_apt_espionage.md",
     "line": 113,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/SKILL.md",
     "line": 65,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/SKILL.md",
     "line": 113,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/SKILL.md",
     "line": 117,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/SKILL.md",
     "line": 118,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/references/advanced_rest_api.md",
     "line": 23,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/references/hosts.md",
     "line": 4,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/scripts/gerrit.py",
     "line": 20,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/scripts/gerrit.py",
     "line": 337,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/scripts/gerrit.py",
     "line": 344,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/developers/gerrit-code-review/scripts/gerrit.py",
     "line": 389,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/cloud/apigee-agent-gateway-governance/scripts/assess_integration.sh",
     "line": 168,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/cloud/google-cloud-filestore-nfs-browser/scripts/jump_host_engine.py",
     "line": 225,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/cloud/agent-platform-agent-registry/SKILL.md",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/cloud/agent-platform-agent-registry/SKILL.md",
     "line": 43,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/cloud/agent-platform-inference/SKILL.md",
     "line": 174,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "gerrit-code-review",
     "score": 58,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "secops-hunt",
     "score": 60,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "google-cloud-filestore-nfs-browser",
     "score": 64,
     "verdict": "BLOCK"
    },
    {
     "kind": "skill",
     "name": "apigee-agent-gateway-governance",
     "score": 67,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "cloud-network-insights",
     "score": 67,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "google-cicd-deploy",
     "score": 67,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "sign-in-with-google-web",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "agent-platform-skill-registry",
     "score": 77,
     "verdict": "OK"
    }
   ],
   "id": "DEV-18",
   "label": "google/skills"
  },
  {
   "category": "Research & writing",
   "score": 91,
   "verdict": "OK",
   "units": 98,
   "skills": 98,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 97,
    "REVIEW": 1
   },
   "clean_units": 67,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 93,
    "MED": 39,
    "HIGH": 4
   },
   "rules": [
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 19
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "count": 6
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 6
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 4
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 3
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 3
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 1
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "Orchestra-Research/AI-Research-SKILLs",
   "url": "https://github.com/Orchestra-Research/AI-Research-SKILLs",
   "stars": 14802,
   "description": "Comprehensive open-source library of AI research and engineering skills for any AI model. Package the skills and your claude code/codex/gemini agent will be an AI research agent with full horsepower. Maintained by Orchestra Research.",
   "license": "MIT",
   "commit": "773a52944ba4747a18bd4ae9ade53fff041adcbc",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "07-safety-alignment/nemo-guardrails/SKILL.md",
     "line": 60,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "07-safety-alignment/nemo-guardrails/SKILL.md",
     "line": 76,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "07-safety-alignment/prompt-guard/SKILL.md",
     "line": 42,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "07-safety-alignment/prompt-guard/SKILL.md",
     "line": 85,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "0-autoresearch-skill/references/progress-reporting.md",
     "line": 165,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 142,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 142,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 610,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 610,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 823,
     "auto_run": false
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/dataset-formats.md",
     "line": 823,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "13-mlops/mlflow/SKILL.md",
     "line": 651,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "13-mlops/mlflow/references/deployment.md",
     "line": 92,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "14-agents/autogpt/references/troubleshooting.md",
     "line": 176,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "17-observability/phoenix/references/advanced-usage.md",
     "line": 430,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "17-observability/phoenix/references/advanced-usage.md",
     "line": 609,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "17-observability/phoenix/references/troubleshooting.md",
     "line": 517,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/references/advanced-usage.md",
     "line": 610,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "03-fine-tuning/axolotl/references/other.md",
     "line": 310,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/references/troubleshooting.md",
     "line": 148,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/references/troubleshooting.md",
     "line": 196,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "08-distributed-training/ray-train/references/multi-node.md",
     "line": 226,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/SKILL.md",
     "line": 64,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/SKILL.md",
     "line": 295,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "09-infrastructure/lambda-labs/SKILL.md",
     "line": 305,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "lambda-labs-gpu-cloud",
     "score": 61,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "nemo-guardrails",
     "score": 75,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "prompt-guard",
     "score": 75,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "axolotl",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "nemo-evaluator-sdk",
     "score": 79,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "autogpt-agents",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "phoenix-observability",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "skypilot-multi-cloud-orchestration",
     "score": 87,
     "verdict": "OK"
    }
   ],
   "id": "RES-09",
   "label": "Orchestra-Research/AI-Research-SKILLs"
  },
  {
   "category": "Apps & harnesses",
   "score": 90,
   "verdict": "OK",
   "units": 4,
   "skills": 4,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 4
   },
   "clean_units": 3,
   "caps": [
    "shell"
   ],
   "sev": {
    "MED": 4,
    "LOW": 4
   },
   "rules": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 4
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "shareAI-lab/learn-claude-code",
   "url": "https://github.com/shareAI-lab/learn-claude-code",
   "stars": 80847,
   "description": "Bash is all you need -  A nano claude code–like 「agent harness」, built from 0 to 1",
   "license": "MIT",
   "commit": "448c75bb596917ad196cc1fb7558f459c5c50fdd",
   "top_findings": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/agent-builder/references/minimal-agent.py",
     "line": 71,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/agent-builder/references/tool-templates.py",
     "line": 166,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/agent-builder/scripts/init_agent.py",
     "line": 66,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/agent-builder/scripts/init_agent.py",
     "line": 136,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "agent-builder",
     "score": 85,
     "verdict": "OK"
    }
   ],
   "id": "APP-11",
   "label": "shareAI-lab/learn-claude-code"
  },
  {
   "category": "Dev workflow",
   "score": 90,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "shell"
   ],
   "sev": {
    "MED": 1,
    "LOW": 1
   },
   "rules": [
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "jarrodwatts/claude-hud",
   "url": "https://github.com/jarrodwatts/claude-hud",
   "stars": 29299,
   "description": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
   "license": "MIT",
   "commit": "5fc08cbb610a7439993e40124637cbe193d60ea3",
   "top_findings": [
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "skills/hud/SKILL.md",
     "line": 8,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "hud",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "DEV-19",
   "label": "jarrodwatts/claude-hud"
  },
  {
   "category": "Collections",
   "score": 89,
   "verdict": "OK",
   "units": 147,
   "skills": 62,
   "commands": 33,
   "agents": 45,
   "hooks": 1,
   "mcp": 6,
   "unit_verdicts": {
    "OK": 142,
    "REVIEW": 5
   },
   "clean_units": 82,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "mcp",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 163,
    "MED": 54,
    "HIGH": 9
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 24
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 14
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "count": 9
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 6
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 5
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "rm-rf-broad",
     "label": "Broad recursive delete",
     "count": 1
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 1
    },
    {
     "rule": "mcp-remote",
     "label": "Remote MCP server",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "anthropics/claude-plugins-official",
   "url": "https://github.com/anthropics/claude-plugins-official",
   "stars": 48123,
   "description": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
   "license": "Apache-2.0",
   "commit": "6985b2d88dc08b4a0d202f5f0301f02e360b9cb1",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugins/code-modernization/agents/architecture-critic.md",
     "line": 53,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugins/code-modernization/agents/business-rules-extractor.md",
     "line": 61,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugins/code-modernization/agents/legacy-analyst.md",
     "line": 55,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugins/code-modernization/agents/security-auditor.md",
     "line": 85,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugins/receipts/skills/receipts/SKILL.md",
     "line": 142,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/example-plugin/commands/example-command.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/example-plugin/skills/example-command",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/mcp-tunnels/commands/create-docker-mcp-tunnel.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/pr-review-toolkit/commands/review-pr.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/claude-security/skills/claude-security/SKILL.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/claude-security/skills/claude-security/SKILL.md",
     "line": 62,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit-push-pr.md",
     "line": 8,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit-push-pr.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit-push-pr.md",
     "line": 10,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit.md",
     "line": 8,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit.md",
     "line": 10,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": "plugins/commit-commands/commands/commit.md",
     "line": 11,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/llm.py",
     "line": 1870,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/llm.py",
     "line": 1870,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/patterns.py",
     "line": 53,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/patterns.py",
     "line": 54,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/patterns.py",
     "line": 57,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/patterns.py",
     "line": 57,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "plugins/security-guidance/hooks/patterns.py",
     "line": 114,
     "auto_run": true
    }
   ],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 66,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "architecture-critic",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "security-auditor",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "legacy-analyst",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "agent",
     "name": "business-rules-extractor",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "command",
     "name": "create-docker-mcp-tunnel",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "example-command",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "receipts",
     "score": 80,
     "verdict": "OK"
    }
   ],
   "id": "COL-08",
   "label": "anthropics/claude-plugins-official"
  },
  {
   "category": "Dev workflow",
   "score": 89,
   "verdict": "OK",
   "units": 86,
   "skills": 71,
   "commands": 6,
   "agents": 8,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 83,
    "REVIEW": 3
   },
   "clean_units": 51,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "MED": 44,
    "LOW": 95,
    "HIGH": 4
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 31
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 6
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 3
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 3
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 3
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "Jeffallan/claude-skills",
   "url": "https://github.com/Jeffallan/claude-skills",
   "stars": 12513,
   "description": "71 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
   "license": "MIT",
   "commit": "d98d06edb54c25cfb94017c0ef830342a34a43ba",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugin/skills/prompt-engineer/references/evaluation-frameworks.md",
     "line": 385,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugin/skills/prompt-engineer/references/system-prompts.md",
     "line": 301,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "plugin/skills/prompt-engineer/references/system-prompts.md",
     "line": 469,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "plugin/skills/nuxt-expert/references/server-routes.md",
     "line": 237,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "plugin/skills/atlassian-mcp/SKILL.md",
     "line": 118,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "plugin/skills/code-documenter/SKILL.md",
     "line": 135,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/atlassian-mcp/references/authentication-patterns.md",
     "line": 47,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/atlassian-mcp/references/authentication-patterns.md",
     "line": 81,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/chaos-tools.md",
     "line": 111,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/chaos-tools.md",
     "line": 156,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/chaos-tools.md",
     "line": 181,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/infrastructure-chaos.md",
     "line": 16,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/infrastructure-chaos.md",
     "line": 26,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/infrastructure-chaos.md",
     "line": 40,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/chaos-engineer/references/infrastructure-chaos.md",
     "line": 51,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/django-storages-s3/references/presigned-urls.md",
     "line": 87,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/firebase-expert/references/cloud-functions.md",
     "line": 94,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/flask-expert/references/authentication.md",
     "line": 399,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/flask-expert/references/templates-forms.md",
     "line": 199,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/fullstack-guardian/references/common-patterns.md",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/graphql-architect/references/security.md",
     "line": 547,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/javascript-pro/references/browser-apis.md",
     "line": 11,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/javascript-pro/references/browser-apis.md",
     "line": 50,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/nuxt-expert/references/security.md",
     "line": 147,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "plugin/skills/secure-code-guardian/references/xss-csrf.md",
     "line": 96,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "nuxt-expert",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "prompt-engineer",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "kubernetes-specialist",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "atlassian-mcp",
     "score": 77,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "chaos-engineer",
     "score": 81,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "shopify-expert",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "javascript-pro",
     "score": 87,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "security-reviewer",
     "score": 87,
     "verdict": "OK"
    }
   ],
   "id": "DEV-20",
   "label": "Jeffallan/claude-skills"
  },
  {
   "category": "Dev workflow",
   "score": 89,
   "verdict": "OK",
   "units": 177,
   "skills": 78,
   "commands": 0,
   "agents": 98,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 177
   },
   "clean_units": 53,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 110,
    "LOW": 206
   },
   "rules": [
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "count": 73
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 34
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "Donchitos/Claude-Code-Game-Studios",
   "url": "https://github.com/Donchitos/Claude-Code-Game-Studios",
   "stars": 40829,
   "description": "Turn Claude Code into a full game dev studio — 49 AI agents, 75 workflow skills, and a complete coordination system mirroring real studio hierarchy.",
   "license": "MIT",
   "commit": "abc0de79d6ceb0b5d7aa693945849b3937afbe6a",
   "top_findings": [
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/adopt/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/architecture-decision/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/architecture-review/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/art-bible/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/asset-spec/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/balance-check/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/brainstorm/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/bug-report/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/bug-triage/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/code-review/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/consistency-check/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/content-audit/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/create-architecture/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/create-control-manifest/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/create-epics/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/create-stories/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/cut/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/design-review/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/design-system/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/dev-story/SKILL.md",
     "line": 10,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/gate-check/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/launch-checklist/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/localize/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/map-systems/SKILL.md",
     "line": 9,
     "auto_run": false
    },
    {
     "rule": "bang-bash",
     "label": "Shell runs on command invoke",
     "sev": "MED",
     "file": ".claude/skills/milestone-review/SKILL.md",
     "line": 9,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "quick-design",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "ux-design",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "write-changelog",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 85,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "architecture-decision",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "brainstorm",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "prototype",
     "score": 86,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "qa-plan",
     "score": 86,
     "verdict": "OK"
    }
   ],
   "id": "DEV-21",
   "label": "Donchitos/Claude-Code-Game-Studios"
  },
  {
   "category": "Apps & harnesses",
   "score": 86,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 1,
    "LOW": 3
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "alibaba/nacos",
   "url": "https://github.com/alibaba/nacos",
   "stars": 33536,
   "description": "an easy-to-use dynamic service discovery, configuration and service management platform for building AI cloud native applications.",
   "license": "Apache-2.0",
   "commit": "73158dfdd6ecade463a27597dbaedde4578deb6a",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "skills/nacos-skill-registry/SKILL.md",
     "line": 84,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "nacos-skill-registry",
     "score": 86,
     "verdict": "OK"
    }
   ],
   "id": "APP-12",
   "label": "alibaba/nacos"
  },
  {
   "category": "Design & UI",
   "score": 86,
   "verdict": "OK",
   "units": 20,
   "skills": 20,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 20
   },
   "clean_units": 14,
   "caps": [
    "injection-surface"
   ],
   "sev": {
    "HIGH": 5,
    "LOW": 1
   },
   "rules": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 5
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "emilkowalski/skills",
   "url": "https://github.com/emilkowalski/skills",
   "stars": 59299,
   "description": "Skills for Designers and Engineers.",
   "license": "MIT",
   "commit": "64eb3deb9a5fbfa041faf783e0bc3fd635872e9c",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/break-ui/SKILL.md",
     "line": 36,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/choreograph/SKILL.md",
     "line": 31,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/find-animation-opportunities/SKILL.md",
     "line": 29,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/improve-animations/SKILL.md",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/remove-animations/SKILL.md",
     "line": 32,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "break-ui",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "choreograph",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "find-animation-opportunities",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "improve-animations",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "remove-animations",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "learn-taste",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "DES-09",
   "label": "emilkowalski/skills"
  },
  {
   "category": "Memory & context",
   "score": 86,
   "verdict": "OK",
   "units": 13,
   "skills": 6,
   "commands": 6,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 12,
    "CAUTION": 1
   },
   "clean_units": 11,
   "caps": [
    "hooks",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 2,
    "MED": 2,
    "HIGH": 3
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 3
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "EverMind-AI/EverOS",
   "url": "https://github.com/EverMind-AI/EverOS",
   "stars": 13996,
   "description": "One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving across apps, tools, and workflows.",
   "license": "Apache-2.0",
   "commit": "6ac3898e7755dfc41002bfdc9704279009a82b81",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "use-cases/claude-code-plugin/hooks/scripts/utils/evermem-api.js",
     "line": 60,
     "auto_run": true
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "use-cases/claude-code-plugin/hooks/scripts/utils/evermem-api.js",
     "line": 179,
     "auto_run": true
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "use-cases/claude-code-plugin/hooks/scripts/utils/evermem-api.js",
     "line": 243,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "use-cases/claude-code-plugin/hooks/scripts/utils/sdk-filter.js",
     "line": 33,
     "auto_run": true
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "use-cases/claude-code-plugin/hooks/scripts/utils/sdk-filter.js",
     "line": 38,
     "auto_run": true
    }
   ],
   "worst_units": [
    {
     "kind": "hooks",
     "name": "hooks",
     "score": 40,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "verify-everos",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MEM-04",
   "label": "EverMind-AI/EverOS"
  },
  {
   "category": "Memory & context",
   "score": 86,
   "verdict": "OK",
   "units": 36,
   "skills": 12,
   "commands": 17,
   "agents": 6,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 34,
    "REVIEW": 2
   },
   "clean_units": 26,
   "caps": [
    "fs-write",
    "hooks",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 22,
    "MED": 6,
    "HIGH": 5
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 8
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "rtk-ai/rtk",
   "url": "https://github.com/rtk-ai/rtk",
   "stars": 87716,
   "description": "CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies",
   "license": "Apache-2.0",
   "commit": "9a94ec19463a957ecd8f22c89c15934a9c0bf9ec",
   "top_findings": [
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": ".claude/agents/technical-writer.md",
     "line": 166,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/commands/tech/audit-codebase.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/skills/repo-recap",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/skills/security-guardian",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".claude/skills/ship",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/agents/technical-writer.md",
     "line": 145,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": ".claude/skills/performance/SKILL.md",
     "line": 424,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/rtk-testing-specialist.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/rust-rtk.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/system-architect.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/technical-writer.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "agent",
     "name": "technical-writer",
     "score": 58,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "ship",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "command",
     "name": "audit-codebase",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "repo-recap",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "security-guardian",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "rtk-testing-specialist",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "rust-rtk",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "system-architect",
     "score": 90,
     "verdict": "OK"
    }
   ],
   "id": "MEM-05",
   "label": "rtk-ai/rtk"
  },
  {
   "category": "Research & writing",
   "score": 85,
   "verdict": "OK",
   "units": 9,
   "skills": 5,
   "commands": 3,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 9
   },
   "clean_units": 5,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 9,
    "HIGH": 2
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "microsoft/SkillOpt",
   "url": "https://github.com/microsoft/SkillOpt",
   "stars": 19203,
   "description": "SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.",
   "license": "MIT",
   "commit": "dc0b5e654cafa1073a2819086151c1e0d13012f0",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/claude-code/commands/skillopt-sleep-handoff.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "plugins/claude-code/commands/skillopt-sleep.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "command",
     "name": "skillopt-sleep-handoff",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "command",
     "name": "skillopt-sleep",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "skillopt-sleep",
     "score": 95,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "skillopt-sleep",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "RES-10",
   "label": "microsoft/SkillOpt"
  },
  {
   "category": "Security",
   "score": 84,
   "verdict": "CAUTION",
   "units": 818,
   "skills": 818,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 776,
    "REVIEW": 38,
    "BLOCK": 4
   },
   "clean_units": 255,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 2249,
    "HIGH": 254,
    "MED": 388
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 350
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 88
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 53
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 45
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 31
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 30
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 19
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 7
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 6
    },
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "count": 3
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "count": 3
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "count": 2
    },
    {
     "rule": "rm-rf-broad",
     "label": "Broad recursive delete",
     "count": 2
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "count": 1
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "count": 1
    },
    {
     "rule": "inj-role",
     "label": "Fake role markers",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "mukul975/Anthropic-Cybersecurity-Skills",
   "url": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
   "stars": 36703,
   "description": "817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF & MITRE F3 (Fight Fraud) · agentskills.io standard · Works with Claude Code, GitHub Copilot, Codex CLI, Cursor, Gemini CLI & 20+ platforms · 29 security domains · Apache 2.0",
   "license": "Apache-2.0",
   "commit": "54a798831d2266a3ca61ce68a7acb80b81160d57",
   "top_findings": [
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "sev": "HIGH",
     "file": "skills/deploying-honeytokens-and-canarytokens/SKILL.md",
     "line": 165,
     "auto_run": false
    },
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "sev": "HIGH",
     "file": "skills/implementing-canary-tokens-for-network-intrusion/SKILL.md",
     "line": 101,
     "auto_run": false
    },
    {
     "rule": "exfil-combo",
     "label": "Reads secrets + sends to undeclared host",
     "sev": "HIGH",
     "file": "skills/implementing-honeytokens-for-breach-detection/SKILL.md",
     "line": 60,
     "auto_run": false
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "sev": "HIGH",
     "file": "skills/auditing-mcp-servers-for-tool-poisoning/scripts/agent.py",
     "line": 34,
     "auto_run": false
    },
    {
     "rule": "hidden-unicode",
     "label": "Hidden unicode",
     "sev": "HIGH",
     "file": "skills/detecting-indirect-prompt-injection/SKILL.md",
     "line": 115,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/defending-llms-with-guardrails/SKILL.md",
     "line": 130,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/detecting-ai-model-prompt-injection-attacks/SKILL.md",
     "line": 87,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/detecting-ai-model-prompt-injection-attacks/references/api-reference.md",
     "line": 54,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/implementing-llm-guardrails-for-security/references/api-reference.md",
     "line": 67,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/implementing-llm-guardrails-for-security/references/api-reference.md",
     "line": 68,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/implementing-llm-guardrails-for-security/references/api-reference.md",
     "line": 69,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/implementing-llm-guardrails-for-security/references/api-reference.md",
     "line": 73,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-indicators-of-compromise/scripts/agent.py",
     "line": 126,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-malicious-url-with-urlscan/scripts/agent.py",
     "line": 22,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-malicious-url-with-urlscan/scripts/process.py",
     "line": 84,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-malicious-url-with-urlscan/scripts/process.py",
     "line": 91,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-malware-behavior-with-cuckoo-sandbox/scripts/agent.py",
     "line": 31,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/analyzing-malware-behavior-with-cuckoo-sandbox/scripts/agent.py",
     "line": 43,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/auditing-tls-certificate-transparency-logs/scripts/agent.py",
     "line": 680,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-adversary-infrastructure-tracking-system/scripts/agent.py",
     "line": 27,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-adversary-infrastructure-tracking-system/scripts/agent.py",
     "line": 34,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-automated-malware-submission-pipeline/scripts/agent.py",
     "line": 51,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-automated-malware-submission-pipeline/scripts/agent.py",
     "line": 73,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-automated-malware-submission-pipeline/scripts/agent.py",
     "line": 137,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/building-detection-rule-with-splunk-spl/scripts/agent.py",
     "line": 96,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "implementing-canary-tokens-for-network-intrusion",
     "score": 24,
     "verdict": "BLOCK"
    },
    {
     "kind": "skill",
     "name": "deploying-honeytokens-and-canarytokens",
     "score": 38,
     "verdict": "BLOCK"
    },
    {
     "kind": "skill",
     "name": "implementing-honeytokens-for-breach-detection",
     "score": 38,
     "verdict": "BLOCK"
    },
    {
     "kind": "skill",
     "name": "analyzing-persistence-mechanisms-in-linux",
     "score": 41,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "performing-privilege-escalation-assessment",
     "score": 50,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "detecting-ai-model-prompt-injection-attacks",
     "score": 52,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "performing-authenticated-vulnerability-scan",
     "score": 53,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "performing-linux-log-forensics-investigation",
     "score": 57,
     "verdict": "REVIEW"
    }
   ],
   "id": "SEC-02",
   "label": "mukul975/Anthropic-Cybersecurity-Skills"
  },
  {
   "category": "Research & writing",
   "score": 83,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "shell"
   ],
   "sev": {
    "MED": 5,
    "LOW": 4
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 5
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "virgiliojr94/book-to-skill",
   "url": "https://github.com/virgiliojr94/book-to-skill",
   "stars": 38961,
   "description": "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.",
   "license": "MIT",
   "commit": "79b3fa66d249635453f8e9bc517fe033ac9d5a91",
   "top_findings": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "README.ja.md",
     "line": 170,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "README.md",
     "line": 194,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "README.ru.md",
     "line": 166,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "README.zh-CN.md",
     "line": 170,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "book_to_skill/utils.py",
     "line": 1694,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "book-to-skill",
     "score": 83,
     "verdict": "OK"
    }
   ],
   "id": "RES-11",
   "label": "virgiliojr94/book-to-skill"
  },
  {
   "category": "Security",
   "score": 83,
   "verdict": "OK",
   "units": 79,
   "skills": 79,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 73,
    "REVIEW": 6
   },
   "clean_units": 22,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 485,
    "HIGH": 3,
    "MED": 96
   },
   "rules": [
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 38
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 20
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 12
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 12
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 8
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "count": 4
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 2
    },
    {
     "rule": "raw-ip",
     "label": "Public IP URL",
     "count": 2
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "SnailSploit/Claude-Red",
   "url": "https://github.com/SnailSploit/Claude-Red",
   "stars": 11516,
   "description": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
   "license": "MIT",
   "commit": "6196ba7464662de34e8744d359f175d1a7bca530",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "Skills/ai/offensive-ai-security/SKILL.md",
     "line": 210,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "Skills/utility/offensive-fast-checking/SKILL.md",
     "line": 380,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "Skills/infrastructure/offensive-initial-access/SKILL.md",
     "line": 76,
     "auto_run": false
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "MED",
     "file": "Skills/web/offensive-deserialization/SKILL.md",
     "line": 364,
     "auto_run": false
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "MED",
     "file": "Skills/web/offensive-rce/SKILL.md",
     "line": 507,
     "auto_run": false
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "MED",
     "file": "Skills/web/offensive-waf-bypass/SKILL.md",
     "line": 381,
     "auto_run": false
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "MED",
     "file": "Skills/web/offensive-xss/SKILL.md",
     "line": 317,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "Skills/infrastructure/offensive-initial-access/SKILL.md",
     "line": 407,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/container/offensive-k8s-attacks/SKILL.md",
     "line": 776,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/exploit-dev/offensive-crash-analysis/SKILL.md",
     "line": 10896,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/forensics/offensive-anti-forensics/SKILL.md",
     "line": 373,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-data-exfiltration/SKILL.md",
     "line": 131,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-data-exfiltration/SKILL.md",
     "line": 204,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-data-exfiltration/SKILL.md",
     "line": 415,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/supply-chain/offensive-supply-chain/SKILL.md",
     "line": 330,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/web/offensive-file-upload/SKILL.md",
     "line": 653,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/web/offensive-graphql/SKILL.md",
     "line": 281,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/web/offensive-race-condition/SKILL.md",
     "line": 170,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/web/offensive-race-condition/SKILL.md",
     "line": 208,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "Skills/web/offensive-ssrf/SKILL.md",
     "line": 654,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "Skills/fuzzing/offensive-fuzzing-course/SKILL.md",
     "line": 1005,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-data-exfiltration/SKILL.md",
     "line": 477,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-persistence/SKILL.md",
     "line": 317,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-persistence/SKILL.md",
     "line": 324,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "Skills/post-exploitation/offensive-persistence/SKILL.md",
     "line": 328,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "offensive-linux-privesc",
     "score": 61,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-data-exfiltration",
     "score": 68,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-persistence",
     "score": 68,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-initial-access",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-fuzzing-course",
     "score": 72,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-rce",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-supply-chain",
     "score": 76,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "offensive-ssrf",
     "score": 78,
     "verdict": "OK"
    }
   ],
   "id": "SEC-03",
   "label": "SnailSploit/Claude-Red"
  },
  {
   "category": "Security",
   "score": 83,
   "verdict": "OK",
   "units": 100,
   "skills": 84,
   "commands": 15,
   "agents": 0,
   "hooks": 0,
   "mcp": 1,
   "unit_verdicts": {
    "OK": 93,
    "CAUTION": 2,
    "REVIEW": 5
   },
   "clean_units": 38,
   "caps": [
    "fs-write",
    "injection-surface",
    "mcp",
    "network",
    "obfuscation",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 451,
    "HIGH": 15,
    "MED": 46
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 30
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 6
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 6
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 5
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 4
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 4
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "count": 3
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "count": 1
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "elementalsouls/Claude-BugHunter",
   "url": "https://github.com/elementalsouls/Claude-BugHunter",
   "stars": 21461,
   "description": "A Claude Code skill bundle for bug hunting and external red-team work - 84 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
   "license": "MIT",
   "commit": "9796beeeded3b9e6df50b9f5f89e79dc43bc6915",
   "top_findings": [
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/bb-local-toolkit/SKILL.md",
     "line": 1100,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/bug-bounty/SKILL.md",
     "line": 1100,
     "auto_run": false
    },
    {
     "rule": "inj-override",
     "label": "Instruction-override phrasing",
     "sev": "HIGH",
     "file": "skills/hunt-llm-ai/SKILL.md",
     "line": 34,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/hunt-business-logic/SKILL.md",
     "line": 39,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/hunt-rce/SKILL.md",
     "line": 173,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/offensive-osint/scripts/dashboard.py",
     "line": 771,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "skills/bb-local-toolkit/SKILL.md",
     "line": 603,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "skills/bug-bounty/SKILL.md",
     "line": 603,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "skills/hunt-lfi/SKILL.md",
     "line": 174,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "skills/hunt-rce/SKILL.md",
     "line": 110,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/supply-chain-attack-recon/SKILL.md",
     "line": 512,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/supply-chain-attack-recon/SKILL.md",
     "line": 518,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/supply-chain-attack-recon/SKILL.md",
     "line": 518,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/supply-chain-attack-recon/SKILL.md",
     "line": 635,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/hunt-lfi/SKILL.md",
     "line": 240,
     "auto_run": false
    },
    {
     "rule": "b64-decode-exec",
     "label": "Decode-and-execute",
     "sev": "MED",
     "file": "skills/hunt-xss/SKILL.md",
     "line": 322,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/bb-local-toolkit/SKILL.md",
     "line": 747,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/bug-bounty/SKILL.md",
     "line": 747,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/hunt-business-logic/SKILL.md",
     "line": 146,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/hunt-misc/SKILL.md",
     "line": 192,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/hunt-misc/SKILL.md",
     "line": 269,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/hunt-sharepoint/SKILL.md",
     "line": 382,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": "commands/autopilot.md",
     "line": 3,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": "commands/autopilot.md",
     "line": 15,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": "commands/autopilot.md",
     "line": 67,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "bb-local-toolkit",
     "score": 38,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "bug-bounty",
     "score": 38,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "supply-chain-attack-recon",
     "score": 56,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "offensive-osint",
     "score": 58,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "hunt-rce",
     "score": 59,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "hunt-lfi",
     "score": 66,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "hunt-business-logic",
     "score": 69,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "hunt-grpc",
     "score": 86,
     "verdict": "OK"
    }
   ],
   "id": "SEC-04",
   "label": "elementalsouls/Claude-BugHunter"
  },
  {
   "category": "Design & UI",
   "score": 82,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "network",
    "obfuscation",
    "shell"
   ],
   "sev": {
    "MED": 3,
    "LOW": 19
   },
   "rules": [
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "count": 3
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "img2threejs/img2threejs",
   "url": "https://github.com/img2threejs/img2threejs",
   "stars": 21878,
   "description": "Rebuild the object in a reference image as a code-only, procedural, quality-gated, animation-ready Three.js model. Token-efficient image-to-3D.",
   "license": "Apache-2.0",
   "commit": "0c0c49bc168e648dbaf9c8c080474de0b3a941b6",
   "top_findings": [
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "README.md",
     "line": 19,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "README.md",
     "line": 20,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "README.md",
     "line": 21,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "img2threejs",
     "score": 82,
     "verdict": "OK"
    }
   ],
   "id": "DES-10",
   "label": "img2threejs/img2threejs"
  },
  {
   "category": "Media & content",
   "score": 82,
   "verdict": "OK",
   "units": 6,
   "skills": 6,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 6
   },
   "clean_units": 1,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 6,
    "HIGH": 3,
    "MED": 1
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 3
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "ConardLi/garden-skills",
   "url": "https://github.com/ConardLi/garden-skills",
   "stars": 15750,
   "description": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
   "license": "MIT",
   "commit": "f2d7adeaf53dcce3d0eb19cbffe8c04f4c636c2a",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/gpt-image-2/scripts/shared.js",
     "line": 149,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/gpt-image-2/scripts/shared.js",
     "line": 168,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/motion-showreel/assets/editor/editor.js",
     "line": 18,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "skills/web-design-engineer/references/design-calibration.md",
     "line": 111,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "gpt-image-2",
     "score": 75,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "motion-showreel",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "beautiful-article",
     "score": 97,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "web-design-engineer",
     "score": 98,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "web-video-presentation",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MED-04",
   "label": "ConardLi/garden-skills"
  },
  {
   "category": "Apps & harnesses",
   "score": 81,
   "verdict": "OK",
   "units": 64,
   "skills": 64,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 58,
    "REVIEW": 5,
    "CAUTION": 1
   },
   "clean_units": 31,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 78,
    "HIGH": 24,
    "MED": 29
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 14
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 14
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 10
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "count": 5
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 4
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 4
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 1
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "nanocoai/nanoclaw",
   "url": "https://github.com/nanocoai/nanoclaw",
   "stars": 31154,
   "description": "Your own always-on AI assistant: self-hosted, open source, lightweight. Each agent runs in its own container on your machine, on the harness you choose (Claude Code, Codex, Cursor, OpenCode). Talk to it from Slack, WhatsApp, Telegram, Discord and more.",
   "license": "MIT",
   "commit": "9774cb596a32039d9464d78174ec5ed9531a9898",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/add-atomic-chat-tool/atomic-chat-mcp-stdio.ts",
     "line": 167,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/add-ollama-tool/ollama-mcp-stdio.ts",
     "line": 175,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/add-ollama-tool/ollama-mcp-stdio.ts",
     "line": 248,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/add-ollama-tool/ollama-mcp-stdio.ts",
     "line": 351,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/slack-a2a-rooms/scripts/open-a2a-room.ts",
     "line": 84,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/provision.ts",
     "line": 297,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/provision.ts",
     "line": 346,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/provision.ts",
     "line": 508,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/room-canvas.ts",
     "line": 120,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": ".claude/skills/add-macos-statusbar/SKILL.md",
     "line": 73,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-codex/payload/setup/providers/codex.test.ts",
     "line": 1431,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-codex/payload/setup/providers/codex.test.ts",
     "line": 1558,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-codex/payload/setup/providers/codex.test.ts",
     "line": 1574,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-codex/payload/setup/providers/codex.ts",
     "line": 161,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-codex/payload/setup/providers/codex.ts",
     "line": 164,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-iron-proxy/scripts/install-claude.sh",
     "line": 34,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-onecli/scripts/install-claude.sh",
     "line": 32,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": ".claude/skills/add-onecli/scripts/register-claude-token.sh",
     "line": 30,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": ".claude/skills/add-iron-proxy/payload/src/gateway-providers/iron-proxy.test.ts",
     "line": 74,
     "auto_run": false
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/orchestrate.test.ts",
     "line": 27,
     "auto_run": false
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/orchestrate.test.ts",
     "line": 28,
     "auto_run": false
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/room-actions.test.ts",
     "line": 17,
     "auto_run": false
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/room-actions.test.ts",
     "line": 18,
     "auto_run": false
    },
    {
     "rule": "token-literal",
     "label": "Token-shaped literal",
     "sev": "HIGH",
     "file": ".claude/skills/slack-agent-flow/src/modules/slack-agent-flow/room-actions.test.ts",
     "line": 19,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": ".claude/skills/add-onecli/scripts/postgres-password.ts",
     "line": 109,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "slack-agent-flow",
     "score": 36,
     "verdict": "CAUTION"
    },
    {
     "kind": "skill",
     "name": "add-iron-proxy",
     "score": 58,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "add-codex",
     "score": 62,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "add-onecli",
     "score": 66,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "add-ollama-tool",
     "score": 69,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "add-macos-statusbar",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "add-atomic-chat-tool",
     "score": 77,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "slack-a2a-rooms",
     "score": 80,
     "verdict": "OK"
    }
   ],
   "id": "APP-13",
   "label": "nanocoai/nanoclaw"
  },
  {
   "category": "Marketing & business",
   "score": 80,
   "verdict": "OK",
   "units": 2,
   "skills": 2,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 2
   },
   "clean_units": 0,
   "caps": [
    "shell"
   ],
   "sev": {
    "HIGH": 2
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "latent-spaces/brag",
   "url": "https://github.com/latent-spaces/brag",
   "stars": 22485,
   "description": "You built it. Now brag. Turn the project you just created into a short, shareable launch video with one command.",
   "license": "MIT",
   "commit": "06379432a9243c951dfcc051153be18d2d261044",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/brag-slim/SKILL.md",
     "line": 100,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/brag/slim.md",
     "line": 100,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "brag",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "brag-slim",
     "score": 80,
     "verdict": "OK"
    }
   ],
   "id": "MAR-07",
   "label": "latent-spaces/brag"
  },
  {
   "category": "Dev workflow",
   "score": 79,
   "verdict": "OK",
   "units": 36,
   "skills": 18,
   "commands": 17,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 14,
    "OK": 22
   },
   "clean_units": 17,
   "caps": [
    "fs-write",
    "hooks",
    "obfuscation",
    "shell"
   ],
   "sev": {
    "LOW": 43,
    "HIGH": 18,
    "MED": 8
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 18
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "count": 7
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "OthmanAdi/planning-with-files",
   "url": "https://github.com/OthmanAdi/planning-with-files",
   "stars": 28222,
   "description": "Persistent file-based planning for AI coding agents and long-running tasks. Crash-proof markdown plans, session recovery after /clear and compaction, per-turn re-injection against context rot, deterministic completion gate. Manus-style. Install from npm, the Claude Code plugin marketplace, or npx skills. Codex, Cursor, OpenCode, 60+ agents.",
   "license": "MIT",
   "commit": "aaa38bc62053f5f7c1bfbcb60f0405f7cf0ee228",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".agents/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".codebuddy/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".codex/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".cursor/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".factory/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".mastracode/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".opencode/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".pi/skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "commands/plan-attest.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "commands/plan-doctor.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "commands/plan-goal.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "commands/plan-loop.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/i18n/planning-with-files-ar",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/i18n/planning-with-files-de",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/i18n/planning-with-files-es",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/i18n/planning-with-files-zh",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/i18n/planning-with-files-zht",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/planning-with-files",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 11,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 23,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 35,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 47,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 59,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 72,
     "auto_run": true
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "hooks/codex-hooks.json",
     "line": 84,
     "auto_run": true
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 66,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "planning-with-files",
     "score": 74,
     "verdict": "REVIEW"
    }
   ],
   "id": "DEV-22",
   "label": "OthmanAdi/planning-with-files"
  },
  {
   "category": "Media & content",
   "score": 78,
   "verdict": "OK",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1
   },
   "clean_units": 0,
   "caps": [
    "network",
    "shell"
   ],
   "sev": {
    "HIGH": 1,
    "LOW": 1
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "JuneYaooo/rea-video",
   "url": "https://github.com/JuneYaooo/rea-video",
   "stars": 13000,
   "description": "Reverse-engineer any video, shot by shot: filmed, AI-generated or coded, and how to remake it. Breakdowns in the open VIDEO.md format. 逆向一切视频，逐个镜头看是拍的、AI 生成的还是代码做的，再告诉你怎么复刻；拆解结果按 VIDEO.md 格式输出。",
   "license": "Apache-2.0",
   "commit": "fc69e194bdb4da91f72420c58debbc38eee647f5",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "skills/rea-video/references/chatcut.md",
     "line": 24,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "rea-video",
     "score": 78,
     "verdict": "OK"
    }
   ],
   "id": "MED-05",
   "label": "JuneYaooo/rea-video"
  },
  {
   "category": "Memory & context",
   "score": 78,
   "verdict": "OK",
   "units": 12,
   "skills": 7,
   "commands": 0,
   "agents": 5,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 11,
    "REVIEW": 1
   },
   "clean_units": 3,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "HIGH": 2,
    "MED": 15,
    "LOW": 13
   },
   "rules": [
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 5
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 4
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 3
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 2
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "MemTensor/MemOS",
   "url": "https://github.com/MemTensor/MemOS",
   "stars": 12503,
   "description": "Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and DeepSeek Harness support.",
   "license": "Apache-2.0",
   "commit": "3a16e5fe3048a209f722806f4123fa2e533588fd",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/ask-user-question/src/index.ts",
     "line": 129,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 124,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts",
     "line": 54,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts",
     "line": 57,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts",
     "line": 102,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/dev-browser/scripts/start-server.ts",
     "line": 115,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "apps/openwork-memos-integration/apps/desktop/skills/dev-browser/src/client.ts",
     "line": 452,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 134,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/skill/memos-memory-guide/SKILL.md",
     "line": 78,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 500,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 1182,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 879,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "apps/memos-local-openclaw/site/public/SKILL.md",
     "line": 1099,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/backend-dev.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/code-reviewer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/explorer.md",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "MED",
     "file": ".claude/agents/integration-tester.md",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "memos-local",
     "score": 50,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "ask-user-question",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "dev-browser",
     "score": 83,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "integration-tester",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "backend-dev",
     "score": 90,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "memos-memory-guide",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "code-reviewer",
     "score": 92,
     "verdict": "OK"
    },
    {
     "kind": "agent",
     "name": "explorer",
     "score": 92,
     "verdict": "OK"
    }
   ],
   "id": "MEM-06",
   "label": "MemTensor/MemOS"
  },
  {
   "category": "Research & writing",
   "score": 78,
   "verdict": "OK",
   "units": 199,
   "skills": 197,
   "commands": 1,
   "agents": 1,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 179,
    "REVIEW": 20
   },
   "clean_units": 30,
   "caps": [
    "fs-write",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "HIGH": 130,
    "LOW": 274,
    "MED": 3
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 130
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 2
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "wanshuiyin/Auto-claude-code-research-in-sleep",
   "url": "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep",
   "stars": 19788,
   "description": "ARIS ⚔️ (Auto-Research-In-Sleep) — Lightweight Markdown-only skills for autonomous ML research: cross-model review loops, idea discovery, and experiment automation. No framework, no lock-in — works with Claude Code, Codex, OpenClaw, or any LLM agent.",
   "license": "MIT",
   "commit": "b11b2078ec7c7d8b44c27e1da227f73369fa3684",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/ablation-planner",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/alphaxiv",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/analyze-results",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/arxiv",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/auto-paper-improvement-loop",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/auto-review-loop",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/auto-review-loop-llm",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/auto-review-loop-minimax",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/citation-audit",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/citation-crosscheck",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/claims-drafting",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/comm-lit-review",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/deepxiv",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/dse-loop",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/embodiment-description",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/exa-search",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/experiment-audit",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/experiment-bridge",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/experiment-plan",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/experiment-queue",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/figure-description",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/figure-spec",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/firecrawl-search",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/gemini-search",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/grant-proposal",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "experiment-queue",
     "score": 68,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "qzcli",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "qzcli",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "paper-write",
     "score": 71,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "auto-review-loop-minimax",
     "score": 73,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "paper-illustration-image2",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "wiki-enrich",
     "score": 74,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "auto-review-loop",
     "score": 74,
     "verdict": "REVIEW"
    }
   ],
   "id": "RES-12",
   "label": "wanshuiyin/Auto-claude-code-research-in-sleep"
  },
  {
   "category": "Media & content",
   "score": 77,
   "verdict": "OK",
   "units": 23,
   "skills": 23,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 20,
    "REVIEW": 3
   },
   "clean_units": 12,
   "caps": [
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 11,
    "HIGH": 21,
    "MED": 20
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 13
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 12
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 10
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 5
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "JimLiu/baoyu-skills",
   "url": "https://github.com/JimLiu/baoyu-skills",
   "stars": 27859,
   "description": "agent-skills,claude-skills,codex-skills,openclaw-skills",
   "license": "2026-11-20T05:47:41Z",
   "commit": "bf1ff076e25f8da4a339eb1c8cf03361fea5ea4c",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-danger-gemini-web/scripts/gemini-webapi/utils/upload-file.ts",
     "line": 18,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/agnes.ts",
     "line": 148,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/dashscope.ts",
     "line": 611,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/google.ts",
     "line": 152,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/jimeng.ts",
     "line": 282,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/jimeng.ts",
     "line": 364,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/openai.ts",
     "line": 326,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/openai.ts",
     "line": 359,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/openai.ts",
     "line": 404,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-image-gen/scripts/providers/replicate.ts",
     "line": 512,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-article.ts",
     "line": 109,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-url-to-markdown/scripts/lib/adapters/youtube/transcript.ts",
     "line": 196,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/baoyu-youtube-transcript/scripts/youtube.ts",
     "line": 145,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-extend-config.test.ts",
     "line": 163,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-extend-config.test.ts",
     "line": 164,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-extend-config.test.ts",
     "line": 178,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-extend-config.test.ts",
     "line": 179,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-remote-publish.test.ts",
     "line": 39,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-remote-publish.test.ts",
     "line": 40,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-remote-publish.test.ts",
     "line": 47,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/baoyu-post-to-wechat/scripts/wechat-remote-publish.test.ts",
     "line": 48,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/baoyu-danger-gemini-web/scripts/gemini-webapi/utils/paths.ts",
     "line": 38,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/baoyu-danger-gemini-web/scripts/gemini-webapi/utils/paths.ts",
     "line": 39,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/baoyu-danger-x-to-markdown/scripts/paths.ts",
     "line": 39,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/baoyu-danger-x-to-markdown/scripts/paths.ts",
     "line": 40,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "baoyu-post-to-wechat",
     "score": 45,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "baoyu-image-gen",
     "score": 64,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "baoyu-danger-gemini-web",
     "score": 70,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "baoyu-youtube-transcript",
     "score": 78,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "baoyu-url-to-markdown",
     "score": 80,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "baoyu-wechat-summary",
     "score": 84,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "baoyu-danger-x-to-markdown",
     "score": 88,
     "verdict": "OK"
    },
    {
     "kind": "skill",
     "name": "baoyu-post-to-x",
     "score": 88,
     "verdict": "OK"
    }
   ],
   "id": "MED-06",
   "label": "JimLiu/baoyu-skills"
  },
  {
   "category": "Apps & harnesses",
   "score": 73,
   "verdict": "REVIEW",
   "units": 3,
   "skills": 3,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1,
    "OK": 2
   },
   "clean_units": 2,
   "caps": [
    "network"
   ],
   "sev": {
    "HIGH": 7,
    "LOW": 2
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 7
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "zhayujie/CowAgent",
   "url": "https://github.com/zhayujie/CowAgent",
   "stars": 48063,
   "description": "Open-source personal AI assistant & Agent Harness. Plans tasks, runs tools and skills, self-evolves with memory and knowledge. Multi-agent, multi-model, multi-channel. Lightweight, extensible, one-line install.",
   "license": "MIT",
   "commit": "58148b8250f6e08db8ee4130552612ccb49a5146",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 321,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 336,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 495,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 600,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 793,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 927,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/image-generation/scripts/generate.py",
     "line": 1045,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "image-generation",
     "score": 63,
     "verdict": "REVIEW"
    }
   ],
   "id": "APP-14",
   "label": "zhayujie/CowAgent"
  },
  {
   "category": "Memory & context",
   "score": 71,
   "verdict": "REVIEW",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1
   },
   "clean_units": 0,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "MED": 3,
    "LOW": 51,
    "HIGH": 4
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 5
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 2
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "NevaMind-AI/memU",
   "url": "https://github.com/NevaMind-AI/memU",
   "stars": 14637,
   "description": "Personal memory across agents",
   "license": "NOASSERTION",
   "commit": "dbd0a1b5352ed2e9f6caf32b29fd4850a9e965ae",
   "top_findings": [
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "src/memu/hosts/claude_code/cli.py",
     "line": 99,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "src/memu/hosts/codex/cli.py",
     "line": 101,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "src/memu/hosts/cursor/INSTALL.md",
     "line": 240,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "src/memu/hosts/cursor/cli.py",
     "line": 59,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "MED",
     "file": "src/memu/hosts/cursor/BRIDGING_TASK.md",
     "line": 206,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "CONTRIBUTING.md",
     "line": 44,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "npm/README.md",
     "line": 10,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "install-memu",
     "score": 71,
     "verdict": "REVIEW"
    }
   ],
   "id": "MEM-07",
   "label": "NevaMind-AI/memU"
  },
  {
   "category": "Memory & context",
   "score": 70,
   "verdict": "REVIEW",
   "units": 4,
   "skills": 4,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 3,
    "REVIEW": 1
   },
   "clean_units": 2,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 3,
    "HIGH": 2
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 1
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "MemoriLabs/Memori",
   "url": "https://github.com/MemoriLabs/Memori",
   "stars": 17600,
   "description": "Memori is agent-native memory infrastructure. A LLM-agnostic layer that turns agent execution and conversation into structured, persistent state for production systems. Built for enterprise, Memori works with the data infrastructure you already run, no rip-and-replace, and deploys across managed cloud, single-tenant cloud, VPC, and on-premises.",
   "license": "NOASSERTION",
   "commit": "574b1ea3e876f100ef82c37817d603eb7e258e59",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "integrations/claude-code/README.md",
     "line": 22,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "integrations/claude-code",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "memori",
     "score": 58,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "memori",
     "score": 98,
     "verdict": "OK"
    }
   ],
   "id": "MEM-08",
   "label": "MemoriLabs/Memori"
  },
  {
   "category": "Design & UI",
   "score": 67,
   "verdict": "REVIEW",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1
   },
   "clean_units": 0,
   "caps": [
    "fs-write",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 25,
    "HIGH": 1
   },
   "rules": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "Agents365-ai/drawio-skill",
   "url": "https://github.com/Agents365-ai/drawio-skill",
   "stars": 10927,
   "description": "Agent skill that turns natural language, code, Terraform/K8s, SQL, OpenAPI, AsyncAPI, Protobuf and GraphQL sources into editable, tested draw.io architecture diagrams: incremental sync, multi-view projection, drift diff, CI architecture tests, whiteboard derasterize, interactive HTML/PPTX/Mermaid exports.",
   "license": "MIT",
   "commit": "9dd28000c6a37ad121f324508749c6ad59e540bc",
   "top_findings": [
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/drawio-skill",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "drawio-skill",
     "score": 67,
     "verdict": "REVIEW"
    }
   ],
   "id": "DES-11",
   "label": "Agents365-ai/drawio-skill"
  },
  {
   "category": "Browser & devices",
   "score": 53,
   "verdict": "REVIEW",
   "units": 3,
   "skills": 3,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "OK": 1,
    "REVIEW": 2
   },
   "clean_units": 1,
   "caps": [
    "injection-surface",
    "network",
    "shell"
   ],
   "sev": {
    "LOW": 365,
    "MED": 48,
    "HIGH": 3
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 40
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 4
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "count": 4
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "browser-use/browser-harness",
   "url": "https://github.com/browser-use/browser-harness",
   "stars": 19229,
   "description": "Let Claude Code, Codex or Cursor use your real Chrome, logged in as you. One prompt to set up. Open source, MIT.",
   "license": "MIT",
   "commit": "78dca5346138ab2bebd372308eeaeba6788f14cc",
   "top_findings": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "agent-workspace/domain-skills/browser-use-cloud/cloud.md",
     "line": 181,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "src/browser_harness/admin.py",
     "line": 1208,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "src/browser_harness/admin.py",
     "line": 1233,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "src/browser_harness/run.py",
     "line": 479,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "CHANGELOG.md",
     "line": 7,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/cpsc-recalls/scraping.md",
     "line": 369,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/endoflife-date/scraping.md",
     "line": 364,
     "auto_run": false
    },
    {
     "rule": "inj-no-confirm",
     "label": "\"Without asking\" phrasing",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/statistics-sweden/scraping.md",
     "line": 315,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/atlas/overview.md",
     "line": 55,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/census-geocoder/scraping.md",
     "line": 514,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/cisa-kev/scraping.md",
     "line": 503,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/cleveland-museum/scraping.md",
     "line": 650,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/cleveland-museum/scraping.md",
     "line": 653,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/cpsc-recalls/scraping.md",
     "line": 586,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/crates-io/scraping.md",
     "line": 587,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/crates-io/scraping.md",
     "line": 592,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/endoflife-date/scraping.md",
     "line": 531,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/endoflife-date/scraping.md",
     "line": 535,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/eurostat/scraping.md",
     "line": 400,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/faa-nas-status/scraping.md",
     "line": 446,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/grants-gov/scraping.md",
     "line": 47,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/grants-gov/scraping.md",
     "line": 616,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/grants-gov/scraping.md",
     "line": 626,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/grants-gov/scraping.md",
     "line": 634,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "agent-workspace/domain-skills/grants-gov/scraping.md",
     "line": 635,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "browser-harness",
     "score": 44,
     "verdict": "REVIEW"
    },
    {
     "kind": "skill",
     "name": "browser-harness",
     "score": 53,
     "verdict": "REVIEW"
    }
   ],
   "id": "BRO-04",
   "label": "browser-use/browser-harness"
  },
  {
   "category": "Design & UI",
   "score": 53,
   "verdict": "REVIEW",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1
   },
   "clean_units": 0,
   "caps": [
    "network",
    "obfuscation",
    "shell"
   ],
   "sev": {
    "LOW": 10,
    "HIGH": 2,
    "MED": 39
   },
   "rules": [
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "count": 39
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 2
    }
   ],
   "stars_bucket": "100k–200k",
   "repo": "Leonxlnx/taste-skill",
   "url": "https://github.com/Leonxlnx/taste-skill",
   "stars": 121121,
   "description": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
   "license": "MIT",
   "commit": "d1a2bb41d927083ac7118f60cfc9cdf711810ea0",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/taste-skill/assets/components/fx-map/bake.mjs",
     "line": 57,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "skills/taste-skill/assets/system.js",
     "line": 297,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12102,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12152,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12207,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12313,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12355,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12408,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12459,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12512,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12563,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12650,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12694,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12741,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12790,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12836,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12878,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12920,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 12962,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13006,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13053,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13096,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13182,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13234,
     "auto_run": false
    },
    {
     "rule": "base64-blob",
     "label": "Base64 blob",
     "sev": "MED",
     "file": "skills/taste-skill/assets/photos/photos.json",
     "line": 13266,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "design-taste-frontend",
     "score": 53,
     "verdict": "REVIEW"
    }
   ],
   "id": "DES-12",
   "label": "Leonxlnx/taste-skill"
  },
  {
   "category": "Research & writing",
   "score": 40,
   "verdict": "REVIEW",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1
   },
   "clean_units": 0,
   "caps": [
    "fs-write",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "LOW": 40,
    "MED": 9,
    "HIGH": 5
   },
   "rules": [
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "count": 5
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 4
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "count": 2
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 1
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 1
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    }
   ],
   "stars_bucket": "10k–25k",
   "repo": "teng-lin/notebooklm-py",
   "url": "https://github.com/teng-lin/notebooklm-py",
   "stars": 20365,
   "description": "Unofficial Python API and agentic skill for Google Gemini Notebook. Full programmatic access to Gemini Notebook's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
   "license": "MIT",
   "commit": "77d6ab4187cd7bd6d9af80ef6d74d524f77e7b68",
   "top_findings": [
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "HIGH",
     "file": "src/notebooklm/notebooklm_cli.py",
     "line": 314,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "desktop-extension/manifest.json",
     "line": 7,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "desktop-extension/run_server.py",
     "line": 143,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "docs/installation.md",
     "line": 33,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "HIGH",
     "file": "docs/mcp-guide.md",
     "line": 758,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "scripts/audit_backend_coupling.py",
     "line": 225,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/installation.md",
     "line": 601,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/installation.md",
     "line": 603,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/installation.md",
     "line": 605,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "MED",
     "file": "docs/installation.md",
     "line": 633,
     "auto_run": false
    },
    {
     "rule": "persistence",
     "label": "Shell rc / cron / LaunchAgent write",
     "sev": "MED",
     "file": "docs/cli-reference.md",
     "line": 1047,
     "auto_run": false
    },
    {
     "rule": "pipe-to-shell",
     "label": "curl | sh installer",
     "sev": "MED",
     "file": "desktop-extension/README.md",
     "line": 28,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "MED",
     "file": "docs/troubleshooting.md",
     "line": 138,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "docs/installation.md",
     "line": 657,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "notebooklm",
     "score": 40,
     "verdict": "REVIEW"
    }
   ],
   "id": "RES-13",
   "label": "teng-lin/notebooklm-py"
  },
  {
   "category": "Research & writing",
   "score": 40,
   "verdict": "REVIEW",
   "units": 1,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 0,
   "mcp": 0,
   "unit_verdicts": {
    "REVIEW": 1
   },
   "clean_units": 0,
   "caps": [
    "fs-write",
    "network",
    "shell"
   ],
   "sev": {
    "HIGH": 7,
    "LOW": 7
   },
   "rules": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "count": 6
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "25k–50k",
   "repo": "titanwings/distilly",
   "url": "https://github.com/titanwings/distilly",
   "stars": 26838,
   "description": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
   "license": "MIT",
   "commit": "0afc45c29c360ba7bc8260f1bb0bf34e9155f4fa",
   "top_findings": [
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/dingtalk_auto_collector.py",
     "line": 113,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/dingtalk_auto_collector.py",
     "line": 143,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/feishu_auto_collector.py",
     "line": 146,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/feishu_auto_collector.py",
     "line": 181,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/feishu_auto_collector.py",
     "line": 255,
     "auto_run": false
    },
    {
     "rule": "net-exfil-post",
     "label": "Sends data to remote host",
     "sev": "HIGH",
     "file": "tools/feishu_auto_collector.py",
     "line": 275,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": ".",
     "line": 1,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "distilly",
     "score": 40,
     "verdict": "REVIEW"
    }
   ],
   "id": "RES-14",
   "label": "titanwings/distilly"
  },
  {
   "category": "Research & writing",
   "score": 20,
   "verdict": "CAUTION",
   "units": 2,
   "skills": 1,
   "commands": 0,
   "agents": 0,
   "hooks": 1,
   "mcp": 0,
   "unit_verdicts": {
    "CAUTION": 1,
    "OK": 1
   },
   "clean_units": 1,
   "caps": [
    "fs-write",
    "hooks",
    "injection-surface",
    "network",
    "secrets",
    "shell"
   ],
   "sev": {
    "MED": 4,
    "HIGH": 19,
    "LOW": 97
   },
   "rules": [
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "count": 16
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "count": 2
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "count": 2
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "count": 1
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "count": 1
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "count": 1
    }
   ],
   "stars_bucket": "50k–100k",
   "repo": "mvanhorn/last30days-skill",
   "url": "https://github.com/mvanhorn/last30days-skill",
   "stars": 74206,
   "description": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
   "license": "MIT",
   "commit": "7c2e1c2b099b13abd4397910168c4f53e638bb21",
   "top_findings": [
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/grok_audit.py",
     "line": 520,
     "auto_run": false
    },
    {
     "rule": "inj-skip-perms",
     "label": "Permission bypass",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/grok_x.py",
     "line": 924,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/references/setup-wizard.md",
     "line": 72,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/references/setup-wizard.md",
     "line": 137,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/chrome_cookies.py",
     "line": 277,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/grok_x.py",
     "line": 332,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/grok_x.py",
     "line": 333,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/reddit_envelope.py",
     "line": 94,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/reddit_envelope.py",
     "line": 95,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/reddit_envelope.py",
     "line": 96,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/safari_cookies.py",
     "line": 4,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/safari_cookies.py",
     "line": 123,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/safari_cookies.py",
     "line": 124,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/safari_cookies.py",
     "line": 147,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/x_envelope.py",
     "line": 142,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/x_envelope.py",
     "line": 143,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/x_envelope.py",
     "line": 144,
     "auto_run": false
    },
    {
     "rule": "secret-paths",
     "label": "Credential-store paths",
     "sev": "HIGH",
     "file": "skills/last30days/scripts/lib/youtube_yt.py",
     "line": 609,
     "auto_run": false
    },
    {
     "rule": "tools-bash-any",
     "label": "Unrestricted Bash granted",
     "sev": "HIGH",
     "file": "skills/last30days",
     "line": 1,
     "auto_run": false
    },
    {
     "rule": "dyn-exec",
     "label": "eval / exec / shell=True",
     "sev": "MED",
     "file": "skills/last30days/scripts/box_chrome_login.py",
     "line": 395,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/last30days/references/runtime.md",
     "line": 131,
     "auto_run": false
    },
    {
     "rule": "sudo",
     "label": "Uses sudo",
     "sev": "MED",
     "file": "skills/last30days/scripts/last30days.py",
     "line": 41,
     "auto_run": false
    },
    {
     "rule": "webhook",
     "label": "Webhook / paste endpoint",
     "sev": "MED",
     "file": "skills/last30days/scripts/watchlist.py",
     "line": 127,
     "auto_run": false
    }
   ],
   "worst_units": [
    {
     "kind": "skill",
     "name": "last30days",
     "score": 0,
     "verdict": "CAUTION"
    }
   ],
   "id": "RES-15",
   "label": "mvanhorn/last30days-skill"
  }
 ]
};
