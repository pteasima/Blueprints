"""Obývák 1.02 — bokorys od oken (štít–štít), 2D profily v Plane.XZ.

X v tomto výkrese = světlá délka kuchyně↔obývák (v 3D to bude Y).
Z up. Podhled je vodorovný pod hřebenem — žádný A-rám vlevo/vpravo.
Předstěny 190 (KK) a 450 (obývák) od Z=2450 k podhledu — sizes unchanged.
Below: SDK face + local pouzdro pockets (not full-wall pouzdro).

    python -m blueprints.export obyvak_elevation

Zdroj: inputs/obyvak/make_stit_bokorys_8bdb.py.
450 mm předstěny u gauče není totéž jako 450 mm skříní u okapu v řezu.
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Compound

from obyvak_geom import ObyvakLayout, ObyvakParams, xz_line, xz_rect


MODEL_NAME = "obyvak_elevation"
EXPORT_KIND = "section"
PARAMS = asdict(ObyvakParams())


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    span = p.room_length
    h_gable = g.z_soffit

    xl_eps = -p.wall_plaster - p.wall_mason - p.wall_eps
    xl_mas = -p.wall_plaster - p.wall_mason
    xr_mas = span + p.wall_plaster + p.wall_mason
    xr_eps = xr_mas + p.wall_eps
    x0 = xl_eps - p.ridge_runout
    x1 = xr_eps + p.ridge_runout

    parts: list = []

    parts.append(xz_rect(xl_eps, -p.floor_t, xr_eps - xl_eps, p.floor_t, "podlaha"))
    # No gable EPS / koruna — obyvák-only interior shells.
    parts.append(xz_rect(xl_mas, -p.floor_t, p.wall_mason, h_gable + p.floor_t, "zdivo"))
    parts.append(xz_rect(-p.wall_plaster, 0.0, p.wall_plaster, h_gable, "omitka"))
    parts.append(xz_rect(span, 0.0, p.wall_plaster, h_gable, "omitka"))
    parts.append(
        xz_rect(span + p.wall_plaster, -p.floor_t, p.wall_mason, h_gable + p.floor_t, "zdivo")
    )

    # Low SDK in front of pouzdro (covers pocket); předstěny above stay 190 / 450.
    face_t = max(p.sdk_t, 12.5)
    parts.append(xz_rect(p.pouzdro_d, 0.0, face_t, p.pocket_door_h, "sdk"))
    parts.append(xz_rect(span - p.pouzdro_d - face_t, 0.0, face_t, p.pocket_door_h, "sdk"))
    parts.append(xz_rect(0.0, 0.0, p.pouzdro_d, p.pocket_door_h, "pouzdro"))
    parts.append(xz_rect(span - p.pouzdro_d, 0.0, p.pouzdro_d, p.pocket_door_h, "pouzdro"))

    # Předstěny — never resize (190 kitchen / 450 living).
    parts.append(
        xz_rect(
            0.0,
            p.predstena_bottom_z,
            p.predstena_kitchen,
            h_gable - p.predstena_bottom_z,
            "predstena",
        )
    )
    parts.append(
        xz_rect(
            g.x_pred_r,
            p.predstena_bottom_z,
            p.predstena_living,
            h_gable - p.predstena_bottom_z,
            "predstena",
        )
    )

    parts.append(
        xz_rect(0.0, g.z_soffit, span, g.t_nh_face, "podhled")
    )
    parts.append(
        xz_rect(x0, g.z_raf_inner_ridge, x1 - x0, g.z_raf_top - g.z_raf_inner_ridge, "krov")
    )
    parts.append(xz_line(x0, p.ridge_z, x1, p.ridge_z, "krytina"))

    shape = Compound(obj=parts, children=parts, label=MODEL_NAME)
    meta = {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "z_soffit": g.z_soffit,
            "predstena_kitchen": p.predstena_kitchen,
            "predstena_living": p.predstena_living,
            "room_length": span,
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
