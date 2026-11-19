"""Guess cable routes for the pilot rooms and write inputs/ground_floor/cable-routes.yaml.

The guess is a starting point for Petr's corrections in the viewer edit mode,
not a design. The rules it follows, and why, are in
docs/electrical/CableRoutes.md. Run it only to regenerate the guess; Petr's
edits live in inputs/ground_floor/fixture_overrides.json (``cables``) and
survive a rerun, because they store absolute points.

    python scripts/guess_cable_routes.py

Fixture positions are read from the room YAML without the overrides, so a
committed fixture move still reaches the cable through the naive end rule
(blueprints.cable_routes).
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO / "src"))
sys.path.insert(0, str(REPO / "vendor" / "yaml-ifc"))

from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402

INPUTS = REPO / "inputs" / "ground_floor"
OUT = INPUTS / "cable-routes.yaml"
DEVICE_LISTS = ("lightFixtures", "switchingDevices", "sensors", "outlets", "actuators")

# --- house facts (docs/electrical/CableRoutes.md) ---
CORRIDOR_CEILING = 2.50  # 1.05 Chodba, the 1.11 north band (ground-floor.yaml header)
ROOM_112_CEILING = 3.00  # 1.12 Pokoj
VOID_GAP = 0.06  # a cable lies 60 mm above the finished ceiling
LANE = 0.015  # cables in one void are stacked 15 mm apart, so each can be picked
FLOOR_Z = -0.06  # 230 V runs in the floor build-up, below the finished floor (±0)
FLOOR_LANE = 0.012
IN_WALL = 0.03  # a box's cable enters 30 mm behind the wall face
WALL_OFF = 0.10  # a floor run keeps 100 mm off the wall face
# 1.11 vault, assumed: one slope from 2.50 at the south wall face to 4.875 at the step.
VAULT_Y0, VAULT_Z0 = 3.275, 2.50
VAULT_Y1, VAULT_Z1 = 7.95, 4.875


def vault_z(y: float) -> float:
    t = (min(max(y, VAULT_Y0), VAULT_Y1) - VAULT_Y0) / (VAULT_Y1 - VAULT_Y0)
    return VAULT_Z0 + t * (VAULT_Z1 - VAULT_Z0)


# Distribution boards. Position from the purple squares on FixturePlan.pdf,
# fitted to the walls (docs/electrical/CableRoutes.md). Size is an assumption.
BOARD_W, BOARD_D, BOARD_H, BOARD_ELEV = 0.55, 0.12, 0.90, 1.20
BOARDS = {
    # step_y: where a ceiling cable leaves the wall above the board into the
    # void (None: it heads straight through the wall it rises in).
    1: {"id": "RS-1", "x": 17.36, "face_y": 11.475, "facing": (0.0, 1.0), "room": "1.04",
        "where": "north face of W-024, in 1.04 Technická místnost", "step_y": None},
    2: {"id": "RS-2", "x": 6.10, "face_y": 10.025, "facing": (0.0, -1.0), "room": "1.05",
        "where": "south face of W-022, the west end of corridor 1.05 by the bedroom door", "step_y": 9.90},
}


def board_ref(facing):
    fx, fy = facing
    return (fy, -fx)


def board_exit(panel: int, slot: int, top: bool) -> list[float]:
    """Where a cable leaves the board: along its top (data, 24 V) or bottom (230 V)."""
    b = BOARDS[panel]
    ref = board_ref(b["facing"])
    along = -BOARD_W / 2 + 0.04 + 0.03 * slot
    x = b["x"] + ref[0] * along - b["facing"][0] * IN_WALL
    y = b["face_y"] + ref[1] * along - b["facing"][1] * IN_WALL
    z = BOARD_ELEV + BOARD_H if top else BOARD_ELEV
    return [x, y, z]


# --- fixtures ---
def load_fixtures() -> dict[str, dict]:
    out = {}
    for path in [INPUTS / "bedroom-1.11.yaml", *sorted(INPUTS.glob("electrical-*.yaml"))]:
        doc = load_yaml_ifc(path)
        for key in DEVICE_LISTS:
            for element in doc.get(key) or []:
                props = {}
                for group in element.get("PropertySets") or []:
                    if group.get("Name") == "Pset_YamlIfc":
                        props.update(group.get("Properties") or {})
                element = dict(element)
                element["_props"] = props
                out[str(element["id"])] = element
        if path.name == "bedroom-1.11.yaml":
            for element in doc.get("furniture") or []:
                if element.get("id") == "BED-1.11":
                    props = {}
                    for group in element.get("PropertySets") or []:
                        if group.get("Name") == "Pset_YamlIfc":
                            props.update(group.get("Properties") or {})
                    out["BED-1.11"] = {"_props": props}
    return out


FIX = load_fixtures()


def attach(fid: str) -> list[float]:
    """The point a cable ends at on a boxed fixture.

    A wall device (with RefDirection): 30 mm behind the back of the box, at
    the box centre height. A ceiling device: the centre of the top.
    """
    e = FIX[fid]
    if e.get("Origin") is None:
        raise ValueError(f"{fid} has no Origin; give its end point explicitly")
    ox, oy = e["Origin"][:2]
    w, d, h = float(e.get("Width") or 0), float(e.get("Depth") or 0), float(e.get("Height") or 0)
    z0 = float(e.get("Elevation") or 0)
    ref = e.get("RefDirection")
    if ref:
        rx, ry = ref
        n = math.hypot(rx, ry)
        rx, ry = rx / n, ry / n
        fx, fy = -ry, rx
        return [ox + rx * w / 2 - fx * IN_WALL, oy + ry * w / 2 - fy * IN_WALL, z0 + h / 2]
    return [ox + w / 2, oy + d / 2, z0 + h]


def props(fid):
    return FIX[fid]["_props"]


# --- route builder ---
class Route:
    def __init__(self, start):
        self.pts = [[round(v, 4) for v in start]]

    def to(self, x=None, y=None, z=None):
        last = self.pts[-1]
        p = [last[0] if x is None else x, last[1] if y is None else y, last[2] if z is None else z]
        p = [round(v, 4) for v in p]
        if math.dist(p, last) > 1e-4:
            self.pts.append(p)
        return self

    def at(self, p):
        return self.to(*p)


ROUTES: list[dict] = []
LANES: dict[str, int] = {}


def lane(zone: str) -> int:
    LANES[zone] = LANES.get(zone, -1) + 1
    return LANES[zone]


SLOTS: dict[tuple, int] = {}


def slot(panel: int, top: bool) -> int:
    key = (panel, top)
    SLOTS[key] = SLOTS.get(key, -1) + 1
    return SLOTS[key]


def kind_of(spec: str, outdoor: bool = False) -> str:
    s = (spec or "").upper()
    if "UTP" in s:
        return "data"
    if outdoor or "2X" in s.replace(" ", ""):
        return "power"
    return "lv"


def add(rid, cable, to, pts, *, frm, kind, spec, room, tail=False, lead=None, to_box=None, from_box=None, note=None):
    rec = {"id": rid, "cable": cable, "room": room, "kind": kind, "spec": spec, "from": frm, "to": to}
    if to_box:
        rec["toBox"] = to_box
    if from_box:
        rec["fromBox"] = from_box
    if tail:
        rec["tail"] = True
        rec["lead"] = lead or "cable"
    if note:
        rec["note"] = note
    rec["points"] = pts
    ROUTES.append(rec)


def cable_meta(fid):
    p = props(fid)
    return int(p["CableNumber"]), int(p.get("Panel") or 0), str(p.get("CableSpec") or "")


# Corridor geometry used by several routes.
BAND_Y = 9.00  # cables cross W-033 into the 1.11 north band above OP09's head, at y 9.00
CORR_WALL_Y = 8.25  # corridor side of W-013 (north face 8.20), where cables rise to the 1.12 void
INTO_112_Y = 7.90  # just inside 1.12, past W-013's south face (7.95)
W031_X = 3.78  # inside W-031, 30 mm behind its 1.11 face (x 3.75)


def ceiling_route(panel, top_slot, zone):
    """Board top → riser in the wall → corridor void at this cable's lane."""
    start = board_exit(panel, top_slot, True)
    k = lane(zone)
    zc = CORRIDOR_CEILING + VOID_GAP + LANE * k
    r = Route(start).to(z=zc)
    if BOARDS[panel]["step_y"] is not None:
        r.to(y=BOARDS[panel]["step_y"])
    return r, k, zc


def via_112(r, k, x_cross):
    """From the corridor void over W-013 into the 1.12 attic void."""
    z112 = ROOM_112_CEILING + VOID_GAP + LANE * k
    r.to(x=x_cross).to(y=CORR_WALL_Y).to(z=z112).to(y=INTO_112_Y - 0.01 * k)
    return z112


def into_band(r):
    """From the corridor void over W-033 into the 1.11 north band."""
    r.to(y=BAND_Y).to(x=5.50)


def drop_to(r, end):
    r.to(x=end[0]).to(y=end[1]).to(z=end[2])


def floor_route(panel, zone):
    start = board_exit(panel, slot(panel, False), False)
    k = lane(zone)
    zf = FLOOR_Z - FLOOR_LANE * k
    return Route(start).to(z=zf), zf


# ======================= 1.12 Pokoj =======================
def room_112():
    room = "1.12"
    # Lights and buttons: corridor void → over W-013 → 1.12 attic void → drop.
    for fid, x_cross in (("C33-V", None), ("C100-S", 6.36), ("C101-S", 6.43), ("C35-V", 6.50), ("C34-S", 6.57)):
        cable, panel, spec = cable_meta(fid)
        r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
        if fid == "C33-V":
            # The door button is in W-013 itself: drop in the wall from the corridor void.
            end = attach(fid)
            r.to(x=end[0]).to(y=8.075).to(z=end[2]).to(y=end[1])
            add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="data", spec=spec, room=room,
                note="Drops inside W-013 from the corridor void; the door wall carries the box.")
            continue
        z112 = via_112(r, k, x_cross)
        if fid == "C34-S":
            # Strip under the bed; it is fed at its north end, by W-013.
            path = props(fid)["Path"].split(";")
            end = [float(v) for v in path[-1].split(",")]
            r.to(x=end[0]).to(y=7.97).to(z=end[2]).to(y=end[1])
            add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="lv", spec=spec, room=room,
                note="Down inside W-013 to the floor, out to the strip's north end.")
            continue
        end = attach(fid)
        if FIX[fid].get("RefDirection"):
            # A wall box: along the 1.12 void to above the box, drop in the wall.
            drop_to(r, end)
        else:
            r.to(x=end[0]).to(y=end[1]).to(z=end[2])
        kind = kind_of(spec)
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind=kind, spec=spec, room=room)
    # Tails from the button boxes.
    add("C33>C33-M", 33, "C33-M", [attach("C33-V"), attach("C33-M")], frm="C33-V", kind="data",
        spec="UTP Cat6a", room=room, tail=True, lead="cable")
    add("C35>C35-M", 35, "C35-M", [attach("C35-V"), attach("C35-M")], frm="C35-V", kind="data",
        spec="UTP Cat6a", room=room, tail=True, lead="cable")
    # Exterior lamp 140: up into the 1.12 attic, out over the wall plate, down
    # the facade under the insulation (Soupis: "1.12 na pudu, ven nad pozednici").
    cable, panel, spec = cable_meta("C140-S")
    r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
    z112 = via_112(r, k, 6.64)
    end = attach("C140-S")
    # Down in the insulation layer (y 2.90), then into the lamp box.
    r.to(x=end[0]).to(y=3.09).to(y=2.90).to(z=end[2]).to(y=end[1])
    add("C140", 140, "C140-S", r.pts, frm=BOARDS[panel]["id"], kind="power", spec=spec, room=room,
        note="Soupis: 1.12 na pudu, ven nad pozednici. Down the facade under the ETICS.")
    # 141 and 142 are chained from 140's lamp along the facade, under the insulation.
    for fid in ("C141-S", "C142-S"):
        c, _p, s = cable_meta(fid)
        a, b = attach("C140-S"), attach(fid)
        zf = 2.75 + (0.02 if fid == "C142-S" else 0.0)
        pts = Route(a).to(z=zf).to(x=b[0]).to(y=b[1]).to(z=b[2]).pts
        add(f"C{c}", c, fid, pts, frm="C140-S", kind="power", spec=s, room=room,
            note="Soupis: napojen na 140. Along the facade under the insulation, below the eaves.")
    # Blinds 61 and 66 (230 V, floor). Soupis: the cables are listed in 1.12,
    # where they go through the wall; the motors are on the 1.13 facade.
    for fid in ("C61-B", "C66-B"):
        cable, panel, spec = cable_meta(fid)
        r, zf = floor_route(panel, "floor")
        x_run = 6.85 - WALL_OFF - 0.02 * LANES["floor"]
        end = attach(fid)
        r.to(y=CORR_WALL_Y).to(x=x_run).to(y=3.275 + WALL_OFF).to(y=3.275 - IN_WALL).to(z=end[2]).to(y=2.90)
        r.to(x=end[0]).to(y=end[1])
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="power", spec=spec, room=room,
            note="Floor along the 1.12 east wall, up in W-002 by the SE corner, out and along the facade to the motor.")


# ======================= 1.11 Ložnice =======================
def room_111():
    room = "1.11"
    # Bedside stacks, bed strip and curtain-rail strips are on W-031: they come
    # through the 1.12 attic void and drop inside W-031.
    bed = props("BED-1.11")
    strip3_end = [float(bed["X1"]) - 0.02, float(bed["Y1"]) - 0.02, 0.03]
    rail = props("C7-S")
    for fid, x_cross in (("C1-2V", 5.80), ("C2-S", 5.87), ("C4-2V", 5.94), ("C5-S", 6.01), ("C3-S", 6.08)):
        cable, panel, spec = cable_meta(fid)
        r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
        via_112(r, k, x_cross)
        if fid == "C3-S":
            end = strip3_end
            r.to(x=W031_X).to(y=end[1]).to(z=end[2]).to(x=end[0])
        else:
            end = attach(fid)
            r.to(x=end[0]).to(y=end[1]).to(z=end[2])
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind=kind_of(spec), spec=spec, room=room,
            note="Through the 1.12 attic void, down inside W-031 (the 1.11/1.12 wall).")
    # Curtain-rail strips 7 and 8: fed at their north end on the west wall
    # (50 mm past OP01's north jamb). The Soupis 15 m fits this end better than
    # the south-east corner (about 11 m).
    for fid in ("C7-S", "C8-S"):
        cable, panel, spec = cable_meta(fid)
        r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
        into_band(r)
        p = props(fid)
        x_wall = 0.45 - IN_WALL - 0.02 * (fid == "C8-S")
        end = [float(p["X0"]) + 0.02, float(p["Y0"]), float(p["Z"]) + 0.006]
        r.to(x=x_wall).to(y=VAULT_Y1).to(z=vault_z(VAULT_Y1) + VOID_GAP + LANE * k)
        r.to(y=end[1], z=vault_z(end[1]) + VOID_GAP + LANE * k).to(z=end[2]).to(x=end[0])
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="lv", spec=spec, room=room,
            note="Band void to the west wall, up the step, down the vault along W-030, down inside W-030 to the rail strip's north end.")
    # North band: corridor void → over W-033 → band void.
    # Cable 32: door buttons and contact. Main route to the bedroom-side box.
    cable, panel, spec = cable_meta("C32-V-1")
    r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
    end = attach("C32-V-1")
    r.to(y=end[1]).to(x=end[0]).to(z=end[2])
    add("C32", 32, "C32-V-1", r.pts, frm=BOARDS[panel]["id"], kind="data", spec=spec, room=room,
        note="Drops inside W-033 next to the door; the corridor button and the contact are tails.")
    add("C32>C32-V-2", 32, "C32-V-2", [attach("C32-V-1"), attach("C32-V-2")], frm="C32-V-1", kind="data",
        spec=spec, room=room, tail=True, lead="cable", note="Through W-033 to the corridor face.")
    add("C32>C32-M", 32, "C32-M", [attach("C32-V-1"), attach("C32-M")], frm="C32-V-1", kind="data",
        spec=spec, room=room, tail=True, lead="cable")
    # Cable 9: the radar lives in the C32-V-1 box; the window contact at OP05 is far.
    cable, panel, spec = cable_meta("C9-M")
    r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
    box = attach("C32-V-1")
    box9 = [box[0], box[1] - 0.02, box[2]]
    r.to(y=box9[1]).to(x=box9[0]).to(z=box9[2])
    add("C9", 9, "C9-R", r.pts, frm=BOARDS[panel]["id"], kind="data", spec=spec, room=room, to_box="C32-V-1",
        note="C9-R is inside the C32-V-1 box (InSwitchBox).")
    m = attach("C9-M")
    zt = CORRIDOR_CEILING + VOID_GAP + LANE * k
    t = Route(box9).to(z=zt).to(x=5.50).to(x=m[0] + 0.03).to(y=VAULT_Y1)
    t.to(z=vault_z(VAULT_Y1) + VOID_GAP)
    t.to(y=VAULT_Y0 - IN_WALL, z=vault_z(VAULT_Y0) + VOID_GAP)
    t.to(z=m[2]).to(x=m[0])
    t.pts[-1][1] = round(m[1], 4)
    add("C9>C9-M", 9, "C9-M", t.pts, frm="C9-R", kind="data", spec=spec, room=room, tail=True, lead="cable",
        from_box="C32-V-1",
        note="Long tail: up W-033, west in the band, up the step, down the vault slope, down W-002 to the jamb.")
    # Cable 10: west-wall button. 13 and 14 come from panel 1 along the corridor.
    cable, panel, spec = cable_meta("C10-V")
    r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
    into_band(r)
    end = attach("C10-V")
    r.to(x=end[0]).to(y=end[1]).to(z=end[2])
    add("C10", 10, "C10-V", r.pts, frm=BOARDS[panel]["id"], kind="data", spec=spec, room=room,
        note="Band void to the west wall, down inside W-030.")
    for fid in ("C13-E", "C14-W"):
        cable, panel, spec = cable_meta(fid)
        r, k, zc = ceiling_route(panel, slot(panel, True), "corridor-p1")
        r.to(y=BAND_Y - 0.03 * (k + 1))
        end = attach(fid)
        r.to(x=end[0]).to(y=end[1]).to(z=end[2])
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="data", spec=spec, room=room,
            note="Panel 1: through W-024, west along corridor 1.05 in the soffit, over W-033 into the band.")
    # Cable 12: the pendant over the bed, on the vault.
    cable, panel, spec = cable_meta("C12-S")
    r, k, zc = ceiling_route(panel, slot(panel, True), "corridor")
    into_band(r)
    end = attach("C12-S")
    r.to(x=end[0]).to(y=VAULT_Y1).to(z=vault_z(VAULT_Y1) + VOID_GAP)
    r.to(y=end[1], z=vault_z(end[1]) + VOID_GAP).to(z=end[2])
    add("C12", 12, "C12-S", r.pts, frm=BOARDS[panel]["id"], kind="lv", spec=spec, room=room,
        note="Band void, up the step, down the vault slope; the last vertical leg is the pendant's own cord.")
    # Blinds: 230 V in the floor, up inside the exterior wall, out to the motor.
    for fid in ("C16-B", "C18-B", "C46-B"):
        cable, panel, spec = cable_meta(fid)
        r, zf = floor_route(panel, "floor")
        off = 0.02 * LANES["floor"]
        end = attach(fid)
        run_y = 9.50 - WALL_OFF - off
        run_x = 0.45 + WALL_OFF + off
        r.to(y=run_y).to(x=run_x)
        if fid == "C46-B":
            r.to(y=3.275 + WALL_OFF + off).to(x=end[0]).to(y=3.275 - IN_WALL).to(z=end[2]).to(y=2.90)
        else:
            r.to(y=end[1]).to(x=0.45 - IN_WALL).to(z=end[2]).to(x=0.0)
        r.pts[-1] = [round(end[0], 4), round(end[1], 4), round(end[2], 4)]
        add(f"C{cable}", cable, fid, r.pts, frm=BOARDS[panel]["id"], kind="power", spec=spec, room=room,
            note="Floor along the north and west walls, up inside the exterior wall, out to the motor.")


HEADER = """\
# Cable routes, pilot rooms 1.11 Ložnice and 1.12 Pokoj. GUESSED, not designed.
# Generated by scripts/guess_cable_routes.py; the rules, the assumptions and the
# open questions are in docs/electrical/CableRoutes.md. Petr's corrections from
# the viewer edit mode live in fixture_overrides.json ("cables"), not here.
#
# boards: distribution boards (rozvaděče). Origin is the corner of the box on
#   the wall face, RefDirection along the face, the box grows along +90° of it
#   (the yaml-ifc box rule). Position from the purple squares on
#   FixturePlan.pdf (Home repo sources/); size is an assumption.
# routes: one polyline per cable from the board (or a chained fixture) to the
#   terminating box, plus tail routes from that box to the other fixtures on
#   the cable. points are [x, y, z] house metres (x east, y north, z up from the
#   1.NP floor). The first point sits on the board or the "from" box, the last
#   one on the "to" box. kind: data (UTP), lv (24 V light cable), power (230 V).
#   toBox / fromBox: the box whose move drags that end, when the fixture has no
#   body of its own (a radar inside a switch box).
"""


def dump_yaml(data: dict) -> str:
    lines = [HEADER, "version: 1", "boards:"]
    for b in data["boards"]:
        lines.append(f"  - id: {b['id']}")
        for key in ("Name", "Panel", "Room", "Description"):
            val = b[key]
            lines.append(f"    {key}: {val!r}" if isinstance(val, str) and (':' in val or val != val.strip()) else f"    {key}: {val}")
        lines.append(f"    Origin: [{b['Origin'][0]:.3f}, {b['Origin'][1]:.3f}]")
        lines.append(f"    Elevation: {b['Elevation']:.3f}")
        lines.append(f"    RefDirection: [{b['RefDirection'][0]:g}, {b['RefDirection'][1]:g}]")
        lines.append(f"    Width: {b['Width']}")
        lines.append(f"    Depth: {b['Depth']}")
        lines.append(f"    Height: {b['Height']}")
    lines.append("routes:")
    for r in data["routes"]:
        lines.append(f"  - id: \"{r['id']}\"")
        for key in ("cable", "room", "kind", "spec", "from", "to", "toBox", "fromBox", "tail", "lead", "note"):
            if key not in r:
                continue
            val = r[key]
            if isinstance(val, bool):
                lines.append(f"    {key}: {'true' if val else 'false'}")
            elif isinstance(val, int):
                lines.append(f"    {key}: {val}")
            else:
                text = str(val).replace('"', '\\"')
                lines.append(f"    {key}: \"{text}\"")
        lines.append("    points:")
        for p in r["points"]:
            lines.append(f"      - [{p[0]:.3f}, {p[1]:.3f}, {p[2]:.3f}]")
    return "\n".join(lines) + "\n"


def separate_drops():
    """Stacked boxes share a wall position. Each later cable drops 20 mm deeper
    in the wall, with a short jog at the top and into the box, so every riser
    can be told apart and picked."""
    columns: dict[tuple, int] = {}
    for r in ROUTES:
        pts = r["points"]
        if r.get("tail") or len(pts) < 3:
            continue
        a, b = pts[-2], pts[-1]
        if abs(a[0] - b[0]) > 1e-4 or abs(a[1] - b[1]) > 1e-4:
            continue
        e = FIX.get(r.get("toBox") or r["to"]) or {}
        ref = e.get("RefDirection")
        if not ref:
            continue
        key = (round(b[0], 2), round(b[1], 2))
        n = columns.get(key, 0)
        columns[key] = n + 1
        if n == 0:
            continue
        rx, ry = ref
        k = math.hypot(rx, ry)
        fx, fy = -ry / k, rx / k
        off = (-fx * 0.02 * n, -fy * 0.02 * n)
        top = [round(a[0] + off[0], 4), round(a[1] + off[1], 4), a[2]]
        bottom = [round(b[0] + off[0], 4), round(b[1] + off[1], 4), b[2]]
        r["points"] = pts[:-1] + [top, bottom, b]


def main():
    room_111()
    room_112()
    separate_drops()
    boards = []
    for panel, b in BOARDS.items():
        ref = board_ref(b["facing"])
        origin = [b["x"] - ref[0] * BOARD_W / 2, b["face_y"] - ref[1] * BOARD_W / 2]
        boards.append({
            "id": b["id"], "Name": f"Rozvaděč {panel}", "Panel": panel, "Room": b["room"],
            "Description": f"Panel {panel}, {b['where']}. Size and height assumed.",
            "Origin": origin, "Elevation": BOARD_ELEV, "RefDirection": list(ref),
            "Width": BOARD_W, "Depth": BOARD_D, "Height": BOARD_H,
        })
    OUT.write_text(dump_yaml({"boards": boards, "routes": ROUTES}), encoding="utf-8")
    print(f"wrote {OUT.relative_to(REPO)}: {len(ROUTES)} routes")


if __name__ == "__main__":
    main()
