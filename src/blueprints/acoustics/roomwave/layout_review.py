"""Dimensioned layout sheets for review. No acoustic solve."""

from __future__ import annotations

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

from blueprints.acoustics.roomwave.geometry import Box, Shape, load_shape
from blueprints.acoustics.roomwave.rays import room_facets

ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"

_FILL = {
    "sofa": "#d7c4a3",
    "kitchen": "#f4f1ea",
    "tall": "#e4d2b0",
    "fridge": "#2c2c2c",
    "hood": "#d0d0d0",
    "island": "#f7f7f5",
    "table": "#c4a574",
    "chair": "#e6e2dc",
    "shelf": "#c4a06a",
    "rug": "#efe6d6",
}


def _mm(metres: float) -> str:
    return f"{metres * 1000:.0f}"


def write_sheets(dest: Path | None = None) -> list[Path]:
    shape = load_shape()
    out = dest or OUT
    out.mkdir(parents=True, exist_ok=True)
    paths = [
        _plan(shape, out / "layout-plan.png"),
        _section_xz(shape, out / "layout-section-xz.png"),
        _section_long(shape, out / "layout-section-long.png"),
        _mesh_3d(shape, out / "layout-mesh-3d.png"),
        _compare(shape, out / "layout-compare.png"),
    ]
    return paths


def _plan(shape: Shape, path: Path) -> Path:
    fig, ax = plt.subplots(figsize=(11.4, 6.4))
    # Plot Y horizontal, kitchen on the left (high Y), TV on the right (Y = 0).
    def sx(y: float) -> float:
        return shape.length - y

    ax.add_patch(plt.Rectangle((sx(shape.length), 0), shape.length, shape.x_wall, fill=False, lw=1.4, color="#222"))
    # Soffit overhead along the cabinet wall, between the traps.
    ax.add_patch(
        plt.Rectangle(
            (sx(shape.y_kitchen), shape.x_soffit),
            shape.y_kitchen - shape.y_living,
            shape.x_wall - shape.x_soffit,
            facecolor="#e8d7b0",
            edgecolor="#8a6a32",
            alpha=0.85,
            lw=0.6,
            label="soffit overhead",
        )
    )
    # Traps: full width, only above 2.45 m.
    for y0, y1 in ((0.0, shape.y_living), (shape.y_kitchen, shape.length)):
        ax.add_patch(
            plt.Rectangle(
                (sx(y1), 0),
                y1 - y0,
                shape.x_wall,
                facecolor="#d9e2ef",
                edgecolor="#1f4e79",
                alpha=0.35,
                lw=0.6,
            )
        )
    x0, x1, y0, y1 = shape.rug
    ax.add_patch(
        plt.Rectangle((sx(y1), x0), y1 - y0, x1 - x0, facecolor=_FILL["rug"], edgecolor="#b7a48a", lw=0.6, label="rug")
    )
    for box in shape.boxes:
        ax.add_patch(
            plt.Rectangle(
                (sx(box.y1), box.x),
                box.dy,
                box.dx,
                facecolor=_FILL.get(box.name, "#ddd"),
                edgecolor="#444",
                lw=0.7,
            )
        )
    tv_x0, tv_x1, _tz0, _tz1 = shape.tv
    ax.plot([sx(0.02), sx(0.02)], [tv_x0, tv_x1], color="#111", lw=6, solid_capstyle="butt", label="TV")
    sub = next(m for m in shape.sources if m.name == "sub")
    ax.scatter([sx(sub.y)], [sub.x], s=70, c="#a33b32", zorder=5, label="sub")
    ax.annotate(
        "sub",
        (sx(sub.y), sub.x),
        textcoords="offset points",
        xytext=(8, 6),
        color="#a33b32",
        fontsize=8,
    )
    for marker in shape.sources:
        if marker.group != "tv":
            continue
        ax.scatter([sx(marker.y)], [marker.x], s=28, c="#222", marker="s", zorder=5)
    for marker in shape.receivers:
        ax.scatter([sx(marker.y)], [marker.x], s=36, c="#1f4e79", marker="D", zorder=5)
        ax.annotate(marker.name, (sx(marker.y), marker.x), textcoords="offset points", xytext=(4, 4), fontsize=7, color="#1f4e79")
    # Overall dimensions.
    _dim_h(ax, sx(shape.length), sx(0), -0.55, f"{_mm(shape.length)} mm  (kitchen ← → TV)")
    _dim_v(ax, -0.45, 0, shape.x_wall, f"{_mm(shape.x_wall)} mm")
    ax.annotate("kitchen gable", (sx(shape.length) + 0.15, shape.x_wall + 0.15), fontsize=8, color="#444")
    ax.annotate("TV gable", (sx(0.05), shape.x_wall + 0.15), fontsize=8, color="#444", ha="right")
    ax.annotate("windows", (sx(shape.length * 0.5), -0.15), fontsize=8, color="#444", ha="center")
    ax.annotate("cabinet wall / soffit", (sx(shape.length * 0.55), shape.x_wall + 0.15), fontsize=8, color="#8a6a32")
    shelf = next(box for box in shape.boxes if box.name == "shelf")
    ax.annotate("shelf", (sx(0.5 * (shelf.y + shelf.y1)), shelf.x + 0.15), fontsize=8, color="#6b4e2e", ha="center")
    ax.set_aspect("equal")
    ax.set_xlim(-1.3, shape.length + 0.8)
    ax.set_ylim(-1.1, shape.x_wall + 0.7)
    ax.set_xlabel("metres from the kitchen gable  —  TV gable is on the right")
    ax.set_ylabel("X, window wall → cabinet wall (m)")
    ax.set_title("Floor plan — furniture, sub, ears. Traps are hatched; they only exist above 2450 mm.")
    ax.legend(loc="upper right", fontsize=8)
    fig.tight_layout()
    fig.savefig(path, dpi=140)
    plt.close(fig)
    return path


def _dim_h(ax, x0, x1, y, text):
    ax.annotate("", xy=(x1, y), xytext=(x0, y), arrowprops=dict(arrowstyle="<->", color="#333", lw=0.8))
    ax.text((x0 + x1) / 2, y - 0.18, text, ha="center", va="top", fontsize=8)


def _dim_v(ax, x, y0, y1, text):
    ax.annotate("", xy=(x, y1), xytext=(x, y0), arrowprops=dict(arrowstyle="<->", color="#333", lw=0.8))
    ax.text(x - 0.12, (y0 + y1) / 2, text, ha="right", va="center", fontsize=8, rotation=90)


def _section_xz(shape: Shape, path: Path) -> Path:
    fig, ax = plt.subplots(figsize=(9.2, 5.4))
    poly = [
        (0, 0),
        (shape.x_wall, 0),
        (shape.x_wall, shape.z_soffit),
        (shape.x_soffit, shape.z_soffit),
        (shape.x_soffit, shape.z_eave),
        (shape.x_false, shape.z_ridge),
        (0, shape.z_eave),
    ]
    xs, zs = zip(*poly)
    ax.fill(list(xs) + [xs[0]], list(zs) + [zs[0]], color="#f7f4ee", zorder=0)
    ax.plot(list(xs) + [xs[0]], list(zs) + [zs[0]], color="#222", lw=1.4)
    # Removed soffit, for comparison.
    removed = [
        (0, 0),
        (shape.x_wall, 0),
        (shape.x_wall, shape.z_wall),
        (shape.x_false, shape.z_ridge),
        (0, shape.z_eave),
    ]
    rx, rz = zip(*removed)
    ax.plot(rx, rz, color="#a33b32", ls="--", lw=1.0, label="slope if the soffit step is removed")
    ax.plot([0, shape.x_wall], [shape.z_cut, shape.z_cut], color="#1f4e79", ls=":", lw=1.0, label="trap bottom, 2450 mm")
    # A person and the soffit labels.
    ax.plot([1.2, 1.2], [0, 1.75], color="#888", lw=3, solid_capstyle="round")
    ax.scatter([1.2], [1.75], s=40, c="#888")
    ax.annotate("soffit step", (shape.x_soffit, shape.z_soffit), textcoords="offset points", xytext=(-70, -18), fontsize=8, color="#8a6a32")
    ax.annotate(f"eave {_mm(shape.z_eave)}", (0.05, shape.z_eave), fontsize=8, color="#333")
    ax.annotate(f"false ridge {_mm(shape.z_ridge)}", (shape.x_false, shape.z_ridge), textcoords="offset points", xytext=(6, 4), fontsize=8)
    ax.annotate(f"soffit underside {_mm(shape.z_soffit)}", (shape.x_wall - 0.05, shape.z_soffit), ha="right", fontsize=8, color="#8a6a32")
    ax.set_aspect("equal")
    ax.set_xlabel("X, window wall → cabinet wall (m)")
    ax.set_ylabel("Z (m)")
    ax.set_title("Cross-section. Slopes, false ridge, soffit step. Traps are at the two gables, not in this cut.")
    ax.legend(fontsize=8, loc="upper left")
    ax.set_xlim(-0.3, shape.x_wall + 0.4)
    ax.set_ylim(-0.2, shape.z_ridge + 0.4)
    fig.tight_layout()
    fig.savefig(path, dpi=140)
    plt.close(fig)
    return path


def _section_long(shape: Shape, path: Path) -> Path:
    """Elevation of the cabinet wall, kitchen gable on the left, TV gable on the right."""
    fig, ax = plt.subplots(figsize=(12.2, 5.2))

    def sx(y: float) -> float:
        return shape.length - y

    # Ceiling of the main volume at X = 2.2 m (window slope / toward the false ridge),
    # and the soffit underside on the cabinet wall.
    ys = np.linspace(0, shape.length, 200)
    z_main = []
    x_cut = 2.20
    for y in ys:
        if y < shape.y_living or y > shape.y_kitchen:
            z_main.append(shape.z_cut)
        else:
            z_main.append(shape.z_eave + x_cut * (shape.z_ridge - shape.z_eave) / shape.x_false)
    ax.fill_between([sx(y) for y in ys], 0, z_main, color="#f7f4ee", zorder=0)
    ax.plot([sx(y) for y in ys], z_main, color="#1f4e79", lw=1.2, label=f"ceiling at X = {x_cut:.1f} m")
    # Soffit underside between the traps.
    ax.plot(
        [sx(shape.y_kitchen), sx(shape.y_living)],
        [shape.z_soffit, shape.z_soffit],
        color="#8a6a32",
        lw=2.0,
        label=f"soffit underside {_mm(shape.z_soffit)} mm",
    )
    for box in shape.boxes:
        # Only pieces on or near the cabinet wall, plus the table and island in front.
        ax.add_patch(
            plt.Rectangle(
                (sx(box.y1), box.z),
                box.dy,
                box.dz,
                facecolor=_FILL.get(box.name, "#ddd"),
                edgecolor="#444",
                lw=0.6,
                alpha=0.95 if box.x + box.dx > shape.x_wall - 0.7 else 0.55,
            )
        )
    tv_x0, tv_x1, tz0, tz1 = shape.tv
    ax.add_patch(
        plt.Rectangle((sx(0.06), tz0), 0.08, tz1 - tz0, facecolor="#222", edgecolor="#222", label="TV")
    )
    sub = next(m for m in shape.sources if m.name == "sub")
    ax.scatter([sx(sub.y)], [sub.z], s=50, c="#a33b32", zorder=5)
    ax.annotate("sub", (sx(sub.y), sub.z), textcoords="offset points", xytext=(-18, 8), color="#a33b32", fontsize=8)
    for marker in shape.receivers:
        ax.scatter([sx(marker.y)], [marker.z], s=22, c="#1f4e79", marker="D", zorder=4)
    ax.annotate("kitchen", (sx(shape.length - 0.4), 2.6), fontsize=9, ha="left")
    ax.annotate("TV wall", (sx(0.35), 2.6), fontsize=9, ha="right")
    ax.annotate(
        f"TV screen X {_mm(tv_x0)}–{_mm(tv_x1)}",
        (sx(0.15), tz1 + 0.08),
        fontsize=7,
        ha="right",
        color="#222",
    )
    ax.set_xlim(-0.2, shape.length + 0.2)
    ax.set_ylim(-0.1, max(z_main) + 0.4)
    ax.set_xlabel("kitchen gable on the left, TV gable on the right")
    ax.set_ylabel("Z (m)")
    ax.set_title("Longitudinal view, same handedness as Petr's elevation")
    ax.legend(fontsize=8, loc="upper right")
    fig.tight_layout()
    fig.savefig(path, dpi=140)
    plt.close(fig)
    return path


def _mesh_3d(shape: Shape, path: Path) -> Path:
    v0, v1, v2, labels = room_facets(shape, "as_built", True)
    fig = plt.figure(figsize=(10.2, 6.4))
    ax = fig.add_subplot(111, projection="3d")
    colors = {
        "slope": "#d9c7a2",
        "soffit": "#c4a574",
        "floor": "#eeeae4",
        "rug": "#e4d5bc",
        "plaster": "#f7f7f5",
        "glass": "#d5e4f2",
        "sofa": "#c8b08a",
        "kitchen": "#dedad2",
        "island": "#eeeae4",
        "table": "#b8956a",
        "chair": "#e6e2dc",
        "shelf": "#e7d3a1",
        "living_trap": "#c5d4ea",
        "kitchen_trap": "#c5d4ea",
        "living_trap_bottom": "#9bb4d6",
        "kitchen_trap_bottom": "#9bb4d6",
    }
    faces = []
    face_colors = []
    for a, b, c, label in zip(v0, v1, v2, labels):
        faces.append([a, b, c])
        face_colors.append(colors.get(label, "#cccccc"))
    coll = Poly3DCollection(faces, facecolors=face_colors, edgecolors="#666666", linewidths=0.15, alpha=0.95)
    ax.add_collection3d(coll)
    sub = next(m for m in shape.sources if m.name == "sub")
    ax.scatter([sub.x], [sub.y], [sub.z], c="#a33b32", s=40)
    ax.set_xlim(0, shape.x_wall)
    ax.set_ylim(0, shape.length)
    ax.set_zlim(0, shape.z_ridge)
    ax.set_xlabel("X → cabinet")
    ax.set_ylabel("Y → kitchen")
    ax.set_zlabel("Z")
    ax.set_title("Room surfaces used by the wave model (as built, with furniture)")
    ax.view_init(elev=22, azim=-58)
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)
    return path


def _box_faces(box: Box) -> list[tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]]:
    x0, y0, z0, x1, y1, z1 = box.x, box.y, box.z, box.x1, box.y1, box.z1
    p = lambda x, y, z: np.array([x, y, z], dtype=float)
    return [
        (p(x0, y0, z0), p(x1, y0, z0), p(x1, y1, z0), p(x0, y1, z0)),
        (p(x0, y0, z1), p(x0, y1, z1), p(x1, y1, z1), p(x1, y0, z1)),
        (p(x0, y0, z0), p(x0, y0, z1), p(x1, y0, z1), p(x1, y0, z0)),
        (p(x0, y1, z0), p(x1, y1, z0), p(x1, y1, z1), p(x0, y1, z1)),
        (p(x0, y0, z0), p(x0, y1, z0), p(x0, y1, z1), p(x0, y0, z1)),
        (p(x1, y0, z0), p(x1, y0, z1), p(x1, y1, z1), p(x1, y1, z0)),
    ]


def _ceiling_quads(shape: Shape, x_near: float) -> list[tuple[np.ndarray, ...]]:
    """Slope and soffit in front of the camera, split so the pitch reads."""
    y0, y1 = shape.y_living, shape.y_kitchen
    cuts = np.linspace(y0, y1, 8)
    x0 = min(x_near, shape.x_false - 0.2)
    quads = []
    for a, b in zip(cuts, cuts[1:]):
        z_near = shape.z_eave + (x0 / shape.x_false) * (shape.z_ridge - shape.z_eave)
        quads.append((
            np.array([x0, a, z_near]),
            np.array([shape.x_false, a, shape.z_ridge]),
            np.array([shape.x_false, b, shape.z_ridge]),
            np.array([x0, b, z_near]),
        ))
        quads.append((
            np.array([shape.x_false, a, shape.z_ridge]),
            np.array([shape.x_soffit, a, shape.z_eave]),
            np.array([shape.x_soffit, b, shape.z_eave]),
            np.array([shape.x_false, b, shape.z_ridge]),
        ))
        quads.append((
            np.array([shape.x_soffit, a, shape.z_eave]),
            np.array([shape.x_soffit, a, shape.z_soffit]),
            np.array([shape.x_soffit, b, shape.z_soffit]),
            np.array([shape.x_soffit, b, shape.z_eave]),
        ))
        quads.append((
            np.array([shape.x_soffit, a, shape.z_soffit]),
            np.array([shape.x_wall, a, shape.z_soffit]),
            np.array([shape.x_wall, b, shape.z_soffit]),
            np.array([shape.x_soffit, b, shape.z_soffit]),
        ))
    return quads


def _compare(shape: Shape, path: Path) -> Path:
    """Wide view toward the cabinet wall, kitchen gable on the left, beside Petr's image."""
    cam = np.array([0.35, 5.55, 1.35])
    forward = np.array([1.0, 0.0, 0.12])
    forward = forward / np.linalg.norm(forward)
    up = np.array([0.0, 0.0, 1.0])
    right = np.cross(forward, up)
    right = right / np.linalg.norm(right)
    up_cam = np.cross(right, forward)
    fov = np.deg2rad(118.0)

    def project(points: np.ndarray) -> tuple[np.ndarray, np.ndarray, float]:
        rel = points - cam
        depth = rel @ forward
        horizontal = rel @ right
        vertical = rel @ up_cam
        scale = 1.0 / np.tan(fov / 2.0)
        safe = np.maximum(depth, 1e-3)
        u = horizontal / safe * scale
        v = vertical / safe * scale
        return u, v, depth

    faces: list[tuple[float, np.ndarray, np.ndarray, str]] = []
    for quad in _ceiling_quads(shape, 1.15):
        pts = np.vstack(quad)
        u, v, depth = project(pts)
        if float(np.min(depth)) < 0.35:
            continue
        faces.append((float(np.mean(depth)), u, v, "#f3efe6"))
    floor = (
        np.array([1.15, 0.0, 0.0]),
        np.array([shape.x_wall, 0.0, 0.0]),
        np.array([shape.x_wall, shape.length, 0.0]),
        np.array([1.15, shape.length, 0.0]),
    )
    u, v, depth = project(np.vstack(floor))
    faces.append((float(np.mean(depth)), u, v, "#f7f5f2"))
    for box in shape.boxes:
        color = _FILL.get(box.name, "#dddddd")
        for quad in _box_faces(box):
            pts = np.vstack(quad)
            u, v, depth = project(pts)
            if float(np.min(depth)) < 0.25:
                continue
            faces.append((float(np.mean(depth)), u, v, color))
    tv_x0, tv_x1, tz0, tz1 = shape.tv
    tv = np.array([
        [tv_x0, 0.04, tz0],
        [tv_x1, 0.04, tz0],
        [tv_x1, 0.04, tz1],
        [tv_x0, 0.04, tz1],
    ])
    u, v, depth = project(tv)
    faces.append((float(np.mean(depth)), u, v, "#1a1a1a"))
    back = np.array([
        [shape.x_wall, 0.0, 0.0],
        [shape.x_wall, shape.length, 0.0],
        [shape.x_wall, shape.length, shape.z_soffit],
        [shape.x_wall, 0.0, shape.z_soffit],
    ])
    u, v, depth = project(back)
    faces.append((float(np.mean(depth)) + 0.4, u, v, "#fbfbfb"))
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    sub_box = Box("sub", sub.x - 0.18, sub.y - 0.18, 0.0, 0.36, 0.36, 0.40)
    for quad in _box_faces(sub_box):
        u, v, depth = project(np.vstack(quad))
        if float(np.min(depth)) > 0.25:
            faces.append((float(np.mean(depth)), u, v, "#a33b32"))
    faces.sort(key=lambda item: item[0], reverse=True)

    ref = Path("/workspace/obyvak-circled.jpg")
    if ref.is_file():
        fig, axes = plt.subplots(1, 2, figsize=(14.5, 5.6))
        axes[0].imshow(plt.imread(ref))
        axes[0].set_title("Petr's view, sub circled")
        axes[0].axis("off")
        ax = axes[1]
    else:
        fig, ax = plt.subplots(figsize=(12.4, 5.4))
    for _depth, u, v, color in faces:
        ax.fill(u, v, facecolor=color, edgecolor="#555555", lw=0.3)
    su, sv, _sd = project(np.array([[sub.x, sub.y, 0.45]]))
    ax.scatter(su, sv, s=80, c="#a33b32", zorder=6)
    ax.annotate("sub", (su[0], sv[0]), textcoords="offset points", xytext=(-14, 8), color="#a33b32", fontsize=8)
    # Person at the island, 1.75 m, for scale.
    person = np.array([[2.35, 9.15, 0.0], [2.35, 9.15, 1.75]])
    pu, pv, _pd = project(person)
    ax.plot(pu, pv, color="#444", lw=3, solid_capstyle="round")
    ax.scatter([pu[1]], [pv[1]], s=28, c="#444", zorder=5)
    ax.set_aspect("equal")
    ax.set_xlim(-1.05, 1.05)
    ax.set_ylim(-0.48, 0.58)
    ax.axis("off")
    ax.set_title("Model, same viewpoint: cabinet wall, kitchen left, TV right")
    fig.tight_layout()
    fig.savefig(path, dpi=140)
    plt.close(fig)
    return path


def main() -> None:
    for path in write_sheets():
        print(path)


if __name__ == "__main__":
    main()
