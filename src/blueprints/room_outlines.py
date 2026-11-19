"""Room floor outlines for the viewer's room isolate.

Petr, 2026-11-19 (Cody chat): "Proceed on "hide/show other rooms" shortcut.
Either based on camera position or camera target." The IFC has 22
``IfcSpace`` with no geometry, so the viewer cannot tell which room the
camera is in. This module traces each room's floor outline from the wall
footprints, in plan metres (IFC x, y), and writes it next to the index in
``<model>.ifc.json`` as ``rooms``. No IFC geometry is added.

How (docs/viewer/RoomIsolate.md):

1. The wall footprints (``yaml_ifc.footprints``) are unioned. A wall with
   no footprint (W-017, no thickness) gets the same 50 mm band the model
   builds for it. Doorways need no help here: an opening is cut only in 3D,
   so a wall's plan footprint already runs across its doors and windows.
2. Gaps between walls that do not meet (passages with no door, short
   misalignments in the drawing) are closed two ways: a morphological
   closing (grow every wall by ``close_radius``, then shrink it back),
   which shuts gaps narrower than twice that radius, and hand-drawn
   closing lines for the wider ones (``closures``, each with a reason).
3. The holes of that union are the rooms. Each hole is named by the
   ``ContainedInStructure`` of the yaml products whose ``Origin`` falls
   inside it (majority vote). A space with no hole of its own takes the
   nearest unnamed hole within 0.3 m of one of its products (a product
   drawn on the wall face).
4. Walls whose footprint touches a room, and the doors and windows in
   those walls whose opening lies on the room's boundary, are the room's
   ``bounding`` elements (yaml ids). The viewer keeps them visible when it
   isolates the room.
"""

from __future__ import annotations

import math
from collections import Counter, defaultdict
from typing import Any, Iterable

from shapely.geometry import LineString, Point, Polygon
from shapely.ops import unary_union

#: Gaps narrower than twice this close by themselves (metres).
CLOSE_RADIUS = 0.3
#: A product this close to an unnamed hole can name it (metres).
NEAR_HOLE = 0.3
#: Band around a room in which a wall face counts as bounding it (metres).
WALL_TOUCH = 0.06


def _wall_polygons(doc: dict) -> dict[str, Polygon]:
    from yaml_ifc import footprints

    rings = footprints(doc)
    out: dict[str, Polygon] = {}
    for wall in doc.get("walls") or []:
        wid = wall["id"]
        if wid in rings:
            out[wid] = Polygon(rings[wid])
            continue
        axis = wall.get("Axis") or {}
        start, end = axis.get("Start"), axis.get("End")
        if not start or not end:
            continue
        # Same 50 mm band models/ground_floor.py builds for W-017.
        thick = float(wall.get("Thickness") or 0.05)
        out[wid] = LineString([start[:2], end[:2]]).buffer(thick / 2, cap_style="flat")
    return out


def _closure_polygon(closure: dict) -> Polygon:
    a, b = closure["from"], closure["to"]
    width = float(closure.get("width", 0.1))
    return LineString([a, b]).buffer(width / 2, cap_style="flat")


def space_points(docs: Iterable[dict]) -> dict[str, list[tuple[float, float]]]:
    """Plan positions of yaml products, by the space that contains them."""
    pts: dict[str, list[tuple[float, float]]] = defaultdict(list)
    for doc in docs:
        for value in doc.values():
            if not isinstance(value, list):
                continue
            for item in value:
                if not isinstance(item, dict):
                    continue
                space = item.get("ContainedInStructure")
                origin = item.get("Origin")
                if not (isinstance(space, str) and space.startswith("SP-")):
                    continue
                if not (isinstance(origin, (list, tuple)) and len(origin) >= 2):
                    continue
                pts[space].append((float(origin[0]), float(origin[1])))
    return dict(pts)


def _openings_on(doc: dict, walls: dict[str, Polygon]) -> list[dict]:
    """Door and window ids with the plan point at their opening's centre."""
    by_id = {w["id"]: w for w in doc.get("walls") or []}
    centre: dict[str, tuple[str, Point, float]] = {}
    for opening in doc.get("openings") or []:
        wall = by_id.get(opening.get("VoidsElement"))
        if not wall:
            continue
        axis = wall.get("Axis") or {}
        (sx, sy), (ex, ey) = axis["Start"][:2], axis["End"][:2]
        length = math.hypot(ex - sx, ey - sy) or 1.0
        t = float(opening.get("AlongAxis") or 0.0)
        p = Point(sx + (ex - sx) * t / length, sy + (ey - sy) * t / length)
        centre[opening["id"]] = (wall["id"], p, float(wall.get("Thickness") or 0.05))
    out = []
    for kind in ("doors", "windows"):
        for filler in doc.get(kind) or []:
            hit = centre.get(filler.get("FillsOpening"))
            if hit:
                out.append({"id": filler["id"], "wall": hit[0], "point": hit[1], "thickness": hit[2]})
    return out


def _ring(poly: Polygon) -> list[list[float]]:
    coords = list(poly.exterior.coords)[:-1]
    if Polygon(coords).exterior.is_ccw is False:
        coords.reverse()
    return [[round(x, 3), round(y, 3)] for x, y in coords]


def room_outlines(
    walls_doc: dict,
    product_docs: Iterable[dict],
    spaces: dict[str, str],
    closures: Iterable[dict] = (),
    close_radius: float = CLOSE_RADIUS,
) -> dict[str, Any]:
    """Outline, area and bounding elements per space.

    ``spaces`` maps yaml space id (``SP-1.11``) to its name. Returns
    ``{"rooms": [...], "unnamed": [...], "missing": [...]}``; ``rooms`` is
    what goes into ``ifc.json``.
    """
    walls = _wall_polygons(walls_doc)
    shapes = list(walls.values()) + [_closure_polygon(c) for c in closures]
    solid = unary_union(shapes)
    if close_radius > 0:
        solid = solid.buffer(close_radius, join_style="mitre").buffer(-close_radius, join_style="mitre")
    parts = list(solid.geoms) if hasattr(solid, "geoms") else [solid]
    holes = [Polygon(ring) for part in parts for ring in part.interiors]
    holes = [h for h in holes if h.area > 0.5]

    points = space_points(product_docs)
    votes: list[Counter] = []
    for hole in holes:
        votes.append(
            Counter(space for space, pts in points.items() for p in pts if hole.contains(Point(p)))
        )
    names: list[str | None] = [v.most_common(1)[0][0] if v else None for v in votes]
    for space, pts in points.items():
        if space in names:
            continue
        best = None
        for i, hole in enumerate(holes):
            if names[i] is not None:
                continue
            d = min(hole.distance(Point(p)) for p in pts)
            if d <= NEAR_HOLE and (best is None or d < best[0]):
                best = (d, i)
        if best is not None:
            names[best[1]] = space

    openings = _openings_on(walls_doc, walls)
    by_space: dict[str, list[int]] = defaultdict(list)
    for i, name in enumerate(names):
        if name:
            by_space[name].append(i)

    rooms = []
    for space in sorted(by_space):
        polys = [holes[i] for i in by_space[space]]
        region = unary_union(polys)
        band = region.buffer(WALL_TOUCH, join_style="mitre")
        bounding = sorted(
            wid for wid, poly in walls.items() if poly.intersection(band).area > 0.01
        )
        touching = set(bounding)
        fillers = sorted(
            o["id"]
            for o in openings
            if o["wall"] in touching and region.distance(o["point"]) <= o["thickness"] / 2 + 0.1
        )
        mixed = Counter()
        for i in by_space[space]:
            mixed.update(votes[i])
        others = {k: n for k, n in mixed.items() if k != space}
        room = {
            "space": space,
            "name": spaces.get(space, space),
            "outlines": [_ring(p) for p in polys],
            "area": round(sum(p.area for p in polys), 2),
            "bounding": bounding + fillers,
        }
        if others:
            room["strayProducts"] = dict(sorted(others.items()))
        rooms.append(room)
    unnamed = [
        {"bounds": [round(v, 2) for v in holes[i].bounds], "area": round(holes[i].area, 2)}
        for i, n in enumerate(names)
        if n is None
    ]
    missing = sorted(set(spaces) - set(by_space))
    return {"rooms": rooms, "unnamed": unnamed, "missing": missing}
