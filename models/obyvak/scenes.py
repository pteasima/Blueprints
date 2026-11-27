"""Viewer scenes: šikmina plates, bass-trap drawings, ties, and part groups."""

from __future__ import annotations

from obyvak_geom import (
    LABEL_BASS_ACRYLIC,
    LABEL_BASS_ANCHOR,
    LABEL_BASS_ANGLE,
    LABEL_BASS_CW,
    LABEL_BASS_GKB,
    LABEL_BASS_STRUT,
    LABEL_BASS_TAPE,
    LABEL_BASS_UW,
    LABEL_BASS_WOOL,
    LABEL_FURNITURE,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_POCKET_FRAME,
    LABEL_RAFTERS,
    LABEL_SLOPE_LIGHT,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKB,
    LABEL_SOFFIT_NH,
    LABEL_TIE_ROD,
    LABEL_WALL_GKF,
    LABEL_WALL_PLATE,
    ObyvakLayout,
    ObyvakParams,
    PART_GROUPS,
)

from .annotations import (
    _bass_stud_xs,
    _box_corners,
    _cad_of_gltf,
    _column_callouts,
    _cut,
    _dim,
    _frame_ortho,
    _look_between,
    _mm_cs,
    _ortho_pose,
    _sikmina_plates,
    _tx,
)
from .bass import bass_soffit_stop_x
from .solids import FACE_GAP


def _bass_view_scenes(p: ObyvakParams) -> list[dict]:
    """3/4 views of each trap. GKB is ghosted. A cut through an early stud
    opens the stack and keeps the soffit end in frame, so the stop reads.
    """
    z0, z1 = 2100.0, 5300.0
    # Normal +X keeps the cabinet side (Three.js clips the opposite half).
    cut_x = _bass_stud_xs(p, p.bass_stud_spacing)[2]
    opacity = {
        LABEL_BASS_CW: 1,
        LABEL_BASS_UW: 1,
        LABEL_BASS_STRUT: 1,
        LABEL_BASS_ANGLE: 1,
        LABEL_BASS_ANCHOR: 1,
        LABEL_BASS_TAPE: 1,
        LABEL_BASS_ACRYLIC: 1,
        LABEL_BASS_WOOL: 0.4,
        LABEL_BASS_GKB: 0.14,
        LABEL_PLASTER: 0.9,
        LABEL_MASONRY: 0.4,
        LABEL_WALL_GKF: 0.95,
        LABEL_POCKET_FRAME: 1,
        LABEL_SOFFIT_NH: 0.55,
        LABEL_SOFFIT_GKB: 0.4,
        LABEL_FURNITURE: 0.28,
    }

    def one(side: str, spacing: float, depth: float, y_wall: float, toward: float) -> dict:
        y_room = y_wall + toward * depth
        y_lo, y_hi = (min(y_wall, y_room) - 280.0, max(y_wall, y_room) + 80.0)
        corners = _box_corners(cut_x - 80.0, p.room_width + 80.0, y_lo, y_hi, z0, z1)
        # From the window side, slightly above: the cut stack, then the soffit stop.
        x_furn = p.room_width - p.furniture_width
        if toward > 0:
            eye = (-700.0, depth + 2800.0, 4800.0)
            aim = (0.62 * x_furn, depth * 0.55, 3400.0)
        else:
            eye = (-700.0, y_wall - 2800.0, 4800.0)
            aim = (0.62 * x_furn, y_wall - depth * 0.55, 3400.0)
        cam = _frame_ortho(_look_between(eye, aim), corners)
        cam_y = _cad_of_gltf(cam["position"])[1]
        # Drop the other gable on the far side of the camera so its cap is behind us.
        if toward > 0:
            far = _cut((0.0, 0.0, 1.0), (p.room_width * 0.5, cam_y + 1200.0, 3000.0))
        else:
            far = _cut((0.0, 0.0, -1.0), (p.room_width * 0.5, cam_y - 1200.0, 3000.0))
        title = (
            (
                f"Štít kuchyně — basová past\n{depth:g} mm, svislé CW {p.bass_k_cw:g} @ {spacing:g}",
                f"Štít kuchyně — basová past\n{depth:g} mm, svislé CW {p.bass_k_cw:g} @ {spacing:g}",
            )
            if side == "kitchen"
            else (
                f"Štít obýváku — basová past\n{depth:g} mm, svislé CW {p.bass_l_cw:g} @ {spacing:g}",
                f"Štít obýváku — basová past\n{depth:g} mm, svislé CW {p.bass_l_cw:g} @ {spacing:g}",
            )
        )
        return {
            "id": f"bass-{side}",
            "title": _tx(*title),
            "project": "Obývák 1.02",
            "camera": cam,
            "projection": "ortho",
            "edges": "transparent",
            "cuts": [
                _cut((1.0, 0.0, 0.0), (cut_x, y_wall, 3000.0)),
                far,
            ],
            "opacity": opacity,
            "opacityDefault": 0,
        }

    kitchen = one("kitchen", p.bass_stud_spacing, p.predstena_kitchen, p.room_length, -1.0)
    living = one("living", p.bass_stud_spacing, p.predstena_living, 0.0, 1.0)
    return [kitchen, living]


def _bass_elevation_scene(
    p: ObyvakParams,
    *,
    side: str,
    spacing: float,
    depth: float,
    y_face: float,
    look: tuple[float, float, float],
    cut_y: float,
    cut_normal: tuple[float, float, float],
    col_x: float,
    doors: list[tuple[float, float]],
) -> dict:
    """Straight elevation from the room. GKB is off so the vertical lattice shows."""
    studs = _bass_stud_xs(p, spacing)
    # Wide margin on the cabinet side (screen left for living, screen right for kitchen).
    # Room below the slab so the scale bar is not sitting on the floor.
    x0, x1 = -1100.0, 8900.0
    z0, z1 = -720.0, 5300.0
    pad_w, pad_h = 1.0, 1.04
    half_w = 0.5 * (x1 - x0) * 0.001 * pad_w
    half_h = 0.5 * (z1 - z0) * 0.001 * pad_h
    target = (0.5 * (x0 + x1), y_face, 0.5 * (z0 + z1))
    cam = _ortho_pose(target, look, (0.0, 1.0, 0.0), half_w, half_h)
    cw = p.bass_k_cw if side == "kitchen" else p.bass_l_cw
    x_furn = p.room_width - p.furniture_width
    module_line = spacing
    while module_line + spacing < bass_soffit_stop_x(p) - 0.5:
        module_line += spacing
    makeup = x_furn - module_line
    # Interior module, clear of both inset end studs.
    module_a = studs[2]
    module_b = studs[3]
    n_studs = len(studs)
    if side == "kitchen":
        title = (
            f"Štít kuchyně — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
            f"Štít kuchyně — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
        )
    else:
        title = (
            f"Štít obýváku — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
            f"Štít obýváku — basová past\nbez GKB, svislé CW {cw:g} @ {spacing:g}",
        )
    studs_note = (
        f"CW {cw:g} svisle\n"
        f"{n_studs} stojek @ {spacing:g}, krajní pole {makeup:g} mm k podhledu"
    )
    free_note = "Ke šikmině ani k podhledu nekotveno\nUW v 2450, páska pod profily"
    brace_note = "Odstřižky CW/UA na úhelník\nasi 1/3 a 2/3, kotva do zdiva"
    board_note = (
        f"GKB {p.bass_board_w:g}×{p.bass_board_l:g}, spáry na stojkách\n"
        f"akryl {p.bass_acrylic:g} mm ke šikmině a k podhledu"
    )
    notes = [
        ((0.35 * p.room_width, y_face, 4700.0), studs_note, studs_note),
        ((0.22 * p.room_width, y_face, 3600.0), free_note, free_note),
        ((0.62 * p.room_width, y_face, 3200.0), brace_note, brace_note),
        ((doors[0][0] + 0.5 * doors[0][1], y_face, 700.0), board_note, board_note),
    ]
    dims = [
        _dim(
            (module_a, y_face, 2680.0),
            (module_b, y_face, 2680.0),
            -0.045,
            f"{spacing:g} mm",
            f"{spacing:g} mm",
        ),
        _dim(
            (module_line, y_face, 2680.0),
            (x_furn, y_face, 2680.0),
            0.04,
            f"{makeup:g} mm",
            f"{makeup:g} mm",
        ),
    ]
    for x_door, width in doors:
        dims.append(
            _dim(
                (x_door, y_face, 1400.0),
                (x_door + width, y_face, 1400.0),
                0.04,
                f"{width:g} mm",
                f"{width:g} mm",
            )
        )
    return {
        "id": f"bass-{side}-elevation",
        "title": _tx(*title),
        "project": "Obývák 1.02",
        "camera": cam,
        "projection": "ortho",
        "edges": "opaque",
        "cuts": [_cut(cut_normal, (0.5 * p.room_width, cut_y, 3000.0))],
        "opacity": {
            LABEL_BASS_CW: 1,
            LABEL_BASS_UW: 1,
            LABEL_BASS_STRUT: 1,
            LABEL_BASS_ANGLE: 1,
            LABEL_BASS_ANCHOR: 1,
            LABEL_BASS_TAPE: 0.9,
            LABEL_BASS_WOOL: 0.22,
            LABEL_BASS_GKB: 0,
            LABEL_BASS_ACRYLIC: 1,
            LABEL_PLASTER: 1,
            LABEL_MASONRY: 0.45,
            LABEL_WALL_GKF: 1,
            LABEL_POCKET_FRAME: 1,
            LABEL_SOFFIT_NH: 0.72,
            LABEL_SOFFIT_GKB: 0.55,
            LABEL_FURNITURE: 0.35,
        },
        "opacityDefault": 0,
        "annotations": [
            *_column_callouts(
                notes, cam, look, col_x, [0.50, -0.40, 0.16, -0.62], size=0.82
            ),
            *dims,
        ],
    }


def _bass_section_scene(
    p: ObyvakParams,
    *,
    side: str,
    stud_x: float,
    y_wall: float,
    toward: float,
    depth: float,
    wool: float,
    air: float,
    gkb: float,
    cw: float,
    look: tuple[float, float, float],
    y0: float,
    y1: float,
    col_x: float,
) -> dict:
    """Vertical section through one stud. Layer thicknesses are the design stack."""
    z0, z1 = 2300.0, 4400.0
    pad_w, pad_h = 1.0, 1.04
    half_w = 0.5 * (y1 - y0) * 0.001 * pad_w
    half_h = 0.5 * (z1 - z0) * 0.001 * pad_h
    cam = _ortho_pose(
        (stud_x, 0.5 * (y0 + y1), 0.5 * (z0 + z1)),
        look,
        (0.0, 1.0, 0.0),
        half_w,
        half_h,
    )
    # Slab through the stud so the CW and a wall strut are in the cut.
    half = p.bass_cw_w * 0.5
    if look[0] < 0:
        cuts = [
            _cut((-1.0, 0.0, 0.0), (stud_x, y_wall, 3000.0)),
            _cut((1.0, 0.0, 0.0), (stud_x - half, y_wall, 3000.0)),
        ]
    else:
        cuts = [
            _cut((1.0, 0.0, 0.0), (stud_x, y_wall, 3000.0)),
            _cut((-1.0, 0.0, 0.0), (stud_x + half, y_wall, 3000.0)),
        ]
    y_wool = y_wall + toward * wool
    y_gkb_back = y_wall + toward * (depth - gkb)
    y_room = y_wall + toward * depth
    y_stud_back = y_gkb_back - toward * cw
    y_mas0 = y_wall - toward * p.wall_plaster
    y_mas1 = y_mas0 - toward * p.wall_mason

    def ymid(a: float, b: float) -> float:
        return 0.5 * (a + b)

    if side == "kitchen":
        title = (
            "Basová past kuchyně — řez\npřes svislou CW stojku",
            "Basová past kuchyně — řez\npřes svislou CW stojku",
        )
    else:
        title = (
            "Basová past obýváku — řez\npřes svislou CW stojku",
            "Basová past obýváku — řez\npřes svislou CW stojku",
        )
    wool_cs = _mm_cs(wool)
    air_cs = _mm_cs(air)
    gkb_cs = _mm_cs(gkb)
    masonry_note = f"Zdivo {p.wall_mason:g} + omítka {p.wall_plaster:g}"
    anchor_note = f"Odstřižek CW {cw:g} na úhelník\nkotva 60 mm do zdiva"
    wool_note = f"Minerální vata {wool_cs} mm"
    air_note = f"Vzduch {air_cs} mm, CW {cw:g}"
    gkb_note = f"GKB {gkb_cs} mm"
    notes = [
        ((stud_x, ymid(y_mas0, y_mas1), 3000.0), masonry_note, masonry_note),
        ((stud_x, y_wall + toward * 8.0, 2800.0), anchor_note, anchor_note),
        ((stud_x, ymid(y_wall, y_wool), 3400.0), wool_note, wool_note),
        ((stud_x, ymid(y_wool, y_gkb_back), 3750.0), air_note, air_note),
        ((stud_x, ymid(y_gkb_back, y_room), 4100.0), gkb_note, gkb_note),
    ]
    # Dimension the design planes (the 1 mm mate clearance is not a layer).
    dims = [
        _dim(
            (stud_x, y_mas1, 2420.0),
            (stud_x, y_mas0, 2420.0),
            -0.06,
            f"{p.wall_mason:g} mm",
            f"{p.wall_mason:g} mm",
        ),
        _dim(
            (stud_x, y_wall, 3000.0),
            (stud_x, y_wool, 3000.0),
            -0.05,
            f"{wool_cs} mm",
            f"{wool_cs} mm",
        ),
        _dim(
            (stud_x, y_wool, 3480.0),
            (stud_x, y_gkb_back, 3480.0),
            -0.05,
            f"{air_cs} mm",
            f"{air_cs} mm",
        ),
        _dim(
            (stud_x, y_wall, 3980.0),
            (stud_x, y_room, 3980.0),
            -0.07,
            f"{depth:g} mm",
            f"{_mm_cs(depth)} mm",
        ),
    ]
    return {
        "id": f"bass-{side}-section",
        "title": _tx(*title),
        "project": "Obývák 1.02",
        "camera": cam,
        "projection": "ortho",
        "edges": "opaque",
        "cuts": cuts,
        "opacity": {
            LABEL_BASS_CW: 1,
            LABEL_BASS_UW: 1,
            LABEL_BASS_STRUT: 1,
            LABEL_BASS_ANGLE: 1,
            LABEL_BASS_ANCHOR: 1,
            LABEL_BASS_TAPE: 1,
            LABEL_BASS_ACRYLIC: 1,
            LABEL_BASS_WOOL: 0.5,
            LABEL_BASS_GKB: 1,
            LABEL_PLASTER: 1,
            LABEL_MASONRY: 0.72,
        },
        "opacityDefault": 0,
        "annotations": [
            *_column_callouts(
                notes,
                cam,
                look,
                col_x,
                [-0.22, -0.48, 0.04, 0.30, 0.55],
                size=0.85,
            ),
            *dims,
        ],
    }


def _bass_drawing_scenes(p: ObyvakParams, g: ObyvakLayout) -> list[dict]:
    """Elevation (GKB off) and a stud section for each trap. Geometry is the 3D model."""
    living_doors = [(x0, width) for name, x0, width in p.pocket_doors if name == "living"]
    kitchen_doors = [(x0, width) for name, x0, width in p.pocket_doors if name == "kitchen"]
    # Label column sits in the cabinet-side margin (screen left on the living
    # elevation, screen right on the kitchen elevation).
    living_elev = _bass_elevation_scene(
        p,
        side="living",
        spacing=p.bass_stud_spacing,
        depth=p.predstena_living,
        y_face=p.predstena_living - p.bass_l_gkb * 0.5,
        look=(0.0, 0.0, 1.0),
        cut_y=p.predstena_living + 250.0,
        cut_normal=(0.0, 0.0, 1.0),
        col_x=-0.58,
        doors=living_doors,
    )
    kitchen_elev = _bass_elevation_scene(
        p,
        side="kitchen",
        spacing=625.0,
        depth=p.predstena_kitchen,
        y_face=g.y_pred_r + p.bass_k_gkb * 0.5,
        look=(0.0, 0.0, -1.0),
        cut_y=g.y_pred_r - 250.0,
        cut_normal=(0.0, 0.0, -1.0),
        col_x=0.58,
        doors=kitchen_doors,
    )
    # Section: wall on the left. Living looks toward −X; kitchen toward +X.
    living_sec = _bass_section_scene(
        p,
        side="living",
        stud_x=2500.0,
        y_wall=0.0,
        toward=1.0,
        depth=p.predstena_living,
        wool=p.bass_l_wool,
        air=p.bass_l_air,
        gkb=p.bass_l_gkb,
        cw=p.bass_l_cw,
        look=(-1.0, 0.0, 0.0),
        y0=-940.0,
        y1=650.0,
        col_x=-0.72,
    )
    kitchen_sec = _bass_section_scene(
        p,
        side="kitchen",
        stud_x=2500.0,
        y_wall=p.room_length,
        toward=-1.0,
        depth=p.predstena_kitchen,
        wool=p.bass_k_wool,
        air=p.bass_k_air,
        gkb=p.bass_k_gkb,
        cw=p.bass_k_cw,
        look=(1.0, 0.0, 0.0),
        y0=10745.0,
        y1=11930.0,
        col_x=-0.72,
    )
    return [kitchen_elev, kitchen_sec, living_elev, living_sec]


def scenes(params: ObyvakParams | None = None) -> list[dict]:
    """Named WebGL viewer scenes (see blueprints.scenes).

    Each scene owns its camera / cut / opacity recipe — values may match today
    (e.g. both ISO along living→kitchen) but are free to diverge later.

    GLB is glTF Y-up (CAD Z→Y, CAD Y→−Z). View plane for these length cuts is
    glTF XY (= CAD X width × CAD Z height).
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    gap = FACE_GAP

    # --- Soffit: orthographic cross-section zoomed on the cabinet soffit bay. ---
    sx0, sx1 = g.x_furn, g.x_furn + p.furniture_width
    sy0, sy1 = g.y_furn0 + gap, g.y_furn1 - gap
    sz0 = g.z_nabeh_bot + gap
    sz1 = g.z_soffit_cd_bot
    scx = 0.5 * (sx0 + sx1)
    scy = 0.5 * (sy0 + sy1)
    scz = 0.5 * (sz0 + sz1)
    spad = 1.25
    s_frame_x0 = g.x_furn - 250.0
    s_frame_x1 = g.poz_r0 + p.plate_w + 40.0
    s_frame_z0 = p.furniture_height - 150.0
    s_frame_z1 = g.z_plate_top + 180.0
    s_half_w = 0.5 * (s_frame_x1 - s_frame_x0) * spad * 0.001
    s_half_h = 0.5 * (s_frame_z1 - s_frame_z0) * spad * 0.001
    s_dist_m = max(s_half_w, s_half_h, 0.35) * 5.0
    s_target = cad_mm_to_gltf_m((scx, scy, scz))
    # CAD +Y (living gable → kitchen gable) → glTF −Z. Camera on the living side.
    s_look = (0.0, 0.0, -1.0)
    s_position = [
        s_target[0] - s_look[0] * s_dist_m,
        s_target[1] - s_look[1] * s_dist_m,
        s_target[2] - s_look[2] * s_dist_m,
    ]
    soffit = {
        "id": "soffit",
        "camera": {
            "target": s_target,
            "position": s_position,
            "up": [0.0, 1.0, 0.0],
            "orthoFit": [s_half_w, s_half_h],
        },
        "projection": "ortho",
        "cuts": [{"normal": list(s_look), "t": 0.5}],
        "opacity": {"soffit": 1, LABEL_PLASTER: 1},
        "opacityDefault": 0.5,
    }

    # --- Gable: full šikminy (eave↔eave), currently same ISO / look / cut idea. ---
    gy0, gy1 = g.y_furn0 + gap, g.y_furn1 - gap
    g_frame_x0 = -p.wall_plaster - 50.0
    g_frame_x1 = p.room_width + p.wall_plaster + 50.0
    g_frame_z0 = p.furniture_height - 150.0
    g_frame_z1 = p.ridge_z + 100.0
    gcx = 0.5 * (g_frame_x0 + g_frame_x1)
    gcy = 0.5 * (gy0 + gy1)
    gcz = 0.5 * (g_frame_z0 + g_frame_z1)
    gpad = 1.25
    g_half_w = 0.5 * (g_frame_x1 - g_frame_x0) * gpad * 0.001
    g_half_h = 0.5 * (g_frame_z1 - g_frame_z0) * gpad * 0.001
    g_dist_m = max(g_half_w, g_half_h, 0.35) * 5.0
    g_target = cad_mm_to_gltf_m((gcx, gcy, gcz))
    g_look = (0.0, 0.0, -1.0)
    g_position = [
        g_target[0] - g_look[0] * g_dist_m,
        g_target[1] - g_look[1] * g_dist_m,
        g_target[2] - g_look[2] * g_dist_m,
    ]
    gable = {
        "id": "gable",
        "camera": {
            "target": g_target,
            "position": g_position,
            "up": [0.0, 1.0, 0.0],
            "orthoFit": [g_half_w, g_half_h],
        },
        "projection": "ortho",
        "cuts": [{"normal": list(g_look), "t": 0.5}],
        "opacity": {"slopes": 1, LABEL_PLASTER: 1},
        "opacityDefault": 0.5,
    }
    return [
        soffit,
        gable,
        *_sikmina_plates(p, g),
        *_bass_view_scenes(p),
        *_bass_drawing_scenes(p, g),
        *_tie_scenes(p, g),
    ]


def _tie_scenes(p: ObyvakParams, g: ObyvakLayout) -> list[dict]:
    """Front (like the SketchUp view), plan, and one tie section.

    Front stands outside the window wall and looks across the length, slightly
    up, so both slopes and the foreshortened ties are in one shot. The plan
    hides the ceiling and shows where the six bars and the ten pairs sit.
    """
    from blueprints.scenes import cad_mm_to_gltf_m

    z = g.tie_axis_z(FACE_GAP)
    ys = g.tie_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_cut = min(ys, key=lambda y: abs(y - 0.5 * p.room_length))
    eye = cad_mm_to_gltf_m((-3200.0, 0.42 * p.room_length, 1500.0))
    aim = cad_mm_to_gltf_m((0.55 * p.room_width, 0.62 * p.room_length, z + 80.0))
    front = {
        "id": "ties-front",
        "title": _tx(
            "Táhla a světla — pohled",
            "Táhla a světla — pohled",
        ),
        "project": "Obývák 1.02",
        "hFovDeg": 72,
        "projection": "perspective",
        "camera": {"target": aim, "position": eye, "up": [0.0, 1.0, 0.0]},
        "cuts": [_cut((1.0, 0.0, 0.0), (80.0, 0.5 * p.room_length, z))],
        "opacity": {LABEL_TIE_ROD: 1, LABEL_SLOPE_LIGHT: 1},
        "opacityDefault": 1,
    }
    plan = {
        "id": "ties-plan",
        "title": _tx(
            "Táhla a světla — půdorys",
            "Táhla a světla — půdorys",
        ),
        "project": "Obývák 1.02",
        "projection": "ortho",
        "camera": _ortho_pose(
            (0.5 * p.room_width, 0.5 * p.room_length, z),
            (0.0, -1.0, 0.0),
            (0.0, 0.0, -1.0),
            0.5 * (p.room_width + 900.0) * 0.001,
            0.5 * (p.room_length + 900.0) * 0.001,
        ),
        "opacityDefault": 0,
        "opacity": {
            LABEL_TIE_ROD: 1,
            LABEL_SLOPE_LIGHT: 1,
            LABEL_RAFTERS: 0.45,
            LABEL_WALL_PLATE: 0.9,
        },
    }
    section = {
        "id": "ties-section",
        "title": _tx(
            "Táhlo — řez jednou tyčí",
            "Táhlo — řez jednou tyčí",
        ),
        "project": "Obývák 1.02",
        "projection": "ortho",
        "camera": _ortho_pose(
            (0.5 * p.room_width, y_cut, 0.5 * (2400.0 + p.ridge_z)),
            (0.0, 0.0, -1.0),
            (0.0, 1.0, 0.0),
            0.5 * (g.right_eave - g.left_eave + 400.0) * 0.001,
            0.5 * (p.ridge_z - 2000.0) * 0.001,
        ),
        "cuts": [
            _cut((0.0, 0.0, -1.0), (0.5 * p.room_width, y_cut - 30.0, z)),
            _cut((0.0, 0.0, 1.0), (0.5 * p.room_width, y_cut + 30.0, z)),
        ],
        "opacityDefault": 0.2,
        "opacity": {
            LABEL_TIE_ROD: 1,
            LABEL_SLOPE_LIGHT: 1,
            LABEL_RAFTERS: 1,
            LABEL_WALL_PLATE: 1,
            LABEL_SOFFIT_DUCT: 1,
            LABEL_MASONRY: 1,
            LABEL_PLASTER: 1,
        },
    }
    return [front, plan, section]


def part_groups() -> list[dict]:
    """Nested Parts outline (ids only). Viewer localizes group/leaf labels."""
    return PART_GROUPS
