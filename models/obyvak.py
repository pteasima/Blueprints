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

from build123d import Align, Axis, Box, Color, Compound, Location, Plane, Solid

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


# Hairline gap (mm) so abutting solids do not share a GPU-identical face.
# Large enough for float32 at room scale once glTF is in metres; small enough
# not to read as a crack in the viewer.
_FACE_SEP = 0.4


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    # Gables own the end walls (full X). Eave runs clear of gable plaster and
    # is inset by _FACE_SEP so end faces are not GPU-coplanar with the gable.
    sep = _FACE_SEP
    y_e0, y_e1 = sep, p.room_length - sep
    parts: list = []

    # Slab is the clear floor only — walls own the perimeter below z=0.
    parts.append(
        _box(sep, sep, -p.floor_t, p.room_width - 2 * sep, p.room_length - 2 * sep, p.floor_t, "podlaha")
    )

    # Eave layer stack: leave sep at each eps↔zdivo↔omitka interface.
    for x_eps, x_mas, x_pls, inward in (
        (g.xl_eps, g.xl_mas, -p.wall_plaster, 1.0),
        (g.xr_mas, p.room_width + p.wall_plaster, p.room_width, -1.0),
    ):
        # inward: +1 when layers grow toward +X (left wall), -1 for right wall.
        if inward > 0:
            parts.append(
                _box(
                    x_eps,
                    y_e0,
                    -p.floor_t,
                    p.wall_eps - sep,
                    y_e1 - y_e0,
                    p.eave_wall_z + p.floor_t,
                    "eps",
                )
            )
            parts.append(
                _box(
                    x_mas,
                    y_e0,
                    -p.floor_t,
                    p.wall_mason - sep,
                    y_e1 - y_e0,
                    p.eave_wall_z + p.floor_t,
                    "zdivo",
                )
            )
            parts.append(
                _box(x_pls, y_e0, 0.0, p.wall_plaster, y_e1 - y_e0, p.eave_wall_z, "omitka")
            )
        else:
            parts.append(
                _box(
                    x_pls,
                    y_e0,
                    0.0,
                    p.wall_plaster,
                    y_e1 - y_e0,
                    p.eave_wall_z,
                    "omitka",
                )
            )
            parts.append(
                _box(
                    x_mas + sep,
                    y_e0,
                    -p.floor_t,
                    p.wall_mason - sep,
                    y_e1 - y_e0,
                    p.eave_wall_z + p.floor_t,
                    "zdivo",
                )
            )
            parts.append(
                _box(
                    x_eps + sep,
                    y_e0,
                    -p.floor_t,
                    p.wall_eps - sep,
                    y_e1 - y_e0,
                    p.eave_wall_z + p.floor_t,
                    "eps",
                )
            )

    parts.append(_box(g.poz_l0, y_e0, p.eave_wall_z, p.plate_w, y_e1 - y_e0, p.plate_h, "pozednice"))
    parts.append(_box(g.poz_r0, y_e0, p.eave_wall_z, p.plate_w, y_e1 - y_e0, p.plate_h, "pozednice"))

    # Gable walls (panel B): 40° rake, peak at ridge. Span full X including eaves.
    # Y ranges leave sep at eps↔zdivo↔omitka so stacked faces do not z-fight.
    for ya, yb in ((g.yl_eps, g.yl_mas - sep), (g.yr_mas + sep, g.yr_eps)):
        parts.append(
            _extrude_y(xz_face(g.gable_wall_pts(g.xl_eps, g.xr_eps, -p.floor_t), "eps"), ya, yb, "eps")
        )
    for ya, yb in (
        (g.yl_mas, -p.wall_plaster - sep),
        (p.room_length + p.wall_plaster + sep, g.yr_mas),
    ):
        parts.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), "zdivo"), ya, yb, "zdivo"
            )
        )
    for ya, yb in (
        (-p.wall_plaster, -sep),
        (p.room_length + sep, p.room_length + p.wall_plaster),
    ):
        parts.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), "omitka"), ya, yb, "omitka"
            )
        )
    for ya, yb in ((g.yl_mas, -sep), (p.room_length + sep, g.yr_mas)):
        crown = [(x, z + sep) for x, z in g.gable_crown_pts(g.xl_mas, g.xr_mas)]
        parts.append(_extrude_y(xz_face(crown, "koruna"), ya, yb, "koruna"))

    # Roof stack: pull mating faces apart slightly (vata↔krov, krov↔krytina).
    krov_pts = [(x, z - sep * 0.5) for x, z in g.krov_pts()]
    krytina_pts = [(x, z + sep * 0.5) for x, z in g.krytina_pts()]
    vata_pts = list(g.vata_pts())
    # Lower the rafter-touching top edge of vata (last three pts run along z_raf).
    vata_pts = [
        (x, z - sep if i >= len(vata_pts) - 3 else z) for i, (x, z) in enumerate(vata_pts)
    ]
    # Keep vata clear of eave plaster planes at x=0 / room_width.
    vata_pts = [
        (min(max(x, sep), p.room_width - sep), z) for x, z in vata_pts
    ]

    parts.append(_extrude_y(xz_face(krov_pts, "krov"), g.y_roof0, g.y_roof1, "krov"))
    parts.append(_extrude_y(xz_face(krytina_pts, "krytina"), g.y_roof0, g.y_roof1, "krytina"))
    parts.append(_extrude_y(xz_face(vata_pts, "vata"), sep, p.room_length - sep, "vata"))
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

    # Inset from gable + eave plaster so predstěna does not share those planes.
    pred_pts = [
        (min(max(x, sep), p.room_width - sep), z) for x, z in g.predstena_pts()
    ]
    pred = xz_face(pred_pts, "predstena")
    parts.append(_extrude_y(pred, sep, p.predstena_kitchen, "predstena"))
    parts.append(_extrude_y(pred, g.y_pred_r, p.room_length - sep, "predstena"))

    # Pouzdro under predstěna; hairline off plaster planes.
    parts.append(
        _box(
            sep,
            sep,
            0.0,
            p.room_width - 2 * sep,
            p.pouzdro_d - sep,
            p.predstena_bottom_z,
            "pouzdro",
        )
    )
    parts.append(
        _box(
            sep,
            p.room_length - p.pouzdro_d,
            0.0,
            p.room_width - 2 * sep,
            p.pouzdro_d - sep,
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
    """Dollhouse cutaway: drop roof, window eave, and kitchen gable."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    kept = []
    for part in _parts(p, g):
        bb = part.bounding_box()
        if part.label in {"krov", "krytina", "vata", "podhled"}:
            continue
        if part.label in {"eps", "zdivo", "omitka", "pozednice", "koruna"}:
            if bb.max.X <= 1.0 or bb.max.Y <= 1.0:
                continue
        kept.append(part)
    return _compound(kept, label=f"{MODEL_NAME}_cutaway"), _meta(p, g)


def _labeled_slices(parts: list, plane: Plane):
    faces = []
    for part in parts:
        hits = part.intersect(plane)
        if not hits:
            continue
        for face in hits:
            face.label = part.label
            faces.append(face)
    return faces


def build_section_slice(params: ObyvakParams | None = None):
    """XZ slice at mid-length — same station as panel A, taken from the 3D solids."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    y_mid = p.room_length / 2.0
    faces = _labeled_slices(_parts(p, g), Plane.XZ.offset(-y_mid))
    moved = []
    for face in faces:
        placed = face.moved(Location((0.0, -y_mid, 0.0)))
        placed.label = face.label
        moved.append(placed)
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(moved, label=f"{MODEL_NAME}_slice_section"), meta


def build_elevation_slice(params: ObyvakParams | None = None):
    """YZ slice at the ridge, remapped to XZ (drawing X = world Y) like panel B."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    faces = _labeled_slices(_parts(p, g), Plane.YZ.offset(g.x_ridge))
    mapped = []
    for face in faces:
        placed = face.moved(Location((-g.x_ridge, 0.0, 0.0))).rotate(Axis.Z, -90)
        # Snap onto XZ so SVG export stays planar.
        pts = [(v.X, v.Z) for v in placed.vertices()]
        mapped.append(xz_face(pts, face.label))
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(mapped, label=f"{MODEL_NAME}_slice_elevation"), meta


def extra_exports(params: ObyvakParams | None = None):
    preview, _ = build_preview(params)
    section, _ = build_section_slice(params)
    elevation, _ = build_elevation_slice(params)
    return [
        ("cutaway", preview, "solid"),
        ("slice_section", section, "section"),
        ("slice_elevation", elevation, "section"),
    ]


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(shape, MODEL_NAME)
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
