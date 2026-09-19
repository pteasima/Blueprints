"""Obývák 1.02 — příčný řez (panel A), parametrické 2D profily v Plane.XZ.

Šikminy: NaturHeld 140, latě // krokvím, Flex, SDK, CD ⊥ krokvím, závěsy,
pásky (3D: 45° X; zde jen průřez). Soffit: latový rost. 3D: `models/obyvak.py`.

    python -m blueprints.export obyvak_section
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Compound

from obyvak_geom import (  # noqa: F401
    LABEL_CD,
    LABEL_FLEX,
    LABEL_NATURHELD,
    LABEL_PASKA,
    LABEL_ROST,
    LABEL_ZAVES,
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

    parts.append(xz_face(g.vata_pts(), "vata"))

    # Šikminy stack
    parts.append(xz_face(g.sikmina_nh_pts(), LABEL_NATURHELD))
    parts.append(xz_face(g.sikmina_flex_pts(), LABEL_FLEX))
    # Lať // krokvím: continuous ribbon in this transverse cut (section through a lať).
    parts.append(xz_face(g.sikmina_rost_ribbon_pts(), LABEL_ROST))
    parts.append(xz_face(g.sikmina_sdk_pts(), "sdk"))
    for quad in g.sikmina_cd_quads():
        parts.append(xz_face(quad, LABEL_CD))
    # Schematic hangers at a few CD stations; pásky = thin sections of 45° X straps.
    for st in g.sikmina_cd_stations()[::2]:
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        parts.append(xz_face(g.hanger_quad(*st), LABEL_ZAVES))
    for st in g.sikmina_cd_stations()[1::3]:
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        parts.append(xz_face(g.paska_quad(*st), LABEL_PASKA))

    # Soffit box: NH L, Flex, latový rost (section through a lať), GKF lid.
    parts.append(xz_face(g.soffit_nh_pts(), LABEL_NATURHELD))
    parts.append(xz_face(g.soffit_flex_pts(), LABEL_FLEX))
    fm = p.rost_d
    z_wood0 = g.z_nabeh_bot + g.t_nh_face
    parts.append(
        xz_rect(
            g.x_nh_inner,
            z_wood0,
            fm,
            max(8.0, g.z_gkf_horiz - z_wood0 - 4),
            LABEL_ROST,
        )
    )
    rail_w = max(8.0, p.room_width - 15.0 - (g.x_nh_inner + fm))
    parts.append(xz_rect(g.x_nh_inner + fm, z_wood0, rail_w, fm, LABEL_ROST))
    parts.append(xz_face(g.soffit_sdk_lid_pts(), "sdk"))
    parts.append(
        xz_polyline(
            [
                (g.x_furn, p.furniture_height),
                (p.room_width, p.furniture_height),
                (p.room_width, g.z_nabeh_bot),
                (g.x_furn, g.z_nabeh_bot),
            ],
            LABEL_NATURHELD,
        )
    )

    parts.append(
        xz_polyline(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
            ],
            LABEL_NATURHELD,
        )
    )
    parts.append(xz_line(g.x_nh_outer, g.z_gkf_horiz, g.x_nh_outer, g.z_nabeh_bot, LABEL_NATURHELD))
    parts.append(xz_line(g.x_nh_outer, g.z_nabeh_bot, p.room_width, g.z_nabeh_bot, LABEL_NATURHELD))

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
            "t_nh_face": g.t_nh_face,
            "l_hanger_right": g.l_hanger_right,
            "cd_count": len(g.sikmina_cd_quads()),
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
