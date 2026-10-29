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


def annotate(svg_path) -> None:
    """Right-side-up notes. Export maps CAD (x, z) to SVG (x, -z)."""
    from pathlib import Path

    path = Path(svg_path)
    text = path.read_text(encoding="utf-8")
    if "UD bent to 40" in text:
        return
    start = text.find("<svg")
    end = text.find(">", start)
    rect = (
        '\n  <rect x="4668.570888" y="-3482.918628" width="456.429112" '
        'height="361.234443" fill="#ffffff"/>'
    )
    # viewBox is stable for this detail; the rect matches the exported frame.
    text = text[: end + 1] + rect + text[end + 1 :]
    labels = """
  <g font-family="sans-serif" font-size="16" fill="#1a2433">
    <text x="4788" y="-3408">UD bent to 40°</text>
    <text x="4788" y="-3372">slope CD</text>
    <text x="4768" y="-3336">GKF stops here</text>
    <text x="4708" y="-3188">NaturHeld 100 + StoSilent</text>
    <text x="5010" y="-3336">soffit CD</text>
    <text x="5042" y="-3272">soffit GKF</text>
    <text x="4868" y="-3264">acrylic + tape</text>
  </g>
"""
    text = text.replace("</svg>", labels + "</svg>")
    path.write_text(text, encoding="utf-8")
