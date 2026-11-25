#!/usr/bin/env bash
# Re-scan every repo in targets/repos.txt and write results to a work dir.
# Usage: scripts/scan_all.sh [work_dir]   (needs git, python3, and gh authenticated or GH_TOKEN set)
# Read-only: repos are shallow-cloned, scanned statically, then deleted. Nothing from them is executed.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$(mkdir -p "${1:-$ROOT/.work}" && cd "${1:-$ROOT/.work}" && pwd)"
JOBS="${JOBS:-8}"
export ROOT WORK GIT_LFS_SKIP_SMUDGE=1 GIT_TERMINAL_PROMPT=0
mkdir -p "$WORK/scans" "$WORK/clones"
rm -f "$WORK"/scans/*
date -u +%F > "$WORK/scan_date.txt"

# 1. Refresh stars and descriptions (skips repos that were deleted or renamed away).
: > "$WORK/selected.tsv"; : > "$WORK/meta.tsv"
while read -r repo; do
  [ -z "$repo" ] && continue
  if line=$(gh api "repos/$repo" --jq '[.full_name, .stargazers_count, (.description//""|gsub("[\t\n]";" ")), ((.topics//[])|join(",")), (.license.spdx_id//""), .pushed_at]|@tsv' 2>/dev/null); then
    IFS=$'\t' read -r name stars desc topics lic pushed <<<"$line"
    printf '%s\t%s\n' "$stars" "$repo" >> "$WORK/selected.tsv"
    printf '%s\t%s\t%s\t%s\t%s\n' "$repo" "$desc" "$topics" "$lic" "$pushed" >> "$WORK/meta.tsv"
  else
    echo "skip (unavailable): $repo" >&2
  fi
done < "${TARGETS:-$ROOT/targets/repos.txt}"

# 2. Clone, scan, delete, in parallel.
scan_one() {
  repo="$1"; id="${repo/\//_}"; d="$WORK/clones/$id"; out="$WORK/scans/$id.json"
  rm -rf -- "$d" 2>/dev/null || rm -rf -- "$d" 2>/dev/null || true
  if ! git clone --depth 1 --quiet --no-tags "https://github.com/$repo" "$d" 2>/dev/null; then echo "clone failed: $repo" >&2; return 0; fi
  git -C "$d" rev-parse HEAD > "$out.sha"
  if timeout 600 python3 -I "$ROOT/skillscan.py" scan "$d" --skills-only --json > "$out.tmp" 2>/dev/null; then mv "$out.tmp" "$out"; else echo "scan failed: $repo" >&2; rm -f "$out.tmp"; fi
  rm -rf -- "$d" 2>/dev/null || rm -rf -- "$d" 2>/dev/null || true
}
export -f scan_one
cut -f2 "$WORK/selected.tsv" | xargs -P "$JOBS" -I{} bash -c 'scan_one "$@"' _ {} || true
echo "scanned $(ls "$WORK"/scans/*.json 2>/dev/null | wc -l | tr -d ' ') repos into $WORK" >&2
