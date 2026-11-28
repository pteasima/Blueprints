"""Kitchen-run solids and cabinet opening motions."""
from __future__ import annotations

import math

from build123d import (
    Align,
    Box,
    Compound,
    Cylinder,
    Edge,
    Face,
    Plane,
    Polygon,
    Pos,
    RectangleRounded,
    Wire,
    extrude,
)

from blueprints.scenes import cad_mm_to_gltf_m

from .constants import (
    GRIDFINITY_ON_DEMAND,
    LABEL_APPLIANCE,
    LABEL_CABINET,
    LABEL_GRIDFINITY,
    LABEL_CONTENTS,
    LABEL_HOB,
    LABEL_OAK,
    LABEL_SINK,
    LABEL_WORKTOP,
    MESH_GAP_MM,
)
from .paint import _color, _paint, _tag

import drawer_contents


def _void_solid(void, z0: float, z1: float):
    """A worktop cut-out as a solid, run frame mm (rounded corners if any).
    A radius of half the shorter side is a circle (intake holes)."""
    w, d = void.a1 - void.a0, void.c1 - void.c0
    pos = Pos((void.a0 + void.a1) / 2.0, (void.c0 + void.c1) / 2.0, z0)
    h = z1 - z0
    if void.radius > 0 and void.radius * 2 >= min(w, d) - 1e-6:
        return pos * Cylinder(min(w, d) / 2.0, h, align=(Align.CENTER, Align.CENTER, Align.MIN))
    if void.radius > 0:
        return pos * extrude(RectangleRounded(w, d, void.radius), amount=h)
    return pos * Box(w, d, h, align=(Align.CENTER, Align.CENTER, Align.MIN))


def _cut_solid(tri, c0: float, c1: float):
    """A mitre cut (``Part.cuts``): the (a, z) triangle through c0..c1 (+1 mm)."""
    plane = Plane(origin=(0.0, c1 + 1.0, 0.0), x_dir=(1.0, 0.0, 0.0), z_dir=(0.0, -1.0, 0.0))
    # Explicit direction: the face normal flips with the triangle's winding.
    return extrude(plane * Polygon(*tri, align=None), amount=c1 - c0 + 2.0, dir=(0.0, -1.0, 0.0))


def _run_box(box, shrink: float):
    a0, a1, c0, c1, z0, z1 = box
    return Pos(a0 + shrink, c0 + shrink, z0 + shrink) * Box(
        a1 - a0 - 2 * shrink, c1 - c0 - 2 * shrink, z1 - z0 - 2 * shrink, align=(Align.MIN,) * 3
    )


def _grip_solid(grip):
    """A ``kitchen_cabinet.Grip`` prism (run frame mm): its outline extruded
    along a (points (c, z)) or z (points (a, c))."""
    if grip.axis == "a":
        plane = Plane(origin=(grip.s0, 0.0, 0.0), x_dir=(0.0, 1.0, 0.0), z_dir=(1.0, 0.0, 0.0))
    else:
        plane = Plane(origin=(0.0, 0.0, grip.s0), x_dir=(1.0, 0.0, 0.0), z_dir=(0.0, 0.0, 1.0))
    # Exact lines and arcs, so the rounded J is a smooth (cylindrical) face:
    # smooth normals and no tessellation edges under the viewer's crease angle.
    edges = []
    for seg in grip.segments:
        pts = [plane.from_local_coords((x, y)) for x, y in seg]
        edges.append(Edge.make_line(*pts) if len(pts) == 2 else Edge.make_three_point_arc(*pts))
    wire = Wire(edges)
    return extrude(Face(wire), amount=grip.s1 - grip.s0, dir=plane.z_dir)


def _kitchen_run_parts(run, motions=None, layers: dict | None = None) -> list:
    """Solids for one kitchen run (docs/design/kitchen-cabinets.md).

    Every part is its own mesh named by its part id, so the viewer can hide
    a divider with either neighbouring bay. Boxes shrink by half the mesh
    gap so touching boards do not share a face. A drawer is fused unshrunk
    (the viewer moves it as one connected mesh) and set back half a gap.

    With ``layers`` (a dict), a drawer's Gridfinity baseplate is not fused
    into it but goes, as its own ``gridfinity`` solid named by the drawer
    id, into ``layers["gridfinity"]`` (an on-demand GLB; the viewer hangs
    it on the drawer). Filled-drawer items go in ``layers["contents"]``
    the same way, named ``<drawer>-CONTENTS`` so they slide with the
    drawer and the inspector can hide ``GRP-DRAWER-CONTENTS``.
    """
    frame = run.frame
    plane = Plane(origin=(frame.ox, frame.oy, 0.0), x_dir=(frame.ux, frame.uy, 0.0), z_dir=(0.0, 0.0, 1.0))
    half = MESH_GAP_MM / 2.0
    linkages: dict[str, list] = {}
    out = []
    for part in run.parts:
        placed = None
        if part.drawer is not None:
            dr = part.drawer
            plate = list(dr.baseplate) if layers is not None else []
            boxes = list(part.boxes)
            for box in plate:
                boxes.remove(box)
            inward = -dr.out * half
            if part.role in ("Drawer", "PullOut") and len(boxes) > 1:
                # Petr, 2026-11-23 (t866u): the MERIVOBOX hardware is Blum
                # silk white (SW-M), not the cream of the fronts. The decor
                # front and the box (sides, back, bottom, inner pieces, or
                # the bin frame) are two painted children of one drawer
                # node, so the viewer still moves them as one; the box
                # child's id ends in -BOX for the material catalogue.
                # A dock front=notch inserts the cream legs either side of
                # the opening at boxes[1:1] (same c-range as the front).
                # Those stay with the cream front, not the white -BOX child
                # (t931u: the "white ears" either side of the Dreame dock).
                front_boxes, body_boxes = _front_plane_boxes(boxes)
                front = _run_box(front_boxes[0], 0.0)
                for box in front_boxes[1:]:
                    front = front + _run_box(box, 0.0)
                for grip in part.grips:  # the routed J grip (FrontGrip)
                    front = front - _grip_solid(grip)
                front_part = _paint(plane * (Pos(0.0, inward, 0.0) * front), LABEL_CABINET)
                front_part.element_id = part.id
                if body_boxes:
                    body = _run_box(body_boxes[0], 0.0)
                    for box in body_boxes[1:]:
                        body = body + _run_box(box, 0.0)
                    box_part = _paint(plane * (Pos(0.0, inward, 0.0) * body), LABEL_CABINET)
                    box_part.element_id = f"{part.id}-BOX"
                    placed = Compound(children=[front_part, box_part])
                else:
                    placed = front_part
                placed.label = LABEL_CABINET
                placed.color = _color(LABEL_CABINET)
                solid = None
            elif part.shape == "cylinder":
                # The kitchen machine's bowl riding its inner drawer (t889u).
                a0, a1, c0, c1, z0, z1 = boxes[0]
                solid = Pos((a0 + a1) / 2.0, (c0 + c1) / 2.0 + inward, z0) * Cylinder(
                    min(a1 - a0, c1 - c0) / 2.0, z1 - z0, align=(Align.CENTER, Align.CENTER, Align.MIN)
                )
            else:
                solid = _run_box(boxes[0], 0.0)
                for box in boxes[1:]:
                    solid = solid + _run_box(box, 0.0)
                for grip in part.grips:  # the routed J grip (FrontGrip)
                    solid = solid - _grip_solid(grip)
                solid = Pos(0.0, inward, 0.0) * solid
            if plate:
                # The floor and ribs as one compound, not fused: the same
                # picture (one material, the overlaps are inside) at about a
                # fifth of the faces (2026-11-20 d: with the inner drawers'
                # plates the fused layer was over its budget, Performance.md).
                plate_solid = Compound(obj=[_run_box(box, 0.0) for box in plate])
                plate_solid = Pos(0.0, inward, 0.0) * plate_solid
                layers.setdefault(LABEL_GRIDFINITY, []).append(
                    _tag(_paint(plane * plate_solid, LABEL_GRIDFINITY), part.id, "systemFurniture")
                )
            if layers is not None:
                for solid in drawer_contents.solids_for(part, dr, plane, inward):
                    layers.setdefault(LABEL_CONTENTS, []).append(solid)
        elif part.door is not None:
            # A cabinet door leaf and its door racks: fused unshrunk into one
            # connected mesh the viewer swings about its hinge.
            solid = _run_box(part.boxes[0], 0.0)
            for box in part.boxes[1:]:
                solid = solid + _run_box(box, 0.0)
            for grip in part.grips:  # the routed J grip (FrontGrip)
                solid = solid - _grip_solid(grip)
        elif part.shape == "cylinder":
            a0, a1, c0, c1, z0, z1 = part.boxes[0]
            solid = Pos((a0 + a1) / 2.0, (c0 + c1) / 2.0, z0 + half) * Cylinder(
                (a1 - a0) / 2.0 - half, z1 - z0 - 2 * half, align=(Align.CENTER, Align.CENTER, Align.MIN)
            )
        else:
            pieces = [_run_box(box, half) for box in part.boxes]
            solid = pieces[0] if len(pieces) == 1 else Compound(obj=pieces)
            z0, z1 = part.boxes[0][4], part.boxes[0][5]
            for void in part.voids:
                if not void.depth:
                    bottom, top = z0 - 1.0, z1 + 1.0
                elif getattr(void, "underside", False):
                    bottom, top = z0 - 1.0, z0 + void.depth
                else:
                    bottom, top = z1 - void.depth, z1 + 1.0
                solid = solid - _void_solid(void, bottom, top)
            for cut in part.cuts:
                solid = solid - _cut_solid(cut, part.boxes[0][2], part.boxes[0][3])
            if part.grips:  # a decor panel's J grip (t865u), one unshrunk slab
                solid = _run_box(part.boxes[0], 0.0)
                for grip in part.grips:
                    solid = solid - _grip_solid(grip)
        label = {"worktop": LABEL_WORKTOP, "hob": LABEL_HOB, "appliance": LABEL_APPLIANCE,
                 "sink": LABEL_SINK, "oak": LABEL_OAK}.get(part.label, LABEL_CABINET)
        list_key = {"appliance": "electricAppliances", "sink": "sanitaryTerminals"}.get(part.label, "systemFurniture")
        out.append(_tag(placed if placed is not None else _paint(plane * solid, label), part.id, list_key))
        if motions is None:
            continue
        if part.lift is not None:
            linkages.setdefault(part.lift.group, []).append(part)
            continue
        if part.door is not None:
            motions.append(_cabinet_door_motion(frame, part))
            continue
        if part.drawer is None:
            continue
        dr = part.drawer
        a = (min(b[0] for b in part.boxes) + max(b[1] for b in part.boxes)) / 2.0
        c = (min(b[2] for b in part.boxes) + max(b[3] for b in part.boxes)) / 2.0 - dr.out * half
        z = (min(b[4] for b in part.boxes) + max(b[5] for b in part.boxes)) / 2.0
        centre = frame.world(a, c, z)
        moved = frame.world(a, c + dr.out * dr.extension, z)
        cg = cad_mm_to_gltf_m(centre)
        mg = cad_mm_to_gltf_m(moved)
        record = {
            "id": part.id,
            "kind": "drawer",
            "element": part.id,
            "center": [round(v, 6) for v in cg],
            "slide": [round(q - p, 6) + 0.0 for p, q in zip(cg, mg)],
        }
        if part.props.get("InnerDrawer"):
            # Standing in an inner drawer (the sealer, the Kenwood; Petr,
            # t889u): no motion of its own, it rides that drawer (doors.js
            # ``attachRiders``): it slides with it and a tap drives it.
            record["rides"] = part.props["InnerDrawer"]
        elif part.props.get("Parent"):
            # An inner drawer (2026-11-20 c): opens only with its front open;
            # ``coupled`` (Blum ZI7.0M07) opens with the front. doors.js.
            record["parent"] = part.props["Parent"]
            record["coupled"] = bool(part.props.get("Latched"))
        motions.append(record)
    if motions is not None:
        for group, members in linkages.items():
            motions.append(_linkage_motion(frame, group, members))
    return out


# A lift front takes longer to open than a door swings (doors.js DOOR_SWING_MS).
LINKAGE_MS = 900



def _front_plane_boxes(boxes):
    """Split a drawer's boxes into the cream decor front and the box behind.

    Boxes that share the first box's c-range (the front plane, within 1 mm)
    stay cream. That includes the two legs a dock ``front=notch`` inserts
    at ``boxes[1:1]`` either side of the opening. Deeper boxes (MERIVOBOX
    sides, back, bottom, inners) are the white ``-BOX`` child.
    """
    front = boxes[0]
    cream, body = [], []
    for box in boxes:
        if abs(box[2] - front[2]) <= 1.0 and abs(box[3] - front[3]) <= 1.0:
            cream.append(box)
        else:
            body.append(box)
    return cream, body


def _linkage_motion(frame, group: str, members: list) -> dict:
    """A ``kind: "linkage"`` record (the viewer's doors.js): a lift front,
    its folding lower front and its lever arms, each a joint turning about
    a line, angles sampled from shut to open (``kitchen_cabinet.LiftJoint``).

    ``pivot`` is a point on the joint's line and ``axis`` its direction,
    glTF metres, as built (shut). A positive angle is a right-handed turn
    about ``axis``, relative to the ``parent`` joint (null: the model). An
    optional ``stretch`` scales the part along ``along`` (a direction from
    the pivot, shut) by ``scales``, one per angle (a telescoping arm). Each
    element names a part mesh and its shut bbox centre, to find it.
    """
    def _member_key(p):
        # The Door / Front (or the part whose id is the group) first, so
        # record.element and the viewer's binding.host — the extended tap
        # target — are the front, not a later-sorted bin or hook plate.
        is_front = 0 if (p.id == group or p.role in ("Door", "Front")) else 1
        return (p.lift.index, is_front, p.id)

    joints: dict[int, dict] = {}
    for part in sorted(members, key=_member_key):
        lj = part.lift
        boxes = part.boxes
        a = (min(b[0] for b in boxes) + max(b[1] for b in boxes)) / 2.0
        c = (min(b[2] for b in boxes) + max(b[3] for b in boxes)) / 2.0
        z = (min(b[4] for b in boxes) + max(b[5] for b in boxes)) / 2.0
        element = {"element": part.id, "center": [round(v, 6) + 0.0 for v in cad_mm_to_gltf_m(frame.world(a, c, z))]}
        if lj.index in joints:
            joints[lj.index]["elements"].append(element)
            continue
        p0 = cad_mm_to_gltf_m(frame.world(a, lj.pivot_c, lj.pivot_z))
        # Down (−z) turned towards out (+c·out) by a positive angle: axis = down × out.
        o0 = frame.world(a, lj.pivot_c, lj.pivot_z)
        o1 = frame.world(a, lj.pivot_c + lj.out * 1000.0, lj.pivot_z)
        ox, oy = o1[0] - o0[0], o1[1] - o0[1]
        n = math.hypot(ox, oy)
        kx, ky = oy / n, -ox / n  # (0, 0, -1) × (ox, oy, 0)
        tip = cad_mm_to_gltf_m((o0[0] + kx * 1000.0, o0[1] + ky * 1000.0, o0[2]))
        axis = [round(q - p, 6) + 0.0 for p, q in zip(p0, tip)]
        joints[lj.index] = {
            "elements": [element],
            "parent": lj.parent,
            "pivot": [round(v, 6) + 0.0 for v in p0],
            "axis": axis,
            "angles": [round(v, 6) + 0.0 for v in lj.angles],
        }
        if lj.stretch is not None:
            down = cad_mm_to_gltf_m((o0[0], o0[1], o0[2] - 1000.0))
            joints[lj.index]["stretch"] = {
                "along": [round(q - p, 6) + 0.0 for p, q in zip(p0, down)],
                "scales": [round(v, 6) + 0.0 for v in lj.stretch],
            }
    order = sorted(joints)
    # Parents are named by joint index in the model; in the record, by
    # position in ``joints``.
    place = {index: k for k, index in enumerate(order)}
    out = []
    for index in order:
        j = joints[index]
        j["parent"] = None if j["parent"] is None else place[j["parent"]]
        out.append(j)
    first = out[0]["elements"][0]
    return {
        "id": group,
        "kind": "linkage",
        "element": first["element"],
        "center": first["center"],
        "duration_ms": LINKAGE_MS,
        "joints": out,
    }


def _cabinet_door_motion(frame, part) -> dict:
    """A hinged record for a cabinet door (the viewer's doors.js).

    The hinge line is the leaf's hinge edge on its outer face; the leaf
    swings outward, away from the carcass. The sign is the rotation about
    glTF +Y that takes the leaf's direction (hinge to free edge) towards
    its outward normal.
    """
    leaf = part.door
    a0, a1, c0, c1, z0, z1 = part.boxes[0]
    # The mesh is the leaf and its racks; the viewer finds it by its bbox centre.
    boxes = part.boxes
    a = (min(b[0] for b in boxes) + max(b[1] for b in boxes)) / 2.0
    c = (min(b[2] for b in boxes) + max(b[3] for b in boxes)) / 2.0
    z = (min(b[4] for b in boxes) + max(b[5] for b in boxes)) / 2.0
    centre = cad_mm_to_gltf_m(frame.world(a, c, z))
    hinge = cad_mm_to_gltf_m(frame.world(leaf.hinge_a, leaf.face_c, z))
    free_a = a1 if abs(leaf.hinge_a - a0) < abs(leaf.hinge_a - a1) else a0
    free = cad_mm_to_gltf_m(frame.world(free_a, leaf.face_c, z))
    out = cad_mm_to_gltf_m(frame.world(leaf.hinge_a, leaf.face_c + leaf.out * 100.0, z))
    vx, vz = free[0] - hinge[0], free[2] - hinge[2]
    nx, nz = out[0] - hinge[0], out[2] - hinge[2]
    # A +90° turn about +Y maps (vx, vz) to (vz, -vx).
    sign = 1 if (vz * nx + -vx * nz) > 0 else -1
    return {
        "id": part.id,
        "kind": "hinged",
        "element": part.id,
        "center": [round(v, 6) for v in centre],
        "hinge": [round(v, 6) for v in hinge],
        "axis": [0, 1, 0],
        "sign": sign,
    }
