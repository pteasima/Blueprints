"""Right eave detail: the slope GKF bears on the soffit lid, with no gap.

The 2× GKF of the right slope is cut level and sits on the top of the soffit
lid. The lid CD sits where the outer GKF plane meets the lid top, and the 40°
UD track on it takes the slope CDs. The NaturHeld board gets a level toe on the
lid, so the wool runs right up to the boards. The vapour brake runs over the
lid CD, along the lid and down the plate cheek, then is bonded to the cabinet
plaster inside the soffit void.

Cut from the same faces as `obyvak_section` (see obyvak_detail.clip_section).

    python -m blueprints.export obyvak_joint
"""

from __future__ import annotations

from dataclasses import asdict

from obyvak_detail import annotate_notes, clip_section
from obyvak_geom import ObyvakParams, build_layout

MODEL_NAME = "obyvak_joint"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())
WINDOW = (4780.0, 3110.0, 5480.0, 3480.0)


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = build_layout(p)
    shape = clip_section(WINDOW, p, MODEL_NAME)
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


def notes(p: ObyvakParams | None = None):
    g = build_layout(p or ObyvakParams())
    zl = g.z_soffit_lid
    return [
        (4790, 3462, "Right eave: slope GKF bears on the soffit lid, no gap"),
        (4790, 3448, "2x GKF 12.5 cut level, sits on the lid top"),
        (4790, 3434, "NaturHeld 100 with a level toe on the lid; wool fills to the boards"),
        (g.x_soffit_cd + 25, zl + 60, "soffit CD + 40 deg UD (slope CDs slide in)"),
        (g.x_soffit_cd + 25, zl + 46, "LB 3.5x9.5 @ 300 mm"),
        (5130, zl + 28, "Jutafol N AL 170 over the CD and lid"),
        (5130, zl - 30, "soffit GKF lid"),
        (5220, 3150, "brake: slack loop, then"),
        (5220, 3137, "bonded + taped to cabinet plaster"),
        (5220, 3124, "(inside the soffit void)"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
