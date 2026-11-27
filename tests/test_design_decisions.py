"""Stated design invariants. Exact numbers live only here, each with its source.

Confirmed by Petr on 2026-11-27 (Q8 of the Blueprints refactoring plan).
These tests reuse the session-scoped fixtures in tests/conftest.py.
"""

from __future__ import annotations

from pathlib import Path
import sys

import pytest
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import ceiling_line  # noqa: E402
import kitchen_cabinet as kc  # noqa: E402
from ground_floor import FURNISHING_LISTS, SOURCE_PATH  # noqa: E402
from yaml_ifc import write_ifc  # noqa: E402
from yaml_ifc.ids import derived_global_id, is_derived  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402


def _world_box(element):
    """Axis-aligned world metres. RefDirection turns width; depth is to its left."""
    ox, oy = (float(value) for value in element["Origin"])
    z0 = float(element.get("Elevation") or 0.0)
    width, depth, height = (float(element[key]) for key in ("Width", "Depth", "Height"))
    ref = element.get("RefDirection") or [1.0, 0.0]
    ux, uy = float(ref[0]), float(ref[1])
    vx, vy = -uy, ux
    xs, ys = [], []
    for along in (0.0, width):
        for across in (0.0, depth):
            xs.append(ox + along * ux + across * vx)
            ys.append(oy + along * uy + across * vy)
    return min(xs), min(ys), z0, max(xs), max(ys), z0 + height


def _by_id(doc):
    return {item["id"]: item for key in FURNISHING_LISTS for item in doc.get(key) or []}


def test_nothing_reaches_above_the_ceiling_line(furnishings_doc, kitchen_runs, obyvak_layout):
    """Ceiling line 2450 mm: nothing above it (windows, pocket doors, furniture, bass traps).

    Petr, 2026-11-13: "don't move anything up, make it shorter in height. The
    existing ceiling line (windows, pocket doors, furtniture, basstraps) is an
    invariant." Enforced by models/ceiling_line.py.
    """
    params, _layout = obyvak_layout
    assert ceiling_line.CEILING_LINE_MM == pytest.approx(2450.0)
    assert params.furniture_height == pytest.approx(2450.0)
    assert params.predstena_bottom_z == pytest.approx(2450.0)
    assert params.pocket_door_h == pytest.approx(2450.0)

    runs = list(kitchen_runs.values())
    ceiling_line.check_ceiling_line(furnishings_doc, FURNISHING_LISTS, runs)

    line_m = ceiling_line.CEILING_LINE_MM / 1000.0
    house = yaml.safe_load(SOURCE_PATH.read_text(encoding="utf-8"))
    openings = {item["id"]: item for item in house["openings"]}
    doors = {item["id"]: item for item in house["doors"]}
    for door in doors.values():
        opening = openings[door["FillsOpening"]]
        if "POCKET" in str(door.get("OperationType") or "").upper() or "SLIDING" in str(
            door.get("OperationType") or ""
        ):
            head = float(opening.get("SillHeight") or 0.0) + float(opening["Height"])
            assert head <= line_m + 1e-6, door["id"]
            if door.get("OverallHeight") is not None:
                assert float(door["OverallHeight"]) <= line_m + 1e-6, door["id"]


def test_west_run_is_600_deep_with_a_1100_aisle_and_a_centred_fridge(furnishings_doc):
    """West run 600 mm deep, 1100 mm front-to-front aisle to the island, fridge centred in that aisle.

    Petr, 2026-11-20 (furnishings.md, kitchen-cabinets.md): "make sure kitchen
    dimensions from west are as follows: 600mm counter, 1100mm alley space,
    island. ... 900mm wide fridge still centered in that alley."
    """
    by_id = _by_id(furnishings_doc)
    west_fronts = []
    west_depths = []
    for bay_id in ("SF-A250", "SF-B800", "SF-C850"):
        box = _world_box(by_id[bay_id])
        west_fronts.append(box[3])  # max X, the aisle face
        west_depths.append((box[3] - box[0]) * 1000.0)
    island_fronts = []
    for bay_id in ("SF-I500a", "SF-I600a", "SF-I500b", "SF-I600b", "SF-I300"):
        box = _world_box(by_id[bay_id])
        island_fronts.append(box[0])  # min X, the aisle face
    west_front = sum(west_fronts) / len(west_fronts)
    island_front = sum(island_fronts) / len(island_fronts)
    assert west_depths == pytest.approx([600.0] * len(west_depths))
    aisle_mm = (island_front - west_front) * 1000.0
    assert aisle_mm == pytest.approx(1100.0)

    fridge = _world_box(by_id["EA-WQ9I"])
    fridge_centre = (fridge[0] + fridge[3]) / 2.0
    aisle_centre = (west_front + island_front) / 2.0
    assert fridge_centre == pytest.approx(aisle_centre, abs=1e-6)


def test_wall_cabinets_start_at_1560(furnishings_doc, kitchen_runs):
    """Wall cabinets start at 1560 mm from the floor.

    Petr, 2026-11-13: "top cabinets to start at 1560mm".
    """
    # West-run wall cabinets and the dining hanging run (SF-DH). The
    # over-fridge cabinet SF-TF sits on the fridge, not on this line.
    for run_id in ("KR-WEST-H", "KR-DH"):
        hanging = kitchen_runs[run_id].bays
        assert hanging, run_id
        for bay in hanging:
            assert bay.z_base == pytest.approx(1560.0), bay.id
    by_id = _by_id(furnishings_doc)
    for bay_id in ("SF-AH850", "SF-BH800", "SF-CH850", "SF-DH"):
        assert float(by_id[bay_id]["Elevation"]) == pytest.approx(1.560), bay_id


def test_finished_worktop_top_is_930_everywhere(kitchen_runs):
    """Finished worktop top 930 mm everywhere.

    kitchen-cabinets.md marks this a `guess:` invariant of the kitchen runs.
    """
    tops = []
    for run in kitchen_runs.values():
        if run.worktop is None:
            continue
        assert run.worktop[5] == pytest.approx(930.0), run.id
        tops.append(run.id)
    assert {"KR-WEST", "KR-ISL", "KR-DN"} <= set(tops)


def test_soffit_band_and_living_cabinets_are_450_deep(furnishings_doc, obyvak_layout):
    """Soffit band and dining/living cabinets 450 mm deep; 600 mm tall cabinets stick out on purpose.

    Petr, 2026-11-06 (design/README.md): "The soffit band is 450 mm deep, and
    so are the dining and living-area cabinets. The 600 mm kitchen tall
    cabinets stick out beyond it on purpose."
    """
    params, layout = obyvak_layout
    assert params.furniture_width == pytest.approx(450.0)
    # Layout X is eave-to-eave; the soffit band is furniture_width in from the cabinet eave.
    band = params.room_width - layout.x_furn
    assert band == pytest.approx(450.0)

    by_id = _by_id(furnishings_doc)
    for bay_id in ("SF-DN", "SF-LB", "SF-TC"):
        box = _world_box(by_id[bay_id])
        depth_mm = (box[4] - box[1]) * 1000.0
        assert depth_mm == pytest.approx(450.0), bay_id

    # Tall kitchen cabinets are deeper than the 450 mm band and stand proud
    # of the dining/living line (carcass 600 mm; the YAML box is a little more).
    tall_fronts = []
    for bay_id in ("SF-T1", "SF-T2", "SF-T3", "SF-T4"):
        box = _world_box(by_id[bay_id])
        depth_mm = (box[4] - box[1]) * 1000.0
        assert depth_mm >= 600.0 - 1e-6, bay_id
        tall_fronts.append(box[1])  # min Y, the room face
    living_front = _world_box(by_id["SF-LB"])[1]
    assert max(tall_fronts) < living_front - 1e-6


def test_main_and_garage_hall_door_heads_match_the_window_head():
    """Main and garage-hall door heads equal the OP39b window head, 2.50 m.

    Source: the invariant previously asserted by test_head_heights_match_the_window_head
    (the matching head height is not separately written in the design docs).
    """
    doc = yaml.safe_load(SOURCE_PATH.read_text(encoding="utf-8"))
    openings = {item["id"]: item for item in doc["openings"]}
    doors = {item["id"]: item for item in doc["doors"]}
    window_head = openings["OP39b"]["SillHeight"] + openings["OP39b"]["Height"]
    assert window_head == pytest.approx(2.50)
    for oid in ("OP38", "OP39a"):
        assert openings[oid]["SillHeight"] + openings[oid]["Height"] == pytest.approx(window_head)
        assert doors[f"D-{oid}"]["OverallHeight"] == pytest.approx(window_head)


def test_ifc_global_ids_stay_stable_across_regenerations(tmp_path):
    """IFC GlobalIds stay stable across regenerations.

    Petr and Nerd, 2026-11-11 (docs/Home.md): Home will point at IFC elements
    by GlobalId, so those ids must stay the same when the IFC is regenerated.
    yaml-ifc derives each id as a UUID5 of `yaml-ifc:` plus the YAML `id`
    (vendor/yaml-ifc/yaml_ifc/ids.py). The house files store no explicit
    GlobalId, so today's ids are a pure function of those YAML ids.
    """
    yaml_id = "C12-S"
    assert derived_global_id(yaml_id) == derived_global_id(yaml_id)
    assert derived_global_id(yaml_id) != derived_global_id("C13-E")

    yaml_dir = ROOT / "inputs" / "ground_floor"
    files = [path for path in sorted(yaml_dir.glob("*.yaml")) if path.name != "cable-routes.yaml"]
    assert files
    for path in files:
        original = load_yaml_ifc(path)
        first = write_ifc(original, tmp_path / f"{path.stem}-a.ifc")
        second = write_ifc(original, tmp_path / f"{path.stem}-b.ifc")
        first_ids = {entity.GlobalId: (entity.is_a(), entity.Name) for entity in first if getattr(entity, "GlobalId", None)}
        second_ids = {entity.GlobalId: (entity.is_a(), entity.Name) for entity in second if getattr(entity, "GlobalId", None)}
        assert first_ids == second_ids, path.name
        # Products that carry a yaml id use the derived UUID5, unless the
        # document stored an explicit GlobalId (the house files store none).
        for entity in first:
            yaml_key = _product_yaml_id(entity)
            if yaml_key is None or not getattr(entity, "GlobalId", None):
                continue
            assert is_derived(entity.GlobalId, yaml_key), (path.name, yaml_key)


def _product_yaml_id(entity):
    for rel in getattr(entity, "IsDefinedBy", None) or []:
        if not rel.is_a("IfcRelDefinesByProperties"):
            continue
        definition = rel.RelatingPropertyDefinition
        if definition is None or not definition.is_a("IfcPropertySet"):
            continue
        for prop in definition.HasProperties or []:
            if prop.is_a("IfcPropertySingleValue") and prop.Name == "id" and prop.NominalValue:
                return str(prop.NominalValue.wrappedValue)
    return None


def test_maker_limits_blum_stops_merivobox_fronts_and_miele_niches(furnishings_doc, kitchen_runs):
    """Maker limits: Blum HF stops, MERIVOBOX minimum front heights, Miele niche range.

    Maker sheets cited in kitchen-cabinets.md. The export-time rejections for
    a breach live in test_kitchen_cabinet.py; this asserts the current design
    stays inside those ranges.
    """
    hf_stops = set(kc.AVENTOS["HF"]["stops"])
    for run in kitchen_runs.values():
        for part in run.parts:
            if getattr(part, "lift", None) is None:
                continue
            if part.props.get("FittingCode") != "HF":
                continue
            angle = part.props.get("OpeningAngle")
            if angle is None:
                continue
            assert angle in hf_stops, part.id

    hanging, short = [], []
    for run in kitchen_runs.values():
        for part in run.parts:
            drawer = getattr(part, "drawer", None)
            if drawer is None or not drawer.side or drawer.frame or part.role not in ("Drawer", "PullOut"):
                continue
            front_h = drawer.front[5] - drawer.front[4]
            min_h = kc.merivobox_min_front(drawer.side)
            if front_h + 1e-6 < min_h:
                short.append(part.id)
            if drawer.box[4] < drawer.front[4] - 1e-6:
                hanging.append(part.id)
    assert hanging == []
    assert short == []

    by_id = _by_id(furnishings_doc)
    niches = []
    for item in furnishings_doc.get("electricAppliances") or []:
        props = {}
        for group in item.get("PropertySets") or []:
            if group.get("Name") == "Pset_BuiltIn":
                props.update(group.get("Properties") or {})
        if props.get("Kind") != "Niche":
            continue
        part = None
        for run in kitchen_runs.values():
            try:
                part = run.part(item["id"])
                break
            except (KeyError, StopIteration):
                continue
        assert part is not None, item["id"]
        clear_h = part.props["NicheClearHeight"]
        clear_w = part.props["NicheClearWidth"]
        lo_h, hi_h = props.get("NicheHeightMin"), props.get("NicheHeightMax")
        lo_w, hi_w = props.get("NicheWidthMin"), props.get("NicheWidthMax")
        if lo_h is not None:
            assert clear_h >= float(lo_h) - 1e-9, item["id"]
        if hi_h is not None:
            assert clear_h <= float(hi_h) + 1e-9, item["id"]
        if lo_w is not None:
            assert clear_w >= float(lo_w) - 1e-9, item["id"]
        if hi_w is not None:
            assert clear_w <= float(hi_w) + 1e-9, item["id"]
        niches.append(item["id"])
    assert {"EA-DGC7465", "EA-M2230"} <= set(niches)
