"""Shared export helpers for build123d models."""

from __future__ import annotations

import base64
import json
import os
import shutil
import struct
import tempfile
from pathlib import Path
from typing import Any

from build123d import (
    Axis,
    ColorIndex,
    Compound,
    ExportDXF,
    ExportSVG,
    LineType,
    Shape,
    Vector,
    export_step,
    export_stl,
)


REPO_ROOT = Path(__file__).resolve().parents[2]
EXPORTS_DIR = REPO_ROOT / "exports"
# GitHub Pages site root (Settings → Pages → Deploy from branch, folder /docs).
PREVIEW_SITE_DIR = REPO_ROOT / "docs"
DEFAULT_PAGES_URL = "https://pteasima.github.io/Blueprints/"
PREVIEW_LINE_WEIGHT = 1.0

# Drawing-unit stroke widths so a ~6 m section still reads at ~1800 px PNG.
SECTION_LINE_WEIGHT = 12.0
SECTION_HEAVY_WEIGHT = 22.0
SECTION_PNG_WIDTH = 1800

# SVG fill/line colours (0–255 RGB) keyed by Face/Wire.label from the section model.
SECTION_LAYERS: dict[str, dict[str, Any]] = {
    "podlaha": {
        "fill": (200, 194, 180),
        "line": (85, 85, 85),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "eps": {
        "fill": (217, 232, 200),
        "line": (90, 122, 58),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "zdivo": {
        "fill": (207, 200, 188),
        "line": (85, 85, 85),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "omitka": {
        "fill": (232, 228, 220),
        "line": (136, 136, 136),
        "dxf": ColorIndex.LIGHT_GRAY,
        "weight": SECTION_LINE_WEIGHT,
    },
    "nabytek": {
        "fill": (232, 213, 163),
        "line": (138, 106, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "pozednice": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "koruna": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "predstena": {
        "fill": (200, 232, 240),
        "line": (26, 122, 154),
        "dxf": ColorIndex.CYAN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "pouzdro": {
        "fill": (232, 224, 208),
        "line": (102, 102, 102),
        "dxf": ColorIndex.GRAY,
        "weight": SECTION_LINE_WEIGHT,
        "dashed": True,
    },
    "krov": {
        "fill": (196, 165, 116),
        "line": (107, 79, 42),
        "dxf": ColorIndex.YELLOW,
        "weight": SECTION_LINE_WEIGHT,
    },
    "vata": {
        "fill": (217, 232, 200),
        "line": (90, 122, 58),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "soffit": {
        "fill": (122, 171, 69),
        "line": (61, 107, 30),
        "dxf": ColorIndex.GREEN,
        "weight": SECTION_LINE_WEIGHT,
    },
    "podhled": {
        "fill": None,
        "line": (26, 95, 138),
        "dxf": ColorIndex.BLUE,
        "weight": SECTION_HEAVY_WEIGHT,
    },
    "krytina": {
        "fill": None,
        "line": (139, 46, 26),
        "dxf": ColorIndex.RED,
        "weight": SECTION_HEAVY_WEIGHT,
    },
}

SECTION_LAYER_ORDER = [
    "podlaha",
    "eps",
    "zdivo",
    "omitka",
    "vata",
    "nabytek",
    "pouzdro",
    "pozednice",
    "koruna",
    "krov",
    "soffit",
    "predstena",
    "podhled",
    "krytina",
]


def ensure_export_dir(model_name: str) -> Path:
    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def _shape_span(shape: Shape | Compound) -> float:
    size = shape.bounding_box().size
    return max(size.X, size.Y, size.Z)


def _preview_line_weight(shape: Shape | Compound) -> float:
    """1 mm strokes vanish on an 11 m isometric; use section weights for large models."""
    if _shape_span(shape) > 2000:
        return SECTION_LINE_WEIGHT
    return PREVIEW_LINE_WEIGHT


def _preview_png_width(shape: Shape | Compound) -> int:
    if _shape_span(shape) > 2000:
        return SECTION_PNG_WIDTH
    return 1400


def _stl_tolerance(shape: Shape | Compound) -> float:
    if _shape_span(shape) > 2000:
        return 2.0
    return 1e-3


def _viewport_edges(shape: Shape | Compound):
    """Isometric-ish visible edges; camera sits outside the bbox (orthographic)."""
    bb = shape.bounding_box()
    center = bb.center()
    direction = Vector(-1.2, -1.5, 1.0).normalized()
    origin = center + direction * (bb.diagonal * 1.5)
    visible, _hidden = shape.project_to_viewport(origin, look_at=center)
    return visible


def _write_svg(edges, path: Path, *, line_weight: float = PREVIEW_LINE_WEIGHT) -> None:
    exporter = ExportSVG(scale=1.0, line_weight=line_weight)
    exporter.add_layer("visible", line_weight=line_weight)
    exporter.add_shape(edges, layer="visible")
    exporter.write(path)


def _write_dxf(edges, path: Path) -> None:
    exporter = ExportDXF()
    exporter.add_layer("visible")
    exporter.add_shape(edges, layer="visible")
    exporter.write(path)


def _write_png(svg_path: Path, png_path: Path, *, width: int = 1400) -> None:
    try:
        import cairosvg
    except ImportError as exc:  # pragma: no cover
        raise ImportError("PNG export requires cairosvg; pip install cairosvg") from exc
    cairosvg.svg2png(
        url=str(svg_path),
        write_to=str(png_path),
        output_width=width,
        background_color="white",
    )


def export_shape(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("step", "stl", "svg", "dxf", "png"),
) -> dict[str, Path]:
    """Export a build123d shape to common formats under exports/<model_name>/."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}
    edges = None
    line_weight = _preview_line_weight(shape)
    png_width = _preview_png_width(shape)

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path, tolerance=_stl_tolerance(shape))
        elif fmt in {"svg", "dxf", "png"}:
            if edges is None:
                edges = _viewport_edges(shape)
            if fmt == "svg":
                _write_svg(edges, path, line_weight=line_weight)
            elif fmt == "dxf":
                _write_dxf(edges, path)
            else:
                svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
                if "svg" not in written:
                    _write_svg(edges, svg_path, line_weight=line_weight)
                    written["svg"] = svg_path
                _write_png(svg_path, path, width=png_width)
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

    _maybe_write_usdz(written, model_name)
    publish_to_artifacts(model_name, written)
    return written


def _section_children(shape: Shape | Compound) -> list[Shape]:
    children = getattr(shape, "children", None)
    if children:
        return list(children)
    return [shape]


def _section_to_xy(shape: Shape) -> Shape:
    """Map XZ section (Y=0, Z up) onto the XY plane used by SVG/DXF exporters."""
    return shape.rotate(Axis.X, -90)


def export_section(
    shape: Shape | Compound,
    model_name: str,
    *,
    stem: str = "model",
    formats: tuple[str, ...] = ("svg", "dxf", "png"),
) -> dict[str, Path]:
    """Orthographic XZ section: 1:1 mm DXF, layered SVG, PNG preview."""
    out_dir = ensure_export_dir(model_name)
    written: dict[str, Path] = {}
    grouped: dict[str, list[Shape]] = {}
    for child in _section_children(shape):
        name = child.label or "visible"
        grouped.setdefault(name, []).append(_section_to_xy(child))

    layer_names = [n for n in SECTION_LAYER_ORDER if n in grouped]
    layer_names.extend(n for n in grouped if n not in layer_names)

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "svg":
            exporter = ExportSVG(scale=1.0, margin=80)
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                svg_kwargs: dict[str, Any] = dict(
                    fill_color=style.get("fill"),
                    line_color=style.get("line", (0, 0, 0)),
                    line_weight=style.get("weight", SECTION_LINE_WEIGHT),
                )
                if style.get("dashed"):
                    svg_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **svg_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "dxf":
            exporter = ExportDXF()
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                dxf_kwargs: dict[str, Any] = dict(
                    color=style.get("dxf", ColorIndex.BLACK),
                    line_weight=0.35,
                )
                if style.get("dashed"):
                    dxf_kwargs["line_type"] = LineType.DASHED
                exporter.add_layer(name, **dxf_kwargs)
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "png":
            svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
            if "svg" not in written:
                svg_paths = export_section(shape, model_name, stem=stem, formats=("svg",))
                svg_path = svg_paths["svg"]
                written["svg"] = svg_path
            _write_png(svg_path, path, width=SECTION_PNG_WIDTH)
        else:
            raise ValueError(f"Unsupported section export format: {fmt}")
        written[fmt] = path

    publish_to_artifacts(model_name, written)
    return written


def artifacts_dir() -> Path | None:
    """Cloud Agent artifact folder. Chat renders PNG/video tiles only; hrefs are not rewritten."""
    override = os.environ.get("BLUEPRINTS_ARTIFACTS_DIR")
    if override:
        path = Path(override)
        path.mkdir(parents=True, exist_ok=True)
        return path
    # pytest must not sprinkle CAD files into the live chat folder
    if "PYTEST_CURRENT_TEST" in os.environ:
        return None
    path = Path("/opt/cursor/artifacts")
    return path if path.is_dir() else None


_CHAT_FORMATS = frozenset({".png", ".usdz"})


def _artifact_name(model_name: str, path: Path) -> str:
    suffix = path.suffix.lower()
    if path.stem == "model" and suffix in {".step", ".stp", ".stl", ".usdz"}:
        return f"{model_name}_3d{suffix}"
    return f"{model_name}_{path.name}"


def publish_to_artifacts(model_name: str, paths: dict[str, Path]) -> dict[str, Path]:
    """Copy PNG/USDZ into the run artifact folder.

    Chat still only displays PNG/video. Do not emit `<a href="/opt/cursor/artifacts/…">`;
    those paths 404 on cursor.com. Paste the GitHub Pages URL from export instead.
    """
    dest_root = artifacts_dir()
    if dest_root is None:
        return {}
    published: dict[str, Path] = {}
    for key, path in paths.items():
        if not path.is_file():
            continue
        suffix = path.suffix.lower()
        if suffix not in _CHAT_FORMATS:
            continue
        dest = dest_root / _artifact_name(model_name, path)
        shutil.copy2(path, dest)
        published[key] = dest
    return published


def pages_url() -> str:
    return os.environ.get("BLUEPRINTS_PAGES_URL", DEFAULT_PAGES_URL).rstrip("/") + "/"


def _preview_site_enabled() -> bool:
    if os.environ.get("BLUEPRINTS_SKIP_PREVIEW_SITE") == "1":
        return False
    # pytest must not rewrite the real GitHub Pages hub unless explicitly allowed
    if "PYTEST_CURRENT_TEST" in os.environ and os.environ.get(
        "BLUEPRINTS_ALLOW_PREVIEW_SITE"
    ) != "1":
        return False
    return True


def _models_dir() -> Path:
    return PREVIEW_SITE_DIR / "models"


def _manifest_path() -> Path:
    return _models_dir() / "manifest.json"


def _load_manifest() -> list[dict[str, str]]:
    path = _manifest_path()
    if not path.is_file():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError(f"Preview manifest must be a list: {path}")
    return data


def _save_manifest(entries: list[dict[str, str]]) -> None:
    path = _manifest_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(entries, indent=2) + "\n", encoding="utf-8")


def _upsert_manifest(model_id: str, *, label: str | None = None) -> list[dict[str, str]]:
    entries = _load_manifest()
    for entry in entries:
        if entry.get("id") == model_id:
            if label is not None:
                entry["label"] = label
            return entries
    entries.append({"id": model_id, "label": label or "Quick Look"})
    return entries


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
  a.ql {
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
  a.ql img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  a.ql span { pointer-events: none; }
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


def _ql_button_html(label: str, usdz_b64: str) -> str:
    return (
        f'    <a class="ql" rel="ar" href="data:model/vnd.usdz+zip;base64,{usdz_b64}">\n'
        f'      <img alt="" width="1" height="1" '
        f'src="data:image/gif;base64,{_PIXEL_GIF}"/>\n'
        f"      <span>{label}</span>\n"
        f"    </a>"
    )


def write_preview_hub(entries: list[dict[str, str]] | None = None) -> Path:
    """Regenerate docs/index.html from docs/models/manifest.json + *.usdz."""
    if entries is None:
        entries = _load_manifest()
    buttons: list[str] = []
    models = _models_dir()
    for entry in entries:
        model_id = entry["id"]
        label = entry.get("label") or "Quick Look"
        usdz_path = models / f"{model_id}.usdz"
        if not usdz_path.is_file():
            continue
        usdz_b64 = base64.b64encode(usdz_path.read_bytes()).decode("ascii")
        buttons.append(_ql_button_html(label, usdz_b64))
    html = _HUB_HTML.replace("%%BUTTONS%%", "\n".join(buttons) if buttons else "")
    PREVIEW_SITE_DIR.mkdir(parents=True, exist_ok=True)
    (PREVIEW_SITE_DIR / ".nojekyll").write_text("", encoding="utf-8")
    index_path = PREVIEW_SITE_DIR / "index.html"
    index_path.write_text(html, encoding="utf-8")
    return index_path


def publish_to_preview_site(
    model_name: str,
    usdz_path: Path,
    *,
    label: str | None = None,
) -> Path | None:
    """Copy USDZ into docs/models and regenerate the GitHub Pages hub.

    Returns the hub index path, or None when site updates are disabled.
    """
    if not _preview_site_enabled():
        return None
    if not usdz_path.is_file():
        return None
    models = _models_dir()
    models.mkdir(parents=True, exist_ok=True)
    dest = models / f"{model_name}.usdz"
    shutil.copy2(usdz_path, dest)
    entries = _upsert_manifest(model_name, label=label)
    _save_manifest(entries)
    index_path = write_preview_hub(entries)
    print(f"preview_url: {pages_url()}")
    return index_path


def _read_binary_stl(path: Path) -> tuple[list[tuple[float, float, float]], list[tuple[int, int, int]]]:
    data = path.read_bytes()
    if len(data) < 84:
        raise ValueError(f"STL too small: {path}")
    count = struct.unpack_from("<I", data, 80)[0]
    points: list[tuple[float, float, float]] = []
    faces: list[tuple[int, int, int]] = []
    offset = 84
    for _ in range(count):
        verts = struct.unpack_from("<9f", data, offset + 12)
        i = len(points)
        points.append((verts[0], verts[1], verts[2]))
        points.append((verts[3], verts[4], verts[5]))
        points.append((verts[6], verts[7], verts[8]))
        faces.append((i, i + 1, i + 2))
        offset += 50
    return points, faces


def _weld_mesh(
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
) -> tuple[list[tuple[float, float, float]], list[tuple[int, int, int]]]:
    key_to_i: dict[tuple[float, float, float], int] = {}
    welded: list[tuple[float, float, float]] = []
    new_faces: list[tuple[int, int, int]] = []
    for i, j, k in faces:
        tri: list[int] = []
        for idx in (i, j, k):
            key = (round(points[idx][0], 5), round(points[idx][1], 5), round(points[idx][2], 5))
            if key not in key_to_i:
                key_to_i[key] = len(welded)
                welded.append(points[idx])
            tri.append(key_to_i[key])
        new_faces.append((tri[0], tri[1], tri[2]))
    return welded, new_faces


# CAD is millimetres. RealityKit / AR Quick Look treat 1 unit as 1 metre and
# often ignore metersPerUnit, so USDZ is authored in metres. Object mode still
# auto-fits; AR needs a detected plane larger than the asset — an 11 m house
# never places indoors, so oversize models are scaled to a tabletop span.
_CAD_MM_TO_M = 0.001
_AR_REAL_SPAN_LIMIT_M = 2.0
_AR_TABLETOP_SPAN_M = 0.45


def _y_up(p: tuple[float, float, float]) -> tuple[float, float, float]:
    """CAD Z-up (mm) → Apple USDZ Y-up (still mm)."""
    x, y, z = p
    return (x, z, -y)


def _prepare_usdz_points(
    points: list[tuple[float, float, float]],
) -> list[tuple[float, float, float]]:
    """Y-up metres, grounded at Y=0, XZ-centred; tabletop-scale if too large for indoor AR."""
    meters = [
        (x * _CAD_MM_TO_M, y * _CAD_MM_TO_M, z * _CAD_MM_TO_M) for x, y, z in (_y_up(p) for p in points)
    ]
    xs = [p[0] for p in meters]
    ys = [p[1] for p in meters]
    zs = [p[2] for p in meters]
    cx = (min(xs) + max(xs)) / 2
    cz = (min(zs) + max(zs)) / 2
    min_y = min(ys)
    grounded = [(x - cx, y - min_y, z - cz) for x, y, z in meters]
    span = max(
        max(p[0] for p in grounded) - min(p[0] for p in grounded),
        max(p[1] for p in grounded) - min(p[1] for p in grounded),
        max(p[2] for p in grounded) - min(p[2] for p in grounded),
        1e-9,
    )
    if span > _AR_REAL_SPAN_LIMIT_M:
        scale = _AR_TABLETOP_SPAN_M / span
        grounded = [(x * scale, y * scale, z * scale) for x, y, z in grounded]
    return grounded


def _cross(
    a: tuple[float, float, float],
    b: tuple[float, float, float],
    c: tuple[float, float, float],
) -> tuple[float, float, float]:
    ux, uy, uz = b[0] - a[0], b[1] - a[1], b[2] - a[2]
    vx, vy, vz = c[0] - a[0], c[1] - a[1], c[2] - a[2]
    return (uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx)


def _normalize(n: tuple[float, float, float]) -> tuple[float, float, float]:
    x, y, z = n
    length = (x * x + y * y + z * z) ** 0.5
    if length < 1e-12:
        return (0.0, 1.0, 0.0)
    return (x / length, y / length, z / length)


def _write_arkit_usdz(
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
    usdz_path: Path,
) -> Path:
    """Package a mesh as a single-layer .usdc USDZ (what Apple Quick Look actually opens)."""
    from pxr import Gf, Kind, Sdf, Usd, UsdGeom, UsdShade, UsdUtils

    yup = _prepare_usdz_points(points)
    xs = [p[0] for p in yup]
    ys = [p[1] for p in yup]
    zs = [p[2] for p in yup]
    gf_points = [Gf.Vec3f(*p) for p in yup]
    counts = [3] * len(faces)
    indices: list[int] = []
    normals: list = []
    for i, j, k in faces:
        indices.extend((i, j, k))
        n = Gf.Vec3f(*_normalize(_cross(yup[i], yup[j], yup[k])))
        normals.extend((n, n, n))

    usdz_path = usdz_path.resolve()
    usdz_path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        usdc_path = Path(tmp) / "model.usdc"
        stage = Usd.Stage.CreateNew(str(usdc_path))
        UsdGeom.SetStageUpAxis(stage, UsdGeom.Tokens.y)
        UsdGeom.SetStageMetersPerUnit(stage, 1.0)
        root = UsdGeom.Xform.Define(stage, "/Model")
        stage.SetDefaultPrim(root.GetPrim())
        Usd.ModelAPI(root.GetPrim()).SetKind(Kind.Tokens.component)
        root_prim = root.GetPrim()
        try:
            root_prim.AddAppliedSchema("Preliminary_AnchoringAPI")
        except Exception:
            pass
        root_prim.CreateAttribute(
            "preliminary:anchoring:type",
            Sdf.ValueTypeNames.Token,
            False,
            Sdf.VariabilityUniform,
        ).Set("plane")
        root_prim.CreateAttribute(
            "preliminary:planeAnchoring:alignment",
            Sdf.ValueTypeNames.Token,
            False,
            Sdf.VariabilityUniform,
        ).Set("horizontal")
        mesh = UsdGeom.Mesh.Define(stage, "/Model/Geom")
        mesh.CreatePointsAttr(gf_points)
        mesh.CreateFaceVertexCountsAttr(counts)
        mesh.CreateFaceVertexIndicesAttr(indices)
        mesh.CreateNormalsAttr(normals)
        mesh.SetNormalsInterpolation(UsdGeom.Tokens.faceVarying)
        mesh.CreateSubdivisionSchemeAttr().Set(UsdGeom.Tokens.none)
        mesh.CreateDoubleSidedAttr(True)
        mesh.CreateExtentAttr(
            [Gf.Vec3f(min(xs), min(ys), min(zs)), Gf.Vec3f(max(xs), max(ys), max(zs))]
        )
        mesh.CreateDisplayColorAttr([Gf.Vec3f(0.82, 0.8, 0.76)])

        material = UsdShade.Material.Define(stage, "/Model/Looks/Material")
        shader = UsdShade.Shader.Define(stage, "/Model/Looks/Material/PreviewSurface")
        shader.CreateIdAttr("UsdPreviewSurface")
        shader.CreateInput("diffuseColor", Sdf.ValueTypeNames.Color3f).Set(
            Gf.Vec3f(0.82, 0.8, 0.76)
        )
        shader.CreateInput("roughness", Sdf.ValueTypeNames.Float).Set(0.6)
        shader.CreateInput("metallic", Sdf.ValueTypeNames.Float).Set(0.0)
        material.CreateSurfaceOutput().ConnectToSource(shader.ConnectableAPI(), "surface")
        UsdShade.MaterialBindingAPI.Apply(mesh.GetPrim())
        UsdShade.MaterialBindingAPI(mesh).Bind(material)
        stage.GetRootLayer().Save()

        if usdz_path.exists():
            usdz_path.unlink()
        ok = UsdUtils.CreateNewARKitUsdzPackage(str(usdc_path), str(usdz_path))
        if not ok or not usdz_path.is_file():
            raise RuntimeError(f"CreateNewARKitUsdzPackage failed for {usdz_path}")
    return usdz_path


def usdz_data_offsets(data: bytes) -> list[int]:
    """Byte offset of each local-file payload; used to assert 64-byte alignment."""
    offsets: list[int] = []
    pos = 0
    while pos + 30 <= len(data) and data[pos : pos + 4] == b"PK\x03\x04":
        fn_len, extra_len = struct.unpack_from("<HH", data, pos + 26)
        payload_size = struct.unpack_from("<I", data, pos + 22)[0]
        data_off = pos + 30 + fn_len + extra_len
        offsets.append(data_off)
        pos = data_off + payload_size
    return offsets


def stl_to_usdz(stl_path: Path, usdz_path: Path) -> Path:
    """Pack a binary STL as an ARKit USDZ crate for iOS/macOS Quick Look."""
    points, faces = _read_binary_stl(stl_path)
    if not faces:
        raise ValueError(f"STL has no triangles: {stl_path}")
    points, faces = _weld_mesh(points, faces)
    return _write_arkit_usdz(points, faces, usdz_path)


def _maybe_write_usdz(written: dict[str, Path], model_name: str) -> None:
    stl_path = written.get("stl")
    if stl_path is None or not stl_path.is_file():
        return
    usdz_path = stl_path.with_suffix(".usdz")
    stl_to_usdz(stl_path, usdz_path)
    written["usdz"] = usdz_path
    hub = publish_to_preview_site(model_name, usdz_path)
    if hub is not None:
        written["preview_hub"] = hub


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
