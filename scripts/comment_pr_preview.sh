#!/usr/bin/env bash
# Create or update a sticky PR comment with the preview URL.
set -euo pipefail

PR_NUMBER="${1:?PR number required}"
ACTION="${2:?action required: deploy|remove}"
PAGES_BASE="${3:-https://pteasima.github.io/Blueprints/}"
MARKER="<!-- blueprints-pr-preview -->"

PAGES_BASE="${PAGES_BASE%/}/"
PREVIEW_URL="${PAGES_BASE}pr-preview/pr-${PR_NUMBER}/"

if [[ "$ACTION" == "remove" ]]; then
  BODY=$(
    cat <<EOF
${MARKER}
### Blueprints preview

Preview for this PR was removed (PR closed or merged).

Production site: ${PAGES_BASE}
EOF
  )
else
  BODY=$(
    cat <<EOF
${MARKER}
### Blueprints preview

- Hub: ${PREVIEW_URL}
- Viewer example: ${PREVIEW_URL}viewer/?m=obyvak

This URL is scoped to PR #${PR_NUMBER} and is removed when the PR closes.
Production (main): ${PAGES_BASE}
EOF
  )
fi

EXISTING_ID="$(
  gh api "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
    --paginate \
    --jq ".[] | select(.user.login==\"github-actions[bot]\" and (.body | contains(\"${MARKER}\"))) | .id" \
    | head -n1
)"

if [[ -n "$EXISTING_ID" ]]; then
  gh api "repos/${GITHUB_REPOSITORY}/issues/comments/${EXISTING_ID}" \
    -X PATCH \
    -f body="$BODY" >/dev/null
  echo "Updated preview comment ${EXISTING_ID}"
else
  gh api "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
    -f body="$BODY" >/dev/null
  echo "Created preview comment"
fi
