"""Panel-on-cavity checks: limp limit, bay size, plate frequencies, cut gable."""

from __future__ import annotations

import math

from blueprints.acoustics.lattice import CANDIDATES, LatticeSpec, layout_gable
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
        assert layout.cd_x_mm[0] == pytest_approx(min(x for x, _ in outline))
        assert layout.cd_x_mm[-1] == pytest_approx(max(x for x, _ in outline))


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


def test_even_studs_and_supported_perimeter_are_the_default():
    """A profile on both edges, equal bays, and no free strip along the outline."""
    ObyvakParams, _, build_layout = _models()
    params = ObyvakParams()
    outline = build_layout(params).predstena_pts()
    x_left = min(x for x, _ in outline)
    x_right = max(x for x, _ in outline)
    width = x_right - x_left
    z_bottom = min(z for _, z in outline)
    for spec in CANDIDATES:
        assert spec.studs == "even"
        assert spec.perimeter == "supported"
        layout = layout_gable(outline, spec, inset_mm=params.cd_first_inset)
        stations = [x - x_left for x in layout.cd_x_mm]
        assert stations[0] == pytest_approx(0.0)
        assert stations[-1] == pytest_approx(width)
        gaps = [b - a for a, b in zip(stations, stations[1:])]
        n_bays = max(1, round(width / spec.cd_spacing_mm))
        assert len(gaps) == n_bays
        step = width / n_bays
        assert all(abs(gap - step) < 0.5 for gap in gaps)
        assert any(f"{n_bays} equal bays of {step:.0f} mm" in note for note in layout.notes)
        # The old 90 mm start and the short closer are gone.
        assert min(gaps) > 400.0
        bottom = [
            bay
            for bay in layout.bays
            if abs(bay.z0 * 1000.0 - z_bottom) < 2.0
        ]
        assert bottom
        assert all(bay.bottom == "perimeter" for bay in bottom)
        assert any(bay.left == "perimeter" for bay in bottom)
        assert any(bay.right == "perimeter" for bay in bottom)
        interior = [bay for bay in bottom if bay.left == "supported" and bay.right == "supported"]
        assert interior
        hinged = interior[0].with_edge("continuous")
        assert hinged.left == "continuous" and hinged.right == "continuous"
        assert hinged.bottom == "simple"
        edge_bay = next(bay for bay in bottom if bay.left == "perimeter")
        held = edge_bay.with_edge("continuous")
        assert held.left == "simple"
        assert held.bottom == "simple"
        # A cut field still has a rake. Its outline edges are not a free strip.
        cut = [bay for bay in layout.bays if bay.kind != "rectangle"]
        assert cut
        narrow_free = [
            bay
            for bay in layout.bays
            if bay.span_x < 0.2
            and bay.left == "free"
            and bay.right == "free"
        ]
        assert not narrow_free
    text = " ".join(describe for spec in CANDIDATES for describe in layout_gable(outline, spec, inset_mm=params.cd_first_inset).notes)
    assert "simply supported" in text
    assert "Hairline cracks" in text


def test_inset_studs_still_start_one_module_in():
    ObyvakParams, _, build_layout = _models()
    params = ObyvakParams()
    outline = build_layout(params).predstena_pts()
    spec = LatticeSpec(
        name="old 625",
        orientation="vertical",
        cd_spacing_mm=625.0,
        studs="inset",
        perimeter="free",
    )
    layout = layout_gable(outline, spec, inset_mm=params.cd_first_inset)
    x_left = min(x for x, _ in outline)
    assert layout.cd_x_mm[0] - x_left == pytest_approx(params.cd_first_inset)
    assert any(bay.left == "free" or bay.bottom == "free" for bay in layout.bays)


def test_full_wool_lateral_path_is_the_porous_stack():
    """A full cavity has no open-air layer for the shape to slide through."""
    sigma = Resistivity().mineral_wool
    freq = 31.5
    depth = 0.4375
    kx = math.pi / 1.07
    wool = Cavity(0.0, depth, sigma).impedance(freq, kx)
    porous = surface_impedance_kx((("porous", depth, sigma),), freq, kx)
    air = Cavity(depth, 0.0, sigma).impedance(freq, kx)
    # Cavity rounds kx to 0.001 m⁻¹ before the stack, so the two calls are not bit-identical.
    assert abs(wool - porous) < 0.05 * abs(porous)
    assert wool.real > air.real * 5.0


def test_air_cavity_depth_lowers_peak_at_fixed_bay():
    """Piston air spring must survive modal coupling.

    At normal incidence the (1,1) bay has a large uniform volume-velocity
    component, so a pure-air cavity's depth must still move the absorption
    peak (toward the limp mass–air note as the bay gets large). Evaluating
    the cavity only at the mode's high k_lat makes the field evanescent and
    depth-blind; that is a bug, not physics.
    """
    plate = Plate(edge="simple")
    system = analytic_ss_system(0.625, 2.0, plate.flexural_rigidity, plate.mu, m_max=7)
    shallow = Cavity(0.19, 0.0, 12_000.0)
    deep = Cavity(0.45, 0.0, 12_000.0)
    peak_shallow = first_absorption_peak_hz((system,), plate, shallow, f_lo=12.0, f_hi=120.0, n=96)
    peak_deep = first_absorption_peak_hz((system,), plate, deep, f_lo=12.0, f_hi=120.0, n=96)
    assert peak_deep < peak_shallow - 5.0, (peak_shallow, peak_deep)


def test_depth_sensitivity_beats_lattice_on_air_cavity():
    """190→450 mm air must move the peak at least as much as 625×2000→1000×1250."""
    plate = Plate(edge="simple")
    bay_625 = analytic_ss_system(0.625, 2.0, plate.flexural_rigidity, plate.mu, m_max=7)
    bay_1000 = analytic_ss_system(1.0, 1.25, plate.flexural_rigidity, plate.mu, m_max=7)
    shallow = Cavity(0.19, 0.0, 12_000.0)
    deep = Cavity(0.45, 0.0, 12_000.0)
    p_625_shallow = first_absorption_peak_hz((bay_625,), plate, shallow, f_lo=12.0, f_hi=120.0, n=96)
    p_625_deep = first_absorption_peak_hz((bay_625,), plate, deep, f_lo=12.0, f_hi=120.0, n=96)
    p_1000_shallow = first_absorption_peak_hz((bay_1000,), plate, shallow, f_lo=12.0, f_hi=120.0, n=96)
    depth_delta = abs(p_625_shallow - p_625_deep)
    lattice_delta = abs(p_625_shallow - p_1000_shallow)
    assert depth_delta >= lattice_delta - 1.0, (depth_delta, lattice_delta, p_625_shallow, p_625_deep, p_1000_shallow)
