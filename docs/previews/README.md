# 3D previews (iOS / Safari)

Tracked Quick Look files live here (`*.usdz`, `*.html`).

## Why a git link does not open AR

This repo is on Origin (`origin.cursor.com/git/pteasima/Blueprints`), not public GitHub. A blob/tree page is HTML. Cursor chat only rewrites `<img>` / `<video>` `src`, so an `<a href>` to `/opt/cursor/artifacts/…usdz` 404s on cursor.com.

Safari launches AR Quick Look from the **web** only when the response is HTTPS with `Content-Type: model/vnd.usdz+zip`. Then a **bare `.usdz` URL is enough** — no HTML wrapper. Git raw, Filebin, and most CDNs send `application/zip` or `text/html`, so iOS saves a `.zip`.

## What to open instead

1. **Self-contained HTML** (`obyvak_3d.html`) — WebGL orbit plus `<a rel="ar" href="data:model/vnd.usdz+zip;base64,…">`. On iPhone/iPad Safari, **Otevřít v AR** jumps into Quick Look without a second file. AirDrop this one file, or open it from Files. No Siri shortcut.
2. **Hosted USDZ** — if you later put this folder on GitHub Pages (or any static host) with `AddType model/vnd.usdz+zip .usdz`, bookmark `index.html` or the `.usdz` itself. This Origin repo has no public Pages URL today.

Never unzip a `.usdz`. If a host renamed it to `.zip`, rename back without extracting.
