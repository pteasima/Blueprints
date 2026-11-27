"""Self-contained offline HTML viewer export."""

from __future__ import annotations

import base64
import json
import shutil
from pathlib import Path


_VIEWER_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/>
<title>Blueprints viewer</title>
<style>
  html, body { margin: 0; height: 100%; overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    background: #1c1c1e; color: #f5f5f7; }
  canvas { display: block; width: 100%; height: 100%; touch-action: none;
    -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
  #err { display: none; }
</style>
</head>
<body>
<nav id="top-chrome" class="top-chrome" aria-label="Viewer">
  <div class="top-chrome-start">
    <button type="button" id="ar" class="chrome-btn" hidden>AR</button>
    <button type="button" id="labels" class="chrome-btn" hidden aria-pressed="true">Labels</button>
    <button type="button" id="drawing" class="chrome-btn" hidden disabled>Drawing</button>
  </div>
  <div class="top-chrome-end">
    <button type="button" id="sheet-toggle" class="chrome-btn sheet-toggle" aria-expanded="true" aria-label="Hide controls" title="Hide controls">›</button>
  </div>
</nav>
<aside id="sheet" class="sheet" data-detent="peek">
  <button type="button" class="sheet-handle" id="sheet-handle" aria-label="Drag controls sheet"></button>
  <div class="sheet-scroll" id="sheet-scroll">
    <section class="sheet-section" id="section-view">
      <h2 class="sheet-title" data-i18n="ui.view">View</h2>
      <div id="cams" class="seg"></div>
      <div id="scenes" class="scene-list" hidden></div>
      <div id="fov" class="fov"></div>
    </section>
    <section class="sheet-section" id="section-cuts">
      <h2 class="sheet-title" data-i18n="ui.sections">Cuts</h2>
      <div id="cuts" class="cuts"></div>
    </section>
    <section class="sheet-section" id="section-parts">
      <h2 class="sheet-title" data-i18n="ui.parts">Parts</h2>
      <div id="parts" class="parts"></div>
    </section>
    <section class="sheet-section" id="section-materials">
      <h2 class="sheet-title" data-i18n="ui.materials">Materials</h2>
      <div id="mats" class="seg" role="group" aria-label="Materials" data-i18n-aria="ui.materials"></div>
      <div class="edges-block">
        <span class="edges-label" data-i18n="ui.edges">Edges</span>
        <div id="edges" class="seg" role="group" aria-label="Edges" data-i18n-aria="ui.edges"></div>
      </div>
    </section>
    <section class="sheet-section" id="section-locale">
      <h2 class="sheet-title" data-i18n="ui.language">Language</h2>
      <div id="locale" class="seg" role="group" aria-label="Language" data-i18n-aria="ui.language"></div>
    </section>
  </div>
</aside>
<pre id="err"></pre>
<canvas id="c"></canvas>
<script>
%%VIEWER_JS%%
</script>
<script>
(function () {
  function b64ToBuf(s) {
    const bin = atob(s);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8.buffer;
  }
  const canvas = document.getElementById('c');
  const glb = b64ToBuf("%%GLB_B64%%");
  let scenes = [];
  try {
    scenes = JSON.parse("%%SCENES_JSON%%");
    if (!Array.isArray(scenes)) scenes = [];
  } catch (e) {
    scenes = [];
  }
  let partGroups = [];
  try {
    partGroups = JSON.parse("%%PARTS_JSON%%");
    if (!Array.isArray(partGroups)) partGroups = [];
  } catch (e) {
    partGroups = [];
  }
  let ifcIndex = null;
  try {
    ifcIndex = JSON.parse("%%IFC_JSON%%");
    if (!ifcIndex || typeof ifcIndex !== "object") ifcIndex = null;
  } catch (e) {
    ifcIndex = null;
  }
  BlueprintsViewerBundle.mountViewer(canvas, glb, { scenes: scenes, partGroups: partGroups, ifc: ifcIndex });
})();
</script>
</body>
</html>
"""


def _viewer_iife() -> str:
    """The viewer as one classic script, for the self-contained HTML export.

    Built by ``npm run build`` (viewer/build.mjs), not committed. A missing
    bundle is built here once when npm is available.
    """
    from blueprints.export_utils import VIEWER_DIR, VIEWER_IIFE_PATH

    if not VIEWER_IIFE_PATH.is_file() and shutil.which("npm"):
        import subprocess

        if not (VIEWER_DIR / "node_modules").is_dir():
            subprocess.run(["npm", "ci", "--no-audit", "--no-fund"], cwd=VIEWER_DIR, check=True)
        subprocess.run(["npm", "run", "build"], cwd=VIEWER_DIR, check=True)
    if not VIEWER_IIFE_PATH.is_file():
        raise FileNotFoundError(
            f"Missing {VIEWER_IIFE_PATH}; run: npm --prefix src/blueprints/viewer ci && "
            "npm --prefix src/blueprints/viewer run build"
        )
    return VIEWER_IIFE_PATH.read_text(encoding="utf-8")


def write_gltf_html_viewer(
    glb_path: Path,
    html_path: Path,
    *,
    scenes: list | None = None,
    part_groups: list | None = None,
    ifc_index: dict | None = None,
) -> Path:
    """Self-contained offline HTML viewer (bundled Three.js + embedded GLB)."""
    glb_b64 = base64.b64encode(glb_path.read_bytes()).decode("ascii")
    scenes_json = json.dumps(scenes if scenes is not None else [])
    # Escape for embedding inside a double-quoted JS string literal.
    scenes_js = (
        scenes_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    )
    parts_json = json.dumps(part_groups if part_groups is not None else [])
    parts_js = (
        parts_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    )
    ifc_json = json.dumps(ifc_index if ifc_index is not None else None)
    ifc_js = ifc_json.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    html = (
        _VIEWER_HTML.replace("%%VIEWER_JS%%", _viewer_iife())
        .replace("%%GLB_B64%%", glb_b64)
        .replace("%%SCENES_JSON%%", scenes_js)
        .replace("%%PARTS_JSON%%", parts_js)
        .replace("%%IFC_JSON%%", ifc_js)
    )
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html, encoding="utf-8")
    return html_path
