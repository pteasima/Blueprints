# Kitchen cabinets: monoblock runs, drawers, worktop

Every kitchen cabinet run is one **monoblock**: a single carcass body whose neighbouring bays share their walls. The first detailed bay is **SF-I600a**, on the island's west row, the first 600 south of the rectangular sink, facing west. It is the bay with the knife drawer. Every other bay is a plain carcass with one slab front.

Code: `models/kitchen_cabinet.py` (layout), `models/kitchen_ifc.py` (IFC structure). Parameters live in `inputs/ground_floor/furnishings.yaml`: each run is an element with `Pset_KitchenRun`, each bay keeps its box and names its run in `Pset_KitchenBay`, and a drawer bay has `Pset_Drawers`. Previews: `scripts/render_kitchen_run.py <run> [--bay <id>] [--open <drawer ids>]`.

Labels: **Petr** is a fact Petr gave, with the date or document. **IKEA** is an IKEA METOD / MAXIMERA default, used because Petr said “when unsure of details and margins, default to IKEA METOD measurements” (2026-11-11). These cabinets are custom made, so every IKEA number can change. `guess:` is a number with no source at all. **Cosentino** is from the maker's colour page.

## Monoblocks

Petr, 2026-11-12:

> Ok, lets assume cabinets are a monoblock. Neighboring walls are shared, including the back wall in the island cabinets. Model this well in ifc like we discussed, making sure Hide all others etc. still works as expected.
>
> In reality, the woodworker may object to very large monoblocks and break them down, but not all the way into individual cabinets. So this will come later, we assume full monoblocks.

`open:` the woodworker may split a monoblock into a few rigid sections (a double wall at each section joint). Not modelled; every run is one full body.

| Run | Bays (in run order) | Notes |
| --- | --- | --- |
| `KR-ISL` island | west row SF-I500a, SF-I600a, SF-I500b, SF-I600b, SF-I300 (north → south); east row SF-E600a … SF-E700 | The two rows stand back to back on one shared central back. One end side at each end spans both rows. |
| `KR-WEST` west-wall base | SF-C850, SF-B800, SF-A250, SF-A600 (south → north) | SF-A600 is the dishwasher slot (`Kind: Niche`): no carcass, worktop over it, SF-A250's end side is its south wall. |
| `KR-WEST-H` west-wall wall cabinets | SF-CH850, SF-BH800, SF-AH850 | No plinth, no worktop; a top board per bay. |
| `KR-TALL-W` | SF-T1 | Alone between the west wall and the fridge, so a monoblock of one. |
| `KR-TALL` | SF-T2, SF-T3, SF-T4 | SF-T3 is the oven column: `Front: none` (no slab front over the appliances, which are not modelled). |

The living-room oak pieces (SF-F052, SF-DN, SF-LB …) are not kitchen runs and stay the boxes in [furnishings.md](furnishings.md).

### What is shared

| Part | Thickness (mm) | Shared by | Source |
| --- | ---: | --- | --- |
| End side (one at each end of a run) | 18 | The end bay. On the island one board spans both rows, so it belongs to both end bays. | **IKEA** METOD board |
| Divider between two bays | 18 | Both neighbouring bays, centred on the bay line (9 mm into each) | **IKEA** board; one board instead of two sides (Petr, monoblock) |
| Island central back | 18 | Every island bay, both rows | **Petr** (“including the back wall in the island cabinets”). 18 instead of a thin back because it is the island's spine: `guess:` |
| Back, single-row runs | 8 | Its own bay only (between the dividers) | `guess:` (METOD back is a thin fibreboard) |
| Bottom, front and back rails, top board | 18 | Its own bay only (between the dividers) | **IKEA** board; rails 80 deep `guess:` |
| Plinth board | 18, set back 50 | The run (one board per front) | setback `guess:` |

End sides and dividers run the full carcass height, and bottoms and rails sit between them (the usual frameless monoblock joint, `guess:`).

### Clear inner width per bay

The bay boxes in the yaml did not move or change size. What changed is the space inside: a divider takes 9 mm from each neighbour instead of a full 18 mm side, and an end bay keeps a full 18 mm end side. Before this change every cabinet was its own box with two 18 mm sides (clear = width − 36).

| Bay | Width | Clear before | Clear now | Change |
| --- | ---: | ---: | ---: | ---: |
| SF-I500a | 500 | 464 | 473 | +9 (north end) |
| SF-I600a | 600 | 564 | 582 | +18 |
| SF-I500b | 500 | 464 | 482 | +18 |
| SF-I600b | 600 | 564 | 582 | +18 |
| SF-I300 | 300 | 264 | 273 | +9 (south end) |
| SF-E600a | 600 | 564 | 573 | +9 (north end) |
| SF-E600b | 600 | 564 | 582 | +18 |
| SF-E600c | 600 | 564 | 582 | +18 |
| SF-E700 | 700 | 664 | 673 | +9 (south end) |
| SF-C850 | 850 | 814 | 823 | +9 (south end) |
| SF-B800 | 800 | 764 | 782 | +18 |
| SF-A250 | 250 | 214 | 223 | +9 (end side to the dishwasher slot) |
| SF-CH850 / SF-BH800 / SF-AH850 | 850 / 800 / 850 | 814 / 764 / 814 | 823 / 782 / 823 | +9 / +18 / +9 |
| SF-T1 | 750 | 714 | 714 | 0 (both sides are end sides) |
| SF-T2 / SF-T3 / SF-T4 | 600 / 600 / 500 | 564 / 564 / 464 | 573 / 582 / 473 | +9 / +18 / +9 |

Measured from the layout, not by hand: `kitchen_cabinet.bay_summary(run)` returns them, and the plan PNG from `scripts/render_kitchen_run.py` labels every bay with its clear width.

## The IFC structure

Agreed with Petr on 2026-11-11 and built here:

- **The run is the assembly.** `KR-ISL` and the other runs are `IfcFurniture` (`ObjectType: KitchenRun`) contained in `SP-1.02`. Every physical part is its child through one `IfcRelAggregates`: end sides, dividers, central back, bottoms, rails, backs, top boards, fronts, drawers, plinth boards (`IfcSystemFurnitureElement`, `PANEL`; drawers `USERDEFINED` / `Drawer`), the worktop (`IfcSystemFurnitureElement`, `WORKSURFACE`) and the stone cladding (`IfcCovering`, `CLADDING`).
- **The bay is a group.** Each bay (`SF-I600a` …) is an `IfcGroup` with the same GlobalId its yaml box had, so references by GlobalId survive. It keeps its property sets (`Pset_Drawers`, `Pset_KitchenBay`). One `IfcRelAssignsToGroup` per bay lists its own parts plus the shared parts it touches: both dividers (or an end side), the island's central back, the cladding at its end, and any appliance or sink standing in it (the dishwasher is in SF-A600, the Teka sink in SF-B800).
- **Nothing is duplicated.** A divider is one product assigned to two groups, so a take-off counts it once.
- Every part carries `Pset_KitchenPart` (Role, Run, Width/Depth/Height of its box in metres, Material) and the usual `yaml-ifc` id pset, so the viewer and Home see a stable id such as `KR-ISL-DIV-SF-I600a-SF-I500b`. GlobalIds are derived from those ids.
- The worktop and cladding share one `IfcMaterial`, “Silestone Blanco Maple”.
- Not done: `IfcRelConnectsElements` between a divider and its bays. A bay is an `IfcGroup`, not an element, so that relationship cannot point at it; the group assignment already records the link.

yaml-ifc has no assemblies or plain groups, so `kitchen_ifc.apply` rewrites the model it builds (the vendored package is not edited). Both the 3D export and the viewer's IFC index (`docs/models/ground_floor.ifc.json`) run it.

### Viewer: isolate a bay

The IFC index hangs each bay group under its run for the tree (display only) and lists every part's groups. Hide, “Hide all others” and framing follow group membership as well as the tree (`src/blueprints/viewer/ifcTree.js`, `subtreeIds`). So:

- selecting SF-I600a and choosing “Hide all others” keeps its bottom, rail, three drawers, both dividers and the island's central back;
- selecting a divider selects just that board;
- selecting `KR-ISL` and “Hide all others” keeps the whole island, worktop and cladding included.

## Which cabinet, and what the drawers hold

Petr’s sticky-note plan, [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg): the yellow note beside the island’s red “600” (the second module from the north on the west row, south of the sink) reads:

> noze · naradi (lis na cesnek, hmozdir, vaha, ..) · dole nevim 🤷

Read top to bottom as three drawers: knives, tools (garlic press, mortar, scale), and the bottom one still undecided. Source: Petr, KitchenPlan.jpg. The note does not say three drawers in words, and it gives no heights. `open:` what goes in the bottom drawer (“dole nevím”).

Contents are not modelled yet (Petr, 2026-11-11).

## Heights, top to bottom

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Finished counter height (top of worktop) | 930 | **Petr**, 2026-11-11; the bay box `Height` |
| Worktop thickness | 20 | Silestone comes in 12, 20 and 30 (**Cosentino**). Petr gave no thickness: `guess:` 20 |
| Plinth (sokl) height | 110 | Chosen so the carcass stays exactly the METOD 800: 930 − 20 − 800. `guess:` (was 92 with the 38 IKEA worktop) |
| Carcass height | 800 | **IKEA** METOD base carcass |
| Drawer grid, D1 nože | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D2 nářadí | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D3 dole nevím | 400 (rest) | **IKEA** METOD 80-grid, “high” front 40 cm. Written `*`, the rest of the carcass, so a carcass change lands here |
| Tall run carcass | 2340 | 2450 (**Petr**, tall height) − the same 110 plinth, so the tall plinth lines up with the bases |
| Wall-cabinet carcass | 900 | the box height, bottom 1550, top 2450 (furnishings.md) |

## Fronts, boxes, slides (SF-I600a)

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Front thickness | 18 | **IKEA** METOD fronts |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Front sizes | 597×197, 597×197, 597×397 | derived: grid − 3. Unchanged by the monoblock |
| Clear opening | 582 | derived: 600 − 9 − 9 (two shared dividers). Was 564 |
| Drawer box side clearance, each side | 13 | **IKEA**/Blum-style runner clearance, approx. |
| Drawer box outer width | 556 | derived: 582 − 2 × 13. Was 538 |
| Drawer box wall | 16 | `guess:` MAXIMERA-like side |
| Drawer box side height | front grid − 110, at least 60 → 90, 90, 290 | `guess:` approximates MAXIMERA low/high sides |
| Box bottom above its slot bottom | 25 | `guess:` |
| Carcass depth, island rows | 573 | derived: bay depth 600 − front 18 − half the 18 central back. The bay box `Depth` stays 600 |
| Slide / drawer box length | 550 | derived: largest 50 mm step that fits 573 − 10 rear clearance. **IKEA** MAXIMERA uses full-extension runners in a 60-deep carcass. Unchanged |
| Extension | 550 (full) | **IKEA** MAXIMERA full extension: travel = box length |

## Worktop and cladding

Petr, 2026-11-12:

> Its silestone maple color. It has an overhang of 300 over the cabinets. The sides of the kitchen islands are also clad in the same silestone.

and straight after:

> 30mm overhang, sorry

| Item | Value | Source |
| --- | --- | --- |
| Material | Silestone **Blanco Maple** (Cosentino, Tropical Forest series, a mottled white quartz) | **Petr** (“silestone maple”). Blanco Maple is the only Silestone colour named Maple ([Cosentino](https://www.cosentino.com/en-ie/colours/silestone/blanco-maple)) |
| Thickness | 20 mm | `guess:`; Blanco Maple comes in 12, 20, 30 mm (**Cosentino**) |
| Top | 930 | **Petr** |
| Overhang past the front faces (fronts and drawer fronts) | 30 mm | **Petr**, 2026-11-12 (corrected from 300) |
| Overhang at the back of a wall run | 0 (against the wall) | `guess:` |
| Island | one piece, 2540 × 1260: the 2500 × 1200 body, + 30 on both long fronts, + 20 at each end over the cladding | derived |
| West-wall run | one piece, 2500 × 630, y 11.35–13.85 (over the dishwasher slot too), x 18.80–19.43 | derived |
| Slab formats | 3270 × 1590 and 3060 × 1410 | **Cosentino**. The island top fits one 3270 × 1590 slab |
| Island end cladding | Silestone Blanco Maple, 20 thick (same as the worktop), floor to the worktop underside (0–910), full worktop depth 1260, covering the plinth ends | **Petr** (“sides … clad in the same silestone”); thickness and floor-to-underside `guess:` |
| Worktop–cladding joint | the cladding sits under the worktop; the worktop runs 20 past the carcass end so its end is flush with the cladding face | `guess:` |
| Sink hole | the Teka RS15 bowl, 710 × 400, centred on the sink (undermount) | bowl from the sink's Description; hole = bowl `guess:` |

The Petr overhang applies to the island. The west-wall worktop uses the same material and overhang because Petr described “the” worktop: `open:` confirm the west run is Silestone too.

`open:` the island's two sinks (the green rectangle in SF-I500a and the two round bowls across SF-I500b / SF-I600b on the plan) are not modelled, so their holes are not cut. The hob position is not decided, so its 600 × 500 hole is not cut either.

The Teka sink box still runs to 930 (`Elevation 0.73`, “top flush with the 930 counter”). An undermount sink's rim sits under the stone, at 910, so its 20 mm rim now overlaps the worktop in the model. `open:` lower it to 0.71 once confirmed. Bays with a sink have no top rails (the bowl would hit them, `guess:`).

## Induction hob

The hob is the **Miele KM 8665 FL** ([product page](https://www.miele.cz/product/12911610/indukcni-varna-deska-km-8665-fl), [installation manual](https://media.miele.com/downloads/02/8d/02_C7F1383814AE1FD185F64AE5A947028D.pdf)). Source: **Petr**, 2026-11-11. It is not modelled yet (Petr, 2026-11-11, “we'll model it soon enough, but not yet”).

Numbers from the installation manual (pages 23 and 29):

| Item | Value (mm) |
| --- | ---: |
| Glass top (W × D × thickness) | 620 × 520 × 4 |
| Installation height, with the connection box | 51 |
| Housing under the glass (W × D), approx. | 533 × 427 |
| Cut-out, surface-mounted | 600 × 500 (+3) |
| Cut-out, flush-fit | inner 600 × 500, rebate 624 × 524, 5.5 deep, 12 wide |
| Cut-out to the worktop's back edge | ≥ 50 |
| Underside of the hob or base panel to a drawer's top edge | ≥ 8 (KM 8xxx-2: ≥ 8; KM 8xxx: ≥ 5) |
| Fan holes in an air-intake base panel | Ø 60–80, 78 and 210 from the cut-out centre, 138 deep |

It fits a 600 bay: the housing is about 533 wide against 582 clear between two shared dividers (573 in an end bay). The 600 cut-out is as wide as the bay, so the neighbouring bays carry the worktop. `open:` which bay it sits on, surface-mounted or flush-fit (the 5.5 mm rebate is in a 20 mm stone top), and the top drawer height under it (the ≥ 8 mm gap and fan airflow cut into it).

## Parametric rule

Everything above is computed in `kitchen_cabinet.runs` from the bay boxes (`Origin`, `RefDirection`, `Width`, `Depth`, `Height`, `Elevation`), the run's `Pset_KitchenRun` (any `IKEA_DEFAULTS_MM` key, in metres, plus `WorktopMaterial` and `CladEnds`) and each bay's `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`). A bay may override the drawer and front values in its own `Pset_KitchenCabinet`. Change a bay's width and its dividers move, both neighbours' clear widths and drawer boxes follow, and the worktop grows; change the counter height or the worktop thickness and the carcass, the `*` drawer and the cladding follow. Rows that stand back to back (same back plane, fronts facing away) share one central back; a run with `CladEnds` gets stone on both ends.

## Tap to open

In the web viewer a tap or click on a drawer slides it out by its extension along the front normal (about half a second, ease-in-out, the same animation as the doors), and a second tap slides it back. Records come from the model (`docs/models/ground_floor.doors.json`, `kind: drawer`, one record per drawer part such as `SF-I600a-D1`); the viewer only plays them (`src/blueprints/viewer/doors.js`).
