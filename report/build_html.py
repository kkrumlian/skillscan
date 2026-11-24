#!/usr/bin/env python3
"""Render REPORT.md to a standalone REPORT.html (stdlib only; handles the markdown subset the report uses)."""
import html
import re
from pathlib import Path

HERE = Path(__file__).parent
md = (HERE / "REPORT.md").read_text()


def inline(t: str) -> str:
    codes = []
    t = re.sub(r"`([^`]+)`", lambda m: codes.append(m.group(1)) or f"\x00{len(codes)-1}\x00", t)
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?!\w)", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", lambda m: f'<a href="{fix_link(m.group(2))}">{m.group(1)}</a>', t)
    t = t.replace("\\|", "|")
    return re.sub("\x00(\\d+)\x00", lambda m: f"<code>{html.escape(codes[int(m.group(1))].replace(chr(92) + '|', '|'))}</code>", t)


def fix_link(href: str) -> str:
    if href.startswith("../README.md"):
        return href.replace("../README.md", "../README.md")
    return href


def slug(t: str) -> str:
    return re.sub(r"[^\w\s-]", "", t.lower()).strip().replace(" ", "-")


def split_row(line: str) -> list[str]:
    cells = re.split(r"(?<!\\)\|", line.strip().strip("|"))
    return [c.strip() for c in cells]


out, lines, i = [], md.splitlines(), 0
while i < len(lines):
    line = lines[i]
    if line.startswith("```"):
        buf = []
        i += 1
        while i < len(lines) and not lines[i].startswith("```"):
            buf.append(lines[i])
            i += 1
        out.append(f"<pre><code>{html.escape(chr(10).join(buf))}</code></pre>")
    elif m := re.match(r"^(#{1,3}) (.+)", line):
        n, text = len(m.group(1)), m.group(2)
        out.append(f'<h{n} id="{slug(text)}">{inline(text)}</h{n}>')
    elif line.startswith("|"):
        rows = []
        while i < len(lines) and lines[i].startswith("|"):
            rows.append(lines[i])
            i += 1
        i -= 1
        head, body = split_row(rows[0]), [split_row(r) for r in rows[2:]]
        cls = ' class="kv"' if not any(head) else ""
        t = [f"<table{cls}>"]
        if any(head):
            t.append("<thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr></thead>")
        t.append("<tbody>")
        for r in body:
            t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
        t.append("</tbody></table>")
        out.append("".join(t))
    elif re.match(r"^(- |\d+\. )", line):
        ordered = bool(re.match(r"^\d+\. ", line))
        tag = "ol" if ordered else "ul"
        items = []
        while i < len(lines) and re.match(r"^(- |\d+\. )", lines[i]):
            items.append(re.sub(r"^(- |\d+\. )", "", lines[i]))
            i += 1
        i -= 1
        out.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
    elif line.strip():
        buf = [line]
        while i + 1 < len(lines) and lines[i + 1].strip() and not re.match(r"^(#|\||- |\d+\. |```)", lines[i + 1]):
            i += 1
            buf.append(lines[i])
        out.append(f"<p>{inline(' '.join(buf))}</p>")
    i += 1

title = re.sub(r"^# ", "", md.splitlines()[0])
page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title>
<style>
:root{{--fg:#1d1f23;--muted:#5d6470;--bg:#fff;--line:#e4e6ea;--accent:#2f6fde;--code:#f4f5f7}}
@media (prefers-color-scheme:dark){{:root{{--fg:#e6e8eb;--muted:#9aa1ac;--bg:#15171a;--line:#2b2f35;--accent:#7aa7ff;--code:#1f2227}}}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--fg);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,sans-serif}}
main{{max-width:860px;margin:0 auto;padding:48px 24px 96px}}
h1{{font-size:2rem;line-height:1.2;margin:0 0 .5rem}}
h2{{font-size:1.35rem;margin:2.5rem 0 .75rem;padding-top:1rem;border-top:1px solid var(--line)}}
h3{{font-size:1.1rem;margin:1.75rem 0 .5rem}}
p,li{{color:var(--fg)}} em{{color:var(--muted)}}
a{{color:var(--accent)}}
code{{font:0.88em ui-monospace,SFMono-Regular,Menlo,monospace;background:var(--code);padding:.1em .35em;border-radius:4px}}
pre{{background:var(--code);padding:14px 16px;border-radius:8px;overflow:auto}} pre code{{padding:0;background:none}}
table{{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.93rem}}
th,td{{text-align:left;vertical-align:top;padding:8px 10px;border-bottom:1px solid var(--line)}}
th{{font-weight:600;color:var(--muted);font-size:.82rem;text-transform:uppercase;letter-spacing:.03em}}
td:nth-child(2){{font-variant-numeric:tabular-nums}}
table.kv td:first-child{{color:var(--muted);width:45%}}
ul,ol{{padding-left:1.3rem}} li{{margin:.35rem 0}}
#appendix-repositories-scanned ~ p{{font-size:.85rem;color:var(--muted)}}
</style></head>
<body><main>
{chr(10).join(out)}
</main></body></html>
"""
(HERE / "REPORT.html").write_text(page)
print("wrote", HERE / "REPORT.html")
