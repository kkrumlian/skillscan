# skillscan site

A static ranking dashboard for the 100-bundle scan. It uses plain HTML, CSS and JS, with no build step and no dependencies.

## Run locally

```bash
cd skill-scanner/site
python3 -m http.server 8000      # then open http://localhost:8000
```

Opening `index.html` directly from disk also works, because the data loads from `data/bundles.js`.

## Pages

- `#/` shows the rankings: stat cards, category tabs, verdict and capability filters, search (press `/`), and sortable columns.
- `#/b/<ID>` is the detail page for one bundle: score gauge, unit makeup, capabilities, risky patterns and unit verdicts.
- `#/patterns` shows pattern and capability prevalence, the score distribution and median score by category.
- `#/about` explains the methodology.
- `report.html` is the full written report.

## Named vs anonymized data

The data that ships is **anonymized**: rows show category labels (for example "Dev workflow bundle #4"), star ranges instead of exact counts, and rule-level counts only. There are no repo names, links, file paths or snippets.

To publish named rankings, rebuild the data. The raw scans live outside this folder, in `../../skill-scanner-private/`, and are never copied here.

```bash
python3 site/build_data.py --names   # repo names, links, exact stars, top findings with file:line
python3 site/build_data.py           # back to anonymized
```

In a named build, the **Names** toggle in the toolbar switches between repo names and category labels.

After changing data or assets, bump the `?v=` numbers in `index.html` so browsers don't serve cached copies.

## GitHub Pages

Every path is relative, and `.nojekyll` is included. Either:

- publish this `site/` folder as the Pages root (Settings → Pages → deploy from a branch, folder `/site` if supported, or copy it to `/docs`), or
- push its contents to a `gh-pages` branch.

## Design

The brand (ink and mint shield mark) and the layout are original. Chart colors come from a CVD-validated palette, verdicts always carry an icon and a label as well as a color, and light and dark themes follow the OS with a manual toggle.
