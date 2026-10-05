"""Panel-on-cavity checks: limp limit, bay size, plate frequencies, cut gable."""

from __future__ import annotations

import math

from blueprints.acoustics.lattice import CANDIDATES, layout_gable
from blueprints.acoustics.layers import (
    C0,
    field_absorption,
    reactance_zero_hz,
    surface_impedance,
    surface_impedance_kx,
)
from blueprints.acoustics.obyvak import (
    Resistivity,
    _models,
    _split,
    constrained_split,
    room_geometry,
    trap_stack,
)
from blueprints.acoustics.panel import (
    Cavity,
    Plate,
    analytic_ss_system,
    cc_strip_frequency,
    field_alpha,
    first_absorption_peak_hz,
    make_rectangle,
    normal_reactance_zero_hz,
    solve_modes,
    ss_strip_frequency,
)


def test_lateral_impedance_matches_an_angle_for_propagating_waves():
    stacks = (
        (("air", 0.02, 0.0), ("porous", 0.05, 10_000.0)),
        (("mass", 10.0, 0.0), ("air", 0.10, 0.0)),
    )
    freq = 100.0
    k0 = 2.0 * math.pi * freq / C0
    for stack in stacks:
        for theta_deg in (0.0, 30.0, 60.0):
            theta = math.radians(theta_deg)
            angled = surface_impedance(stack, freq, theta)
            traced = surface_impedance_kx(stack, freq, k0 * math.sin(theta))
            assert abs(angled - traced) / abs(angled) < 1e-6


def test_limp_limit_recovers_the_membrane_peak():
    """A huge bay with the bending stiffness removed is today's loose sheet."""
    geom = room_geometry()
    res = Resistivity()
    plate = Plate(e_pa=0.0, eta=0.0)
    system = analytic_ss_system(80.0, 80.0, 0.0, plate.mu, m_max=15, tail=True)
    cases = (
        (geom.kitchen_cavity, geom.kitchen_wool_fraction, 38.0, 48.0),
        (geom.living_cavity, geom.living_wool_fraction, 24.0, 32.0),
    )
    for cavity, fraction, lo, hi in cases:
        wool, air = _split(cavity, fraction)
        stack = trap_stack(wool, air, geom.gkb_mass, res.mineral_wool)
        limp = reactance_zero_hz(stack)
        assert limp is not None and lo < limp < hi
        found = normal_reactance_zero_hz(system, plate, Cavity(air, wool, res.mineral_wool))
        assert found is not None
        assert abs(found - limp) < 3.0
        for freq in (31.5, 50.0, 63.0, 125.0):
            panel = field_alpha(system, freq, plate, Cavity(air, wool, res.mineral_wool), n_angles=16)
            sheet = field_absorption(stack, freq, n_angles=16)
            assert abs(panel - sheet) < 0.03


def test_strip_and_clamped_plate_frequencies():
    plate = Plate()
    rigidity, mu = plate.flexural_rigidity, plate.mu
    strip = make_rectangle(0.625, 4.0, bottom="free", top="free")
    simple = solve_modes(strip, plate.with_changes(edge="simple"))
    expect_ss = ss_strip_frequency(0.625, rigidity, mu)
    assert abs(simple.modes[0].omega / (2.0 * math.pi) - expect_ss) / expect_ss < 0.03
    clamped = solve_modes(strip, plate.with_changes(edge="continuous"))
    expect_cc = cc_strip_frequency(0.625, rigidity, mu)
    assert abs(clamped.modes[0].omega / (2.0 * math.pi) - expect_cc) / expect_cc < 0.03
    square = solve_modes(make_rectangle(1.0, 1.0), plate.with_changes(edge="continuous"))
    omega_nd = square.modes[0].omega * math.sqrt(mu / rigidity)
    # Leissa, square plate clamped on four edges, fundamental Ω ≈ 35.99.
    assert abs(omega_nd - 35.99) / 35.99 < 0.03


def test_smaller_bay_raises_the_absorption_peak():
    geom = room_geometry()
    wool, air = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    cavity = Cavity(air, wool, Resistivity().mineral_wool)
    widths = (0.45, 0.70, 1.10)
    for edge in ("continuous", "simple"):
        for factor in (0.5, 1.0, 2.0):
            plate = Plate(edge=edge, e_pa=2.5e9 * factor)
            peaks = []
            for width in widths:
                system = solve_modes(make_rectangle(width, width), plate)
                # f_lo stays under the half-stiffness 1.1 m note, which sits near 12 Hz.
                peaks.append(first_absorption_peak_hz((system,), plate, cavity, f_lo=8.0, n=56))
            assert peaks[0] > peaks[1] > peaks[2], (edge, factor, peaks)


def test_gable_layout_keeps_the_cut_fields_and_the_area():
    ObyvakParams, _, build_layout = _models()
    params = ObyvakParams()
    outline = build_layout(params).predstena_pts()
    area = 0.0
    for (x0, z0), (x1, z1) in zip(outline, outline[1:] + outline[:1]):
        area += x0 * z1 - x1 * z0
    area = abs(area) * 0.5 / 1.0e6
    assert 8.0 < area < 9.5
    for spec in CANDIDATES:
        layout = layout_gable(outline, spec, inset_mm=params.cd_first_inset)
        assert abs(layout.area - area) < 0.02
        assert layout.n_cut > 0
        assert layout.bays
        assert layout.cd_x_mm[0] == pytest_approx(params.cd_first_inset)


def pytest_approx(value: float, tol: float = 1e-6):
    class _Cmp:
        def __eq__(self, other: object) -> bool:
            return isinstance(other, (int, float)) and abs(other - value) < tol

    return _Cmp()


def test_kitchen_clearance_caps_the_wool():
    geom = room_geometry()
    fraction, wool, air = constrained_split(geom.kitchen_cavity, 1.0, 0.047)
    assert air >= 0.047 - 1e-9
    assert abs(wool - 0.1305) < 1e-4
    assert fraction < 0.75
    # Living can fill the cavity.
    full, wool_l, air_l = constrained_split(geom.living_cavity, 1.0, 0.0)
    assert full == 1.0
    assert air_l == 0.0
    assert abs(wool_l - geom.living_cavity) < 1e-9


def test_gable_stud_spacing_moves_the_kitchen_peak():
    """625 vertical must sit above 1000 horizontal. Bay size is in the answer."""
    ObyvakParams, _, build_layout = _models()
    params = ObyvakParams()
    outline = build_layout(params).predstena_pts()
    geom = room_geometry(params)
    wool, air = _split(geom.kitchen_cavity, geom.kitchen_wool_fraction)
    cavity = Cavity(air, wool, Resistivity().mineral_wool)
    plate = Plate()
    peaks = {}
    for spec in CANDIDATES:
        layout = layout_gable(outline, spec, inset_mm=params.cd_first_inset)
        systems = tuple(solve_modes(bay, plate) for bay in layout.bays)
        peaks[spec.name] = first_absorption_peak_hz(systems, plate, cavity, n=48)
    assert peaks["625 vertical"] > peaks["1000 horizontal"] + 10.0
