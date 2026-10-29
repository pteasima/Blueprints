"""Specular rays on the same planes the FEM mesh uses.

Decay above a couple of hundred hertz is read from the energy histogram at the
seats. The tracer is a check on the FEM and on the Eyring model, not a
replacement for either.
"""

from __future__ import annotations

import math

import numpy as np

from blueprints.acoustics.layers import C0, Z0
from blueprints.acoustics.obyvak import air_m
from blueprints.acoustics.roomwave.boundaries import impedance
from blueprints.acoustics.roomwave.geometry import Box, Shape, Variant

_SCATTER = {
    "sofa": 0.40,
    "shelf": 0.30,
    "chair": 0.20,
    "kitchen": 0.10,
    "island": 0.10,
    "table": 0.05,
}


def _quad(tris: list, labels: list, corners: list[np.ndarray], label: str, interior: np.ndarray) -> None:
    for a, b, c in (corners[:3], (corners[0], corners[2], corners[3])):
        raw = np.cross(b - a, c - a)
        norm = float(np.linalg.norm(raw))
        if norm < 1e-10:
            continue
        centre = (a + b + c) / 3.0
        if float(np.dot(raw, centre - interior)) < 0.0:
            b, c = c, b
            raw = -raw
        tris.append((a, b, c))
        labels.append(label)


def _extrude(tris, labels, p0, p1, y0, y1, label, interior):
    a = np.array([p0[0], y0, p0[1]])
    b = np.array([p1[0], y0, p1[1]])
    c = np.array([p1[0], y1, p1[1]])
    d = np.array([p0[0], y1, p0[1]])
    _quad(tris, labels, [a, b, c, d], label, interior)


def _fan(tris, labels, poly, y, label, interior):
    pts = [np.array([x, y, z]) for x, z in poly]
    for i in range(1, len(pts) - 1):
        _quad(tris, labels, [pts[0], pts[i], pts[i + 1], pts[i + 1]], label, interior)


def _cells(breaks: list[float]) -> list[tuple[float, float]]:
    values = sorted(set(breaks))
    return [(a, b) for a, b in zip(values, values[1:]) if b - a > 1e-6]


def room_facets(shape: Shape, soffit: str, furniture: bool):
    """Triangles ``(v0,v1,v2)`` and a label per triangle. Normals point out of the air."""
    interior = np.array([2.50, 5.20, 1.00])
    tris: list = []
    labels: list = []
    y0, y1 = shape.y_living, shape.y_kitchen
    # Floor, split by the rug.
    x0, x1, ry0, ry1 = shape.rug
    for xa, xb in _cells([0.0, x0, x1, shape.x_wall]):
        for ya, yb in _cells([0.0, ry0, ry1, shape.length]):
            centre_x = 0.5 * (xa + xb)
            centre_y = 0.5 * (ya + yb)
            label = "rug" if x0 <= centre_x <= x1 and ry0 <= centre_y <= ry1 else "floor"
            z = 0.0
            _quad(
                tris,
                labels,
                [
                    np.array([xa, ya, z]),
                    np.array([xb, ya, z]),
                    np.array([xb, yb, z]),
                    np.array([xa, yb, z]),
                ],
                label,
                interior,
            )
    # Eave wall, lower storey full length and upper storey only between the traps.
    _wall_x(tris, labels, shape, 0.0, 0.0, shape.z_cut, 0.0, shape.length, interior, "eave")
    _wall_x(tris, labels, shape, 0.0, shape.z_cut, shape.z_eave, y0, y1, interior, "eave")
    # Cabinet wall.
    z_back = shape.z_soffit if soffit != "removed" else shape.z_wall
    _wall_x(tris, labels, shape, shape.x_wall, 0.0, shape.z_cut, 0.0, shape.length, interior, "back")
    _wall_x(tris, labels, shape, shape.x_wall, shape.z_cut, z_back, y0, y1, interior, "back")
    # Gable walls below the traps, and the trap faces above.
    for y, sign_label in ((0.0, "plaster"), (shape.length, "plaster")):
        _quad(
            tris,
            labels,
            [
                np.array([0.0, y, 0.0]),
                np.array([shape.x_wall, y, 0.0]),
                np.array([shape.x_wall, y, shape.z_cut]),
                np.array([0.0, y, shape.z_cut]),
            ],
            sign_label,
            interior,
        )
    _fan(tris, labels, shape.upper(soffit), y0, "living_trap", interior)
    _fan(tris, labels, shape.upper(soffit), y1, "kitchen_trap", interior)
    _quad(
        tris,
        labels,
        [
            np.array([0.0, 0.0, shape.z_cut]),
            np.array([shape.x_wall, 0.0, shape.z_cut]),
            np.array([shape.x_wall, y0, shape.z_cut]),
            np.array([0.0, y0, shape.z_cut]),
        ],
        "living_trap_bottom",
        interior,
    )
    _quad(
        tris,
        labels,
        [
            np.array([0.0, y1, shape.z_cut]),
            np.array([shape.x_wall, y1, shape.z_cut]),
            np.array([shape.x_wall, shape.length, shape.z_cut]),
            np.array([0.0, shape.length, shape.z_cut]),
        ],
        "kitchen_trap_bottom",
        interior,
    )
    if soffit == "removed":
        _extrude(tris, labels, (0.0, shape.z_eave), (shape.x_false, shape.z_ridge), y0, y1, "slope", interior)
        _extrude(tris, labels, (shape.x_false, shape.z_ridge), (shape.x_soffit, shape.z_eave), y0, y1, "slope", interior)
        _extrude(tris, labels, (shape.x_soffit, shape.z_eave), (shape.x_wall, shape.z_wall), y0, y1, "lid", interior)
    else:
        _extrude(tris, labels, (0.0, shape.z_eave), (shape.x_false, shape.z_ridge), y0, y1, "slope", interior)
        _extrude(tris, labels, (shape.x_false, shape.z_ridge), (shape.x_soffit, shape.z_eave), y0, y1, "slope", interior)
        _extrude(tris, labels, (shape.x_soffit, shape.z_eave), (shape.x_soffit, shape.z_soffit), y0, y1, "soffit", interior)
        _extrude(tris, labels, (shape.x_soffit, shape.z_soffit), (shape.x_wall, shape.z_soffit), y0, y1, "soffit", interior)
    if furniture:
        for box in shape.boxes:
            _box_faces(tris, labels, box, interior)
    v0 = np.array([t[0] for t in tris])
    v1 = np.array([t[1] for t in tris])
    v2 = np.array([t[2] for t in tris])
    return v0, v1, v2, labels


def _wall_x(tris, labels, shape: Shape, x, z0, z1, y0, y1, interior, kind: str) -> None:
    if z1 - z0 < 1e-4 or y1 - y0 < 1e-4:
        return
    shelf_y0, shelf_y1, shelf_z0, shelf_z1 = shape.shelf
    y_breaks = [y0, y1]
    z_breaks = [z0, z1]
    if kind == "back":
        y_breaks += [shelf_y0, shelf_y1]
        z_breaks += [shelf_z0, shelf_z1]
    if kind == "eave":
        for a, b in shape.windows:
            y_breaks += [a, b]
        z_breaks.append(shape.window_h)
    for ya, yb in _cells([v for v in y_breaks if y0 - 1e-8 <= v <= y1 + 1e-8]):
        for za, zb in _cells([v for v in z_breaks if z0 - 1e-8 <= v <= z1 + 1e-8]):
            cy, cz = 0.5 * (ya + yb), 0.5 * (za + zb)
            if kind == "eave" and cz <= shape.window_h and any(a <= cy <= b for a, b in shape.windows):
                label = "glass"
            elif kind == "back" and shelf_y0 <= cy <= shelf_y1 and shelf_z0 <= cz <= shelf_z1:
                label = "shelf"
            else:
                label = "plaster"
            _quad(
                tris,
                labels,
                [
                    np.array([x, ya, za]),
                    np.array([x, yb, za]),
                    np.array([x, yb, zb]),
                    np.array([x, ya, zb]),
                ],
                label,
                interior,
            )


def _box_faces(tris, labels, box: Box, interior: np.ndarray) -> None:
    x0, y0, z0, x1, y1, z1 = box.x, box.y, box.z, box.x1, box.y1, box.z1
    faces = [
        ([x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]),
        ([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]),
        ([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]),
        ([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]),
        ([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]),
    ]
    # Skip a bottom that sits on the floor; the floor quad already covers it.
    if z0 > 0.02:
        faces.append(([x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0]))
    for corners in faces:
        _quad(tris, labels, [np.array(p, dtype=float) for p in corners], box.name, interior)


def _alpha(impedance_value: complex, cos_theta: np.ndarray) -> np.ndarray:
    cos_theta = np.maximum(cos_theta, 1e-3)
    if abs(impedance_value) > 1e8:
        return np.zeros_like(cos_theta)
    reflection = (impedance_value * cos_theta - Z0) / (impedance_value * cos_theta + Z0)
    return np.clip(1.0 - np.abs(reflection) ** 2, 0.0, 1.0)


def trace_decay(
    shape: Shape,
    variant: Variant,
    freq: float,
    *,
    n_rays: int = 1200,
    max_bounces: int = 36,
    radius: float = 0.45,
    seed: int = 1,
) -> dict[str, float]:
    """Sofa, dining, and island decay times at one frequency. NaN if the histogram is too short."""
    v0, v1, v2, labels = room_facets(shape, variant.mesh_kind, variant.furniture)
    unique = sorted(set(labels))
    z_of = {label: impedance(label, freq, variant) for label in unique}
    scatter = np.array([_SCATTER.get(label, 0.0) for label in labels])
    normals = np.cross(v1 - v0, v2 - v0)
    normals /= np.linalg.norm(normals, axis=1)[:, None]
    source = next(marker for marker in shape.sources if marker.group == "sub")
    receivers = [marker for marker in shape.receivers]
    rng = np.random.default_rng(seed + int(freq))
    dirs = rng.normal(size=(n_rays, 3))
    dirs /= np.linalg.norm(dirs, axis=1)[:, None]
    origin = np.repeat(np.array([[source.x, source.y, source.z]]), n_rays, axis=0)
    energy = np.ones(n_rays)
    clock = np.zeros(n_rays)
    alive = np.ones(n_rays, dtype=bool)
    rec = np.array([[m.x, m.y, m.z] for m in receivers])
    hist = np.zeros((len(receivers), 800))
    dt = 0.002
    atten = air_m(freq)
    label_ids = np.array([unique.index(label) for label in labels], dtype=int)
    e1 = v1 - v0
    e2 = v2 - v0
    for _ in range(max_bounces):
        if not np.any(alive):
            break
        idx = np.flatnonzero(alive)
        o = origin[idx]
        d = dirs[idx]
        dist, tri = _nearest(o, d, v0, e1, e2)
        hit = np.isfinite(dist)
        travel = np.where(hit, dist, 0.0)
        for r_i, point in enumerate(rec):
            rel = point - o
            along = np.einsum("ij,ij->i", rel, d)
            close = o + along[:, None] * d
            offset = np.linalg.norm(close - point, axis=1)
            seen = hit & (along > 1e-4) & (along < travel) & (offset < radius)
            if not np.any(seen):
                continue
            arrival = clock[idx][seen] + along[seen] / C0
            bins = np.clip(arrival / dt, 0, hist.shape[1] - 1).astype(int)
            recorded = energy[idx][seen] * np.exp(-atten * along[seen])
            np.add.at(hist[r_i], bins, recorded)
        miss = ~hit
        alive[idx[miss]] = False
        got = np.flatnonzero(hit)
        if len(got) == 0:
            continue
        which = tri[got]
        cos = np.abs(np.einsum("ij,ij->i", d[got], normals[which]))
        absorbed = np.zeros(len(got))
        for code, label in enumerate(unique):
            pick = label_ids[which] == code
            if not np.any(pick):
                continue
            absorbed[pick] = _alpha(z_of[label], cos[pick])
        step = idx[got]
        clock[step] = clock[step] + dist[got] / C0
        energy[step] = energy[step] * np.exp(-atten * dist[got]) * (1.0 - absorbed)
        new_dir = d[got] - 2.0 * np.einsum("ij,ij->i", d[got], normals[which])[:, None] * normals[which]
        do_scatter = rng.random(len(got)) < scatter[which]
        if np.any(do_scatter):
            new_dir[do_scatter] = _hemisphere(normals[which][do_scatter], rng)
        new_dir /= np.maximum(np.linalg.norm(new_dir, axis=1)[:, None], 1e-12)
        origin[step] = o[got] + (dist[got] - 1e-4)[:, None] * d[got]
        dirs[step] = new_dir
        alive[step] = energy[step] > 1e-4
    names = ["sofa", "dining", "island"]
    # sofa is the sum of the three seat histograms.
    grouped = {
        "sofa": hist[:3].sum(axis=0),
        "dining": hist[3],
        "island": hist[4],
    }
    return {name: _t60(grouped[name], dt) for name in names}


def _nearest(origin, direction, v0, e1, e2):
    """Möller–Trumbore. Returns distance and triangle index, nan where there is no hit."""
    pvec = np.cross(direction[:, None, :], e2[None, :, :])
    det = np.einsum("ij,kij->ki", e1, pvec)
    good = np.abs(det) > 1e-10
    inv = np.zeros_like(det)
    inv[good] = 1.0 / det[good]
    tvec = origin[:, None, :] - v0[None, :, :]
    u = np.einsum("kij,kij->ki", tvec, pvec) * inv
    qvec = np.cross(tvec, e1[None, :, :])
    v = np.einsum("kij,kj->ki", qvec, direction) * inv
    dist = np.einsum("ij,kij->ki", e2, qvec) * inv
    ok = good & (u >= 0.0) & (v >= 0.0) & (u + v <= 1.0) & (dist > 1e-4)
    dist = np.where(ok, dist, np.inf)
    nearest = np.argmin(dist, axis=1)
    best = dist[np.arange(len(origin)), nearest]
    best = np.where(np.isfinite(best), best, np.nan)
    return best, nearest


def _hemisphere(outward: np.ndarray, rng: np.random.Generator) -> np.ndarray:
    """Random direction into the room, opposite the outward normal."""
    inward = -outward
    n = len(inward)
    z = rng.random(n)
    phi = 2.0 * math.pi * rng.random(n)
    radial = np.sqrt(np.maximum(0.0, 1.0 - z * z))
    tmp = np.zeros_like(inward)
    tmp[:, 0] = np.where(np.abs(inward[:, 0]) < 0.9, 1.0, 0.0)
    tmp[:, 1] = np.where(np.abs(inward[:, 0]) < 0.9, 0.0, 1.0)
    tangent = np.cross(inward, tmp)
    tangent /= np.linalg.norm(tangent, axis=1)[:, None]
    bitangent = np.cross(inward, tangent)
    local = (
        (radial * np.cos(phi))[:, None] * tangent
        + (radial * np.sin(phi))[:, None] * bitangent
        + z[:, None] * inward
    )
    return local


def _t60(histogram: np.ndarray, dt: float) -> float:
    if histogram.sum() <= 0.0:
        return math.nan
    # Schroeder integral from the back of the record.
    tail = np.cumsum(histogram[::-1])[::-1]
    tail = np.maximum(tail, 1e-30)
    db = 10.0 * np.log10(tail / tail[0])
    time = np.arange(len(db)) * dt
    # Fit somewhere in the early-to-middle decay. A short record cannot see −35 dB.
    for lo, hi in ((-5.0, -25.0), (-3.0, -15.0), (-1.0, -10.0)):
        mask = (db <= lo) & (db >= hi)
        if int(mask.sum()) < 6:
            continue
        slope = float(np.polyfit(time[mask], db[mask], 1)[0])
        if slope < -1.0:
            return float(-60.0 / slope)
    return math.nan


def shoebox_t60(lx: float, ly: float, lz: float, alpha: float, n_rays: int = 500) -> float:
    """Decay of a rectangular room that absorbs a fraction ``alpha`` at every bounce.

    That is the statistical-ray assumption behind Sabine, so the returned T60
    should sit near 0.161 V / (α S).
    """
    rects = [
        (np.array([0.0, 0.0, 0.0]), np.array([lx, 0.0, 0.0]), np.array([0.0, ly, 0.0])),
        (np.array([0.0, 0.0, lz]), np.array([lx, 0.0, 0.0]), np.array([0.0, ly, 0.0])),
        (np.array([0.0, 0.0, 0.0]), np.array([0.0, 0.0, lz]), np.array([0.0, ly, 0.0])),
        (np.array([lx, 0.0, 0.0]), np.array([0.0, ly, 0.0]), np.array([0.0, 0.0, lz])),
        (np.array([0.0, 0.0, 0.0]), np.array([lx, 0.0, 0.0]), np.array([0.0, 0.0, lz])),
        (np.array([0.0, ly, 0.0]), np.array([0.0, 0.0, lz]), np.array([lx, 0.0, 0.0])),
    ]
    tris0, tris1, tris2 = [], [], []
    for origin, edge_u, edge_v in rects:
        tris0 += [origin, origin]
        tris1 += [origin + edge_u, origin + edge_u + edge_v]
        tris2 += [origin + edge_u + edge_v, origin + edge_v]
    v0 = np.array(tris0, dtype=float)
    v1 = np.array(tris1, dtype=float)
    v2 = np.array(tris2, dtype=float)
    normals = np.cross(v1 - v0, v2 - v0)
    normals /= np.linalg.norm(normals, axis=1)[:, None]
    centre = np.array([lx, ly, lz]) * 0.5
    flip = np.einsum("ij,ij->i", normals, (v0 + v1 + v2) / 3.0 - centre) < 0.0
    normals[flip] *= -1.0
    v1[flip], v2[flip] = v2[flip].copy(), v1[flip].copy()
    e1 = v1 - v0
    e2 = v2 - v0
    rng = np.random.default_rng(0)
    dirs = rng.normal(size=(n_rays, 3))
    dirs /= np.linalg.norm(dirs, axis=1)[:, None]
    origin_r = np.repeat(centre[None, :], n_rays, axis=0)
    energy = np.ones(n_rays)
    clock = np.zeros(n_rays)
    alive = np.ones(n_rays, dtype=bool)
    hist = np.zeros(900)
    dt = 0.002
    for _ in range(48):
        idx = np.flatnonzero(alive)
        if len(idx) == 0:
            break
        dist, tri = _nearest(origin_r[idx], dirs[idx], v0, e1, e2)
        hit = np.isfinite(dist)
        rel = centre - origin_r[idx]
        along = np.einsum("ij,ij->i", rel, dirs[idx])
        close = origin_r[idx] + along[:, None] * dirs[idx]
        offset = np.linalg.norm(close - centre, axis=1)
        seen = hit & (along > 1e-3) & (along < np.where(hit, dist, 0.0)) & (offset < 0.45)
        if np.any(seen):
            arrival = clock[idx][seen] + along[seen] / C0
            bins = np.clip(arrival / dt, 0, len(hist) - 1).astype(int)
            np.add.at(hist, bins, energy[idx][seen])
        got = np.flatnonzero(hit)
        alive[idx[np.flatnonzero(~hit)]] = False
        if len(got) == 0:
            continue
        step = idx[got]
        clock[step] = clock[step] + dist[got] / C0
        energy[step] *= 1.0 - alpha
        wall_n = normals[tri[got]]
        new_dir = dirs[step] - 2.0 * np.einsum("ij,ij->i", dirs[step], wall_n)[:, None] * wall_n
        new_dir /= np.maximum(np.linalg.norm(new_dir, axis=1)[:, None], 1e-12)
        origin_r[step] = origin_r[step] + (dist[got] - 1e-4)[:, None] * dirs[step]
        dirs[step] = new_dir
        alive[step] = energy[step] > 1e-4
    return _t60(hist, dt)
