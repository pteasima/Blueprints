"""Section and elevation slices cut from the 3D solids."""

from __future__ import annotations

from dataclasses import asdict

from build123d import Axis, Compound, Location, Plane

from obyvak_geom import LABEL_TIE_ROD, ObyvakLayout, ObyvakParams, xz_face

from .parts import _compound, _meta, _parts
from .solids import FACE_GAP, MODEL_NAME


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
    """XZ slice through a krokev near mid-length (panel A station from 3D solids)."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    # Discrete krokve miss a pure mid-Y cut; snap to the nearest rafter centreline.
    y_target = p.room_length / 2.0
    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_mid = min(stations, key=lambda y: abs(y - y_target)) if stations else y_target
    faces = _labeled_slices(_parts(p, g), Plane.XZ.offset(-y_mid))
    moved = []
    for face in faces:
        placed = face.moved(Location((0.0, -y_mid, 0.0)))
        placed.label = face.label
        moved.append(placed)
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(moved, label=f"{MODEL_NAME}_slice_section"), meta


def _elevation_outline(placed) -> list[tuple[float, float]]:
    """XZ outline of a ridge section face.

    Faceted parts (walls, rafters) keep their corner vertices. A tie is a
    circle in this cut, and a circle's vertices are only the seam, so the
    edge is sampled when the corners do not already close a polygon.
    """
    unique: list[tuple[float, float]] = []
    seen: set[tuple[float, float]] = set()
    for v in placed.vertices():
        key = (round(v.X, 3), round(v.Z, 3))
        if key in seen:
            continue
        seen.add(key)
        unique.append((v.X, v.Z))
    if len(unique) >= 3:
        return unique
    wires = list(placed.wires())
    if not wires:
        return unique
    wire = max(wires, key=lambda w: w.length)
    pts: list[tuple[float, float]] = []
    for edge in wire.edges():
        samples = edge.positions(deflection=0.5)
        for v in samples[:-1]:
            pts.append((v.X, v.Z))
    return pts


def build_elevation_slice(params: ObyvakParams | None = None):
    """YZ slice at the ridge, remapped to XZ (drawing X = world Y) like panel B."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    faces = _labeled_slices(_parts(p, g), Plane.YZ.offset(g.x_ridge))
    mapped = []
    for face in faces:
        placed = face.moved(Location((-g.x_ridge, 0.0, 0.0))).rotate(Axis.Z, -90)
        # Snap onto XZ so SVG export stays planar.
        pts = _elevation_outline(placed)
        if len(pts) < 3:
            continue
        mapped.append(xz_face(pts, face.label))
    meta = _meta(p, g)
    meta["kind"] = "section"
    return _compound(mapped, label=f"{MODEL_NAME}_slice_elevation"), meta


_PARTS_CACHE: dict = {}


def model_parts(params: ObyvakParams | None = None) -> list:
    """The 3D solids (same list as the GLB), cached per parameter set."""
    p = params or ObyvakParams()
    key = tuple(sorted(asdict(p).items()))
    if key not in _PARTS_CACHE:
        _PARTS_CACHE.clear()
        _PARTS_CACHE[key] = _parts(p, ObyvakLayout(p))
    return _PARTS_CACHE[key]


def section_y(params: ObyvakParams | None = None) -> float:
    """Drawing cut plane: mid-bay between two rafters near the middle of the soffit."""
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_target = 0.5 * (g.y_furn0 + g.y_furn1)
    ys = sorted(stations)
    mids = [0.5 * (a + b) for a, b in zip(ys, ys[1:])] or [y_target]
    return min(mids, key=lambda y: abs(y - y_target))


def _xz_at(face, y: float, label: str):
    placed = face.moved(Location((0.0, -y, 0.0)))
    placed.label = label
    return placed


def model_section(params: ObyvakParams | None = None, y_cut: float | None = None,
                  beyond: float | None = None, label: str = "obyvak_section"):
    """Transverse drawing made only from the 3D solids.

    Every solid crossing the plane y = y_cut is cut there. Solids lying wholly
    behind it (within `beyond` mm, default one rafter bay) are drawn as seen:
    each is cut at its own mid-Y and placed under the cut faces (rafters,
    hangers, straps, screws). Nothing here is drawn from 2D geometry.
    """
    p = params or ObyvakParams()
    y = section_y(p) if y_cut is None else y_cut
    depth = p.rafter_spacing if beyond is None else beyond
    cut, seen = [], []
    for part in model_parts(p):
        bb = part.bounding_box()
        if bb.min.Y <= y <= bb.max.Y:
            yy, bucket = y, cut
        elif part.label == LABEL_TIE_ROD:
            # The six bars share one axis. The section shows that circle,
            # whether this plane cuts the bar or the bar sits in the depth.
            yy, bucket = 0.5 * (bb.min.Y + bb.max.Y), seen
        elif y < bb.min.Y and bb.max.Y <= y + depth:
            yy, bucket = 0.5 * (bb.min.Y + bb.max.Y), seen
        else:
            continue
        hits = part.intersect(Plane.XZ.offset(-yy))
        if not hits:
            continue
        for face in hits.faces() if hasattr(hits, "faces") else hits:
            if face.area < 1e-3:
                continue
            bucket.append(_xz_at(face, yy, part.label))
    faces = seen + cut
    return Compound(obj=faces, children=faces, label=label)


def model_elevation(params: ObyvakParams | None = None, x_cut: float | None = None,
                    label: str = "obyvak_elevation"):
    """Longitudinal drawing (gable to gable) cut from the 3D solids at x = x_cut.

    Drawing X is world Y. Default cut is the ridge line.
    """
    p = params or ObyvakParams()
    x = ObyvakLayout(p).x_ridge if x_cut is None else x_cut
    faces = []
    for part in model_parts(p):
        bb = part.bounding_box()
        if not (bb.min.X <= x <= bb.max.X):
            continue
        hits = part.intersect(Plane.YZ.offset(x))
        if not hits:
            continue
        for face in hits.faces() if hasattr(hits, "faces") else hits:
            if face.area < 1e-3:
                continue
            placed = face.moved(Location((-x, 0.0, 0.0))).rotate(Axis.Z, -90)
            placed.label = part.label
            faces.append(placed)
    return Compound(obj=faces, children=faces, label=label)
