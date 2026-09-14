"""GitHub Pages Quick Look hub (no CAD dependencies — safe for CI)."""

from __future__ import annotations

import base64
import json
import os
import shutil
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PREVIEW_SITE_DIR = REPO_ROOT / "docs"
DEFAULT_PAGES_URL = "https://pteasima.github.io/Blueprints/"

_PIXEL_GIF = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

_HUB_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Blueprints</title>
<style>
  html, body {
    margin: 0;
    min-height: 100%;
    background: #111;
    color: #eee;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 24px;
    text-align: center;
    box-sizing: border-box;
  }
  h1 { margin: 0; font-size: 1.5rem; font-weight: 600; }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    width: min(20rem, 100%);
  }
  .model {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .model .name {
    font-size: 0.95rem;
    opacity: 0.75;
    text-align: left;
  }
  a.ql, a.web {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.25rem;
    padding: 0 1.25rem;
    border-radius: 12px;
    background: #f2f2f2;
    color: #111;
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 600;
  }
  a.web {
    background: transparent;
    color: #eee;
    border: 1px solid #666;
  }
  a.ql img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  a.ql span, a.web span { pointer-events: none; }
</style>
</head>
<body>
<main>
  <h1>Blueprints</h1>
  <div class="buttons">
%%BUTTONS%%
  </div>
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
    entries.append({"id": model_id, "label": label or "Quick Look"})
    return entries


def _ql_button_html(label: str, usdz_b64: str) -> str:
    return (
        f'    <a class="ql" rel="ar" href="data:model/vnd.usdz+zip;base64,{usdz_b64}">\n'
        f'      <img alt="" width="1" height="1" '
        f'src="data:image/gif;base64,{_PIXEL_GIF}"/>\n'
        f"      <span>{label}</span>\n"
        f"    </a>"
    )


def _web_button_html(model_id: str) -> str:
    href = f"viewer/?m={model_id}"
    return (
        f'    <a class="web" href="{href}">\n'
        f"      <span>Web 3D</span>\n"
        f"    </a>"
    )


def _model_block_html(model_id: str, label: str, usdz_b64: str | None, *, has_glb: bool) -> str:
    bits = [f'  <div class="model">', f'    <div class="name">{model_id}</div>']
    if usdz_b64:
        bits.append(_ql_button_html(label, usdz_b64))
    if has_glb:
        bits.append(_web_button_html(model_id))
    bits.append("  </div>")
    return "\n".join(bits)


def write_preview_hub(entries: list[dict[str, str]] | None = None) -> Path:
    """Regenerate docs/index.html from docs/models/manifest.json + assets.

    The hub is generated at deploy time (and locally for smoke tests). It is
    gitignored — do not commit the fat base64 HTML. WebGL lives under docs/viewer/.
    """
    if entries is None:
        entries = load_manifest()
    buttons: list[str] = []
    models = models_dir()
    for entry in entries:
        model_id = entry["id"]
        label = entry.get("label") or "Quick Look"
        usdz_path = models / f"{model_id}.usdz"
        glb_path = models / f"{model_id}.glb"
        has_usdz = usdz_path.is_file()
        has_glb = glb_path.is_file()
        if not has_usdz and not has_glb:
            continue
        usdz_b64 = (
            base64.b64encode(usdz_path.read_bytes()).decode("ascii") if has_usdz else None
        )
        buttons.append(
            _model_block_html(model_id, label, usdz_b64, has_glb=has_glb)
        )
    html = _HUB_HTML.replace("%%BUTTONS%%", "\n".join(buttons) if buttons else "")
    PREVIEW_SITE_DIR.mkdir(parents=True, exist_ok=True)
    (PREVIEW_SITE_DIR / ".nojekyll").write_text("", encoding="utf-8")
    index_path = PREVIEW_SITE_DIR / "index.html"
    index_path.write_text(html, encoding="utf-8")
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
    """Keep docs/viewer/ in sync with the packaged Three.js IIFE."""
    viewer_dir = PREVIEW_SITE_DIR / "viewer"
    viewer_dir.mkdir(parents=True, exist_ok=True)
    src_iife = REPO_ROOT / "src" / "blueprints" / "viewer" / "viewer.iife.js"
    dst_iife = viewer_dir / "viewer.iife.js"
    if src_iife.is_file():
        shutil.copy2(src_iife, dst_iife)
    index = viewer_dir / "index.html"
    # index.html is authored in-repo under docs/viewer/; do not overwrite here.


def publish_to_preview_site(
    model_name: str,
    usdz_path: Path,
    *,
    glb_path: Path | None = None,
    label: str | None = None,
) -> Path | None:
    """Copy USDZ/GLB into docs/models, sync viewer shell, rebuild local hub.

    Commits should include USDZ/GLB (Git LFS), manifest, and docs/viewer/.
    `index.html` is regenerated by the pages workflow on push.
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
    ensure_viewer_shell()
    entries = upsert_manifest(model_name, label=label)
    save_manifest(entries)
    index_path = write_preview_hub(entries)
    print(f"preview_url: {pages_url()}")
    print(f"viewer_url: {pages_url()}viewer/?m={model_name}")
    return index_path
