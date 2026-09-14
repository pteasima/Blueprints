# Agent notes

Parametric 2D/3D models in Python ([build123d](https://github.com/gumyr/build123d)). Humans review geometry in chat, mostly from PNG previews.

Treat developer-experience friction (especially Cloud Agent onboarding) as part of the work. If setup, docs, or the export loop wastes time, fix it in-repo or propose the environment change — do not only work around it for one session.

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

Exports land in `exports/<model>/` (`model.png`, plus STEP/STL/USDZ/SVG/DXF). **PNG is required** in the reply.

Chat on iOS **and** web only *renders* `<img>` and `<video>`. Copy PNG (and optional orbit video) to `/opt/cursor/artifacts/` and embed with:

```html
<img src="/opt/cursor/artifacts/obyvak_cutaway.png" alt="obyvak cutaway" />
```

Only those `src` values are rewritten to a public artifact URL. **Do not** put `/opt/cursor/artifacts/…` in `<a href>` — the chat leaves the path as-is, the browser resolves it to `https://cursor.com/opt/cursor/artifacts/…`, and Cursor shows **404**. USDZ never appears as a tile.

After a 3D export, still write `{model}_3d.usdz` into `/opt/cursor/artifacts/`. Do not attach STEP unless the user asks.

### Quick Look from chat (required after every 3D change)

Cursor chat cannot open a USDZ tile or an artifact path. Export updates the Pages **inputs** (not the live site by itself):

- `docs/models/<id>.usdz` — Git LFS (overwrite in place; do not version-stack copies)
- `docs/models/manifest.json` — button labels / order
- `docs/index.html` — **generated locally and by CI; gitignored** — do not commit it

The `pages` GitHub Action rebuilds the hub and deploys a **rolling** site (last push to `main` or `cursor/**` wins):

```text
preview_url: https://pteasima.github.io/Blueprints/
```

After `git push`, wait for the `pages` workflow to go green, then paste that URL in chat (tappable on Cursor iOS). Safari → **Quick Look**.

One-time enable: https://github.com/pteasima/Blueprints/settings/pages → Source = **GitHub Actions** → Save. Then open **Settings → Environments → github-pages → Deployment branches** and allow `cursor/**` (or All branches) — by default only `main` can deploy, which blocks unmerged agent previews. Cloud agent tokens cannot change this (API 403). Override the printed URL with `BLUEPRINTS_PAGES_URL` if needed. Skip site file updates with `BLUEPRINTS_SKIP_PREVIEW_SITE=1`.

Add more buttons later (sectional cuts, other models) via more USDZs + manifest rows — one hub page.

USDZ is a zip **container** of a binary `.usdc` crate (`UsdUtils.CreateNewARKitUsdzPackage`). Quick Look opens the `.usdz` file itself — never unzip it. The hub embeds USDZ as a `data:model/vnd.usdz+zip;base64,…` `rel="ar"` link so Safari does not depend on GitHub’s USDZ MIME type.

Author USDZ in **metres** (`metersPerUnit = 1`) with the mesh sitting on Y=0. RealityKit often ignores `metersPerUnit`, so millimetre CAD numbers look like kilometres in AR (Object mode still auto-fits). Models whose real span exceeds 2 m are uniformly scaled to a ~0.45 m tabletop so iPad AR can find a plane; add Apple's `Preliminary_AnchoringAPI` (horizontal plane).

If PNG export fails, fix that before considering the task done.

## Tests

```bash
source .venv/bin/activate
python -m pytest
```

## Cursor Cloud specific instructions

- `install` must finish with a working `.venv` that can `import build123d`, `import cairosvg` (PNG), and `from pxr import Usd` (ARKit USDZ), plus `git lfs`.
- Do not assume `python3 -m venv` works on the base image; install `python3.12-venv` first (`scripts/cloud-agent-install.sh`).
- `libcairo2` is required at runtime for CairoSVG PNG export.
