"""Right eave detail: the widened soffit lid meets the lowered slope.

The lid stays at the plate and widens until the slope GKF, cut level, lands
on it. That meeting is a floating joint: no angle and no UD. The right CD
grid stops short of the board end.

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
WINDOW = (4480.0, 2760.0, 5520.0, 3680.0)


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
        (4500, 2920, "Lid widens until it meets the lowered slope"),
        (4500, 2902, "floating joint, connection left open"),
        (4500, 2884, "no angle and no UD on this edge"),
        (4500, 2866, "bottom CD stays clear of the lid"),
        (4680, 2920, "slope NaturHeld runs to the vertical soffit face"),
        (4680, 2902, "wool triangle under the lid, one solid"),
        (4680, 2884, "brake taped to the cabinet plaster"),
        (4500, 2848, "StoSilent kout: 1. strana do koutu, nechat schnout"),
        (4500, 2830, "2. páska Sto-Stuckband, přesah pár mm"),
        (4500, 2812, "3. druhá strana přes pásku"),
        (4500, 2794, "4. za čerstva řezat a pásku stáhnout"),
    ]


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    annotate_notes(svg_path, dxf_path, png_path, notes())
