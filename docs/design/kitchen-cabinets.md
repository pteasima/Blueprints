# Kitchen cabinets: monoblock runs, fronts, drawers, appliances, worktop, sinks, hob, backsplash

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
| `KR-WEST-H` west-wall wall cabinets | SF-CH850, SF-BH800, SF-AH850 | No plinth, no worktop; a top board per bay. Bottom 1560, Blum AVENTOS HF lift fronts (see “Wall cabinets: lift-up fronts”). |
| `KR-TALL-W` | SF-T1 | Alone between the west wall and the fridge, so a monoblock of one. |
| `KR-TALL` | SF-T2, SF-T3, SF-T4 | SF-T3 is the oven column: microwave over steam oven, in niches (see “Fronts and interiors”). |
| `KR-TALL-F` | SF-TF | The cabinet over the fridge, between SF-T1 and SF-T2: a monoblock of one, no worktop, no plinth. New 2026-11-12. |
| `KR-LB` | SF-LB | The living-room counter behind the sofa: one oak body (`Carcass: Box`) under an oak-veneer top at 930. New 2026-11-13 (see “Living-room counter”). |

The other living-room oak pieces (SF-DH, SF-TC, the bookshelf FN-BK) are not kitchen runs and stay the boxes in [furnishings.md](furnishings.md). The dining bases are `KR-DN` and the counter behind the sofa is `KR-LB`, both `Carcass: Box` runs.

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

The bay boxes in the yaml did not move or change size (until the Gridfinity change of 2026-11-13, which resized the island's west row; see “Gridfinity drawers”). What changed is the space inside: a divider takes 9 mm from each neighbour instead of a full 18 mm side, and an end bay keeps a full 18 mm end side. Before this change every cabinet was its own box with two 18 mm sides (clear = width − 36).

| Bay | Width | Clear before | Clear now | Change |
| --- | ---: | ---: | ---: | ---: |
| SF-I500a | 500 | 464 | 473 | +9 (north end) |
| SF-I600a | **607** (was 600, Gridfinity) | 564 | 589 | +25 |
| SF-I500b | **481** (was 500, Gridfinity) | 464 | 463 | −1 |
| SF-I600b | **607** (was 600, Gridfinity) | 564 | 589 | +25 |
| SF-I300 | **305** (was 300, Gridfinity) | 264 | 278 | +14 (south end) |
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

Petr, 2026-11-12, after the monoblock groups landed in the spatial tree under each run and became hard to find:

> Ok, ditch that rule. I want: a separate Groups tab in the inspector. a way to get into element/group info from the longpress menu in inspector. element info to show groups that element is member of (taping one reveals it in inspector). group info to show child elements and child groups (separate sections). No need for parent group as thats findable from the path bar in inspector.

Then, after a critique of that plan:

> 1. ok, no pathbar in groups tab, parent group in group info
> 2. thats why theres a segmented picker for the tabs and it animates when it switches over
> 3. noted, fwiw I dont think thats an issue, lets have a furniture group with cabinets being children, electrical group (empty for now).

Then, on the info screen and the 3D long-press popover:

> Sorry, that info screen should be the same as that popover when you longpress the thing in model. So it should also have actions etc. Actually, now that I think about it, ditch the popover and just go straight into inspector. That also means theres no open inspector button, as that just mean going back.

Then, two tweaks once that was in a PR (2026-11-12):

> the segmented picker shouldnt be visible on the info screen, only at root of the inspector. Make it make sense.

> furniture group should contain not just other groups, but also other pieces of furniture that arent a group (e.g. the sofa).

A long-press in the model now opens the inspector on that element's info screen (no popover, no "Show in inspector" button). Info carries the old popover's properties and actions, plus Frame, Hide / Unhide, Hide all others and Unhide all others. Back from info returns to the tree; Back from the tree returns to the menu. The Spatial / Groups segmented picker is shown only at the inspector root (the spatial tree or the groups list). It is hidden on element and group info, and on any deeper pushed screen. Tapping a group from element info, or an element from group info, still updates the underlying tab so Back lands on the right root; the picker stays off until then.

The index no longer hangs a group under the parent most of its members share. Groups are not in the spatial tree. They have their own list (`groups` in `docs/models/ground_floor.ifc.json`), with member elements, child groups and parent groups from `IfcRelAssignsToGroup`. The inspector has a Spatial tab (the room tree, with a path bar) and a Groups tab (top-level groups, no path bar); a segmented picker at the root animates the switch. Long-press a row for Info. Element info lists the groups it belongs to; group info lists parent groups, child groups and child elements. Tapping a group opens it on the Groups tab; tapping an element opens it on the Spatial tab. Hide, “Hide all others” and framing follow group membership recursively, including nested groups (`src/blueprints/viewer/ifcTree.js`, `subtreeIds`). So:

- selecting SF-I600a and choosing “Hide all others” keeps its bottom, rail, three drawers, both dividers and the island's central back;
- selecting a divider selects just that board;
- selecting `KR-ISL` and “Hide all others” keeps the whole island, worktop and cladding included;
- selecting Furniture keeps every cabinet bay, plus the loose furniture pieces that are direct members (the Livom sofa modules, the Gatta table, chairs, and the rest listed below).

Two root groups are written by `kitchen_ifc.apply` on every yaml-ifc document that has bays, systems, or loose furniture (furnishings, bedroom, bathroom). The index merge unions `memberIds` and child/parent group lists across those documents, so Furniture is one group with all of them. **Furniture** (`GRP-FURNITURE`) has every kitchen bay group as a child (island, west, west wall cabinets, tall, north dining — all existing bay `IfcGroup`s), and also the furniture elements that are not already in a bay group: the Livom Harvey sofa modules and arms, the Gatta dining table and its chairs, the living-room bookshelf, the bed and curtain rails in 1.11, the bathroom vanity cabinet, top and shelf, the standalone cabinets that are not a kitchen bay (`SF-DH`, `SF-LB`, `SF-TC`), and worktops or plinths that no bay lists (so isolating Furniture still shows the counters). Kitchen-run assemblies (`KR-ISL`, `KR-WEST`, and the other `ObjectType: KitchenRun` products) are *not* direct members: their bays are already child groups, and listing the run again would duplicate them. Hobs and other appliances stay out (they are not furniture). Bathroom construction that yaml-ifc types as `IfcFurniture` (mixers, pipes, pre-walls, soffit, tiled tub front, shower screen) also stays out. **Electrical** (`GRP-ELECTRICAL`) is empty for now. If an `IfcSystem` or `IfcDistributionCircuit` appears in the same model, it is assigned under Electrical. There are none in the current furnishings export. Membership that already follows from an element's class, type or material (every window, all gypsum) stays a viewer filter, not a group.

## Which cabinet, and what the drawers hold

Petr’s sticky-note plan, [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg): the yellow note beside the island’s red “600” (the second module from the north on the west row, south of the sink) reads:

> noze · naradi (lis na cesnek, hmozdir, vaha, ..) · dole nevim 🤷

Read top to bottom as three drawers: knives, tools (garlic press, mortar, scale), and the bottom one still undecided. Source: Petr, KitchenPlan.jpg. The note does not say three drawers in words, and it gives no heights. `open:` what goes in the bottom drawer (“dole nevím”).

Contents are now written on every front (`Pset_KitchenFront.Contents`), from the notes; see “Fronts and interiors”.

## Heights, top to bottom

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Finished counter height (top of worktop) | 930 | **Petr**, 2026-11-11; the bay box `Height` |
| Worktop thickness | 20 | Silestone comes in 12, 20 and 30 (**Cosentino**). Petr gave no thickness: `guess:` 20 |
| Plinth (sokl) height | **100**, open legs, no kick board | **Petr**, 2026-11-12: “Ok, 100mm it is.” (was 110; 92 before that) |
| Carcass height | **810** | derived: 930 − 20 − 100. METOD's carcass is 800; the extra 10 goes into the `*` drawer |
| Drawer band, D1 (top) | **100** (was 200); SF-I600b (hob) **200** | **Petr**, 2026-11-13: the top drawers are MAXIMERA's lowest variant (system height 10 cm, **IKEA**). Under the hob see “Gridfinity drawers” |
| Drawer band, D2 | **100** (was 200) | **Petr**, 2026-11-13, as D1 |
| Drawer band, D3 (bottom) | **610** (rest; was 410); SF-I600b **510** | **Petr**, 2026-11-13: “The bottom drawer can grow by that leftover amount.” Written `*`, the rest of the carcass, so a carcass change lands here |
| Tall run carcass | **2350** | 2450 (**Petr**, tall height, unchanged) − the same 100 plinth, so the tall plinth lines up with the bases. The tall runs keep a kick board (`PlinthKind` is `Board` by default) |
| Wall-cabinet bottom | **1560** (was 1550) | **Petr**, 2026-11-13: “I want top cabinets to start at 1560mm from floor.” The bay box `Elevation` |
| Wall-cabinet carcass | 900 | the box height, unchanged, so the top is now **2460** (was 2450); see “Wall cabinets: lift-up fronts” for what that touches |

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
- The hob is unchanged: carcass top 910, hob underside 879. SF-I600b has three drawers under it (see “Gridfinity drawers”); the top box (a MAXIMERA medium, 713–857) stays 22 under the hob, more than Miele's 8.
- The north dining run (`KR-DN`) has no plinth parameter: its oak bodies stand on the floor (`Carcass: Box`). `open:` should they get legs too?
- `open:` the drawer and door fronts stop 1.5 above the carcass bottom (101.5), with no kick board behind. Check the look and toe space with Petr.

## Fronts, boxes, slides (island drawers)

The drawer boxes are modelled after IKEA **MAXIMERA** (Petr, 2026-11-13, see “Gridfinity drawers”). Until then the box was 13 mm a side off the carcass (labelled “IKEA/Blum-style”; Blum's own MOVENTO rule is 5 mm a side for 16 mm sides, IKEA gives no such number), 16 mm walls, no box front and as long as a 50 mm slide step. That gave a 600 bay a 524 × 534 inside, roomier than the real MAXIMERA (480 × 504). All of it is replaced by the two MAXIMERA deductions.

| Item | Value (mm) | Source |
| --- | ---: | --- |
| Front thickness | 18 | **IKEA** METOD fronts |
| Gap between fronts (and to the sides, 1.5 each) | 3 | **IKEA**: a 600×200 grid front is 597×197 |
| Drawer inside width | clear width − **84** (`DrawerInnerWidthDeduction`) | **IKEA** MAXIMERA, see below |
| Drawer inside depth | side depth − **96** (`DrawerInnerDepthDeduction`); the side depth is the divider's, carcass front edge to the back (the island's central back face) | **IKEA** MAXIMERA, see below |
| Drawn box walls (sides, box front, back) | 19 (`BoxWall`) | (542 − 504) / 2: MAXIMERA box 542 deep, inside 504 (**IKEA**). The decor front screws to the box front |
| Drawn box bottom | 16 (`BoxBottomThickness`) | `guess:` |
| Box side height | low **78** in a 100 band, medium **144** in 200, high **212** in 300; bands of 400 and more (and pull-outs): front − 110 | **IKEA** MAXIMERA product pages; the 400+ rule is `guess:` (a high box with side extensions) |
| Box bottom | 3 above its band (the lowest box 3 above the 18 carcass bottom) | `guess:`; the top box must clear the 18 top rail (box top 891, rail from 892) |
| Box length, extension | inside depth + 2 × 19, full extension (travel = box length) | **IKEA** MAXIMERA full extension |
| Carcass depth, island west row | **586** bay, so the side depth is 586 − 18 front − 9 (half the central back) = **559** | Gridfinity depth, see below. Was 600 / 573 |

### Drawers: MAXIMERA

IKEA's own pages:

- [IKEA Sverige, “Vad är innermåtten på MAXIMERA lådor?”](https://www.ikea.com/se/sv/customer-service/knowledge/articles/2f2d5df3-50gg-4939-gfef-150779b2c4e2.html): drawer 40 × 60 inside 28.0 × 50.4 cm, 60 × 60 inside 48.0 × 50.4, 80 × 60 inside 68.0 × 50.4 (37 deep: 30.9 inside).
- [MAXIMERA drawer, low, 60×60](https://www.ikea.com/se/en/p/maximera-drawer-low-white-20204628/): width 56.4, depth 54.2, height **7.8** cm, frame 60 × 60. The 80 × 60 low drawer is 76.4 wide. [Medium 60×60](https://www.ikea.com/gb/en/p/maximera-drawer-medium-white-60285038/): height **14.4**. [High 60×60](https://www.ikea.com/gb/en/p/maximera-drawer-high-white-30285025/): height **21.2**.
- [MAXIMERA low drawer with front 60×60×10](https://www.ikea.com/se/en/p/maximera-low-drawer-with-front-s49282673/): “System, height: 10 cm”, with a 60 × 10 front. IKEA's [inner-drawer article](https://www.ikea.com/se/en/customer-service/knowledge/articles/925bf3bb-b393-4967-g3d6-b8d7gc065g90.html): “a low drawer is 10 cm high, a medium drawer is 20 cm high, and a high drawer is 30 cm high.”

Derived. The drawer's outer width equals the frame's clear width (56.4 = 60 − 2 × 1.8; 76.4 = 80 − 2 × 1.8), which also confirms the **18 mm METOD side**:

| Frame | Clear (frame − 36) | Inside width | Width deduction | Inside depth | Depth deduction (600 frame) |
| --- | ---: | ---: | ---: | ---: | ---: |
| 40 × 60 | 364 | 280 | 84 | 504 | 96 |
| 60 × 60 | 564 | 480 | 84 | 504 | 96 |
| 80 × 60 | 764 | 680 | 84 | 504 | 96 |

The same at every width, so the model subtracts 84 from our clear width and 96 from our side depth (“subtract the same from whatever our side is”). The 480 is measured at the bottom: MAXIMERA's steel sides slope out, so it is wider higher up. The pull-outs on the west run follow the same rule; their box sizes changed with it (see “Gridfinity drawers”).

## Worktop and cladding

Petr, 2026-11-12:

> Its silestone maple color. It has an overhang of 300 over the cabinets. The sides of the kitchen islands are also clad in the same silestone.

and straight after:

> 30mm overhang, sorry

and on 2026-11-13:

> Tiny change along with this PR: make the silestone overhangs only 20mm, not 30mm.

| Item | Value | Source |
| --- | --- | --- |
| Material | Silestone **Blanco Maple** (Cosentino, Tropical Forest series, a mottled white quartz) | **Petr** (“silestone maple”). Blanco Maple is the only Silestone colour named Maple ([Cosentino](https://www.cosentino.com/en-ie/colours/silestone/blanco-maple)) |
| Thickness | 20 mm | `guess:`; Blanco Maple comes in 12, 20, 30 mm (**Cosentino**) |
| Top | 930 | **Petr** |
| Overhang past the front faces (fronts and drawer fronts) | **20 mm** (was 30) | **Petr**, 2026-11-13 (30 on 2026-11-12, corrected from 300). Every Silestone run: island, west run, north dining |
| Overhang at the back of a wall run | 0 (against the wall) | `guess:` |
| Island | one piece, **2540 × 1226** (was 2540 × 1260): the 2500 × 1186 body (west row 586 deep, east row 600), + 20 on both long fronts, + 20 at each end over the cladding | derived |
| West-wall run | one piece, **2540 × 620**, y 11.33–13.87 (over the dishwasher slot too, + 20 at each clad end), x 18.80–19.42 | derived |
| North dining run | 20 mm, top 930, 20 front overhang, one slab per base (see “North dining run”) | **Petr**; derived |
| Slab formats | 3270 × 1590 and 3060 × 1410 | **Cosentino**. The island top fits one 3270 × 1590 slab |
| West run end cladding | same as the island ends, both ends (see “West run end cladding”) | **Petr** (“the sides of the west run”) |
| Island end cladding | Silestone Blanco Maple, 20 thick (same as the worktop), floor to the worktop underside (0–910), full worktop depth **1226**, covering the leg zone at the ends | **Petr** (“sides … clad in the same silestone”); thickness and floor-to-underside `guess:` |
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
- `SN-RS1840` is centred on the bay depth (586 since 2026-11-13), so its cut-out runs 95–491 behind the bay front, 115–511 from the worktop's front edge. `guess:` The plan's rectangle sits a bit further forward. Its yaml `Origin` moved 7 mm east with the bay centre.
- Without a manufacturer cut-out, `Pset_Sink` falls back to the bowl less 2 mm a side (`kitchen_cabinet.SINK_CUTOUT_INSET_MM`), which is the Teka pattern. `guess:`
- The rounded corners (R13) are in the IFC profile (chords, 6 per corner) and in the 3D model.
- On the plan, the island has one sink card and one green rectangle. The two green circles in a rectangle on the second 600 were read as “two round bowls” before; they are the hob (see below).
- The disposers (EcoMaster EVO3) and the taps (Hansgrohe M71 on the west run, Aquno Select M81 on the island) are modelled since 2026-11-12: see “Appliances and sink fittings”.

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
| Through cut-out | 600 × 500, centred on the bay along the run (the bay is 607, so 3.5 inside each bay line) | Miele |
| Rebate | 624 × 524, 5.5 deep, around the cut-out | Miele |
| Cut-out front edge | 50 behind the bay front face (70 from the worktop edge). It was the 500 cut-out centred on the 600 bay depth; the bay is 586 now and `FrontOffset` stayed 50 | `guess:` |
| Cut-out to the worktop's far (east) edge | **656** (was 680; ≥ 50 required) | derived, checked by the model |
| Glass | 620 × 520 × 4, top at 930 | Miele |
| Housing | 533 × 427, from 879 to 926 | Miele (51 installation height) |
| Hob underside | **879**, 31 below the carcass top (910) | derived |
| Front rail in SF-I600b | **left out**: the housing (86.5–513.5 behind the front face) drops into the rail (18–98) | `guess:` |
| Drawers | three: fronts 197 / 97 / 507, boxes MAXIMERA medium 144 (713–857), low 78, tall 400. Housing 533 in a 589 clear, 28 a side | yaml, see “Gridfinity drawers” |

If a bay under a hob has drawers, the top drawer box is cut down to 8 mm below the hob underside (`MinDrawerGap`), and the export stops if that leaves less than `BoxMinHeight`. The top box ends at 857, 22 below the hob, so nothing is cut. A 100 band under the hob would stop the export (61 mm to the limit, the low box is 78).

In IFC the worktop's rebate is a second extrusion layer. The slab is one 14.5 mm layer with the through holes and one 5.5 mm top layer with the rebate. In the 3D model the rebate is a pocket.

`open:` surface-mounted or flush-fit (Petr). Surface-mounted is `Mounting: SurfaceMounted`: the glass then rests on the stone (top 934) and there is no rebate. `open:` the cut-out's position in the bay depth. `open:` fan airflow (the air-intake base panel holes) is not modelled.

## West run end cladding

Petr, 2026-11-12: “Oh, and also do the sides of the west run of cabinets.”

Both ends of `KR-WEST` are free: the south end is at OP24's north jamb (y 11.35), the north end at OP25's south jamb (y 13.85). Neither touches a wall or a tall cabinet. So `CladEnds: true`, the same rule as the island:

| Piece | Size (mm) | Where | Group |
| --- | --- | --- | --- |
| `KR-WEST-CLAD-S` | 20 × 620 × 910, floor to the worktop underside | y 11.33–11.35, x 18.80–19.42 | SF-C850 |
| `KR-WEST-CLAD-N` | 20 × 620 × 910 | y 13.85–13.87 | SF-A600 (the dishwasher slot: the stone is its north side) |

The worktop runs 20 further at each end, flush with the cladding: 2500 → **2540**, y 11.33–13.87. `IfcCovering` `CLADDING`, part of the `KR-WEST` assembly.

`open:` the two 20 mm pieces and the worktop ends now stand 20 mm in front of the OP24 and OP25 door openings (the run filled the jamb-to-jamb 2500 with 0 clearance). Check the door frames and leaves; the alternative is to shorten the run's bays by 40.

## North dining run

Petr, 2026-11-12: “And also do the north cabinets (in the dining area in the same silestone).”

`KR-DN` is a kitchen run over the four dining bases, west to east: SF-F052 (300 × 200, in front of pier W-052), SF-DN (2700 × 450), SF-F053 (300 × 200), SF-DN70 (70 × 450). They are oak boxes, not METOD carcasses, so the run uses `Carcass: Box`:

- **Each base stays one oak body, cut down under the stone.** Body top 930 → **910**, so the counter stays 930. The body is `<bay>-BODY`, `IfcSystemFurnitureElement` `USERDEFINED`, material “natural oak”, and the only member of its bay group. I picked this over keeping the oak top and swapping it for stone: the height comes from the bay box and the worktop thickness, so a thicker stone lowers the body by itself.
- **Worktop** `KR-DN-WORKTOP`: 20 mm Silestone Blanco Maple, top 930, 20 mm overhang at the front (y 15.13; 30 and y 15.12 until 2026-11-13). It is one part with one slab per base, because the depth steps at the piers:

| Slab | x | y | Size (mm) |
| --- | --- | --- | --- |
| over SF-F052 | 22.15–22.45 | 15.13–15.35 | 300 × 220 |
| over SF-DN | 22.45–25.15 | 15.13–15.60 | 2700 × 470 |
| over SF-F053 | 25.15–25.45 | 15.13–15.35 | 300 × 220 |
| over SF-DN70 | 25.45–25.52 | 15.13–15.60 | 70 × 470 |

- **No end cladding: no side is exposed.**
  - The west end of SF-F052 abuts SF-T4, the kitchen tall cabinet, which already overlaps the filler by 8 mm.
  - The east end of SF-DN70 abuts SF-LB, the counter behind the sofa. Since 2026-11-13 that counter is also 930 (`KR-LB`, oak veneer), so the old 110 mm strip of SF-DN70's east face (800–910) is gone: the two bodies meet flush at 910 and the two tops meet at x 25.52. The joint between the Silestone and the oak veneer is `open:` (Petr: “We'll work out the details of where the two materials connect later”).
  - The sides between the bases face the piers.
- The real stone would be one notched piece (or joints at the piers); the model's slabs only show the outline. `open:` joints.

## Backsplash

Petr, 2026-11-12: “As well as the back wall above countertop, below top cabinets, also in silestone (12.5mm or whatever the thin one for wall cladding is)” and “back wall for both west and north”. Blanco Maple comes in 12, 20 and 30 (**Cosentino**), so the thin one is **12 mm**.

| Piece | Where | Size (mm) | Top | Source |
| --- | --- | --- | --- | --- |
| `KR-WEST-BACKSPLASH` | west wall, on the west worktop, y 11.35–13.85 (OP24 to OP25 jamb, not over the clad ends' extra 20), x 18.800–18.812 | 2500 × 12 × **630**, 930 → **1560** (was 620, → 1550) | underside of SF-CH850 / SF-BH800 / SF-AH850 | derived by `kitchen_cabinet` (`Backsplash: true`): the lowest box over the strip |
| `CV-BS-DN` | north wall behind SF-DN, x 22.45–25.15, y 15.588–15.600 | 2700 × 12 × 630, 930 → 1560 (was 620, → 1550) | underside of SF-DH | yaml `coverings` |
| `CV-BS-R052`, `CV-BS-R053W` | the piers' faces facing each other in the dining bay, y 15.35–15.588 | 238 × 12 × 630 each | under SF-DH | `guess:` the stone wraps the piers |
| `CV-BS-P052` | front of pier W-052 over filler SF-F052, x 22.158–22.462, y 15.338–15.35 | 304 × 12 × 630 | **1560, `open:`** (nothing above) | `guess:` wrap |
| `CV-BS-P053` | front of pier W-053 over filler SF-F053, x 25.138–25.462 | 324 × 12 × 630 | **1560, `open:`** | `guess:` wrap |
| `CV-BS-R053E` | W-053's east face over SF-DN70, x 25.450–25.462, y 15.35–15.588 | 238 × 12 × 630 | **1560, `open:`** | `guess:` wrap |
| `CV-BS-DN70` | north wall over SF-DN70, x 25.462–25.52 | 58 × 12 × 630 | **1560, `open:`** | |

- The north pieces stop at 1560 wherever nothing hangs above, the same top as under SF-DH and the west run (1550 until 2026-11-13, when the wall cabinets moved up 10). The west strip follows the cabinets by itself; the north pieces are yaml `coverings` and were edited by hand. `open:` Petr to confirm that top.
- SF-LB, the counter behind the sofa, gets no backsplash: the bookshelf's oak lamella back is on that wall from 980 (850 before the counter rose to 930). `open:` the 50 mm strip of wall between the 930 counter and the bookshelf.
- The north backsplash stands on the dining run's stone worktop (`KR-DN`, see “North dining run”). It stays plain `IfcCovering` in the yaml, because the run's two depths (200 at the piers, 450 between) would need a stepped strip.
- Pier W-052's front piece starts at SF-T4's east face (x 22.158), not the pier edge, because T4 already nicks the pier by 8 mm.

## Gridfinity drawers (2026-11-13)

Petr, 2026-11-13, after a plan for sizing the island drawers' insides to the Gridfinity grid (42 mm pitch, inside n × 42 + 1 mm):

> On Gridfinity: cleanup the issues you've found. Model this after maximera (so if 600 ikea metod has a certain maximera inner size, subtract the same from whatever our side is). Also assume Metod material thicknesses for now (although its a monoblock, so the woodworker might ask for thicker material). When considering depth, always round down (i.e. make the whole island a bit shallower to fit gridfinity grid, don't make it any deeper). Add gridfinity baseplates to each drawer so that I can see them in the 3D model.
>
> Tiny change along with this PR: make the silestone overhangs only 20mm, not 30mm.

and:

> make the top drawers maximera's shallowest variant. The bottom drawer can grow by thet leftover amount.

What it means here:

- **Thicknesses: METOD**, 18 mm carcass board, dividers and central back (`BoardThickness`). `open:` the woodworker may want thicker boards for a monoblock; rerun `scripts/gridfinity_fit.py` and adjust the bay boxes.
- **Inside: MAXIMERA deductions**, clear width − 84 and side depth − 96 (see “Drawers: MAXIMERA”).
- **Target:** inside width n × 42 + 1 and depth m × 42 + 1 (`GridfinityPitch`, `GridfinityPlay`). Width: the nearest n; the shared divider moves, so a bay's clear width changes 1:1 with its width. The west row stays 2500: SF-I300 takes the difference, so the sink bay SF-I500a does not move. Depth: always round down, the bay gets shallower.
- Bays with `Pset_Drawers.Gridfinity: true`: SF-I600a, SF-I500b, SF-I600b. The model checks the fit and writes an `open:` note when a drawer is off the grid. `scripts/gridfinity_fit.py` prints the bay width and depth that would make it exact.

| Bay | Width (old → new) | Clear | Drawer inside | Grid | Fronts (old → new) |
| --- | --- | ---: | --- | --- | --- |
| SF-I500a (sink) | 500 → 500 | 473 | — | — | slab, unchanged |
| SF-I600a | 600 → **607** | 589 | 505 × 463 | 12 × 11 | 597 × 197 / 197 / 407 → **604 × 97 / 97 / 607** |
| SF-I500b | 500 → **481** | 463 | 379 × 463 | 9 × 11 | 497 × 197 / 197 / 407 → **478 × 97 / 97 / 607** |
| SF-I600b (hob) | 600 → **607** | 589 | 505 × 463 | 12 × 11 | 597 × 197 / 197 / 407 → **604 × 197 / 97 / 507** |
| SF-I300 | 300 → **305** | 278 | — | — | slab 297 → 302 |

- SF-I500b rounds down to 9 cells (−19 to the bay) because 10 cells would need +23.
- **Depth.** The side depth was 573 (600 − 18 − 9), so the inside was 477, which is 11 cells (463). The west row's bays go **600 → 586** deep, the side depth 559. The west faces move 14 east (x 20.554 → 20.568). The central back (x 21.154) and the east row stay where they were: the east row has no drawers yet, so it keeps its 600. **The island body is 2500 × 1186 (was 1200).**
- **Worktop 2540 × 1226** (was 1260: −14 body, −2 × 10 overhang). End cladding 20 × 1226 × 910, still flush with the worktop's ends and long edges (it follows the worktop's depth).
- The hob bay's centre moves 8.5 north (y 11.900 → 11.9085), and the cut-out and housing move with it. The sink bay does not move along the run. The sink, disposer and tap move 7 east with the bay's depth centre.
- Box side heights by Petr's “shallowest variant”: the top two drawers are MAXIMERA low (100 band, 78 box), and the bottom drawer takes the rest (610 band, 500 box, front − 110).
- **Under the hob the top band stays 200.** A 100 band ends at 810, and the hob limit is 871 (879 − Miele's 8), so the 78 low box does not fit (61 mm). The export stops on it. SF-I600b is therefore **200 / 100 / 510**, and its top box is a MAXIMERA medium (144, 713–857). **Its front lines (710, 610) no longer line up with the neighbours' (810, 710).** One alternative that keeps them aligned is a fixed 97 blind front under the hob plus two drawers (100 + 610); not done.
- The west run's pull-outs follow the same MAXIMERA rule. SF-A250's box is 177 × 516 (was 197 × 550), SF-B800's 736 × 516 (was 756 × 550), and SF-C850's 777 × 516 (was 797 × 550). Their heights are unchanged (front − 110; SF-B800 still trimmed under the disposer).

### Baseplates

Each Gridfinity drawer carries an n × m baseplate on its inside floor, centred. It is drawn as a 1 mm floor plus a 5 mm rib on every grid line (`GridfinityHeight` 5, `GridfinityFloor` 1, `GridfinityRib` 2.5, all `guess:`; a standard plate is about 5 high). It is part of the drawer's mesh and IFC shape, like a pull-out's bins, so it slides with the drawer. The drawer's `Pset_KitchenFront` has `Gridfinity` (for example `12x11`), `InsideWidth`, `InsideDepth`, `InsideHeight` and the slack.

### Height in Gridfinity units (7 mm), above the baseplate

“Side” is up to the top of the box sides. “Clear” is up to whatever stops the bin when the drawer closes: the top rail (892), the hob limit (871) or the box bottom of the drawer above. Bin heights exclude a stacking lip.

| Drawer | Front | Box | Side | Clear |
| --- | ---: | ---: | --- | --- |
| SF-I600a / SF-I500b D1 | 97 | 78 | 57 (8 u) | 58 (8 u) |
| SF-I600a / SF-I500b D2 | 97 | 78 | 57 (8 u) | 79 (11 u) |
| SF-I600a / SF-I500b D3 | 607 | 500 | 479 (68 u) | 571 (81 u) |
| SF-I600b D1 (hob) | 197 | 144 | 123 (17 u) | 137 (19 u) |
| SF-I600b D2 | 97 | 78 | 57 (8 u) | 79 (11 u) |
| SF-I600b D3 | 507 | 400 | 379 (54 u) | 471 (67 u) |

Alternative, only the top drawer shallow (not built): SF-I600a and SF-I500b 100 / 200 / 510 (boxes 78 / 144 / 400: side 8 / 17 / 54 u, clear 8 / 25 / 67 u); SF-I600b 200 / 200 / 410 (boxes 144 / 144 / 300: side 17 / 17 / 39 u, clear 19 / 25 / 53 u).

`open:` the woodworker's board thickness (the fit changes with it); the hob bay's front lines; the east row (no drawers, kept at 600 deep); MAXIMERA's real box height position in its band (`BoxBottomOffset` 3 is `guess:`, and the top box clears the rail by 1).

## Parametric rule

Everything above is computed in `kitchen_cabinet.runs` from the bay boxes (`Origin`, `RefDirection`, `Width`, `Depth`, `Height`, `Elevation`), the run's `Pset_KitchenRun` (any `IKEA_DEFAULTS_MM` key, in metres, plus `WorktopMaterial`, `CladEnds`, `Carcass` (`Box` for whole-body bays), `BodyMaterial`, `PlinthKind` (`Legs` or `Board`), `Backsplash`, `BacksplashThickness`, `BacksplashTop`, `BacksplashMaterial`) and each bay's `Pset_Fronts` (`Layout`, `Contents`: see “Fronts and interiors”) or the older `Pset_Drawers` (`NominalHeights` in metres top to bottom, one `*` for the rest; `Contents` separated by `;`), plus the built-ins' `Pset_BuiltIn`. A bay may override the drawer and front values in its own `Pset_KitchenCabinet`. Change a bay's width and its dividers move, both neighbours' clear widths and drawer boxes follow (drawer insides are the clear width and side depth less the MAXIMERA deductions, Gridfinity baseplates follow the inside), and the worktop grows; change the counter height or the worktop thickness and the carcass, the `*` drawer and the cladding follow. Rows that stand back to back (same back plane, fronts facing away) share one central back; a run with `CladEnds` gets stone on both ends. A sink's cut-out comes from its `Pset_Sink` and follows the sink box. A hob follows its bay (`Pset_Hob`): move or widen the bay and the cut-out, rebate, glass and housing move with it. The model stops the export if the hob comes closer than `MinBackEdge` to the far edge. A backsplash runs the worktop's length, from the worktop top up to the lowest box hanging over it. A `lift` band takes its cabinet height, width and depth from the bay and is checked against Blum's ranges for its fitting; change the bay and the fronts, mechanisms, weight, power factor and open clearance follow.

## Tap to open

In the web viewer a tap or click on a drawer or pull-out slides it out by its extension along the front normal (about half a second, ease-in-out, the same animation as the doors), and a second tap slides it back. A tap on a cabinet door swings it 90° outward about its hinge edge, like a room door. Records come from the model (`docs/models/ground_floor.doors.json`: `kind: drawer` for each drawer or pull-out part such as `SF-I600a-D1`, `kind: hinged` with `element` for each door leaf such as `SF-T2-DOOR1`); the viewer only plays them (`src/blueprints/viewer/doors.js`, `collectDoorHosts` takes any record with an `element`). A door's mesh is the leaf plus its door racks, fused, so they swing together.

## Fronts and interiors (2026-11-12)

Petr, 2026-11-12:

> Once thats merged, we're in a good place, and you can proceed with modeling all the cabinets and all the living room furniture thats described in my sketch (so all the drawers etc.). Leave untouched only what isnt clear or isnt described. Emphasis on still keeping everything parametric, as future tweaks are expected. This a big project, dont hesitate to put in appropriate effort to get it right.

The sketch is [`KitchenPlan.jpg`](../../inputs/ground_floor/KitchenPlan.jpg). Every note on it was read in full; the Czech is quoted as written (no diacritics), the translation follows. What a note describes is modelled. What it leaves open keeps its plain slab front and is listed as `open:`. Sizes the note does not give are IKEA METOD defaults (**IKEA**) or `guess:`.

### How a bay's fronts are described

A bay's `Pset_Fronts.Layout` lists its bands top to bottom, split by `|`. Each band is `<kind> <height> key=value …`. The height is in metres, and one band may be `*` for the rest. `Contents` gives each band's contents, split by `;`. `Pset_Drawers.NominalHeights` (older) is the same as all-`drawer` bands.

| Kind | What it builds | Keys |
| --- | --- | --- |
| `drawer` | A drawer: a front on the 3 mm grid, plus a MAXIMERA-like box (inside = clear width − 84 by side depth − 96, full extension; see “Fronts, boxes, slides”). `Pset_Drawers.Gridfinity: true` adds a Gridfinity baseplate. | — |
| `pullout` | A full-height front with one box behind it, plus the baskets or bins riding in it. | `items=shelves\|bins`, `n=` |
| `door` | One hinged leaf. The rest of the bay is a fixed filler. Adjustable shelves sit behind it. | `hinge=L\|R` (as you face it), `width=` (leaf grid), `filler=L\|R` (default: the hinge side), `shelves=`, `first=` (the first shelf's height over the band floor), `racks=` (door shelves) |
| `doors` | A pair of leaves: the left one hinged left, the right one hinged right. | `shelves=`, `first=` |
| `lift` | A Blum AVENTOS lift-up front (HF: a bi-fold pair), a lift mechanism on each side panel, and the space the front needs open. The export stops outside Blum's ranges. | `fitting=HF\|HS\|HL\|HK\|HK-S\|HK-XS`, `upper=` (HF upper front, metres), `shelves=`, `first=`, `density=` (kg/m³) |
| `niche` | An appliance niche. The height is the clear niche height. A board goes under it. | `clear=` (metres) narrows the opening with a packer on each side |
| `front` | One slab front (a band the plan does not describe). | — |
| `none` | Nothing. | — |

- A board separates two bands unless both are drawers.
- Drawer and pull-out boxes stop 10 mm under any obstacle above them: a sink bowl, a disposer, or 8 mm under the hob (`ObstacleClearance`, `guess:`). The box records how much was cut (`Trimmed`).
- The new IKEA-like defaults are in `IKEA_DEFAULTS_MM`: `ShelfSetback` 20, `RackDepth` 80, `RackHeight` 70, `RackInset` 40, `BinGap` 10. All are `guess:`.
- In IFC, every front, door, shelf, board, filler and packer is a run part, `IfcSystemFurnitureElement` PANEL. Pull-outs are USERDEFINED, like drawers. Each one has `Pset_KitchenFront` (Zone, Kind, Hinge, Contents, box sizes …).
- Doors are `Door` parts with their hinge edge, so the viewer can swing them.

### Bay by bay

The quoted notes are the yellow sticky notes next to each bay on KitchenPlan.jpg.

| Bay | Note (Czech, as written) | Translation | Modelled |
| --- | --- | --- | --- |
| SF-I500a (island sink) | „vlevo prkynka / vpravo cednik do drezu (a drtic) / madlo na uterku / SBox by mel trcet doprava, coz nejde, ma nakou vuli a de pootocit, ale musi se vyhnout drtici, snad to vyjde“ | left: cutting boards / right: sink strainer (and the disposer) / towel-bar handle / the sBox should stick out to the right, which is not possible; it has some play and can be turned, but it must avoid the disposer, hopefully it works out | The slab front is unchanged. Disposer `EA-EVO3-I` hangs under the bowl. Tap `SN-TAP-I` stands behind the bowl. `open:` door or pull-out, and the split between boards and strainer. `open:` the towel-bar handle. `open:` the sBox (not modelled). |
| SF-I600a | „noze / naradi (lis na cesnek, hmozdir, vaha, ..) / dole nevim 🤷“ | knives / tools (garlic press, mortar, scales …) / bottom: don't know | Three drawers, **100 / 100 / rest (610)** since 2026-11-13 (Gridfinity drawers). Fronts 604 × 97 / 97 / 607. |
| SF-I500b | „koreni / oleje, octy, mouky, cukry, dochucovadla / hrnce“ | spices / oils, vinegars, flours, sugars, seasonings / pots | Three drawers, **100 / 100 / rest (610)** since 2026-11-13. Fronts 478 × 97 / 97 / 607. Boxes 78 / 78 / 500 high. **`open:` oil and vinegar bottles now go in a 100 drawer (a 78 box); they did not stand in the old 90 box either.** |
| SF-I600b (hob) | „pribory / varecky, sterky, naberacky / panve“ | cutlery / wooden spoons, spatulas, ladles / pans | Three drawers, **200 / 100 / rest (510)** since 2026-11-13. Fronts 604 × 197 / 97 / 507. The top box (MAXIMERA medium, 713–857) stays under the hob limit (879 − 8 = 871). |
| SF-I300 | „alobal, folie, spejle, pytliky“ | foil, cling film, skewers, bags | Slab front, `Contents` only. `open:` one bullet, so one drawer or a pull-out? |
| SF-E600a … SF-E700 (island east row) | Black card: „Jak vyresit detail spodniho soklu vs. dock pro robota? …“ (in full under “Island east row”) | Questions only | Unchanged. `open:` everything (see below). |
| SF-A250 | Note A: „dole vlevo suplik uklid (mycka, jar, odmastovac, houbicky)“ | bottom left: cleaning drawer (dishwasher tabs, washing-up liquid, degreaser, sponges) | A full-height pull-out (front 247 × 807) with 3 baskets. The basket count is `guess:`. |
| SF-A600 | Note A: „dole vpravo mycka“ | bottom right: dishwasher | Unchanged: the niche for the Bosch SBD6ECX12E. |
| SF-B800 (west sink) | Note B: „800 / dole vlevo kos, vpravo kompost / nahore talire / kose se musi vyhnout drtici, to se proste bude resit az skrinky budou“ | 800 / bottom left: bin, right: compost / top: plates / the bins must avoid the disposer, that will be solved once the cabinets exist | One full-height pull-out (front 797 × 807) with two bins (`guess:` one pull-out for both). The disposer `EA-EVO3-W` hangs under the bowl. The pull-out box stops 10 under it, so it is only **207 high (493 cut)**. Tap `SN-TAP-W` is modelled. `open:` the bin-vs-disposer conflict. Petr's own note defers it, and EcoMaster's manual suggests the disposer between two bins or a lower bin under it. |
| SF-C850 | Note C: „900 / dole trideny odpad“ | 900 / bottom: sorted waste | A full-height pull-out (front 847 × 807) with three bins. The bin count is `guess:`. |
| SF-AH850 | Note A: „nahore sklenice“ | top: glasses | Blum AVENTOS HF lift, two fronts 847 × 447, two shelves (since 2026-11-13; two doors before). The shelf count is `guess:`. |
| SF-BH800 | Note B: „nahore talire“ | top: plates | AVENTOS HF lift, two fronts 797 × 447, two shelves, as above. |
| SF-CH850 | Note C: „nahore tycovy mixer, velke misky, odmerky (vsechno co se musi mejt ale moc se nepouziva)“ | top: stick blender, big bowls, measuring cups (everything that needs washing but is rarely used) | AVENTOS HF lift, two fronts 847 × 447, two shelves, as above. |
| SF-T1 | „dvere 60L, sirka skrine az ke zdi (~75) / dole napoje, basy od piva / nahore plechovky, vyvary, trvanlive potraviny“ | door 60 hinged left; cabinet width up to the wall (~75) / bottom: drinks, beer crates / top: cans, broths, long-life food | One 600 door, hinged on the left (west). The other 150 is a fixed filler (a 147 front) on the hinge (wall) side (`guess:`; the hinge needs the filler there to clear the wall). Four shelves: the first 400 over the floor for beer crates, the rest even (`guess:`). |
| SF-TF (new, over the fridge) | Fridge note: „naproti pruchodu (ne v rohu) / s pripojenim na vodu / s vyrobnikem triste / 4 dvere / nahore prislusenstvi od robota, ryzovar“ | opposite the passage (not in the corner) / with a water connection / with an ice crusher / 4 doors / above: food-processor accessories, rice cooker | New bay over the Whirlpool, x 19.55–20.458, from 1926 (fridge top 1876 + 50, `guess:`) to 2450, fronts flush with the tall run. Two doors, no shelf (a rice cooker is tall, `guess:`). |
| SF-T2 | „nahore dvere 60R / police na dverich / nahore ryze, testoviny, tortilly, asie, peceni“ | top: door 60 hinged right / shelves on the door / top: rice, pasta, tortillas, Asian, baking | The upper band is a door hinged on the right (the T3 side), with 4 door racks and 4 shelves set back behind the racks. The lower band, 810 (level with the base carcasses, `guess:`), is not described: a slab, `open:`. |
| SF-T3 | Cards: „Miele DGC 7465 HCX Pro Grafitově šedá“, „M 2230 SC Obsidian černá“. Note: „zvazit kombinovanou mikrovlnku s horkovzduchem, ale urcite ne druhou parni troubu s pripojenim na vodu“ | consider a combination microwave with hot air, but definitely not a second plumbed steam oven | The steam oven sits in a 593 niche with its board at the counter line (910). The microwave sits in a 356 niche above it. Each niche is narrowed to 564 by 9 mm packers. The top band (to 2450) and the bottom band (100–910) are slabs, `open:`. The order (microwave on top) and the niche heights are `guess:`, inside Miele's ranges. `open:` the combi-microwave idea; the M 2230 SC stays as carded. |
| SF-T4 | „zbyva sirka cca 50 (pokud je lednice na stredu) / otvirani nevim 🤷 [Dreame X40 Master link], mozna suplik? / sladkosti, bramburky, orisky / musi byt sirka 60 pokud ma dole byt lednicka na sudy“ | about 50 wide left (if the fridge is centred) / opening: don't know, maybe a drawer? / sweets, crisps, nuts / must be 60 wide if a keg fridge goes at the bottom | Unchanged slab, `Contents` only. `open:` the opening, the keg fridge and the width. |
| SF-DN (dining run) | „nahore hrnky / horni skrinky o dost vejs nez ve studii / kavovar s pripojenim na vodu a odpad / 2 nebo 3 mlynky na kafe“ and „pecivo / doplnky stravy / leky“ | top: mugs / upper cabinets considerably higher than in the study / coffee machine with water and drain / 2 or 3 coffee grinders; and bread / supplements / medicines | Countertop: the Ninja KT200EU kettle and one Eureka Mignon Libra grinder, at the cards' places. `open:` the coffee machine (no model named), grinders 2 and 3, and the height of the upper cabinets (SF-DH is unchanged). `open:` where bread, supplements and medicines go (no bay named). |

### Island east row

The black card by the island's east row, in full:

> Jak vyresit detail spodniho soklu vs. dock pro robota? Asi nejlepsi mit celou tudle stranu skrinek az k zemi viz obrazek. / Na druhy strane sokl byt musi, dost vysoky na robota (~10, nutno potvrdit). Bude-li ostrov oblozen deskou architekt urcite zakaze vyrez na spodni sokl, takze se tam bude chytat bordel. / Budou vsude uzky skrinky s dvirkama, nebo supliky? Jestli skrinky, tak musime nekam udat vakuovacku, jinak muze bejt v jednom ze supliku. / robota pobliz odpadu ze drezu, nejlip mozna vypada na prostredek?

Translation:

> How to solve the plinth detail versus the robot dock? Probably best to have this whole side of cabinets down to the floor, see picture. / On the other side there must be a plinth, high enough for the robot (~10, to be confirmed). If the island is clad in stone, the architect will surely forbid a cut-out for the plinth, so dirt will collect there. / Will there be narrow cabinets with doors everywhere, or drawers? If cabinets, we need to put the vacuum sealer somewhere; otherwise it can go in one of the drawers. / The robot near the sink waste; maybe the middle looks best?

It is all questions. The east row is unchanged: four slab fronts on the 100 legs.
- `open:` east fronts down to the floor.
- `open:` the dock place.
- `open:` doors or drawers.
- `open:` the vacuum sealer.

The red bay numbers on this row are hidden under the cards. The card (and the link on the SF-T4 note) shows the **Dreame X40 Master**, while “Plinth: open legs” above has Petr's robot as the X60 Pro Master. **These do not match.** Nothing was changed.

### Appliances and sink fittings

Built-ins are yaml elements with no box: `electricAppliances` or `sanitaryTerminals` with a `Pset_BuiltIn`.

- `models/kitchen_cabinet.py` lays each one out:
  - `Kind: Niche` with `Bay` and `Zone`: centred in the niche, standing on its board. The fascia is on the fronts' plane and the body fills the niche.
  - `Kind: Disposer` with `Sink`: a cylinder hung from the bowl's drain, centred on the bowl (`guess:`).
  - `Kind: Tap` with `Sink`: a body 50 round, `HoleOffset` 40 behind the bowl, an arm to `SpoutReach`, and a nozzle down to `SpoutHeight` (`guess:` shape).
- The export stops if a niche falls outside the maker's `NicheHeightMin/Max` and `NicheWidthMin/Max`, or is shallower than `NicheDepth`.
- In IFC the yaml product is kept (its class, PredefinedType, `Pset_ManufacturerTypeInformation` and room containment), not aggregated into the run. It gets the laid-out body and `Pset_KitchenBuiltIn`, and it joins its bay's group, as the hob does.

| Id | Product | Sizes used (W × H × D, mm) | Source |
| --- | --- | --- | --- |
| `EA-DGC7465` | Miele DGC 7465 HCX Pro, combi steam oven | 595 × 596 × 567. Niche 560–568 × 590–595 × 550. | [Miele data sheet](https://media.miele.com/downloads/e-/de/FS_12100360_DED_DE-de-DE.pdf), [miele.at](https://www.miele.at/product/12100360/dgc-7465-hcx-pro) |
| `EA-M2230` | Miele M 2230 SC, built-in microwave, Obsidian black | 595 × 372 × 310. Niche 562–568 × 350–362 × 310. Door hinged on the left. | [Miele data sheet](https://media.miele.com/downloads/z-/cs/FS_11103410_CZC_CZ-cs.pdf), [miele.cz](https://www.miele.cz/product/11103410/vestavna-mikrovlnna-trouba-m-2230-sc-obsidian-cerna) |
| `EA-EVO3-W`, `EA-EVO3-I` | EcoMaster STANDARD EVO3, food waste disposer | Ø145, 368 high. Sink hole Ø90. | [gastrozone.cz](https://www.gastrozone.cz/ecomaster-standard-evo3.html), [manual](https://www.nakuptedoma.cz/user/related_files/uzivatelsky-manual-em-evo3-cz-3.pdf) |
| `SN-TAP-I` | Hansgrohe Aquno Select M81 170, pull-out spray, sBox (73831000) | 390 high, spout 165 high, reach 220, hole Ø35 at most 50 from the bowl back. | [hansgrohe.com](https://www.hansgrohe.com/articledetail-aquno-select-m81-kitchen-mixer-170-pull-out-spray-2jet-sbox-73831000) |
| `SN-TAP-W` | Hansgrohe M71 M7117-H320, pull-out spray, sBox (73816000) | ComfortZone 320, hole Ø35. Total height 430 and reach 220 are `guess:` (not found). | [sanitino.cz](https://www.sanitino.cz/hansgrohe-m71-drezova-baterie-m7117h320-s-vysuvnou-sprskou-sbox-chrom-73816000) |
| `EA-KT200` | Ninja KT200EU kettle, on SF-DN | 235 × 210 × 135 | [multitronic.fi](https://www.multitronic.fi/en/products/4424285) |
| `EA-LIBRA` | Eureka Mignon Libra grinder, on SF-DN | 124 × 390 × 192 | [eureka.co.it](https://www.eureka.co.it/en/products/eureka+1920/prosumer+grinders/libra+range/117/) |

- **The monoblock's oven column is 582 clear between its shared dividers. Both Miele niches want 560–568.** SF-T3 therefore gets a 9 mm packer on each side of each niche (`clear=0.564`). The export rejects the niche without them. A real woodworker might use 18 mm double sides instead.
- The microwave's 372 fascia laps 8 over the niche at the top and bottom. The fronts above and below stop a gap short of the fascias.
- The sBox (the hose box under the island tap) is not modelled. Petr's note says it has to be turned to avoid the disposer: `open:`.
- The kettle and grinder sit 50 off the backsplash, at the cards' places along SF-DN (`guess:`). They are members of SF-DN's group because they stand on its top.

### What changed on existing items (2026-11-12)

No carcass size or position changed. These are the fronts:

| Item | Before | Now |
| --- | --- | --- |
| SF-I500b | one slab 497 × 807 | three drawers 497 × 197 / 197 / 407 (2026-11-13: 478 × 97 / 97 / 607, see “Gridfinity drawers”) |
| SF-I600b | one slab 597 × 807 | three drawers 597 × 197 / 197 / 407 (2026-11-13: 604 × 197 / 97 / 507) |
| SF-A250 | slab 247 × 807 | pull-out (same front) with 3 baskets |
| SF-B800 | slab 797 × 807 | pull-out (same front) with 2 bins, box 207 high under the disposer |
| SF-C850 | slab 847 × 807 | pull-out (same front) with 3 bins |
| SF-AH850, SF-CH850 | one slab 847 × 897 | two doors 422 × 897 (L, R), 2 shelves |
| SF-BH800 | one slab 797 × 897 | two doors 397 × 897, 2 shelves |
| SF-T1 | one slab 747 × 2347 | door 597 × 2347 hinged L, plus a filler 147 on the west, plus 4 shelves |
| SF-T2 | one slab 597 × 2347 | door 597 × 1537 hinged R with 4 racks, plus 4 shelves, plus a lower slab 597 × 807 |
| SF-T3 | no front (`Front: none`) | top slab 597 × 544, microwave niche 356, steam oven niche 593, bottom slab 597 × 807 |
| SF-TF, KR-TALL-F | — | new bay and run over the fridge, 908 × 524 × 600, two doors 451 × 521 |

2026-11-13 (see “Wall cabinets: lift-up fronts” and “Living-room counter”):

| Item | Before | Now |
| --- | --- | --- |
| SF-AH850, SF-BH800, SF-CH850 bottom / top | 1550 / 2450 | **1560 / 2460** (height 900 unchanged) |
| SF-AH850, SF-CH850 fronts | two doors 422 × 897 (L, R) | AVENTOS HF bi-fold: upper 847 × 447 over lower 847 × 447, 3 gap between |
| SF-BH800 fronts | two doors 397 × 897 | AVENTOS HF: 797 × 447 over 797 × 447 |
| Wall-cabinet shelves | 2 per bay | unchanged: 2 per bay, at 1854 and 2148 (they moved up 10 with the box) |
| Lift mechanisms | — | new: `<bay>-LIFTMECH-L/R`, 30 × 264 × 195 inside each side panel, under the top board |
| KR-WEST-BACKSPLASH | 930 → 1550 | 930 → 1560 |
| SF-DH (north, dining) bottom / top | 1550 / 2450 | 1560 / 2460 (fronts not changed) |
| North backsplash pieces `CV-BS-*` | 620 high, to 1550 | 630 high, to 1560 |
| SF-LB | oak box 4180 × 450 × 800, no top | `KR-LB`: oak body 4180 × 450 × 910 + 20 oak-veneer top, 20 front overhang (4180 × 470), top **930** |
| FN-BK (bookshelf) | 850–2450, 1600 high | **980–2450, 1470 high** |
| The open-door records in `ground_floor.doors.json` | 6 wall-cabinet door leaves | replaced by 3 `kind: "linkage"` records, one per lift front (tap to open, see “Opening in the viewer”) |
| Lever arms | — | new: `<bay>-LIFTARM-L/R`, 16 × 18, from inside each mechanism to the upper front, 120 under the mechanism |

### Discrepancies on the plan

- **The west-wall notes say 900 (“nahore 900, dole 300+600”), 800 and 900, which is 2600. The model has 850 (250 + 600), 800 and 850, which is 2500 jamb to jamb (see “West run end cladding”).** Bays were not resized.
- **The fridge card says “Side by Side”, but the note says „4 dvere“ (4 doors).** The Whirlpool WQ9I MO2L EF box is unchanged.
- **The robot card and the SF-T4 link show the Dreame X40 Master; “Plinth: open legs” has Petr's X60 Pro Master (89 high).**
- The island east row's red widths are hidden under the cards and could not be read.

### guess: and open: (fronts and appliances)

`guess:`
- Drawer heights on SF-I500b and SF-I600b (Petr set the island's top drawers to MAXIMERA low on 2026-11-13).
- Pull-out basket and bin counts (3 / 2 / 3).
- Two shelves per wall cabinet. The lift mechanism box sizes and the 700 kg/m³ front density (see “Wall cabinets: lift-up fronts”).
- The living-room counter's 20 mm oak-veneer top and its 20 mm overhang (the stone runs' 20 since #116).
- SF-T1 filler side, shelf count and the 400 first shelf.
- SF-T2 lower band height of 810 and the counts of 4 racks and 4 shelves.
- SF-T3 niche order and heights (inside Miele's ranges), the 9 mm packers, and the fascia thickness of 18.
- SF-TF's 50 gap over the fridge and its no-shelf interior.
- Disposer and tap positions and shapes. The M71 height and reach.
- Kettle and grinder positions.
- The IKEA-like rack, shelf and bin sizes.

`open:`
- Which AVENTOS type the photo shows (HK top single front or HF bi-fold); HF is modelled because it is the only one that fits 900 (see “Wall cabinets: lift-up fronts”).
- The 10 mm the wall cabinets now reach into the kitchen-gable trap (from 2450) and the north soffit gap (2470) over SF-DH.
- SF-DH's fronts and fitting (2700 wide; AVENTOS takes 1800 at most).
- The Silestone / oak-veneer joint at x 25.52 and the oak top's thickness.
- The lever arm's real geometry (pivot, fixing, telescoping): the drawn arm is placed by eye. Open, the folded lower front passes through the drawn arms.
- SF-I500a front type, the boards/strainer split, the towel bar and the sBox.
- SF-I300: drawer or pull-out.
- Oil bottles in SF-I500b's 100 drawer.
- The bin-vs-disposer conflict in SF-B800.
- SF-T2 lower band.
- SF-T3 top and bottom bands, and the combi-microwave idea.
- SF-T4 opening, width and keg fridge.
- The island east row (plinth vs. robot dock, doors or drawers, vacuum sealer, dock position).
- Coffee machine model, grinders 2–3, the upper dining cabinets “o dost vejs” (much higher) than in the study (SF-DH moved to 1560 with the kitchen wall cabinets on 2026-11-13; whether that is what the note meant is still open), and where bread, supplements and medicines go.
- Countertop items on the west run: „na pultu vlevo odkapavac, vpravo robot, nezaraditelnej bordel z mycky“ (on the counter, left a drip rack, right the food processor, unsortable dishwasher clutter). Not modelled.

## Wall cabinets: lift-up fronts (2026-11-13)

Petr, 2026-11-13, with a photo of a light oak wall cabinet whose large front lifts upward on a Blum AVENTOS fitting:

> - I want this hinge for the top cabinets.
> - I want top cabinets to start at 1560mm from floor.

### Which AVENTOS

Blum's lift systems, from the [catalogue and technical manual 2024/2025](https://publications.blum.com/2024/catalogue/en/44/) and the [AVENTOS overview](https://d2.blum.com/services/BEC003/bro016_ep_dok_bsg_$sen_$aof_$v1.pdf):

| Type | Motion | Cabinet height KH | Width KB | Page |
| --- | --- | --- | --- | --- |
| HK top | stay lift: one front tilts up about its top edge on one lever arm per side, compact box on the side panel, no hinges | 205–600 (Blum recommends 600 at most) | ≤ 1800 | [p. 44](https://publications.blum.com/2024/catalogue/en/44/), [p. 48](https://publications.blum.com/2024/catalogue/en/48/) |
| HK-S / HK-XS | small stay lifts | 180–400 / 240–600 | ≤ 1800 | [overview](https://www.ldlonline.co.uk/media/wysiwyg/others/media/aventos-hf-hks-hkxs-hs-hl.pdf) |
| HL top | lift up: the front rises parallel, staying vertical, on two arms | 300–580 | ≤ 1800 | overview |
| HS top | up and over: the front swings up and over the cabinet top | 350–800 | ≤ 1800 | [p. 32](https://publications.blum.com/2024/catalogue/en/32/), [p. 34](https://publications.blum.com/2024/catalogue/en/34/), [p. 36](https://publications.blum.com/2024/catalogue/en/36/) |
| HF top | bi-fold: two fronts, the upper turns up about the top, the lower folds onto it | 480–1200 | ≤ 1800 | [p. 20](https://publications.blum.com/2024/catalogue/en/20/), [p. 22](https://publications.blum.com/2024/catalogue/en/22/), [p. 24](https://publications.blum.com/2024/catalogue/en/24/) |

**The photo reads as a one-part front on a single lever arm per side, most likely HK top (flagged: Bob did not see the image file itself, only its description). HK top stops at 600 high, HS at 800, and our wall cabinets are 900. The only AVENTOS that takes 900 is HF top, the bi-fold, so HF is what is modelled.** If Petr wants the single front from the photo, the cabinets would have to be at most 600 high (HK top) or 800 (HS top); that is one `Height` and one `fitting=` edit per bay.

### Our wall cabinets against HF top

| Check | Ours | Blum HF top | Source |
| --- | ---: | --- | --- |
| Cabinet height KH | 900 | 480–1200; lever arm set 22F3500 for 600–910 | p. 22 |
| Cabinet width KB | 850 / 800 / 850 | ≤ 1800 | p. 20 |
| Internal depth LT | 324 (350 − 18 front − 8 back) | ≥ 264 | p. 20 |
| Internal height LH | 864 | ≥ 512 with 22F3500 | p. 24 |
| Fronts | 847 (797) × 447 + 3 + 447, 18 thick | symmetrical pair, KH = 2 × FHo + gaps | p. 24 |
| Front weight FG, both fronts | 9.5 kg (850), 9.0 kg (800) | — | oak-veneered chipboard at 700 kg/m³, `guess:` (Blum's chipboard reference is 680, [p. 716](https://publications.blum.com/2024/catalogue/en/716/)); no handle |
| Power factor LF = KH × FG | 8587 (850), 8080 (800) | 2700–13500 → lift mechanism 22F2510 (system screws) or 22F2500 | p. 22 |
| Space above the top, fully open (116°) | **235** (FHo × 0.44 + 38) | | p. 24 |
| Reach in front of the face, open | **464** (FHo × 0.9 + FD × 1.5 + 35) | | p. 24 |

Modelled (`models/kitchen_cabinet.py`, band kind `lift`, `AVENTOS` table):
- Each bay's front is `<bay>-LIFT1` (upper) and `<bay>-LIFT2` (lower), `Role: Lift`, `Pset_KitchenFront` with the fitting, front weight, power factor and the open clearances.
- A lift mechanism `<bay>-LIFTMECH-L` / `-R` on each side panel, just under the top board, 30 off the side, 264 deep, 195 high. `guess:` sizes read off Blum's planning drawings.
- The two shelves stay. Their tops (1872, 2166) are below the mechanisms (from 2247), and the export stops if a shelf would hit one.
- The space the open front needs is `run.clearances` (235 above, 464 ahead) and is drawn in red by `scripts/render_kitchen_run.py`. It is not a solid in the IFC or the viewer.
- A lever arm `<bay>-LIFTARM-L` / `-R` per side, `Role: LiftArm`: a 16 × 18 bar on the inner face of the upper front, from 15 inside the mechanism's underside down to 120 under it. `guess:` placed by eye.
- Tap-to-open in the viewer, below.

### Opening in the viewer

Petr, 2026-11-13: “And make them open too, add the animation for this opening mechanism.”

Each lift front is one `kind: "linkage"` record in `ground_floor.doors.json` (`_linkage_motion` in `models/ground_floor.py`, from the `LiftJoint` that `_lift_motion` in `models/kitchen_cabinet.py` puts on each part). A linkage is a list of joints; each turns its part meshes about a line (`pivot` point, `axis`), by `angles` sampled at 25 even steps from shut to open, relative to a `parent` joint or to the model. The viewer (`doors.js` `bindLinkage`) interpolates them over 900 ms. Any part of it takes the tap.

| Joint | Parts | Line | Motion |
| --- | --- | --- | --- |
| 0 | `<bay>-LIFT1`, upper front | its top edge, on the inner face | 0 → 116° (Blum's largest HF angle), up and out |
| 1, rides on 0 | `<bay>-LIFT2`, lower front | the centre hinge, inner faces | folds back by twice the upper angle, so its bottom edge runs up the cabinet's front plane, until it lies flat behind the upper front (−180° at 90°); then both turn on to 116° |
| 2 | `<bay>-LIFTARM-L/R` | its pivot inside the mechanism | turns to keep pointing at its fixing on the upper front, and telescopes (`stretch`) to reach it |

Simplified: the real HF motion is set by the mechanism's arms and the centre hinges, not by these angles. Shut, everything sits where the model has it; fully open, the fronts end where the clearance box above assumes. A single-front fitting (HK and the small ones) gets joint 0 only (HK 107°); HS and HL are drawn as the same tilt, which is not their real path.

### What 1560 touches

- **The tops are now 2460. The kitchen-gable bass trap (190 deep, `predstena_kitchen` in `models/obyvak_geom.py`) starts at 2450 over the whole west wall, so the 350-deep cabinets reach 10 mm into it.** Not changed: the trap is the obývák roof model's, and Petr's instruction keeps the 900 height. Either the trap starts at 2460–2470 or the cabinets are 890 high (top 2450 as before). `open:`.
- **SF-DH, the north dining wall cabinet, moved with them (1560–2460, a reading of “top cabinets”). The soffit over the north cabinets has its underside at 2470 (`furniture_height` 2450 + `furniture_gap` 20), so the gap over SF-DH is now 10, not 20.** `open:`.
- The open HF fronts rise to 2460 + 235 = 2695 in front of the cabinets (x 19.15–19.61). The west cabinets stand at obývák X 1.1–3.6 m from the window wall, where the sloped ceiling is above the 3020 interior eave, and the trap is behind the cabinet face. No clash.
- Above the worktop: 1560 − 930 = **630** clear (was 620). The 12 mm backsplash follows (930 → 1560).
- The tops no longer line up with the tall run (2450), 10 mm higher. The two do not touch (OP25 is between them).
- OP24 / OP25 (2450 high pocket doors) stay outside the run's jamb-to-jamb plan; nothing changed there.
- There is no hood over the west run (the hob is on the island), so nothing to check there.

## Living-room counter (KR-LB, 2026-11-13)

Petr, 2026-11-13:

> I want the living room part of the counter (behind sofa) to continue at the same 930 height as the dining area. It will be oak veneer, not silestone. We'll work out the details of where the two materials connect later.

| Item | Before | Now | Source |
| --- | --- | --- | --- |
| SF-LB | oak box 4180 × 450 × 800, top 800 | `KR-LB` (`Carcass: Box`): oak body `SF-LB-BODY` 0–910 | **Petr** (930); body = 930 − top, derived |
| Top | the box's own top at 800 | `KR-LB-WORKTOP`, oak veneer, 20 thick, 910–930, 20 front overhang (front edge in line with KR-DN, both 20 since #116) | **Petr** (oak veneer, 930); 20 thick `guess:`, overhang as the stone runs, chosen so the bodies and the front edge line up with the dining run |
| Over the sofa back (760) | 40 | **170** (the overhang's underside, 910, is 150 over it) | derived |
| Bookshelf FN-BK | 850–2450 | **980–2450** | `guess:` the 50 gap it had over the old base; it would have cut 80 into the new counter |

- **The bookshelf had to move: at 850 it sat 80 mm inside the new 930 counter. Its bottom is now 980 (top 2450 unchanged), 130 mm shorter, still three shelves.** Petr did not say this.
- The junction with the Silestone at x 25.52 (SF-DN70 | SF-LB) is two tops butting, the stone 20 and the oak 20, both at 930. `open:` as Petr said.
- The 110 mm strip of SF-DN70 that showed above the old base is gone.
- In the viewer the oak top uses the oak material (label `oak`), not the stone.
- No plinth or legs: like the dining bodies, SF-LB stands on the floor. `open:` (same as KR-DN).
