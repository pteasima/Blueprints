"""Obývák 1.02 — příčný řez (panel A), cut from the 3D model solids.

Design facts and reasons: docs/design/obyvak.md.

Every drawn face is a section (or a seen-beyond section) of a solid in
`models/obyvak.py` — the same solids as the GLB. Only notes are overlaid.

Šikminy: NaturHeld 140 (80) screwed through GKF into CD ⊥ krokvím, závěsy,
pásky (3D: 45° X; zde jen průřez). No slope latě and no Flex. Soffit: 40 mm
NaturHeld on the side and bottom, mineral wool in the cavity, GKF lid on the
pozednice above three Ø160 ducts; CD/UD rost under the pipes, hung from the
front CD and braced to the wall. The hidden gypsum butt is a light-gauge
angle on that same CD. 3D: `models/obyvak.py`.

    python -m blueprints.export obyvak_section
"""

from __future__ import annotations

from dataclasses import asdict

from obyvak_geom import (  # noqa: F401
    LABEL_SLOPE_CD,
    ObyvakLayout,
    ObyvakParams,
    build_layout,
)

MODEL_NAME = "obyvak_section"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())


def build(params: ObyvakParams | None = None):
    """Transverse section cut from the 3D model solids (no 2D-only geometry)."""
    import obyvak

    p = params or ObyvakParams()
    g = build_layout(p)
    shape = obyvak.model_section(p, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "y_cut": obyvak.section_y(p),
            "h_start": g.h_start,
            "z_false": g.z_false,
            "wool_left": g.wool_left,
            "wool_right": g.wool_right,
            "t_left": g.t_left,
            "t_right": g.t_right,
            "cd_count": sum(1 for c in shape.children if c.label == LABEL_SLOPE_CD),
        },
    }
    return shape, meta


def annotate(svg_path, dxf_path=None, png_path=None) -> None:
    """Crop the false-ridge butt joints out of the section and label them in English."""
    from pathlib import Path

    from obyvak_geom import ObyvakParams, build_layout

    g = build_layout(ObyvakParams())
    src = Path(svg_path).read_text(encoding="utf-8")
    xf, xj = g.x_false, g.x_stack_joint
    z0 = g.z_false - 110.0
    z1 = g.plane_z(xj, g.t_gkf_attic_left, right=False) + 55.0
    minx = xf - 90.0
    width = (g.x_cd_joint + 150.0) - minx
    height = z1 - z0
    miny = -z1
    import re

    svg_open_end = src.find(">", src.find("<svg"))
    svg_open = src[: svg_open_end + 1]
    rest = src[svg_open_end + 1 :]
    svg_open = re.sub(r'width="[^"]*"', f'width="{width:.2f}mm"', svg_open, count=1)
    svg_open = re.sub(r'height="[^"]*"', f'height="{height:.2f}mm"', svg_open, count=1)
    svg_open = re.sub(
        r'viewBox="[^"]*"',
        f'viewBox="{minx:.2f} {miny:.2f} {width:.2f} {height:.2f}"',
        svg_open,
        count=1,
    )
    if abs(xj - xf) < 1.0:
        joint_notes = f"""    <text x="{xf - 78:.1f}" y="{-g.z_false + 62:.1f}">volný kout, bez profilu</text>
    <text x="{xf - 78:.1f}" y="{-g.z_false + 76:.1f}">StoSilent: řezaná spára páskou</text>
    <text x="{xf - 78:.1f}" y="{-g.z_false + 90:.1f}">bez akrylu na povrchu</text>"""
    else:
        joint_notes = f"""    <text x="{xf - 78:.1f}" y="{-g.z_false + 62:.1f}">volný kout, bez profilu</text>
    <text x="{xj - 16:.1f}" y="{-(z1 - 16):.1f}">StoSilent: řezaná spára páskou</text>"""
    labels = f"""
  <g font-family="sans-serif" font-size="8" fill="#1a2433">
{joint_notes}
  </g>
"""
    out = Path(svg_path).with_name("ridge.svg")
    out.write_text(svg_open + rest.replace("</svg>", labels + "</svg>"), encoding="utf-8")
    from blueprints.export_utils import _write_png

    _write_png(out, out.with_suffix(".png"), width=1400)


if __name__ == "__main__":
    from blueprints.export_utils import export_section, summarize_params

    shape, meta = build()
    paths = export_section(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
