# Device ids for room 1.11

Nothing has been renamed. The current id is what the model uses today. The proposed id is Cody's pattern, for Petr to accept or change.

## Current scheme

The id is `C<cable>-<code>`. The cable number is also the property `CableNumber`. A second device of the same code on one cable gets `-1` or `-2`.

| Letter | Meaning |
| --- | --- |
| S | light (Soupis: Světlo) |
| V | one wall button |
| 2V | double button, Jung 532-4U |
| R | mmWave radar |
| M | door or window contact |
| E | ethernet socket |
| W | Wi-Fi access point |
| B | blind motor |

Power sockets (`SOCK-`) have a current id and no cable number: the schedule has no row, and wiring is skipped. The two outdoor lamps (`LAMP-X-`) are kept and marked UNUSED. They are not wired, not on a panel, and not counted. The bed `BED-1.11` is UNFINISHED placeholder furniture, not a device id.

## Proposed scheme

`<room>-<type><n>`, counted inside the room. The cable number is only a property, because one cable can feed several devices.

| Letter | Device |
| --- | --- |
| L | light |
| B | button |
| Z | power socket |
| D | data socket |
| P | presence (mmWave) |
| K | window or door contact |
| R | blind motor |
| AP | access point |

An exterior device is named from the room where its cable comes through the wall, with `X` before the type: `1.11-XL1`, `1.11-XB1`, `1.11-XR1`. A button on the corridor side of the bedroom door is not exterior, so it has no `X`.

## Side by side

| Current | Proposed | Where | Rule |
| --- | --- | --- | --- |
| C12-S | 1.11-L2 | ceiling | ceiling |
| C3-S | 1.11-L4 | bed | bed-edge |
| C11-S | 1.11-L1 | ceiling | ceiling |
| C14-W | 1.11-AP1 | ceiling | ceiling |
| C5-S | 1.11-L3 | ceiling | ceiling |
| C2-S | 1.11-L5 | ceiling | ceiling |
| C7-S | 1.11-L6 | ceiling | ceiling |
| C8-S | 1.11-L7 | ceiling | ceiling |
| C32-V-1 | 1.11-B2 | wall | 1350 |
| C9-R | 1.11-P1 | wall | in box |
| C10-V | 1.11-B1 | wall | 1350+80 |
| SOCK-N | 1.11-Z1 | wall | 300 |
| C13-E | 1.11-D1 | wall | 380 |
| C32-M | 1.11-K1 | frame | frame |
| C32-V-2 | 1.11-B3 | corridor | 1350 |
| C4-2V | 1.11-B4 | wall | 1350 |
| SOCK-EN | 1.11-Z2 | wall | 300 |
| C1-2V | 1.11-B5 | wall | 1350 |
| SOCK-ES | 1.11-Z3 | wall | 300 |
| C9-M | 1.11-K2 | frame | frame |
| C46-B | 1.11-XR1 | exterior | facade |
| C18-B | 1.11-XR2 | exterior | facade |
| C16-B | 1.11-XR3 | exterior | facade |
| C6-2V | 1.11-XB1 | exterior | 1350 |
| C6-V | 1.11-XB2 | exterior | 1350+80 |
| SOCK-X | 1.11-XZ1 | exterior | 300 |
| LAMP-X-W | 1.11-XL1 | exterior | unused |
| LAMP-X-S | 1.11-XL2 | exterior | unused |
