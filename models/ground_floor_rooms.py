"""Room outlines for ``ground_floor`` (blueprints.room_outlines).

Closing lines for the gaps the automatic closing (``CLOSE_RADIUS``, gaps up
to 0.6 m) leaves open. Each is a straight band in plan metres, drawn where
the wall line would continue across the passage. Coordinates are read off
the wall footprints of ``inputs/ground_floor/ground-floor.yaml``. Reasons
and a plot: docs/viewer/RoomIsolate.md.
"""

from __future__ import annotations

from pathlib import Path

import yaml

REPO = Path(__file__).resolve().parents[1]
INPUTS = REPO / "inputs" / "ground_floor"

CLOSURES = [
    {
        # W-015 (north wall of 1.20) stops at x 32.2 and W-016 (north wall
        # of 1.21) starts at x 32.975; W-057 between 1.20 and 1.21 ends at
        # the same line. Without this, 1.20, 1.21 and the hall 1.01 are one
        # region.
        "id": "1.01|1.20|1.21",
        "from": [32.2, 8.075],
        "to": [32.975, 8.075],
        "width": 0.25,
    },
    {
        # The passage from the corridor 1.17 into the garage 1.16: W-066
        # ends at y 10.05 and W-065 starts at y 11.6 on the same line
        # (x 37.85-38.1). Without this, 1.17 and 1.16 are one region.
        "id": "1.16|1.17",
        "from": [37.975, 10.0],
        "to": [37.975, 11.3],
        "width": 0.25,
    },
]


def outlines(product_paths) -> dict:
    """``room_outlines`` result for the ground floor (rooms, unnamed, missing)."""
    from blueprints.room_outlines import room_outlines

    walls_doc = yaml.safe_load((INPUTS / "ground-floor.yaml").read_text(encoding="utf-8"))
    docs = []
    spaces: dict[str, str] = {}
    for path in product_paths:
        path = Path(path)
        if not path.is_file():
            continue
        doc = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        docs.append(doc)
        for space in doc.get("spaces") or []:
            if isinstance(space, dict) and space.get("id"):
                spaces.setdefault(space["id"], str(space.get("Name") or space["id"]))
    return room_outlines(walls_doc, docs, spaces, CLOSURES)
