"""Obývák 1.02 — 3D massing from the transverse section + gable elevation.

World: X eave↔eave (5350), Y kitchen↔living (11100), Z up.

- Eave walls, krov, vata, cabinets and soffit: panel A extruded along Y.
- Gable walls, koruna, pouzdra, předstěny: panel B, thickness along Y, span along X.
- Předstěny 190 / 450 follow the section ceiling in X (not a constant Z_SOFFIT slab).
- Cabinet run is not on either sheet; default is the clear span between předstěny.
- No texts, hangers, or bass-trap layer stacks.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Align, Box, Color, Compound, Location, Solid

from obyvak_geom import ObyvakLayout, ObyvakParams, xz_face


MODEL_NAME = "obyvak"
EXPORT_KIND = "solid"
PARAMS = asdict(ObyvakParams())


def _layer_color(label: str) -> Color:
    from blueprints.export_utils import SECTION_LAYERS

    style = SECTION_LAYERS.get(label, {})
    rgb = style.get("fill") or style.get("line") or (80, 80, 80)
    return Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)


def _paint(shape, label: str):
    shape.label = label
    shape.color = _layer_color(label)
    return shape


def _box(x: float, y: float, z: float, dx: float, dy: float, dz: float, label: str):
    if dx < 0:
        x, dx = x + dx, -dx
    if dy < 0:
        y, dy = y + dy, -dy
    if dz < 0:
        z, dz = z + dz, -dz
    solid = Box(dx, dy, dz, align=(Align.MIN, Align.MIN, Align.MIN))
    solid = Location((x, y, z)) * solid
    return _paint(solid, label)


def _extrude_y(face, y0: float, y1: float, label: str):
    ya, yb = (y0, y1) if y1 >= y0 else (y1, y0)
    placed = face.moved(Location((0.0, ya, 0.0)))
    try:
        solid = Solid.extrude(placed, (0.0, yb - ya, 0.0))
    except Exception:
        solid = Solid.extrude(placed.reversed(), (0.0, yb - ya, 0.0))
    return _paint(solid, label)


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    y0, y1 = g.yl_eps, g.yr_eps
    parts: list = []

    parts.append(_box(g.xl_eps, y0, -p.floor_t, g.xr_eps - g.xl_eps, y1 - y0, p.floor_t, "podlaha"))

    # Eave walls (panel A), full length including gable corners.
    for x_eps, x_mas, x_pls in (
        (g.xl_eps, g.xl_mas, -p.wall_plaster),
        (g.xr_mas, p.room_width + p.wall_plaster, p.room_width),
    ):
        parts.append(_box(x_eps, y0, -p.floor_t, p.wall_eps, y1 - y0, p.eave_wall_z + p.floor_t, "eps"))
        parts.append(
            _box(x_mas, y0, -p.floor_t, p.wall_mason, y1 - y0, p.eave_wall_z + p.floor_t, "zdivo")
        )
        parts.append(_box(x_pls, y0, 0.0, p.wall_plaster, y1 - y0, p.eave_wall_z, "omitka"))

    parts.append(_box(g.poz_l0, y0, p.eave_wall_z, p.plate_w, y1 - y0, p.plate_h, "pozednice"))
    parts.append(_box(g.poz_r0, y0, p.eave_wall_z, p.plate_w, y1 - y0, p.plate_h, "pozednice"))

    # Gable walls (panel B): 40° rake, peak at ridge.
    for ya, yb in ((g.yl_eps, g.yl_mas), (g.yr_mas, g.yr_eps)):
        parts.append(
            _extrude_y(xz_face(g.gable_wall_pts(g.xl_eps, g.xr_eps, -p.floor_t), "eps"), ya, yb, "eps")
        )
    for ya, yb in ((g.yl_mas, -p.wall_plaster), (p.room_length + p.wall_plaster, g.yr_mas)):
        parts.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), "zdivo"), ya, yb, "zdivo"
            )
        )
    for ya, yb in ((-p.wall_plaster, 0.0), (p.room_length, p.room_length + p.wall_plaster)):
        parts.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), "omitka"), ya, yb, "omitka"
            )
        )
    for ya, yb in ((g.yl_mas, 0.0), (p.room_length, g.yr_mas)):
        parts.append(
            _extrude_y(
                xz_face(g.gable_crown_pts(g.xl_mas, g.xr_mas), "koruna"), ya, yb, "koruna"
            )
        )

    parts.append(_extrude_y(xz_face(g.krov_pts(), "krov"), g.y_roof0, g.y_roof1, "krov"))
    parts.append(_extrude_y(xz_face(g.krytina_pts(), "krytina"), g.y_roof0, g.y_roof1, "krytina"))
    parts.append(_extrude_y(xz_face(g.vata_pts(), "vata"), 0.0, p.room_length, "vata"))
    parts.append(_extrude_y(xz_face(g.podhled_pts(), "podhled"), g.y_furn0, g.y_furn1, "podhled"))

    parts.append(
        _box(
            g.x_furn,
            g.y_furn0,
            0.0,
            p.furniture_width,
            g.y_furn1 - g.y_furn0,
            p.furniture_height,
            "nabytek",
        )
    )
    parts.append(
        _box(
            g.x_furn,
            g.y_furn0,
            g.z_nabeh_bot,
            p.furniture_width,
            g.y_furn1 - g.y_furn0,
            g.z_gkf_horiz - g.z_nabeh_bot,
            "soffit",
        )
    )

    pred = xz_face(g.predstena_pts(), "predstena")
    parts.append(_extrude_y(pred, 0.0, p.predstena_kitchen, "predstena"))
    parts.append(_extrude_y(pred, g.y_pred_r, p.room_length, "predstena"))

    parts.append(
        _box(0.0, 0.0, 0.0, p.room_width, p.pouzdro_d, p.predstena_bottom_z, "pouzdro")
    )
    parts.append(
        _box(
            0.0,
            p.room_length - p.pouzdro_d,
            0.0,
            p.room_width,
            p.pouzdro_d,
            p.predstena_bottom_z,
            "pouzdro",
        )
    )
    return parts


def _compound(parts: list, label: str = MODEL_NAME) -> Compound:
    return Compound(obj=parts, children=parts, label=label)


def _meta(p: ObyvakParams, g: ObyvakLayout) -> dict:
    return {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "z_soffit": g.z_soffit,
            "z_false": g.z_false,
            "predstena_kitchen": p.predstena_kitchen,
            "predstena_living": p.predstena_living,
            "y_furn0": g.y_furn0,
            "y_furn1": g.y_furn1,
            "room_width": p.room_width,
            "room_length": p.room_length,
        },
    }


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    return _compound(_parts(p, g)), _meta(p, g)


def build_preview(params: ObyvakParams | None = None):
    """Cutaway: drop the window-eave wall so the isometric reads the interior."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    kept = []
    for part in _parts(p, g):
        if part.label in {"eps", "zdivo", "omitka", "pozednice"} and part.bounding_box().max.X <= 1.0:
            continue
        kept.append(part)
    return _compound(kept, label=f"{MODEL_NAME}_cutaway"), _meta(p, g)


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
