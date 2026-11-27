"""Room 1.02 furnishings: the kitchen boxes, the living room, and the converter."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from ground_floor import (  # noqa: E402
    FURNISHINGS_PATH,
    FURNISHING_LISTS,
    LABEL_CABINET,
    LABEL_DOOR,
    LABEL_GLAZING,
    LABEL_MASONRY,
    MESH_GAP_MM,
    ROOM_ID,
    ROOM_PIERS_M,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    _furnishing_parts,
    build,
    furnishing_records,
    load_furnishings,
    scenes,
)
from yaml_ifc import read_ifc, validation_errors, write_ifc
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import dump, load as load_yaml_ifc

# Spec lists. Absent from the room file until a placement is written.
FURNISHING_KEYS = (
    "furniture",
    "systemFurniture",
    "sanitaryTerminals",
    "electricAppliances",
    "lightFixtures",
    "coverings",
)


def _same(left, right, path=""):
    if isinstance(left, dict) and isinstance(right, dict):
        for key in list(dict.fromkeys([*left, *right])):
            if key not in left or key not in right:
                side = "left" if key in left else "right"
                raise AssertionError(f"{path}.{key} only on the {side}")
            _same(left[key], right[key], f"{path}.{key}")
        return
    if isinstance(left, list) and isinstance(right, list):
        if len(left) != len(right):
            raise AssertionError(f"{path} length {len(left)} != {len(right)}")
        for index, (item, other) in enumerate(zip(left, right)):
            _same(item, other, f"{path}[{index}]")
        return
    if isinstance(left, bool) or isinstance(right, bool):
        if left != right:
            raise AssertionError(f"{path} {left!r} != {right!r}")
        return
    if isinstance(left, (int, float)) and isinstance(right, (int, float)):
        if abs(float(left) - float(right)) > 1e-5:
            raise AssertionError(f"{path} {left} != {right}")
        return
    if left != right:
        raise AssertionError(f"{path} {left!r} != {right!r}")


def _aabb(element):
    """Axis-aligned box. Origin is the plan corner; Elevation defaults to 0."""
    x, y = (float(v) for v in element["Origin"])
    z = float(element.get("Elevation") or 0.0)
    return (
        x,
        y,
        z,
        x + float(element["Width"]),
        y + float(element["Depth"]),
        z + float(element["Height"]),
    )


def _shell(**lists):
    """A furnishings document. Lists are added only by the caller."""
    doc = {
        "schema": "IFC4 ADD2 TC1",
        "units": {"LengthUnit": "METRE"},
        "project": {"id": "PRJ", "Name": "RD Šíma", "Aggregates": ["SITE"]},
        "site": {
            "id": "SITE",
            "Name": "Bor u Tachova",
            "RefElevation": 472.1,
            "Aggregates": ["BLD"],
        },
        "building": {"id": "BLD", "Name": "RD Šíma", "Aggregates": ["STOREY-1NP"]},
        "storey": {"id": "STOREY-1NP", "Name": "1.NP", "Elevation": 0},
        "spaces": [
            {
                "id": ROOM_ID,
                "Name": "1.02 Obývák",
                "LongName": "Obývák a kuchyň",
                "PredefinedType": "INTERNAL",
            }
        ],
        "walls": [],
        "openings": [],
        "doors": [],
        "windows": [],
    }
    doc.update(lists)
    return doc


def _one_cabinet():
    """One module, used only by tests. Not written into furnishings.yaml."""
    return _shell(
        systemFurniture=[
            {
                "id": "SF-test",
                "Name": "Test cabinet",
                "PredefinedType": "USERDEFINED",
                "ObjectType": "BaseCabinet",
                "ContainedInStructure": ROOM_ID,
                "Origin": [19.0, 15.0],
                "Width": 0.6,
                "Depth": 0.6,
                "Height": 0.9,
            }
        ]
    )


def test_furnishings_file_has_the_space_and_lists():
    doc = load_furnishings()
    assert FURNISHINGS_PATH.is_file()
    assert set(FURNISHING_LISTS) == set(FURNISHING_KEYS)
    assert doc["walls"] == []
    spaces = doc["spaces"]
    assert [space["id"] for space in spaces] == [ROOM_ID]
    space = spaces[0]
    assert space["PredefinedType"] == "INTERNAL"
    for field in ("Origin", "Width", "Depth", "Height", "ObjectType"):
        assert field not in space
    records = furnishing_records(doc)
    ids = [item["id"] for item in records]
    assert ids == list(dict.fromkeys(ids))
    assert all(item["ContainedInStructure"] == ROOM_ID for item in records)




def test_build_places_every_furnishing_inside_the_room(ground_floor_model):
    shape, meta = ground_floor_model
    records = furnishing_records()
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    placed_ids = {child.furnishing_id for child in placed}
    record_ids = {item["id"] for item in records}
    # A monoblock bay may be represented by several child parts (drawers, fronts).
    for record_id in record_ids:
        assert record_id in placed_ids or any(
            pid == record_id or pid.startswith(record_id + "-") for pid in placed_ids
        ), record_id
    labels = {child.label for child in shape.children}
    assert {LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR, LABEL_CABINET, "appliance", "sink"} <= labels
    assert {"upholstery", "oak", "rug"} <= labels
    assert "light" in labels
    by_element = {}
    for child in placed:
        by_element.setdefault(child.furnishing_id, []).append(child)
    for furnishing_id, children in by_element.items():
        bb = children[0].bounding_box()
        for extra in children[1:]:
            bb = bb.add(extra.bounding_box())
        assert ROOM_X0 * 1000 - 50 <= bb.min.X and bb.max.X <= ROOM_X1 * 1000 + 50, furnishing_id
        assert ROOM_Y0 * 1000 - 50 <= bb.min.Y and bb.max.Y <= ROOM_Y1 * 1000 + 50, furnishing_id






def test_furnishings_yaml_round_trips(tmp_path):
    original = load_yaml_ifc(FURNISHINGS_PATH)
    ifc_path = tmp_path / "furnishings.ifc"
    model = write_ifc(original, ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(original, restored)
    assert len(model.by_type("IfcSpace")) == 1
    doc = load_furnishings()
    assert len(model.by_type("IfcFurniture")) == len(doc["furniture"])
    assert len(model.by_type("IfcSystemFurnitureElement")) == len(doc["systemFurniture"])
    assert len(model.by_type("IfcElectricAppliance")) == len(doc["electricAppliances"])
    assert len(model.by_type("IfcSanitaryTerminal")) == len(doc["sanitaryTerminals"])
    assert len(model.by_type("IfcCovering")) == len(doc["coverings"])


def test_converter_places_a_fixture_box(tmp_path):
    """The loading path, on a document that is not the room file."""
    doc = _one_cabinet()
    path = tmp_path / "furnishings.yaml"
    dump(doc, path)
    loaded = load_furnishings(path)
    records = furnishing_records(loaded)
    assert [item["id"] for item in records] == ["SF-test"]
    assert records[0]["list"] == "systemFurniture"
    assert records[0]["label"] == LABEL_CABINET
    assert len(records[0]["Origin"]) == 2

    shape, meta = build(furnishings_path=path)
    assert meta["derived"]["furnishings"] == 1
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    assert [child.furnishing_id for child in placed] == ["SF-test"]
    assert placed[0].label == LABEL_CABINET
    box = _aabb(records[0])
    bb = placed[0].bounding_box()
    assert bb.min.X >= box[0] * 1000.0 - 0.05
    assert bb.min.Y >= box[1] * 1000.0 - 0.05
    assert bb.min.Z >= box[2] * 1000.0 - 0.05
    assert bb.max.X <= box[3] * 1000.0 + 0.05
    assert bb.max.Y <= box[4] * 1000.0 + 0.05
    assert bb.max.Z <= box[5] * 1000.0 + 0.05
    assert placed[0].volume > 0

    ifc_path = tmp_path / "fixture.ifc"
    model = write_ifc(load_yaml_ifc(path), ifc_path)
    assert validation_errors(model) == []
    restored, skipped = read_ifc(ifc_path)
    assert skipped == {}
    _same(load_yaml_ifc(path), restored)
    assert len(model.by_type("IfcSystemFurnitureElement")) == 1


def test_ref_direction_turns_width_in_plan():
    doc = _shell(
        systemFurniture=[
            {
                "id": "SF-turned",
                "Name": "Turned",
                "PredefinedType": "USERDEFINED",
                "ObjectType": "BaseCabinet",
                "Origin": [0.0, 0.0],
                "Width": 2.0,
                "Depth": 1.0,
                "Height": 0.5,
                "RefDirection": [0.0, 1.0],
            }
        ]
    )
    solid = _furnishing_parts(doc)[0]
    bb = solid.bounding_box()
    # Width along +Y, depth along −X, inset by half the mesh gap.
    half = MESH_GAP_MM / 2.0
    assert bb.min.X == pytest.approx(-1000.0 + half, abs=0.05)
    assert bb.max.X == pytest.approx(-half, abs=0.05)
    assert bb.min.Y == pytest.approx(half, abs=0.05)
    assert bb.max.Y == pytest.approx(2000.0 - half, abs=0.05)
    assert bb.min.Z == pytest.approx(half, abs=0.05)
    assert bb.max.Z == pytest.approx(500.0 - half, abs=0.05)


def test_userdefined_without_object_type_is_rejected():
    doc = _one_cabinet()
    doc["systemFurniture"][0].pop("ObjectType")
    with pytest.raises(ValueError, match="ObjectType"):
        build_ifc(doc)


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


def test_every_placed_solid_fills_its_yaml_world_box(ground_floor_model):
    """Every simple furnishing solid fills the box implied by its YAML record, not a copied table."""
    import kitchen_cabinet as kc

    shape, _meta = ground_floor_model
    monoblock_bays = {bay.id for run in kc.runs(load_furnishings()) for bay in run.bays}
    placed = {}
    for child in shape.children:
        fid = getattr(child, "furnishing_id", None)
        if fid:
            placed.setdefault(fid, []).append(child)
    half = MESH_GAP_MM / 2.0
    records = furnishing_records()
    for record in records:
        if record["id"] in monoblock_bays:
            continue
        if record["id"] not in placed:
            continue
        if not all(key in record for key in ("Origin", "Width", "Depth", "Height")):
            continue
        x0, y0, z0, x1, y1, z1 = _world_box(record)
        bb = placed[record["id"]][0].bounding_box()
        for extra in placed[record["id"]][1:]:
            bb = bb.add(extra.bounding_box())
        # Some solids are inset by the mesh gap; others fill the YAML box flush.
        def _edge(got, inset, flush):
            assert got == pytest.approx(inset, abs=0.2) or got == pytest.approx(flush, abs=0.2), record["id"]

        _edge(bb.min.X, x0 * 1000.0 + half, x0 * 1000.0)
        _edge(bb.max.X, x1 * 1000.0 - half, x1 * 1000.0)
        _edge(bb.min.Y, y0 * 1000.0 + half, y0 * 1000.0)
        _edge(bb.max.Y, y1 * 1000.0 - half, y1 * 1000.0)
        _edge(bb.min.Z, z0 * 1000.0 + half, z0 * 1000.0)
        _edge(bb.max.Z, z1 * 1000.0 - half, z1 * 1000.0)
        assert placed[record["id"]][0].volume > 0

    # Full-depth bases stay out of the piers.
    full_depth = ("SF-DN", "SF-TC", "SF-DH")
    union = {}
    for item in full_depth:
        children = placed.get(item)
        if not children:
            continue
        boxes = [c.bounding_box() for c in children]
        union[item] = (
            min(b.min.X for b in boxes), min(b.min.Y for b in boxes),
            max(b.max.X for b in boxes), max(b.max.Y for b in boxes),
        )
    for pier in ROOM_PIERS_M:
        px0, px1, py0, py1 = (value * 1000.0 for value in pier)
        for item, (x0, y0, x1, y1) in union.items():
            overlaps_x = x0 < px1 - 0.2 and x1 > px0 + 0.2
            overlaps_y = y0 < py1 - 0.2 and y1 > py0 + 0.2
            assert not (overlaps_x and overlaps_y), item

    # Chairs sit on the table's long edges; the child's chair is at the north end.
    by_id = {row["id"]: row for row in records}
    table = _world_box(by_id["FN-GATTA"])
    for cid in ("FN-CHW1", "FN-CHW2", "FN-CHW3"):
        row = by_id[cid]
        assert row["Origin"][0] + row["Width"] == pytest.approx(table[0], abs=1e-6)
    for cid in ("FN-CHE1", "FN-CHE2", "FN-CHE3"):
        assert by_id[cid]["Origin"][0] == pytest.approx(table[3], abs=1e-6)
    child = by_id["FN-CHN"]
    assert child["Origin"][1] == pytest.approx(table[4], abs=1e-6)






def test_kitchen_scene_is_the_whole_kitchen_from_the_sofa():
    scene = next(item for item in scenes() if item["id"] == "living-kitchen")
    assert "projection" not in scene
    assert scene["camera"]["up"] == [0.0, 1.0, 0.0]




def test_pier_slats_are_vertical_oak_battens():
    # Petr, 2026-11-20: vertical oak slats on the dining piers' fronts.
    from living_geometry import OAK_TYPES, living_detail

    doc = load_furnishings()
    slats = {e["id"]: e for e in doc["coverings"] if e.get("ObjectType") == "SlatCladding"}
    assert set(slats) == {"CV-SLAT-W052", "CV-SLAT-W053"}
    assert "SlatCladding" in OAK_TYPES
    assert not [e for e in doc["coverings"] if e["id"] in ("CV-BS-P052", "CV-BS-P053")]
    for e in slats.values():
        # From worktop to the ceiling line (the invariants in test_design_decisions).
        assert e["Elevation"] + e["Height"] == pytest.approx(2.45)
        detail = living_detail(e, e["Width"] * 1000.0, e["Depth"] * 1000.0, e["Height"] * 1000.0, 1.0)
        boxes = [s.bounding_box() for s in detail.solids()]
        backing, slat_boxes = boxes[0], boxes[1:]
        assert backing.size.X > slat_boxes[0].size.X
        assert len(slat_boxes) >= 2
        assert all(b.size.Z == pytest.approx(slat_boxes[0].size.Z, abs=0.5) for b in slat_boxes)
        gaps = [slat_boxes[i].min.X - slat_boxes[i-1].max.X for i in range(1, len(slat_boxes))]
        assert all(g == pytest.approx(gaps[0], abs=0.5) for g in gaps)
