"""Petr's fixture corrections from the viewer edit mode, applied at export.

The viewer's edit mode (``src/blueprints/viewer/editMode.js``) exports a
JSON patch. A bot merges it into ``inputs/ground_floor/fixture_overrides.json``
with::

    python -m blueprints.fixture_overrides merge patch.json

and every room device document is loaded through :func:`load_fixture_document`,
so the next export moves, changes, adds or deletes those fixtures in the
IFC index, the GLB, and the 2D plans. The whole round trip, the file format,
and why it is a layer over the YAML: ``docs/electrical/EditMode.md``.

Format (version 1), keyed by the YAML ``id``::

    {
      "version": 1,
      "fixtures": {
        "C10-V": {"Origin": [0.45, 8.3], "Elevation": 1.3145},
        "C7-S": {"Move": [0.0, 0.05, 0.0]},
        "C12-S": {"CableNumber": 12, "CableSpec": "CYKY 4x2.5"},
        "SOCK-N2": {"delete": true},
        "C6-V-1": {"add": {"list": "switchingDevices", "id": "C6-V-1", ...}}
      }
    }
"""

from __future__ import annotations

import copy
import json
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
OVERRIDES_PATH = REPO_ROOT / "inputs" / "ground_floor" / "fixture_overrides.json"
PSET = "Pset_YamlIfc"

# yaml-ifc lists that hold fixtures (furnishing lights plus the electrical lists).
DEVICE_LISTS = ("lightFixtures", "switchingDevices", "sensors", "outlets", "actuators")
# Keys set on the element itself; anything else in an entry is a Pset_YamlIfc property.
ELEMENT_KEYS = {
    "Name",
    "Description",
    "ObjectType",
    "PredefinedType",
    "Origin",
    "Elevation",
    "RefDirection",
    "Width",
    "Depth",
    "Height",
    "Wattage",
}
CONTROL_KEYS = {"Move", "delete", "add", "list"}
# Strips are drawn from a path in Pset_YamlIfc: the bedroom's X0…Y1 + Z
# (models/bedroom_111.py), or Path in the other rooms (models/electrical_rooms.py).
PATH_X = ("X0", "XC", "X1")
PATH_Y = ("Y0", "YC", "Y1")
# A fixture without its own placement (the under-bed strip, cut from the bed
# outline) carries a Move as these properties; its model code adds them.
OFFSET_KEYS = ("OffsetX", "OffsetY", "OffsetZ")


def load_overrides(path: Path | None = None) -> dict[str, Any]:
    source = path or OVERRIDES_PATH
    if not source.is_file():
        return {"version": 1, "fixtures": {}}
    data = json.loads(source.read_text(encoding="utf-8"))
    if data.get("version") != 1:
        raise ValueError(f"{source}: unsupported fixture overrides version {data.get('version')!r}")
    fixtures = data.get("fixtures") or {}
    if not isinstance(fixtures, dict):
        raise ValueError(f"{source}: 'fixtures' must be an object keyed by YAML id")
    return {"version": 1, "fixtures": fixtures}


def _pset(element: dict) -> dict:
    groups = element.setdefault("PropertySets", [])
    for group in groups:
        if group.get("Name") == PSET:
            group.setdefault("Properties", {})
            return group["Properties"]
    group = {"Name": PSET, "Properties": {}}
    groups.append(group)
    return group["Properties"]


def _round(value: float) -> float:
    return round(float(value), 6)


def _shift_path(text: str, dx: float, dy: float, dz: float) -> str:
    """Shift a room strip ``Path`` (``x,y,z;x,y,z`` points, runs split by ``|``)."""
    runs = []
    for run in text.split("|"):
        points = []
        for point in run.split(";"):
            point = point.strip()
            if not point:
                continue
            x, y, z = (float(value) for value in point.split(","))
            points.append(f"{_round(x + dx):.3f},{_round(y + dy):.3f},{_round(z + dz):.3f}")
        runs.append(";".join(points))
    return " | ".join(runs)


def _move(element: dict, move: list[float]) -> None:
    dx, dy, dz = (float(v) for v in (list(move) + [0.0, 0.0, 0.0])[:3])
    props = _pset(element)
    if element.get("Origin") is not None:
        x, y = element["Origin"][:2]
        element["Origin"] = [_round(x + dx), _round(y + dy)]
        element["Elevation"] = _round(float(element.get("Elevation") or 0.0) + dz)
    elif props.get("Path"):
        props["Path"] = _shift_path(str(props["Path"]), dx, dy, dz)
    elif all(key in props for key in (*PATH_X, *PATH_Y)):
        for key in PATH_X:
            props[key] = _round(float(props[key]) + dx)
        for key in PATH_Y:
            props[key] = _round(float(props[key]) + dy)
        if "Z" in props:
            props["Z"] = _round(float(props["Z"]) + dz)
    else:
        for key, delta in zip(OFFSET_KEYS, (dx, dy, dz)):
            props[key] = _round(float(props.get(key) or 0.0) + delta)
    if not props:
        element["PropertySets"] = [g for g in element["PropertySets"] if g.get("Name") != PSET]


def _apply_entry(element: dict, entry: dict) -> None:
    for key, value in entry.items():
        if key in CONTROL_KEYS:
            continue
        if key in ELEMENT_KEYS:
            element[key] = value
        else:
            _pset(element)[key] = value
    if entry.get("Move") is not None:
        _move(element, entry["Move"])


def _space_ids(doc: dict) -> set[str]:
    return {str(space.get("id")) for space in doc.get("spaces") or []}


def apply_overrides(doc: dict, overrides: dict | None = None) -> dict:
    """A copy of ``doc`` with the overrides for its fixtures applied.

    Entries whose id is not in this document are ignored, so every document
    can go through here. An ``add`` lands in the document that defines its
    ``ContainedInStructure`` space.
    """
    if not doc:
        return doc
    data = overrides if overrides is not None else load_overrides()
    fixtures = data.get("fixtures") or {}
    if not fixtures:
        return doc
    out = copy.deepcopy(doc)
    moved_lists: list[tuple[str, dict]] = []
    for key in DEVICE_LISTS:
        kept = []
        for element in out.get(key) or []:
            entry = fixtures.get(str(element.get("id")))
            if entry is None or "add" in entry:
                kept.append(element)
                continue
            if entry.get("delete"):
                continue
            _apply_entry(element, entry)
            target = entry.get("list")
            if target and target != key:
                if target not in DEVICE_LISTS:
                    raise ValueError(f"{element.get('id')}: unknown list {target!r}")
                moved_lists.append((target, element))
                continue
            kept.append(element)
        if key in out:
            out[key] = kept
    for target, element in moved_lists:
        out.setdefault(target, []).append(element)
    spaces = _space_ids(out)
    existing = {str(e.get("id")) for key in DEVICE_LISTS for e in out.get(key) or []}
    for fixture_id, entry in fixtures.items():
        add = entry.get("add")
        if not add or entry.get("delete"):
            continue
        if str(add.get("ContainedInStructure")) not in spaces or fixture_id in existing:
            continue
        element = {k: copy.deepcopy(v) for k, v in add.items() if k != "list"}
        element["id"] = fixture_id
        target = add.get("list")
        if target not in DEVICE_LISTS:
            raise ValueError(f"{fixture_id}: add needs a list from {DEVICE_LISTS}")
        _apply_entry(element, {k: v for k, v in entry.items() if k != "add"})
        out.setdefault(target, []).append(element)
    return out


def load_fixture_document(path: Path, overrides: dict | None = None) -> dict:
    """Load a room device YAML and apply Petr's edit-mode overrides."""
    from yaml_ifc.yamlio import load as load_yaml_ifc

    return apply_overrides(load_yaml_ifc(path), overrides)


def merge(current: dict, patch: dict) -> dict:
    """Fold a viewer patch into the overrides file.

    The patch was made against the deployed model, which already has
    ``current`` applied. So a ``Move`` adds to a committed Move, while
    ``Origin``/``Elevation`` and schedule values replace. ``delete`` and
    ``add`` replace the whole entry; a later edit to an added fixture
    updates its ``add`` element.
    """
    if patch.get("version") != 1:
        raise ValueError(f"unsupported patch version {patch.get('version')!r}")
    out = {"version": 1, "fixtures": copy.deepcopy(current.get("fixtures") or {})}
    for fixture_id, entry in (patch.get("fixtures") or {}).items():
        old = out["fixtures"].get(fixture_id) or {}
        if entry.get("delete"):
            if "add" in old:
                out["fixtures"].pop(fixture_id, None)
            else:
                out["fixtures"][fixture_id] = {"delete": True}
            continue
        if "add" in entry:
            out["fixtures"][fixture_id] = copy.deepcopy(entry)
            continue
        if "add" in old:
            add = old["add"]
            if entry.get("Move") is not None and add.get("Origin") is not None:
                dx, dy, dz = (list(entry["Move"]) + [0, 0, 0])[:3]
                add["Origin"] = [_round(add["Origin"][0] + dx), _round(add["Origin"][1] + dy)]
                add["Elevation"] = _round(float(add.get("Elevation") or 0) + dz)
            for key, value in entry.items():
                if key == "Move":
                    continue
                if key in ELEMENT_KEYS:
                    add[key] = value
                else:
                    props = _pset(add)
                    props[key] = value
            continue
        new = {k: v for k, v in old.items() if k != "delete"}
        for key, value in entry.items():
            if key == "Move":
                prev = list(new.get("Move") or [0.0, 0.0, 0.0])
                new["Move"] = [_round(a + b) for a, b in zip(prev + [0.0] * 3, list(value) + [0.0] * 3)][:3]
            else:
                new[key] = value
        out["fixtures"][fixture_id] = new
    out["fixtures"] = dict(sorted(out["fixtures"].items()))
    return out


def write_overrides(data: dict, path: Path | None = None) -> Path:
    dest = path or OVERRIDES_PATH
    payload = {"version": 1, "fixtures": data.get("fixtures") or {}}
    dest.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return dest


def main(argv: list[str] | None = None) -> int:
    args = list(sys.argv[1:] if argv is None else argv)
    if len(args) != 2 or args[0] != "merge":
        print("usage: python -m blueprints.fixture_overrides merge <patch.json>", file=sys.stderr)
        return 2
    patch = json.loads(Path(args[1]).read_text(encoding="utf-8"))
    merged = merge(load_overrides(), patch)
    dest = write_overrides(merged)
    print(f"{dest.relative_to(REPO_ROOT)}: {len(merged['fixtures'])} fixtures")
    for fixture_id in sorted((patch.get("fixtures") or {})):
        print(f"  {fixture_id}: {json.dumps(merged['fixtures'].get(fixture_id), ensure_ascii=False)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
