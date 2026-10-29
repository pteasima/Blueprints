"""Detail of the right-slope GKF meeting the soffit CD.

UD track, notched and bent to 40°, screwed to the room side of the fixed soffit CD.
Slope CDs slide into that UD. The slope GKF stops there; acrylic and tape fill the gap.

    python -m blueprints.export obyvak_joint
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Compound

from obyvak_geom import (
    LABEL_SLOPE_CD,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_UD,
    ObyvakParams,
    build_layout,
    xz_face,
)

MODEL_NAME = "obyvak_joint"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = build_layout(p)
    ux, uz = -g.cos, g.sin
    stub = 140.0
    erx, erz = g.gkf_end_room
    eax, eaz = g.gkf_end_attic

    def along(x, z, dist):
        return (x + ux * dist, z + uz * dist)

    parts = [
        xz_face(
            [
                (erx, erz),
                along(erx, erz, stub),
                along(eax, eaz, stub),
                (eax, eaz),
            ],
            LABEL_SLOPE_GKF,
        ),
        xz_face(g.soffit_acrylic_joint_pts(), "joint_acrylic"),
        xz_face(g.horiz_cd_quad(g.x_soffit_cd), LABEL_SOFFIT_CD),
        xz_face(
            [
                (g.x_gkf_kink, g.z_soffit_lid),
                (g.x_gkf_kink + 90.0, g.z_soffit_lid),
                (g.x_gkf_kink + 90.0, g.z_soffit_lid + p.sdk_t),
                (g.x_gkf_kink, g.z_soffit_lid + p.sdk_t),
            ],
            LABEL_SOFFIT_GKF,
        ),
    ]
    ud = g.soffit_ud_track_quads()
    for quad in ud[:-1]:
        parts.append(xz_face(quad, LABEL_SOFFIT_UD))
    parts.append(xz_face(ud[-1], LABEL_SLOPE_CD))
    for quad in g.soffit_ud_screw_quads():
        parts.append(xz_face(quad, "joint_screw"))
    # Short run of the 100 mm board on the room side of the GKF, so the stack reads.
    t_nh = g.t_nh_right
    parts.append(
        xz_face(
            [
                (erx, erz),
                along(erx, erz, stub),
                along(erx - g.sin * t_nh, erz - g.cos * t_nh, stub),
                (erx - g.sin * t_nh, erz - g.cos * t_nh),
            ],
            LABEL_SLOPE_NH,
        )
    )
    shape = Compound(obj=parts, children=parts, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "wool_left": g.wool_left,
            "wool_right": g.wool_right,
            "t_left": g.t_left,
            "t_right": g.t_right,
        },
    }
    return shape, meta


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    """English notes. Paths sit inside scale(1,-1); labels stay outside it.

    CAD (x, z) is SVG (x, -z). A re-export wipes the text, so this runs again
    and rebuilds the PNG from the labeled SVG.
    """
    from pathlib import Path

    path = Path(svg_path)
    text = path.read_text(encoding="utf-8")
    start = text.find("<svg")
    tag_end = text.find(">", start)
    vb = text[text.find('viewBox="') + 9 :]
    vb = vb[: vb.find('"')].split()
    minx, miny, width, height = (float(v) for v in vb)
    maxx, maxy = minx + width, miny + height
    rect = (
        f'\n  <rect x="{minx}" y="{miny}" width="{width}" height="{height}" '
        'fill="#ffffff"/>'
    )
    text = text[: tag_end + 1] + rect + text[tag_end + 1 :]
    # Keep every note inside the viewBox. Long lines sit on the left.
    labels = f"""
  <g font-family="sans-serif" font-size="13" fill="#1a2433">
    <text x="{minx + 14:.0f}" y="{miny + 28:.0f}">40° leg — slope CDs slide in</text>
    <text x="{minx + 70:.0f}" y="{miny + 78:.0f}">slope CD</text>
    <text x="{minx + 14:.0f}" y="{miny + 118:.0f}">GKF stops at the soffit face</text>
    <text x="{minx + 14:.0f}" y="{maxy - 22:.0f}">NaturHeld 100 + StoSilent</text>
    <text x="{maxx - 118:.0f}" y="{miny + 150:.0f}">soffit CD</text>
    <text x="{minx + 14:.0f}" y="{maxy - 58:.0f}">flat leg, screwed to the CD</text>
    <text x="{minx + 14:.0f}" y="{maxy - 40:.0f}">LB 3.5×9.5 @ 300 mm</text>
    <text x="{maxx - 108:.0f}" y="{maxy - 36:.0f}">soffit GKF</text>
    <text x="{minx + 175:.0f}" y="{maxy - 78:.0f}">acrylic + tape</text>
  </g>
"""
    text = text.replace("</svg>", labels + "</svg>")
    path.write_text(text, encoding="utf-8")
    if png_path is not None:
        from blueprints.export_utils import _write_png

        _write_png(path, Path(png_path), width=1600)
    if dxf_path is not None:
        _annotate_dxf(Path(dxf_path))


def _annotate_dxf(path) -> None:
    import ezdxf

    doc = ezdxf.readfile(path)
    if "NOTES" not in doc.layers:
        doc.layers.add("NOTES")
    msp = doc.modelspace()
    # Export rotates XZ onto XY with (x, z) -> (x, z).
    notes = [
        (4788, 3410, "40 deg leg, slope CDs slide in"),
        (5004, 3348, "soffit CD"),
        (5004, 3310, "flat leg, screwed to CD"),
        (5004, 3274, "LB 3.5x9.5 at 300 mm"),
        (4860, 3248, "acrylic + tape"),
        (4760, 3324, "GKF stops at the soffit face"),
        (4704, 3168, "NaturHeld 100 + StoSilent"),
    ]
    for x, y, note in notes:
        msp.add_text(note, dxfattribs={"layer": "NOTES", "height": 8}).set_placement((x, y))
    doc.saveas(path)
