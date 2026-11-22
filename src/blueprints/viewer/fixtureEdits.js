/**
 * Fixture edit data: the rows of the edit-mode table and the overrides patch.
 * Pure functions, no three.js and no DOM (tests: fixtureEdits.test.mjs).
 *
 * A row is one fixture (one yaml-ifc element), not one cable: a cable that
 * feeds several fixtures has several rows (Petr, 2026-11-19: "This is a list
 * of cables, so sometimes there may be multiple fixtures on that cable (each
 * fixture needs a row)"). Columns follow the electrician's cable schedule,
 * sheet Soupis: Místnost, Číslo kabelu, Zařízení, Specifikace, Délka,
 * Rozvaděč, Poznámka. The values come from Pset_YamlIfc in the model, which
 * repeats the Soupis row (inputs/ground_floor/bedroom-1.11.yaml).
 *
 * Positions are house coordinates in metres: x east, y north, z up from the
 * 1.NP floor, the same frame as the YAML `Origin` and `Elevation`.
 *
 * The round trip (exported patch → repo overrides file → export) is
 * documented in docs/electrical/EditMode.md. Edits are session-only; a
 * refresh discards them and leftover `blueprints.fixtureEdits.*` keys
 * are removed on load.
 */

/** IFC class → yaml-ifc list key, for fixtures the viewer can duplicate. */
export const LIST_BY_TYPE = {
  IfcLightFixture: "lightFixtures",
  IfcSwitchingDevice: "switchingDevices",
  IfcSensor: "sensors",
  IfcOutlet: "outlets",
  IfcActuator: "actuators",
};

/** Electrical device classes. Lights count only when they carry a cable. */
const DEVICE_TYPES = new Set([
  "IfcSwitchingDevice",
  "IfcSensor",
  "IfcOutlet",
  "IfcActuator",
  "IfcCommunicationsAppliance",
]);

/** Pset_YamlIfc properties a row can edit ("replace" in the table). */
export const EDITABLE_PROPS = ["CableNumber", "DeviceCode", "CableSpec", "CableLength", "Panel", "Note"];

/** Snap step for moves: 1 cm. */
export const SNAP_M = 0.01;

/** Tolerance for "the deployed model already has this edit". */
export const ABSORBED_M = 0.0015;

export const STORAGE_PREFIX = "blueprints.fixtureEdits.";

/**
 * Store and patch format. 2 adds `cables` (cable route edits,
 * cableEdits.js); a version 1 store from before the cable routes still loads.
 */
export const EDITS_VERSION = 2;

/** True when the in-memory store has any fixture or cable-route edit. */
export function storeHasEdits(store) {
  if (!store) return false;
  return Boolean(Object.keys(store.fixtures || {}).length || Object.keys(store.cables || {}).length);
}

/**
 * Remove leftover `blueprints.fixtureEdits.*` keys. Edits are session-only
 * (Petr, 2026-11-22: a refresh cancels unsaved edits), so a load must not
 * restore them, and an older key must not move a fixture on a newer model.
 * @param {Storage | null | undefined} storage
 * @param {string} [prefix]
 * @returns {string[]} keys removed
 */
export function discardLegacyEdits(storage, prefix = STORAGE_PREFIX) {
  if (!storage) return [];
  const removed = [];
  try {
    const keys = [];
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i);
      if (key && key.startsWith(prefix)) keys.push(key);
    }
    for (const key of keys) {
      storage.removeItem(key);
      removed.push(key);
    }
  } catch {
    /* private mode */
  }
  return removed;
}

/**
 * `beforeunload` handler body: arm the prompt only when there are unsaved
 * edits (Petr, 2026-11-22: "only ask where there are unsaved edits").
 * @param {Event & { returnValue?: string }} event
 * @param {boolean} hasEdits
 */
export function onUnsavedLeave(event, hasEdits) {
  if (!hasEdits) return false;
  event.preventDefault();
  event.returnValue = "";
  return true;
}

/**
 * @param {object | null | undefined} element
 * @param {string} name
 */
export function psetOf(element, name) {
  for (const group of element?.propertySets || []) {
    if (group?.name === name) return group.properties || {};
  }
  return {};
}

/**
 * True for an element of the cable list: anything with a cable number or a
 * device code, and electrical devices (sockets have no cable).
 * @param {object | null | undefined} element
 */
export function isFixture(element) {
  if (!element || !element.type) return false;
  const props = psetOf(element, "Pset_YamlIfc");
  if (props.CableNumber != null || props.DeviceCode != null) return true;
  return DEVICE_TYPES.has(element.type);
}

function num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Placement the YAML stores (`Origin` + `Elevation`), or null for fixtures
 * drawn from a path (strips) or with no body of their own.
 * @param {object} element
 * @returns {{ origin: [number, number, number], refDirection: [number, number] | null, size: [number, number, number] | null } | null}
 */
export function yamlPlacement(element) {
  const own = psetOf(element, "yaml-ifc");
  const x = num(own.OriginX);
  const y = num(own.OriginY);
  if (x == null || y == null) return null;
  const z = num(own.Elevation) ?? 0;
  const rx = num(own.RefDirectionX);
  const ry = num(own.RefDirectionY);
  const w = num(own.Width);
  const d = num(own.Depth);
  const h = num(own.Height);
  return {
    origin: [x, y, z],
    refDirection: rx != null && ry != null ? [rx, ry] : null,
    size: w != null && d != null && h != null ? [w, d, h] : null,
  };
}

/**
 * Wall normal into the room for a wall device. yaml-ifc puts local +X on
 * `RefDirection` and grows the box along local +Y, which is +90° from it,
 * so +Y faces the room (C10-V on the west wall: RefDirection (0, −1) →
 * facing (1, 0), east into 1.11).
 * @param {[number, number] | null | undefined} ref
 * @returns {[number, number] | null}
 */
export function facingOf(ref) {
  if (!ref) return null;
  const [rx, ry] = ref;
  const len = Math.hypot(rx, ry);
  if (!(len > 1e-9)) return null;
  return [-ry / len, rx / len];
}

/**
 * @param {object} index normalized IFC index
 * @param {object | null | undefined} element
 */
function roomOf(index, element) {
  let id = element?.containerId;
  for (let guard = 0; id && guard < 8; guard += 1) {
    const host = index.elements[id];
    if (!host) break;
    if (host.type === "IfcSpace") {
      const name = String(host.name || "");
      const number = name.split(/\s+/)[0] || name;
      return { number, name, yamlId: String(host.id || "") };
    }
    id = host.containerId || host.parentId;
  }
  return { number: "", name: "", yamlId: "" };
}

function cableKey(cable) {
  if (cable == null || cable === "") return Number.POSITIVE_INFINITY;
  const n = Number(cable);
  return Number.isFinite(n) ? n : Number.POSITIVE_INFINITY;
}

/**
 * One row per fixture, sorted by room, cable, id.
 * @param {object} index normalized IFC index
 */
export function fixtureRows(index) {
  const rows = [];
  for (const element of Object.values(index?.elements || {})) {
    if (!isFixture(element)) continue;
    const props = psetOf(element, "Pset_YamlIfc");
    const room = roomOf(index, element);
    rows.push({
      globalId: element.globalId,
      id: String(element.id || element.globalId),
      type: element.type,
      list: LIST_BY_TYPE[element.type] || null,
      name: String(element.name || ""),
      description: String(element.description || ""),
      objectType: String(element.objectType || ""),
      room: room.number,
      roomName: room.name,
      roomYamlId: room.yamlId,
      cable: props.CableNumber ?? null,
      code: props.DeviceCode ?? null,
      spec: props.CableSpec ?? null,
      length: props.CableLength ?? null,
      panel: props.Panel ?? null,
      note: props.Note ?? null,
      hostId: props.InSwitchBox ? String(props.InSwitchBox) : null,
      placement: yamlPlacement(element),
      props: { ...props },
    });
  }
  rows.sort((a, b) => {
    const room = a.room.localeCompare(b.room, "cs", { numeric: true });
    if (room) return room;
    const cable = cableKey(a.cable) - cableKey(b.cable);
    if (cable) return cable;
    return a.id.localeCompare(b.id, "en", { numeric: true });
  });
  return rows;
}

/**
 * @param {number} value
 * @param {number} [step]
 */
export function snap(value, step = SNAP_M) {
  if (!(step > 0)) return value;
  const out = Math.round(value / step) * step;
  // Keep 0.1 mm precision so 2.57 + 0.03 prints as 2.6, not 2.5999999.
  return Math.round(out * 10000) / 10000;
}

/** @param {number[]} v */
export function round4(v) {
  return v.map((x) => Math.round(x * 10000) / 10000);
}

/**
 * @param {number[]} a
 * @param {number[]} b
 */
export function sub(a, b) {
  return a.map((x, i) => x - (b[i] ?? 0));
}

/**
 * @param {number[]} a
 * @param {number[]} b
 */
export function dist(a, b) {
  return Math.hypot(...sub(a, b));
}

/**
 * Empty edit store for a model.
 * @param {string} model
 */
export function emptyStore(model) {
  return { version: EDITS_VERSION, model: String(model || ""), fixtures: {}, cables: {} };
}

/**
 * Parse what localStorage held. Anything unreadable starts empty.
 * @param {string | null | undefined} raw
 * @param {string} model
 */
export function parseStore(raw, model) {
  if (!raw) return emptyStore(model);
  try {
    const data = JSON.parse(raw);
    if (!data || (data.version !== 1 && data.version !== 2) || typeof data.fixtures !== "object") return emptyStore(model);
    const cables = data.cables && typeof data.cables === "object" ? { ...data.cables } : {};
    return { version: EDITS_VERSION, model: String(data.model || model || ""), fixtures: { ...data.fixtures }, cables };
  } catch {
    return emptyStore(model);
  }
}

/**
 * Drop edits the deployed model already carries (a bot committed the patch
 * and Pages redeployed). An edit stores the position it was made from
 * (`base`) and where Petr put it (`target`). When the deployed position is
 * the target, the move is in the repo; the edit's property changes are
 * dropped too when every one of them matches the deployed row.
 * @param {ReturnType<typeof emptyStore>} store
 * @param {Map<string, { base: number[] | null, props: object, exists: boolean }>} deployed by fixture id
 * @returns {string[]} ids dropped
 */
export function pruneAbsorbed(store, deployed) {
  const dropped = [];
  for (const [id, edit] of Object.entries(store.fixtures)) {
    const now = deployed.get(id);
    if (edit.add) {
      if (now?.exists) {
        delete store.fixtures[id];
        dropped.push(id);
      }
      continue;
    }
    if (edit.deleted) {
      if (!now?.exists) {
        delete store.fixtures[id];
        dropped.push(id);
      }
      continue;
    }
    if (!now?.exists) {
      // The fixture is gone from the model; nothing to apply it to.
      delete store.fixtures[id];
      dropped.push(id);
      continue;
    }
    let moved = Boolean(edit.target && edit.base);
    if (moved && now.base) {
      if (dist(now.base, edit.target) <= ABSORBED_M) {
        moved = false;
      } else if (dist(now.base, edit.base) > ABSORBED_M) {
        // The model moved under the edit; keep Petr's absolute target.
        edit.base = now.base.slice();
      }
    }
    const props = edit.props || {};
    const pending = Object.keys(props).filter((key) => !sameValue(now.props?.[key], props[key]));
    if (!moved && !pending.length) {
      delete store.fixtures[id];
      dropped.push(id);
      continue;
    }
    if (!moved) {
      delete edit.target;
      delete edit.base;
    }
    if (pending.length !== Object.keys(props).length) {
      edit.props = Object.fromEntries(pending.map((key) => [key, props[key]]));
      if (!pending.length) delete edit.props;
    }
  }
  return dropped;
}

function sameValue(a, b) {
  if (a == null && (b == null || b === "")) return true;
  if (typeof a === "number" || typeof b === "number") return Number(a) === Number(b);
  return String(a ?? "") === String(b ?? "");
}

/**
 * Patch for `inputs/ground_floor/fixture_overrides.json`, merged there with
 * `python -m blueprints.fixture_overrides merge <patch.json>`.
 *
 * - Fixture with a YAML `Origin`: absolute `Origin` [x, y] and `Elevation`.
 * - Fixture drawn from a path (LED strips) or the bed: `Move` [dx, dy, dz]
 *   relative to the deployed model; merge adds it to any committed Move.
 * - Changed schedule values: the Pset_YamlIfc keys themselves.
 * - `delete: true`, or `add: { ...yaml element }` for a new fixture.
 * - `cables`: route id → `{ points }`, absolute, from cableEdits.cablePatch.
 * @param {ReturnType<typeof emptyStore>} store
 * @param {Map<string, object>} rowsById
 * @param {{ exportedAt?: string, cables?: Record<string, { points: number[][] }> }} [meta]
 */
export function buildPatch(store, rowsById, meta = {}) {
  const fixtures = {};
  const ids = Object.keys(store.fixtures).sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  for (const id of ids) {
    const edit = store.fixtures[id];
    if (edit.add) {
      const add = { ...edit.add };
      if (edit.target) {
        add.Origin = round4([edit.target[0], edit.target[1]]);
        add.Elevation = round4([edit.target[2]])[0];
      }
      for (const [key, value] of Object.entries(edit.props || {})) setAddProp(add, key, value);
      fixtures[id] = { add };
      continue;
    }
    if (edit.deleted) {
      fixtures[id] = { delete: true };
      continue;
    }
    const out = {};
    const row = rowsById.get(id);
    if (edit.target && edit.base) {
      if (row?.placement) {
        out.Origin = round4([edit.target[0], edit.target[1]]);
        out.Elevation = round4([edit.target[2]])[0];
      } else {
        out.Move = round4(sub(edit.target, edit.base));
      }
    }
    for (const [key, value] of Object.entries(edit.props || {})) out[key] = value;
    if (Object.keys(out).length) fixtures[id] = out;
  }
  return {
    version: EDITS_VERSION,
    model: store.model,
    exportedAt: meta.exportedAt || new Date().toISOString(),
    fixtures,
    cables: meta.cables || {},
  };
}

function setAddProp(add, key, value) {
  add.PropertySets = Array.isArray(add.PropertySets) ? add.PropertySets.map((g) => ({ ...g })) : [];
  let group = add.PropertySets.find((g) => g.Name === "Pset_YamlIfc");
  if (!group) {
    group = { Name: "Pset_YamlIfc", Properties: {} };
    add.PropertySets.push(group);
  }
  group.Properties = { ...(group.Properties || {}), [key]: value };
}

/**
 * Next free id for a copy on the same cable: `C<cable>-<code>-<n>`, the
 * repo's id scheme (docs/electrical/Naming.md).
 * @param {object} row
 * @param {Set<string>} taken
 */
export function nextFixtureId(row, taken) {
  const cable = row.props?.CableNumber ?? row.cable;
  const code = row.props?.DeviceCode ?? row.code;
  const stem = cable != null && code != null ? `C${cable}-${code}` : row.id.replace(/-\d+$/, "");
  for (let n = 1; n < 1000; n += 1) {
    const id = `${stem}-${n}`;
    if (!taken.has(id)) return id;
  }
  return `${stem}-${Date.now()}`;
}

/**
 * YAML element for a copy of `row` (Origin-placed fixtures only).
 * @param {object} row
 * @param {string} newId
 */
export function addElementFrom(row, newId) {
  const place = row.placement;
  if (!place || !row.list) return null;
  const element = {
    list: row.list,
    id: newId,
    Name: `${row.name} (copy)`,
    Description: `Added in the viewer edit mode as a copy of ${row.id}.`,
    ObjectType: row.objectType || undefined,
    ContainedInStructure: row.roomYamlId || undefined,
    Origin: [place.origin[0], place.origin[1]],
    Elevation: place.origin[2],
  };
  if (place.refDirection) element.RefDirection = place.refDirection.slice();
  if (place.size) {
    element.Width = place.size[0];
    element.Depth = place.size[1];
    element.Height = place.size[2];
  }
  const props = {};
  for (const key of ["CableNumber", "Panel", "DeviceCode", "CableSpec", "CableLength"]) {
    if (row.props?.[key] != null) props[key] = row.props[key];
  }
  if (Object.keys(props).length) element.PropertySets = [{ Name: "Pset_YamlIfc", Properties: props }];
  for (const key of Object.keys(element)) if (element[key] === undefined) delete element[key];
  return element;
}

/**
 * Text a row matches in the table filter.
 * @param {object} row
 */
export function rowSearchText(row) {
  return [row.room, row.roomName, row.cable, row.code, row.id, row.name, row.objectType, row.spec, row.panel, row.note]
    .filter((v) => v != null && v !== "")
    .join(" ")
    .toLowerCase();
}
