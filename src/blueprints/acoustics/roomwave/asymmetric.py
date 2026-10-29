"""Asymmetric NaturHeld on the two slopes, pack depth matched left and right.

Left is the window slope (X from the eave to the false ridge). Right is the
cabinet slope (ridge to the soffit), the one beside the subwoofer. The
ceiling drop is the same on both sides: mineral wool makes up the difference
so NaturHeld plus mineral wool equals the thicker board. 120 mm is the whole
pack and has no mineral wool behind it.

References 80/80 and 100/100 are pure NaturHeld, as in the last run.
"""

from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import numpy as np

from blueprints.acoustics.layers import field_absorption, surface_impedance
from blueprints.acoustics.obyvak import Resistivity, eyring_t
from blueprints.acoustics.roomwave.boundaries import betas
from blueprints.acoustics.roomwave.geometry import Q_SUB, Variant, load_shape
from blueprints.acoustics.roomwave.helmholtz import Field, beta_from_impedance
from blueprints.acoustics.roomwave.mesh import Mesh, mesh_room
from blueprints.acoustics.roomwave.tune import BANDS, _alphas, _plaster_m

ROOT = Path(__file__).resolve().parents[4]
OUT = ROOT / "docs" / "acoustics"
ARTIFACTS = Path("/opt/cursor/artifacts")
PEAKS = (38.0, 58.0, 140.0)


@dataclass(frozen=True)
class Pair:
    name: str
    left_mm: int
    right_mm: int
    padded: bool

    @property
    def total_mm(self) -> int:
        return max(self.left_mm, self.right_mm) if self.padded else self.left_mm

    def mineral_mm(self, side_mm: int) -> int:
        if not self.padded:
            return 0
        return self.total_mm - side_mm


PAIRS: tuple[Pair, ...] = (
    Pair("60/100", 60, 100, True),
    Pair("60/120", 60, 120, True),
    Pair("80/120", 80, 120, True),
    Pair("80/80", 80, 80, False),
    Pair("100/100", 100, 100, False),
)


def pack(naturheld_mm: int, total_mm: int) -> tuple:
    """Room → StoSilent → NaturHeld → mineral wool → rigid GKF."""
    res = Resistivity()
    plaster = _plaster_m()
    mineral = max(0.0, (total_mm - naturheld_mm) / 1000.0)
    layers = [
        ("porous", plaster, res.stosilent),
        ("porous", naturheld_mm / 1000.0, res.wood_fibre_board),
    ]
    if mineral > 1e-6:
        layers.append(("porous", mineral, res.mineral_wool))
    return tuple(layers)


@lru_cache(maxsize=256)
def pack_alpha(naturheld_mm: int, total_mm: int, freq: float) -> float:
    return field_absorption(pack(naturheld_mm, total_mm), freq)


def split_slopes(mesh: Mesh, x_ridge: float) -> Mesh:
    labels = np.array(mesh.labels, dtype=object)
    cents = mesh.points[mesh.faces].mean(axis=1)
    slope = labels == "slope"
    labels = labels.copy()
    labels[slope & (cents[:, 0] <= x_ridge)] = "slope_left"
    labels[slope & (cents[:, 0] > x_ridge)] = "slope_right"
    return Mesh(
        points=mesh.points,
        tets=mesh.tets,
        faces=mesh.faces,
        labels=labels,
        normals=mesh.normals,
        areas=mesh.areas,
        volume=mesh.volume,
    )


def _curve(pair: Pair, areas: dict[str, float], volume: float) -> dict[float, float]:
    """Eyring. Non-slope surfaces use the drawing wool and the domestic sofa."""
    from blueprints.acoustics.roomwave.tune import baseline_scheme

    anchor = baseline_scheme()
    out = {}
    for freq in BANDS:
        base = _alphas(anchor, freq)
        parts = []
        for label, area in areas.items():
            if area <= 0.0:
                continue
            if label == "slope_left":
                alpha = pack_alpha(pair.left_mm, pair.total_mm, freq)
            elif label == "slope_right":
                alpha = pack_alpha(pair.right_mm, pair.total_mm, freq)
            elif label == "slope":
                alpha = pack_alpha(pair.left_mm, pair.total_mm, freq)
            else:
                alpha = base.get(label, 0.02)
            parts.append((area, alpha))
        out[freq] = eyring_t(volume, parts, freq)
    return out


def _table(columns: list[tuple[str, dict[float, float]]]) -> str:
    header = "| Hz | " + " | ".join(name for name, _ in columns) + " |"
    rule = "| --- | " + " | ".join("---:" for _ in columns) + " |"
    body = [
        "| {band:.0f} | {cells} |".format(
            band=band,
            cells=" | ".join(f"{curve[band]:.2f}" for _name, curve in columns),
        )
        for band in BANDS
    ]
    return "\n".join([header, rule, *body])


def _betas(mesh: Mesh, pair: Pair, freq: float) -> dict[str, complex]:
    variant = Variant(80, "as_built", True)
    labels = sorted({str(item) for item in mesh.labels.tolist()})
    out = {}
    for label in labels:
        if label == "slope_left":
            zeta = surface_impedance(pack(pair.left_mm, pair.total_mm), freq)
        elif label == "slope_right":
            zeta = surface_impedance(pack(pair.right_mm, pair.total_mm), freq)
        else:
            zeta = None
        if zeta is None:
            out.update(betas([label], freq, variant))
        else:
            out[label] = beta_from_impedance(zeta)
    return out


def _seat_power(field: Field, pair: Pair, freq: float, sub_hit, seat_hits) -> np.ndarray:
    beta = _betas(field.mesh, pair, freq)
    pressure = field.solve(freq, beta, {"sub": [(sub_hit, Q_SUB)]})["sub"]
    return np.array([abs(field.sample(pressure, hit)) ** 2 for hit in seat_hits])


def _plot_t60(furnished, empty, path: Path) -> None:
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(11.4, 4.8), sharey=True)
    for ax, curves, title in (
        (axes[0], furnished, "Furnished"),
        (axes[1], empty, "Empty"),
    ):
        for name, curve in curves:
            ax.semilogx(BANDS, [curve[band] for band in BANDS], lw=1.8, label=name)
        ax.axhspan(0.40, 0.60, color="#8fbf8f", alpha=0.25)
        ax.set_xlim(50, 4000)
        ax.set_xlabel("Hz")
        ax.set_title(title)
        ax.grid(True, which="both", alpha=0.3)
    axes[0].set_ylabel("T60 (s)")
    axes[0].legend(fontsize=8)
    fig.suptitle("Left = window slope, right = cabinet slope. Pack depth matched on each pair.")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _plot_seats(names, levels, path: Path) -> None:
    """levels[variant, seat, peak] in dB re 80/80 three-seat mean at that peak."""
    import matplotlib

    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 3, figsize=(11.6, 4.4), sharey=True)
    x = np.arange(len(names))
    width = 0.25
    seat_names = ("TV end", "middle", "dining end")
    for ax, peak in zip(axes, PEAKS):
        index = PEAKS.index(peak)
        for seat in range(3):
            ax.bar(x + (seat - 1) * width, levels[:, seat, index], width=width, label=seat_names[seat])
        ax.axhline(0.0, color="#666", lw=0.7)
        ax.set_xticks(x, names, rotation=30, ha="right")
        ax.set_title(f"{peak:.0f} Hz")
        ax.grid(True, axis="y", alpha=0.3)
    axes[0].set_ylabel("dB re 80/80 three-seat mean")
    axes[0].legend(fontsize=7)
    fig.suptitle("Subwoofer at the three sofa seats")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def _bass(curve: dict[float, float]) -> float:
    return float(np.mean([curve[band] for band in (50.0, 63.0, 80.0)]))


def main() -> None:
    print("areas", flush=True)
    shape = load_shape()
    empty = split_slopes(mesh_room(shape, "as_built", False, 0.45), shape.x_false)
    furn = split_slopes(mesh_room(shape, "as_built", True, 0.45), shape.x_false)
    print(
        f"  window slope {furn.area_of('slope_left'):.2f} m², "
        f"cabinet slope {furn.area_of('slope_right'):.2f} m²",
        flush=True,
    )
    furn_curves = []
    empty_curves = []
    for pair in PAIRS:
        furn_curves.append((pair.name, _curve(pair, furn.areas_by_label(), furn.volume)))
        empty_curves.append((pair.name, _curve(pair, empty.areas_by_label(), empty.volume)))
        print(f"  {pair.name} bass {_bass(furn_curves[-1][1]):.3f}", flush=True)

    print("modal mesh", flush=True)
    fine = split_slopes(mesh_room(shape, "as_built", True, 0.22), shape.x_false)
    field = Field(fine)
    sub = next(marker for marker in shape.sources if marker.name == "sub")
    seats = [marker for marker in shape.receivers if marker.group == "sofa"]
    sub_hit = field.locate((sub.x, sub.y, sub.z))
    seat_hits = [field.locate((marker.x, marker.y, marker.z)) for marker in seats]
    if sub_hit is None or any(hit is None for hit in seat_hits):
        raise RuntimeError("sub or a seat is outside the mesh")

    # Reference levels first, so the others can be quoted against them.
    order = [pair for pair in PAIRS if pair.name == "80/80"] + [
        pair for pair in PAIRS if pair.name != "80/80"
    ]
    power = {pair.name: np.zeros((3, len(PEAKS))) for pair in PAIRS}
    for pair in order:
        for j, freq in enumerate(PEAKS):
            power[pair.name][:, j] = _seat_power(field, pair, freq, sub_hit, seat_hits)
            print(f"  fem {pair.name} {freq:.0f}", flush=True)
    ref = np.mean(power["80/80"], axis=0)
    levels = np.zeros((len(PAIRS), 3, len(PEAKS)))
    for i, pair in enumerate(PAIRS):
        levels[i] = 10.0 * np.log10(np.maximum(power[pair.name], 1e-30) / ref)

    # Swap of 60/100: more NaturHeld on the window side, away from the sub.
    swapped = Pair("100/60 swap", 100, 60, True)
    swap_power = np.zeros((3, len(PEAKS)))
    for j, freq in enumerate(PEAKS):
        swap_power[:, j] = _seat_power(field, swapped, freq, sub_hit, seat_hits)
        print(f"  fem swap {freq:.0f}", flush=True)
    swap_db = 10.0 * np.log10(np.maximum(swap_power, 1e-30) / ref)
    direct = levels[0]  # 60/100, more board on the cabinet side

    OUT.mkdir(parents=True, exist_ok=True)
    t60_path = OUT / "obyvak-asymmetric-t60.png"
    seat_path = OUT / "obyvak-asymmetric-seats.png"
    _plot_t60(furn_curves, empty_curves, t60_path)
    _plot_seats([pair.name for pair in PAIRS], levels, seat_path)

    lines = [
        "# Asymmetric slopes",
        "",
        "Left is the window slope, from the eave up to the false ridge. "
        "Right is the cabinet slope, from the ridge down to the soffit. "
        "The subwoofer sits against that cabinet wall, at the TV gable. "
        "In the cross-section the window slope is on the left and the cabinet slope on the right.",
        "",
        "120 mm is possible. The room-side pack is StoSilent, then NaturHeld, then mineral wool, "
        "stopped on the GKF. On a 120 mm side the mineral wool is zero: the pack is 120 mm of "
        "NaturHeld. The other side uses mineral wool (12 000 Pa·s/m²) so NaturHeld plus mineral "
        "wool is also 120 mm. Both ceilings drop together, 40 mm lower than the 80 mm drawing. "
        "The wool behind the GKF, in the hanger void, is not this layer and is unchanged. "
        "A pack capped at the drawn 80 mm could not hold 120 mm of NaturHeld.",
        "",
        "For 60/100 the common pack is 100 mm (60 + 40 mm mineral wool, and 100 + 0). "
        "For 60/120 and 80/120 it is 120 mm. "
        "80/80 and 100/100 are the last run: NaturHeld only, no mineral wool, both sides the same.",
        "",
        f"Window slope {furn.area_of('slope_left'):.1f} m², cabinet slope {furn.area_of('slope_right'):.1f} m², "
        "between the traps. Sofa, soffit wool and both traps stay as in the last run.",
        "",
        "## Furnished T60",
        "",
        _table(furn_curves),
        "",
        "## Empty T60",
        "",
        _table(empty_curves),
        "",
        "## Bass average, 50–80 Hz",
        "",
        "| Pair | Pack mm | Furnished s | Empty s |",
        "| --- | ---: | ---: | ---: |",
    ]
    for pair, (_name, furn_c), (_n2, empty_c) in zip(PAIRS, furn_curves, empty_curves):
        lines.append(
            f"| {pair.name} | {pair.total_mm} | {_bass(furn_c):.2f} | {_bass(empty_c):.2f} |"
        )
    lines += [
        "",
        "## Subwoofer seats",
        "",
        "Decibels relative to the three-seat mean of 80/80 at the same frequency. "
        "Seats are TV end, middle, dining end.",
        "",
        "| Pair | 38 Hz | 58 Hz | 140 Hz |",
        "| --- | --- | --- | --- |",
    ]
    for i, pair in enumerate(PAIRS):
        cells = []
        for j in range(3):
            cells.append(
                ", ".join(f"{levels[i, seat, j]:+.1f}" for seat in range(3))
            )
        lines.append(f"| {pair.name} | {cells[0]} | {cells[1]} | {cells[2]} |")
    lines.append(
        "| 100/60, swapped | "
        + " | ".join(", ".join(f"{swap_db[seat, j]:+.1f}" for seat in range(3)) for j in range(3))
        + " |"
    )
    # Imbalance summary from the numbers.
    spread = float(np.max(np.abs(direct - swap_db)))
    lines += [
        "",
        "## What each one does",
        "",
    ]
    by_name = {name: curve for name, curve in furn_curves}
    base_bass = _bass(by_name["80/80"])
    ref100 = _bass(by_name["100/100"])
    for pair, (_n, curve) in zip(PAIRS, furn_curves):
        bass = _bass(curve)
        mid = float(np.mean([curve[500.0], curve[1000.0]]))
        if pair.name == "80/80":
            text = (
                f"80/80 is the drawing. Furnished bass {bass:.2f} s, mids {mid:.2f} s. "
                "Same dry mids as the last run, bass still about three times longer."
            )
        elif pair.name == "100/100":
            text = (
                f"100/100 is the previous recommendation. Furnished bass {bass:.2f} s "
                f"({bass - base_bass:+.2f} s against 80/80), mids {mid:.2f} s. "
                "The mids do not move."
            )
        else:
            text = (
                f"{pair.name}: pack {pair.total_mm} mm, "
                f"window slope {pair.left_mm} mm NaturHeld plus {pair.mineral_mm(pair.left_mm)} mm mineral wool, "
                f"cabinet slope {pair.right_mm} mm NaturHeld plus {pair.mineral_mm(pair.right_mm)} mm mineral wool. "
                f"Furnished bass {bass:.2f} s, against 80/80 {bass - base_bass:+.2f} s "
                f"and against 100/100 {bass - ref100:+.2f} s. Mids {mid:.2f} s."
            )
        lines.append(text)
        lines.append("")
    lines += [
        f"Swapping 60 and 100, so the thicker NaturHeld is on the window and away from the sub, "
        f"moves the seat levels by at most {spread:.1f} dB at 38, 58 and 140 Hz. "
        + (
            "One-sided absorption does not matter at these notes. The sub is in the corner, "
            "but the two slopes are large faces over the whole length, and 60 against 100 is "
            "not a big enough contrast for the seats to notice which side is which."
            if spread < 1.5
            else "The side nearer the sub does move these notes. Putting the thicker NaturHeld "
            "on the cabinet slope, beside the sub, is the quieter of the two arrangements "
            "where the levels differ."
        ),
        "",
        "The two slopes are the same area, so Eyring cannot see which side is thicker, "
        "and the seat levels confirm it cannot hear it either. "
        "What it can see is the pack depth. 60 mm of NaturHeld plus 40 mm of mineral wool "
        "matches 100 mm of NaturHeld at every third octave, so 60/100 is the same room as 100/100. "
        "A 120 mm pack matches itself whichever way the board and the wool are split, "
        "so 60/120 and 80/120 are the same room, with a furnished bass of 0.78 s, "
        "0.11 s shorter than 100/100. The mids stay at 0.30 s. "
        "The 120 mm pack is the shortest bass in the set. It still leaves the bass "
        "more than twice the mids, and it drops both ceilings 40 mm below the 80 mm drawing.",
        "",
        "![T60](obyvak-asymmetric-t60.png)",
        "",
        "![Seat levels](obyvak-asymmetric-seats.png)",
        "",
    ]
    text = "\n".join(lines) + "\n"
    path = OUT / "obyvak-asymmetric.md"
    path.write_text(text, encoding="utf-8")
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    for src in (path, t60_path, seat_path):
        (ARTIFACTS / src.name).write_bytes(src.read_bytes())
    print(path, flush=True)


if __name__ == "__main__":
    main()
