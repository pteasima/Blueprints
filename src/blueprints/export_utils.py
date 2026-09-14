"""Shared export helpers for build123d models."""

from __future__ import annotations

import base64
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

    _maybe_write_usdz(written, shape=shape)
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


_CHAT_FORMATS = frozenset({".png", ".usdz", ".html"})


def _artifact_name(model_name: str, path: Path) -> str:
    suffix = path.suffix.lower()
    if path.stem == "model" and suffix in {".step", ".stp", ".stl", ".usdz", ".html"}:
        return f"{model_name}_3d{suffix}"
    return f"{model_name}_{path.name}"


def publish_to_artifacts(model_name: str, paths: dict[str, Path]) -> dict[str, Path]:
    """Copy PNG/USDZ/HTML into the run artifact folder.

    Chat still only displays PNG/video. Do not emit `<a href="/opt/cursor/artifacts/…">`;
    those paths 404 on cursor.com. Give the user a real https URL or a QR PNG instead.
    """
    dest_root = artifacts_dir()
    if dest_root is None:
        return {}
    published: dict[str, Path] = {}
    for path in paths.values():
        if path.suffix.lower() not in _CHAT_FORMATS or not path.is_file():
            continue
        dest = dest_root / _artifact_name(model_name, path)
        shutil.copy2(path, dest)
        published[path.suffix.lower().lstrip(".")] = dest
    return published


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


def _usdz_placement(
    points: list[tuple[float, float, float]],
) -> tuple[float, float, float, float]:
    """Shared AR placement: centre XZ, ground Y, optional tabletop scale (metres)."""
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
    scale = _AR_TABLETOP_SPAN_M / span if span > _AR_REAL_SPAN_LIMIT_M else 1.0
    return cx, cz, min_y, scale


def _apply_usdz_placement(
    points: list[tuple[float, float, float]],
    cx: float,
    cz: float,
    min_y: float,
    scale: float,
) -> list[tuple[float, float, float]]:
    placed: list[tuple[float, float, float]] = []
    for p in points:
        x, y, z = _y_up(p)
        x = x * _CAD_MM_TO_M - cx
        y = y * _CAD_MM_TO_M - min_y
        z = z * _CAD_MM_TO_M - cz
        placed.append((x * scale, y * scale, z * scale))
    return placed


def _prepare_usdz_points(
    points: list[tuple[float, float, float]],
) -> list[tuple[float, float, float]]:
    """Y-up metres, grounded at Y=0, XZ-centred; tabletop-scale if too large for indoor AR."""
    return _apply_usdz_placement(points, *_usdz_placement(points))


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


_DEFAULT_USDZ_COLOR = (0.82, 0.8, 0.76)


def _linear_to_srgb(channel: float) -> float:
    if channel <= 0.0031308:
        return 12.92 * channel
    return 1.055 * (channel ** (1.0 / 2.4)) - 0.055


def _part_diffuse_rgb(part: Shape | Compound) -> tuple[float, float, float]:
    """Diffuse colour for USDZ/HTML: section fill, else stroke, else shape.color, else default."""
    label = getattr(part, "label", None) or ""
    style = SECTION_LAYERS.get(label, {})
    rgb8 = style.get("fill") or style.get("line")
    if rgb8:
        return (rgb8[0] / 255.0, rgb8[1] / 255.0, rgb8[2] / 255.0)
    color = getattr(part, "color", None)
    if color is not None:
        try:
            lin = color.wrapped.GetRGB()
            return (
                _linear_to_srgb(lin.Red()),
                _linear_to_srgb(lin.Green()),
                _linear_to_srgb(lin.Blue()),
            )
        except Exception:
            pass
    return _DEFAULT_USDZ_COLOR


def _usd_safe_name(name: str, used: set[str]) -> str:
    base = "".join(ch if ch.isalnum() or ch == "_" else "_" for ch in (name or "part"))
    if not base or base[0].isdigit():
        base = f"Part_{base}"
    candidate = base
    n = 2
    while candidate in used:
        candidate = f"{base}_{n}"
        n += 1
    used.add(candidate)
    return candidate


def _tessellate_colored_parts(
    shape: Shape | Compound,
    *,
    tolerance: float,
) -> list[tuple[str, list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]]:
    """Tessellate labeled children (or the whole shape); merge same labels into one mesh."""
    children = list(getattr(shape, "children", ()) or ())
    sources: list[Shape | Compound] = children if children else [shape]
    label_to_name: dict[str, str] = {}
    used_names: set[str] = set()
    by_name: dict[
        str, tuple[list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]
    ] = {}
    order: list[str] = []

    for src in sources:
        label = str(getattr(src, "label", None) or getattr(shape, "label", None) or "Geom")
        if label not in label_to_name:
            label_to_name[label] = _usd_safe_name(label, used_names)
        name = label_to_name[label]
        try:
            verts, tris = src.tessellate(tolerance)
        except Exception:
            continue
        if not tris:
            continue
        points = [(float(v.X), float(v.Y), float(v.Z)) for v in verts]
        faces = [(int(a), int(b), int(c)) for a, b, c in tris]
        points, faces = _weld_mesh(points, faces)
        rgb = _part_diffuse_rgb(src)
        if name not in by_name:
            by_name[name] = (points, faces, rgb)
            order.append(name)
            continue
        base_pts, base_faces, base_rgb = by_name[name]
        offset = len(base_pts)
        base_pts.extend(points)
        base_faces.extend((i + offset, j + offset, k + offset) for i, j, k in faces)
        by_name[name] = (base_pts, base_faces, base_rgb)

    parts: list[
        tuple[str, list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]
    ] = []
    for name in order:
        pts, faces, rgb = by_name[name]
        pts, faces = _weld_mesh(pts, faces)
        parts.append((name, pts, faces, rgb))
    return parts


def _bind_preview_material(stage, mesh, path: str, rgb: tuple[float, float, float]) -> None:
    from pxr import Gf, Sdf, UsdShade

    material = UsdShade.Material.Define(stage, path)
    shader = UsdShade.Shader.Define(stage, f"{path}/PreviewSurface")
    shader.CreateIdAttr("UsdPreviewSurface")
    shader.CreateInput("diffuseColor", Sdf.ValueTypeNames.Color3f).Set(Gf.Vec3f(*rgb))
    shader.CreateInput("roughness", Sdf.ValueTypeNames.Float).Set(0.6)
    shader.CreateInput("metallic", Sdf.ValueTypeNames.Float).Set(0.0)
    material.CreateSurfaceOutput().ConnectToSource(shader.ConnectableAPI(), "surface")
    UsdShade.MaterialBindingAPI.Apply(mesh.GetPrim())
    UsdShade.MaterialBindingAPI(mesh).Bind(material)


def _write_mesh_prim(
    stage,
    path: str,
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
    rgb: tuple[float, float, float],
) -> None:
    from pxr import Gf, UsdGeom

    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    zs = [p[2] for p in points]
    counts = [3] * len(faces)
    indices: list[int] = []
    normals: list = []
    for i, j, k in faces:
        indices.extend((i, j, k))
        n = Gf.Vec3f(*_normalize(_cross(points[i], points[j], points[k])))
        normals.extend((n, n, n))
    mesh = UsdGeom.Mesh.Define(stage, path)
    mesh.CreatePointsAttr([Gf.Vec3f(*p) for p in points])
    mesh.CreateFaceVertexCountsAttr(counts)
    mesh.CreateFaceVertexIndicesAttr(indices)
    mesh.CreateNormalsAttr(normals)
    mesh.SetNormalsInterpolation(UsdGeom.Tokens.faceVarying)
    mesh.CreateSubdivisionSchemeAttr().Set(UsdGeom.Tokens.none)
    mesh.CreateDoubleSidedAttr(True)
    mesh.CreateExtentAttr(
        [Gf.Vec3f(min(xs), min(ys), min(zs)), Gf.Vec3f(max(xs), max(ys), max(zs))]
    )
    mesh.CreateDisplayColorAttr([Gf.Vec3f(*rgb)])
    mat_name = path.rsplit("/", 1)[-1]
    _bind_preview_material(stage, mesh, f"/Model/Looks/{mat_name}", rgb)


def _write_arkit_usdz(
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
    usdz_path: Path,
    *,
    color: tuple[float, float, float] = _DEFAULT_USDZ_COLOR,
    mesh_parts: list[
        tuple[str, list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]
    ]
    | None = None,
) -> Path:
    """Package mesh(es) as a single-layer .usdc USDZ (what Apple Quick Look actually opens).

    When ``mesh_parts`` is set, each entry becomes its own Geom mesh + UsdPreviewSurface
    so layer colours (EPS, masonry, wood, drywall, …) survive into AR Quick Look.
    """
    from pxr import Kind, Sdf, Usd, UsdGeom, UsdUtils

    if mesh_parts:
        all_points = [p for _n, pts, _f, _c in mesh_parts for p in pts]
        cx, cz, min_y, scale = _usdz_placement(all_points)
        placed_parts = [
            (name, _apply_usdz_placement(pts, cx, cz, min_y, scale), tris, rgb)
            for name, pts, tris, rgb in mesh_parts
        ]
    else:
        placed_parts = [("Geom", _prepare_usdz_points(points), faces, color)]

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

        if len(placed_parts) == 1:
            name, pts, tris, rgb = placed_parts[0]
            _write_mesh_prim(stage, "/Model/Geom", pts, tris, rgb)
        else:
            UsdGeom.Xform.Define(stage, "/Model/Geom")
            for name, pts, tris, rgb in placed_parts:
                _write_mesh_prim(stage, f"/Model/Geom/{name}", pts, tris, rgb)

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


def _usdz_bytes(
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
    *,
    color: tuple[float, float, float] = _DEFAULT_USDZ_COLOR,
    mesh_parts: list[
        tuple[str, list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]
    ]
    | None = None,
) -> bytes:
    with tempfile.TemporaryDirectory() as tmp:
        path = Path(tmp) / "model.usdz"
        _write_arkit_usdz(points, faces, path, color=color, mesh_parts=mesh_parts)
        return path.read_bytes()


def stl_to_usdz(stl_path: Path, usdz_path: Path) -> Path:
    """Pack a binary STL as an ARKit USDZ crate for iOS/macOS Quick Look."""
    points, faces = _read_binary_stl(stl_path)
    if not faces:
        raise ValueError(f"STL has no triangles: {stl_path}")
    points, faces = _weld_mesh(points, faces)
    return _write_arkit_usdz(points, faces, usdz_path)


_VIEWER_HTML = """<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<title>3D preview</title>
<style>
  html,body { margin:0; height:100%; background:#111; color:#eee; font-family:-apple-system,sans-serif; }
  #bar { position:fixed; top:0; left:0; right:0; z-index:2; display:flex; gap:8px; align-items:center;
         padding:10px 12px; background:rgba(0,0,0,.72); font-size:14px; }
  #bar button { font:inherit; padding:8px 12px; border:0; border-radius:8px; background:#eee; color:#111; }
  #err { display:none; position:fixed; top:56px; left:12px; right:12px; z-index:2;
         background:#4a1010; color:#fcc; padding:10px; border-radius:8px; white-space:pre-wrap; }
  canvas { display:block; width:100%; height:100%; touch-action:none; }
</style>
</head>
<body>
<div id="bar">
  <button type="button" id="ql">Otevřít v Quick Look</button>
  <span>Táhni = otáčení · štípej = zoom</span>
</div>
<pre id="err"></pre>
<canvas id="c"></canvas>
<script>
const COORDS_B64 = "%%COORDS_B64%%";
const USDZ_B64 = "%%USDZ_B64%%";
const cx = %%CX%%, cy = %%CY%%, cz = %%CZ%%, span = %%SPAN%%;
const errEl = document.getElementById('err');
function fail(msg) { errEl.style.display = 'block'; errEl.textContent = msg; }
function b64bytes(s) {
  const bin = atob(s);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
document.getElementById('ql').onclick = () => {
  const blob = new Blob([b64bytes(USDZ_B64)], {type:'model/vnd.usdz+zip'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.rel = 'ar';
  a.href = url;
  a.download = 'model.usdz';
  const img = document.createElement('img');
  img.alt = '3D';
  a.appendChild(img);
  document.body.appendChild(a);
  a.click();
  a.remove();
};
const canvas = document.getElementById('c');
const gl = canvas.getContext('webgl', {alpha:false, antialias:true})
        || canvas.getContext('experimental-webgl', {alpha:false});
if (!gl) { fail('WebGL není k dispozici.'); }
else {
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, [
    'attribute vec3 aPos;',
    'attribute vec3 aNrm;',
    'attribute vec3 aCol;',
    'uniform mat4 uMVP;',
    'uniform mat4 uN;',
    'varying vec3 vN;',
    'varying vec3 vC;',
    'void main() {',
    '  vN = mat3(uN) * aNrm;',
    '  vC = aCol;',
    '  gl_Position = uMVP * vec4(aPos, 1.0);',
    '}'
  ].join(String.fromCharCode(10)));
  gl.compileShader(vs);
  if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    fail('Vertex shader: ' + gl.getShaderInfoLog(vs));
  }
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, [
    'precision mediump float;',
    'varying vec3 vN;',
    'varying vec3 vC;',
    'void main() {',
    '  vec3 n = normalize(vN);',
    '  float d = max(dot(n, normalize(vec3(0.35, 0.6, 0.7))), 0.18);',
    '  gl_FragColor = vec4(vC * d, 1.0);',
    '}'
  ].join(String.fromCharCode(10)));
  gl.compileShader(fs);
  if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    fail('Fragment shader: ' + gl.getShaderInfoLog(fs));
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    fail('WebGL link: ' + gl.getProgramInfoLog(prog));
  }
  gl.useProgram(prog);
  const raw = b64bytes(COORDS_B64);
  const P = new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
  const ntri = P.length / 18;
  const pos = new Float32Array(ntri * 9);
  const nrm = new Float32Array(ntri * 9);
  const col = new Float32Array(ntri * 9);
  for (let t = 0; t < ntri; t++) {
    const s = t * 18, o = t * 9;
    const ax=P[s]-cx, ay=P[s+1]-cy, az=P[s+2]-cz;
    const bx=P[s+6]-cx, by=P[s+7]-cy, bz=P[s+8]-cz;
    const cxp=P[s+12]-cx, cyp=P[s+13]-cy, czp=P[s+14]-cz;
    const nx=(by-ay)*(czp-az)-(bz-az)*(cyp-ay);
    const ny=(bz-az)*(cxp-ax)-(bx-ax)*(czp-az);
    const nz=(bx-ax)*(cyp-ay)-(by-ay)*(cxp-ax);
    for (let k = 0; k < 3; k++) {
      const si = s + k * 6, oi = o + k * 3;
      pos[oi]=P[si]-cx; pos[oi+1]=P[si+1]-cy; pos[oi+2]=P[si+2]-cz;
      nrm[oi]=nx; nrm[oi+1]=ny; nrm[oi+2]=nz;
      col[oi]=P[si+3]; col[oi+1]=P[si+4]; col[oi+2]=P[si+5];
    }
  }
  function buf(data, locName) {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, locName);
    if (loc < 0) { fail('Chybí atribut ' + locName); return; }
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
  }
  buf(pos, 'aPos'); buf(nrm, 'aNrm'); buf(col, 'aCol');
  const uMVP = gl.getUniformLocation(prog, 'uMVP');
  const uN = gl.getUniformLocation(prog, 'uN');
  let yaw = 0.6, pitch = 0.45, dist = span * 1.8;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, innerWidth * dpr);
    canvas.height = Math.max(1, innerHeight * dpr);
    gl.viewport(0,0,canvas.width,canvas.height);
  }
  addEventListener('resize', resize); resize();
  let last=null, pinching=null;
  canvas.addEventListener('pointerdown', e => { last={x:e.clientX,y:e.clientY,id:e.pointerId}; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointerup', () => last=null);
  canvas.addEventListener('pointermove', e => {
    if (!last || e.pointerId!==last.id) return;
    yaw += (e.clientX-last.x)*0.008;
    pitch = Math.max(-1.2, Math.min(1.2, pitch+(e.clientY-last.y)*0.008));
    last={x:e.clientX,y:e.clientY,id:e.pointerId};
  });
  canvas.addEventListener('wheel', e => { e.preventDefault(); dist *= (e.deltaY>0?1.08:0.92); }, {passive:false});
  canvas.addEventListener('touchstart', e => {
    if (e.touches.length===2) {
      const a=e.touches[0], b=e.touches[1];
      pinching=Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
    }
  }, {passive:true});
  canvas.addEventListener('touchmove', e => {
    if (e.touches.length===2 && pinching) {
      const a=e.touches[0], b=e.touches[1];
      const d=Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      dist *= pinching/d; pinching=d;
    }
  }, {passive:true});
  function mul(a,b) {
    const r=new Float32Array(16);
    for (let i=0;i<4;i++) for (let j=0;j<4;j++)
      r[j*4+i]=a[i]*b[j*4]+a[4+i]*b[j*4+1]+a[8+i]*b[j*4+2]+a[12+i]*b[j*4+3];
    return r;
  }
  function persp(f, asp, n, f2) {
    const t=1/Math.tan(f/2);
    return new Float32Array([t/asp,0,0,0, 0,t,0,0, 0,0,(f2+n)/(n-f2),-1, 0,0,(2*f2*n)/(n-f2),0]);
  }
  function look() {
    const cPitch=Math.cos(pitch), sPitch=Math.sin(pitch);
    const cYaw=Math.cos(yaw), sYaw=Math.sin(yaw);
    const ex=dist*cPitch*sYaw, ey=-dist*sPitch, ez=dist*cPitch*cYaw;
    let fx=-ex, fy=-ey, fz=-ez;
    let fl=Math.hypot(fx,fy,fz); fx/=fl; fy/=fl; fz/=fl;
    let rx=fy*0-fz*1, ry=fz*0-fx*0, rz=fx*1-fy*0;
    let rl=Math.hypot(rx,ry,rz); rx/=rl; ry/=rl; rz/=rl;
    const ux=ry*fz-rz*fy, uy=rz*fx-rx*fz, uz=rx*fy-ry*fx;
    return new Float32Array([
      rx, ux, -fx, 0,
      ry, uy, -fy, 0,
      rz, uz, -fz, 0,
      -(rx*ex+ry*ey+rz*ez),
      -(ux*ex+uy*ey+uz*ez),
      (fx*ex+fy*ey+fz*ez),
      1
    ]);
  }
  gl.enable(gl.DEPTH_TEST); gl.clearColor(0.07,0.07,0.08,1);
  (function frame() {
    const asp = canvas.width / Math.max(canvas.height, 1);
    const mvp = mul(persp(0.7, asp, span*0.02, span*20), look());
    gl.uniformMatrix4fv(uMVP, false, mvp);
    gl.uniformMatrix4fv(uN, false, look());
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, ntri*3);
    requestAnimationFrame(frame);
  })();
}
</script>
</body>
</html>
"""


def _pack_viewer_mesh(
    points: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int]],
    *,
    color: tuple[float, float, float] = _DEFAULT_USDZ_COLOR,
    face_colors: list[tuple[float, float, float]] | None = None,
) -> tuple[bytes, float, float, float, float]:
    """Interleave xyz+rgb per vertex for the WebGL viewer; return packed bytes + framing."""
    coords: list[float] = []
    for fi, (i, j, k) in enumerate(faces):
        rgb = face_colors[fi] if face_colors is not None else color
        for idx in (i, j, k):
            coords.extend(points[idx])
            coords.extend(rgb)
    xs, ys, zs = coords[0::6], coords[1::6], coords[2::6]
    cx = (min(xs) + max(xs)) / 2
    cy = (min(ys) + max(ys)) / 2
    cz = (min(zs) + max(zs)) / 2
    span = max(max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs), 1.0)
    packed = struct.pack(f"<{len(coords)}f", *coords)
    return packed, cx, cy, cz, span


def _write_html_viewer(
    html_path: Path,
    *,
    packed_coords: bytes,
    cx: float,
    cy: float,
    cz: float,
    span: float,
    usdz_raw: bytes,
) -> Path:
    html = (
        _VIEWER_HTML.replace("%%COORDS_B64%%", base64.b64encode(packed_coords).decode("ascii"))
        .replace("%%USDZ_B64%%", base64.b64encode(usdz_raw).decode("ascii"))
        .replace("%%CX%%", f"{cx:.6f}")
        .replace("%%CY%%", f"{cy:.6f}")
        .replace("%%CZ%%", f"{cz:.6f}")
        .replace("%%SPAN%%", f"{span:.6f}")
    )
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html, encoding="utf-8")
    return html_path


def stl_to_html_viewer(stl_path: Path, html_path: Path, usdz_path: Path | None = None) -> Path:
    """Self-contained WebGL viewer with a Quick Look button (chat UI is PNG-only)."""
    points, faces = _read_binary_stl(stl_path)
    packed, cx, cy, cz, span = _pack_viewer_mesh(points, faces)
    if usdz_path is not None and usdz_path.is_file():
        usdz_raw = usdz_path.read_bytes()
    else:
        welded_pts, welded_faces = _weld_mesh(points, faces)
        usdz_raw = _usdz_bytes(welded_pts, welded_faces)
    return _write_html_viewer(
        html_path,
        packed_coords=packed,
        cx=cx,
        cy=cy,
        cz=cz,
        span=span,
        usdz_raw=usdz_raw,
    )


def _html_from_mesh_parts(
    mesh_parts: list[
        tuple[str, list[tuple[float, float, float]], list[tuple[int, int, int]], tuple[float, float, float]]
    ],
    html_path: Path,
    usdz_raw: bytes,
) -> Path:
    points: list[tuple[float, float, float]] = []
    faces: list[tuple[int, int, int]] = []
    face_colors: list[tuple[float, float, float]] = []
    for _name, pts, tris, rgb in mesh_parts:
        base = len(points)
        points.extend(pts)
        for i, j, k in tris:
            faces.append((base + i, base + j, base + k))
            face_colors.append(rgb)
    packed, cx, cy, cz, span = _pack_viewer_mesh(points, faces, face_colors=face_colors)
    return _write_html_viewer(
        html_path,
        packed_coords=packed,
        cx=cx,
        cy=cy,
        cz=cz,
        span=span,
        usdz_raw=usdz_raw,
    )


def _maybe_write_usdz(
    written: dict[str, Path],
    *,
    shape: Shape | Compound | None = None,
) -> None:
    stl_path = written.get("stl")
    if stl_path is None or not stl_path.is_file():
        return
    usdz_path = stl_path.with_suffix(".usdz")
    html_path = stl_path.with_suffix(".html")

    mesh_parts = None
    if shape is not None:
        mesh_parts = _tessellate_colored_parts(shape, tolerance=_stl_tolerance(shape))

    if mesh_parts:
        _write_arkit_usdz([], [], usdz_path, mesh_parts=mesh_parts)
        written["usdz"] = usdz_path
        _html_from_mesh_parts(mesh_parts, html_path, usdz_path.read_bytes())
        written["html"] = html_path
        return

    stl_to_usdz(stl_path, usdz_path)
    written["usdz"] = usdz_path
    stl_to_html_viewer(stl_path, html_path, usdz_path=usdz_path)
    written["html"] = html_path


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
