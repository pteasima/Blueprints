# yaml-ifc

Vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at commit `0f96c26`.

The upstream repository is private, so this tree is copied into Blueprints instead of a git dependency. The pin is `0f96c26` (one-plane sloped floor, `TileLayout`, derived floor joints, and `IfcWasteTerminal` `FLOORTRAP`). Replace the whole `yaml_ifc/` package from that commit when updating it. Do not edit it locally.

`models/ground_floor.py` extrudes `yaml_ifc.footprints` for the walls. That function returns the trimmed plan polygons IfcOpenShell builds for `IfcRelConnectsPathElements`. Corner geometry stays in this package. Furnishing boxes are the converter's `IfcExtrudedAreaSolid`s (`write_ifc` / `build_ifc`), not a second reading of `Width`, `Depth`, and `Height`.

Floor grout for a sloped tile layout is `yaml_ifc.floor_joint_widths`. The finished-floor elevation at a plan point is `yaml_ifc.plane_elevation`.

`inputs/ground_floor/ground-floor.yaml` is `samples/ground-floor.yaml` from this commit. It is the same walls file as the previous pin `34e1597`. `inputs/ground_floor/furnishings.yaml` is the house kitchen from `34e1597`; upstream's furnishings sample at `0f96c26` is a generic nominal kitchen and is not copied over the house file. Room 1.20 tiling is `inputs/ground_floor/bathroom-1.20.yaml`, adapted from `samples/bathroom.yaml`.

License: MIT (`LICENSE`).
