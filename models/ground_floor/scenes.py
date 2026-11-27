"""Ground-floor viewer scenes, part groups, and the IFC index."""
from __future__ import annotations

from pathlib import Path

from blueprints.scenes import cad_mm_to_gltf_m
from bathroom_107 import scenes as bathroom_107_scenes
from bathroom_120 import (
    LABEL_DRAIN,
    LABEL_FLOOR,
    LABEL_GROUT,
    LABEL_WALL,
    scenes as bathroom_scenes,
)
from bedroom_111 import scenes as bedroom_111_scenes
import furnishing_links
import kitchen_cabinet
import kitchen_ifc
import soffit

from .constants import (
    FURNISHINGS_PATH,
    LABEL_APPLIANCE,
    LABEL_CABINET,
    LABEL_DOOR,
    LABEL_FURNITURE,
    LABEL_GLAZING,
    LABEL_GRIDFINITY,
    LABEL_HOB,
    LABEL_LIGHT,
    LABEL_MASONRY,
    LABEL_OAK,
    LABEL_RUG,
    LABEL_SINK,
    LABEL_UPHOLSTERY,
    LABEL_WORKTOP,
    SOURCE_PATH,
)
from .paint import _mm


# Ground-floor scenes: one per room that has its own detailed model.
# Petr, 2026-11-19 (Cody chat): "For the room specific scenes we have, please
# keep one per room (one for bedroom, one for kitchen, one for each bathroom),
# make reasonable picks and don't work on editing existing ones. Nuke all the
# rest, they are useless." The picks and why: docs/design/ground-floor.md,
# "Scenes". The standalone bathroom models keep all their drawings.
KITCHEN_SCENE = "living-kitchen"
BATHROOM_120_SCENE = "bathroom-plan"
BATHROOM_107_SCENE = "bath107-plan"


def _kitchen_scene() -> dict:
    """Standing by the sofa, looking west at the whole kitchen; glass on the left.

    Same glance as the owner's SketchUp view. Eye and target are storey metres.
    """
    eye = (28.9, 10.7, 1.55)
    target = (21.2, 14.2, 1.05)
    return {
        "id": KITCHEN_SCENE,
        "hFovDeg": 52,
        "title": {"en": "Living room toward the kitchen", "cs": "Obývák ke kuchyni"},
        "project": "RD Šíma 1.NP",
        "camera": {
            "target": cad_mm_to_gltf_m(tuple(_mm(v) for v in target)),
            "position": cad_mm_to_gltf_m(tuple(_mm(v) for v in eye)),
            "up": [0.0, 1.0, 0.0],
        },
    }


def _pick(found: list[dict], scene_id: str) -> dict:
    return next(scene for scene in found if scene["id"] == scene_id)


def scenes() -> list[dict]:
    return [
        _kitchen_scene(),
        _pick(bathroom_scenes(), BATHROOM_120_SCENE),
        _pick(bathroom_107_scenes(), BATHROOM_107_SCENE),
        *bedroom_111_scenes(),
    ]


def part_groups() -> list[dict]:
    return [
        # Enclosure: walls, windows and doors toggle together; locked by
        # default so scenes and inspector hide-others leave
        # them standing (Petr, 2026-11-19: "add an 'enclosure' group ...
        # that includes walls, windows, doors"; "my usecase would be
        # locking enclosure group and leaving it so forever").
        # docs/viewer/VisibilityState.md
        {
            "id": "enclosure",
            "locked": True,
            "children": [LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR],
        },
        {
            "id": "interior",
            "children": [
                LABEL_CABINET,
                LABEL_GRIDFINITY,
                LABEL_WORKTOP,
                LABEL_OAK,
                LABEL_APPLIANCE,
                LABEL_HOB,
                LABEL_SINK,
                LABEL_UPHOLSTERY,
                LABEL_FURNITURE,
                LABEL_RUG,
                LABEL_LIGHT,
            ],
        },
        # The soffit over the north cabinets (2026-11-20), its own toggle.
        {
            "id": "soffit",
            "children": [soffit.LABEL_FACE, soffit.LABEL_UNDERSIDE],
        },
        {
            "id": "bathroom",
            "children": [
                LABEL_FLOOR,
                LABEL_WALL,
                LABEL_GROUT,
                LABEL_DRAIN,
                "fixture",
                "prewall",
                "screen",
                "profile",
                "vanity",
            ],
        },
        {
            "id": "electrical",
            "children": [
                "switch",
                "sensor",
                "outlet",
                "actuator",
            ],
        },
    ]


def ifc_index() -> dict:
    """Spatial index for the viewer inspector. One row per yaml-ifc product."""
    from bathroom_107 import SOURCE_PATH as BATH_107
    from bathroom_120 import SOURCE_PATH as BATH_120
    from bedroom_111 import SOURCE_PATH as BEDROOM
    from blueprints.fixture_overrides import load_fixture_document
    from blueprints.ifc_index import index_documents

    docs = []
    furnishings_doc = None
    from electrical_rooms import share_kitchen_runs, shared_kitchen_runs, source_paths as electrical_room_paths

    for path in (SOURCE_PATH, FURNISHINGS_PATH, BEDROOM, BATH_120, BATH_107, *electrical_room_paths()):
        if path.is_file():
            # Edit-mode overrides touch only the fixture ids they name, so
            # every document goes through them (docs/electrical/EditMode.md).
            doc = load_fixture_document(path)
            if path == FURNISHINGS_PATH:
                # Linked sizes (Pset_Links, models/furnishing_links.py).
                doc = furnishing_links.resolve(doc)
                furnishings_doc = doc
            docs.append(doc)
    # Reuse the kitchen layout from build() when it already ran in this
    # process (avoids a second kitchen_cabinet.runs inside kitchen_ifc.apply).
    runs = shared_kitchen_runs()
    if runs is None and furnishings_doc is not None:
        runs = kitchen_cabinet.runs(furnishings_doc)
        share_kitchen_runs(runs)

    def transform(model, doc):
        if doc is furnishings_doc and runs is not None:
            return kitchen_ifc.apply(model, doc, runs)
        return kitchen_ifc.apply(model, doc)

    return index_documents(docs, transform=transform)
