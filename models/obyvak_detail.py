"""Shared helper for the obyvák eave details: clip the cross-section to a window.

The details are cut from the same faces as `obyvak_section`, so they can never
drift from the model. Notes are placed in model (x, z) and written to both the
SVG (as (x, -z), outside the scale group) and the DXF NOTES layer.
"""

from __future__ import annotations

from pathlib import Path

from build123d import Compound, Face

from obyvak_geom import ObyvakParams, xz_rect


def clip_section(window, params: ObyvakParams | None = None, name: str = "detail"):
    """Faces of the section that fall inside window = (x0, z0, x1, z1)."""
    import obyvak_section

    x0, z0, x1, z1 = window
    shape, _meta = obyvak_section.build(params)
    box = xz_rect(x0, z0, x1 - x0, z1 - z0, "window")
    parts = []
    for face in shape.children:
        bb = face.bounding_box()
        if bb.max.X < x0 or bb.min.X > x1 or bb.max.Z < z0 or bb.min.Z > z1:
            continue
        label = face.label
        cut = face.intersect(box)
        if cut is None:
            continue
        for piece in cut.faces() if hasattr(cut, "faces") else [cut]:
            if piece.area < 1e-3:
                continue
            piece = Face(piece.wrapped)
            piece.label = label
            parts.append(piece)
    return Compound(obj=parts, children=parts, label=name)


def annotate_notes(svg_path, dxf_path, png_path, notes, font=6.0, thin=10.0) -> None:
    """notes: list of (x, z, text) in model mm.

    Section strokes are sized for the whole room; at detail scale they would
    swallow 0.2 mm foil and 12.5 mm boards, so they are divided by `thin`.
    """
    import re

    path = Path(svg_path)
    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r'stroke-width="([0-9.]+)"',
        lambda m: f'stroke-width="{float(m.group(1)) / thin:.3f}"',
        text,
    )
    start = text.find("<svg")
    tag_end = text.find(">", start)
    vb = text[text.find('viewBox="') + 9 :]
    minx, miny, width, height = (float(v) for v in vb[: vb.find('"')].split())
    rect = f'\n  <rect x="{minx}" y="{miny}" width="{width}" height="{height}" fill="#ffffff"/>'
    text = text[: tag_end + 1] + rect + text[tag_end + 1 :]
    # Put the white background behind the drawing: move it right after <svg>, then
    # the labels go last so they sit on top.
    rows = [f'  <g font-family="sans-serif" font-size="{font}" fill="#1a2433">']
    for x, z, note in notes:
        safe = note.replace("&", "&amp;").replace("<", "&lt;")
        rows.append(f'    <text x="{x:.1f}" y="{-z:.1f}">{safe}</text>')
    rows.append("  </g>\n")
    text = text.replace("</svg>", "\n".join(rows) + "</svg>")
    path.write_text(text, encoding="utf-8")
    if png_path is not None:
        from blueprints.export_utils import _write_png

        _write_png(path, Path(png_path), width=1800)
    if dxf_path is not None:
        import ezdxf

        doc = ezdxf.readfile(dxf_path)
        if "NOTES" not in doc.layers:
            doc.layers.add("NOTES")
        msp = doc.modelspace()
        for x, z, note in notes:
            msp.add_text(note, dxfattribs={"layer": "NOTES", "height": font * 0.8}).set_placement((x, z))
        doc.saveas(dxf_path)
