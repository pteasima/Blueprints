"""Triangle shell of the Obývák air volume, from ObyvakLayout.

The shell is the as-built room, in metres. A few centimetres of wool do not
rebuild it: every construction is heard in the same volume.

What the drawing actually bounds:

- Two roof slopes from the window eave up to the false ridge and back down
  to the cabinet line. That is the main ceiling.
- Over the cabinets the Naturheld soffit underside sits on the furniture
  (furniture height + 20 mm). The room sees a vertical bulkhead at the
  cabinet line, from that underside up to the slope, and a thin slot above
  the cabinet tops. Cabinet fronts below that are hard.
- Bass traps cut both gables from 2450 mm up to the ceiling. Below that the
  room runs to the gable wall. The trap bottoms are hard.
- Glazing is the eave window schedule. It is specular and non-absorbing
  here: no published absorption for this glass is on the sheet.

Columns, ducts, and furniture other than the cabinet block are not occluders.
The GKF on the slopes is carried by the CD grid and the hangers back to the
rafters, not by the Flex latě (those latě sit in the Flex band and hold the
Naturheld). Removing the latě does not drop the gypsum.
"""

from __future__ import annotations

import sys
from dataclasses import dataclass
from pathlib import Path

import numpy as np

HARD = "hard"
GLASS = "glass"
SLOPE = "slope"
SOFFIT = "soffit"
BASS_KITCHEN = "bass_kitchen"
BASS_LIVING = "bass_living"


def _ensure_models() -> None:
    repo = Path(__file__).resolve().parents[3]
    models = str(repo / "models")
    if models not in sys.path:
        sys.path.insert(0, models)


@dataclass(frozen=True)
class Shell:
    """triangles: (n, 3, 3) vertices. normals point into the room. ids per face."""

    triangles: np.ndarray
    normals: np.ndarray
    surface_ids: np.ndarray
    surface_names: tuple[str, ...]
    volume_m3: float


def _quad(a, b, c, d) -> list[list[tuple[float, float, float]]]:
    """Two triangles, CCW as given. a-b-c-d around the face."""
    return [[a, b, c], [a, c, d]]


def _rect_x(x, y0, y1, z0, z1):
    return _quad((x, y0, z0), (x, y1, z0), (x, y1, z1), (x, y0, z1))


def _rect_y(y, x0, x1, z0, z1):
    return _quad((x0, y, z0), (x1, y, z0), (x1, y, z1), (x0, y, z1))


def _rect_z(z, x0, x1, y0, y1):
    return _quad((x0, y0, z), (x1, y0, z), (x1, y1, z), (x0, y1, z))


def build_shell(layout=None) -> Shell:
    _ensure_models()
    if layout is None:
        from obyvak_geom import ObyvakParams, build_layout

        layout = build_layout(ObyvakParams())
    p = layout.p
    mm = 0.001
    w = p.room_width * mm
    length = p.room_length * mm
    yk = layout.y_furn0 * mm
    yl = layout.y_furn1 * mm
    z_low = p.predstena_bottom_z * mm
    z_furn = p.furniture_height * mm
    z_soffit = layout.z_nabeh_bot * mm
    z_eave = layout.h_start * mm
    z_ridge = layout.z_false * mm
    x_ridge = layout.x_false * mm
    x_furn = layout.x_furn * mm
    z_win = p.window_h * mm

    faces: list[tuple[str, list]] = []

    # Floor, full plan. Traps do not reach it.
    faces.append((HARD, _rect_z(0.0, 0.0, w, 0.0, length)[0]))
    faces.append((HARD, _rect_z(0.0, 0.0, w, 0.0, length)[1]))

    # Gable walls below the traps, and the hard underside of each trap.
    for y, y_trap0, y_trap1 in ((0.0, 0.0, yk), (length, yl, length)):
        for tri in _rect_y(y, 0.0, w, 0.0, z_low):
            faces.append((HARD, tri))
        for tri in _rect_z(z_low, 0.0, w, y_trap0, y_trap1):
            faces.append((HARD, tri))

    # Window wall, split by the glass schedule and by the trap cut.
    windows = [(y0 * mm, (y0 + width) * mm) for y0, width in p.eave_windows]
    edges = [0.0, length]
    for y0, y1 in windows:
        edges.extend((y0, y1))
    edges = sorted(set(round(y, 6) for y in edges))
    glass_spans = windows

    def _is_glass(y0: float, y1: float) -> bool:
        mid = 0.5 * (y0 + y1)
        return any(a - 1e-9 <= mid <= b + 1e-9 for a, b in glass_spans)

    for y0, y1 in zip(edges, edges[1:]):
        if y1 - y0 < 1e-6:
            continue
        glass = _is_glass(y0, y1)
        # Below the trap line the wall exists for the whole plan.
        z_glass_top = min(z_win, z_low)
        if glass and z_glass_top > 1e-6:
            for tri in _rect_x(0.0, y0, y1, 0.0, z_glass_top):
                faces.append((GLASS, tri))
            if z_low > z_glass_top:
                for tri in _rect_x(0.0, y0, y1, z_glass_top, z_low):
                    faces.append((HARD, tri))
        else:
            for tri in _rect_x(0.0, y0, y1, 0.0, z_low):
                faces.append((HARD, tri))
        # Above the traps only the bay is still room. Glass stops at window_h.
        if y1 <= yk + 1e-9 or y0 >= yl - 1e-9:
            continue
        yb0 = max(y0, yk)
        yb1 = min(y1, yl)
        if yb1 - yb0 < 1e-6:
            continue
        if glass and z_win > z_low:
            for tri in _rect_x(0.0, yb0, yb1, z_low, z_win):
                faces.append((GLASS, tri))
            if z_eave > z_win:
                for tri in _rect_x(0.0, yb0, yb1, z_win, z_eave):
                    faces.append((HARD, tri))
        else:
            for tri in _rect_x(0.0, yb0, yb1, z_low, z_eave):
                faces.append((HARD, tri))

    # Cabinet fronts (hard) and the short plaster strip up to the soffit slot.
    for tri in _rect_x(x_furn, yk, yl, 0.0, z_furn):
        faces.append((HARD, tri))
    if z_soffit > z_furn:
        for tri in _rect_x(x_furn, yk, yl, z_furn, z_soffit):
            faces.append((HARD, tri))
    # Cabinet eave outside the bay only. In the bay the cabinet front is the
    # room boundary; the void above the cabinets is not occupied air.
    for tri in _rect_x(w, 0.0, yk, 0.0, z_low):
        faces.append((HARD, tri))
    for tri in _rect_x(w, yl, length, 0.0, z_low):
        faces.append((HARD, tri))

    # Slopes, bay only.
    left = [
        (0.0, yk, z_eave),
        (x_ridge, yk, z_ridge),
        (x_ridge, yl, z_ridge),
        (0.0, yl, z_eave),
    ]
    right = [
        (x_ridge, yk, z_ridge),
        (x_furn, yk, z_eave),
        (x_furn, yl, z_eave),
        (x_ridge, yl, z_ridge),
    ]
    for tri in _quad(*left):
        faces.append((SLOPE, tri))
    for tri in _quad(*right):
        faces.append((SLOPE, tri))

    # Soffit the room actually sees: the vertical bulkhead at the cabinet line.
    # The underside is 20 mm above the cabinet tops and is not occupied air.
    for tri in _rect_x(x_furn, yk, yl, z_soffit, z_eave):
        faces.append((SOFFIT, tri))

    # Bass-trap faces. Top follows the room ceiling, not the attic.
    def _trap_face(y: float, name: str, into_positive_y: bool) -> None:
        # Polygon in the plane of constant y, room on the stated side.
        pts = [
            (0.0, y, z_low),
            (x_furn, y, z_low),
            (x_furn, y, z_soffit),
            (w, y, z_soffit),
            (w, y, z_low),
        ]
        # That polygon is only the part beside the cabinets below the soffit
        # plus a zero-height run. The tall part is under the slopes.
        slope_pts = [
            (0.0, y, z_low),
            (0.0, y, z_eave),
            (x_ridge, y, z_ridge),
            (x_furn, y, z_eave),
            (x_furn, y, z_soffit),
            (w, y, z_soffit),
            (w, y, z_low),
        ]
        # Fan from the first vertex. Winding is fixed by the normal flip later.
        origin = slope_pts[0]
        for a, b in zip(slope_pts[1:], slope_pts[2:]):
            faces.append((name, [origin, a, b]))

    _trap_face(yk, BASS_KITCHEN, True)
    _trap_face(yl, BASS_LIVING, False)

    tris = np.array([[list(v) for v in tri] for _name, tri in faces], dtype=float)
    names = [name for name, _tri in faces]
    unique = (HARD, GLASS, SLOPE, SOFFIT, BASS_KITCHEN, BASS_LIVING)
    index = {name: i for i, name in enumerate(unique)}
    ids = np.array([index[name] for name in names], dtype=np.int32)
    normals = _face_normals(tris)
    # Interior point: middle of the bay, standing height, clear of the soffit.
    interior = np.array([w * 0.35, 0.5 * (yk + yl), 1.2])
    centers = tris.mean(axis=1)
    flip = np.einsum("ij,ij->i", normals, interior - centers) < 0.0
    normals = normals.copy()
    normals[flip] *= -1.0
    tris = tris.copy()
    tris[flip, 1], tris[flip, 2] = tris[flip, 2].copy(), tris[flip, 1].copy()
    volume = _mesh_volume(tris)
    return Shell(tris, normals, ids, unique, volume)


def _face_normals(tris: np.ndarray) -> np.ndarray:
    edges_u = tris[:, 1] - tris[:, 0]
    edges_v = tris[:, 2] - tris[:, 0]
    raw = np.cross(edges_u, edges_v)
    length = np.linalg.norm(raw, axis=1, keepdims=True)
    length = np.maximum(length, 1e-15)
    return raw / length


def _mesh_volume(tris: np.ndarray) -> float:
    """Signed volume. Positive when normals point outward; we flipped inward, so negate."""
    signed = np.einsum("ij,ij->i", tris[:, 0], np.cross(tris[:, 1], tris[:, 2])).sum() / 6.0
    return float(-signed)


def batten_scattering(freq_hz: float, spacing_m: float, has_battens: bool) -> float:
    """Assumption, not a measurement.

    Scattering peaks when the batten spacing is about a wavelength and falls
    off when the spacing is either much finer than the wave (unresolved) or
    much coarser (locally specular strips). Hard faces stay specular.
    """
    if not has_battens or spacing_m <= 0.0:
        return 0.0
    wavelength = 343.0 / freq_hz
    ratio = np.log(spacing_m / wavelength)
    return float(np.exp(-0.5 * ratio * ratio))
