"""GitHub Pages web-viewer hub (no CAD dependencies — safe for CI)."""

from __future__ import annotations

import html
import json
import os
import shutil
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PREVIEW_SITE_DIR = REPO_ROOT / "docs"
DEFAULT_PAGES_URL = "https://pteasima.github.io/Blueprints/"

_HUB_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>Blueprints</title>
<style>
  /* Solid colours only. Backdrop filters, fixed backgrounds, layered
     gradients, and large shadows blank this page on iPadOS when Safari's
     GPU Process DOM Rendering is off. */
  :root {
    color-scheme: light dark;
    --bg: #f4f1ec;
    --fg: #1c1c1e;
    --muted: #5c5c60;
    --card: #ffffff;
    --line: #d2d2d7;
    --chevron: #6e6e73;
    --safe-t: env(safe-area-inset-top, 0px);
    --safe-b: env(safe-area-inset-bottom, 0px);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1c1c1e;
      --fg: #f5f5f7;
      --muted: #a1a1a6;
      --card: #2c2c2e;
      --line: #3a3a3c;
      --chevron: #a1a1a6;
    }
  }
  html, body {
    margin: 0;
    min-height: 100%;
    color: var(--fg);
    background: var(--bg);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  main {
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 1.5rem;
    width: min(26rem, 100%);
    margin: 0 auto;
    padding: calc(2rem + var(--safe-t)) 1.25rem calc(2.5rem + var(--safe-b));
  }
  .brand {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }
  .tagline {
    margin: 0;
    font-size: 1rem;
    color: var(--muted);
  }
  .models {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--card);
    overflow: hidden;
  }
  a.web {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-height: 3.25rem;
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--line);
    color: var(--fg);
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 600;
  }
  a.web:last-child { border-bottom: 0; }
  a.web .chevron {
    color: var(--chevron);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1;
  }
  .empty {
    margin: 0;
    padding: 1rem;
    text-align: center;
    color: var(--muted);
    font-size: 0.95rem;
  }
</style>
</head>
<body>
<main>
  <header class="brand">
    <h1>Blueprints</h1>
    <p class="tagline">3D models in the browser</p>
  </header>
  <div class="models">
%%BUTTONS%%
  </div>
%%PLANS%%
</main>
</body>
</html>
"""


def pages_url() -> str:
    return os.environ.get("BLUEPRINTS_PAGES_URL", DEFAULT_PAGES_URL).rstrip("/") + "/"


def preview_site_dir() -> Path:
    return PREVIEW_SITE_DIR


def models_dir() -> Path:
    return PREVIEW_SITE_DIR / "models"


def manifest_path() -> Path:
    return models_dir() / "manifest.json"


def load_manifest() -> list[dict[str, str]]:
    path = manifest_path()
    if not path.is_file():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError(f"Preview manifest must be a list: {path}")
    return data


def save_manifest(entries: list[dict[str, str]]) -> None:
    path = manifest_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(entries, indent=2) + "\n", encoding="utf-8")


def upsert_manifest(model_id: str, *, label: str | None = None) -> list[dict[str, str]]:
    entries = load_manifest()
    for entry in entries:
        if entry.get("id") == model_id:
            if label is not None:
                entry["label"] = label
            return entries
    entries.append({"id": model_id, "label": label or model_id})
    return entries


def _web_button_html(model_id: str, label: str) -> str:
    href = f"viewer/?m={html.escape(model_id, quote=True)}"
    safe_label = html.escape(label)
    return (
        f'    <a class="web" href="{href}">\n'
        f"      <span>{safe_label}</span>\n"
        f'      <span class="chevron" aria-hidden="true">›</span>\n'
        f"    </a>"
    )


def write_preview_hub(entries: list[dict[str, str]] | None = None) -> Path:
    """Regenerate docs/index.html from docs/models/manifest.json + GLB assets.

    The hub is generated at deploy time (and locally for smoke tests). It is
    gitignored. WebGL lives under docs/viewer/.
    """
    if entries is None:
        entries = load_manifest()
    buttons: list[str] = []
    models = models_dir()
    for entry in entries:
        model_id = entry["id"]
        label = entry.get("label") or model_id
        glb_path = models / f"{model_id}.glb"
        if not glb_path.is_file():
            continue
        buttons.append(_web_button_html(model_id, label))
    body = "\n".join(buttons) if buttons else '    <p class="empty">No models yet</p>'
    plans = ""
    if (PREVIEW_SITE_DIR / "electrical" / "1.11.html").is_file():
        plans = (
            '  <div class="models">\n'
            '    <a class="web" href="electrical/1.11.html">\n'
            "      <span>1.11 Ložnice — půdorys</span>\n"
            '      <span class="chevron" aria-hidden="true">›</span>\n'
            "    </a>\n"
            "  </div>"
        )
    page = _HUB_HTML.replace("%%BUTTONS%%", body).replace("%%PLANS%%", plans)
    PREVIEW_SITE_DIR.mkdir(parents=True, exist_ok=True)
    (PREVIEW_SITE_DIR / ".nojekyll").write_text("", encoding="utf-8")
    index_path = PREVIEW_SITE_DIR / "index.html"
    index_path.write_text(page, encoding="utf-8")
    return index_path


def preview_site_enabled() -> bool:
    if os.environ.get("BLUEPRINTS_SKIP_PREVIEW_SITE") == "1":
        return False
    if "PYTEST_CURRENT_TEST" in os.environ and os.environ.get(
        "BLUEPRINTS_ALLOW_PREVIEW_SITE"
    ) != "1":
        return False
    return True


def ensure_viewer_shell() -> None:
    """Keep docs/viewer/ in sync with the packaged Three.js IIFE.

    Also stamps a content-hash query on the script src in index.html so Safari
    / CDN caches cannot serve a stale IIFE after a chrome CSS/JS change.
    """
    import hashlib
    import re

    viewer_dir = PREVIEW_SITE_DIR / "viewer"
    viewer_dir.mkdir(parents=True, exist_ok=True)
    src_iife = REPO_ROOT / "src" / "blueprints" / "viewer" / "viewer.iife.js"
    dst_iife = viewer_dir / "viewer.iife.js"
    if src_iife.is_file():
        shutil.copy2(src_iife, dst_iife)
    iife_path = dst_iife if dst_iife.is_file() else src_iife
    if not iife_path.is_file():
        return
    digest = hashlib.sha256(iife_path.read_bytes()).hexdigest()[:10]
    index = viewer_dir / "index.html"
    if not index.is_file():
        return
    html = index.read_text(encoding="utf-8")
    updated, n = re.subn(
        r'(src=["\'])viewer\.iife\.js(?:\?[^"\']*)?(["\'])',
        rf"\1viewer.iife.js?v={digest}\2",
        html,
        count=1,
    )
    if n and updated != html:
        index.write_text(updated, encoding="utf-8")


def publish_to_preview_site(
    model_name: str,
    usdz_path: Path,
    *,
    glb_path: Path | None = None,
    label: str | None = None,
    scenes: list | None = None,
    part_groups: list | None = None,
    ifc_index: dict | None = None,
) -> Path | None:
    """Copy USDZ/GLB into docs/models, sync viewer shell, rebuild local hub.

    Commits should include USDZ/GLB (Git LFS), manifest, and docs/viewer/.
    `index.html` is regenerated by the pages workflow on push.
    When `scenes` is not None, also writes `docs/models/<id>.scenes.json`.
    When `part_groups` is not None, also writes `docs/models/<id>.parts.json`.
    When `ifc_index` is not None, also writes `docs/models/<id>.ifc.json`.
    """
    if not preview_site_enabled():
        return None
    if not usdz_path.is_file() and not (glb_path is not None and glb_path.is_file()):
        return None
    models = models_dir()
    models.mkdir(parents=True, exist_ok=True)
    if usdz_path.is_file():
        shutil.copy2(usdz_path, models / f"{model_name}.usdz")
    if glb_path is not None and glb_path.is_file():
        shutil.copy2(glb_path, models / f"{model_name}.glb")
    if scenes is not None:
        from blueprints.scenes import write_scenes_json

        write_scenes_json(model_name, scenes, models / f"{model_name}.scenes.json")
    if part_groups is not None:
        from blueprints.scenes import write_parts_json

        write_parts_json(model_name, part_groups, models / f"{model_name}.parts.json")
    if ifc_index is not None:
        dest = models / f"{model_name}.ifc.json"
        dest.write_text(
            json.dumps(ifc_index, ensure_ascii=False, separators=(",", ":")),
            encoding="utf-8",
        )
    ensure_viewer_shell()
    entries = upsert_manifest(model_name, label=label)
    save_manifest(entries)
    index_path = write_preview_hub(entries)
    print(f"preview_url: {pages_url()}")
    print(f"viewer_url: {pages_url()}viewer/?m={model_name}")
    return index_path
