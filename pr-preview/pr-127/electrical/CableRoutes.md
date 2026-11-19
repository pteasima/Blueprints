# Cable routes

Source: Petr, 2026-11-19 (Cody chat): "Can you guess the cable routes and add the cables? Try one or two rooms first. Editor should let me adjust each segment of a cable. Im not sure if moving a fixture should move its cable, or whether thats a mess to implement. Maybe naively moving the last cable segment is fine and you can readjust it to make physical sense after I send you the edits. Some cables serve multiple fixtures. The cable usually terminates under a lightswitch and from there its either using the fixtures built in cable (e.g. magnetic sensor has 300mm of it own cable) or a short custom cable segment, but Id be ok with skipping those or connectin them in a straight line unless you think its best to model those in detail too."

The pilot covers **1.11 Ložnice** and **1.12 Pokoj**: 26 Soupis cables in 31 routes. The routes are **guesses** from the house rules below, not a design. Petr corrects them in the viewer's edit mode.

## Status (2026-11-19)

Petr's review of the pilot (PR 126, 2026-11-19): "They're not the exact correct routes but pretty close."

| Rooms | Routes | State |
| --- | --- | --- |
| 1.11 Ložnice | 19 (16 cables: 1–5, 7–10, 12–14, 16, 18, 32, 46) | Guessed, reviewed by Petr: close, not exact. Corrections come as edit-mode exports. |
| 1.12 Pokoj | 12 (10 cables: 33–35, 61, 66, 100, 101, 140–142) | Guessed, reviewed by Petr: close, not exact. |
| 1.01–1.10, 1.13–1.17, 1.19–1.23 | none | Pending. Fixtures are placed ([Rooms.md](Rooms.md)); routes not guessed yet. |
| Cables 6, 11 (1.11) | none | Off the plan for now (bedroom YAML header). |

| Board | Where | State |
| --- | --- | --- |
| RS-1 (panel 1) | 1.04 Technická místnost, north face of W-024 | Position from FixturePlan.pdf; size and height guessed. |
| RS-2 (panel 2) | Corridor 1.05, west end, south face of W-022 | Position from FixturePlan.pdf; size and height guessed. |
| Panel 3, panel 4, irrigation board | East wing (plan squares at about x 34.8 / y 9.9, x 34.7 / y 5.4, x 26.0 / y 4.1) | Not modelled; positions to confirm before routing the east rooms. |

Open questions: [Questions.md](Questions.md#cable-routes-pilot-111-112) (board sizes, cable 9's way to the contact, cables 34, 100, 101 against Soupis, the 61/66 riser).

## Files

| File | What |
| --- | --- |
| [scripts/guess_cable_routes.py](../../scripts/guess_cable_routes.py) | The generator: the routing rules as code. It writes the YAML below. |
| [inputs/ground_floor/cable-routes.yaml](../../inputs/ground_floor/cable-routes.yaml) | Boards and routes, next to the fixture YAML. One polyline per route in house metres (x east, y north, z up from the 1.NP floor). |
| `inputs/ground_floor/fixture_overrides.json` (`cables`) | Petr's route edits from the viewer, version 2 ([EditMode.md](EditMode.md#overrides-file)). |
| [src/blueprints/cable_routes.py](../../src/blueprints/cable_routes.py) | Applies the overrides and writes `docs/models/ground_floor.cables.json` for the viewer. `--report` prints the length table. |
| `src/blueprints/viewer/cables.js`, `cableEdits.js` | The viewer layer and the route edits (tests: `cableEdits.test.mjs`). |

`python -m blueprints.export ground_floor` writes the cables JSON too (`CABLE_ROUTES = True` in `models/ground_floor.py`), and so does `python -m blueprints.fixture_overrides merge`. Without a re-export: `python -m blueprints.cable_routes`. After changing the generator: `python scripts/guess_cable_routes.py`, then `python -m blueprints.cable_routes`.

## Model

- **Main route**: from the board (rozvaděč) to the box the cable terminates in, usually a switch box. A cable that ends in a sensor inside a box (C9-R, the mmWave in the C32-V-1 box) has `toBox`, so the box's move drags the end.
- **Tail** (`tail: true`): from that box to another fixture on the same cable (C32 → the corridor button and the door contact, C33/C35 → the contacts). `lead: cable` marks a fixture's own lead or a short custom piece; it is drawn as a straight line or one jog, not routed in detail. A tail is thinner in the viewer.
- **Chained** cable: 141 and 142 start at the C140 lamp (Soupis: "napojen na 140").
- **Boards**: RS-1 (panel 1, north face of W-024 in 1.04) and RS-2 (panel 2, south face of W-022 at the west end of corridor 1.05). The positions come from the purple squares on FixturePlan.pdf (fitted to the house frame through the sockets). The size, 550 × 120 × 900 mm with the bottom at 1.20 m, is an assumption. Panels 3 and 4 and the planned irrigation board are not in the pilot.
- yaml-ifc has `cables` (IfcCableSegment) and `distributionBoards`, but a cable's From/To must be in the same document, and the boards and the room fixtures are in different files. The routes are therefore a viewer layer and not yet in the IFC.

## Routing rules

From the house notes ([PlanNotes.md](PlanNotes.md)):

- "24 V and ethernet go up through ceilings, soffits, and attics, with rare exceptions. All 230 V runs in the floors." Data (UTP) and 24 V light cable run in the ceiling voids, 230 V (the blinds) in the floor. The exterior lamp feed is the exception (assumption 8).
- "Netahej silnoproud a slaboproud dohromady … silnoproud spodem, slaboproud horem." Power and low voltage never share a lane.
- Runs are axis-aligned and follow walls. A cable drops to a wall box inside the wall (60 mm behind the face), so the vertical leg sits in the wall it serves. Under the 1.11 vault the runs follow the slope.

Assumptions (please check):

1. **Voids**: the ceiling runs sit 60 mm above the finished ceiling (+15 mm per lane), the floor runs 60 mm below the floor (−12 mm per lane). Ceilings: 2.50 m in corridor 1.05 and in the 1.11 north band (y 7.95–9.50), 3.00 m in 1.12, the 1.11 vault rising from 2.50 at y 3.275 to 4.875 at the step (y 7.95), assumed mono-slope.
2. **1.11 bedside stacks and strips** (1–5): from RS-2 east through the corridor void, into the 1.12 attic, along it, down inside W-031 (the 1.11/1.12 wall). Shorter than across the 1.11 vault.
3. **Curtain-rail strips 7, 8**: fed at their north end along W-030; the south-east corner feed gave 11 m against 15 m in Soupis.
4. **Cable 9** (mmWave in the door switch box plus the window contact C9-M): modelled as one UTP to the box, then a long tail to the contact through the band and the vault (19.1 m against 15 m). A home run straight to the contact may be what is meant.
5. **Cables 13, 14** come from panel 1 (RS-1) along corridor 1.05 in the soffit.
6. **Cable 12** (the pendant): the last vertical leg is the pendant's own cord.
7. **Blinds 16, 18, 46** (1.11) and **61, 66** (1.12 east facade): floor along the walls, up inside the exterior wall to the motor. 61 and 66 go up in W-002 by the 1.12 south-east corner and along the facade.
8. **Exterior lamp 140**: up into the 1.12 attic, out over the wall plate and down the facade under the insulation (Soupis: "1.12 na pudu, ven nad pozednici"). 141 and 142 run on from the 140 lamp along the facade, under the eaves. 230 V in the attic is the Soupis exception to the floor rule.
9. Not routed: cable 6 (outdoor buttons) and cable 11 (the entry light), both removed from the plan for now. The sensors inside boxes (C9-R, C33-R) need no tail.
10. Soupis lengths probably include a reserve; differences under 2 m (or 25 %) are not flagged.

## Lengths: modelled vs Soupis

`python -m blueprints.cable_routes --report` (main route plus its tails). **check** = more than 2 m and 25 % off.

| Cable | Room | Routes | Main (m) | Tails (m) | Modelled (m) | Soupis (m) | Δ (m) | Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1.11 | C1 | 11.3 | 0.0 | 11.3 | 12 | -0.7 |  |
| 2 | 1.11 | C2 | 11.2 | 0.0 | 11.2 | 12 | -0.8 |  |
| 3 | 1.11 | C3 | 10.1 | 0.0 | 10.1 | 12 | -1.9 |  |
| 4 | 1.11 | C4 | 9.0 | 0.0 | 9.0 | 10 | -1.0 |  |
| 5 | 1.11 | C5 | 8.9 | 0.0 | 8.9 | 10 | -1.1 |  |
| 7 | 1.11 | C7 | 14.0 | 0.0 | 14.0 | 15 | -1.0 |  |
| 8 | 1.11 | C8 | 14.1 | 0.0 | 14.1 | 15 | -0.9 |  |
| 9 | 1.11 | C9, C9>C9-M | 3.0 | 16.1 | 19.1 | 15 | +4.1 | **check** |
| 10 | 1.11 | C10 | 9.3 | 0.0 | 9.3 | 8 | +1.3 |  |
| 12 | 1.11 | C12 | 12.1 | 0.0 | 12.1 | 16 | -3.9 |  |
| 13 | 1.11 | C13 | 22.4 | 0.0 | 22.4 | 25 | -2.6 |  |
| 14 | 1.11 | C14 | 19.3 | 0.0 | 19.3 | 23 | -3.7 |  |
| 16 | 1.11 | C16 | 10.7 | 0.0 | 10.7 | 10 | +0.7 |  |
| 18 | 1.11 | C18 | 13.1 | 0.0 | 13.1 | 11 | +2.0 |  |
| 32 | 1.11 | C32, C32>C32-V-2, C32>C32-M | 3.0 | 0.5 | 3.5 | 2 | +1.4 |  |
| 33 | 1.12 | C33, C33>C33-M | 4.4 | 0.4 | 4.8 | 5 | -0.2 |  |
| 34 | 1.12 | C34 | 8.7 | 0.0 | 8.7 | 12 | -3.3 | **check** |
| 35 | 1.12 | C35, C35>C35-M | 12.5 | 0.4 | 12.9 | 12 | +0.9 |  |
| 46 | 1.11 | C46 | 17.2 | 0.0 | 17.2 | 16 | +1.2 |  |
| 61 | 1.12 | C61 | 11.6 | 0.0 | 11.6 | 11 | +0.6 |  |
| 66 | 1.12 | C66 | 12.3 | 0.0 | 12.3 | 12 | +0.3 |  |
| 100 | 1.12 | C100 | 7.5 | 0.0 | 7.5 | 12 | -4.5 | **check** |
| 101 | 1.12 | C101 | 7.3 | 0.0 | 7.3 | 12 | -4.7 | **check** |
| 140 | 1.12 | C140 | 12.7 | 0.0 | 12.7 | 12 | +0.7 |  |
| 141 | 1.12 | C141 | 4.6 | 0.0 | 4.6 | 5 | -0.4 |  |
| 142 | 1.12 | C142 | 4.2 | 0.0 | 4.2 | 4 | +0.2 |  |

The flagged ones: 34 (the 1.12 strip; the strip's feed end may be the south end), 100 and 101 (1.12 ceiling lights; the schedule's 12 m suggests a longer way, maybe from another board or through the 1.11 attic), and 9 (see assumption 4).

## Editing in the viewer

1. Tap **Edit**, then the **Cables** tab. The camera flies to all routes. The table lists one row per route: room, cable (tails marked ↳), route id, from → to, spec, the Soupis length, the modelled length and the vertex count. The filter matches room, cable, id, ends, spec, kind, and "tail".
2. Tap a row, or tap a cable in the model, to select the route. The camera flies to it, the other routes fade, and white dots mark its vertices (grey for the two ends). In the Cables tab a tap prefers a cable over the fixture behind it; in the Fixtures tab the fixture wins.
3. **Segment** (the default): the arrows (and the x/y/z fields, − and +, hold to repeat) slide the selected segment. Its neighbours stretch, or a short jog is inserted, so every run stays axis-aligned and the ends stay on their boxes. ◀ ▶ step through the segments.
4. **Vertex**: the arrows move one bend; both segments at it follow. Tap a vertex dot of the selected route to pick it. The ends are locked: they belong to the board and the box.
5. **Insert vertex** splits the selected segment in the middle; **Delete vertex** removes a bend; **Reset route** drops the edits of that route.
6. Moving a fixture drags the end vertex of every route that ends (or starts) at it; only that last segment changes, as Petr suggested. Cody straightens it after the export.
7. Outside edit mode the cables are a layer: **Electrical › cables** in the layers list, off by default. Its slider shows them (any value above 0) without entering edit mode; the Electrical group slider and the views and scenes leave it alone. `?cables=1` in the URL starts with the layer on, for example `viewer/?m=ground_floor&cables=1`. In edit mode the cables show whenever the **Cables** switch next to the filter is on (default), and also when the layer is on.

The cables are drawn after the model, so they show through walls and ceilings; they still hide each other. Colours: blue data (UTP), yellow 24 V light cable, red 230 V, purple boxes the boards.

## Round trip

The route edits travel in the same export as the fixture edits (version 2: `cables` next to `fixtures`, [EditMode.md](EditMode.md)). Each edited route is exported whole, as absolute points; so is every route whose end fixture moved. `python -m blueprints.fixture_overrides merge <file>` replaces those routes in `fixture_overrides.json` and rewrites the cables JSON. After the deploy, the viewer drops saved route edits the deployed model already has.

To fold Petr's edits into the guess (when they settle): copy the points into `cable-routes.yaml`, or change the generator so it produces them, and remove the `cables` entries.

## Limits and rollout

- Pilot only: 1.11 and 1.12. The other rooms need the same per-room rules in the generator (boards, which void, which wall each drop is in). Roughly a few hours per two or three rooms, mostly reading the plans for the voids and the wall each drop runs in; panels 3 and 4 need their positions confirmed first.
- No IFC cable segments yet (see Model above). Putting boards and routes in one yaml-ifc document, or letting From/To point across documents, would make them IfcCableSegment with real ports.
- Tails and leads are straight lines or one jog. Shared conduits, bend radii and cable trays are not modelled.
- A fixture move only drags the route's end vertex, so the last segment can go diagonal until the route is fixed by hand or by Cody.
