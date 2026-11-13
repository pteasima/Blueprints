"""PNG previews of one kitchen run, straight from models/kitchen_cabinet.py.

    python scripts/render_kitchen_run.py KR-ISL [--bay SF-I600a] [--open SF-I600a-D1,SF-T2-DOOR1,SF-BH800-LIFT1,SF-BH800-LIFT2] [--out DIR]

Writes ``<run>-iso.png`` (the whole monoblock, worktop see-through),
``<run>-plan.png`` (a plan cut at mid carcass height with every bay's clear
width), ``<run>-front.png`` (the fronts as you face them: every drawer,
door with its hinge side, lift front, filler and appliance, labelled; the
space an AVENTOS lift front needs open in red) and, with ``--bay``, ``<bay>-isolated.png``: only that bay's group
members, which is what the viewer's "Hide all others" keeps. Every number
comes from ``kitchen_cabinet.runs``; nothing here is a typed-in size.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from mpl_toolkits.mplot3d.art3d import Poly3DCollection  # noqa: E402

import ground_floor  # noqa: E402
import kitchen_cabinet as kc  # noqa: E402

COLORS = {
    "EndSide": "#c9822b",
    "Divider": "#e07a1f",
    "CentralBack": "#8d5a2b",
    "Back": "#8d5a2b",
    "Bottom": "#b88a4a",
    "Rail": "#b88a4a",
    "Top": "#b88a4a",
    "Front": "#e9c46a",
    "Drawer": "#f2d27a",
    "PullOut": "#f4b860",
    "Door": "#9ecae1",
    "Lift": "#9ecae1",
    "LiftMechanism": "#333333",
    "Clearance": "#e41a1c",
    "Filler": "#c7b299",
    "Shelf": "#a0785a",
    "Board": "#a0785a",
    "Packer": "#6b4f3a",
    "Appliance": "#3a3a3a",
    "Leg": "#444444",
    "Hob": "#111111",
    "Plinth": "#555555",
    "Worktop": "#ece9e2",
    "Cladding": "#d9d5cc",
}
ALPHA = {"Worktop": 0.35, "Cladding": 0.45, "Front": 0.55, "Door": 0.6, "Lift": 0.6, "Clearance": 0.12}
FRONT_ROLES = ("Front", "Drawer", "PullOut", "Door", "Lift", "Filler", "Appliance")
LIFT_OPEN_RAD = np.radians(116.0)  # AVENTOS HF top's largest opening angle (Blum)


def _box_faces(box, offset):
    a0, a1, c0, c1, z0, z1 = box
    p = np.array(
        [[a0, c0, z0], [a1, c0, z0], [a1, c1, z0], [a0, c1, z0], [a0, c0, z1], [a1, c0, z1], [a1, c1, z1], [a0, c1, z1]]
    ) + np.array(offset)
    idx = [(0, 1, 2, 3), (4, 5, 6, 7), (0, 1, 5, 4), (2, 3, 7, 6), (1, 2, 6, 5), (0, 3, 7, 4)]
    return [p[list(i)] for i in idx]


def _swing(face, part, angle=np.pi / 2):
    """A door leaf opened ``angle`` about its hinge edge, outward."""
    leaf = part.door
    a0, a1 = part.boxes[0][0], part.boxes[0][1]
    free = 1.0 if abs(leaf.hinge_a - a0) < abs(leaf.hinge_a - a1) else -1.0
    # Turn the free-edge direction (free, 0) towards the outward normal (0, out).
    t = angle * (1.0 if free * leaf.out > 0 else -1.0)
    ca, sa = np.cos(t), np.sin(t)
    out = face.copy()
    da, dc = face[:, 0] - leaf.hinge_a, face[:, 1] - leaf.face_c
    out[:, 0] = leaf.hinge_a + ca * da - sa * dc
    out[:, 1] = leaf.face_c + sa * da + ca * dc
    return out


def _lift_open(face, part, bay, run):
    """A lift front drawn open (approximate): the front, or the upper front
    of a bi-fold pair, turned up and out about its top edge to the largest
    opening angle; the lower front of a pair folded flat behind it."""
    tf = run.params["FrontThickness"]
    out = -1.0 if bay.front_low else 1.0
    a0, a1, c0, c1, z0, z1 = part.boxes[0]
    inner = c1 if bay.front_low else c0
    upper = [p for p in run.parts if p.role == "Lift" and p.id.startswith(bay.id + "-LIFT")]
    top = max(p.boxes[0][5] for p in upper)
    lower = part.id.endswith("2")
    t = LIFT_OPEN_RAD
    res = face.copy()
    if lower:
        # fold: shift onto the upper front's inner face, then turn with it
        top_part = min(upper, key=lambda p: -p.boxes[0][5])
        dz = top_part.boxes[0][4] - z0
        res = res.copy()
        res[:, 2] = res[:, 2] + dz
        res[:, 1] = res[:, 1] + out * -tf
    u = out * (res[:, 1] - inner)
    dz = res[:, 2] - top
    u2 = u * np.cos(t) - dz * np.sin(t)
    z2 = u * np.sin(t) + dz * np.cos(t)
    res[:, 1] = inner + out * u2
    res[:, 2] = top + z2
    return res


def iso(run, parts, open_ids, path: Path, title: str, elev=26, azim=-62, clearances=True):
    owner = {m: b for b in run.bays for m in b.members}
    if clearances:
        ids = {p.id for p in parts}
        extra = [kc.Part(f"{bid}-CLEAR", "open front", "Clearance", [box]) for bid, box in run.clearances
                 if f"{bid}-LIFT" in ids or f"{bid}-LIFT1" in ids]
        parts = list(parts) + extra
    fig = plt.figure(figsize=(11, 9), dpi=150)
    ax = fig.add_subplot(projection="3d")
    light = np.array([-0.4, -0.7, 0.6])
    light /= np.linalg.norm(light)
    lo = np.array([np.inf] * 3)
    hi = -lo
    for part in parts:
        off = (0.0, 0.0, 0.0)
        if part.drawer is not None and part.id in open_ids:
            off = (0.0, part.drawer.out * part.drawer.extension, 0.0)
        faces = [f for box in part.boxes for f in _box_faces(box, off)]
        if part.door is not None and part.id in open_ids:
            faces = [_swing(f, part) for f in faces]
        if part.role == "Lift" and part.id in open_ids:
            faces = [_lift_open(f, part, owner[part.id], run) for f in faces]
        base = np.array(matplotlib.colors.to_rgb(COLORS.get(part.role, "#999999")))
        cols = []
        for f in faces:
            n = np.cross(f[1] - f[0], f[2] - f[0])
            s = 0.55 + 0.45 * abs(float(np.dot(n / (np.linalg.norm(n) or 1.0), light)))
            cols.append(tuple(np.clip(base * s, 0, 1)) + (ALPHA.get(part.role, 1.0),))
        ax.add_collection3d(Poly3DCollection(faces, facecolors=cols, edgecolors=(0, 0, 0, 0.25), linewidths=0.2))
        pts = np.vstack(faces)
        lo, hi = np.minimum(lo, pts.min(0)), np.maximum(hi, pts.max(0))
    span = hi - lo
    ax.set_xlim(lo[0], hi[0])
    ax.set_ylim(lo[1], hi[1])
    ax.set_zlim(lo[2], hi[2])
    ax.set_box_aspect(tuple(span))
    ax.view_init(elev=elev, azim=azim)
    ax.set_axis_off()
    ax.set_title(title, fontsize=9)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def plan(run, path: Path):
    z = (run.carcass_z0 + run.carcass_z1) / 2.0
    fig, ax = plt.subplots(figsize=(12, 7), dpi=150)
    for part in run.parts:
        for a0, a1, c0, c1, z0, z1 in part.boxes:
            if part.role == "Worktop":
                ax.add_patch(plt.Rectangle((a0, c0), a1 - a0, c1 - c0, fc="none", ec="#777", lw=0.8, ls="--"))
                for v in part.voids:
                    ax.add_patch(plt.Rectangle((v.a0, v.c0), v.a1 - v.a0, v.c1 - v.c0, fc="none", ec="#2a9", lw=0.8))
                continue
            if not (z0 <= z <= z1) or part.drawer is not None:
                continue
            ax.add_patch(plt.Rectangle((a0, c0), a1 - a0, c1 - c0, fc=COLORS.get(part.role, "#999"), ec="k", lw=0.3))
    for bay in run.bays:
        label = f"{bay.id}\n{bay.width:.0f}" + ("\nniche" if bay.niche else f"\nclear {bay.clear_width:.0f}")
        ax.text((bay.a0 + bay.a1) / 2, (bay.c0 + bay.c1) / 2, label, ha="center", va="center", fontsize=7)
    if run.worktop:
        a0, a1, c0, c1, _, zt = run.worktop
        ax.text((a0 + a1) / 2, c0 - 25, f"worktop {a1 - a0:.0f} × {c1 - c0:.0f}, top {zt:.0f}",
                ha="center", va="top", fontsize=8)
    ax.autoscale_view()
    ax.set_aspect("equal")
    ax.margins(0.06)
    ax.set_axis_off()
    ax.set_title(f"{run.id} — plan cut at z = {z:.0f} mm (run frame; bays labelled with clear inner width)", fontsize=9)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def front(run, path: Path):
    """The fronts as you face them (run frame a flipped when the front is
    at c1, so your left is the image's left), labelled with their id, size,
    hinge side and contents."""
    owner_ids = {m for b in run.bays for m in b.members}
    if not any(p.role in FRONT_ROLES and p.id in owner_ids for p in run.parts):
        return  # box bodies only (the dining run): nothing to draw
    fig, ax = plt.subplots(figsize=(14, 8), dpi=150)
    flips = {b.id: not b.front_low for b in run.bays}
    owner = {m: b for b in run.bays for m in b.members}
    for part in run.parts:
        bay = owner.get(part.id)
        if part.role not in FRONT_ROLES or bay is None:
            continue
        if part.role == "Appliance" and "Zone" not in part.props:
            continue  # disposers and taps are not on the fronts' plane
        a0, a1, _c0, _c1, z0, z1 = part.boxes[0]
        x0, x1 = (-a1, -a0) if flips[bay.id] else (a0, a1)
        ax.add_patch(plt.Rectangle((x0, z0), x1 - x0, z1 - z0, fc=COLORS.get(part.role, "#999"), ec="k", lw=0.5,
                                   alpha=0.9))
        bits = [part.id.replace(bay.id + "-", "") if part.role != "Appliance" else part.name,
                f"{a1 - a0:.0f}×{z1 - z0:.0f}"]
        if part.role == "Lift":
            bits.append(f"{part.props.get('FittingCode')} lift, {part.props.get('FrontWeight')} kg")
        if part.door is not None:
            bits.append(f"hinge {part.door.hinge}")
            hx = x0 if (part.door.hinge == "L") else x1
            ax.plot([hx, hx], [z0 + 40, z1 - 40], color="#c00", lw=2.0)
        if part.drawer is not None and part.drawer.items:
            bits.append(f"{len(part.drawer.items)} {part.props.get('ItemKind') or ''}".strip())
        if part.drawer is not None and part.drawer.trimmed:
            bits.append(f"box −{part.drawer.trimmed:.0f}")
        content = part.props.get("Contents")
        if content:
            bits.append(str(content)[:38])
        ax.text((x0 + x1) / 2, (z0 + z1) / 2, "\n".join(bits), ha="center", va="center", fontsize=5.5,
                color="w" if part.role == "Appliance" else "k")
    for bay in run.bays:
        x0, x1 = (-bay.a1, -bay.a0) if not bay.front_low else (bay.a0, bay.a1)
        top = bay.z_base + bay.height if bay.z_base else run.carcass_z1
        top += max((b[5] - b[4] for bid, b in run.clearances if bid == bay.id), default=0.0)
        ax.text((x0 + x1) / 2, top + 60, f"{bay.id} {bay.width:.0f}", ha="center", va="bottom", fontsize=7,
                weight="bold")
    ax.autoscale_view()
    ax.set_aspect("equal")
    ax.margins(0.05)
    ax.set_axis_off()
    for bay_id, (a0, a1, _c0, _c1, z0, z1) in run.clearances:
        bay = run.bay(bay_id)
        x0, x1 = (-a1, -a0) if not bay.front_low else (a0, a1)
        ax.add_patch(plt.Rectangle((x0, z0), x1 - x0, z1 - z0, fc="#e41a1c", ec="#e41a1c", alpha=0.15, lw=0.6))
        ax.text((x0 + x1) / 2, (z0 + z1) / 2, f"open front needs {z1 - z0:.0f} above, {_c1 - _c0:.0f} ahead",
                ha="center", va="center", fontsize=5.5, color="#a00")
    ax.set_title(f"{run.id} — fronts as you face them (red bar = hinge side; red box = space a lift front needs open; mm)",
                 fontsize=9)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("run_id")
    ap.add_argument("--bay")
    ap.add_argument("--open", default="")
    ap.add_argument("--out", default=str(ROOT / "exports" / "kitchen_cabinet"))
    args = ap.parse_args()
    runs = {r.id: r for r in kc.runs(ground_floor.load_furnishings())}
    if args.run_id not in runs:
        raise SystemExit(f"{args.run_id} not in furnishings.yaml; runs: {', '.join(runs)}")
    run = runs[args.run_id]
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    opened = {v.strip() for v in args.open.split(",") if v.strip()}
    paths = [out / f"{run.id}-iso.png", out / f"{run.id}-plan.png", out / f"{run.id}-front.png"]
    iso(run, run.parts, opened, paths[0], f"{run.id} {run.element.get('Name', '')} — monoblock, {len(run.parts)} parts")
    plan(run, paths[1])
    front(run, paths[2])
    if args.bay:
        bay = run.bay(args.bay)
        members = [run.part(m) for m in bay.members]
        paths.append(out / f"{bay.id}-isolated.png")
        iso(run, members, opened, paths[-1],
            f"{bay.id} isolated (its IfcGroup): {', '.join(p.role for p in members)}", elev=20, azim=-115)
    for p in paths:
        print(p)


if __name__ == "__main__":
    main()
