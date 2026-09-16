#!/usr/bin/env bash
# Clone or initialize the orphan pages-site content branch into $1 (default: pages-site).
set -euo pipefail

DEST="${1:-pages-site}"
REPO_URL="${PAGES_SITE_REPO_URL:-https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git}"

if [[ -z "${GITHUB_TOKEN:-}" || -z "${GITHUB_REPOSITORY:-}" ]]; then
  echo "GITHUB_TOKEN and GITHUB_REPOSITORY are required" >&2
  exit 1
fi

rm -rf "$DEST"

if git ls-remote --exit-code --heads "$REPO_URL" pages-site >/dev/null 2>&1; then
  git clone --depth 1 --branch pages-site "$REPO_URL" "$DEST"
else
  mkdir -p "$DEST"
  git -C "$DEST" init
  git -C "$DEST" checkout -b pages-site
  touch "$DEST/.nojekyll"
  git -C "$DEST" add .nojekyll
  git -C "$DEST" \
    -c user.name="github-actions[bot]" \
    -c user.email="41898282+github-actions[bot]@users.noreply.github.com" \
    commit -m "Initialize pages-site content branch"
  git -C "$DEST" remote add origin "$REPO_URL"
  git -C "$DEST" push -u origin pages-site
fi

git -C "$DEST" config user.name "github-actions[bot]"
git -C "$DEST" config user.email "41898282+github-actions[bot]@users.noreply.github.com"
