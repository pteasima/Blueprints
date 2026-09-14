# 3D previews (iOS / Safari)

Tracked Quick Look files live here (`*.usdz`, `*.html`).

## Open from Cursor chat

Chat cannot open `/opt/cursor/artifacts/…usdz` (only `<img>`/`<video>` `src` are rewritten). This private repo has no public raw/Pages URL.

After `python -m blueprints.export`, the CLI uploads `*_ar.html` (no-JS Safari AR launcher) and prints `preview_url: https://…`. Agents must paste that URL and the QR PNG in chat. Tap → Safari → **Otevřít v AR**.

## Files

- `*_3d.usdz` — ARKit USDZ crate (also for AirDrop / Files)
- `*_3d.html` — WebGL orbit + AR button (local / AirDrop)
- `*_ar.html` — minimal no-JS AR launcher (what gets hosted for chat links)

Never unzip a `.usdz`. A Siri Shortcut does not help with Cursor artifact paths.
