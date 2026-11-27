"""Load the ground-floor walls and furnishings YAML documents."""
from __future__ import annotations

from pathlib import Path

from yaml_ifc.yamlio import load as load_yaml_ifc

import furnishing_links

from .constants import FURNISHING_LABELS, FURNISHING_LISTS, FURNISHINGS_PATH, SOURCE_PATH


def load_document(path: Path | None = None) -> dict:
    return load_yaml_ifc(path or SOURCE_PATH)


def load_furnishings(path: Path | None = None) -> dict:
    """Furnishings document. Missing file means the walls-only model."""
    source = path or FURNISHINGS_PATH
    if not source.is_file():
        return {}
    # Pset_Links: placements and sizes derived from other elements (2026-11-20 c).
    return furnishing_links.resolve(load_yaml_ifc(source))


def furnishing_records(doc: dict | None = None) -> list[dict]:
    """Each YAML element plus its list name. Spaces are not included."""
    furn = doc if doc is not None else load_furnishings()
    records = []
    for key in FURNISHING_LISTS:
        for element in furn.get(key) or []:
            records.append({**element, "list": key, "label": FURNISHING_LABELS[key]})
    return records
