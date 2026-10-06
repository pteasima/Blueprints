# yaml-ifc

Vendored from [pteasima/yaml-ifc](https://github.com/pteasima/yaml-ifc) at commit `4ad102f`.

The upstream repository is private, so this tree is copied into Blueprints instead of a git dependency. The pin is `4ad102f` (the `connections` / butt-joint sample). Replace the whole `yaml_ifc/` package from that commit when updating it. Do not edit it locally.

`models/ground_floor.py` extrudes `yaml_ifc.footprints`. That function returns the trimmed plan polygons IfcOpenShell builds for `IfcRelConnectsPathElements`. Corner geometry stays in this package.

License: MIT (`LICENSE`).
