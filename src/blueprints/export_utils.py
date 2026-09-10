"""Shared export helpers for build123d models."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from build123d import Compound, ExportDXF, ExportSVG, Shape, export_step, export_stl


REPO_ROOT = Path(__file__).resolve().parents[2]
EXPORTS_DIR = REPO_ROOT / "exports"
PREVIEW_LINE_WEIGHT = 1.0


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


def summarize_params(params: dict[str, Any]) -> str:
    return ", ".join(f"{k}={v}" for k, v in params.items())
