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

Exports land in `exports/<model>/` (`model.png`, plus STEP/STL/USDZ/SVG/DXF). **PNG is required** in the reply (HTML `<img>`). The chat UI on iOS **and** web only *displays* PNG/video — USDZ copied to artifacts will not appear as a tile. After every 3D export, also write `{model}_3d.usdz` and `{model}_3d.html` into `/opt/cursor/artifacts/` and put tap-able links in the reply:

```html
<a href="/opt/cursor/artifacts/obyvak_3d.html">Otevřít 3D</a>
<a href="/opt/cursor/artifacts/obyvak_3d.usdz">Stáhnout USDZ</a>
```

Those `/opt/cursor/artifacts/…` hrefs are rewritten to public download URLs the same way PNG `src` is. Do not attach STEP unless the user asks.

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
