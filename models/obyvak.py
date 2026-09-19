"""Obývák 1.02 — 3D massing from the transverse section + gable elevation.

World: X eave↔eave (5350), Y kitchen↔living (11100), Z up.

Physical assembly rules (also keep the web viewer free of z-fighting):
- Each labelled solid has real thickness from the section params.
- Different materials never share a plane and never interpenetrate; mates get a
  1 mm clearance (still reads as "touching" at room scale).
- Gables own the end walls (full X). Eave runs only the clear mid-span so
  corner volumes are not drawn twice.
- Obývák-only scope: no koruna (exterior gables are in adjacent rooms), no EPS
  on gable shells, three gable pocket doors (chodba on Y=0; spíž + zádveří on Y=L),
  and terrace glazing on the X=0 eave (opposite cabinets).
- Floor slab is the clear room only; perimeter walls own the strip below z=0.
- Šikminy: NaturHeld 140 room face, dřevěný rošt (latě 60×40 @625), Flex 50 between
  latě, then GKF; MW plenum to rafters. `krov` = rafter mass only (not the rost).
- Soffit box: self-supporting NH L over cabinets (20 mm gap); Flex cavity + rost;
  GKF lid. Furniture is not structural; box does not hang from the pozednice.

    python -m blueprints.export obyvak

450 mm at the cabinets is eave furniture depth — not the living-gable předstěna 450.
"""

from __future__ import annotations

from dataclasses import asdict

from build123d import Align, Axis, Box, Color, Compound, Location, Plane, Solid

from obyvak_geom import (
    LABEL_FLEX,
    LABEL_NATURHELD,
    LABEL_ROST,
    ObyvakLayout,
    ObyvakParams,
    xz_face,
)


MODEL_NAME = "obyvak"
EXPORT_KIND = "solid"
PARAMS = asdict(ObyvakParams())

# Clearance between distinct solids (mm). Large enough for float32 metres in glTF;
# small enough not to read as a gap in the viewer.
FACE_GAP = 1.0


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
    if dx <= 0 or dy <= 0 or dz <= 0:
        raise ValueError(f"non-positive box for {label}: {(dx, dy, dz)}")
    solid = Box(dx, dy, dz, align=(Align.MIN, Align.MIN, Align.MIN))
    solid = Location((x, y, z)) * solid
    return _paint(solid, label)


def _extrude_y(face, y0: float, y1: float, label: str):
    ya, yb = (y0, y1) if y1 >= y0 else (y1, y0)
    if yb - ya <= 0:
        raise ValueError(f"non-positive extrude for {label}: {y0}→{y1}")
    placed = face.moved(Location((0.0, ya, 0.0)))
    try:
        solid = Solid.extrude(placed, (0.0, yb - ya, 0.0))
    except Exception:
        solid = Solid.extrude(placed.reversed(), (0.0, yb - ya, 0.0))
    return _paint(solid, label)


def _shrink_band(pts: list[tuple[float, float]], top_n: int, gap: float) -> list[tuple[float, float]]:
    """Pull the first top_n vertices down and the rest up (thin a roof band)."""
    out = []
    for i, (x, z) in enumerate(pts):
        out.append((x, z - gap if i < top_n else z + gap))
    return out


def _shrink_closed_band(pts: list[tuple[float, float]], gap: float) -> list[tuple[float, float]]:
    """Inset a closed band whose first half is the inner/lower edge, second half the outer."""
    n = len(pts)
    if n < 4 or n % 2:
        return pts
    half = n // 2
    out = []
    for i, (x, z) in enumerate(pts):
        if i < half:
            out.append((x, z + gap))
        else:
            out.append((x, z - gap))
    return out


def _cut_away(solid: Solid, tools: list, label: str) -> Solid:
    """Remove tool volumes so roof packs sit on walls instead of through them."""
    out = solid
    for tool in tools:
        try:
            out = out.cut(tool)
        except Exception:
            continue
    return _paint(out, label)


def _aabb_hit(a, b) -> bool:
    ba, bb = a.bounding_box(), b.bounding_box()
    return (
        min(ba.max.X, bb.max.X) > max(ba.min.X, bb.min.X)
        and min(ba.max.Y, bb.max.Y) > max(ba.min.Y, bb.min.Y)
        and min(ba.max.Z, bb.max.Z) > max(ba.min.Z, bb.min.Z)
    )


def _pocket_door_cutters(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Through-openings for posuvné dveře in Y=0 / Y=L gables (D.1.1.03).

    Extends far enough into the room to clear masonry, pouzdro bay, and the SDK
    face that sits in front of the pocket (people walk through this hole).
    """
    face_t = max(p.sdk_t, 12.5)
    # pouzdro against gable + clearance + SDK in front of pouzdro.
    depth = p.pouzdro_d + face_t + 2 * gap + 2.0
    cutters = []
    for spec in p.pocket_doors:
        gable, x0, width = spec
        xa, xb = x0 + gap, x0 + width - gap
        if xb <= xa:
            continue
        if gable == "kitchen":
            ya, yb = g.yl_eps - 1.0, gap + depth
        elif gable == "living":
            ya, yb = p.room_length - gap - depth, g.yr_eps + 1.0
        else:
            raise ValueError(f"unknown pocket door gable: {gable!r}")
        cutters.append(
            _box(
                xa,
                min(ya, yb),
                -1.0,
                xb - xa,
                abs(yb - ya),
                p.pocket_door_h + 2 * gap + 2.0,
                "_door_cut",
            )
        )
    return cutters


def _eave_window_cutters(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Through-openings in the X=0 eave (terrace: 2× HS + fixed glass)."""
    cutters = []
    for y0, width in p.eave_windows:
        ya, yb = y0 + gap, y0 + width - gap
        if yb <= ya:
            continue
        cutters.append(
            _box(
                g.xl_eps - 1.0,
                ya,
                -1.0,
                -g.xl_eps + p.wall_plaster + 2.0,
                yb - ya,
                p.window_h + 2 * gap + 2.0,
                "_window_cut",
            )
        )
    return cutters


def _cut_wall_openings(parts: list, cutters: list) -> list:
    if not cutters:
        return parts
    out = []
    for part in parts:
        if part.label not in {"eps", "zdivo", "omitka", "sdk"}:
            out.append(part)
            continue
        cut = part
        for tool in cutters:
            if _aabb_hit(part, tool):
                cut = _cut_away(cut, [tool], part.label)
        out.append(cut)
    return out


def _gable_sdk_and_pouzdra(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Local pouzdro pockets against the gable, SDK skin in front covering them.

    Stack (kitchen Y=0 → into room): gable → pouzdro bay → thin SDK face.
    SDK is pierced only for walk-through door openings — never for pouzdro bays.
    Does not touch or resize předstěny (Z≥2450, depths 190 / 450).
    """
    h = p.pocket_door_h - gap
    face_t = max(p.sdk_t, 12.5)
    # Full pocket depth against the gable; SDK sits clearly in front (into the room).
    pocket_d = max(p.pouzdro_d - gap, gap)
    pouzdra: list = []
    sdk_parts: list = []

    for end, _y_wall in (("kitchen", gap), ("living", p.room_length - gap)):
        if end == "kitchen":
            y_pocket = gap
            y_sdk = gap + p.pouzdro_d
        else:
            y_sdk = p.room_length - gap - face_t - p.pouzdro_d
            y_pocket = p.room_length - gap - pocket_d
        sdk_parts.append(
            _box(gap, y_sdk, gap, p.room_width - 2 * gap, face_t, h, "sdk")
        )
        for gable, x0, width in p.pocket_doors:
            if gable != end:
                continue
            if x0 < p.room_width / 2.0:
                px0 = x0 + width + gap
            else:
                px0 = x0 - width + gap
            px0 = min(max(px0, gap), p.room_width - width - gap)
            pouzdra.append(_box(px0, y_pocket, gap, width - 2 * gap, pocket_d, h, "pouzdro"))

    # Walk-through openings only (not pouzdro bays).
    door_cutters = _pocket_door_cutters(p, g, gap)
    sdk_parts = _cut_wall_openings(sdk_parts, door_cutters)
    return pouzdra + sdk_parts


def _glass_panes(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Thin glass fills in the X=0 eave openings."""
    panes = []
    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    for y0, width in p.eave_windows:
        panes.append(
            _box(
                x_glass,
                y0 + gap,
                gap,
                p.glass_t,
                width - 2 * gap,
                p.window_h - gap,
                "sklo",
            )
        )
    return panes


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    gap = FACE_GAP
    # Room-clear eave run: gable plaster owns y∈[-plaster,0] and [L, L+plaster].
    y0, y1 = gap, p.room_length - gap
    ey = y1 - y0
    structure: list = []

    # --- Floor: clear slab only (walls own the perimeter strip below z=0). ---
    structure.append(
        _box(gap, gap, -p.floor_t, p.room_width - 2 * gap, p.room_length - 2 * gap, p.floor_t, "podlaha")
    )

    # --- Eave walls (panel A): mid-span only. Layer stack outside → inside. ---
    structure.append(
        _box(g.xl_eps, y0, -p.floor_t, p.wall_eps - gap, ey, p.eave_wall_z + p.floor_t, "eps")
    )
    structure.append(
        _box(g.xl_mas, y0, -p.floor_t, p.wall_mason - gap, ey, p.eave_wall_z + p.floor_t, "zdivo")
    )
    structure.append(_box(-p.wall_plaster, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, "omitka"))

    structure.append(_box(p.room_width, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, "omitka"))
    structure.append(
        _box(
            p.room_width + p.wall_plaster + gap,
            y0,
            -p.floor_t,
            p.wall_mason - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            "zdivo",
        )
    )
    structure.append(
        _box(
            g.xr_mas + gap,
            y0,
            -p.floor_t,
            p.wall_eps - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            "eps",
        )
    )

    # Wall plates sit on masonry (not on plaster), clear of gables.
    structure.append(
        _box(g.poz_l0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, "pozednice")
    )
    structure.append(
        _box(g.poz_r0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, "pozednice")
    )

    # --- Gable walls (panel B): full X, own the corners; interior shells only (no EPS). ---
    for ya, yb in (
        (g.yl_mas, -p.wall_plaster - gap),
        (p.room_length + p.wall_plaster + gap, g.yr_mas),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), "zdivo"), ya, yb, "zdivo"
            )
        )
    for ya, yb in (
        (-p.wall_plaster, -gap),
        (p.room_length + gap, p.room_length + p.wall_plaster),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), "omitka"), ya, yb, "omitka"
            )
        )

    door_cutters = _pocket_door_cutters(p, g, gap)
    window_cutters = _eave_window_cutters(p, g, gap)
    structure = _cut_wall_openings(structure, door_cutters + window_cutters)

    # Cutters: everything the roof must not occupy (walls, plates).
    roof_cutters = [s for s in structure if s.label != "podlaha"]

    # --- Roof: krytina above krov above vata; thinned, then notched around walls. ---
    krov_pts = _shrink_band(g.krov_pts(), top_n=3, gap=gap)
    krytina_pts = [(x, z + gap if i < 3 else z) for i, (x, z) in enumerate(g.krytina_pts())]
    vata_pts = [
        (min(max(x, gap), p.room_width - gap), z + gap if i < 4 else z - gap)
        for i, (x, z) in enumerate(g.vata_pts())
    ]

    krov = _cut_away(
        _extrude_y(xz_face(krov_pts, "krov"), g.y_roof0, g.y_roof1, "krov"),
        roof_cutters,
        "krov",
    )
    krytina = _cut_away(
        _extrude_y(xz_face(krytina_pts, "krytina"), g.y_roof0, g.y_roof1, "krytina"),
        roof_cutters,
        "krytina",
    )
    # Vata is the attic fill: keep it inside the room and clear of předstěny later.
    vata = _extrude_y(xz_face(vata_pts, "vata"), gap, p.room_length - gap, "vata")

    parts: list = list(structure)
    parts.extend(_glass_panes(p, g, gap))
    parts.extend([krov, krytina, vata])

    # --- Šikminy + soffit: NaturHeld face, latový rost, Flex between latě. ---
    # Y-span matches the clear bay between předstěny (they own the gable ends).
    y_ceil0, y_ceil1 = g.y_furn0 + gap, g.y_furn1 - gap

    def _add_band(pts: list[tuple[float, float]], label: str):
        band = _shrink_closed_band(pts, gap)
        return _extrude_y(xz_face(band, label), y_ceil0, y_ceil1, label)

    # Slopes: NaturHeld 140 → rost + Flex 50 → GKF (MW plenum already in `vata`).
    parts.append(_add_band(g.sikmina_nh_pts(), LABEL_NATURHELD))

    rost_parts: list = []
    for quad in g.sikmina_batten_quads():
        rost_parts.append(_extrude_y(xz_face(quad, LABEL_ROST), y_ceil0, y_ceil1, LABEL_ROST))
    flex_slope = _add_band(g.sikmina_flex_pts(), LABEL_FLEX)
    if rost_parts:
        flex_slope = _cut_away(flex_slope, rost_parts, LABEL_FLEX)
    parts.append(flex_slope)
    parts.extend(rost_parts)
    parts.append(_add_band(g.sikmina_sdk_pts(), "sdk"))

    # Self-supporting soffit box over cabinets (nábytek nenosí; 20 mm gap).
    t = g.t_nh_face
    soffit_nh = [
        (g.x_nh_outer + gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, g.z_nabeh_bot + t - gap),
        (g.x_nh_inner - gap, g.z_gkf_horiz - gap),
        (g.x_nh_outer + gap, g.z_gkf_horiz - gap),
    ]
    parts.append(_extrude_y(xz_face(soffit_nh, LABEL_NATURHELD), y_ceil0, y_ceil1, LABEL_NATURHELD))

    flex_box = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, g.z_nabeh_bot + t + gap),
        (p.room_width - gap, g.z_gkf_horiz - gap),
        (g.x_nh_inner + gap, g.z_gkf_horiz - gap),
    ]
    flex_solid = _extrude_y(xz_face(flex_box, LABEL_FLEX), y_ceil0, y_ceil1, LABEL_FLEX)

    lid = [
        (g.x_furn + gap, g.z_gkf_horiz + gap),
        (p.room_width - gap, g.z_gkf_horiz + gap),
        (p.room_width - gap, g.z_gkf_horiz + p.sdk_t - gap),
        (g.x_furn + gap, g.z_gkf_horiz + p.sdk_t - gap),
    ]
    if p.sdk_t > 2 * gap:
        parts.append(_extrude_y(xz_face(lid, "sdk"), y_ceil0, y_ceil1, "sdk"))

    # Dřevěný rošt inside the soffit Flex cavity: front stud, bottom rail, ribs @625.
    fm = p.rost_d
    fw = p.rost_w
    z_wood0 = g.z_nabeh_bot + t + gap
    z_wood1 = g.z_gkf_horiz - gap
    frame_parts: list = []
    if z_wood1 - z_wood0 > fm + gap and p.room_width - g.x_nh_inner > 2 * fm:
        frame_parts.append(
            _box(
                g.x_nh_inner + gap,
                y_ceil0,
                z_wood0,
                fm - gap,
                y_ceil1 - y_ceil0,
                max(z_wood1 - z_wood0 - gap, gap),
                LABEL_ROST,
            )
        )
        rail_w = p.room_width - gap - (g.x_nh_inner + fm) - 15.0
        if rail_w > gap:
            frame_parts.append(
                _box(
                    g.x_nh_inner + fm,
                    y_ceil0,
                    z_wood0,
                    rail_w,
                    y_ceil1 - y_ceil0,
                    fm - gap,
                    LABEL_ROST,
                )
            )
        rib_len = min(180.0, (p.room_width - g.x_nh_inner) * 0.4)
        rib_z = z_wood0 + (z_wood1 - z_wood0) * 0.45
        rib_h = max(fm * 0.7 - gap, gap)
        y = y_ceil0 + p.rost_first_inset
        while y + fw < y_ceil1:
            frame_parts.append(
                _box(
                    g.x_nh_inner + fm,
                    y,
                    rib_z,
                    rib_len,
                    fw - gap,
                    rib_h,
                    LABEL_ROST,
                )
            )
            y += p.rost_spacing
    if frame_parts:
        flex_solid = _cut_away(flex_solid, frame_parts, LABEL_FLEX)
        parts.append(flex_solid)
        parts.extend(frame_parts)
    else:
        parts.append(flex_solid)

    # --- Cabinets: clear of right plaster; top leaves furniture_gap under the box. ---
    furn_w = p.furniture_width - gap
    furn_y0, furn_y1 = g.y_furn0 + gap, g.y_furn1 - gap
    parts.append(
        _box(g.x_furn, furn_y0, 0.0, furn_w, furn_y1 - furn_y0, p.furniture_height, "nabytek")
    )

    # --- Předstěny + pouzdra: inset from plaster and from each other. ---
    pred_pts = []
    for i, (x, z) in enumerate(g.predstena_pts()):
        x = min(max(x, gap), p.room_width - gap)
        z = z + gap if i < 2 else z - gap
        pred_pts.append((x, z))
    pred = xz_face(pred_pts, "predstena")
    pred_k = _extrude_y(pred, gap, p.predstena_kitchen - gap, "predstena")
    pred_l = _extrude_y(pred, g.y_pred_r + gap, p.room_length - gap, "predstena")
    parts.extend([pred_k, pred_l])

    # Attic wool stops at the předstěny (they own that bay).
    vata_cut = _cut_away(vata, [pred_k, pred_l], "vata")
    parts[parts.index(vata)] = vata_cut

    parts.extend(_gable_sdk_and_pouzdra(p, g, gap))
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
            "face_gap": FACE_GAP,
        },
    }


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    return _compound(_parts(p, g)), _meta(p, g)


def build_preview(params: ObyvakParams | None = None):
    """Dollhouse cutaway: drop roof and furniture eave — keep window wall + both gables."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    kept = []
    for part in _parts(p, g):
        bb = part.bounding_box()
        if part.label in {"krov", "krytina", "vata"}:
            continue
        if part.label == LABEL_ROST and bb.min.X < g.x_furn - 1.0:
            # Slope latě go with the attic pack; keep soffit-box rost.
            continue
        if part.label in {LABEL_NATURHELD, LABEL_FLEX}:
            # Keep the cabinet soffit L / Flex; drop slope acoustic pack.
            if bb.min.X >= g.x_furn - 1.0:
                kept.append(part)
            continue
        if part.label == LABEL_ROST and bb.min.X >= g.x_furn - 1.0:
            kept.append(part)
            continue
        if part.label == "sdk" and bb.min.Z >= g.h_start - 50.0:
            # Slope / lid GKF is roof pack — drop with the attic; keep gable pocket SDK.
            continue
        if part.label in {"eps", "zdivo", "omitka", "pozednice", "nabytek"}:
            # Open the cabinet eave only; keep gables so pocket doors read correctly.
            if bb.min.X >= p.room_width - 1.0:
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


def scenes(params: ObyvakParams | None = None) -> list[dict]:
    """Named WebGL viewer scenes (see blueprints.scenes).

    Soffit: orthographic cross-section of the cabinet soffit. GLB is glTF Y-up
    (CAD Z→Y, CAD Y→−Z). Cut along room length from the kitchen gable; camera
    looks straight along that axis at the soffit with Y up.
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    gap = FACE_GAP
    # Match the soffit box bay (cabinet run, NH L + Flex cavity).
    sx0, sx1 = g.x_furn, g.x_furn + p.furniture_width
    sy0, sy1 = g.y_furn0 + gap, g.y_furn1 - gap
    sz0 = g.z_nabeh_bot + gap
    sz1 = g.z_gkf_horiz - gap
    cx = 0.5 * (sx0 + sx1)
    cy = 0.5 * (sy0 + sy1)
    cz = 0.5 * (sz0 + sz1)
    # View plane is glTF XY (= CAD X width × CAD Z height).
    pad = 1.25
    frame_x0 = g.x_furn - 250.0
    frame_x1 = p.room_width + p.wall_plaster + 50.0
    frame_z0 = p.furniture_height - 150.0
    frame_z1 = g.z_gkf_horiz + 200.0
    half_w = 0.5 * (frame_x1 - frame_x0) * pad * 0.001
    half_h = 0.5 * (frame_z1 - frame_z0) * pad * 0.001
    dist_m = max(half_w, half_h, 0.35) * 5.0
    target = cad_mm_to_gltf_m((cx, cy, cz))
    # CAD +Y (kitchen→living) → glTF −Z. Camera on the kitchen side.
    look = (0.0, 0.0, -1.0)
    position = [
        target[0] - look[0] * dist_m,
        target[1] - look[1] * dist_m,
        target[2] - look[2] * dist_m,
    ]
    return [
        {
            "id": "soffit",
            "label": "Soffit",
            "camera": {
                "target": target,
                "position": position,
                "up": [0.0, 1.0, 0.0],
                "orthoFit": [half_w, half_h],
            },
            "projection": "ortho",
            "cuts": [{"normal": list(look), "t": 0.5}],
            "opacity": {LABEL_FLEX: 1, LABEL_NATURHELD: 1, LABEL_ROST: 1, "omitka": 1},
            "opacityDefault": 0.5,
        }
    ]


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
