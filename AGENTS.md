# Agent notes

Parametric 2D/3D models in Python ([build123d](https://github.com/gumyr/build123d)). Humans review geometry in chat, mostly from PNG previews.

Treat developer-experience friction (especially Cloud Agent onboarding) as part of the work. If setup, docs, or the export loop wastes time, fix it in-repo or propose the environment change — do not only work around it for one session.

## Architectural modelling (physical building first)

These are **building assemblies**, not decorative meshes. Before coding solids, reason as a house designer / structural engineer / contractor:

- Every layer needs a real thickness, a load path or attachment, and a reason to exist (structure, weather, vapour, acoustics, finish, tolerance).
- Do not invent geometry that cannot be built, hang, or drain. If a detail is load-bearing, say what carries it (rafters, hangers, masonry) and what must *not* carry it (e.g. furniture under a self-supporting soffit).
- Acoustic faces (e.g. NaturHeld + StoSilent on šikminy) are continuous room-facing layers with stated thickness — not paint on a zero-thickness shell.
- When transferring from a řez/detail sheet: if clearances, hangers, vapour order, or bearing are inconsistent, **push back** and say what must change in the structure before modelling. If the sheet is coherent, transfer the stack and tweak later.
- Prefer labelled solids that match contractor language (`NaturHeld 140`,
  `NaturHeld Flex 50`, `dreveny_rost`, `cd`, `zaves`, `paska`, `sdk`, `vata`, `krov`)
  over anonymous blobs. On šikminy: latě // krokvím (⊥ CD); CD ⊥ krokvím; hangers
  CD→krokve; pásky on rafter faces. Keep `krov` separate from `dreveny_rost`.

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

Exports land in `exports/<model>/` (`model.png`, plus STEP/STL/USDZ/GLB/HTML/SVG/DXF). **PNG is required** in the reply. The HTML viewer is a self-contained offline WebGL page (embedded GLB + custom Three.js shell) with part toggles and camera presets; USDZ remains for Quick Look/AR.

The viewer **Measure** tool (top bar, next to AR) is **experimental** and will be developed further — do not treat its current UX/snap behavior as a stable contract when changing the viewer. See `src/blueprints/viewer/README.md`.

Chat on iOS **and** web only *renders* `<img>` and `<video>`. Copy PNG (and optional orbit video) to `/opt/cursor/artifacts/` and embed with:

```html
<img src="/opt/cursor/artifacts/obyvak_cutaway.png" alt="obyvak cutaway" />
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

After `git push` + open PR, wait for `pages-content` then `pages` to go green. Use the sticky **Blueprints preview** comment on the PR (tappable on Cursor iOS), or paste `…/pr-preview/pr-<N>/` in chat. When the PR is merged or closed, that preview folder is deleted automatically. Export’s printed `preview_url` is still the production root (no PR context locally).

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

Default to **asking the human to test UI changes manually** (especially phone / Safari / Quick Look). Do **not** start `computerUse` / GUI walkthroughs unless the human asks for that, or a non-UI bug needs interactive reproduction after automated checks fail. Prefer `pytest`, export smoke, and the live Pages URL for verification.

## Cursor Cloud specific instructions

- `install` must finish with a working `.venv` that can `import build123d`, `import cairosvg` (PNG), and `from pxr import Usd` (ARKit USDZ), plus `git lfs`.
- Do not assume `python3 -m venv` works on the base image; install `python3.12-venv` first (`scripts/cloud-agent-install.sh`).
- `libcairo2` is required at runtime for CairoSVG PNG export.
- Skip computer-use / screen-recording demos by default (see Tests); they are slow and block the human. Ask them to try the Pages preview instead.
