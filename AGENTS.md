# Agent notes

Parametric 2D/3D models in Python ([build123d](https://github.com/gumyr/build123d)). Humans review geometry in chat, mostly from PNG previews.

All process for this repo lives in this file. Humans are agents too. Do not add a `CONTRIBUTING.md`; a second process file would drift from this one.

Treat developer-experience friction (especially Cloud Agent onboarding) as part of the work. If setup, docs, or the export loop wastes time, fix it in-repo or propose the environment change — do not only work around it for one session. A one-off workaround leaves the next session with the same break.

## Pull requests

Open every pull request as a draft. A draft means agents are still working. Ready for review means it is the repo owner's turn. Mark a pull request ready only when CI is green and you have reviewed the diff yourself. If another agent launched you, leave the pull request as a draft and report back to that agent instead.

When a pull request branch is behind `main`, rebase that feature branch onto `main` and force-push the feature branch. Do not merge `main` into the feature branch. Pull requests merge to `main` only by squash, so a merge from `main` would fold upstream history into that squash; a rebase keeps the branch a linear stack of its own work. Force-push only the feature branch. The ruleset on `main` blocks force-pushes and deletion. The only exception is a branch that someone else is also committing to, because a rebase would rewrite commits they still have locally.

## Measure first

Prefer building the model and measuring it over hand calculation. Use code and tests to get numbers, and use reasoning to decide what to try next. Do not derive millimetre values by hand when the model can report them. Example: start tiling from the reference corner at level zero, build, measure the far corner, then shift.

## Sanity bounds

When a task builds something and reports resulting values, compare them against the plausible range the prompt gives, or an obvious physical range. Flag anything outside that range as a question in the pull request. Do not accept it silently.

## Plan first

If the prompt asks for a plan first, post the plan on the draft pull request and stop. Otherwise build.

## Over the estimate

If the work clearly exceeds the estimate given in the prompt, push what you have and summarise where you are stuck instead of continuing.

## Environment

Bootstrap (Cloud Agent `install` and local):

```bash
bash scripts/cloud-agent-install.sh
```

Then:

```bash
source .venv/bin/activate
```

The default Cloud Agent image does **not** include `ensurepip`. Creating `.venv` without `python3.12-venv` leaves a broken tree (Python symlink, no pip). If that happens, rerun the install script; do not debug pip by hand.

Install also enables **Git LFS** (`docs/models/*.usdz`). Pull with LFS available so mesh pointers resolve.

`.cursor/environment.json` is the repo copy of that bootstrap. The dashboard environment may also need **Save** after an agent proposes an install change.

## Export and PNG previews

Always attach PNG previews in chat. After creating or changing a model:

```bash
source .venv/bin/activate
python -m blueprints.export <model>
```

Example: `python -m blueprints.export hello_world`

Solids land in `exports/<model>/` as STEP/STL plus USDZ/GLB/HTML for the viewer. 2D modules (`obyvak_section`, `obyvak_elevation`) still write layered SVG/DXF/PNG. Contractor plates — labels, dimensions, a named orthographic scene — come from the viewer **Drawing** button (PNG and PDF of that view). **A PNG of any changed 3D view is required** in the reply: capture the viewer drawing, not a hidden-line dump of the solid. The HTML viewer is a self-contained offline WebGL page (embedded GLB + custom Three.js shell) with part toggles, camera presets, and scene drawings; USDZ remains for Quick Look/AR.

The viewer **Measure** tool (top bar, next to AR) is **experimental** and will be developed further — do not treat its current UX/snap behavior as a stable contract when changing the viewer. See `src/blueprints/viewer/README.md`.

Chat on iOS **and** web only *renders* `<img>` and `<video>`. Copy PNG (and optional orbit video) to `/opt/cursor/artifacts/` and embed with:

```html
<img src="/opt/cursor/artifacts/obyvak_sikmina-section.png" alt="šikmina section drawing" />
```

Only those `src` values are rewritten to a public artifact URL. **Do not** put `/opt/cursor/artifacts/…` in `<a href>` — the chat leaves the path as-is, the browser resolves it to `https://cursor.com/opt/cursor/artifacts/…`, and Cursor shows **404**. USDZ never appears as a tile.

After a 3D export, still write `{model}_3d.usdz` into `/opt/cursor/artifacts/`. Do not attach STEP unless the user asks.

### Preview site from chat (required after every 3D change)

Cursor chat cannot open a USDZ tile or an artifact path. Export updates the Pages **inputs** (not the live site by itself):

- `docs/models/<id>.glb` (+ `.usdz`) — Git LFS (overwrite in place; do not version-stack copies)
- `docs/models/manifest.json` — hub labels / order
- `docs/index.html` — **generated locally and by CI; gitignored** — do not commit it

**Production** (pushes to `main` only):

```text
preview_url: https://pteasima.github.io/Blueprints/
```

**PR / agent previews** (one URL per open PR; does not overwrite other agents):

```text
https://pteasima.github.io/Blueprints/pr-preview/pr-<N>/
```

Publishing is automatic. Pushing the PR branch, or opening or closing the PR, runs `pages-content`. That workflow writes `pr-preview/pr-<N>/` and deploys GitHub Pages. A push to `main` updates the production site. Closing or merging the PR deletes that preview. Export’s printed `preview_url` is still the production root (no PR context locally).

The agent waits until `pages-content` has finished and the preview URL is actually serving the change, then tells the user that preview is ready:

```text
https://pteasima.github.io/Blueprints/pr-preview/pr-<N>/
```

Do not ask the user to open Actions, compare file URLs, hard-refresh, or look at a second pull request. They only wait to be told it is ready.

A feature-branch push publishes the open PR even when GitHub does not deliver `pull_request` for that commit. Cloud agent tokens cannot `workflow_dispatch` this workflow (API 403). Do not open another PR to force a deploy. If no `pages-content` run appears, the branch is missing the feature-branch push trigger in `.github/workflows/pages-content.yml` — get that trigger onto the branch and push again.

Hub links open **web viewers** (`viewer/?m=<id>`). In Safari, use the viewer’s **AR** control for Quick Look.

One-time enable:

1. https://github.com/pteasima/Blueprints/settings/pages → Source = **GitHub Actions** → Save.
2. **Settings → Actions → General → Workflow permissions** → **Read and write** (so `pages-content` can update the `pages-site` branch).
3. **Settings → Environments → github-pages → Deployment branches** → **All branches** (PR preview deploys run from `pull_request` jobs; a `main`-only allowlist blocks them).

Cloud agent tokens cannot change those settings (API 403). Override the printed production URL with `BLUEPRINTS_PAGES_URL` if needed. Skip site file updates with `BLUEPRINTS_SKIP_PREVIEW_SITE=1`.

Add more models later via more GLBs (+ USDZs) and manifest rows — one hub page. Hub entries are web-viewer links only.

USDZ is a zip **container** of a binary `.usdc` crate (`UsdUtils.CreateNewARKitUsdzPackage`). Quick Look opens the `.usdz` file itself — never unzip it. The **viewer** can generate a view-matched USDZ in-browser for Safari AR; the hub does not embed USDZ.

Author USDZ in **metres** (`metersPerUnit = 1`) with the mesh sitting on Y=0. RealityKit often ignores `metersPerUnit`, so millimetre CAD numbers look like kilometres in AR (Object mode still auto-fits). Models whose real span exceeds 2 m are uniformly scaled to a ~0.45 m tabletop so iPad AR can find a plane; add Apple's `Preliminary_AnchoringAPI` (horizontal plane).

If PNG export fails, fix that before considering the task done.

## Tests

```bash
source .venv/bin/activate
python -m pytest
```

GitHub Actions runs this suite on pull requests and on pushes to `main`, with a read-only token (`permissions: contents: read`).

Default to **asking the human to test UI changes manually** (especially phone / Safari / Quick Look). Do **not** start `computerUse` / GUI walkthroughs unless the human asks for that, or a non-UI bug needs interactive reproduction after automated checks fail. Prefer `pytest`, export smoke, and the live Pages URL for verification. The agent desktop cannot stand in for a phone, Safari, or Quick Look.

## Cursor Cloud specific instructions

- `install` must finish with a working `.venv` that can `import build123d`, `import cairosvg` (PNG), and `from pxr import Usd` (ARKit USDZ), plus `git lfs`.
- Do not assume `python3 -m venv` works on the base image; install `python3.12-venv` first (`scripts/cloud-agent-install.sh`).
- `libcairo2` is required at runtime for CairoSVG PNG export.
- Skip computer-use / screen-recording demos by default (see Tests); they are slow and block the human. Ask them to try the Pages preview instead.
