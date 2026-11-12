/**
 * Tap a hinged door leaf to swing it 90° about its hinge.
 *
 * Records come from the model (`docs/models/<id>.doors.json`): each hinged
 * leaf has a centre (to match the mesh), a hinge point, and a sign. The sign
 * is a right-handed 90° turn about glTF +Y (CAD +Z). Width, hinge side, and
 * swing direction are resolved in the model; this file only plays them.
 *
 * An open leaf leaves its closed rectangle empty. That rectangle is a hit
 * proxy kept out of the scene: a tap through it closes the door, unless the
 * same ray hits any registered interactive (the leaf, or a later switch).
 * Walls and other non-interactive geometry never block that close.
 * Several openings on one ray close the farthest, so a door seen through
 * another opening can be shut again.
 *
 * Drawers are records with kind "drawer": a centre (to match one mesh under
 * the cabinet's element node) and a `slide` vector, glTF metres, the full
 * extension. Tapping a drawer slides it out along that vector and back. The
 * model derives both from the cabinet's parameters (models/kitchen_cabinet.py).
 *
 * Sliding and pocket doors are records with kind "sliding": the leaf's jamb
 * ends `start` and `end` (glTF metres) and `panels`, each a fraction `span`
 * of the slab and its full opening move `slide`. The model keeps the leaf as
 * one slab, so a two-panel (bi-parting) door is drawn as two scaled copies of
 * it that slide apart (models/ground_floor.py `_sliding_panels`).
 *
 * Sectional overhead doors (the garage doors) are records with kind
 * "sectional": the leaf's `bottom` and `top` edge centres and jamb ends
 * `start`/`end` when shut, `inward` (the room side its track runs into),
 * `sections` and `bend` (metres). The slab is drawn as `sections` scaled
 * copies, one per horizontal section. Opening runs every section along one
 * track: straight up the leaf plane, a quarter bend of radius `bend` at the
 * leaf head, then level into the room under the ceiling, each section
 * turned to the track's tangent (`sectionalTrack`). A simplification of the
 * real hardware (models/ground_floor.py `_sectional_record`).
 */
import * as THREE from "three";
import { LONG_PRESS_MS, classifyHold } from "./gesture.js";
import { createTapRegistry, isHitProxy, isSceneSolid } from "./interactions.js";
import { meshIdentity } from "./meshIdentity.js";

/** Movement past this is a camera drag, not a tap. */
export const TAP_PX = 12;
/** Swing duration. */
export const DOOR_SWING_MS = 500;
/** Open angle. */
export const DOOR_SWING_RAD = Math.PI / 2;
/** Match a leaf centre to a record, metres. */
export const DOOR_MATCH_M = 0.03;
/**
 * Swing fraction above which the closed-leaf proxy can close the door.
 * A settled shut leaf stays on the mesh raycast and toggles open instead.
 */
export const OPENING_LIVE = 1e-3;

/**
 * @param {number} t 0–1
 * @returns {number}
 */
export function easeInOutCubic(t) {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2;
}

/**
 * @param {{
 *   dx: number,
 *   dy: number,
 *   pointers?: number,
 *   button?: number,
 *   blocked?: boolean,
 *   modifiers?: boolean,
 * }} g
 * @returns {"tap" | "drag" | "ignore"}
 */
export function classifyPointerGesture(g) {
  if (g.blocked || g.modifiers) return "ignore";
  if (g.button !== undefined && g.button !== 0) return "ignore";
  if ((g.pointers ?? 1) > 1) return "ignore";
  if (Math.hypot(g.dx, g.dy) > TAP_PX) return "drag";
  return "tap";
}

/**
 * @param {number} amount 0 closed … 1 open
 * @param {number} sign +1 or −1
 */
export function swingAngle(amount, sign) {
  return (sign >= 0 ? 1 : -1) * amount * DOOR_SWING_RAD;
}

/**
 * Union-find over triangles. Without `position`, vertices join only when they
 * share an index. With `position` (a position attribute), corners that land
 * on the same point join too, so the six faces of one panel are one leaf
 * even when the exporter did not weld them.
 * @param {ArrayLike<number>} index
 * @param {{ getX: (i: number) => number, getY: (i: number) => number, getZ: (i: number) => number } | null} [position]
 * @returns {number[][]} groups of triangle-start offsets into `index`
 */
export function triangleComponents(index, position = null) {
  const n = index.length;
  /** @type {Map<number, number>} */
  const parent = new Map();
  const find = (v) => {
    let p = parent.has(v) ? parent.get(v) : v;
    if (p !== v) {
      p = find(p);
      parent.set(v, p);
    } else if (!parent.has(v)) {
      parent.set(v, v);
    }
    return p;
  };
  const union = (a, b) => {
    const pa = find(a);
    const pb = find(b);
    if (pa !== pb) parent.set(pa, pb);
  };
  if (position) {
    /** @type {Map<string, number>} */
    const canon = new Map();
    const quant = 1e4; // 0.1 mm in metres
    const count = position.count ?? index.reduce((m, v) => Math.max(m, v), 0) + 1;
    for (let v = 0; v < count; v++) {
      const key = `${Math.round(position.getX(v) * quant)},${Math.round(position.getY(v) * quant)},${Math.round(position.getZ(v) * quant)}`;
      const prior = canon.get(key);
      if (prior === undefined) canon.set(key, v);
      else union(v, prior);
    }
  }
  for (let i = 0; i + 2 < n; i += 3) {
    union(index[i], index[i + 1]);
    union(index[i + 1], index[i + 2]);
  }
  /** @type {Map<number, number[]>} */
  const groups = new Map();
  for (let i = 0; i + 2 < n; i += 3) {
    const root = find(index[i]);
    let list = groups.get(root);
    if (!list) {
      list = [];
      groups.set(root, list);
    }
    list.push(i);
  }
  return [...groups.values()];
}

/**
 * If one mesh holds several disconnected leaves, replace it with one mesh
 * per leaf (same transform and material). A single panel is returned as-is.
 * @param {THREE.Mesh} mesh
 * @returns {THREE.Mesh[]}
 */
export function splitDisconnectedMesh(mesh) {
  const geom = mesh.geometry;
  const indexAttr = geom?.getIndex?.();
  const pos = geom?.getAttribute?.("position");
  if (!indexAttr || !pos || !mesh.parent) return [mesh];
  const groups = triangleComponents(indexAttr.array, pos);
  if (groups.length < 2) return [mesh];

  const norm = geom.getAttribute("normal");
  /** @type {THREE.Mesh[]} */
  const created = [];
  for (const tris of groups) {
    /** @type {Map<number, number>} */
    const remap = new Map();
    const positions = [];
    const normals = [];
    const indices = [];
    const take = (vi) => {
      let next = remap.get(vi);
      if (next !== undefined) return next;
      next = positions.length / 3;
      remap.set(vi, next);
      positions.push(pos.getX(vi), pos.getY(vi), pos.getZ(vi));
      if (norm) normals.push(norm.getX(vi), norm.getY(vi), norm.getZ(vi));
      return next;
    };
    for (const start of tris) {
      indices.push(
        take(indexAttr.getX(start)),
        take(indexAttr.getX(start + 1)),
        take(indexAttr.getX(start + 2)),
      );
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    if (normals.length) {
      g.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    }
    g.setIndex(indices);
    const child = new THREE.Mesh(g, mesh.material);
    child.name = mesh.name;
    child.position.copy(mesh.position);
    child.quaternion.copy(mesh.quaternion);
    child.scale.copy(mesh.scale);
    child.visible = mesh.visible;
    mesh.parent.add(child);
    created.push(child);
  }
  mesh.parent.remove(mesh);
  geom.dispose?.();
  return created;
}

/**
 * @param {THREE.Object3D} root
 * @returns {THREE.Object3D[]}
 */
export function collectDoorHosts(root, records = []) {
  /** @type {THREE.Object3D[]} */
  const named = [];
  root.traverse((obj) => {
    const raw = obj.name || "";
    if (meshIdentity(raw).part !== "door") return;
    const parentName = obj.parent?.name || "";
    if (meshIdentity(parentName).part === "door") return;
    named.push(obj);
  });
  // Drawers and cabinet doors (kitchen runs) are named by their part id,
  // not "door"; their records name that mesh in `element`.
  const drawerElements = new Set(
    (records || [])
      .filter((r) => r && (r.kind === "drawer" || r.kind === "hinged") && r.element)
      .map((r) => String(r.element)),
  );
  if (drawerElements.size) {
    root.traverse((obj) => {
      const ident = meshIdentity(obj.name || "");
      if (!ident.element || !drawerElements.has(ident.element)) return;
      if (meshIdentity(obj.parent?.name || "").element === ident.element) return;
      named.push(obj);
    });
  }
  /** @type {THREE.Object3D[]} */
  const hosts = [];
  for (const host of named) {
    if (host.isMesh) {
      hosts.push(...splitDisconnectedMesh(host));
      continue;
    }
    /** @type {THREE.Mesh[]} */
    const meshes = [];
    host.traverse((obj) => {
      if (obj.isMesh) meshes.push(obj);
    });
    if (meshes.length === 1) {
      const parts = splitDisconnectedMesh(meshes[0]);
      if (parts.length > 1) {
        hosts.push(...parts);
        continue;
      }
    }
    hosts.push(host);
  }
  return hosts;
}

/**
 * @param {{ center: THREE.Vector3 }[]} entries
 * @param {object[]} records
 * @param {number} [tolerance]
 */
export function matchDoorHosts(entries, records, tolerance = DOOR_MATCH_M) {
  /** @type {{ distance: number, entry: { center: THREE.Vector3 }, record: object }[]} */
  const candidates = [];
  for (const entry of entries) {
    for (const record of records) {
      if (!record) continue;
      const drawer = record.kind === "drawer" && Array.isArray(record.slide);
      const sliding = isSlidingRecord(record) || isSectionalRecord(record);
      if (!drawer && !sliding && (record.kind !== "hinged" || !record.hinge)) continue;
      const c = record.center;
      if (!Array.isArray(c) || c.length < 3) continue;
      const dx = entry.center.x - Number(c[0]);
      const dy = entry.center.y - Number(c[1]);
      const dz = entry.center.z - Number(c[2]);
      const distance = Math.hypot(dx, dy, dz);
      if (distance <= tolerance) candidates.push({ distance, entry, record });
    }
  }
  candidates.sort((a, b) => a.distance - b.distance);
  const usedHosts = new Set();
  const usedIds = new Set();
  /** @type {{ entry: { center: THREE.Vector3, host?: THREE.Object3D }, record: object }[]} */
  const pairs = [];
  for (const cand of candidates) {
    if (usedHosts.has(cand.entry) || usedIds.has(cand.record.id)) continue;
    usedHosts.add(cand.entry);
    usedIds.add(cand.record.id);
    pairs.push({ entry: cand.entry, record: cand.record });
  }
  return pairs;
}

/**
 * @param {THREE.Object3D} host
 * @returns {THREE.Vector3}
 */
function worldCenter(host) {
  host.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(host);
  return box.getCenter(new THREE.Vector3());
}

/**
 * @param {THREE.Object3D} host
 * @param {object} record
 */
export function bindHinge(host, record) {
  const parent = host.parent;
  if (!parent) return null;
  if (record.kind === "drawer") return bindDrawer(host, record);
  if (isSlidingRecord(record)) return bindSliding(host, record);
  if (isSectionalRecord(record)) return bindSectional(host, record);
  const pivot = new THREE.Group();
  pivot.name = `hinge:${record.id}`;
  parent.add(pivot);
  parent.updateWorldMatrix(true, false);
  const hinge = new THREE.Vector3(
    Number(record.hinge[0]),
    Number(record.hinge[1]),
    Number(record.hinge[2]),
  );
  pivot.position.copy(parent.worldToLocal(hinge));
  pivot.updateWorldMatrix(true, false);
  pivot.attach(host);
  const binding = {
    id: record.id,
    pivot,
    host,
    sign: Number(record.sign) >= 0 ? 1 : -1,
    goal: 0,
    anim: null,
  };
  const tag = (obj) => {
    obj.userData.bpDoor = binding;
  };
  tag(pivot);
  host.traverse(tag);
  return binding;
}

/**
 * Drawer: a group at the parent origin holds the mesh; sliding moves the
 * group along the record's world vector, converted to the parent's frame.
 * @param {THREE.Object3D} host
 * @param {object} record
 */
export function bindDrawer(host, record) {
  const parent = host.parent;
  if (!parent) return null;
  const pivot = new THREE.Group();
  pivot.name = `drawer:${record.id}`;
  parent.add(pivot);
  parent.updateWorldMatrix(true, false);
  const c = record.center.map(Number);
  const s = record.slide.map(Number);
  const a = parent.worldToLocal(new THREE.Vector3(c[0], c[1], c[2]));
  const b = parent.worldToLocal(new THREE.Vector3(c[0] + s[0], c[1] + s[1], c[2] + s[2]));
  pivot.updateWorldMatrix(true, false);
  pivot.attach(host);
  const binding = {
    id: record.id,
    kind: "drawer",
    pivot,
    host,
    slideLocal: b.sub(a),
    sign: 1,
    goal: 0,
    anim: null,
  };
  const tag = (obj) => {
    obj.userData.bpDoor = binding;
  };
  tag(pivot);
  host.traverse(tag);
  return binding;
}

/**
 * @param {object | null | undefined} record
 * @returns {boolean}
 */
export function isSlidingRecord(record) {
  return Boolean(
    record &&
      record.kind === "sliding" &&
      Array.isArray(record.start) &&
      Array.isArray(record.end) &&
      Array.isArray(record.panels) &&
      record.panels.length > 0,
  );
}

const _xAxis = new THREE.Vector3(1, 0, 0);

/**
 * @param {object | null | undefined} record
 * @returns {boolean}
 */
export function isSectionalRecord(record) {
  return Boolean(
    record &&
      record.kind === "sectional" &&
      ["start", "end", "bottom", "top", "inward"].every((k) => Array.isArray(record[k])) &&
      Number(record.sections) >= 1,
  );
}

/**
 * Point and tilt on a sectional door's track, in the door frame: y up the
 * leaf plane from its bottom edge, z into the room. Straight up to `rise`,
 * a quarter bend of radius `bend`, then level. `tilt` is the section's turn
 * about the frame's x axis (0 upright, π/2 lying level under the ceiling).
 * @param {number} s arc length from the bottom edge, metres
 * @param {number} rise straight run, metres (the leaf height)
 * @param {number} bend bend radius, metres
 * @returns {{ y: number, z: number, tilt: number }}
 */
export function sectionalTrack(s, rise, bend) {
  if (s <= rise || bend <= 0) return { y: s, z: 0, tilt: 0 };
  const arc = (Math.PI / 2) * bend;
  if (s <= rise + arc) {
    const phi = (s - rise) / bend;
    return { y: rise + bend * Math.sin(phi), z: bend * (1 - Math.cos(phi)), tilt: phi };
  }
  return { y: rise + bend, z: bend + (s - rise - arc), tilt: Math.PI / 2 };
}

/**
 * Track length a sectional door travels from shut to fully open: the leaf
 * height plus the bend, so the whole leaf lies level.
 * @param {number} rise
 * @param {number} bend
 */
export function sectionalTravel(rise, bend) {
  return rise + (Math.PI / 2) * Math.max(0, bend);
}

/**
 * Sectional overhead door. A frame group sits on the leaf's bottom edge with
 * x along the leaf, y up and z inward (parent-local). Each section is a
 * pivot on the track holding a copy of the slab squeezed to 1/n of its
 * height and centred on the pivot.
 * @param {THREE.Object3D} host
 * @param {object} record
 */
export function bindSectional(host, record) {
  const parent = host.parent;
  if (!parent) return null;
  parent.updateWorldMatrix(true, false);
  host.updateWorldMatrix(true, true);
  const toLocal = (v) => parent.worldToLocal(new THREE.Vector3(Number(v[0]), Number(v[1]), Number(v[2])));
  const start = toLocal(record.start);
  const end = toLocal(record.end);
  const bottom = toLocal(record.bottom);
  const top = toLocal(record.top);
  const inwardEnd = toLocal([
    Number(record.bottom[0]) + Number(record.inward[0]),
    Number(record.bottom[1]) + Number(record.inward[1]),
    Number(record.bottom[2]) + Number(record.inward[2]),
  ]);
  const xDir = end.clone().sub(start);
  const yDir = top.clone().sub(bottom);
  const rise = yDir.length();
  if (xDir.lengthSq() < 1e-12 || rise < 1e-6) return null;
  xDir.normalize();
  yDir.normalize();
  const zDir = inwardEnd.sub(bottom);
  zDir.addScaledVector(yDir, -zDir.dot(yDir)).addScaledVector(xDir, -zDir.dot(xDir));
  if (zDir.lengthSq() < 1e-12) return null;
  zDir.normalize();
  // Right-handed frame: keep z inward and y up, take x = y × z.
  const x = new THREE.Vector3().crossVectors(yDir, zDir);
  const basis = new THREE.Matrix4().makeBasis(x, yDir, zDir);
  const frame = new THREE.Group();
  frame.name = host.name;
  frame.position.copy(bottom);
  frame.quaternion.setFromRotationMatrix(basis);
  parent.add(frame);
  frame.updateWorldMatrix(true, false);
  frame.attach(host);
  const n = Math.max(1, Math.round(Number(record.sections)));
  const h = rise / n;
  const bend = Math.max(0, Number(record.bend) || 0);
  /** @type {{ pivot: THREE.Object3D, s0: number }[]} */
  const sections = [];
  for (let i = 0; i < n; i++) {
    const leaf = i === 0 ? host : host.clone(true);
    const pivot = new THREE.Group();
    pivot.name = `section:${record.id}:${i}`;
    const squeeze = new THREE.Group();
    squeeze.position.y = -h / 2;
    squeeze.scale.y = 1 / n;
    pivot.add(squeeze);
    frame.add(pivot);
    // Keep the slab's frame-local transform: it spans y 0…rise in `squeeze`.
    squeeze.add(leaf);
    sections.push({ pivot, s0: (i + 0.5) * h });
  }
  const binding = {
    id: record.id,
    kind: "sectional",
    pivot: frame,
    host: frame,
    sections,
    rise,
    bend,
    travel: sectionalTravel(rise, bend),
    sign: 1,
    goal: 0,
    anim: null,
  };
  placeSections(binding, 0);
  frame.traverse((obj) => {
    obj.userData.bpDoor = binding;
  });
  return binding;
}

/**
 * @param {{ sections: { pivot: THREE.Object3D, s0: number }[], rise: number, bend: number, travel: number }} binding
 * @param {number} amount 0 shut … 1 open
 */
export function placeSections(binding, amount) {
  for (const section of binding.sections) {
    const at = sectionalTrack(section.s0 + amount * binding.travel, binding.rise, binding.bend);
    section.pivot.position.set(0, at.y, at.z);
    section.pivot.rotation.set(at.tilt, 0, 0);
  }
}

/**
 * Sliding or pocket leaf. A group at the parent origin (named like the host,
 * so session hide finds it) holds one slide group per panel. Inside each, a
 * scale group sits on the `start` jamb with +X along the leaf and squeezes
 * its copy of the slab to the panel's share. The slide group then carries
 * the panel to its place and, when open, along its `slide`.
 * @param {THREE.Object3D} host
 * @param {object} record
 */
export function bindSliding(host, record) {
  const parent = host.parent;
  if (!parent) return null;
  parent.updateWorldMatrix(true, false);
  host.updateWorldMatrix(true, true);
  const toLocal = (v) => parent.worldToLocal(new THREE.Vector3(Number(v[0]), Number(v[1]), Number(v[2])));
  const start = toLocal(record.start);
  const end = toLocal(record.end);
  const along = end.clone().sub(start);
  if (along.lengthSq() < 1e-12) return null;
  const dir = along.clone().normalize();
  const turn = new THREE.Quaternion().setFromUnitVectors(_xAxis, dir);
  const container = new THREE.Group();
  container.name = host.name;
  parent.add(container);
  // Copy the closed slab for every extra panel before the host moves.
  const leaves = record.panels.map((_, i) => (i === 0 ? host : host.clone(true)));
  /** @type {{ pivot: THREE.Object3D, base: THREE.Vector3, slideLocal: THREE.Vector3, span: number[] }[]} */
  const panels = [];
  record.panels.forEach((panel, i) => {
    const span = Array.isArray(panel.span) ? panel.span.map(Number) : [0, 1];
    const s = Array.isArray(panel.slide) ? panel.slide : [0, 0, 0];
    const slideLocal = toLocal([
      Number(record.start[0]) + Number(s[0]),
      Number(record.start[1]) + Number(s[1]),
      Number(record.start[2]) + Number(s[2]),
    ]).sub(start);
    const pivot = new THREE.Group();
    pivot.name = `slide:${record.id}:${i}`;
    container.add(pivot);
    const scaler = new THREE.Group();
    scaler.position.copy(start);
    scaler.quaternion.copy(turn);
    pivot.add(scaler);
    pivot.updateWorldMatrix(true, true);
    const leaf = leaves[i];
    if (leaf !== host) {
      parent.add(leaf);
      leaf.updateWorldMatrix(true, true);
    }
    scaler.attach(leaf);
    scaler.scale.x = Math.max(1e-3, span[1] - span[0]);
    const base = along.clone().multiplyScalar(span[0]);
    pivot.position.copy(base);
    panels.push({ pivot, base, slideLocal, span });
  });
  const binding = {
    id: record.id,
    kind: "sliding",
    pivot: container,
    host: container,
    panels,
    sign: 1,
    goal: 0,
    anim: null,
  };
  container.traverse((obj) => {
    obj.userData.bpDoor = binding;
  });
  return binding;
}

/**
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 */
export function sampleDoor(binding, now) {
  const anim = binding.anim;
  if (!anim) return binding.goal;
  const t = (now - anim.t0) / DOOR_SWING_MS;
  if (t >= 1) {
    binding.anim = null;
    binding.goal = anim.to;
    return anim.to;
  }
  return anim.from + (anim.to - anim.from) * easeInOutCubic(t);
}

const _parentQuat = new THREE.Quaternion();
const _localAxis = new THREE.Vector3();

/**
 * 90° about world +Y, even when an ancestor (the glTF Z-up root) is rotated.
 * The pivot's closed pose is the identity quaternion.
 * @param {THREE.Object3D} pivot
 * @param {number} angle
 */
export function setPivotSwing(pivot, angle) {
  pivot.quaternion.identity();
  if (Math.abs(angle) <= 1e-8) return;
  const parent = pivot.parent;
  _localAxis.set(0, 1, 0);
  if (parent) {
    parent.updateWorldMatrix(true, false);
    parent.getWorldQuaternion(_parentQuat).invert();
    _localAxis.applyQuaternion(_parentQuat);
  }
  if (_localAxis.lengthSq() < 1e-12) return;
  _localAxis.normalize();
  pivot.rotateOnAxis(_localAxis, angle);
}

/**
 * @param {{ pivot: THREE.Object3D, sign: number, goal: number, anim: object | null }} binding
 * @param {number} now
 */
export function applyDoorSwing(binding, now) {
  const amount = sampleDoor(binding, now);
  if (binding.sections) {
    placeSections(binding, amount);
    return amount;
  }
  if (binding.panels) {
    for (const panel of binding.panels) {
      panel.pivot.position.copy(panel.base).addScaledVector(panel.slideLocal, amount);
    }
    return amount;
  }
  if (binding.slideLocal) {
    binding.pivot.position.copy(binding.slideLocal).multiplyScalar(amount);
    return amount;
  }
  setPivotSwing(binding.pivot, swingAngle(amount, binding.sign));
  return amount;
}

/**
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 */
export function toggleDoor(binding, now) {
  const current = sampleDoor(binding, now);
  const target = binding.goal > 0.5 ? 0 : 1;
  binding.goal = target;
  binding.anim = { from: current, to: target, t0: now };
}

/**
 * Swing shut. A door that is already closing stays on that animation.
 * @param {{ goal: number, anim: { from: number, to: number, t0: number } | null }} binding
 * @param {number} now
 * @returns {boolean}
 */
export function closeDoor(binding, now) {
  const current = sampleDoor(binding, now);
  if (current <= 1e-3) return false;
  if (binding.goal > 0.5) {
    binding.goal = 0;
    binding.anim = { from: current, to: 0, t0: now };
  }
  return true;
}

const _corner = new THREE.Vector3();
const proxyMaterial = new THREE.MeshBasicMaterial({
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0,
  depthWrite: false,
});

/**
 * Closed-leaf box in world space. Captured while the leaf is shut; the proxy
 * stays there after the leaf swings.
 * @param {THREE.Object3D} host
 * @returns {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] } | null}
 */
export function hostClosedObb(host) {
  /** @type {THREE.Mesh[]} */
  const meshes = [];
  host.updateWorldMatrix(true, true);
  host.traverse((obj) => {
    if (obj.isMesh && obj.geometry?.getAttribute?.("position")) meshes.push(obj);
  });
  if (!meshes.length) return null;
  const x = new THREE.Vector3();
  const y = new THREE.Vector3();
  const z = new THREE.Vector3();
  meshes[0].updateWorldMatrix(true, false);
  meshes[0].matrixWorld.extractBasis(x, y, z);
  if (x.lengthSq() < 1e-12 || y.lengthSq() < 1e-12 || z.lengthSq() < 1e-12) return null;
  x.normalize();
  y.normalize();
  z.normalize();
  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;
  for (const mesh of meshes) {
    const geom = mesh.geometry;
    if (!geom.boundingBox) geom.computeBoundingBox();
    const bb = geom.boundingBox;
    const xs = [bb.min.x, bb.max.x];
    const ys = [bb.min.y, bb.max.y];
    const zs = [bb.min.z, bb.max.z];
    for (const cx of xs) {
      for (const cy of ys) {
        for (const cz of zs) {
          _corner.set(cx, cy, cz).applyMatrix4(mesh.matrixWorld);
          const lx = _corner.dot(x);
          const ly = _corner.dot(y);
          const lz = _corner.dot(z);
          if (lx < minX) minX = lx;
          if (ly < minY) minY = ly;
          if (lz < minZ) minZ = lz;
          if (lx > maxX) maxX = lx;
          if (ly > maxY) maxY = ly;
          if (lz > maxZ) maxZ = lz;
        }
      }
    }
  }
  const half = [(maxX - minX) / 2, (maxY - minY) / 2, (maxZ - minZ) / 2];
  if (half.some((h) => !(h > 1e-6))) return null;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const cz = (minZ + maxZ) / 2;
  const center = new THREE.Vector3(
    x.x * cx + y.x * cy + z.x * cz,
    x.y * cx + y.y * cy + z.y * cz,
    x.z * cx + y.z * cy + z.z * cz,
  );
  return { center, axes: [x, y, z], half };
}

/**
 * Invisible box for the closed leaf. Not parented. `raycast` is a no-op so a
 * scene raycast (orbit pivot, Measure) cannot hit it; the tap path uses
 * {@link rayObb} on the stored box instead.
 * @param {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] }} obb
 * @param {string} [name]
 */
export function proxyMeshFromObb(obb, name) {
  const geom = new THREE.BoxGeometry(obb.half[0] * 2, obb.half[1] * 2, obb.half[2] * 2);
  const mesh = new THREE.Mesh(geom, proxyMaterial);
  mesh.name = name || "opening";
  mesh.matrix.makeBasis(obb.axes[0], obb.axes[1], obb.axes[2]);
  mesh.matrix.setPosition(obb.center);
  mesh.matrixAutoUpdate = false;
  mesh.matrixWorld.copy(mesh.matrix);
  mesh.matrixWorldNeedsUpdate = false;
  mesh.visible = false;
  mesh.frustumCulled = false;
  mesh.userData.bpHitProxy = true;
  mesh.raycast = () => {};
  return mesh;
}

/**
 * Slab test. `tEnter` may be negative when the ray starts inside the box.
 * @param {THREE.Ray} ray
 * @param {{ center: THREE.Vector3, axes: THREE.Vector3[], half: number[] }} obb
 * @returns {{ tEnter: number, tExit: number } | null}
 */
export function rayObb(ray, obb) {
  const origin = ray.origin;
  const dir = ray.direction;
  let tMin = 0;
  let tMax = Infinity;
  for (let i = 0; i < 3; i++) {
    const axis = obb.axes[i];
    const e =
      axis.x * (obb.center.x - origin.x) +
      axis.y * (obb.center.y - origin.y) +
      axis.z * (obb.center.z - origin.z);
    const f = axis.x * dir.x + axis.y * dir.y + axis.z * dir.z;
    const h = obb.half[i];
    if (Math.abs(f) > 1e-8) {
      let t1 = (e + h) / f;
      let t2 = (e - h) / f;
      if (t1 > t2) {
        const swap = t1;
        t1 = t2;
        t2 = swap;
      }
      if (t1 > tMin) tMin = t1;
      if (t2 < tMax) tMax = t2;
      if (tMin > tMax) return null;
    } else if (-e - h > 0 || -e + h < 0) {
      return null;
    }
  }
  if (tMax < 0) return null;
  return { tEnter: tMin, tExit: tMax };
}

/**
 * Farthest open doorway the ray crosses. A nearer opening must not steal the
 * tap from a door seen through it.
 * @param {{ binding: object, tEnter: number }[]} crossed
 */
export function chooseOpeningAction(crossed) {
  if (!crossed.length) return null;
  let best = crossed[0];
  for (const item of crossed) {
    if (item.tEnter > best.tEnter) best = item;
  }
  return best.binding;
}

/**
 * @param {THREE.Object3D | null | undefined} obj
 */
function bindingOf(obj) {
  let node = obj;
  while (node) {
    if (node.userData?.bpDoor && !isHitProxy(node)) return node.userData.bpDoor;
    node = node.parent;
  }
  return null;
}

/**
 * Visible itself and through every ancestor.
 * @param {THREE.Object3D | null | undefined} obj
 */
function isShown(obj) {
  for (let node = obj; node; node = node.parent) if (!node.visible) return false;
  return true;
}

/**
 * @param {{ object?: THREE.Object3D }} hit
 */
function isDoorPickSolid(hit) {
  return isSceneSolid(hit.object);
}

/**
 * @param {object} binding
 */
function releaseProxy(binding) {
  binding.proxy?.geometry?.dispose?.();
  binding.proxy = null;
  binding.obb = null;
}

/**
 * Pointer handling plus hinge pivots. Call `bind` after the GLB is in the scene.
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   getCamera: () => THREE.Camera,
 *   records?: object[],
 *   isBlocked?: () => boolean,
 *   onLongPress?: (pt: { clientX: number, clientY: number, pointerId: number }) => void,
 *   onToggle?: (binding: object, move: { from: number, to: number }) => void,
 * }} opts
 */
export function createDoorController(opts) {
  const records = Array.isArray(opts.records) ? opts.records : [];
  const canvas = opts.canvas;
  const isBlocked = opts.isBlocked || (() => false);
  /** @type {ReturnType<typeof bindHinge>[]} */
  const bindings = [];
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  /** @type {{ id: number, x: number, y: number, moved: number, pointers: number, modifiers: boolean, consumed: boolean } | null} */
  let gesture = null;
  let pointersDown = 0;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let pressTimer = null;

  function clearPress() {
    if (pressTimer) clearTimeout(pressTimer);
    pressTimer = null;
  }
  /** Tell the caller a leaf was driven (interaction feedback, feedback.js). */
  function report(binding, from, to) {
    try {
      opts.onToggle?.(binding, { from, to });
    } catch (err) {
      console.warn("door onToggle", err);
    }
  }
  const taps = createTapRegistry();
  // Leaf claims beat the opening fallback. A later switch registers a claim
  // of its own; the nearest claimed solid wins, wherever it sits on the ray.
  taps.register({
    id: "door",
    priority: 100,
    claim(hit, ctx) {
      const binding = bindingOf(hit.object);
      if (!binding || binding.host?.userData?.bpIfcHidden) return null;
      const now = ctx.now ?? performance.now();
      const open = sampleDoor(binding, now) > OPENING_LIVE;
      const run = () => {
        const t = ctx.now ?? performance.now();
        const from = sampleDoor(binding, t);
        toggleDoor(binding, t);
        report(binding, from, binding.goal);
      };
      return {
        onTap: run,
        actions: [{ id: "door", labelKey: open ? "ui.close" : "ui.open", run }],
      };
    },
    // Extended tap target: the leaf's (or drawer front's) current centre.
    targets() {
      const out = [];
      for (const binding of bindings) {
        const host = binding.host;
        if (!host || host.userData?.bpIfcHidden || !isShown(host)) continue;
        const box = new THREE.Box3().setFromObject(host);
        if (box.isEmpty()) continue;
        const center = box.getCenter(new THREE.Vector3());
        out.push({
          center,
          group: `door:${binding.id}`,
          hit: { object: host, point: center },
          owns: (obj) => bindingOf(obj) === binding,
        });
      }
      return out;
    },
  });
  /**
   * Farthest open doorway on the ray. With `ctx.maxT` (the registry's
   * visible pass), only doorways the ray enters before that distance count.
   */
  function openingOnRay(ctx) {
    /** @type {{ binding: object, tEnter: number }[]} */
    const crossed = [];
    const maxT = Number.isFinite(ctx.maxT) ? ctx.maxT : Infinity;
    for (const door of bindings) {
      if (!door.obb || door.host?.userData?.bpIfcHidden) continue;
      if (sampleDoor(door, ctx.now) <= OPENING_LIVE) continue;
      const span = rayObb(ctx.raycaster.ray, door.obb);
      if (!span || span.tEnter > maxT) continue;
      crossed.push({ binding: door, tEnter: span.tEnter });
    }
    return chooseOpeningAction(crossed);
  }
  taps.register({
    id: "opening",
    priority: 10,
    probe: (_solids, ctx) => Boolean(openingOnRay(ctx)),
    fallback(_solids, ctx) {
      const binding = openingOnRay(ctx);
      if (!binding) return false;
      const from = sampleDoor(binding, ctx.now);
      if (!closeDoor(binding, ctx.now)) return false;
      report(binding, from, 0);
      return true;
    },
  });

  function bind(root) {
    for (const binding of bindings) releaseProxy(binding);
    bindings.length = 0;
    if (!root || !records.length) return 0;
    root.updateWorldMatrix(true, true);
    const hosts = collectDoorHosts(root, records);
    const entries = hosts.map((host) => ({ host, center: worldCenter(host) }));
    for (const pair of matchDoorHosts(entries, records)) {
      const binding = bindHinge(pair.entry.host, pair.record);
      if (!binding) continue;
      // A drawer has no empty doorway to tap; it is tapped on itself.
      const obb = binding.kind === "drawer" ? null : hostClosedObb(binding.host);
      binding.obb = obb;
      binding.proxy = obb ? proxyMeshFromObb(obb, `opening:${binding.id}`) : null;
      bindings.push(binding);
    }
    return bindings.length;
  }

  /**
   * @param {number} now
   * @returns {boolean} true while a leaf is moving
   */
  function step(now) {
    let moving = false;
    for (const binding of bindings) {
      const wasMoving = Boolean(binding.anim);
      if (!wasMoving && binding.shown === binding.goal) continue;
      applyDoorSwing(binding, now);
      binding.shown = binding.anim ? null : binding.goal;
      if (wasMoving) moving = true;
    }
    return moving;
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerDown(ev) {
    if (ev.button !== undefined && ev.button !== 0) return;
    pointersDown += 1;
    if (pointersDown > 1) {
      gesture = null;
      return;
    }
    gesture = {
      id: ev.pointerId,
      x: ev.clientX,
      y: ev.clientY,
      moved: 0,
      pointers: 1,
      modifiers: ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey,
      consumed: false,
    };
    clearPress();
    pressTimer = setTimeout(() => {
      pressTimer = null;
      if (!gesture || gesture.consumed) return;
      const kind = classifyHold({
        dt: LONG_PRESS_MS,
        dx: gesture.moved,
        dy: 0,
        pointers: pointersDown,
        button: 0,
        blocked: isBlocked(),
        modifiers: gesture.modifiers,
        released: false,
      });
      if (kind !== "longpress") return;
      gesture.consumed = true;
      opts.onLongPress?.({
        clientX: gesture.x,
        clientY: gesture.y,
        pointerId: gesture.id,
      });
    }, LONG_PRESS_MS);
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerMove(ev) {
    if (!gesture || ev.pointerId !== gesture.id) return;
    const dist = Math.hypot(ev.clientX - gesture.x, ev.clientY - gesture.y);
    if (dist > gesture.moved) gesture.moved = dist;
    if (gesture.moved > TAP_PX) clearPress();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerUp(ev) {
    pointersDown = Math.max(0, pointersDown - 1);
    clearPress();
    if (!gesture || ev.pointerId !== gesture.id) return;
    const g = gesture;
    gesture = null;
    if (g.consumed) return;
    const dist = Math.max(g.moved, Math.hypot(ev.clientX - g.x, ev.clientY - g.y));
    const kind = classifyPointerGesture({
      dx: dist,
      dy: 0,
      pointers: pointersDown > 0 ? 2 : 1,
      button: ev.button,
      blocked: isBlocked(),
      modifiers: ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey,
    });
    if (kind !== "tap") return;
    pick(ev);
  }

  function onPointerCancel() {
    pointersDown = Math.max(0, pointersDown - 1);
    gesture = null;
  }

  /**
   * @param {PointerEvent} ev
   */
  function pick(ev) {
    const camera = opts.getCamera();
    if (!camera || !bindings.length) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || canvas.clientWidth || 1;
    const h = rect.height || canvas.clientHeight || 1;
    pointer.x = ((ev.clientX - rect.left) / w) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / h) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const sceneRoot = bindings[0]?.pivot?.parent;
    // Raycast the whole loaded model, not only the pivot parent (a door may
    // sit behind another part). The pivot's parent is the glTF root.
    // Opening proxies are not in this graph.
    let top = sceneRoot;
    while (top?.parent) top = top.parent;
    if (!top) return;
    const hits = raycaster.intersectObject(top, true);
    taps.dispatch(
      hits,
      {
        raycaster,
        now: performance.now(),
        camera,
        root: top,
        tap: { x: ev.clientX - rect.left, y: ev.clientY - rect.top },
        size: { w, h },
      },
      isDoorPickSolid,
    );
  }

  canvas.addEventListener("pointerdown", onPointerDown, true);
  canvas.addEventListener("pointermove", onPointerMove, true);
  canvas.addEventListener("pointerup", onPointerUp, true);
  canvas.addEventListener("pointercancel", onPointerCancel, true);
  canvas.addEventListener("contextmenu", (ev) => ev.preventDefault());

  return { bind, step, bindings, taps };
}
