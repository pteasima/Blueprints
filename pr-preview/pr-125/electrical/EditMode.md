# Fixture edit mode

Source: Petr, 2026-11-19 (Cody chat): "I need an edit mode where I can drag replace items you get wrong. Ideally, Id see a table with the same data we have in the excel/spreadsheet. This is a list of cables, so sometimes there may be multiple fixtures on that cable (each fixture needs a row). Tapping in table highligts it in model and vice versa. I get arrows to move it along all 3 axes." He left the implementation open. "Drag replace" is read as drag to reposition. Changing a fixture's schedule values, adding a fixture on a cable, and deleting a wrong one are also supported.

## Using it

1. Open a model in the web viewer (for example `viewer/?m=ground_floor`) and tap **Edit** in the top bar. Edit mode turns off Walk and Measure. While it is on, taps select fixtures instead of opening doors or switching lights.
2. The fixture panel replaces the controls sheet. It sits at the bottom on a phone and on the right on a wide screen. **▾** folds it down to the selected fixture.
3. The table has one row per fixture, so a cable that feeds two buttons and a contact has three rows. Rows after the first on the same cable leave the room and cable cells blank. The columns follow the cable schedule (`CableSchedule.xlsx`, sheet Soupis): Místnost, Kabel, Zařízení, then the fixture id and name, Specifikace, Délka, Rozvaděč, Poznámka, and the position x, y, z. The filter box matches room, cable, id, name, spec and panel.
4. Tap a row to select the fixture. The camera flies to it: 1.1 m in front of a wall device, or keeping the current view direction for a ceiling device or a strip. Tap a fixture in the model to select it and scroll the table to its row. A small fixture also counts as tapped within a 44 pt circle around its centre, unless a wall is in the way.
5. The selected fixture gets an orange outline and three arrows. Red is x (east), blue is y (the blue arrow points south, toward −y), and green is z (up). Drag an arrow to move the fixture along that axis. The move snaps to **1 cm**, **1 mm**, or **Off**. The x/y/z fields show the position in house metres (the YAML `Origin` x, y and `Elevation`). Type a value, or step with − and +. Hold − or + to repeat: after 400 ms it steps every 110 ms, after 1.2 s the step is 5× the snap step and after 2.4 s 10× (1 cm → 5 cm → 10 cm at the 1 cm snap), faster each time; it stops when the finger lifts, slides off, or the system cancels the touch. A long press on any panel button does not select its text or open the iOS callout (Petr, 2026-11-19: "I need to long press those position buttons to move faster (right now it selects the text on the button)").
6. **To wall** pushes a wall device back onto its wall (behind its face, up to 80 cm). A fixture without a wall direction goes to the nearest surface along ±x, ±y or up.
7. **Cable schedule** edits Číslo kabelu, Zařízení, Specifikace, Délka, Rozvaděč and Poznámka for the fixture. **Add copy on cable** places a copy of the fixture 10 cm along its wall, with id `C<cable>-<code>-<n>` (see [Naming.md](Naming.md)). **Delete** hides the fixture and marks it for removal, and **Restore** brings it back. **Revert** drops every edit on that fixture.
8. **Export** shows the edits as JSON. **Share** opens the native share sheet with the JSON itself as text, compact (one line) and with no title, so it can go straight to Cody in a chat app (Petr, 2026-11-19: "can you let me share it with the native share dialog? Ill send it straight to you."). The first version shared a `.json` file with a title, and on Petr's iPhone the Grok Bot app received only the title, so text is now the default. **Share file** (shown only where the browser can share files) sends `FixtureEdits-YYYYMMDD-HHMM.json` (`application/json`) for apps that take attachments. Without a share sheet neither Share button shows. **Copy** puts the JSON on the clipboard, and **Download** saves the same file. **Discard all** clears every edit on this device.

Edits stay in the browser's `localStorage` (`blueprints.fixtureEdits.<model>`). They show in the model outside edit mode too, and they survive a reload. Nothing reaches the repo until a bot commits the export.

## Round trip into the repo

```text
viewer edits ─▶ localStorage ─▶ Export JSON ─▶ Cody
  ─▶ python -m blueprints.fixture_overrides merge patch.json
  ─▶ inputs/ground_floor/fixture_overrides.json (commit, PR)
  ─▶ python -m blueprints.export ground_floor ─▶ GLB, ifc.json, plans
```

1. Save Petr's shared JSON (the one-line text from Share, or a `FixtureEdits-….json` file) as a file and run `python -m blueprints.fixture_overrides merge <file>`. That rewrites `inputs/ground_floor/fixture_overrides.json` and prints the merged entry of every fixture in the patch.
2. Re-export the model (`python -m blueprints.export ground_floor`) and open a PR with the overrides file and the exports, as for any model change.
3. After the deploy, the viewer compares each saved edit with the new model. An edit whose target position, schedule values, addition or deletion the model now has is dropped from `localStorage`, so it is not applied twice. If the model moved a fixture somewhere else in the meantime, Petr's absolute target still wins.

Every room device YAML is loaded through `blueprints.fixture_overrides.load_fixture_document` (`models/bedroom_111.py` `load_document`, `models/electrical_rooms.py` `load_document` for every `electrical-<room>.yaml` ([Rooms.md](Rooms.md)), and `models/ground_floor.py` `ifc_index` for every document it indexes). A new room's device file has to be loaded the same way, or its edits will not reach the export. An override whose id is not in a document is ignored there.

## Overrides file

`inputs/ground_floor/fixture_overrides.json`, keyed by the YAML `id`. Version 1:

```json
{
  "version": 1,
  "fixtures": {
    "C10-V": { "Origin": [0.45, 8.2355], "Elevation": 1.3145, "CableLength": 9 },
    "C7-S": { "Move": [0.0, 0.05, 0.0] },
    "SOCK-N2": { "delete": true },
    "C10-V-1": { "add": { "list": "switchingDevices", "id": "C10-V-1", "ContainedInStructure": "SP-1.11", "Origin": [0.45, 8.1], "Elevation": 1.3145, "...": "..." } }
  }
}
```

| Key | Meaning |
| --- | --- |
| `Origin`, `Elevation` | Absolute placement, the same fields as the YAML. Used for every fixture that has an `Origin`. |
| `Move` | `[dx, dy, dz]` in metres, for fixtures drawn from a path: the curtain-rail strips (the path `X0…Z` in Pset_YamlIfc shifts), and the under-bed strip C3-S (stored as `OffsetX/Y/Z`, which `models/bedroom_111.py` adds to the bed outline). `merge` adds a new Move to a committed one, because the viewer measured it from the deployed model. |
| `Name`, `Description`, `ObjectType`, `PredefinedType`, `RefDirection`, `Width`, `Depth`, `Height`, `Wattage` | Set on the element. |
| Any other key (`CableNumber`, `DeviceCode`, `CableSpec`, `CableLength`, `Panel`, `Note`, …) | Set in `Pset_YamlIfc`. |
| `list` | Moves the element to another yaml-ifc list (for example `sensors`). |
| `delete: true` | Drops the element. |
| `add: {…}` | A whole new YAML element plus its `list`. It lands in the document whose `spaces` define its `ContainedInStructure`. |

### Why a layer over the YAML

The YAML files carry comments with sources and decisions. A tool that rewrote them would lose those comments, and a person editing by hand could not tell Petr's drags from transcription work. The overrides file keeps Petr's corrections separate, and they are reviewable in a PR. When a room's YAML is next edited by hand, fold its overrides into the YAML in the same PR and delete those entries.

Ids do not change in edit mode. A rename would change the element's IFC `GlobalId`, which Home joins on ([Home.md](../Home.md)).

## Limits

- Only fixtures on the cable list are in the table: anything with a `CableNumber` or `DeviceCode`, plus switching devices, sensors, outlets and actuators, which covers sockets without a cable. Kitchen appliances and lights without a cable are not in it.
- A fixture inside another fixture's box (the mmWave C9-R in C32-V-1) has no body of its own. Its row selects the host box and cannot be moved.
- A copy can only be made of a fixture placed by `Origin`, not of a strip.
- Realistic mode's light sources and the 2D plan PNGs follow a move only after the re-export.
