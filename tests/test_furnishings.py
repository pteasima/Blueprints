"""Room 1.02 furnishings: the kitchen boxes, the living room, and the converter."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from ground_floor import (  # noqa: E402
    FURNISHINGS_PATH,
    FURNISHING_LISTS,
    FURNITURE_VIEWS,
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
    SOURCE_COMMIT,
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


# id, list, type field, origin, ref or None, width, depth, height, hinge or None, elevation or None.
# Type field is ObjectType for a cabinet and PredefinedType for an appliance or the sink.
# File order within each list. sanitaryTerminals sits between the cabinets and the appliances.
KITCHEN = (
    ("SF-T1", "systemFurniture", "TallCabinet", [18.8, 15.0], None, 0.75, 0.6, 2.45, "L", None),
    ("SF-T2", "systemFurniture", "TallCabinet", [20.458, 15.0], None, 0.6, 0.6, 2.45, "R", None),
    ("SF-T3", "systemFurniture", "TallCabinet", [21.058, 15.0], None, 0.6, 0.6, 2.45, None, None),
    ("SF-T4", "systemFurniture", "TallCabinet", [21.658, 15.0], None, 0.5, 0.6, 2.45, None, None),
    ("SF-I500a", "systemFurniture", "BaseCabinet", [20.568, 13.8], [0.0, -1.0], 0.5, 0.586, 0.93, None, None),
    ("SF-I600a", "systemFurniture", "BaseCabinet", [20.568, 13.3], [0.0, -1.0], 0.607, 0.586, 0.93, None, None),
    ("SF-I500b", "systemFurniture", "BaseCabinet", [20.568, 12.693], [0.0, -1.0], 0.481, 0.586, 0.93, None, None),
    ("SF-I600b", "systemFurniture", "BaseCabinet", [20.568, 12.212], [0.0, -1.0], 0.607, 0.586, 0.93, None, None),
    ("SF-I300", "systemFurniture", "BaseCabinet", [20.568, 11.605], [0.0, -1.0], 0.305, 0.586, 0.93, None, None),
    ("SF-E600a", "systemFurniture", "BaseCabinet", [21.754, 13.2], [0.0, 1.0], 0.6, 0.6, 0.93, None, None),
    ("SF-E600b", "systemFurniture", "BaseCabinet", [21.754, 12.6], [0.0, 1.0], 0.6, 0.6, 0.93, None, None),
    ("SF-E600c", "systemFurniture", "BaseCabinet", [21.754, 12.0], [0.0, 1.0], 0.6, 0.6, 0.93, None, None),
    ("SF-E700", "systemFurniture", "BaseCabinet", [21.754, 11.3], [0.0, 1.0], 0.7, 0.6, 0.93, None, None),
    ("SF-A250", "systemFurniture", "BaseCabinet", [19.4, 13.0], [0.0, 1.0], 0.25, 0.6, 0.93, None, None),
    ("SF-AH850", "systemFurniture", "WallCabinet", [19.15, 13.0], [0.0, 1.0], 0.85, 0.35, 0.9, None, 1.56),
    ("SF-B800", "systemFurniture", "BaseCabinet", [19.4, 12.2], [0.0, 1.0], 0.8, 0.6, 0.93, None, None),
    ("SF-BH800", "systemFurniture", "WallCabinet", [19.15, 12.2], [0.0, 1.0], 0.8, 0.35, 0.9, None, 1.56),
    ("SF-C850", "systemFurniture", "BaseCabinet", [19.4, 11.35], [0.0, 1.0], 0.85, 0.6, 0.93, None, None),
    ("SF-CH850", "systemFurniture", "WallCabinet", [19.15, 11.35], [0.0, 1.0], 0.85, 0.35, 0.9, None, 1.56),
    ("SN-RS15", "sanitaryTerminals", "SINK", [19.32, 12.225], [0.0, 1.0], 0.75, 0.44, 0.2, None, 0.71),
    ("EA-WQ9I", "electricAppliances", "FRIDGE_FREEZER", [19.55, 14.884], None, 0.908, 0.716, 1.876, None, None),
    ("EA-SBD6ECX", "electricAppliances", "DISHWASHER", [19.35, 13.251], [0.0, 1.0], 0.598, 0.55, 0.865, None, None),
)


def _check_record(record, expected):
    element_id, list_key, kind, origin, ref, width, depth, height, hinge, elevation = expected
    assert record["id"] == element_id
    assert record["list"] == list_key
    assert record["ContainedInStructure"] == ROOM_ID
    assert record["Origin"] == origin
    assert record.get("RefDirection") == ref
    assert record["Width"] == width
    assert record["Depth"] == depth
    assert record["Height"] == height
    if elevation is None:
        assert "Elevation" not in record
    else:
        assert record["Elevation"] == elevation
    if list_key == "systemFurniture":
        assert record["label"] == LABEL_CABINET
        assert record["ObjectType"] == kind
        assert record["PredefinedType"] == "USERDEFINED"
    elif list_key == "sanitaryTerminals":
        assert record["label"] == "sink"
        assert record["PredefinedType"] == kind
        assert "ObjectType" not in record
    elif list_key == "electricAppliances":
        assert record["label"] == "appliance"
        assert record["PredefinedType"] == kind
        assert "ObjectType" not in record
    door = None
    for pset in record.get("PropertySets") or []:
        if pset["Name"] == "Pset_CabinetDoor":
            door = pset["Properties"]
    if hinge is None:
        assert door is None
    else:
        assert door["HingeSide"] == hinge
        assert door["DoorWidth"] == 0.6
    assert "HingeSide" not in record


def test_furnishings_file_has_the_space_and_the_kitchen_boxes():
    doc = load_furnishings()
    assert FURNISHINGS_PATH.is_file()
    assert SOURCE_COMMIT == "0f96c26"
    assert set(FURNISHING_LISTS) == set(FURNISHING_KEYS)
    assert doc["walls"] == []
    spaces = doc["spaces"]
    assert [space["id"] for space in spaces] == [ROOM_ID]
    space = spaces[0]
    assert space["PredefinedType"] == "INTERNAL"
    assert space["Name"] == "1.02 Obývák"
    for field in ("Origin", "Width", "Depth", "Height", "ObjectType"):
        assert field not in space
    for key in FURNISHING_KEYS:
        if key not in (
            "systemFurniture",
            "electricAppliances",
            "sanitaryTerminals",
            "furniture",
            "coverings",
        ):
            assert key not in doc
    records = furnishing_records(doc)
    by_id = {item["id"]: item for item in records}
    assert [item["id"] for item in records if item["id"] in by_id and item["id"] in {row[0] for row in KITCHEN}] == [
        row[0] for row in KITCHEN
    ]
    for expected in KITCHEN:
        _check_record(by_id[expected[0]], expected)


def test_build_extrudes_walls_and_the_kitchen_boxes():
    shape, meta = build()
    records = furnishing_records()
    assert meta["derived"]["furnishings"] == len(records)
    assert meta["derived"]["furnishings_commit"] == "0f96c26"
    placed = [child for child in shape.children if getattr(child, "furnishing_id", None)]
    kitchen_ids = [row[0] for row in KITCHEN]
    order = dict.fromkeys(child.furnishing_id for child in placed if child.furnishing_id in set(kitchen_ids))
    assert list(order) == kitchen_ids
    assert {child.furnishing_id for child in placed} == {item["id"] for item in records}
    labels = {child.label for child in shape.children}
    assert {LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR, LABEL_CABINET, "appliance", "sink"} <= labels
    assert {"upholstery", "oak", "rug"} <= labels
    # Bedroom 1.11 adds light boxes on the same build.
    assert "light" in labels
    # World plan of the placed solids, before the 1 mm inset. z0 is the base, z1 the top.
    expected_mm = {
        "SF-T1": (18800, 19550, 15000, 15600, 0, 2450),
        "SF-T2": (20458, 21058, 15000, 15600, 0, 2450),
        "SF-T3": (21058, 21658, 15000, 15600, 0, 2450),
        "SF-T4": (21658, 22158, 15000, 15600, 0, 2450),
        "SF-I500a": (20568, 21154, 13300, 13800, 0, 930),
        "SF-I600a": (20568, 21154, 12693, 13300, 0, 930),
        "SF-I500b": (20568, 21154, 12212, 12693, 0, 930),
        "SF-I600b": (20568, 21154, 11605, 12212, 0, 930),
        "SF-I300": (20568, 21154, 11300, 11605, 0, 930),
        "SF-E600a": (21154, 21754, 13200, 13800, 0, 930),
        "SF-E600b": (21154, 21754, 12600, 13200, 0, 930),
        "SF-E600c": (21154, 21754, 12000, 12600, 0, 930),
        "SF-E700": (21154, 21754, 11300, 12000, 0, 930),
        "SF-A250": (18800, 19400, 13000, 13250, 0, 930),
        "SF-AH850": (18800, 19150, 13000, 13850, 1560, 2460),
        "SF-B800": (18800, 19400, 12200, 13000, 0, 930),
        "SF-BH800": (18800, 19150, 12200, 13000, 1560, 2460),
        "SF-C850": (18800, 19400, 11350, 12200, 0, 930),
        "SF-CH850": (18800, 19150, 11350, 12200, 1560, 2460),
        "SN-RS15": (18880, 19320, 12225, 12975, 730, 930),
        "EA-WQ9I": (19550, 20458, 14884, 15600, 0, 1876),
        "EA-SBD6ECX": (18800, 19350, 13251, 13849, 0, 865),
    }
    # A drawer cabinet is several solids (carcass, drawers); check their union.
    by_element = {}
    for child in placed:
        by_element.setdefault(child.furnishing_id, []).append(child)
    for furnishing_id, children in by_element.items():
        bb = children[0].bounding_box()
        for extra in children[1:]:
            bb = bb.add(extra.bounding_box())
        if furnishing_id in expected_mm:
            x0, x1, y0, y1, z0, z1 = expected_mm[furnishing_id]
            assert bb.min.X == pytest.approx(x0 + 0.5, abs=0.1)
            assert bb.max.X == pytest.approx(x1 - 0.5, abs=0.1)
            assert bb.min.Y == pytest.approx(y0 + 0.5, abs=0.1)
            assert bb.max.Y == pytest.approx(y1 - 0.5, abs=0.1)
            assert bb.min.Z == pytest.approx(z0 + 0.5, abs=0.1)
            assert bb.max.Z == pytest.approx(z1 - 0.5, abs=0.1)
        assert ROOM_X0 * 1000 - 1 <= bb.min.X and bb.max.X <= ROOM_X1 * 1000 + 1
        assert ROOM_Y0 * 1000 - 1 <= bb.min.Y and bb.max.Y <= ROOM_Y1 * 1000 + 1


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


SOFA_IDS = (
    "FN-S4A",
    "FN-S4B",
    "FN-S3",
    "FN-S2A",
    "FN-S2B",
    "FN-BN1",
    "FN-BN2",
    "FN-BN3",
    "FN-BW1",
    "FN-BW2",
    "FN-BW3",
    "FN-ARME",
    "FN-ARMS",
)


def test_living_room_boxes_follow_plan_v3():
    """Every new solid fills its YAML box. The sofa outline is the plan box."""
    shape, _meta = build()
    placed = {
        child.furnishing_id: child
        for child in shape.children
        if getattr(child, "furnishing_id", None)
    }
    half = MESH_GAP_MM / 2.0
    kitchen = {row[0] for row in KITCHEN}
    for record in furnishing_records():
        if record["id"] in kitchen:
            continue
        x0, y0, z0, x1, y1, z1 = _world_box(record)
        box = placed[record["id"]].bounding_box()
        assert box.min.X == pytest.approx(x0 * 1000.0 + half, abs=0.2)
        assert box.max.X == pytest.approx(x1 * 1000.0 - half, abs=0.2)
        assert box.min.Y == pytest.approx(y0 * 1000.0 + half, abs=0.2)
        assert box.max.Y == pytest.approx(y1 * 1000.0 - half, abs=0.2)
        assert box.min.Z == pytest.approx(z0 * 1000.0 + half, abs=0.2)
        assert box.max.Z == pytest.approx(z1 * 1000.0 - half, abs=0.2)
        assert placed[record["id"]].volume > 0

    def union(ids):
        boxes = [placed[item].bounding_box() for item in ids]
        return (
            min(box.min.X for box in boxes),
            min(box.min.Y for box in boxes),
            max(box.max.X for box in boxes),
            max(box.max.Y for box in boxes),
        )

    sx0, sy0, sx1, sy1 = union(SOFA_IDS)
    assert sx0 == pytest.approx(25520.0 + half, abs=0.2)
    assert sy0 == pytest.approx(11370.0 + half, abs=0.2)
    assert sx1 == pytest.approx(29900.0 - half, abs=0.2)
    assert sy1 == pytest.approx(15150.0 - half, abs=0.2)
    assert (sx1 - sx0) == pytest.approx(4380.0 - MESH_GAP_MM, abs=0.2)
    assert (sy1 - sy0) == pytest.approx(3780.0 - MESH_GAP_MM, abs=0.2)

    by_id = {row["id"]: row for row in furnishing_records()}
    chaise = _world_box(by_id["FN-S3"])
    assert chaise[3] - chaise[0] == pytest.approx(1.46, abs=1e-6)
    assert chaise[4] - chaise[1] == pytest.approx(0.86, abs=1e-6)
    assert chaise[1] == pytest.approx(13.99, abs=1e-6)
    chaise_back = _world_box(by_id["FN-BN3"])
    assert (chaise_back[0], chaise_back[3]) == pytest.approx((chaise[0], chaise[3]), abs=1e-6)
    south_back = _world_box(by_id["FN-BW3"])
    south_seat = _world_box(by_id["FN-S4B"])
    assert (south_back[1], south_back[4]) == pytest.approx((south_seat[1], south_seat[4]), abs=1e-6)
    east_arm = _world_box(by_id["FN-ARME"])
    assert east_arm[4] == pytest.approx(15.15, abs=1e-6)
    assert east_arm[1] == pytest.approx(14.29, abs=1e-6)
    assert east_arm[4] - east_arm[1] == pytest.approx(0.86, abs=1e-6)
    assert east_arm[5] - east_arm[2] == pytest.approx(0.66, abs=1e-6)
    south_arm = _world_box(by_id["FN-ARMS"])
    assert south_arm[0] == pytest.approx(25.52, abs=1e-6)
    assert south_arm[3] == pytest.approx(26.38, abs=1e-6)
    assert south_arm[3] - south_arm[0] == pytest.approx(0.86, abs=1e-6)
    assert south_arm[5] - south_arm[2] == pytest.approx(0.66, abs=1e-6)

    ids = {row["id"] for row in furnishing_records()}
    assert "FN-S700" not in ids
    tv = _world_box(next(row for row in furnishing_records() if row["id"] == "EA-TV"))
    assert (tv[1] + tv[4]) / 2.0 == pytest.approx(12.700, abs=1e-6)
    assert tv[4] - tv[1] == pytest.approx(2.23, abs=1e-6)
    assert tv[5] - tv[2] == pytest.approx(1.277, abs=1e-6)

    table = _world_box(next(row for row in furnishing_records() if row["id"] == "FN-GATTA"))
    assert table[0] - 21.754 == pytest.approx(1.333, abs=1e-6)
    assert 25.52 - table[3] == pytest.approx(1.333, abs=1e-6)
    assert table[5] - table[2] == pytest.approx(0.76, abs=1e-6)

    # Full-depth bases stay out of the piers. Fillers stop on the pier face.
    full_depth = ("SF-DN", "SF-DN70", "SF-TC", "SF-DH")
    for pier in ROOM_PIERS_M:
        px0, px1, py0, py1 = (value * 1000.0 for value in pier)
        for item in full_depth:
            box = placed[item].bounding_box()
            overlaps_x = box.min.X < px1 - 0.2 and box.max.X > px0 + 0.2
            overlaps_y = box.min.Y < py1 - 0.2 and box.max.Y > py0 + 0.2
            assert not (overlaps_x and overlaps_y), item
    for item in ("SF-F052", "SF-F053"):
        assert placed[item].bounding_box().max.Y == pytest.approx(15350.0 - half, abs=0.2)

    chair = placed["FN-CHW1"]
    full = 540.0 * 480.0 * 860.0  # Kaplan Ancora (KitchenPlan.jpg card)
    assert chair.volume < full * 0.6
    by_id = {row["id"]: row for row in furnishing_records()}
    for cid in ("FN-CHW1", "FN-CHW2", "FN-CHW3", "FN-CHE1", "FN-CHE2", "FN-CHE3"):
        row = by_id[cid]
        assert (row["Width"], row["Depth"], row["Height"]) == (0.54, 0.48, 0.86)
    # Front edges on the table's long edges, centres 400 / 1200 / 2000 from its south end.
    assert by_id["FN-CHW1"]["Origin"][0] + 0.54 == pytest.approx(table[0], abs=1e-6)
    assert by_id["FN-CHE1"]["Origin"][0] == pytest.approx(table[3], abs=1e-6)
    assert [by_id[f"FN-CHW{i}"]["Origin"][1] + 0.24 - table[1] for i in (1, 2, 3)] == pytest.approx([0.4, 1.2, 2.0])
    # "v cele u kavovaru detska zidlicka, v cele u okna nic": one child's chair, north end.
    child = by_id["FN-CHN"]
    assert child["Origin"][1] == pytest.approx(table[4], abs=1e-6)
    assert placed["FN-GATTA"].volume < 1100.0 * 2400.0 * 760.0 * 0.5
    assert placed["FN-BK"].volume < 4180.0 * 250.0 * 1470.0 * 0.7

    specs = {item["id"]: item for item in scenes()}
    assert specs["living-plan"]["projection"] == "ortho"
    assert specs["living-plan"]["cuts"][0]["anchor"][2] == pytest.approx(2000.0)
    assert specs["living-terrace"]["title"]["cs"] == "Obývák od terasy"


def test_furniture_scenes_keep_the_existing_views():
    specs = {item["id"]: item for item in scenes()}
    assert {"overview", "opening", "posts", "plan"} <= set(specs)
    for spec in FURNITURE_VIEWS:
        scene = specs[spec["id"]]
        assert scene["title"]["cs"]
        assert "projection" not in scene
        assert scene["camera"]["up"] == [0.0, 1.0, 0.0]
        assert scene["hFovDeg"] == spec["hFovDeg"]
