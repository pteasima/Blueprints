"""Obývák 1.02 — příčný řez (panel A), parametrické 2D profily v Plane.XZ.

Hrubý řez místnosti: stěny, krov, podhled, soffit jako hmota (bez detailu skladeb).
Bez textů a kót. 3D: `models/obyvak.py` (extrude podél Y).

    python -m blueprints.export obyvak_section

Zdroj: inputs/obyvak/make_obyvak_sheet_84d0.py (panel A).
450 mm u skříní je hloubka u okapové stěny — neplést se štítovou předstěnou 450.
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Compound

from obyvak_geom import (  # noqa: F401 — ObyvakParams/build_layout re-exported for tests
    ObyvakLayout,
    ObyvakParams,
    build_layout,
    xz_face,
    xz_line,
    xz_polyline,
    xz_rect,
)

MODEL_NAME = "obyvak_section"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)

    parts: list = []

    parts.append(xz_rect(g.xl_eps, -p.floor_t, g.xr_eps - g.xl_eps, p.floor_t, "podlaha"))
    parts.append(xz_rect(g.xl_eps, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, "eps"))
    parts.append(xz_rect(g.xl_mas, -p.floor_t, p.wall_mason, p.eave_wall_z + p.floor_t, "zdivo"))
    parts.append(xz_rect(-p.wall_plaster, 0.0, p.wall_plaster, p.eave_wall_z, "omitka"))
    parts.append(xz_rect(p.room_width, 0.0, p.wall_plaster, p.eave_wall_z, "omitka"))
    parts.append(
        xz_rect(
            p.room_width + p.wall_plaster,
            -p.floor_t,
            p.wall_mason,
            p.eave_wall_z + p.floor_t,
            "zdivo",
        )
    )
    parts.append(xz_rect(g.xr_mas, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, "eps"))

    parts.append(xz_rect(g.x_furn, 0.0, p.furniture_width, p.furniture_height, "nabytek"))
    parts.append(xz_rect(g.poz_l0, p.eave_wall_z, p.plate_w, p.plate_h, "pozednice"))
    parts.append(xz_rect(g.poz_r0, p.eave_wall_z, p.plate_w, p.plate_h, "pozednice"))

    zle = g.z_tile(0.0) - (0.0 - g.left_eave) * g.tan
    zre = g.z_tile(p.room_width) - (g.right_eave - p.room_width) * g.tan
    parts.append(
        xz_face(
            [
                (g.left_eave, zle - g.t_above_raf / g.cos),
                (g.x_ridge, g.z_raf_outer(g.x_ridge)),
                (g.right_eave, zre - g.t_above_raf / g.cos),
                (g.right_eave, zre - (g.t_above_raf + p.rafter_t) / g.cos),
                (g.x_ridge, g.z_raf(g.x_ridge)),
                (g.left_eave, zle - (g.t_above_raf + p.rafter_t) / g.cos),
            ],
            "krov",
        )
    )
    parts.append(
        xz_polyline(
            [(g.left_eave, zle), (g.x_ridge, p.ridge_z), (g.right_eave, zre)],
            "krytina",
        )
    )

    parts.append(
        xz_face(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
                (p.room_width, g.z_gkf_horiz),
                (p.room_width, g.z_raf(p.room_width)),
                (g.x_ridge, g.z_raf(g.x_ridge)),
                (0.0, g.z_raf(0.0)),
            ],
            "vata",
        )
    )
    parts.append(
        xz_rect(
            g.x_furn,
            g.z_nabeh_bot,
            p.furniture_width,
            g.z_gkf_horiz - g.z_nabeh_bot,
            "soffit",
        )
    )
    parts.append(
        xz_polyline(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
                (p.room_width, g.z_gkf_horiz),
            ],
            "podhled",
        )
    )
    parts.append(xz_line(g.x_furn, g.z_gkf_horiz, g.x_furn, g.z_nabeh_bot, "podhled"))
    parts.append(xz_line(g.x_furn, g.z_nabeh_bot, p.room_width, g.z_nabeh_bot, "podhled"))

    shape = Compound(obj=parts, children=parts, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "x_furn": g.x_furn,
            "x_false": g.x_false,
            "z_false": g.z_false,
            "z_nabeh_bot": g.z_nabeh_bot,
            "z_gkf_horiz": g.z_gkf_horiz,
        },
    }
    return shape, meta


if __name__ == "__main__":
    from blueprints.export_utils import export_section, summarize_params

    shape, meta = build()
    paths = export_section(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
