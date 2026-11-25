/* skillscan site: vanilla JS, no build step. Data comes from data/bundles.js (window.SKILLSCAN_DATA). */
(function () {
  "use strict";
  const D = window.SKILLSCAN_DATA;
  const S = D.summary;
  const NAMED = !!S.named;
  const $ = (s, r = document) => r.querySelector(s);
  const view = $("#view");
  const tip = $("#tip");

  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => Number(n).toLocaleString("en-US");
  const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);

  const state = { cat: "All", verdict: "all", cap: "all", q: "", sort: "score", dir: -1, showNames: NAMED };

  /* ---------- icons ---------- */
  const ICON = {
    shell: '<path d="M3 4.5h14v11H3z"/><path d="M6 8l2.5 2L6 12M10 12.5h4"/>',
    network: '<circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c2.2 2.2 2.2 11.8 0 14M10 3c-2.2 2.2-2.2 11.8 0 14"/>',
    "fs-write": '<path d="M4 16l1-4 8-8 3 3-8 8z"/><path d="M11.5 5.5l3 3"/>',
    secrets: '<circle cx="7" cy="12" r="3.5"/><path d="M9.5 9.5L16 3M13.5 5.5l2 2"/>',
    hooks: '<path d="M11 2L5 11h4l-1 7 6-9h-4z"/>',
    mcp: '<path d="M7 3v4M13 3v4M5 7h10v3a5 5 0 01-10 0zM10 15v3"/>',
    "injection-surface": '<path d="M3 4h14v9H8l-4 3v-3H3z"/><path d="M10 6.5v3M10 11.2v.1"/>',
    obfuscation: '<path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5z"/><path d="M3 17L17 3"/>',
  };
  const CAP_LABEL = {
    shell: "Runs shell", network: "Network", "fs-write": "Writes files", secrets: "Credential paths",
    hooks: "Auto-run hooks", mcp: "MCP servers", "injection-surface": "Injection surface", obfuscation: "Encoded content",
  };
  const CAP_RISK = new Set(["secrets", "obfuscation", "injection-surface", "hooks"]);
  const CAPS = Object.keys(CAP_LABEL);
  const svgIcon = (k) => `<svg viewBox="0 0 20 20" aria-hidden="true">${ICON[k]}</svg>`;
  const STATUS = {
    OK: { color: "var(--good)", label: "OK", icon: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="currentColor" opacity=".18"/><path d="M5 8.2l2 2 4-4.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    REVIEW: { color: "var(--warn)", label: "Review", icon: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8l6.5 11.4H1.5z" fill="currentColor" opacity=".18"/><path d="M8 6v3.4M8 11.3v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
    CAUTION: { color: "var(--serious)", label: "Caution", icon: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="currentColor" opacity=".18"/><path d="M8 4.4v4.6M8 11.3v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
    BLOCK: { color: "var(--crit)", label: "Block", icon: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="currentColor" opacity=".18"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
  };
  const badge = (v) => `<span class="badge ${v}">${STATUS[v].icon}${STATUS[v].label}</span>`;
  const label = (b) => (state.showNames && b.repo ? b.repo : `${b.category} bundle #${b.id.split("-")[1].replace(/^0/, "")}`);
  const avatarText = (b) => (state.showNames && b.repo ? b.repo.split("/")[1].slice(0, 2).toUpperCase() : b.id.slice(0, 2));
  const AV = ["#0f2a2a", "#1d2b4a", "#3a2240", "#3b2a14", "#14352b", "#2a2a2a"];
  const avatarBg = (b) => AV[[...b.category].reduce((a, c) => a + c.charCodeAt(0), 0) % AV.length];

  /* ---------- tooltip ---------- */
  function showTip(e, html) {
    tip.innerHTML = html;
    tip.hidden = false;
    const r = tip.getBoundingClientRect();
    let x, y;
    if (e.clientX !== undefined && e.type !== "focus") { x = e.clientX + 14; y = e.clientY - r.height - 10; }
    else { const t = e.target.getBoundingClientRect(); x = t.left + t.width / 2; y = t.top - r.height - 8; }
    x = Math.min(Math.max(8, x), innerWidth - r.width - 8);
    if (y < 8) y = (e.clientY ?? 0) + 18;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  }
  const hideTip = () => { tip.hidden = true; };
  function bindTips(root) {
    root.querySelectorAll("[data-tip]").forEach((el) => {
      const h = (e) => showTip(e, el.getAttribute("data-tip"));
      el.addEventListener("pointermove", h);
      el.addEventListener("focus", h);
      el.addEventListener("pointerleave", hideTip);
      el.addEventListener("blur", hideTip);
    });
  }

  /* ---------- chrome ---------- */
  function renderTicker() {
    const items = [
      ["Bundles", fmt(S.bundles)], ["Units", fmt(S.units)], ["Median trust", S.median_score],
      ["Clean units", pct(S.clean_units, S.units) + "%"], ["Auto-run hook sets", S.kinds.hooks],
      ["MCP servers", S.kinds.mcp], ["Scanned", S.scan_date], ["Engine", S.scanner],
    ];
    $("#ticker").innerHTML = items.map(([k, v], i) => `${i ? '<span class="sep">·</span>' : ""}<span>${esc(k)}: <b>${esc(v)}</b></span>`).join("");
    $("#foot-meta").innerHTML = `Data: ${esc(S.bundles)} public repos · ${esc(fmt(S.units))} units · scanned ${esc(S.scan_date)}<br>${NAMED ? "Named build" : "Anonymized build: names hidden"} · <a href="report.html">Full report</a>`;
  }

  /* ---------- rankings ---------- */
  function filtered() {
    const q = state.q.trim().toLowerCase();
    let rows = D.bundles.filter((b) =>
      (state.cat === "All" || b.category === state.cat) &&
      (state.verdict === "all" || b.verdict === state.verdict) &&
      (state.cap === "all" || b.caps.includes(state.cap)) &&
      (!q || [label(b), b.category, b.id, state.showNames ? b.description || "" : ""].join(" ").toLowerCase().includes(q)));
    const k = state.sort, dir = state.dir;
    const val = (b) => (k === "name" ? label(b).toLowerCase() : k === "category" ? b.category : k === "caps" ? b.caps.length : k === "stars" ? (b.stars ?? starsRank(b.stars_bucket)) : k === "verdict" ? ["BLOCK", "CAUTION", "REVIEW", "OK"].indexOf(b.verdict) : b[k]);
    rows.sort((a, b) => { const x = val(a), y = val(b); return (x < y ? -1 : x > y ? 1 : 0) * dir || b.units - a.units || a.id.localeCompare(b.id); });
    return rows;
  }
  const BUCKETS = ["<10k", "10k–25k", "25k–50k", "50k–100k", "100k–200k", "200k+"];
  const starsRank = (s) => BUCKETS.indexOf(s);

  function histogramSVG(scores, { w = 300, h = 64, bins = 10, axis = false } = {}) {
    const counts = Array(bins).fill(0);
    scores.forEach((s) => counts[Math.min(bins - 1, Math.floor(s / (100 / bins)))]++);
    const max = Math.max(...counts, 1);
    const padB = axis ? 20 : 2, padL = axis ? 28 : 0;
    const bw = (w - padL) / bins;
    let out = `<svg class="hist" viewBox="0 0 ${w} ${h + padB}" role="img" aria-label="Distribution of trust scores">`;
    if (axis) {
      [0, Math.ceil(max / 2), max].forEach((t) => {
        const y = h - (t / max) * (h - 6);
        out += `<g class="axis"><line x1="${padL}" x2="${w}" y1="${y}" y2="${y}" stroke-dasharray="${t ? "2 3" : ""}"/><text x="${padL - 6}" y="${y + 4}" text-anchor="end">${t}</text></g>`;
      });
    }
    counts.forEach((c, i) => {
      const bh = c ? Math.max(3, (c / max) * (h - 6)) : 0;
      const x = padL + i * bw + 1, y = h - bh;
      const lo = i * (100 / bins), hi = lo + 100 / bins - (i === bins - 1 ? 0 : 1);
      const tipHtml = `<strong>${c} bundle${c === 1 ? "" : "s"}</strong>Score ${lo}–${hi}`;
      // rounded top only (4px) anchored to baseline
      const r = Math.min(4, bh / 2, (bw - 2) / 2);
      const path = bh ? `M${x},${h} V${y + r} Q${x},${y} ${x + r},${y} H${x + bw - 2 - r} Q${x + bw - 2},${y} ${x + bw - 2},${y + r} V${h} Z` : "";
      out += `<g data-tip="${esc(tipHtml)}" tabindex="0" aria-label="${c} bundles scored ${lo} to ${hi}"><rect x="${x - 1}" y="0" width="${bw}" height="${h}" fill="transparent"/>${path ? `<path class="bar" d="${path}" fill="var(--seq)"/>` : ""}</g>`;
      if (axis && i % 2 === 0) out += `<g class="axis"><text x="${x - 1}" y="${h + 14}" text-anchor="middle">${lo}</text></g>`;
    });
    if (axis) out += `<g class="axis"><text x="${w - 2}" y="${h + 14}" text-anchor="end">100</text></g>`;
    return out + "</svg>";
  }

  function cardsHTML() {
    const scores = D.bundles.map((b) => b.score);
    const v = S.verdicts;
    const top = S.rules.slice(0, 4);
    return `<section class="cards" aria-label="Headline stats">
      <div class="card"><h3>Median trust score <span class="muted">of 100</span></h3>
        <div class="big">${S.median_score}<small>/100</small></div>
        <div style="margin-top:10px">${histogramSVG(scores, { w: 300, h: 46 })}</div>
        <div class="sub">Score distribution across ${S.bundles} bundles</div></div>
      <div class="card"><h3>Units with zero findings</h3>
        <div class="big">${pct(S.clean_units, S.units)}%</div>
        <div class="meter" role="img" aria-label="${pct(S.clean_units, S.units)} percent clean"><div style="width:${pct(S.clean_units, S.units)}%"></div></div>
        <div class="sub">${fmt(S.clean_units)} of ${fmt(S.units)} skills, commands, agents, hooks and MCP servers</div></div>
      <div class="card"><h3>Verdicts</h3>
        <div class="status-rows">${["OK", "REVIEW", "CAUTION", "BLOCK"].map((k) => `
          <div class="status-row">${badge(k)}<div class="track"><div class="fill" style="width:${pct(v[k] || 0, S.bundles)}%;background:${STATUS[k].color}"></div></div><span class="n">${v[k] || 0}</span></div>`).join("")}
        </div>
        <div class="sub">Bundles by overall verdict</div></div>
      <div class="card"><h3>Most common risky patterns <a class="muted" href="#/patterns">All →</a></h3>
        <ul class="mini-list">${top.map((r) => `<li><span>${esc(r.label)}</span><b>${r.bundles}</b></li>`).join("")}</ul>
        <div class="sub">Bundles with a medium or high finding</div></div>
    </section>`;
  }

  function rowHTML(b, i) {
    const caps = CAPS.map((c) => `<span class="cap ${b.caps.includes(c) ? "on" + (CAP_RISK.has(c) ? " risk" : "") : ""}" data-tip="${esc(`<strong>${CAP_LABEL[c]}</strong>${b.caps.includes(c) ? "Present" : "Not found"}`)}">${svgIcon(c)}</span>`).join("");
    return `<tr data-id="${esc(b.id)}" tabindex="0" aria-label="${esc(label(b))}, score ${b.score}, ${b.verdict}">
      <td class="num">${i + 1}</td>
      <td class="l"><div class="bname"><span class="avatar" style="background:${avatarBg(b)}">${esc(avatarText(b))}</span><span class="t">${esc(label(b))}</span><span class="id">${esc(state.showNames && b.repo ? b.category : b.id)}</span></div></td>
      <td><span class="score-cell"><span class="v">${b.score}</span><span class="scorebar"><div style="width:${b.score}%;background:${STATUS[b.verdict].color}"></div></span></span></td>
      <td>${badge(b.verdict)}</td>
      <td>${fmt(b.units)}</td><td>${b.hooks ? "Yes" : "—"}</td><td>${b.mcp || "—"}</td>
      <td><span class="caps">${caps}</span></td>
      <td>${NAMED && state.showNames ? fmt(b.stars) : esc(b.stars_bucket)}</td>
    </tr>`;
  }

  const COLS = [
    ["num", "#", false], ["name", "Bundle", true, "l"], ["score", "Trust score", true],
    ["verdict", "Verdict", true], ["units", "Units", true],
    ["hooks", "Hooks", true], ["mcp", "MCP", true], ["caps", "Capabilities", true], ["stars", "Stars", true],
  ];

  function renderTable() {
    const rows = filtered();
    const body = rows.length ? rows.map(rowHTML).join("") : `<tr><td colspan="${COLS.length}" class="empty">No bundles match these filters.</td></tr>`;
    $("#rank tbody").innerHTML = body;
    $("#rank thead tr").innerHTML = COLS.map(([k, t, sortable, cls]) => {
      const s = state.sort === k ? (state.dir === 1 ? "ascending" : "descending") : "none";
      return `<th class="${cls || ""}" ${sortable ? `aria-sort="${s}"` : ""} scope="col">${sortable ? `<button type="button" data-sort="${k}">${t}<span class="arrow">${s === "ascending" ? "▲" : "▼"}</span></button>` : t}</th>`;
    }).join("");
    $("#count").textContent = `Showing ${rows.length} of ${D.bundles.length} bundles`;
    bindTips($("#rank"));
  }

  function rankingsView() {
    const cats = ["All", ...Object.keys(S.categories).sort()];
    view.innerHTML = `
      <section class="hero">
        <div><h1>Trust scores for AI agent skill bundles</h1>
          <p>What popular skill, plugin and MCP bundles can do to your machine before you install them: shell, network, hooks that run without asking, and prompt-injection surfaces. Scored by static analysis.</p></div>
        <span class="pill"><span class="dot"></span>${esc(S.bundles)} bundles · ${esc(fmt(S.units))} units · ${esc(S.scan_date)}</span>
      </section>
      ${cardsHTML()}
      ${NAMED ? "" : `<p class="note">Bundles are shown by category, not by name. Scores describe capabilities, not intent: no bundle in this set looked malicious. <a href="#/about">How scoring works</a></p>`}
      <div class="toolbar" role="group" aria-label="Filters">
        <div class="tabs" id="cats">${cats.map((c) => `<button type="button" class="tab" aria-pressed="${state.cat === c}" data-cat="${esc(c)}">${esc(c)}${c === "All" ? "" : ` <span class="muted">${S.categories[c]}</span>`}</button>`).join("")}</div>
        <span class="spacer"></span>
        <select class="select" id="f-verdict" aria-label="Verdict">
          <option value="all">All verdicts</option>${["OK", "REVIEW", "CAUTION", "BLOCK"].map((v) => `<option value="${v}" ${state.verdict === v ? "selected" : ""}>${STATUS[v].label}</option>`).join("")}
        </select>
        <select class="select" id="f-cap" aria-label="Capability">
          <option value="all">Any capability</option>${CAPS.map((c) => `<option value="${c}" ${state.cap === c ? "selected" : ""}>${CAP_LABEL[c]}</option>`).join("")}
        </select>
        <label class="toggle" data-tip="${esc(NAMED ? "<strong>Show repo names</strong>Toggle between named and category labels" : "<strong>Names hidden in this build</strong>Rebuild data with --names to publish named rankings")}">
          <input type="checkbox" id="f-names" ${state.showNames ? "checked" : ""} ${NAMED ? "" : "disabled"}> Names
        </label>
      </div>
      <div class="table-card">
        <div class="table-scroll"><table class="rank" id="rank"><caption class="skip">Bundles ranked by trust score</caption><thead><tr></tr></thead><tbody></tbody></table></div>
        <div class="table-foot"><span id="count"></span><span>Click a row for details · 75+ OK · 40–74 review · low score or auto-run risk = caution · exfiltration patterns = block</span></div>
      </div>`;
    renderTable();
    bindTips(view);

    $("#cats").addEventListener("click", (e) => {
      const t = e.target.closest("[data-cat]"); if (!t) return;
      state.cat = t.dataset.cat;
      $("#cats").querySelectorAll(".tab").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
      renderTable();
    });
    $("#f-verdict").addEventListener("change", (e) => { state.verdict = e.target.value; renderTable(); });
    $("#f-cap").addEventListener("change", (e) => { state.cap = e.target.value; renderTable(); });
    $("#f-names").addEventListener("change", (e) => { state.showNames = e.target.checked; renderTable(); });
    $("#rank thead").addEventListener("click", (e) => {
      const b = e.target.closest("[data-sort]"); if (!b) return;
      const k = b.dataset.sort;
      state.dir = state.sort === k ? -state.dir : (k === "name" || k === "category" ? 1 : -1);
      state.sort = k; renderTable();
    });
    const open = (e) => { const tr = e.target.closest("tr[data-id]"); if (tr) location.hash = "#/b/" + tr.dataset.id; };
    $("#rank tbody").addEventListener("click", open);
    $("#rank tbody").addEventListener("keydown", (e) => { if (e.key === "Enter") open(e); });
  }

  /* ---------- detail ---------- */
  function gaugeSVG(score, verdict) {
    const r = 42, c = 2 * Math.PI * r, f = (score / 100) * c;
    return `<svg viewBox="0 0 100 100" width="104" height="104" role="img" aria-label="Trust score ${score} of 100">
      <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="9"/>
      <circle cx="50" cy="50" r="${r}" fill="none" stroke="${STATUS[verdict].color}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${f} ${c}" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" text-anchor="middle" font-size="24" font-weight="700" fill="var(--text)">${score}</text>
      <text x="50" y="70" text-anchor="middle" font-size="9" fill="var(--text-3)">of 100</text></svg>`;
  }

  function stackedBar(parts, total) {
    // parts: [{label, value, color}] with 2px surface gaps between segments
    const w = 100; let x = 0; const segs = [];
    const shown = parts.filter((p) => p.value > 0);
    shown.forEach((p, i) => {
      const pw = (p.value / total) * w;
      segs.push(`<div data-tip="${esc(`<strong>${fmt(p.value)}</strong>${p.label} · ${pct(p.value, total)}%`)}" tabindex="0" style="flex:${pw} 0 0;background:${p.color};height:100%;border-radius:${i === 0 ? "4px 0 0 4px" : ""}${i === shown.length - 1 ? (i === 0 ? "4px" : "0 4px 4px 0") : ""};min-width:3px"></div>`);
      x += pw;
    });
    return `<div style="display:flex;gap:2px;height:14px" role="img" aria-label="${esc(shown.map((p) => `${p.value} ${p.label}`).join(", "))}">${segs.join("")}</div>
      <div class="legend">${shown.map((p) => `<span><i style="background:${p.color}"></i>${esc(p.label)} <b>${fmt(p.value)}</b></span>`).join("")}</div>`;
  }

  function barsHTML(items, max, unit) {
    if (!items.length) return `<p class="muted" style="margin:0">No medium or high findings.</p>`;
    return `<div class="bars">${items.map((it) => `
      <div class="bar-row" tabindex="0" data-tip="${esc(`<strong>${fmt(it.value)}</strong>${it.label}${unit ? " · " + unit : ""}`)}">
        <span class="name">${esc(it.label)}</span>
        <span class="track"><span class="fill" style="display:block;width:${Math.max(1.5, (it.value / max) * 100)}%"></span></span>
        <span class="val">${fmt(it.value)}</span></div>`).join("")}</div>`;
  }

  function detailView(id) {
    const b = D.bundles.find((x) => x.id === id);
    if (!b) { view.innerHTML = `<p class="crumbs"><a href="#/">Rankings</a></p><p class="empty">Bundle not found.</p>`; return; }
    const rank = [...D.bundles].sort((a, c) => c.score - a.score || c.units - a.units || a.id.localeCompare(c.id)).findIndex((x) => x.id === id) + 1;
    const uv = b.unit_verdicts;
    const ruleMax = Math.max(1, ...b.rules.map((r) => r.count));
    const named = NAMED && state.showNames;
    view.innerHTML = `
      <p class="crumbs"><a href="#/">Rankings</a> / ${esc(b.category)} / ${esc(b.id)}</p>
      <div class="detail-head">
        <span class="avatar" style="background:${avatarBg(b)}">${esc(avatarText(b))}</span>
        <div><h1>${esc(label(b))}</h1>
          <div class="meta"><span>Rank #${rank} of ${D.bundles.length}</span><span>${esc(b.category)}</span><span>${named ? fmt(b.stars) + " stars" : esc(b.stars_bucket) + " stars"}</span>
          ${named ? `<a href="${esc(b.url)}" rel="noopener">GitHub ↗</a><span>commit ${esc((b.commit || "").slice(0, 7))}</span>` : ""}</div>
          ${named && b.description ? `<p class="muted" style="margin:6px 0 0;max-width:720px">${esc(b.description)}</p>` : ""}</div>
      </div>
      <div class="grid-2">
        <div class="stack">
          <div class="card"><h3>Trust score</h3>
            <div class="gauge-wrap">${gaugeSVG(b.score, b.verdict)}<div>${badge(b.verdict)}<p class="lbl">Blends the worst 20% of units with the average. Block is reserved for exfiltration-like patterns; powerful but explained behaviour is caution.</p></div></div></div>
          <div class="card"><h3>At a glance</h3>
            <dl class="kv">
              <dt>Units scanned</dt><dd>${fmt(b.units)}</dd>
              <dt>Units with no findings</dt><dd>${fmt(b.clean_units)} (${pct(b.clean_units, b.units)}%)</dd>
              <dt>High findings</dt><dd>${fmt(b.sev.HIGH || 0)}</dd>
              <dt>Medium findings</dt><dd>${fmt(b.sev.MED || 0)}</dd>
              <dt>Low findings</dt><dd>${fmt(b.sev.LOW || 0)}</dd>
            </dl></div>
          <div class="card"><h3>Unit verdicts</h3>
            <div class="status-rows">${["OK", "REVIEW", "CAUTION", "BLOCK"].map((k) => `
              <div class="status-row">${badge(k)}<div class="track"><div class="fill" style="width:${pct(uv[k] || 0, b.units)}%;background:${STATUS[k].color}"></div></div><span class="n">${uv[k] || 0}</span></div>`).join("")}</div></div>
        </div>
        <div class="stack">
          <div class="card"><h3>What's inside</h3>
            ${stackedBar([
              { label: "Skills", value: b.skills, color: "var(--s1)" }, { label: "Commands", value: b.commands, color: "var(--s2)" },
              { label: "Subagents", value: b.agents, color: "var(--s3)" }, { label: "Hook sets", value: b.hooks, color: "var(--s4)" },
              { label: "MCP servers", value: b.mcp, color: "var(--s5)" }], b.units)}</div>
          <div class="card"><h3>Capabilities</h3>
            <div class="capgrid">${CAPS.map((c) => `<div class="capitem ${b.caps.includes(c) ? "on" : ""}"><span class="cap ${b.caps.includes(c) ? "on" + (CAP_RISK.has(c) ? " risk" : "") : ""}">${svgIcon(c)}</span>${CAP_LABEL[c]}<small>${b.caps.includes(c) ? "Found" : "—"}</small></div>`).join("")}</div></div>
          <div class="card"><h3>Risky patterns <span class="muted">medium + high findings</span></h3>
            ${barsHTML(b.rules.map((r) => ({ label: r.label, value: r.count })), ruleMax, "findings")}
            <p class="read-note">A finding means the pattern appears, in code or in instructions the agent reads. About a quarter of high findings in our hand-checked sample were text that describes or warns against the pattern.</p></div>
          ${named && b.top_findings && b.top_findings.length ? `<div class="card"><h3>Top findings</h3>
            <table class="findings"><thead><tr><th>Severity</th><th>Pattern</th><th>Location</th></tr></thead><tbody>
            ${b.top_findings.map((f) => `<tr><td><span class="sev ${f.sev}">${f.sev}</span></td><td>${esc(f.label)}${f.auto_run ? ' <span class="muted">(auto-run)</span>' : ""}</td><td><code>${esc(f.file)}:${f.line}</code></td></tr>`).join("")}
            </tbody></table></div>` : ""}
        </div>
      </div>`;
    bindTips(view);
    scrollTo(0, 0);
  }

  /* ---------- patterns ---------- */
  function patternsView() {
    const cats = Object.keys(S.categories).map((c) => {
      const s = D.bundles.filter((b) => b.category === c).map((b) => b.score).sort((a, b) => a - b);
      const m = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
      return { label: `${c} (${s.length})`, value: m };
    }).sort((a, b) => b.value - a.value);
    view.innerHTML = `
      <h1 class="page-title">Patterns across ${S.bundles} bundles</h1>
      <p class="page-sub">How often each capability and risky pattern shows up. Counts are bundles with at least one medium or high finding, out of ${S.bundles}.</p>
      <div class="grid-charts">
        <div class="card chart-card"><h2>Risky patterns</h2><p class="desc">Bundles with at least one medium or high finding</p>
          ${barsHTML(S.rules.map((r) => ({ label: r.label, value: r.bundles })), S.bundles, "bundles")}</div>
        <div class="stack">
          <div class="card chart-card"><h2>Capabilities</h2><p class="desc">Bundles where at least one unit has the capability</p>
            ${barsHTML(CAPS.map((c) => ({ label: CAP_LABEL[c], value: S.caps[c] || 0 })).sort((a, b) => b.value - a.value), S.bundles, "bundles")}</div>
          <div class="card chart-card"><h2>Trust score distribution</h2><p class="desc">Bundles per 10-point score band</p>
            ${histogramSVG(D.bundles.map((b) => b.score), { w: 520, h: 150, axis: true })}</div>
          <div class="card chart-card"><h2>Median score by category</h2><p class="desc">Number of bundles in brackets</p>
            ${barsHTML(cats, 100, "median score")}</div>
        </div>
      </div>`;
    bindTips(view);
  }

  /* ---------- about ---------- */
  function aboutView() {
    view.innerHTML = `<div class="prose">
      <h1 class="page-title">Methodology</h1>
      <p>skillscan reads a bundle's files and never runs them. It finds each <em>unit</em> (a skill's <code>SKILL.md</code> folder, a slash command, a subagent, a hook set or an MCP server config) and checks it for shell access, network calls, credential paths, persistence, permission bypasses, prompt-injection phrasing, hidden unicode and encoded payloads.</p>
      <h2>Scoring</h2>
      <p>Each unit starts at 100 and loses points for each distinct finding (high 20, medium 8, low 2, with less weight for repeats). Findings in hooks weigh 1.5× because hooks run with no prompt. A bundle's score blends its worst 20% of units with the average.</p>
      <h2>Verdicts</h2>
      <ul>
        <li><b>OK</b>: score 75 or more.</li>
        <li><b>Review</b>: score 40–74. Worth a skim before installing.</li>
        <li><b>Caution</b>: score under 40, or a high finding in an auto-run hook, but nothing that looks like exfiltration. Typical cause: a powerful skill that calls its own backend, reads cookies with consent, or pre-approves a shell.</li>
        <li><b>Block</b>: reserved for hard patterns. These are a unit that reads credentials or environment variables <em>and</em> sends data to a host that isn't the bundle's documented service, decode-and-execute, hidden unicode, secrets inlined in MCP config, or an auto-run hook that pipes <code>curl</code> to a shell, persists, or sends data to an undeclared host.</li>
      </ul>
      <p>Network calls to a bundle's <b>own or documented service</b> are low severity. That covers a domain named in its README or manifest, or one that matches the repo or owner name. The finding says which service it is.</p>
      <h2>Noise control</h2>
      <ul>
        <li>Tests, examples, CI and eval folders are skipped because they don't ship to agents.</li>
        <li>Code comments are ignored. Prose that warns against or describes a pattern drops to low.</li>
        <li>Findings inside markdown code examples drop one level, except injection findings, because the model reads those too.</li>
        <li>Emoji joiners, Persian and Indic text, documented example keys and localhost URLs are not flagged.</li>
      </ul>
      <p>In a random sample of 60 high findings, 73% were accurate (the skill really has that power), 25% were text describing the pattern, and 2% were wrong matches. None looked malicious.</p>
      <h2>Selection</h2>
      <p>These are the 100 most-starred public GitHub repos from agent-skill topic searches that contain at least one <code>SKILL.md</code> or plugin manifest. For apps that ship a few skills, only the skill, command, agent, hook and MCP parts were scanned.</p>
      <h2>Limits</h2>
      <p>Static patterns show what a bundle <em>could</em> do, not what it does or why. A low score is a reason to read the findings, not proof of harm. Sandboxed runs and semantic review are planned.</p>
      <h2>Scan your own</h2>
      <pre><code>./skillscan.py scan owner/repo --per-unit
./skillscan.py lock .claude/skills -o skills.lock
./skillscan.py check .claude/skills --lock skills.lock   # CI gate</code></pre>
      <p>Full write-up: <a href="report.html">We scanned 100 popular AI agent skill bundles</a>.</p>
    </div>`;
  }

  /* ---------- router ---------- */
  function route() {
    hideTip();
    const h = location.hash || "#/";
    const nav = h.startsWith("#/patterns") ? "patterns" : h.startsWith("#/about") ? "about" : "rankings";
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === nav));
    if (h.startsWith("#/b/")) detailView(decodeURIComponent(h.slice(4)));
    else if (nav === "patterns") patternsView();
    else if (nav === "about") aboutView();
    else rankingsView();
    document.title = nav === "rankings" && !h.startsWith("#/b/") ? "skillscan · Trust scores for AI agent skills" : `skillscan · ${h.startsWith("#/b/") ? "Bundle detail" : nav[0].toUpperCase() + nav.slice(1)}`;
  }

  /* ---------- global controls ---------- */
  $("#q").addEventListener("input", (e) => {
    state.q = e.target.value;
    if (!/^#\/?$/.test(location.hash || "#/")) location.hash = "#/";
    else if ($("#rank")) renderTable();
  });
  addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); $("#q").focus(); }
  });
  $("#theme").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ss-theme", next); } catch (e) {}
  });
  addEventListener("hashchange", route);
  addEventListener("scroll", hideTip, { passive: true });
  renderTicker();
  route();
})();
