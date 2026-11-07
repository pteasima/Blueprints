/**
 * Fixture colour and tap, driven by `<id>.fixtures.json` records.
 *
 * Each record is `{ id, role, center }` in glTF metres. `role` is the type
 * (`power`, `data`, `sensor`, `switch`, `light`, `blind`), not a device id.
 * Solids that share an id (the under-bed strip) change together.
 *
 * Off is a pale tint. On is the solid colour. Power, data, and sensors stay
 * off: they are not interactive. A switch flashes on for a quarter second.
 * A light or a blind motor toggles. A switch does not change a light.
 *
 * The claim is registered on the same tap registry as doors. The nearest
 * claimed solid wins, so a switch in front of a leaf takes the tap, and a
 * wall does not hide a switch behind it.
 */
import * as THREE from "three";
import { collectDoorHosts, worldCenter } from "./doors.js";
import { SOLID_COLORS } from "./materials.js";

/** Match a device centre to a record, metres. Stacked plates are 71 mm apart. */
export const FIXTURE_MATCH_M = 0.03;
/** How long a switch stays bright. */
export const SWITCH_FLASH_MS = 250;
/** Fraction of the on colour in the off tint. The rest is white. */
export const PALE_MIX = 0.22;
/** Placeholder glow. Tuned later. */
export const SWITCH_GLOW = 0.55;

/** Mesh labels that can carry fixture solids. */
export const FIXTURE_LABELS = ["light", "switch", "sensor", "outlet", "actuator"];

/**
 * On colours. Light yellow is the viewer's existing lit-light colour.
 * `tap` is `flash`, `toggle`, or null (painted, not interactive).
 * @type {Record<string, { on: number[], tap: "flash" | "toggle" | null, glow?: boolean }>}
 */
export const FIXTURE_ROLES = {
  power: { on: [214, 36, 36], tap: null },
  data: { on: [32, 168, 72], tap: null },
  sensor: { on: [36, 112, 230], tap: null },
  switch: { on: [255, 255, 255], tap: "flash", glow: true },
  blind: { on: [150, 48, 210], tap: "toggle" },
  light: { on: SOLID_COLORS.light, tap: "toggle" },
};

/**
 * @param {number[]} on 0–255
 * @param {number} [mix]
 * @returns {number[]}
 */
export function paleTint(on, mix = PALE_MIX) {
  const mixed = on.map((channel) => Math.round((1 - mix) * 255 + mix * channel));
  const dist = Math.hypot(mixed[0] - on[0], mixed[1] - on[1], mixed[2] - on[2]);
  if (dist >= 18) return mixed;
  return on.map((channel) => Math.round(channel * 0.9));
}

/**
 * @param {{ center: THREE.Vector3 }[]} entries
 * @param {object[]} records
 * @param {number} [tolerance]
 */
export function matchFixtureHosts(entries, records, tolerance = FIXTURE_MATCH_M) {
  /** @type {{ distance: number, entry: { center: THREE.Vector3 }, record: object }[]} */
  const candidates = [];
  for (const entry of entries) {
    for (const record of records) {
      if (!record || !FIXTURE_ROLES[record.role] || !Array.isArray(record.center)) continue;
      if (record.center.length < 3) continue;
      const dx = entry.center.x - Number(record.center[0]);
      const dy = entry.center.y - Number(record.center[1]);
      const dz = entry.center.z - Number(record.center[2]);
      const distance = Math.hypot(dx, dy, dz);
      if (distance <= tolerance) candidates.push({ distance, entry, record });
    }
  }
  candidates.sort((a, b) => a.distance - b.distance);
  const usedHosts = new Set();
  const usedRecords = new Set();
  /** @type {{ entry: { center: THREE.Vector3, host?: THREE.Object3D }, record: object }[]} */
  const pairs = [];
  for (const cand of candidates) {
    if (usedHosts.has(cand.entry) || usedRecords.has(cand.record)) continue;
    usedHosts.add(cand.entry);
    usedRecords.add(cand.record);
    pairs.push({ entry: cand.entry, record: cand.record });
  }
  return pairs;
}

/**
 * @param {THREE.Color} color
 * @param {number[]} rgb
 */
function setByteColor(color, rgb) {
  color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
}

/**
 * `Material.clone` does not copy `onBeforeCompile`. Copying only the colour
 * left every fixture face on a stock log-depth program while the rest of the
 * model kept the frag-depth patch. That second program, on a full iPad
 * framebuffer, is what WebKit lost. One variant per role and on/off state
 * keeps the patched program and the colour uniform.
 * @param {THREE.Material} base
 * @param {number[]} rgb
 * @param {boolean} glow
 */
function variantFrom(base, rgb, glow) {
  const mat = base.clone();
  mat.onBeforeCompile = base.onBeforeCompile;
  mat.customProgramCacheKey = base.customProgramCacheKey;
  mat.userData.bpFixtureOwned = true;
  if (mat.color) setByteColor(mat.color, rgb);
  if (glow && mat.emissive) {
    mat.emissive.setRGB(1, 1, 1);
    mat.emissiveIntensity = SWITCH_GLOW;
    mat.toneMapped = false;
  }
  return mat;
}

/**
 * @param {object[]} records
 */
export function createFixtureController(opts = {}) {
  const records = Array.isArray(opts.records) ? opts.records : [];
  /** @type {object[]} */
  const bindings = [];
  /** @type {Map<string, THREE.Material>} */
  const variants = new Map();
  let paintDirty = false;

  function disposeVariants() {
    for (const mat of variants.values()) mat.dispose?.();
    variants.clear();
  }

  /**
   * @param {THREE.Material} base
   * @param {string} roleName
   * @param {boolean} on
   */
  function variantFor(base, roleName, on) {
    const role = FIXTURE_ROLES[roleName];
    const shader = base.customProgramCacheKey ? base.customProgramCacheKey() : base.type;
    const key = `${base.type}|${shader}|${roleName}|${on ? 1 : 0}`;
    let mat = variants.get(key);
    if (!mat) {
      const rgb = on ? role.on : paleTint(role.on);
      mat = variantFrom(base, rgb, Boolean(on && role.glow));
      variants.set(key, mat);
    }
    return mat;
  }

  /**
   * @param {THREE.Object3D | null | undefined} obj
   */
  function bindingOf(obj) {
    let node = obj;
    while (node) {
      if (node.userData?.bpFixture) return node.userData.bpFixture;
      node = node.parent;
    }
    return null;
  }

  /**
   * A device is often one group of face meshes. Colour every face.
   * @param {THREE.Object3D} host
   * @returns {THREE.Mesh[]}
   */
  function meshesOf(host) {
    if (!host) return [];
    if (host.isMesh) return [host];
    /** @type {THREE.Mesh[]} */
    const meshes = [];
    host.traverse((obj) => {
      if (obj.isMesh) meshes.push(obj);
    });
    return meshes;
  }

  /**
   * @param {object} binding
   * @param {THREE.Material} mat
   */
  function assign(binding, mat) {
    for (const mesh of binding.meshes) mesh.material = mat;
  }

  /**
   * @param {object} binding
   */
  function paint(binding) {
    const role = FIXTURE_ROLES[binding.role];
    if (!binding.meshes?.length) binding.meshes = meshesOf(binding.host);
    const meshes = binding.meshes || [];
    if (!role || !meshes.length || !binding.base) return;
    assign(binding, variantFor(binding.base, binding.role, Boolean(binding.on)));
  }

  /**
   * @param {object} binding
   * @param {boolean} on
   */
  function setGroup(binding, on) {
    for (const member of bindings) {
      if (member.id !== binding.id) continue;
      member.on = on;
      member.until = null;
      paint(member);
    }
    paintDirty = true;
  }

  /**
   * @param {object} binding
   * @param {number} now
   */
  function flash(binding, now) {
    for (const member of bindings) {
      if (member.id !== binding.id) continue;
      member.on = true;
      member.until = now + SWITCH_FLASH_MS;
      paint(member);
    }
    paintDirty = true;
  }

  /**
   * @param {THREE.Object3D} root
   * @returns {number}
   */
  function bind(root) {
    bindings.length = 0;
    if (!root || !records.length) return 0;
    /** @type {THREE.Object3D[]} */
    const hosts = [];
    for (const label of FIXTURE_LABELS) {
      hosts.push(...collectDoorHosts(root, label));
    }
    root.updateWorldMatrix(true, true);
    const entries = hosts.map((host) => ({ host, center: worldCenter(host) }));
    for (const pair of matchFixtureHosts(entries, records)) {
      const binding = {
        id: pair.record.id,
        role: pair.record.role,
        host: pair.entry.host,
        meshes: meshesOf(pair.entry.host),
        on: false,
        until: null,
        base: null,
      };
      const tag = (obj) => {
        obj.userData.bpFixture = binding;
      };
      pair.entry.host.traverse(tag);
      bindings.push(binding);
    }
    return bindings.length;
  }

  /**
   * Re-apply colours after a material-mode rebuild. Call after `applyMaterialMode`.
   */
  function syncMaterials() {
    disposeVariants();
    for (const binding of bindings) {
      const sample = binding.meshes?.find(
        (mesh) => mesh.material && !mesh.material.userData?.bpFixtureOwned,
      );
      if (sample) binding.base = sample.material;
    }
    for (const binding of bindings) paint(binding);
  }

  /**
   * @param {{ register: Function }} taps
   */
  function attach(taps) {
    taps.register({
      id: "fixture",
      priority: 90,
      claim(hit, ctx) {
        const binding = bindingOf(hit.object);
        if (!binding) return null;
        const tap = FIXTURE_ROLES[binding.role]?.tap;
        if (!tap) return null;
        return {
          onTap() {
            const now = ctx?.now ?? performance.now();
            if (tap === "flash") flash(binding, now);
            else setGroup(binding, !binding.on);
          },
        };
      },
    });
  }

  /**
   * @param {number} now
   * @returns {boolean}
   */
  function step(now) {
    let moving = paintDirty;
    paintDirty = false;
    for (const binding of bindings) {
      if (binding.until == null) continue;
      if (now >= binding.until) {
        binding.until = null;
        binding.on = false;
        paint(binding);
        moving = true;
      } else {
        moving = true;
      }
    }
    return moving;
  }

  return { bind, attach, syncMaterials, step, bindings, bindingOf };
}
