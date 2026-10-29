"""Tetrahedral air mesh. Gmsh builds the room; a box is the same reader.

Surfaces are planar, so boundary faces lie on the CAD planes and can be
labelled from their centroid and outward normal.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from blueprints.acoustics.roomwave.geometry import Box, Shape, in_window


@dataclass
class Mesh:
    points: np.ndarray
    tets: np.ndarray
    faces: np.ndarray
    labels: np.ndarray
    normals: np.ndarray
    areas: np.ndarray
    volume: float

    def area_of(self, label: str) -> float:
        pick = self.labels == label
        if not np.any(pick):
            return 0.0
        return float(self.areas[pick].sum())

    def areas_by_label(self) -> dict[str, float]:
        out: dict[str, float] = {}
        for label in sorted(set(self.labels.tolist())):
            out[str(label)] = self.area_of(str(label))
        return out


def _gmsh():
    import gmsh

    return gmsh


def _read_volume() -> tuple[np.ndarray, np.ndarray]:
    gmsh = _gmsh()
    tags, coords, _ = gmsh.model.mesh.getNodes()
    _types, _etags, nodes = gmsh.model.mesh.getElements(3)
    if not nodes or len(nodes[0]) == 0:
        raise RuntimeError("Gmsh produced no tetrahedra")
    tets = np.array(nodes[0], dtype=np.int64).reshape(-1, 4)
    order = np.argsort(tags)
    tags = np.asarray(tags)[order]
    points = np.array(coords, dtype=float).reshape(-1, 3)[order]
    remap = {int(tag): i for i, tag in enumerate(tags)}
    tets = np.vectorize(remap.get)(tets).astype(np.int32)
    used = np.unique(tets)
    keep = -np.ones(len(points), dtype=np.int32)
    keep[used] = np.arange(len(used), dtype=np.int32)
    points = points[used]
    tets = keep[tets]
    a = points[tets[:, 1]] - points[tets[:, 0]]
    b = points[tets[:, 2]] - points[tets[:, 0]]
    c = points[tets[:, 3]] - points[tets[:, 0]]
    det = np.einsum("ij,ij->i", a, np.cross(b, c))
    neg = det < 0.0
    if np.any(neg):
        swapped = tets.copy()
        swapped[neg, 1] = tets[neg, 2]
        swapped[neg, 2] = tets[neg, 1]
        tets = swapped
    return points, tets


def _boundary(points: np.ndarray, tets: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray, float]:
    """Outward faces, unit normals, areas, and the tet volume."""
    corners = (
        ((1, 2, 3), 0),
        ((0, 3, 2), 1),
        ((0, 1, 3), 2),
        ((0, 2, 1), 3),
    )
    counts: dict[tuple[int, int, int], list] = {}
    for tet in tets:
        for (a, b, c), opposite in corners:
            face = (int(tet[a]), int(tet[b]), int(tet[c]))
            key = tuple(sorted(face))
            slot = counts.get(key)
            if slot is None:
                counts[key] = [1, face, int(tet[opposite])]
            else:
                slot[0] += 1
    faces = []
    normals = []
    areas = []
    for count, (i, j, k), opposite in counts.values():
        if count != 1:
            continue
        pi, pj, pk = points[i], points[j], points[k]
        raw = np.cross(pj - pi, pk - pi)
        area = 0.5 * float(np.linalg.norm(raw))
        if area < 1e-10:
            continue
        if float(np.dot(raw, pi - points[opposite])) < 0.0:
            j, k = k, j
            raw = -raw
        faces.append((i, j, k))
        normals.append(raw / np.linalg.norm(raw))
        areas.append(area)
    a = points[tets[:, 1]] - points[tets[:, 0]]
    b = points[tets[:, 2]] - points[tets[:, 0]]
    c = points[tets[:, 3]] - points[tets[:, 0]]
    volume = float(np.einsum("ij,ij->i", a, np.cross(b, c)).sum() / 6.0)
    return (
        np.array(faces, dtype=np.int32),
        np.array(normals, dtype=float),
        np.array(areas, dtype=float),
        volume,
    )


def _set_size(h: float) -> None:
    gmsh = _gmsh()
    gmsh.option.setNumber("General.Terminal", 0)
    gmsh.option.setNumber("Mesh.MeshSizeExtendFromBoundary", 0)
    gmsh.option.setNumber("Mesh.MeshSizeFromPoints", 0)
    gmsh.option.setNumber("Mesh.MeshSizeFromCurvature", 0)
    gmsh.option.setNumber("Mesh.MeshSizeMin", h)
    gmsh.option.setNumber("Mesh.MeshSizeMax", h)


def _finish(h: float, label_of) -> Mesh:
    gmsh = _gmsh()
    gmsh.model.occ.synchronize()
    _set_size(h)
    gmsh.model.mesh.generate(3)
    points, tets = _read_volume()
    faces, normals, areas, volume = _boundary(points, tets)
    centroids = points[faces].mean(axis=1)
    labels = np.array([label_of(centroids[i], normals[i]) for i in range(len(faces))], dtype=object)
    return Mesh(points, tets, faces, labels, normals, areas, volume)


def mesh_box(lx: float, ly: float, lz: float, h: float) -> Mesh:
    """One rectangular air volume. Face labels are ``xmin`` … ``zmax``."""
    gmsh = _gmsh()
    gmsh.initialize()
    try:
        gmsh.model.add("box")
        gmsh.model.occ.addBox(0.0, 0.0, 0.0, lx, ly, lz)
        tol = max(1e-4, 0.05 * h)

        def label_of(centre: np.ndarray, normal: np.ndarray) -> str:
            if centre[0] < tol and normal[0] < -0.5:
                return "xmin"
            if centre[0] > lx - tol and normal[0] > 0.5:
                return "xmax"
            if centre[1] < tol and normal[1] < -0.5:
                return "ymin"
            if centre[1] > ly - tol and normal[1] > 0.5:
                return "ymax"
            if centre[2] < tol and normal[2] < -0.5:
                return "zmin"
            if centre[2] > lz - tol and normal[2] > 0.5:
                return "zmax"
            return "shell"

        return _finish(h, label_of)
    finally:
        gmsh.finalize()


def _extrude(poly: list[tuple[float, float]], y0: float, y1: float) -> int:
    gmsh = _gmsh()
    occ = gmsh.model.occ
    pts = [occ.addPoint(x, y0, z) for x, z in poly]
    lines = [occ.addLine(pts[i], pts[(i + 1) % len(pts)]) for i in range(len(pts))]
    loop = occ.addCurveLoop(lines)
    surf = occ.addPlaneSurface([loop])
    out = occ.extrude([(2, surf)], 0.0, y1 - y0, 0.0)
    vols = [tag for dim, tag in out if dim == 3]
    if len(vols) != 1:
        raise RuntimeError("extrusion did not return one volume")
    return vols[0]


def _expand(box: Box, shape: Shape) -> tuple[float, float, float, float, float, float]:
    """Push a box through a floor or a wall it sits on, so the cut is clean."""
    x, y, z, dx, dy, dz = box.x, box.y, box.z, box.dx, box.dy, box.dz
    pad = 0.04
    if z <= 1e-8:
        dz += pad
        z = -pad
    if x + dx >= shape.x_wall - 1e-6:
        dx += pad
    if y <= 1e-8:
        dy += y + pad
        y = -pad
    if y + dy >= shape.length - 1e-6:
        dy += pad
    return (x, y, z, dx, dy, dz)


def _on_box(centre: np.ndarray, normal: np.ndarray, box: Box, tol: float) -> bool:
    checks = (
        (0, box.x, 1.0, 1, box.y, box.y1, 2, box.z, box.z1),
        (0, box.x1, -1.0, 1, box.y, box.y1, 2, box.z, box.z1),
        (1, box.y, 1.0, 0, box.x, box.x1, 2, box.z, box.z1),
        (1, box.y1, -1.0, 0, box.x, box.x1, 2, box.z, box.z1),
        (2, box.z, 1.0, 0, box.x, box.x1, 1, box.y, box.y1),
        (2, box.z1, -1.0, 0, box.x, box.x1, 1, box.y, box.y1),
    )
    for axis, plane, sign, u_axis, u0, u1, v_axis, v0, v1 in checks:
        if abs(float(centre[axis]) - plane) > tol:
            continue
        if float(normal[axis]) * sign < 0.5:
            continue
        if not (u0 - tol <= float(centre[u_axis]) <= u1 + tol):
            continue
        if not (v0 - tol <= float(centre[v_axis]) <= v1 + tol):
            continue
        return True
    return False


def _label_room(
    centre: np.ndarray,
    normal: np.ndarray,
    shape: Shape,
    soffit: str,
    boxes: tuple[Box, ...],
) -> str:
    tol = 0.02
    x, y, z = (float(v) for v in centre)
    for box in boxes:
        if _on_box(centre, normal, box, tol):
            return box.name
    if z < tol and normal[2] < -0.5:
        x0, x1, y0, y1 = shape.rug
        if x0 <= x <= x1 and y0 <= y <= y1:
            return "rug"
        return "floor"
    if (
        soffit != "removed"
        and normal[2] > 0.5
        and abs(z - shape.z_soffit) < 0.015
        and x > shape.x_soffit - 0.03
    ):
        return "soffit"
    if normal[2] > 0.5 and abs(z - shape.z_cut) < 0.012:
        if y < shape.y_living + 0.03:
            return "living_trap_bottom"
        if y > shape.y_kitchen - 0.03:
            return "kitchen_trap_bottom"
    if (
        soffit != "removed"
        and abs(x - shape.x_soffit) < 0.02
        and normal[0] > 0.5
        and z > shape.z_soffit - 0.02
    ):
        return "soffit"
    if abs(y - shape.y_living) < 0.025 and normal[1] < -0.5 and z > shape.z_cut - 0.02:
        return "living_trap"
    if abs(y - shape.y_kitchen) < 0.025 and normal[1] > 0.5 and z > shape.z_cut - 0.02:
        return "kitchen_trap"
    if x < tol and normal[0] < -0.5:
        if z <= shape.window_h + 0.02 and in_window(y, shape.windows):
            return "glass"
        return "plaster"
    if x > shape.x_wall - tol and normal[0] > 0.5:
        y0, y1, z0, z1 = shape.shelf
        if y0 <= y <= y1 and z0 <= z <= z1:
            return "shelf"
        return "plaster"
    if y < tol and normal[1] < -0.5:
        return "plaster"
    if y > shape.length - tol and normal[1] > 0.5:
        return "plaster"
    if normal[2] > 0.45 and z > shape.z_cut:
        if soffit == "removed" and x > shape.x_soffit - 0.02:
            return "lid"
        return "slope"
    return "plaster"


def mesh_room(shape: Shape, soffit: str, furniture: bool, h: float) -> Mesh:
    """Air of the open room. ``soffit`` is ``as_built`` or ``removed``."""
    if soffit not in ("as_built", "removed"):
        raise ValueError("mesh_room soffit must be as_built or removed")
    gmsh = _gmsh()
    gmsh.initialize()
    try:
        gmsh.model.add("obyvak")
        occ = gmsh.model.occ
        low = _extrude(shape.lower(), 0.0, shape.length)
        up = _extrude(shape.upper(soffit), shape.y_living, shape.y_kitchen)
        fused, _ = occ.fuse([(3, low)], [(3, up)])
        boxes = shape.boxes if furniture else ()
        if boxes:
            expanded = [_expand(box, shape) for box in boxes]
            tags = [occ.addBox(*dims) for dims in expanded]
            tools = [(3, tags[0])]
            if len(tags) > 1:
                tools, _ = occ.fuse(tools, [(3, tag) for tag in tags[1:]])
            fused, _ = occ.cut(fused, tools)
        if not fused:
            raise RuntimeError("boolean cut removed the whole room")

        def label_of(centre: np.ndarray, normal: np.ndarray) -> str:
            return _label_room(centre, normal, shape, soffit, boxes)

        return _finish(h, label_of)
    finally:
        gmsh.finalize()
