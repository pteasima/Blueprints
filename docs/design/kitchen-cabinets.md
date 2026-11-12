# Kitchen cabinets: monoblock runs, drawers, worktop, sinks, hob, backsplash

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
| Legs (island, west run) | Ø40, 100 high, front and back under every end side and divider | The run; a divider's legs are in both bays' groups | positions `guess:`; see “Plinth: open legs” |
| Plinth board (tall runs only) | 18, set back 50 | The run (one board per front) | setback `guess:` |

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

- **The run is the assembly.** `KR-ISL` and the other runs are `IfcFurniture` (`ObjectType: KitchenRun`) contained in `SP-1.02`. Every physical part is its child through one `IfcRelAggregates`: end sides, dividers, central back, bottoms, rails, backs, top boards, fronts, drawers, legs (`PANEL`, `ObjectType: Leg`, a circular extrusion), the tall runs' plinth boards (`IfcSystemFurnitureElement`, `PANEL`; drawers `USERDEFINED` / `Drawer`), the worktop (`IfcSystemFurnitureElement`, `WORKSURFACE`), the stone cladding and the west backsplash (`IfcCovering`, `CLADDING`).
- **Box runs.** `KR-DN` (`Carcass: Box`) has one oak `Body` part per bay plus the worktop, instead of the panel set.
- **The hob is an appliance, not a run part.** `EA-KM8665` is an `IfcElectricAppliance`, `ELECTRICCOOKER`, contained in `SP-1.02` like the dishwasher (not in the run's `IfcRelAggregates`), with `Pset_Hob` (Model, Mounting, CutoutToBackEdge). It is a member of the SF-I600b group. Selecting `KR-ISL` and “Hide all others” therefore hides the hob; isolating SF-I600b keeps it.
- **The bay is a group.** Each bay (`SF-I600a` …) is an `IfcGroup` with the same GlobalId its yaml box had, so references by GlobalId survive. It keeps its property sets (`Pset_Drawers`, `Pset_KitchenBay`). One `IfcRelAssignsToGroup` per bay lists its own parts plus the shared parts it touches: both dividers (or an end side), the island's central back, the cladding at its end, and any appliance or sink standing in it (the dishwasher is in SF-A600, the Teka RS15 71.40 in SF-B800, the Teka RS15 18.40 in SF-I500a, the hob on SF-I600b). Every bay of the west run also lists the west backsplash.
- **Nothing is duplicated.** A divider is one product assigned to two groups, so a take-off counts it once.
- Every part carries `Pset_KitchenPart` (Role, Run, Width/Depth/Height of its box in metres, Material) and the usual `yaml-ifc` id pset, so the viewer and Home see a stable id such as `KR-ISL-DIV-SF-I600a-SF-I500b`. GlobalIds are derived from those ids.
- The worktop, cladding and west backsplash share one `IfcMaterial`, “Silestone Blanco Maple”.
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
| Plinth (sokl) height | **100**, open legs, no kick board | **Petr**, 2026-11-12: “Ok, 100mm it is.” (was 110; 92 before that) |
| Carcass height | **810** | derived: 930 − 20 − 100. METOD's carcass is 800; the extra 10 goes into the `*` drawer |
| Drawer grid, D1 nože | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D2 nářadí | 200 | **IKEA** METOD 80-grid, “low” front 20 cm |
| Drawer grid, D3 dole nevím | **410** (rest; was 400) | **IKEA** METOD 80-grid, “high” front 40 cm. Written `*`, the rest of the carcass, so a carcass change lands here |
| Tall run carcass | **2350** | 2450 (**Petr**, tall height, unchanged) − the same 100 plinth, so the tall plinth lines up with the bases. The tall runs keep a kick board (`PlinthKind` is `Board` by default) |
| Wall-cabinet carcass | 900 | the box height, bottom 1550, top 2450 (furnishings.md) |

## Plinth: open legs

Petr, 2026-11-12: “Ok, 100mm it is.” He wants the lowest plinth his robot vacuum fits under, so it can clean under the cabinets.

| Robot | Height (mm) | Source |
| --- | --- | --- |
| Dreame X60 Pro Master (Petr's), lidar retracted | 89 | [Dreame](https://global.dreametech.com/products/x60-pro-master) |
| Roborock Saros 10 / 10R / Z70 | 79.8 | [Roborock](https://support.roborock.com/hc/en-us/articles/48039533143321) |

- The island and the west run stand on **open legs, 100 high, with no kick board** (`PlinthKind: Legs`), so the robot drives under. The carcass bottom is at 100, which leaves 11 mm over the Dreame.
- Legs: Ø40, adjustable, IKEA-like. Each row has a front and a back leg on every wall line, under each end side and each shared divider. The front leg centre is 50 behind the carcass front (68 behind the front face) and the back one is 50 before the back. `guess:` IKEA puts 4 legs under each cabinet; a monoblock shares them at the dividers. Island: 22 legs. West run: 8 legs.
- The stone end cladding (island and west run) still runs from the floor to the worktop underside, so the robot gets in from the long sides only.
- The dishwasher slot (SF-A600) has no carcass: floor to worktop underside is **910**, unchanged by the plinth. The Bosch SBD6ECX12E is the XXL model (865 high) and takes a 865–925 niche ([Bosch spec sheet](https://media3.bosch-home.com/Documents/specsheet/de-DE/SBD6ECX12E.pdf)), so 910 fits. The usual 815–875 niche is the 815-high SMD model, not this one. The robot does not get under the dishwasher.
- The hob is unchanged: carcass top 910, hob underside 879. SF-I600b has no drawers.
- The north dining run (`KR-DN`) has no plinth parameter: its oak bodies stand on the floor (`Carcass: Box`). `open:` should they get legs too?
- `open:` the drawer and door fronts stop 1.5 above the carcass bottom (101.5), with no kick board behind. Check the look and toe space with Petr.

## Fronts, boxes, slides (SF-I600a)

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Front thickness | 18 | **IKEA** METOD fronts |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Front sizes | 597×197, 597×197, **597×407** | derived: grid − 3. D3 was 597×397 before the 100 plinth |
| Clear opening | 582 | derived: 600 − 9 − 9 (two shared dividers). Was 564 |
| Drawer box side clearance, each side | 13 | **IKEA**/Blum-style runner clearance, approx. |
| Drawer box outer width | 556 | derived: 582 − 2 × 13. Was 538 |
| Drawer box wall | 16 | `guess:` MAXIMERA-like side |
| Drawer box side height | front grid − 110, at least 60 → 90, 90, **300** (was 290) | `guess:` approximates MAXIMERA low/high sides |
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
| West-wall run | one piece, 2540 × 630, y 11.33–13.87 (over the dishwasher slot too, + 20 at each clad end), x 18.80–19.43 | derived |
| North dining run | 20 mm, top 930, 30 front overhang, one slab per base (see “North dining run”) | **Petr**; derived |
| Slab formats | 3270 × 1590 and 3060 × 1410 | **Cosentino**. The island top fits one 3270 × 1590 slab |
| West run end cladding | same as the island ends, both ends (see “West run end cladding”) | **Petr** (“the sides of the west run”) |
| Island end cladding | Silestone Blanco Maple, 20 thick (same as the worktop), floor to the worktop underside (0–910), full worktop depth 1260, covering the leg zone at the ends | **Petr** (“sides … clad in the same silestone”); thickness and floor-to-underside `guess:` |
| Worktop–cladding joint | the cladding sits under the worktop; the worktop runs 20 past the carcass end so its end is flush with the cladding face | `guess:` |
| Sink cut-outs | the manufacturer's undermount cut-out, centred on the sink box; see “Sinks” | **Teka** |
| Hob cut-out | flush-fit, stepped: 600 × 500 through, rebate 624 × 524 × 5.5; see “Induction hob” | **Miele** manual |

The Petr overhang applies to the island. The west-wall worktop uses the same material and overhang because Petr described “the” worktop: `open:` confirm the west run is Silestone too.

Bays with a sink have no top rails (the bowl would hit them, `guess:`).

## Sinks

Petr, 2026-11-12: “Do the sink and hob now”.

Both sinks are Teka BE LINEA RS15 and both are **undermount** only (Teka: “Spodní montáž”). The bowl hangs under the stone: the rim is glued to the worktop's underside, and the stone overhangs the bowl edge by 2 mm a side. So the cut-out is a little *smaller than the bowl*, not the rim. A top-mount rule (rim on top of the stone) does not apply to these sinks. The model checks it: an undermount sink whose top is not the worktop underside stops the export.

| Sink | Where | Overall | Bowl | Worktop cut-out | Rim top | Source |
| --- | --- | --- | --- | --- | --- | --- |
| `SN-RS15`, Teka BE LINEA RS15 71.40 X | west run, SF-B800, centred in the 800 | 750 × 440 | 710 × 400 × 200 | **706 × 396, R13** | 910 (`Elevation` 0.73 → **0.71**) | [Teka 115000004](https://www.teka.com/cs-cz/produkt/be-linea-rs15-71-40_115000004/) |
| `SN-RS1840`, Teka BE LINEA RS15 18.40 X | island, SF-I500a, centred on the bay | 440 × 220 | 400 × 180 × 140 | **396 × 176, R13** | 910 (`Elevation` 0.77) | [Teka 115000010](https://www.teka.com/cs-cz/produkt/be-linea-rs15-18-40-ss_115000010/); the card on [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg) next to the island's green rectangle |

- `SN-RS1840`'s long side runs across the island (east–west), because the plan's green rectangle is a little longer that way. `guess:` Both ways fit: the clear width is 473 and 440 is the longest side.
- `SN-RS1840` is centred on the 600 bay depth, so its cut-out runs 102–498 behind the bay front, 132–528 from the worktop's front edge. `guess:` The plan's rectangle sits a bit further forward.
- Without a manufacturer cut-out, `Pset_Sink` falls back to the bowl less 2 mm a side (`kitchen_cabinet.SINK_CUTOUT_INSET_MM`), which is the Teka pattern. `guess:`
- The rounded corners (R13) are in the IFC profile (chords, 6 per corner) and in the 3D model.
- On the plan, the island has one sink card and one green rectangle. The two green circles in a rectangle on the second 600 were read as “two round bowls” before; they are the hob (see below).
- `open:` the disposer (EcoMaster EVO3) and the taps (Hansgrohe M71 on the west run, Aquno Select on the island) are on the plan but not modelled.

## Induction hob

The hob is the **Miele KM 8665 FL** ([product page](https://www.miele.cz/product/12911610/indukcni-varna-deska-km-8665-fl), [installation manual](https://media.miele.com/downloads/02/8d/02_C7F1383814AE1FD185F64AE5A947028D.pdf)). Source: **Petr**, 2026-11-11. Modelled since Petr, 2026-11-12: “Do the sink and hob now”.

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

### Where it is

The hob is on **SF-I600b**, the island's west row, second 600 from the north (y 11.60–12.20), facing west. On [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg), the green rectangle with two circles lies between that module's blue lines, beside the red “600”. The note next to it reads “příbory, vařečky, stěrky, naběračky, pánve” (cutlery, wooden spoons, spatulas, ladles, pans), which is what you keep by a hob. The plan has no label on that symbol. Two circles are a common hob symbol, and there is no second sink card on the island. So the reading is the plan's, not a free choice, but it is a reading.

### How it is built

`Pset_Hob` on the bay holds the manual's numbers (metres). `kitchen_cabinet` lays the hob out from the bay and the worktop:

| Item | Value (mm) | Source |
| --- | --- | --- |
| Mounting | **flush-fit**: the glass top is level with the worktop | `guess:` (Petr has not chosen). Flush-fit was trivial to model, so it is used |
| Through cut-out | 600 × 500, centred on the bay along the run (it reaches the middle of both dividers) | Miele |
| Rebate | 624 × 524, 5.5 deep, around the cut-out | Miele |
| Cut-out front edge | 50 behind the bay front face (80 from the worktop edge): the 500 cut-out centred on the 600 bay depth | `guess:` |
| Cut-out to the worktop's far (east) edge | **680** (≥ 50 required) | derived, checked by the model |
| Glass | 620 × 520 × 4, top at 930 | Miele |
| Housing | 533 × 427, from 879 to 926 | Miele (51 installation height) |
| Hob underside | **879**, 31 below the carcass top (910) | derived |
| Front rail in SF-I600b | **left out**: the housing (86.5–513.5 behind the front face) drops into the rail (18–98) | `guess:` |
| Drawers | SF-I600b has none (one slab door), so nothing changed | yaml |

If a bay under a hob has drawers, the top drawer box is cut down to 8 mm below the hob underside (`MinDrawerGap`). With the METOD grid the top box ends at 825, 54 below the hob, so nothing would be cut today. The fronts stay on the grid.

In IFC the worktop's rebate is a second extrusion layer. The slab is one 14.5 mm layer with the through holes and one 5.5 mm top layer with the rebate. In the 3D model the rebate is a pocket.

`open:` surface-mounted or flush-fit (Petr). Surface-mounted is `Mounting: SurfaceMounted`: the glass then rests on the stone (top 934) and there is no rebate. `open:` the cut-out's position in the bay depth. `open:` fan airflow (the air-intake base panel holes) is not modelled.

## West run end cladding

Petr, 2026-11-12: “Oh, and also do the sides of the west run of cabinets.”

Both ends of `KR-WEST` are free: the south end is at OP24's north jamb (y 11.35), the north end at OP25's south jamb (y 13.85). Neither touches a wall or a tall cabinet. So `CladEnds: true`, the same rule as the island:

| Piece | Size (mm) | Where | Group |
| --- | --- | --- | --- |
| `KR-WEST-CLAD-S` | 20 × 630 × 910, floor to the worktop underside | y 11.33–11.35, x 18.80–19.43 | SF-C850 |
| `KR-WEST-CLAD-N` | 20 × 630 × 910 | y 13.85–13.87 | SF-A600 (the dishwasher slot: the stone is its north side) |

The worktop runs 20 further at each end, flush with the cladding: 2500 → **2540**, y 11.33–13.87. `IfcCovering` `CLADDING`, part of the `KR-WEST` assembly.

`open:` the two 20 mm pieces and the worktop ends now stand 20 mm in front of the OP24 and OP25 door openings (the run filled the jamb-to-jamb 2500 with 0 clearance). Check the door frames and leaves; the alternative is to shorten the run's bays by 40.

## North dining run

Petr, 2026-11-12: “And also do the north cabinets (in the dining area in the same silestone).”

`KR-DN` is a kitchen run over the four dining bases, west to east: SF-F052 (300 × 200, in front of pier W-052), SF-DN (2700 × 450), SF-F053 (300 × 200), SF-DN70 (70 × 450). They are oak boxes, not METOD carcasses, so the run uses `Carcass: Box`:

- **Each base stays one oak body, cut down under the stone.** Body top 930 → **910**, so the counter stays 930. The body is `<bay>-BODY`, `IfcSystemFurnitureElement` `USERDEFINED`, material “natural oak”, and the only member of its bay group. I picked this over keeping the oak top and swapping it for stone: the height comes from the bay box and the worktop thickness, so a thicker stone lowers the body by itself.
- **Worktop** `KR-DN-WORKTOP`: 20 mm Silestone Blanco Maple, top 930, 30 mm overhang at the front (y 15.12). It is one part with one slab per base, because the depth steps at the piers:

| Slab | x | y | Size (mm) |
| --- | --- | --- | --- |
| over SF-F052 | 22.15–22.45 | 15.12–15.35 | 300 × 230 |
| over SF-DN | 22.45–25.15 | 15.12–15.60 | 2700 × 480 |
| over SF-F053 | 25.15–25.45 | 15.12–15.35 | 300 × 230 |
| over SF-DN70 | 25.45–25.52 | 15.12–15.60 | 70 × 480 |

- **No end cladding: no side is exposed.**
  - The west end of SF-F052 abuts SF-T4, the kitchen tall cabinet, which already overlaps the filler by 8 mm.
  - The east end of SF-DN70 abuts SF-LB, the low base behind the sofa (top 800), with the bookshelf above it from 850. Only a 110 mm strip of SF-DN70's east face shows, above SF-LB (800–910) and in front of the bookshelf.
  - The sides between the bases face the piers. `open:` clad that 110 mm strip?
- The real stone would be one notched piece (or joints at the piers); the model's slabs only show the outline. `open:` joints.

## Backsplash

Petr, 2026-11-12: “As well as the back wall above countertop, below top cabinets, also in silestone (12.5mm or whatever the thin one for wall cladding is)” and “back wall for both west and north”. Blanco Maple comes in 12, 20 and 30 (**Cosentino**), so the thin one is **12 mm**.

| Piece | Where | Size (mm) | Top | Source |
| --- | --- | --- | --- | --- |
| `KR-WEST-BACKSPLASH` | west wall, on the west worktop, y 11.35–13.85 (OP24 to OP25 jamb, not over the clad ends' extra 20), x 18.800–18.812 | 2500 × 12 × 620, 930 → 1550 | underside of SF-CH850 / SF-BH800 / SF-AH850 | derived by `kitchen_cabinet` (`Backsplash: true`): the lowest box over the strip |
| `CV-BS-DN` | north wall behind SF-DN, x 22.45–25.15, y 15.588–15.600 | 2700 × 12 × 620, 930 → 1550 | underside of SF-DH | yaml `coverings` |
| `CV-BS-R052`, `CV-BS-R053W` | the piers' faces facing each other in the dining bay, y 15.35–15.588 | 238 × 12 × 620 each | under SF-DH | `guess:` the stone wraps the piers |
| `CV-BS-P052` | front of pier W-052 over filler SF-F052, x 22.158–22.462, y 15.338–15.35 | 304 × 12 × 620 | **1550, `open:`** (nothing above) | `guess:` wrap |
| `CV-BS-P053` | front of pier W-053 over filler SF-F053, x 25.138–25.462 | 324 × 12 × 620 | **1550, `open:`** | `guess:` wrap |
| `CV-BS-R053E` | W-053's east face over SF-DN70, x 25.450–25.462, y 15.35–15.588 | 238 × 12 × 620 | **1550, `open:`** | `guess:` wrap |
| `CV-BS-DN70` | north wall over SF-DN70, x 25.462–25.52 | 58 × 12 × 620 | **1550, `open:`** | |

- The north pieces stop at 1550 wherever nothing hangs above, the same top as under SF-DH and the west run. `open:` Petr to confirm that top.
- SF-LB, the low base behind the sofa, gets no backsplash: the bookshelf's oak lamella back is on that wall from 850.
- The north backsplash stands on the dining run's stone worktop (`KR-DN`, see “North dining run”). It stays plain `IfcCovering` in the yaml, because the run's two depths (200 at the piers, 450 between) would need a stepped strip.
- Pier W-052's front piece starts at SF-T4's east face (x 22.158), not the pier edge, because T4 already nicks the pier by 8 mm.

## Parametric rule

Everything above is computed in `kitchen_cabinet.runs` from the bay boxes (`Origin`, `RefDirection`, `Width`, `Depth`, `Height`, `Elevation`), the run's `Pset_KitchenRun` (any `IKEA_DEFAULTS_MM` key, in metres, plus `WorktopMaterial`, `CladEnds`, `Carcass` (`Box` for whole-body bays), `BodyMaterial`, `PlinthKind` (`Legs` or `Board`), `Backsplash`, `BacksplashThickness`, `BacksplashTop`, `BacksplashMaterial`) and each bay's `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`). A bay may override the drawer and front values in its own `Pset_KitchenCabinet`. Change a bay's width and its dividers move, both neighbours' clear widths and drawer boxes follow, and the worktop grows; change the counter height or the worktop thickness and the carcass, the `*` drawer and the cladding follow. Rows that stand back to back (same back plane, fronts facing away) share one central back; a run with `CladEnds` gets stone on both ends. A sink's cut-out comes from its `Pset_Sink` and follows the sink box. A hob follows its bay (`Pset_Hob`): move or widen the bay and the cut-out, rebate, glass and housing move with it. The model stops the export if the hob comes closer than `MinBackEdge` to the far edge. A backsplash runs the worktop's length, from the worktop top up to the lowest box hanging over it.

## Tap to open

In the web viewer a tap or click on a drawer slides it out by its extension along the front normal (about half a second, ease-in-out, the same animation as the doors), and a second tap slides it back. Records come from the model (`docs/models/ground_floor.doors.json`, `kind: drawer`, one record per drawer part such as `SF-I600a-D1`); the viewer only plays them (`src/blueprints/viewer/doors.js`).
