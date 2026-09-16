#!/usr/bin/env bash
# Commit and push pages-site changes (serialized by workflow concurrency).
set -euo pipefail

DEST="${1:-pages-site}"
MESSAGE="${2:-Update pages-site}"

git -C "$DEST" add -A
if git -C "$DEST" diff --cached --quiet; then
  echo "pages-site: no changes"
  exit 0
fi

git -C "$DEST" commit -m "$MESSAGE"

# Concurrency group should serialize jobs; still retry once on race.
if ! git -C "$DEST" push origin HEAD:pages-site; then
  git -C "$DEST" pull --rebase origin pages-site
  git -C "$DEST" push origin HEAD:pages-site
fi

echo "pages-site: pushed"
