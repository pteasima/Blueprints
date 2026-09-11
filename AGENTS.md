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

After a 3D export, still write `{model}_3d.usdz` and `{model}_3d.html` into `/opt/cursor/artifacts/` (and `docs/previews/` when the mesh should live in git). To let the user actually open the mesh, give a real `https://…` URL that returns the file (or a PNG QR of that URL). Do not attach STEP unless the user asks.

USDZ is a zip **container** — Quick Look opens the `.usdz` file itself. Never unzip it (that yields `mimetype` + `model.usda` and iOS will not preview the folder). If Safari saves it as `.zip`, rename back to `.usdz` without extracting. The HTML viewer must actually execute in Safari (a Filebin download page or a blank canvas is not a working viewer).

If PNG export fails, fix that before considering the task done.

## Tests

```bash
source .venv/bin/activate
python -m pytest
```

## Cursor Cloud specific instructions

- `install` must finish with a working `.venv` that can `import build123d` and `import cairosvg` (PNG).
- Do not assume `python3 -m venv` works on the base image; install `python3.12-venv` first (`scripts/cloud-agent-install.sh`).
- `libcairo2` is required at runtime for CairoSVG PNG export.
