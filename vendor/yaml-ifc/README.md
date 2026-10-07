# yaml-ifc

Vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at commit `34e1597`.

The upstream repository is private, so this tree is copied into Blueprints instead of a git dependency. The pin is `34e1597` (furnishings: spaces, boxes, and the type objects derived from them). Replace the whole `yaml_ifc/` package from that commit when updating it. Do not edit it locally.

`models/ground_floor.py` extrudes `yaml_ifc.footprints` for the walls. That function returns the trimmed plan polygons IfcOpenShell builds for `IfcRelConnectsPathElements`. Corner geometry stays in this package. Furnishing boxes are the converter's `IfcExtrudedAreaSolid`s (`write_ifc` / `build_ifc`), not a second reading of `Width`, `Depth`, and `Height`.

`inputs/ground_floor/ground-floor.yaml` is `samples/ground-floor.yaml` from this commit. It is the same walls file as the previous pin `4ad102f`.

License: MIT (`LICENSE`).
