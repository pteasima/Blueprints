"""Dimensioned layout sheets for review. No acoustic solve."""

from __future__ import annotations

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

from blueprints.acoustics.roomwave.geometry import Shape, load_shape
from blueprints.acoustics.roomwave.rays import room_facets

ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"

_FILL = {
    "sofa": "#d7c4a3",
    "kitchen": "#f4f1ea",
    "tall": "#e4d2b0",
    "fridge": "#2c2c2c",
    "oven": "#2a2a2a",
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
        *_orthographic(shape, out),
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
    ax.plot(
        [sx(shape.y_kitchen), sx(shape.y_living)],
        [shape.z_ridge, shape.z_ridge],
        color="#6b4e2e",
        lw=1.2,
        ls="--",
        label=f"false ridge {_mm(shape.z_ridge)} mm",
    )
    ax.set_xlim(-0.2, shape.length + 0.2)
    ax.set_ylim(-0.15, shape.z_ridge + 0.35)
    ax.set_xlabel("kitchen gable on the left, TV gable on the right")
    ax.set_ylabel("Z (m)")
    ax.set_title("Longitudinal view. Pitch is across the width, so ridge and eave are level lines.")
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
        "tall": "#e4d2b0",
        "fridge": "#3a3a3a",
        "oven": "#2a2a2a",
        "island": "#eeeae4",
        "table": "#b8956a",
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


# Measured on docs/acoustics/reference.jpg. Interior corner where the kitchen
# gable meets the cabinet wall, the corner where the TV gable meets it, and the
# floor line. The eave (3151 mm) then lands on the drawing's ceiling line.
_X_LEFT = 262
_X_RIGHT = 2206
_Y_FLOOR = 1077
# Room pixels only, including the ridge above the reference's black bar and the
# TV on the gable face to the right of the corner.
_CROP = (180, 140, 2560, 1165)

_RGBA = {
    "sofa": (215, 196, 163, 255),
    "kitchen": (244, 241, 234, 255),
    "tall": (228, 210, 176, 255),
    "fridge": (44, 44, 44, 255),
    "oven": (28, 28, 28, 255),
    "island": (247, 247, 245, 255),
    "table": (196, 165, 116, 255),
    "shelf": (196, 160, 106, 255),
    "room": (247, 244, 238, 255),
    "roof": (236, 228, 214, 255),
    "trap": (197, 212, 230, 255),
    "line": (34, 34, 34, 255),
    "soffit": (138, 106, 50, 255),
    "ridge": (107, 78, 46, 255),
    "sub": (163, 59, 50, 255),
    "tv": (20, 20, 20, 255),
}


def _ppm(length: float) -> float:
    return (_X_RIGHT - _X_LEFT) / length


def _px(y: float, z: float, length: float) -> tuple[float, float]:
    scale = _ppm(length)
    return _X_RIGHT - y * scale, _Y_FLOOR - z * scale


def _font(size: int):
    from PIL import ImageFont

    return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", size)


def _dashed(draw, p0, p1, fill, width=2, dash=14, gap=8) -> None:
    x0, y0 = p0
    x1, y1 = p1
    dist = float(np.hypot(x1 - x0, y1 - y0))
    if dist < 1.0:
        return
    ux, uy = (x1 - x0) / dist, (y1 - y0) / dist
    travelled = 0.0
    while travelled < dist:
        end = min(travelled + dash, dist)
        draw.line(
            [(x0 + ux * travelled, y0 + uy * travelled), (x0 + ux * end, y0 + uy * end)],
            fill=fill,
            width=width,
        )
        travelled += dash + gap


def _rect(draw, length: float, y0: float, y1: float, z0: float, z1: float, **kwargs) -> None:
    ax, ay = _px(y1, z1, length)
    bx, by = _px(y0, z0, length)
    draw.rectangle([ax, ay, bx, by], **kwargs)


def _draw_elevation(shape: Shape, canvas, labels: bool, shell_fill: bool = True) -> None:
    """Orthographic elevation in the reference pixel frame. Kitchen left, TV right."""
    from PIL import ImageDraw

    draw = ImageDraw.Draw(canvas)
    length = shape.length
    line = _RGBA["line"]

    def poly(points, **kwargs):
        draw.polygon([_px(y, z, length) for y, z in points], **kwargs)

    # Roof above the window-wall cut, then the cut itself, then traps at the gables.
    # The overlay skips these fills so the photograph stays visible.
    if shell_fill:
        poly(
            [
                (shape.y_living, shape.z_eave),
                (shape.y_kitchen, shape.z_eave),
                (shape.y_kitchen, shape.z_ridge),
                (shape.y_living, shape.z_ridge),
            ],
            fill=_RGBA["roof"],
        )
        for y0, y1 in ((0.0, shape.y_living), (shape.y_kitchen, length)):
            poly(
                [(y0, shape.z_cut), (y1, shape.z_cut), (y1, shape.z_ridge), (y0, shape.z_ridge)],
                fill=_RGBA["trap"],
            )
        poly(
            [
                (0.0, 0.0),
                (0.0, shape.z_cut),
                (shape.y_living, shape.z_cut),
                (shape.y_living, shape.z_eave),
                (shape.y_kitchen, shape.z_eave),
                (shape.y_kitchen, shape.z_cut),
                (length, shape.z_cut),
                (length, 0.0),
            ],
            fill=_RGBA["room"],
            outline=line,
        )
    # Far pieces first (cabinet wall), then pieces closer to the window wall.
    # The sofa is two silhouettes. The chaise is the same Y span, toward the
    # windows, so this elevation does not give it a separate outline.
    outline = (40, 40, 40, 255)
    sofa = [box for box in shape.boxes if box.name == "sofa"]
    others = [box for box in shape.boxes if box.name != "sofa"]
    for box in sorted(others, key=lambda item: item.x, reverse=True):
        colour = _RGBA.get(box.name, (220, 220, 220, 255))
        _rect(draw, length, box.y, box.y1, box.z, box.z1, fill=colour, outline=outline, width=2)
    for group in (
        [box for box in sofa if box.z1 > 0.75],
        [box for box in sofa if box.z1 <= 0.75],
    ):
        if not group:
            continue
        _rect(
            draw,
            length,
            min(box.y for box in group),
            max(box.y1 for box in group),
            min(box.z for box in group),
            max(box.z1 for box in group),
            fill=_RGBA["sofa"],
            outline=outline,
            width=2,
        )
    _tv_x0, _tv_x1, tz0, tz1 = shape.tv
    _rect(draw, length, -0.02, 0.07, tz0, tz1, fill=_RGBA["tv"], outline=_RGBA["tv"])
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    sx, sy = _px(sub.y, 0.18, length)
    draw.ellipse([sx - 8, sy - 8, sx + 8, sy + 8], fill=_RGBA["sub"], outline=(255, 255, 255, 255))

    # Shell lines on top of the fills. The cut is at the window wall, so the
    # ceiling of the section is the eave. Ridge and soffit are the other end
    # of the pitch, drawn so they stay visible.
    _dashed(
        draw,
        _px(shape.y_living, shape.z_ridge, length),
        _px(shape.y_kitchen, shape.z_ridge, length),
        _RGBA["ridge"],
        width=2,
    )
    _dashed(
        draw,
        _px(shape.y_living, shape.z_soffit, length),
        _px(shape.y_kitchen, shape.z_soffit, length),
        _RGBA["soffit"],
        width=3,
    )
    draw.line([_px(0.0, 0.0, length), _px(length, 0.0, length)], fill=line, width=3)
    draw.line([_px(0.0, 0.0, length), _px(0.0, shape.z_ridge, length)], fill=line, width=3)
    draw.line([_px(length, 0.0, length), _px(length, shape.z_ridge, length)], fill=line, width=3)
    draw.line(
        [_px(shape.y_living, shape.z_eave, length), _px(shape.y_kitchen, shape.z_eave, length)],
        fill=line,
        width=2,
    )
    if not labels:
        return
    font = _font(22)
    small = _font(18)
    draw.text(_px(length - 0.15, shape.z_ridge - 0.05, length), "kitchen gable", fill=line, font=small)
    rx, ry = _px(0.15, shape.z_ridge - 0.05, length)
    draw.text((rx - 150, ry), "TV gable", fill=line, font=small)
    draw.text(_px(shape.length * 0.55, shape.z_ridge + 0.02, length), "false ridge", fill=_RGBA["ridge"], font=small)
    draw.text(
        _px(shape.length * 0.62, shape.z_eave + 0.08, length),
        "eave, cut at the window wall",
        fill=line,
        font=small,
    )
    draw.text(
        _px(8.6, shape.z_soffit + 0.22, length),
        "soffit underside",
        fill=_RGBA["soffit"],
        font=small,
    )
    draw.text(_px(0.55, shape.z_cut + 0.15, length), "trap", fill=(31, 78, 121, 255), font=small)
    draw.text(_px(length - 0.15, shape.z_cut + 0.15, length), "trap", fill=(31, 78, 121, 255), font=small)
    named = (
        ("sofa", 2.15, 0.22),
        ("lamella", 2.20, 1.55),
        ("tall cabinets", 5.15, 1.70),
        ("counters", 8.80, 0.32),
    )
    for text, y, z in named:
        draw.text(_px(y, z, length), text, fill=(30, 30, 30, 255), font=font)
    draw.text((sx + 12, sy - 28), "sub", fill=_RGBA["sub"], font=small)
    tvx, tvy = _px(-0.02, tz1, length)
    draw.text((tvx - 36, tvy - 26), "TV", fill=line, font=small)
    # 1 m scale, just under the floor line.
    x0, y0 = _px(2.0, -0.22, length)
    x1, _y1 = _px(1.0, -0.22, length)
    draw.line([(x0, y0), (x1, y0)], fill=line, width=3)
    draw.text(((x0 + x1) / 2 - 18, y0 + 4), "1 m", fill=line, font=small)


def _orthographic(shape: Shape, out: Path) -> list[Path]:
    """Side-by-side and a 50% overlay, both in the reference's pixel frame."""
    from PIL import Image, ImageDraw

    ref_path = ROOT / "docs" / "acoustics" / "reference.jpg"
    ref = Image.open(ref_path).convert("RGBA")
    model = Image.new("RGBA", ref.size, (255, 255, 255, 255))
    _draw_elevation(shape, model, labels=True, shell_fill=True)

    overlay_layer = Image.new("RGBA", ref.size, (0, 0, 0, 0))
    _draw_elevation(shape, overlay_layer, labels=False, shell_fill=False)
    # Half the render on the photograph. Pixels with nothing drawn stay the reference.
    faded = overlay_layer.copy()
    alpha = faded.getchannel("A").point(lambda value: int(value * 0.5))
    faded.putalpha(alpha)
    overlay = Image.alpha_composite(ref, faded)

    left, top, right, bottom = _CROP
    ref_c = ref.crop((left, top, right, bottom)).convert("RGB")
    mod_c = model.crop((left, top, right, bottom)).convert("RGB")
    gap = 28
    side = Image.new("RGB", (ref_c.width * 2 + gap, ref_c.height + 46), (255, 255, 255))
    side.paste(ref_c, (0, 46))
    side.paste(mod_c, (ref_c.width + gap, 46))
    caption = ImageDraw.Draw(side)
    font = _font(28)
    caption.text((24, 8), "Petr's elevation", fill=(20, 20, 20), font=font)
    caption.text((ref_c.width + gap + 24, 8), "Model, same scale — orthographic, kitchen left, TV right", fill=(20, 20, 20), font=font)

    paths = {
        out / "layout-elevation.png": mod_c,
        out / "layout-side-by-side.png": side,
        out / "layout-overlay.png": overlay.crop((left, top, right, bottom)).convert("RGB"),
    }
    # layout-compare.png is the pair Petr reviews. The old wide-angle render is gone.
    paths[out / "layout-compare.png"] = paths[out / "layout-side-by-side.png"]
    written = []
    for path, image in paths.items():
        image.save(path, quality=92)
        written.append(path)
    _print_element_table(shape)
    return written


def _print_element_table(shape: Shape) -> None:
    """Model edges against the lines measured on the reference, in millimetres."""
    length = shape.length
    scale = _ppm(length)

    def z_of(py: float) -> float:
        return (_Y_FLOOR - py) / scale

    print(f"frame px/m {scale:.3f}  eave py { _px(0, shape.z_eave, length)[1]:.1f}  ridge py {_px(0, shape.z_ridge, length)[1]:.1f}")
    print(f"soffit py {_px(0, shape.z_soffit, length)[1]:.1f}  floor py {_Y_FLOOR}")
    groups: dict[str, list[Box]] = {}
    for box in shape.boxes:
        groups.setdefault(box.name, []).append(box)
    for name, boxes in groups.items():
        y0 = min(box.y for box in boxes)
        y1 = max(box.y1 for box in boxes)
        z0 = min(box.z for box in boxes)
        z1 = max(box.z1 for box in boxes)
        print(
            f"{name:8} Y {y0*1000:7.0f}–{y1*1000:7.0f}  Z {z0*1000:6.0f}–{z1*1000:6.0f}"
            f"  px x {_px(y1, 0, length)[0]:.0f}–{_px(y0, 0, length)[0]:.0f}"
            f"  py {_px(0, z1, length)[1]:.0f}–{_px(0, z0, length)[1]:.0f}"
        )
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    print(f"sub      X {sub.x*1000:.0f} Y {sub.y*1000:.0f} Z {sub.z*1000:.0f}  px {_px(sub.y, 0.18, length)}")
    print(f"reference ceiling line is py 524, which is Z {z_of(524)*1000:.0f} mm")


def main() -> None:
    for path in write_sheets():
        print(path)


if __name__ == "__main__":
    main()
