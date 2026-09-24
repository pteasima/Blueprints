"""Obývák 1.02 — příčný řez (panel A), parametrické 2D profily v Plane.XZ.

Šikminy: NaturHeld 140, latě // krokvím, Flex, SDK, CD ⊥ krokvím, závěsy,
pásky (3D: 45° X; zde jen průřez). Soffit: GKF lid on the pozednice above
three Ø160 ducts; latový rost under the pipes, hung from the front CD and
braced to the wall. The hidden gypsum butt is a light-gauge angle on that
same CD. 3D: `models/obyvak.py`.

    python -m blueprints.export obyvak_section
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Compound

from obyvak_geom import (  # noqa: F401
    LABEL_EPS,
    LABEL_FLOOR,
    LABEL_FURNITURE,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_PLENUM_WOOL,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_ROOFING,
    LABEL_SLOPE_BATTENS,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_FLEX,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_BATTENS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_FLEX,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_WALL_PLATE,
    ObyvakLayout,
    ObyvakParams,
    build_layout,
    xz_face,
    xz_line,
    xz_ngon,
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

    parts.append(xz_rect(g.xl_eps, -p.floor_t, g.xr_eps - g.xl_eps, p.floor_t, LABEL_FLOOR))
    parts.append(xz_rect(g.xl_eps, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, LABEL_EPS))
    # Eave masonry includes the ring-beam course under pozednice (same material).
    parts.append(xz_rect(g.xl_mas, -p.floor_t, p.wall_mason, p.eave_wall_z + p.floor_t, LABEL_MASONRY))
    parts.append(xz_rect(-p.wall_plaster, 0.0, p.wall_plaster, p.eave_wall_z, LABEL_PLASTER))
    parts.append(xz_rect(p.room_width, 0.0, p.wall_plaster, p.eave_wall_z, LABEL_PLASTER))
    parts.append(
        xz_rect(
            p.room_width + p.wall_plaster,
            -p.floor_t,
            p.wall_mason,
            p.eave_wall_z + p.floor_t,
            LABEL_MASONRY,
        )
    )
    parts.append(xz_rect(g.xr_mas, -p.floor_t, p.wall_eps, p.eave_wall_z + p.floor_t, LABEL_EPS))

    parts.append(xz_rect(g.x_furn, 0.0, p.furniture_width, p.furniture_height, LABEL_FURNITURE))
    parts.append(xz_rect(g.poz_l0, p.eave_wall_z, p.plate_w, p.plate_h, LABEL_WALL_PLATE))
    parts.append(xz_rect(g.poz_r0, p.eave_wall_z, p.plate_w, p.plate_h, LABEL_WALL_PLATE))

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
            LABEL_RAFTERS,
        )
    )
    parts.append(
        xz_polyline(
            [(g.left_eave, zle), (g.x_ridge, p.ridge_z), (g.right_eave, zre)],
            LABEL_ROOFING,
        )
    )

    parts.append(xz_face(g.vata_pts(), LABEL_PLENUM_WOOL))

    # Šikminy stack
    parts.append(xz_face(g.sikmina_nh_pts(), LABEL_SLOPE_NH))
    parts.append(xz_face(g.sikmina_flex_pts(), LABEL_SLOPE_FLEX))
    parts.append(xz_face(g.soffit_flex_wedge_pts(), LABEL_SLOPE_FLEX))
    # Lať // krokvím: continuous ribbon in this transverse cut (section through a lať).
    parts.append(xz_face(g.sikmina_rost_ribbon_pts(), LABEL_SLOPE_BATTENS))
    parts.append(xz_face(g.sikmina_sdk_pts(), LABEL_SLOPE_GKF))
    for quad in g.sikmina_cd_quads():
        parts.append(xz_face(quad, LABEL_SLOPE_CD))
    # Schematic hangers at a few CD stations; pásky = thin sections of 45° X straps.
    for st in g.sikmina_cd_stations()[::2]:
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        parts.append(xz_face(g.hanger_quad(*st), LABEL_SLOPE_NONIUS))
    for st in g.sikmina_cd_stations()[1::3]:
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if min(xs) < 1.0 or max(xs) > g.x_furn - 1.0:
            continue
        parts.append(xz_face(g.paska_quad(*st), LABEL_RACKING_STRAP))

    # Soffit bay: NH L, Flex under the rail, ducts, GKF lid on the plate,
    # horizontal CD + Nonius, plate cleat, rost hung from the front CD.
    parts.append(xz_face(g.soffit_nh_pts(), LABEL_SOFFIT_NH))
    parts.append(xz_face(g.soffit_flex_pts(), LABEL_SOFFIT_FLEX))
    fm = p.rost_d
    z_wood0 = g.z_nabeh_bot + g.t_nh_face + p.wall_bracket_t
    x_wall = p.room_width - p.wall_plaster
    # Vertical lať beside the ducts, up to the lid, plus the underside lať.
    z_lat_top = g.z_soffit_lid
    parts.append(
        xz_rect(
            g.x_nh_inner,
            z_wood0,
            fm,
            max(8.0, z_lat_top - z_wood0),
            LABEL_SOFFIT_BATTENS,
        )
    )
    parts.append(
        xz_rect(
            g.x_nh_inner + fm,
            z_wood0,
            max(8.0, x_wall - (g.x_nh_inner + fm)),
            fm,
            LABEL_SOFFIT_BATTENS,
        )
    )
    parts.append(xz_face(g.soffit_sdk_lid_pts(), LABEL_SOFFIT_GKF))
    r_duct = p.duct_od * 0.5
    for cx, cz in g.soffit_duct_centers():
        parts.append(xz_ngon(cx, cz, r_duct, LABEL_SOFFIT_DUCT))
    for xc in g.horiz_cd_x_stations():
        parts.append(xz_face(g.horiz_cd_quad(xc), LABEL_SOFFIT_CD))
        z0 = g.horiz_hanger_bot_z()
        z1 = g.horiz_hanger_top_z(xc)
        if z1 - z0 > 20.0:
            parts.append(
                xz_rect(xc - p.hanger_w * 0.5, z0, p.hanger_w, z1 - z0, LABEL_SOFFIT_NONIUS)
            )
    for quad in g.soffit_joint_angle_quads():
        parts.append(xz_face(quad, LABEL_SOFFIT_NONIUS))
    for quad in g.soffit_plate_cleat_quads():
        parts.append(xz_face(quad, LABEL_SOFFIT_NONIUS))
    # Screw through the lid into the rost CD (schematic) + wall angle.
    rost_x = g.x_sdk_break + p.cd_w * 0.5
    if any(abs(x - rost_x) < 1.0 for x in g.horiz_cd_x_stations()):
        xc = rost_x
        z_drop0 = z_lat_top
        z_drop1 = g.z_soffit_lid + p.sdk_t
        parts.append(
            xz_rect(
                xc - p.soffit_drop_w * 0.5,
                z_drop0,
                p.soffit_drop_w,
                z_drop1 - z_drop0,
                LABEL_SOFFIT_NONIUS,
            )
        )
    z_br = z_wood0 - p.wall_bracket_t
    parts.append(
        xz_rect(
            x_wall - p.wall_bracket_leg,
            z_br,
            p.wall_bracket_leg - p.wall_bracket_t,
            p.wall_bracket_t,
            LABEL_SOFFIT_NONIUS,
        )
    )
    parts.append(
        xz_rect(
            x_wall - p.wall_bracket_t,
            z_br + p.wall_bracket_t,
            p.wall_bracket_t,
            p.wall_bracket_leg - p.wall_bracket_t,
            LABEL_SOFFIT_NONIUS,
        )
    )
    parts.append(
        xz_polyline(
            [
                (g.x_furn, p.furniture_height),
                (p.room_width, p.furniture_height),
                (p.room_width, g.z_nabeh_bot),
                (g.x_furn, g.z_nabeh_bot),
            ],
            LABEL_SOFFIT_NH,
        )
    )

    parts.append(
        xz_polyline(
            [
                (0.0, g.h_start),
                (g.x_false, g.z_false),
                (g.x_furn, g.z_gkf_horiz),
            ],
            LABEL_SLOPE_NH,
        )
    )
    parts.append(xz_line(g.x_nh_outer, g.z_gkf_horiz, g.x_nh_outer, g.z_nabeh_bot, LABEL_SOFFIT_NH))
    parts.append(xz_line(g.x_nh_outer, g.z_nabeh_bot, p.room_width, g.z_nabeh_bot, LABEL_SOFFIT_NH))

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
            "x_sdk_break": g.x_sdk_break,
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
