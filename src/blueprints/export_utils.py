"""Shared export helpers for build123d models."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from build123d import (
    Axis,
    ColorIndex,
    Compound,
    ExportDXF,
    ExportSVG,
    Shape,
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
    "pozednice",
    "krov",
    "soffit",
    "podhled",
    "krytina",
]


def ensure_export_dir(model_name: str) -> Path:
    out = EXPORTS_DIR / model_name
    out.mkdir(parents=True, exist_ok=True)
    return out


def _viewport_edges(shape: Shape | Compound):
    """Isometric-ish visible edges for mobile-friendly 2D review."""
    visible, _hidden = shape.project_to_viewport((-1.2, -1.5, 1.0))
    return visible


def _write_svg(edges, path: Path) -> None:
    exporter = ExportSVG(scale=1.0, line_weight=PREVIEW_LINE_WEIGHT)
    exporter.add_layer("visible", line_weight=PREVIEW_LINE_WEIGHT)
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

    for fmt in formats:
        path = out_dir / f"{stem}.{fmt}"
        if fmt == "step":
            export_step(shape, path)
        elif fmt == "stl":
            export_stl(shape, path)
        elif fmt in {"svg", "dxf", "png"}:
            if edges is None:
                edges = _viewport_edges(shape)
            if fmt == "svg":
                _write_svg(edges, path)
            elif fmt == "dxf":
                _write_dxf(edges, path)
            else:
                svg_path = written.get("svg") or (out_dir / f"{stem}.svg")
                if "svg" not in written:
                    _write_svg(edges, svg_path)
                    written["svg"] = svg_path
                _write_png(svg_path, path)
        else:
            raise ValueError(f"Unsupported export format: {fmt}")
        written[fmt] = path

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
                exporter.add_layer(
                    name,
                    fill_color=style.get("fill"),
                    line_color=style.get("line", (0, 0, 0)),
                    line_weight=style.get("weight", SECTION_LINE_WEIGHT),
                )
                for piece in grouped[name]:
                    exporter.add_shape(piece, layer=name)
            exporter.write(path)
        elif fmt == "dxf":
            exporter = ExportDXF()
            for name in layer_names:
                style = SECTION_LAYERS.get(name, {})
                exporter.add_layer(
                    name,
                    color=style.get("dxf", ColorIndex.BLACK),
                    line_weight=0.35,
                )
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

    return written


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
