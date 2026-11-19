"""Every bathroom solid maps to a yaml-ifc product contained in its IfcSpace.

Petr, 2026-11-19 (Cody chat): "make sure bathrooms are modeled well in ifc
(no geometry changes, just annotate well with ifc so they participate in
hiding etc.)". docs/design/bathrooms.md, "IFC elements".
"""

from pathlib import Path
import json
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import bathroom_107  # noqa: E402
import bathroom_120  # noqa: E402

ROOMS = (
    (bathroom_120, "SP-1.20"),
    (bathroom_107, "SP-1.07"),
)
SHARED = {"PRJ", "SITE", "BLD", "STOREY-1NP"}


def _products(doc: dict) -> dict:
    found = {}
    for key, value in doc.items():
        if isinstance(value, list):
            for row in value:
                if isinstance(row, dict) and "id" in row:
                    found[row["id"]] = row
    return found


@pytest.mark.parametrize("module,space", ROOMS)
def test_every_bathroom_solid_has_an_element_in_its_space(module, space):
    products = _products(module.load_document())
    for solid in module.parts():
        element_id = getattr(solid, "element_id", None)
        assert element_id, solid.label
        row = products[element_id]
        assert row.get("ContainedInStructure") == space, element_id


def test_bathroom_ids_are_unique_across_both_rooms():
    """The viewer keys meshes, and yaml-ifc keys GlobalIds, by yaml id."""
    ids_120 = set(_products(bathroom_120.load_document())) - SHARED - {"SP-1.20"}
    ids_107 = set(_products(bathroom_107.load_document())) - SHARED - {"SP-1.07"}
    assert not ids_120 & ids_107


def test_ground_floor_index_contains_the_bathroom_elements():
    index = json.loads((ROOT / "docs" / "models" / "ground_floor.ifc.json").read_text())
    elements = index["elements"]
    space_ids = {e["id"]: gid for gid, e in elements.items() if e["type"] == "IfcSpace"}
    by_id = {e["id"]: e for e in elements.values()}
    for module, space in ROOMS:
        for solid in module.parts():
            element = by_id[solid.element_id]
            assert element["containerId"] == space_ids[space], solid.element_id
