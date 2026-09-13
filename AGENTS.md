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

`.cursor/environment.json` is the repo copy of that bootstrap. The dashboard environment may also need **Save** after an agent proposes an install change.

## Export and PNG previews

Always attach PNG previews in chat. After creating or changing a model:

```bash
source .venv/bin/activate
python -m blueprints.export <model>
```

Example: `python -m blueprints.export hello_world`

Exports land in `exports/<model>/` (`model.png`, plus STEP/STL/USDZ/HTML/SVG/DXF). **PNG is required** in the reply.

Chat on iOS **and** web only *renders* `<img>` and `<video>`. Copy PNG (and optional orbit video) to `/opt/cursor/artifacts/` and embed with:

```html
<img src="/opt/cursor/artifacts/obyvak_cutaway.png" alt="obyvak cutaway" />
```

Only those `src` values are rewritten to a public artifact URL. **Do not** put `/opt/cursor/artifacts/…` in `<a href>` — the chat leaves the path as-is, the browser resolves it to `https://cursor.com/opt/cursor/artifacts/…`, and Cursor shows **404**. USDZ/HTML/STEP never appear as tiles.

After a 3D export, still write `{model}_3d.usdz` and `{model}_3d.html` into `/opt/cursor/artifacts/` (and `docs/previews/` when the mesh should live in git). Do not attach STEP unless the user asks.

**iOS cannot open a git path.** This repo lives on Origin (`origin.cursor.com`), not public GitHub. Cursor chat does not rewrite `<a href>` (only `<img>`/`<video>` `src`), so `/opt/cursor/artifacts/…usdz` becomes a 404. A GitHub/Origin “view file” page is HTML, not a USDZ. Safari AR Quick Look only launches from the web if the response is HTTPS **and** `Content-Type: model/vnd.usdz+zip` (a bare `.usdz` link is enough then — no HTML required). Filebin and most git raw URLs send `application/zip` or `text/html`, which is why iOS saves a `.zip`.

Give the user the self-contained `{model}_3d.html` (AirDrop / Files / any host that serves `text/html`). On iPhone/iPad Safari it has `<a rel="ar" href="data:model/vnd.usdz+zip;base64,…">` so **Otevřít v AR** jumps into Quick Look without a second download. Direct USDZ-from-web without HTML needs a static host you control (GitHub Pages with `AddType model/vnd.usdz+zip`) — this Origin repo has no public Pages URL. Do not send Filebin+rename or a Siri shortcut unless the user asks.

USDZ is a zip **container** of a binary `.usdc` crate (`UsdUtils.CreateNewARKitUsdzPackage`). Quick Look opens the `.usdz` file itself — never unzip it. If a host saved it as `.zip`, rename back to `.usdz` without extracting. ASCII `.usda` zips are **not** Quick Look-compatible.

Author USDZ in **metres** (`metersPerUnit = 1`) with the mesh sitting on Y=0. RealityKit often ignores `metersPerUnit`, so millimetre CAD numbers look like kilometres in AR (Object mode still auto-fits). Models whose real span exceeds 2 m are uniformly scaled to a ~0.45 m tabletop so iPad AR can find a plane; add Apple's `Preliminary_AnchoringAPI` (horizontal plane). The HTML viewer must actually execute in Safari (a Filebin download page or a blank canvas is not a working viewer).

If PNG export fails, fix that before considering the task done.

## Tests

```bash
source .venv/bin/activate
python -m pytest
```

## Cursor Cloud specific instructions

- `install` must finish with a working `.venv` that can `import build123d`, `import cairosvg` (PNG), and `from pxr import Usd` (ARKit USDZ).
- Do not assume `python3 -m venv` works on the base image; install `python3.12-venv` first (`scripts/cloud-agent-install.sh`).
- `libcairo2` is required at runtime for CairoSVG PNG export.
