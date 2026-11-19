/**
 * Room isolate: "Only this room" / "Show all rooms" (Petr, 2026-11-19:
 * "Proceed on "hide/show other rooms" shortcut. Either based on camera
 * position or camera target.").
 *
 * Rooms come from `<model>.ifc.json` `rooms` (blueprints.room_outlines):
 * one entry per IfcSpace with its floor outline(s) in plan metres (IFC x,
 * y) and the yaml ids of the walls, doors and windows that bound it. The
 * viewer's world is glTF metres, Y up: plan (x, y) is world (x, -z).
 *
 * Pure helpers; main.js owns the camera, the meshes and the chip.
 * docs/viewer/RoomIsolate.md
 */

/**
 * @typedef {{ space: string, name?: string, outlines: number[][][], area?: number, bounding?: string[] }} Room
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} ring
 */
export function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi || 1e-12) + xi) inside = !inside;
  }
  return inside;
}

/**
 * Distance from a point to a ring's edges (0 inside is not implied).
 * @param {number} x
 * @param {number} y
 * @param {number[][]} ring
 */
export function distanceToRing(x, y, ring) {
  let best = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [ax, ay] = ring[j];
    const [bx, by] = ring[i];
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy || 1e-12;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / len2));
    best = Math.min(best, Math.hypot(x - (ax + t * dx), y - (ay + t * dy)));
  }
  return best;
}

/**
 * @param {Room[]} rooms
 * @param {number} x plan x
 * @param {number} y plan y
 * @returns {Room | null}
 */
export function roomAt(rooms, x, y) {
  for (const room of rooms || []) {
    for (const ring of room.outlines || []) {
      if (ring.length >= 3 && pointInRing(x, y, ring)) return room;
    }
  }
  return null;
}

/**
 * @param {Room[]} rooms
 * @param {number} x
 * @param {number} y
 * @returns {{ room: Room, distance: number } | null}
 */
export function nearestRoom(rooms, x, y) {
  /** @type {{ room: Room, distance: number } | null} */
  let best = null;
  for (const room of rooms || []) {
    for (const ring of room.outlines || []) {
      if (ring.length < 3) continue;
      const d = pointInRing(x, y, ring) ? 0 : distanceToRing(x, y, ring);
      if (!best || d < best.distance) best = { room, distance: d };
    }
  }
  return best;
}

/** World (glTF, Y up) → plan metres. */
export function worldToPlan(p) {
  return [p.x, -p.z];
}

/**
 * Which room the view is in. Walk mode: the room containing the camera
 * (eye position). Otherwise the room under the orbit target, then under
 * the screen-centre hit, then the room nearest the target.
 * @param {Room[]} rooms
 * @param {{ walk: boolean, eye: number[], target: number[], centreHit?: () => (number[] | null) }} view plan points
 * @returns {{ room: Room, source: "camera" | "target" | "centre" | "nearest" } | null}
 */
export function pickRoom(rooms, view) {
  if (!rooms || !rooms.length) return null;
  if (view.walk) {
    const room = roomAt(rooms, view.eye[0], view.eye[1]);
    if (room) return { room, source: "camera" };
  }
  const atTarget = roomAt(rooms, view.target[0], view.target[1]);
  if (atTarget) return { room: atTarget, source: "target" };
  const hit = view.centreHit?.();
  if (hit) {
    const room = roomAt(rooms, hit[0], hit[1]);
    if (room) return { room, source: "centre" };
  }
  const near = nearestRoom(rooms, view.walk ? view.eye[0] : view.target[0], view.walk ? view.eye[1] : view.target[1]);
  return near ? { room: near.room, source: "nearest" } : null;
}

/** IFC classes that are spatial structure (never hidden, never meshes). */
const SPATIAL = new Set(["IfcProject", "IfcSite", "IfcBuilding", "IfcBuildingStorey", "IfcSpace"]);
/** Storey-wide elements kept in every room (the floor slab). */
const ALWAYS_KEEP = new Set(["IfcSlab"]);

/**
 * GlobalIds to hide so only `room` shows: everything except its contents
 * (IFC containment in its IfcSpace, through aggregation parents), its
 * bounding walls, doors and windows, elements with no space whose plan
 * centre lies inside its outline, and slabs.
 * @param {{ elements: Record<string, any> }} index
 * @param {Room} room
 * @param {(globalId: string) => (number[] | null)} centreOf plan centre of an element's meshes
 * @returns {Set<string>}
 */
export function hiddenForRoom(index, room, centreOf) {
  const elements = index?.elements || {};
  /** @type {Map<string, string>} yaml id → GlobalId */
  const byYaml = new Map();
  let spaceGid = null;
  for (const el of Object.values(elements)) {
    if (el?.id) byYaml.set(el.id, el.globalId);
    if (el?.type === "IfcSpace" && el.id === room.space) spaceGid = el.globalId;
  }
  const bounding = new Set((room.bounding || []).map((id) => byYaml.get(id)).filter(Boolean));
  /** @type {Map<string, string | null>} */
  const spaceOf = new Map();
  const resolveSpace = (gid) => {
    if (spaceOf.has(gid)) return spaceOf.get(gid);
    spaceOf.set(gid, null);
    const el = elements[gid];
    let out = null;
    if (el) {
      const container = el.containerId ? elements[el.containerId] : null;
      if (container?.type === "IfcSpace") out = container.globalId;
      else if (!container && el.parentId && !SPATIAL.has(elements[el.parentId]?.type)) {
        out = resolveSpace(el.parentId);
      } else if (container) out = "";
    }
    spaceOf.set(gid, out);
    return out;
  };
  /** @type {Set<string>} */
  const hidden = new Set();
  for (const el of Object.values(elements)) {
    if (!el || SPATIAL.has(el.type) || el.type === "IfcGroup" || el.type === "IfcOpeningElement") continue;
    const gid = el.globalId;
    if (bounding.has(gid) || ALWAYS_KEEP.has(el.type)) continue;
    const space = resolveSpace(gid);
    if (space) {
      if (space !== spaceGid) hidden.add(gid);
      continue;
    }
    // No space (on the storey, or not placed): decide by position.
    const c = centreOf(gid);
    if (!c) continue;
    if (!roomAt([room], c[0], c[1])) hidden.add(gid);
  }
  return hidden;
}
