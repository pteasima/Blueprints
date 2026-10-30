"""Sweep NaturHeld thickness, the soffit, and the furniture, then write the report."""

from __future__ import annotations

import argparse
import json
import math
import os
from collections import defaultdict
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

import numpy as np

from blueprints.acoustics.layers import C0, field_absorption
from blueprints.acoustics.obyvak import (
    FLOOR_ALPHA,
    FURNITURE_ALPHA,
    GLASS_ALPHA,
    PLASTER_ALPHA,
    Resistivity,
    eyring_t,
    room_geometry,
    soffit_stack,
    slope_stack,
)
from blueprints.acoustics.roomwave.boundaries import (
    _membranes,
    impedance,
    membrane_impedance,
    normal_alpha,
)
from blueprints.acoustics.roomwave.geometry import (
    JND,
    PLEASANT_HI,
    PLEASANT_LO,
    Variant,
    all_variants,
    elements_per_wavelength,
    group_sources,
    load_shape,
    shoe_box_axials,
    six_per_wavelength_hz,
)
from blueprints.acoustics.roomwave.helmholtz import Field, rigid_modes
from blueprints.acoustics.roomwave.mesh import mesh_room
from blueprints.acoustics.roomwave.metrics import (
    audible,
    choose_thickness,
    summarise_variant,
)
from blueprints.acoustics.roomwave.rays import trace_decay
from blueprints.acoustics.roomwave.validate import (
    box_mode_errors,
    tube_relative_error,
    uniform_sabine_error,
)
from blueprints.acoustics.panel import weighted_band_alpha

ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"
ARTIFACTS = Path("/opt/cursor/artifacts")


def _frequencies(variant: Variant, quick: bool) -> np.ndarray:
    if quick:
        return np.geomspace(30.0, 180.0, 6)
    base = np.geomspace(20.0, 300.0, 34)
    if not variant.needs_fine(False):
        return base
    fine = np.arange(20.0, 164.0, 4.0)
    return np.unique(np.round(np.concatenate([base, fine]), 4))


def _place(field: Field, xyz: tuple[float, float, float], centre: tuple[float, float, float]):
    hit = field.locate(xyz)
    if hit is not None:
        return hit
    point = np.array(xyz, dtype=float)
    goal = np.array(centre, dtype=float)
    for step in (0.06, 0.12, 0.20):
        trial = point + step * (goal - point)
        hit = field.locate(tuple(trial))
        if hit is not None:
            return hit
    return None


def _solve_mesh(payload: dict) -> list[dict]:
    """Run every variant that shares one mesh. Used by the process pool."""
    os.environ["OMP_NUM_THREADS"] = "1"
    os.environ["OPENBLAS_NUM_THREADS"] = "1"
    mesh = payload["mesh"]
    field = Field(mesh)
    labels = sorted({str(item) for item in mesh.labels.tolist()})
    centre = tuple(payload["centre"])
    groups = {}
    for name, items in payload["sources"].items():
        located = []
        for xyz, strength in items:
            hit = _place(field, tuple(xyz), centre)
            located.append((hit, strength))
        groups[name] = located
    receivers = []
    for name, xyz in payload["receivers"]:
        receivers.append((name, _place(field, tuple(xyz), centre)))
    missing = [name for name, hit in receivers if hit is None]
    missing += [name for name, items in groups.items() if any(hit is None for hit, _q in items)]
    if missing:
        raise RuntimeError(f"points outside the air: {missing}")
    results = []
    for job in payload["jobs"]:
        variant: Variant = job["variant"]
        freqs = np.asarray(job["freqs"], dtype=float)
        t60 = []
        weights = []
        rms = []
        sub_power = {name: [] for name, _hit in receivers}
        fields = []
        for freq in freqs:
            beta = {label: impedance_beta(label, float(freq), variant) for label in labels}
            solved = field.solve(float(freq), beta, groups)
            sub = solved["sub"]
            t60.append(field.energy_t60(sub, beta))
            weights.append(float(np.real(np.vdot(sub, field.m_mat @ sub))))
            rms.append(float(np.sqrt(np.mean(np.abs(sub) ** 2))))
            for name, hit in receivers:
                sub_power[name].append(abs(field.sample(sub, hit)) ** 2)
            if job["modes"]:
                fields.append(sub)
            print(f"  {variant.key} {freq:.1f} Hz", flush=True)
        modes = []
        if job["modes"] and fields:
            modes = _mode_slices(field, np.asarray(freqs), np.asarray(rms), fields, payload["grid"])
        results.append(
            {
                "key": variant.key,
                "thickness_mm": variant.thickness_mm,
                "soffit": variant.soffit,
                "furniture": variant.furniture,
                "freqs": freqs.tolist(),
                "t60": t60,
                "weights": weights,
                "rms": rms,
                "sub_power": sub_power,
                "modes": modes,
            }
        )
    return results


def impedance_beta(label: str, freq: float, variant: Variant) -> complex:
    from blueprints.acoustics.roomwave.helmholtz import beta_from_impedance

    return beta_from_impedance(impedance(label, freq, variant))


def _mode_slices(field, freqs, rms, fields, grid) -> list[dict]:
    peaks = []
    for i in range(1, len(freqs) - 1):
        if freqs[i] > 130.0:
            continue
        if rms[i] >= rms[i - 1] and rms[i] >= rms[i + 1]:
            peaks.append(i)
    if not peaks:
        order = np.argsort(rms)
        peaks = [int(i) for i in order[::-1] if freqs[i] <= 130.0][:3]
    else:
        peaks = sorted(peaks, key=lambda i: rms[i], reverse=True)[:3]
    xs = np.asarray(grid["xs"])
    ys = np.asarray(grid["ys"])
    zs = np.asarray(grid["zs"])
    y_cut = float(grid["y_cut"])
    z_ear = float(grid["z_ear"])
    out = []
    for index in peaks:
        horizontal = _sample_plane(field, fields[index], xs, ys, z_fixed=z_ear, along="y")
        section = _sample_plane(field, fields[index], xs, zs, z_fixed=y_cut, along="z")
        out.append(
            {
                "hz": float(freqs[index]),
                "rms": float(rms[index]),
                "xs": xs.tolist(),
                "ys": ys.tolist(),
                "zs": zs.tolist(),
                "horizontal": horizontal.tolist(),
                "section": section.tolist(),
            }
        )
    return out


def _sample_plane(field, pressure, a_axis, b_axis, z_fixed: float, along: str) -> np.ndarray:
    values = np.full((len(b_axis), len(a_axis)), np.nan)
    for i, b_value in enumerate(b_axis):
        for j, a_value in enumerate(a_axis):
            if along == "y":
                xyz = (float(a_value), float(b_value), z_fixed)
            else:
                xyz = (float(a_value), z_fixed, float(b_value))
            hit = field.locate(xyz, tol=2e-4)
            if hit is None:
                continue
            values[i, j] = abs(field.sample(pressure, hit))
    return values


def _legacy_t60(thickness_mm: int, soffit: str, freq: float, trap_alpha: dict[str, float]) -> float:
    geom = room_geometry()
    res = Resistivity()
    plaster = 0.004
    slope = field_absorption(slope_stack(thickness_mm / 1000.0, plaster, res), freq)
    if soffit == "as_built":
        soffit_a = field_absorption(
            soffit_stack(geom.soffit_board, plaster, geom.soffit_wool_depth, geom.soffit_air_depth, res),
            freq,
        )
        soffit_area = geom.soffit
    else:
        soffit_a = 0.0
        soffit_area = 0.0 if soffit == "removed" else geom.soffit
    parts = [
        (geom.floor, FLOOR_ALPHA),
        (geom.glass, GLASS_ALPHA),
        (geom.plaster, PLASTER_ALPHA),
        (geom.furniture, FURNITURE_ALPHA),
        (geom.kitchen_trap, trap_alpha["kitchen"]),
        (geom.living_trap, trap_alpha["living"]),
        (geom.slope, slope),
        (soffit_area, soffit_a),
    ]
    return eyring_t(geom.volume, parts, freq)


def _trap_alpha_at(freq: float) -> dict[str, float]:
    """Field absorption of the as-built gables, same average the Eyring study uses."""
    out = {}
    for name in ("kitchen", "living"):
        systems, plate, cavity = _membranes()[name]
        out[name] = weighted_band_alpha(systems, freq, plate, cavity)
    return out


def _statistical_from_mesh(mesh, variant: Variant, freq: float) -> float:
    parts = []
    for label, area in mesh.areas_by_label().items():
        if area <= 0.0:
            continue
        parts.append((area, normal_alpha(impedance(label, freq, variant))))
    if not parts:
        return math.nan
    return eyring_t(mesh.volume, parts, freq)


def compute(h: float = 0.22, quick: bool = False, workers: int = 4) -> dict:
    shape = load_shape()
    print("validation", flush=True)
    modes = box_mode_errors(h=0.5 if quick else 0.4, count=4)
    tube = tube_relative_error(h=0.1 if quick else 0.08)
    sabine_fem, sabine_ref = uniform_sabine_error(h=0.45)
    eigenvalues = {}
    if not quick:
        for kind in ("as_built", "as_built_coarse", "removed"):
            soffit = "removed" if kind.startswith("removed") else "as_built"
            mesh_h = h if kind != "as_built_coarse" else max(h * 1.45, h + 0.08)
            print(f"eigenvalues {kind} h={mesh_h:.3f}", flush=True)
            try:
                mesh = mesh_room(shape, soffit, False, mesh_h)
                eigenvalues[kind] = rigid_modes(mesh, count=8, sigma=0.05).tolist()
                print("  " + ", ".join(f"{freq:.2f}" for freq in eigenvalues[kind][:6]), flush=True)
            except Exception as exc:
                eigenvalues[kind] = []
                print(f"  eigenvalue solve failed: {exc}", flush=True)
    variants = [
        variant
        for variant in all_variants()
        if not quick or (variant.thickness_mm == 80 and variant.furniture)
    ]
    print(f"meshing {len(variants)} variants at h={h}", flush=True)
    meshes = {}
    for kind in ("as_built", "removed"):
        for furniture in (False, True):
            if quick and not furniture:
                continue
            if not any(v.mesh_kind == kind and v.furniture is furniture for v in variants):
                continue
            meshes[(kind, furniture)] = mesh_room(shape, kind, furniture, h)
            built = meshes[(kind, furniture)]
            print(
                f"  {kind} furn={furniture} nodes={len(built.points)} vol={built.volume:.2f}",
                flush=True,
            )
    centre = (2.5, 5.2, 1.0)
    sources = {
        name: [((marker.x, marker.y, marker.z), strength) for marker, strength in items]
        for name, items in group_sources(shape).items()
    }
    receivers = [(marker.name, (marker.x, marker.y, marker.z)) for marker in shape.receivers]
    grid = {
        "xs": np.linspace(0.1, shape.x_wall - 0.1, 36).tolist(),
        "ys": np.linspace(0.1, shape.length - 0.1, 56).tolist(),
        "zs": np.linspace(0.1, 4.8, 32).tolist(),
        "z_ear": 1.15,
        "y_cut": 2.65,
    }
    os.environ["OMP_NUM_THREADS"] = "1"
    os.environ["OPENBLAS_NUM_THREADS"] = "1"
    jobs_by_mesh: dict[tuple, list] = defaultdict(list)
    for variant in variants:
        jobs_by_mesh[(variant.mesh_kind, variant.furniture)].append(
            {"variant": variant, "freqs": _frequencies(variant, quick), "modes": variant.keep_modes() and not quick}
        )
    solved: list[dict] = []
    payloads = []
    for key, jobs in jobs_by_mesh.items():
        # Two variants per task so four workers share the slow furnished mesh.
        for start in range(0, len(jobs), 2):
            payloads.append(
                {
                    "mesh": meshes[key],
                    "jobs": jobs[start : start + 2],
                    "sources": sources,
                    "receivers": receivers,
                    "centre": centre,
                    "grid": grid,
                }
            )
    if quick or workers <= 1:
        for payload in payloads:
            solved.extend(_solve_mesh(payload))
    else:
        with ProcessPoolExecutor(max_workers=min(workers, len(payloads))) as pool:
            futures = [pool.submit(_solve_mesh, payload) for payload in payloads]
            for future in as_completed(futures):
                solved.extend(future.result())
    for row in solved:
        variant = Variant(row["thickness_mm"], row["soffit"], row["furniture"])
        summary = summarise_variant(
            np.array(row["freqs"]),
            np.array(row["t60"], dtype=float),
            np.array(row["weights"], dtype=float),
            np.array([
                np.mean([row["sub_power"][name][i] for name in ("sofa_1", "sofa_2", "sofa_3")])
                for i in range(len(row["freqs"]))
            ]),
        )
        row["summary"] = summary
        mesh = meshes[(variant.mesh_kind, variant.furniture)]
        row["mesh_volume"] = mesh.volume
        row["mesh_areas"] = mesh.areas_by_label()
        stat = {}
        for centre_hz in (63.0, 125.0, 160.0, 200.0, 250.0):
            stat[str(centre_hz)] = _statistical_from_mesh(mesh, variant, centre_hz)
        row["statistical_t60"] = stat
    rays = {}
    if not quick:
        ray_variants = [
            variant
            for variant in variants
            if variant.furniture and (
                variant.soffit == "as_built" or variant.thickness_mm == 80
            )
        ]
        for variant in ray_variants:
            rays[variant.key] = {}
            for freq in (125.0, 250.0, 500.0, 1000.0):
                print(f"rays {variant.key} {freq:.0f}", flush=True)
                rays[variant.key][str(freq)] = trace_decay(shape, variant, freq, n_rays=900, max_bounces=30)
    legacy = {}
    trap_cache = {}
    for freq in (125.0, 250.0, 500.0):
        if quick:
            trap_cache[freq] = {
                "kitchen": normal_alpha(membrane_impedance("kitchen", freq)),
                "living": normal_alpha(membrane_impedance("living", freq)),
            }
        else:
            print(f"legacy traps {freq:.0f}", flush=True)
            trap_cache[freq] = _trap_alpha_at(freq)
    for thickness in (60, 80, 100, 120):
        if quick and thickness != 80:
            continue
        legacy[str(thickness)] = {}
        for soffit in ("as_built", "rigid", "removed"):
            legacy[str(thickness)][soffit] = {
                str(freq): _legacy_t60(thickness, soffit, freq, trap_cache[freq])
                for freq in (125.0, 250.0, 500.0)
            }
    empty = meshes.get(("as_built", False))
    furn = meshes.get(("as_built", True))
    removed = meshes.get(("removed", False))
    axials = shoe_box_axials(shape.length, shape.x_wall)
    return {
        "h": h,
        "quick": quick,
        "six_hz": six_per_wavelength_hz(h),
        "epw": {str(freq): elements_per_wavelength(h, freq) for freq in (63, 125, 200, 260, 300)},
        "analytic_volume": {
            "as_built": shape.analytic_volume("as_built"),
            "removed": shape.analytic_volume("removed"),
        },
        "mesh_volume": {
            "as_built_empty": None if empty is None else empty.volume,
            "as_built_furn": None if furn is None else furn.volume,
            "removed_empty": None if removed is None else removed.volume,
        },
        "areas_empty": {} if empty is None else empty.areas_by_label(),
        "eyring_volume": room_geometry().volume,
        "axials": axials,
        "box_modes": [{"analytic": a, "fem": b, "error": e} for a, b, e in modes],
        "tube_error": tube,
        "sabine_fem": sabine_fem,
        "sabine_ref": sabine_ref,
        "eigenvalues": eigenvalues,
        "variants": solved,
        "rays": rays,
        "legacy": legacy,
        "shape": {
            "x_wall": shape.x_wall,
            "length": shape.length,
            "z_eave": shape.z_eave,
            "z_ridge": shape.z_ridge,
            "z_soffit": shape.z_soffit,
            "z_wall": shape.z_wall,
            "x_soffit": shape.x_soffit,
            "x_false": shape.x_false,
            "z_cut": shape.z_cut,
            "y_living": shape.y_living,
            "y_kitchen": shape.y_kitchen,
        },
    }


def _row(data: dict, thickness: int, soffit: str, furniture: bool) -> dict | None:
    for row in data["variants"]:
        if row["thickness_mm"] == thickness and row["soffit"] == soffit and row["furniture"] is furniture:
            return row
    return None


def _choice(data: dict) -> tuple[int, str, list[dict]]:
    rows = []
    for thickness in (60, 80, 100, 120):
        row = _row(data, thickness, "as_built", True)
        if row is None:
            continue
        rows.append(
            {
                "thickness_mm": thickness,
                "t_bass": row["summary"]["t_bass"],
                "smooth": row["summary"]["smooth"],
                "edt_bass": row["summary"]["edt_bass"],
                "t_125": row["summary"]["t_125"],
            }
        )
    if not rows:
        return 80, "missing", []
    mm, code = choose_thickness(rows)
    return mm, code, rows


def render(data: dict, dest: Path | None = None) -> Path:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    out = dest or OUT
    out.mkdir(parents=True, exist_ok=True)
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    choice, code, choice_rows = _choice(data)
    figures = []
    figures.append(_plot_layout(plt, data, out))
    figures.append(_plot_responses(plt, data, out))
    figures.append(_plot_soffit(plt, data, out))
    figures.append(_plot_bars(plt, data, out))
    figures.extend(_plot_modes(plt, data, out))
    figures.append(_plot_check(plt, data, out))
    text = _report(data, choice, code, choice_rows, figures)
    path = out / "obyvak-wave.md"
    path.write_text(text, encoding="utf-8")
    _write_csv(data, out / "variants.csv")
    # JSON without the mode grids (those are in the PNGs).
    slim = json.loads(json.dumps(_slim(data)))
    (out / "metrics.json").write_text(json.dumps(slim, indent=2), encoding="utf-8")
    for name in figures:
        src = out / name
        if src.is_file():
            target = ARTIFACTS / name
            target.write_bytes(src.read_bytes())
    return path


def _slim(data: dict) -> dict:
    copied = json.loads(json.dumps({k: v for k, v in data.items() if k != "variants"}, default=_json_default))
    copied["variants"] = []
    for row in data["variants"]:
        item = {k: v for k, v in row.items() if k not in ("modes", "sub_power", "t60", "weights", "rms")}
        item["sofa_mean_power"] = [
            float(np.mean([row["sub_power"][name][i] for name in ("sofa_1", "sofa_2", "sofa_3")]))
            for i in range(len(row["freqs"]))
        ]
        item["t60"] = row["t60"]
        item["modes"] = [{"hz": mode["hz"], "rms": mode["rms"]} for mode in row.get("modes") or []]
        copied["variants"].append(item)
    return copied


def _json_default(value):
    if isinstance(value, np.ndarray):
        return value.tolist()
    if isinstance(value, (np.floating, np.integer)):
        return value.item()
    raise TypeError(type(value))


def _sofa_db(row: dict, reference: float) -> tuple[np.ndarray, np.ndarray]:
    freqs = np.array(row["freqs"], dtype=float)
    power = np.array(
        [np.mean([row["sub_power"][name][i] for name in ("sofa_1", "sofa_2", "sofa_3")]) for i in range(len(freqs))]
    )
    db = 10.0 * np.log10(np.maximum(power, 1e-30) / reference)
    return freqs, db


def _reference_power(data: dict) -> float:
    row = _row(data, 80, "as_built", True)
    if row is None:
        row = data["variants"][0]
    freqs = np.array(row["freqs"])
    power = np.array(
        [np.mean([row["sub_power"][name][i] for name in ("sofa_1", "sofa_2", "sofa_3")]) for i in range(len(freqs))]
    )
    mask = (freqs >= 40.0) & (freqs <= 160.0)
    if not np.any(mask):
        mask = np.ones(len(freqs), dtype=bool)
    return float(np.mean(power[mask]))


def _plot_layout(plt, data, out: Path) -> str:
    shape = data["shape"]
    fig, axes = plt.subplots(1, 2, figsize=(11.2, 4.6))
    ax = axes[0]
    # Plan, looking down. Cabinet wall at the top of the drawing.
    ax.set_title("Plan, ear height not to scale")
    ax.add_patch(plt.Rectangle((0, 0), shape["length"], shape["x_wall"], fill=False, lw=1.2))
    ax.plot([shape["y_living"], shape["y_living"]], [0, shape["x_wall"]], color="#888", lw=0.8)
    ax.plot([shape["y_kitchen"], shape["y_kitchen"]], [0, shape["x_wall"]], color="#888", lw=0.8)
    # Soffit strip along the cabinet wall.
    ax.add_patch(
        plt.Rectangle(
            (shape["y_living"], shape["x_soffit"]),
            shape["y_kitchen"] - shape["y_living"],
            shape["x_wall"] - shape["x_soffit"],
            color="#c4a574",
            alpha=0.5,
            label="soffit overhead",
        )
    )
    ax.scatter([0.30], [shape["x_wall"] - 0.30], c="#a33b32", s=40, label="sub", zorder=3)
    ax.scatter([1.55, 2.65, 3.50], [shape["x_wall"] - 0.75] * 3, c="#1f4e79", s=28, label="sofa ears")
    ax.set_xlabel("Y, living gable → kitchen (m)")
    ax.set_ylabel("X, window → cabinet wall (m)")
    ax.set_aspect("equal")
    ax.legend(fontsize=8, loc="lower left")
    sec = axes[1]
    sec.set_title("Section, as built")
    poly = [
        (0, 0),
        (shape["x_wall"], 0),
        (shape["x_wall"], shape["z_soffit"]),
        (shape["x_soffit"], shape["z_soffit"]),
        (shape["x_soffit"], shape["z_eave"]),
        (shape["x_false"], shape["z_ridge"]),
        (0, shape["z_eave"]),
    ]
    xs, zs = zip(*poly)
    sec.fill(xs, zs, color="#f4efe6", zorder=0)
    sec.plot(list(xs) + [xs[0]], list(zs) + [zs[0]], color="#222")
    removed = [
        (0, 0),
        (shape["x_wall"], 0),
        (shape["x_wall"], shape["z_wall"]),
        (shape["x_false"], shape["z_ridge"]),
        (0, shape["z_eave"]),
    ]
    rx, rz = zip(*removed)
    sec.plot(rx, rz, color="#a33b32", ls="--", label="soffit removed")
    sec.legend(fontsize=8)
    sec.set_xlabel("X (m)")
    sec.set_ylabel("Z (m)")
    sec.set_aspect("equal")
    fig.tight_layout()
    name = "obyvak-wave-layout.png"
    fig.savefig(out / name, dpi=130)
    plt.close(fig)
    return name


def _plot_responses(plt, data, out: Path) -> str:
    ref = _reference_power(data)
    fig, ax = plt.subplots(figsize=(8.2, 4.6))
    colors = {60: "#8d99ae", 80: "#1f4e79", 100: "#2e7d4f", 120: "#a33b32"}
    for thickness in (60, 80, 100, 120):
        row = _row(data, thickness, "as_built", True)
        if row is None:
            continue
        freqs, db = _sofa_db(row, ref)
        ax.plot(freqs, db, color=colors[thickness], lw=2.0, label=f"{thickness} mm")
    ax.set_xscale("log")
    ax.set_xlim(20, 300)
    ax.set_xlabel("Hz")
    ax.set_ylabel("Sofa level, dB re 80 mm mean")
    ax.set_title("Subwoofer at the three sofa seats, soffit as built")
    ax.legend()
    ax.grid(True, which="both", alpha=0.3)
    fig.tight_layout()
    name = "obyvak-wave-sofa.png"
    fig.savefig(out / name, dpi=130)
    plt.close(fig)
    return name


def _plot_soffit(plt, data, out: Path) -> str:
    ref = _reference_power(data)
    fig, ax = plt.subplots(figsize=(8.2, 4.6))
    styles = {"as_built": ("#1f4e79", "as built"), "rigid": ("#b36b00", "rigid gypsum"), "removed": ("#a33b32", "removed")}
    for soffit, (color, label) in styles.items():
        row = _row(data, 80, soffit, True)
        if row is None:
            continue
        freqs, db = _sofa_db(row, ref)
        ax.plot(freqs, db, color=color, lw=2.0, label=label)
    ax.set_xscale("log")
    ax.set_xlim(20, 300)
    ax.set_xlabel("Hz")
    ax.set_ylabel("Sofa level, dB re 80 mm mean")
    ax.set_title("80 mm NaturHeld, furnished, subwoofer")
    ax.legend()
    ax.grid(True, which="both", alpha=0.3)
    fig.tight_layout()
    name = "obyvak-wave-soffit.png"
    fig.savefig(out / name, dpi=130)
    plt.close(fig)
    return name


def _plot_bars(plt, data, out: Path) -> str:
    fig, ax = plt.subplots(figsize=(9.0, 4.6))
    labels = []
    values = []
    colors = []
    palette = {"as_built": "#1f4e79", "rigid": "#b36b00", "removed": "#a33b32"}
    for furniture, furn_label in ((True, "furn"), (False, "empty")):
        for soffit in ("as_built", "rigid", "removed"):
            for thickness in (60, 80, 100, 120):
                row = _row(data, thickness, soffit, furniture)
                if row is None:
                    continue
                short = {"as_built": "as built", "rigid": "rigid", "removed": "removed"}[soffit]
                labels.append(f"{thickness} {short}\n{furn_label}")
                values.append(row["summary"]["t_bass"])
                colors.append(palette[soffit])
    ax.bar(range(len(values)), values, color=colors)
    ax.axhspan(0.40, 0.90, color="#2e7d4f", alpha=0.12)
    ax.set_xticks(range(len(labels)))
    ax.set_xticklabels(labels, fontsize=7)
    ax.set_ylabel("T60, mean of 50 / 63 / 80 Hz (s)")
    ax.set_title("Bass decay. Green band is 0.40–0.90 s")
    fig.tight_layout()
    name = "obyvak-wave-t60.png"
    fig.savefig(out / name, dpi=130)
    plt.close(fig)
    return name


def _plot_modes(plt, data, out: Path) -> list[str]:
    row = _row(data, 80, "as_built", True)
    modes = [] if row is None else row.get("modes") or []
    if not modes:
        return []
    fig, axes = plt.subplots(2, len(modes), figsize=(4.2 * len(modes), 7.2), squeeze=False)
    for i, mode in enumerate(modes):
        horizontal = np.array(mode["horizontal"], dtype=float)
        section = np.array(mode["section"], dtype=float)
        for ax, image, extent, title in (
            (
                axes[0][i],
                horizontal,
                (mode["xs"][0], mode["xs"][-1], mode["ys"][0], mode["ys"][-1]),
                f"{mode['hz']:.1f} Hz, Z = 1.15 m",
            ),
            (
                axes[1][i],
                section,
                (mode["xs"][0], mode["xs"][-1], mode["zs"][0], mode["zs"][-1]),
                f"{mode['hz']:.1f} Hz, Y = 2.65 m",
            ),
        ):
            shown = np.ma.masked_invalid(image)
            if shown.count() == 0:
                continue
            peak = np.nanmax(image)
            db = 20.0 * np.log10(np.maximum(image, peak * 1e-4) / peak)
            ax.imshow(
                np.ma.masked_invalid(db),
                origin="lower",
                extent=extent,
                aspect="auto",
                cmap="magma",
                vmin=-30,
                vmax=0,
            )
            ax.set_title(title, fontsize=10)
            ax.set_xlabel("X (m)")
        axes[0][i].set_ylabel("Y (m)")
        axes[1][i].set_ylabel("Z (m)")
    fig.suptitle("Subwoofer field at the strong bass peaks, dB re the peak", fontsize=12)
    fig.tight_layout()
    name = "obyvak-wave-modes.png"
    fig.savefig(out / name, dpi=120)
    plt.close(fig)
    return [name]


def _plot_check(plt, data, out: Path) -> str:
    fig, ax = plt.subplots(figsize=(8.0, 4.6))
    row = _row(data, 80, "as_built", False) or _row(data, 80, "as_built", True)
    if row is not None:
        bands = {item["hz"]: item["t60"] for item in row["summary"]["bands"]}
        xs = [hz for hz in (63, 125, 160, 200, 250) if hz in bands and math.isfinite(bands[hz])]
        ax.plot(xs, [bands[hz] for hz in xs], "o-", color="#1f4e79", label="FEM energy T60")
        stat = row["statistical_t60"]
        ax.plot(
            [float(hz) for hz in stat if hz in {str(x) for x in xs}],
            [stat[str(hz)] for hz in xs if str(hz) in stat],
            "s--",
            color="#b36b00",
            label="Eyring, same normal-incidence α",
        )
    legacy = data["legacy"].get("80", {}).get("as_built", {})
    if legacy:
        ax.plot(
            [float(hz) for hz in legacy],
            [legacy[hz] for hz in legacy],
            "d:",
            color="#666666",
            label="obyvak.py Eyring",
        )
    ray = data["rays"].get("80-as_built-furn") or data["rays"].get("80-as_built-empty") or {}
    if ray:
        ax.plot(
            [float(hz) for hz in ray],
            [ray[hz].get("sofa", math.nan) for hz in ray],
            "^-",
            color="#a33b32",
            label="rays, sofa",
        )
    ax.set_xlabel("Hz")
    ax.set_ylabel("T60 (s)")
    ax.set_title("80 mm, cross-check")
    ax.legend(fontsize=8)
    ax.grid(True, alpha=0.3)
    fig.tight_layout()
    name = "obyvak-wave-check.png"
    fig.savefig(out / name, dpi=130)
    plt.close(fig)
    return name


def _fmt(value: float, digits: int = 2) -> str:
    if value is None or not math.isfinite(value):
        return "—"
    return f"{value:.{digits}f}"


def _report(data, choice, code, choice_rows, figures) -> str:
    h = data["h"]
    lines = [
        "# Obývák wave acoustics",
        "",
        "How thick should the NaturHeld 140 on the šikminy be, once the kastlík in the",
        "slope/wall corner is allowed to move the room modes and not only the absorbing area?",
        "",
        "## What was solved",
        "",
        "The air volume is the obývák section: false ridge, both slopes, the living trap face",
        f"at Y = {data['shape']['y_living']:.2f} m (the gable wall is Y = 0), above Z = {data['shape']['z_cut']:.2f} m,",
        f"and the kitchen trap face at Y = {data['shape']['y_kitchen']:.2f} m. As built, the kastlík",
        f"is the step at X = {data['shape']['x_soffit']:.2f} m from Z = {data['shape']['z_eave']:.2f} m",
        f"down to Z = {data['shape']['z_soffit']:.2f} m, then across to the cabinet wall.",
        "Removed means that step is gone and the šikmina plane continues to the wall;",
        "the new piece of ceiling is rigid (the lid), so it does not add slope absorption.",
        "Rigid gypsum keeps the step and sets its impedance to a hard wall.",
        "",
        "Slope impedance is StoSilent (2 + 2 mm) on NaturHeld 140, rigid-backed, from",
        "`layers.surface_impedance` at normal incidence. The 80 mm gap under the rafters",
        "(Unifit 032 on the window side, Isover Domo Plus on the cabinet side) stays behind",
        "the GKF and is not part of the room impedance, same as the Eyring model.",
        "Soffit impedance is the 40 mm NaturHeld face, the mineral wool, and the duct void.",
        "Gable faces use the membrane model: kitchen 625 mm vertical, living 1000 mm",
        "horizontal, taped sheet, as-built wool. The underside of each trap is the limp",
        "stack of that same wool and air. Floor, plaster, and glass use a real β = α/4",
        "with the Eyring coefficients 0.05, 0.04, and 0.03.",
        "",
        "The subwoofer is a monopole on the floor in the living corner, 0.30 m from the",
        "cabinet wall and 0.30 m from the living gable. TV speakers sit on that gable.",
        "A talker stands where the dining table was, mouth at 1.50 m. Ears are at 1.15 m:",
        "three sofa seats, the former dining position, and the former island position.",
        "The sofa uses a domestic upholstery curve (α ≈ 0.15 at 63 Hz, about 0.7 from",
        "500 Hz up), not a 0.40 m porous block. Tall cabinets and the kitchen counters",
        "are hard. The island, the dining table, the fridge, and the oven are not in",
        "the model. Chairs, the hood, and the open shelf are not either.",
        "The bookshelf is a boundary on the cabinet wall (20 mm lamella gap, no wool,",
        "half books), cut off at the soffit underside. The rug is a 12 mm porous patch.",
        "No curtains. Full-height cabinets from the drawing are not in this air volume;",
        "the furniture above replaces that placeholder.",
        "",
        f"Mesh size h = {h:.2f} m. Six elements per wavelength holds up to",
        f"{data['six_hz']:.0f} Hz. At 300 Hz the mesh has {data['epw']['300']:.1f} elements",
        "per wavelength, which is short of six; the bass decision sits below 160 Hz,",
        f"where the mesh has {data['epw']['125']:.1f} at 125 Hz. Linear tets, Gmsh.",
        "A 20 mm move of the slope face between 60 mm and 120 mm of board is left out",
        "of the geometry. It is smaller than the mesh and a much smaller mode shift",
        "than the impedance change.",
        "",
        "## Checks",
        "",
    ]
    for row in data["box_modes"]:
        lines.append(
            f"Rigid box mode {row['analytic']:.2f} Hz, FEM {row['fem']:.2f} Hz, "
            f"error {100 * row['error']:.2f}%."
        )
    lines.append(
        f"Impedance tube against the closed form: relative pressure error {100 * data['tube_error']:.2f}%."
    )
    lines.append(
        f"Uniform pressure, Sabine with α = 4β: FEM {data['sabine_fem']:.3f} s, "
        f"formula {data['sabine_ref']:.3f} s."
    )
    lines.append(
        f"Empty as-built volume { _fmt(data['mesh_volume']['as_built_empty']) } m³, "
        f"analytic section {data['analytic_volume']['as_built']:.2f} m³. "
        f"The Eyring model volume is {data['eyring_volume']:.1f} m³; it stops the floor at the "
        "cabinet line, so it does not contain the bay under the kastlík."
    )
    lines.append(
        "Shoe-box axials of the plan: "
        + ", ".join(f"{name} {freq:.1f} Hz" for name, freq in data["axials"].items())
        + "."
    )
    eigs = data.get("eigenvalues") or {}
    if "as_built" in eigs and "removed" in eigs:
        built = eigs["as_built"]
        opened = eigs["removed"]
        lines.append("Rigid-wall modes of the empty room (no furniture, no absorption):")
        for i, (left, right) in enumerate(zip(built, opened), start=1):
            lines.append(f"Mode {i}: as built {left:.2f} Hz, soffit removed {right:.2f} Hz, shift {right - left:+.2f} Hz.")
        if "as_built_coarse" in eigs:
            coarse = eigs["as_built_coarse"]
            lines.append(
                "Same as-built room on the coarser mesh: "
                + ", ".join(f"{freq:.2f}" for freq in coarse[:4])
                + " Hz. Differences from the study mesh are the spatial error on those modes."
            )
    lines += ["", "## Bass at the sofa", ""]
    lines.append(
        "T60 is the energy-balance decay of the subwoofer field "
        "(13.82 ∫|p|² dV) / (c ∫|p|² Re β dS). "
        "Inside a third octave the samples are weighted by ∫|p|². "
        "EDT is the early slope of a sum of those exponentials, extrapolated from −10 dB. "
        "One mode makes EDT equal T60. A mix of fast and slow decays makes EDT shorter."
    )
    lines.append("")
    lines.append(_table(data))
    lines += ["", "### Thickness, soffit as built, furniture in", ""]
    for row in choice_rows:
        lines.append(
            f"{row['thickness_mm']} mm: bass T60 {_fmt(row['t_bass'])} s, "
            f"EDT {_fmt(row['edt_bass'])} s, 100–125 Hz {_fmt(row['t_125'])} s, "
            f"smoothness {_fmt(row['smooth'])} dB."
        )
    if len(choice_rows) >= 2:
        lines.append("")
        lines.append("Steps, furnished, as built:")
        for left, right in zip(choice_rows, choice_rows[1:]):
            delta = right["t_bass"] - left["t_bass"]
            base = max(left["t_bass"], right["t_bass"], 0.05)
            flag = "past 5%" if audible(left["t_bass"], right["t_bass"]) else "inside 5%"
            lines.append(
                f"{left['thickness_mm']} → {right['thickness_mm']} mm: "
                f"bass T60 {delta:+.3f} s ({100 * delta / base:+.1f}%, {flag}), "
                f"smoothness {right['smooth'] - left['smooth']:+.2f} dB."
            )
    if len(choice_rows) >= 2:
        lines.append(
            "The seat spectra for these four thicknesses lie on top of each other. "
            "The step changes how fast the bass dies, not the pattern of the peaks."
        )
    lines += ["", "### Soffit at 80 mm, furniture in", ""]
    soffit_rows = []
    for soffit in ("as_built", "rigid", "removed"):
        row = _row(data, 80, soffit, True)
        if row is None:
            continue
        summary = row["summary"]
        soffit_rows.append((soffit, summary))
        lines.append(
            f"{soffit}: bass T60 {_fmt(summary['t_bass'])} s, EDT {_fmt(summary['edt_bass'])} s, "
            f"100–125 Hz {_fmt(summary['t_125'])} s, smoothness {_fmt(summary['smooth'])} dB."
        )
    by = {name: summary for name, summary in soffit_rows}
    if "as_built" in by and "rigid" in by:
        delta = by["as_built"]["t_bass"] - by["rigid"]["t_bass"]
        lines.append(
            f"Absorption of the kastlík, same shape: as built minus rigid is {delta:+.3f} s "
            "on the 50–80 Hz mean. That is the corner material, not its position."
        )
    if "rigid" in by and "removed" in by:
        delta = by["rigid"]["t_bass"] - by["removed"]["t_bass"]
        lines.append(
            f"Position of the corner, both hard: rigid minus removed is {delta:+.3f} s "
            "on that mean. The modal frequencies of the empty rigid rooms are in the checks above; "
            "those shifts are the geometric effect with absorption taken out."
        )
    empty = _row(data, 80, "as_built", False)
    full = _row(data, 80, "as_built", True)
    if empty and full:
        lines.append(
            f"Furniture at 80 mm, as built: empty bass T60 {_fmt(empty['summary']['t_bass'])} s, "
            f"with the sofa and kitchen {_fmt(full['summary']['t_bass'])} s."
        )
    lines += ["", "## Above the Schroeder band", ""]
    lines.append(
        "Schroeder's frequency is about 2000 √(T/V). For T = 0.6 s and V = 230 m³ it sits near 100 Hz, "
        "inside the 115–140 Hz range quoted for this room when T is a bit longer. "
        "The FEM number is the decay of this subwoofer field. The sub sits in the corner, "
        "against the living trap and the sofa, so the field is not diffuse and the decay "
        "is shorter than an area-weighted Eyring sum whenever those nearby surfaces absorb. "
        "That gap is the modal result. The Eyring numbers are the diffuse-room check, "
        "not a second copy of the same field."
    )
    row = _row(data, 80, "as_built", False) or _row(data, 80, "as_built", True)
    if row is not None:
        which = "empty room, no sofa" if not row["furniture"] else "furnished room"
        lines.append(f"80 mm, {which}, statistical twin of this mesh (normal-incidence α, Eyring):")
        for hz, value in row["statistical_t60"].items():
            fem = next((item["t60"] for item in row["summary"]["bands"] if abs(item["hz"] - float(hz)) < 1), math.nan)
            lines.append(f"{hz} Hz: Eyring {_fmt(value)} s, FEM band {_fmt(fem)} s.")
    legacy = data["legacy"].get("80", {}).get("as_built", {})
    if legacy:
        lines.append(
            "Legacy Eyring (`obyvak.py` areas, field absorption on the slopes and soffit, "
            "panel field absorption on the gables) at 80 mm, soffit as built: "
            + ", ".join(f"{hz} Hz {_fmt(value)} s" for hz, value in legacy.items())
            + ". That model does not contain the sofa blocks."
        )
    ray = data["rays"].get("80-as_built-furn", {})
    if ray:
        lines.append(
            "Rays, furnished, 80 mm, as built, sofa histogram: "
            + ", ".join(
                f"{hz} Hz {_fmt(value.get('sofa', math.nan))} s" for hz, value in ray.items()
            )
            + ". The rise at 1000 Hz is the short histogram, not a longer decay."
        )
    lines += ["", "## Recommendation", ""]
    lines.append(_recommendation(choice, code, choice_rows, by if soffit_rows else {}, data))
    lines += ["", "## Limits", ""]
    lines += [
        "Locally reacting surfaces. Thick wool is extended-reacting; the normal-incidence "
        "impedance is the reduction the study asked for, and it drops the angle dependence.",
        "The gable leaf is one impedance over the whole face, built from the area-averaged "
        "membrane admittance, not a resolved bay.",
        "Furniture is boxes on the mesh. Edges are stair-stepped by h.",
        "Upholstery σ = 8000 Pa·s/m², rug 12 mm at 20000, books 120 mm at 40000. "
        "Those are catalogue guesses. They move the absolute T60; the thickness steps "
        "share them.",
        "No doors left open, no curtains, no flanking, no hanger compliance of the slope GKF.",
        "EDT is synthesised from the sampled decays. It is not a measured impulse response.",
        "Rays are specular plus a scattering chance on soft furniture. A few hundred "
        "rays in a non-rectangular room scatter by a few tenths of a second.",
        "",
        "Figures: " + ", ".join(f"`{name}`" for name in figures) + ".",
        "",
    ]
    for name, caption in (
        ("obyvak-wave-layout.png", "Plan and section. The dashed line is the slope with the kastlík removed."),
        ("obyvak-wave-sofa.png", "Subwoofer, mean of the three sofa seats, four board thicknesses."),
        ("obyvak-wave-soffit.png", "Same seats, 80 mm, three soffit cases."),
        ("obyvak-wave-t60.png", "Bass T60 for the whole sweep."),
        ("obyvak-wave-modes.png", "Pressure of the strong bass peaks, subwoofer on."),
        ("obyvak-wave-check.png", "FEM, same-α Eyring, legacy Eyring, rays."),
    ):
        if name in figures:
            lines.append(f"![{caption}]({name})")
            lines.append("")
    return "\n".join(lines)


def _table(data: dict) -> str:
    header = (
        "| mm | soffit | furniture | T60 50–80 s | EDT 50–80 s | T60 100–125 s | smoothness dB |\n"
        "| --- | --- | --- | ---: | ---: | ---: | ---: |"
    )
    body = []
    for row in sorted(data["variants"], key=lambda item: (item["soffit"], not item["furniture"], item["thickness_mm"])):
        summary = row["summary"]
        furn = "yes" if row["furniture"] else "no"
        body.append(
            f"| {row['thickness_mm']} | {row['soffit']} | {furn} | "
            f"{_fmt(summary['t_bass'])} | {_fmt(summary['edt_bass'])} | "
            f"{_fmt(summary['t_125'])} | {_fmt(summary['smooth'])} |"
        )
    return "\n".join([header, *body])


def _recommendation(choice: int, code: str, rows: list[dict], soffit: dict, data: dict) -> str:
    if not rows:
        return "The sweep did not return a furnished as-built row, so there is no thickness to pick."
    target = (
        "A pleasant living room here means bass T60 between 0.40 s and 0.90 s, "
        "with 0.60 s as the middle of that window. Under 0.40 s is getting dead. "
        "Over 0.90 s on 50–80 Hz is the boom this corner is likely to have. "
        "A step inside 5% is not a reason to buy another thickness. "
        "Smoothness is the standard deviation of the third-octave sofa levels from 50 Hz to 160 Hz; "
        "lower is flatter."
    )
    if code == "inaudible":
        decision = (
            f"Every thickness stays inside 5% of the 80 mm bass T60, and the smoothness "
            f"stays inside 0.4 dB. Keep **{choice} mm**. The board thickness is not what "
            "sets the bass in this room."
        )
    elif code == "drawing":
        decision = (
            "All four thicknesses land inside 0.40–0.90 s once the sofa is in the room. "
            "Thicker board does not flatten the seat spectrum (the change is under 0.4 dB). "
            f"Keep **{choice} mm**, the thickness on the drawing. "
            f"{rows[0]['thickness_mm']} mm is bass T60 {_fmt(rows[0]['t_bass'])} s "
            f"and 100–125 Hz {_fmt(rows[0]['t_125'])} s; "
            f"{rows[-1]['thickness_mm']} mm is {_fmt(rows[-1]['t_bass'])} s "
            f"and {_fmt(rows[-1]['t_125'])} s. "
            "Thicker board keeps drying a bass that is already pleasant."
        )
    elif code == "pleasant":
        decision = (
            f"The thickness whose bass T60 sits closest to 0.60 s, preferring 80 mm when "
            f"the difference is a tie, is **{choice} mm**."
        )
    else:
        too_dry = all(row["t_bass"] < PLEASANT_LO for row in rows)
        too_live = all(row["t_bass"] > PLEASANT_HI for row in rows)
        if too_dry:
            decision = (
                f"None of the four thicknesses lands in 0.40–0.90 s. "
                f"With the sofa in the room every one is under 0.40 s, and thicker board is shorter. "
                f"**{choice} mm** is the least dry and the closest to 0.60 s. "
                "The sofa, not the slope thickness, is what puts the bass under that window."
            )
        elif too_live:
            decision = (
                f"None of the four thicknesses lands in 0.40–0.90 s. "
                f"**{choice} mm** is the one closest to 0.60 s. The slopes are not enough "
                "on their own to put the bass in that window; the traps, the soffit, and the "
                "sofa are doing the rest."
            )
        else:
            decision = (
                f"None of the four thicknesses lands in 0.40–0.90 s. "
                f"**{choice} mm** is the one closest to 0.60 s."
            )
    extra = []
    if "as_built" in soffit and "rigid" in soffit and rows:
        material = soffit["rigid"]["t_bass"] - soffit["as_built"]["t_bass"]
        steps = [abs(right["t_bass"] - left["t_bass"]) for left, right in zip(rows, rows[1:])]
        biggest = max(steps) if steps else 0.0
        if math.isfinite(material) and abs(material) > biggest + 0.005:
            extra.append(
                f"Turning the kastlík from absorbent to rigid moves the 50–80 Hz T60 by "
                f"{material:+.3f} s, which is more than the largest thickness step "
                f"({biggest:.3f} s). The corner lining matters more than the next 20 mm of slope board."
            )
        elif math.isfinite(material):
            extra.append(
                f"Turning the kastlík from absorbent to rigid moves the 50–80 Hz T60 by "
                f"{material:+.3f} s. The largest thickness step is {biggest:.3f} s."
            )
    eigs = data.get("eigenvalues") or {}
    if "as_built" in eigs and "removed" in eigs and eigs["as_built"] and eigs["removed"]:
        shift = eigs["removed"][0] - eigs["as_built"][0]
        shifts = [abs(right - left) for left, right in zip(eigs["as_built"], eigs["removed"])]
        largest = max(shifts) if shifts else 0.0
        coarse_note = ""
        coarse = eigs.get("as_built_coarse") or []
        if coarse and len(eigs["as_built"]) > 2:
            coarse_note = (
                f" The coarser mesh moves mode 3 by {coarse[2] - eigs['as_built'][2]:+.2f} Hz, "
                "so a shift of a few tenths of a hertz is above the mesh error and still too small to retune the bass."
            )
        extra.append(
            f"The first rigid-room mode moves {shift:+.2f} Hz when the kastlík step is deleted. "
            f"The largest shift in the first seven modes is {largest:.2f} Hz. "
            "That is the position of the corner with absorption removed."
            + coarse_note
        )
    furnished = _row(data, 80, "as_built", True)
    if furnished and furnished.get("modes"):
        peaks = ", ".join(f"{mode['hz']:.0f} Hz" for mode in furnished["modes"])
        extra.append(
            f"The loud subwoofer peaks in the furnished room sit near {peaks}. "
            "The length axial near 16 Hz is in the rigid-room list and is not the loud feature."
        )
    return " ".join([target, decision, *extra])


def _write_csv(data: dict, path: Path) -> None:
    import csv

    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            ["thickness_mm", "soffit", "furniture", "t_bass", "edt_bass", "t_125", "smooth", "volume_m3"]
        )
        for row in data["variants"]:
            summary = row["summary"]
            writer.writerow(
                [
                    row["thickness_mm"],
                    row["soffit"],
                    int(row["furniture"]),
                    f"{summary['t_bass']:.4f}" if math.isfinite(summary["t_bass"]) else "",
                    f"{summary['edt_bass']:.4f}" if math.isfinite(summary["edt_bass"]) else "",
                    f"{summary['t_125']:.4f}" if math.isfinite(summary["t_125"]) else "",
                    f"{summary['smooth']:.4f}" if math.isfinite(summary["smooth"]) else "",
                    f"{row['mesh_volume']:.3f}",
                ]
            )


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description="Obývák wave-acoustics sweep")
    parser.add_argument("--quick", action="store_true")
    parser.add_argument("--h", type=float, default=0.22)
    parser.add_argument("--workers", type=int, default=4)
    args = parser.parse_args(argv)
    data = compute(h=args.h, quick=args.quick, workers=args.workers)
    path = render(data)
    print(f"wrote {path}", flush=True)


if __name__ == "__main__":
    main()
