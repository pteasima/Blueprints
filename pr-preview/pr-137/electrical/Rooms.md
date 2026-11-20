# Field devices by room

Every room of the ground floor except the bedroom 1.11 has its own device file, `inputs/ground_floor/electrical-<room>.yaml`, in the bedroom format ([bedroom-1.11.yaml](../../inputs/ground_floor/bedroom-1.11.yaml)). The 3D model loads them in `models/electrical_rooms.py`, through the edit-mode overrides ([EditMode.md](EditMode.md)), so they show in the viewer's fixture table and can be moved there. Cable routes: 1.11 and 1.12 are guessed (Petr, 2026-11-19: "not the exact correct routes but pretty close"), the other rooms are pending; status and boards in [CableRoutes.md](CableRoutes.md#status-2026-11-19).

Source: Petr, 2026-11-19 (Cody chat): "Lets process all the electric fixtures in the whole house (from the plan, same way you did the bedroom)." Positions come from `FixturePlan.pdf` (Petr's marks on the floor plan, Home repo `sources/`), cables from `CableSchedule.xlsx` sheet Soupis. The plan symbols were read from the PDF's vector drawing and fitted to the walls of `ground-floor.yaml`, so a symbol lands within about 3 cm of where Petr drew it; wall devices were then put on the nearest wall face and the house rules in [PlanNotes.md](PlanNotes.md) applied (150 mm from the latch, 300 mm from corners, standard heights).

352 fixtures in 21 rooms. Open questions: [Questions.md](Questions.md).

| Room | Fixtures | Cables | Sockets | Q/NC | Links |
| --- | --- | --- | --- | --- | --- |
| [1.01 Zádveří](rooms/1.01.md) | 13 | 4 | 3 | 4 | [plan](../previews/electrical/1.01.png) · [YAML](../../inputs/ground_floor/electrical-1.01.yaml) |
| [1.02 Obývací pokoj+KK](rooms/1.02.md) | 65 | 31 | 23 | 1 | [plan](../previews/electrical/1.02.png) · [YAML](../../inputs/ground_floor/electrical-1.02.yaml) |
| [1.03 Spíž](rooms/1.03.md) | 18 | 7 | 7 | 0 | [plan](../previews/electrical/1.03.png) · [YAML](../../inputs/ground_floor/electrical-1.03.yaml) |
| [1.04 Technická místnost](rooms/1.04.md) | 5 | 5 | 0 | 0 | [plan](../previews/electrical/1.04.png) · [YAML](../../inputs/ground_floor/electrical-1.04.yaml) |
| [1.05 Chodba](rooms/1.05.md) | 16 | 9 | 3 | 3 | [plan](../previews/electrical/1.05.png) · [YAML](../../inputs/ground_floor/electrical-1.05.yaml) |
| [1.06 WC](rooms/1.06.md) | 14 | 7 | 4 | 0 | [plan](../previews/electrical/1.06.png) · [YAML](../../inputs/ground_floor/electrical-1.06.yaml) |
| [1.07 Koupelna](rooms/1.07.md) | 13 | 8 | 3 | 1 | [plan](../previews/electrical/1.07.png) · [YAML](../../inputs/ground_floor/electrical-1.07.yaml) |
| [1.08 Prádelna](rooms/1.08.md) | 13 | 7 | 5 | 0 | [plan](../previews/electrical/1.08.png) · [YAML](../../inputs/ground_floor/electrical-1.08.yaml) |
| [1.09 Koupelna](rooms/1.09.md) | 14 | 8 | 4 | 1 | [plan](../previews/electrical/1.09.png) · [YAML](../../inputs/ground_floor/electrical-1.09.yaml) |
| [1.10 Šatna](rooms/1.10.md) | 13 | 8 | 4 | 0 | [plan](../previews/electrical/1.10.png) · [YAML](../../inputs/ground_floor/electrical-1.10.yaml) |
| [1.12 Pokoj](rooms/1.12.md) | 18 | 10 | 5 | 0 | [plan](../previews/electrical/1.12.png) · [YAML](../../inputs/ground_floor/electrical-1.12.yaml) |
| [1.13 Pokoj](rooms/1.13.md) | 13 | 5 | 5 | 0 | [plan](../previews/electrical/1.13.png) · [YAML](../../inputs/ground_floor/electrical-1.13.yaml) |
| [1.14 Pokoj](rooms/1.14.md) | 15 | 7 | 5 | 0 | [plan](../previews/electrical/1.14.png) · [YAML](../../inputs/ground_floor/electrical-1.14.yaml) |
| [1.15 Pracovna](rooms/1.15.md) | 26 | 14 | 8 | 2 | [plan](../previews/electrical/1.15.png) · [YAML](../../inputs/ground_floor/electrical-1.15.yaml) |
| [1.16 Garáž](rooms/1.16.md) | 19 | 12 | 6 | 0 | [plan](../previews/electrical/1.16.png) · [YAML](../../inputs/ground_floor/electrical-1.16.yaml) |
| [1.17 Chodba](rooms/1.17.md) | 12 | 8 | 1 | 1 | [plan](../previews/electrical/1.17.png) · [YAML](../../inputs/ground_floor/electrical-1.17.yaml) |
| [1.19 WC](rooms/1.19.md) | 5 | 2 | 1 | 1 | [plan](../previews/electrical/1.19.png) · [YAML](../../inputs/ground_floor/electrical-1.19.yaml) |
| [1.20 Koupelna](rooms/1.20.md) | 10 | 6 | 2 | 0 | [plan](../previews/electrical/1.20.png) · [YAML](../../inputs/ground_floor/electrical-1.20.yaml) |
| [1.21 Koupelna](rooms/1.21.md) | 9 | 5 | 2 | 0 | [plan](../previews/electrical/1.21.png) · [YAML](../../inputs/ground_floor/electrical-1.21.yaml) |
| [1.22 Předsíň](rooms/1.22.md) | 19 | 12 | 2 | 1 | [plan](../previews/electrical/1.22.png) · [YAML](../../inputs/ground_floor/electrical-1.22.yaml) |
| [1.23 Pokoj s kuchyňským koutem](rooms/1.23.md) | 22 | 8 | 11 | 1 | [plan](../previews/electrical/1.23.png) · [YAML](../../inputs/ground_floor/electrical-1.23.yaml) |

## Which room a fixture is in

The Místnost of its Soupis row. Exterior devices are listed under the room the cable goes through (Soupis note on cable 66), so the 1.13 and 1.15 blinds are under 1.12 and 1.14, the outdoor-kitchen devices under 1.06, the storeroom (sklad) devices under 1.22. A chained row with no room (napojen na …) goes with the row it is chained to. Sockets without a cable go with the room they are in; outdoor ones with the nearest room's file.

## Ids

- `C<cable>-<code>`, then `-1`, `-2` when a cable has more than one of that code, as in the bedroom ([Naming.md](Naming.md)). One row per fixture: the D55 pairs in 1.02 are `C166-S-1` and `C166-S-2`.
- `SOCK-<room>-<place>[-k]`: a socket, position only. `k` counts the modules of one stack from the bottom.
- `Q<plan cable>-<code>`: a fixture whose plan cable number belongs to a different Soupis row (for example the corridor lights marked 2(064), while Soupis 64 is a pantry light). `CableNumber` stays empty; `PlanCable` keeps the plan number.
- `NC-<room>-<code>`: a fixture drawn on the plan with no cable mark.

Both kinds carry `CableQuestion` and a `Question`, and appear in the edit-mode table with an empty cable cell.

## Properties beyond the bedroom set

| Property (Pset_YamlIfc) | Meaning |
| --- | --- |
| `Note` | The Soupis Poznámka for the cable. |
| `Path` | A strip's runs: `x,y,z;x,y,z`, runs split by ` \| `. Edit-mode `Move` shifts every point. |
| `Controls` | On a button: the lights it switches. By default every light of the same room on the same side of the facade (switches control lights; no separate blind switches). Data only, the viewer does not use it yet. |
| `InSwitchBox` | A radar on a button's cable lives in that button's box, as C9-R in the bedroom. |
| `PositionUnknown` | A Soupis row with no position on the plan; no body. |
| `Question` | What Petr has to decide about this fixture. |

## Regenerating the pages

`python models/electrical_rooms_plan.py` rewrites `docs/previews/electrical/<room>.svg`/`.png` and `docs/electrical/rooms/<room>.md` from the YAML (with overrides). `python -m blueprints.export ground_floor` rebuilds the model.
