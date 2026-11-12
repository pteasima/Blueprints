/**
 * Spatial / aggregation tree over the flat IFC index.
 * Children are IfcRelAggregates / IfcRelNests (`parentId`). An element with
 * no aggregate parent hangs on its IfcRelContainedInSpatialStructure
 * (`containerId`). A nested child is not also listed under the container.
 */

export const INDENT_PX = 12;
export const INDENT_CAP = 4;
export const ROW_HEIGHT = 44;

/**
 * @param {object | null | undefined} index
 */
export function normalizeIndex(index) {
  const elements =
    index && index.elements && typeof index.elements === "object" ? index.elements : {};
  const roots = Array.isArray(index?.roots) ? index.roots.filter((id) => elements[id]) : [];
  return { elements, roots };
}

/**
 * @param {object} index
 * @param {string} id
 * @returns {string[]}
 */
export function childIds(index, id) {
  const found = [];
  for (const element of Object.values(index.elements)) {
    if (!element) continue;
    const parent = element.parentId || null;
    if (parent === id || (!parent && element.containerId === id)) found.push(element);
  }
  found.sort((a, b) => {
    const order = (a.order ?? 0) - (b.order ?? 0);
    if (order) return order;
    return String(a.name || "").localeCompare(String(b.name || ""));
  });
  return found.map((element) => element.globalId);
}

/**
 * @param {object} index
 * @param {string | null | undefined} id
 * @returns {string[]} root → id
 */
export function pathTo(index, id) {
  /** @type {string[]} */
  const path = [];
  const seen = new Set();
  let cur = id || null;
  while (cur && index.elements[cur] && !seen.has(cur)) {
    seen.add(cur);
    path.push(cur);
    const element = index.elements[cur];
    cur = element.parentId || element.containerId || null;
  }
  path.reverse();
  return path;
}

/**
 * Ancestors that must be expanded so `id` is on screen. The row itself stays
 * collapsed unless it was already open.
 * @param {object} index
 * @param {string} id
 * @returns {string[]}
 */
export function ancestorIds(index, id) {
  const path = pathTo(index, id);
  return path.slice(0, -1);
}

/**
 * @param {object} index
 * @param {Set<string>} expanded
 * @returns {{ id: string, depth: number }[]}
 */
export function flattenTree(index, expanded) {
  /** @type {{ id: string, depth: number }[]} */
  const rows = [];
  const seen = new Set();
  const walk = (id, depth) => {
    if (!id || seen.has(id) || !index.elements[id]) return;
    seen.add(id);
    rows.push({ id, depth });
    if (!expanded.has(id)) return;
    for (const child of childIds(index, id)) walk(child, depth + 1);
  };
  for (const root of index.roots) walk(root, 0);
  return rows;
}

/**
 * @param {number} depth
 */
export function rowIndent(depth) {
  return Math.min(Math.max(0, depth), INDENT_CAP) * INDENT_PX;
}

/**
 * @param {number} scrollTop
 * @param {number} viewHeight
 * @param {number} listTop
 * @param {number} count
 * @param {number} [rowHeight]
 * @param {number} [overscan]
 */
export function visibleRange(scrollTop, viewHeight, listTop, count, rowHeight = ROW_HEIGHT, overscan = 4) {
  if (count <= 0) return { start: 0, end: 0 };
  const top = scrollTop - listTop;
  const start = Math.max(0, Math.floor(top / rowHeight) - overscan);
  const end = Math.min(count, Math.ceil((top + viewHeight) / rowHeight) + overscan);
  return { start, end: Math.max(start, end) };
}

/** @type {WeakMap<object, Map<string, string[]>>} */
const membersCache = new WeakMap();

/**
 * Members of each plain IfcGroup (IfcRelAssignsToGroup, the index's
 * `groups` field). A kitchen bay is such a group: its own parts plus the
 * shared dividers and back it touches (docs/design/kitchen-cabinets.md).
 * @param {object} index
 * @param {string} id
 * @returns {string[]}
 */
export function groupMemberIds(index, id) {
  let map = membersCache.get(index.elements);
  if (!map) {
    map = new Map();
    for (const element of Object.values(index.elements)) {
      for (const group of element?.groups || []) {
        if (!map.has(group)) map.set(group, []);
        map.get(group).push(element.globalId);
      }
    }
    membersCache.set(index.elements, map);
  }
  return map.get(id) || [];
}

/**
 * The element, everything aggregated or contained under it, and the members
 * of any group in that set. Hide / "Hide all others" and framing use this, so
 * isolating a bay keeps both its side dividers even though a divider's
 * aggregate parent is the whole run.
 * @param {object} index
 * @param {string} id
 */
export function subtreeIds(index, id) {
  /** @type {string[]} */
  const out = [];
  const stack = [id];
  const seen = new Set();
  while (stack.length) {
    const cur = stack.pop();
    if (!cur || seen.has(cur) || !index.elements[cur]) continue;
    seen.add(cur);
    out.push(cur);
    for (const child of childIds(index, cur)) stack.push(child);
    for (const member of groupMemberIds(index, cur)) stack.push(member);
  }
  return out;
}

/**
 * @param {object} index
 * @param {string} id
 * @returns {{ storey: object | null, space: object | null }}
 */
export function containmentOf(index, id) {
  let storey = null;
  let space = null;
  const seen = new Set();
  let cur = index.elements[id]?.containerId || index.elements[id]?.parentId || null;
  while (cur && index.elements[cur] && !seen.has(cur)) {
    seen.add(cur);
    const element = index.elements[cur];
    if (element.type === "IfcSpace" && !space) space = element;
    if (element.type === "IfcBuildingStorey" && !storey) storey = element;
    cur = element.containerId || element.parentId || null;
  }
  return { storey, space };
}

/**
 * @param {object | null | undefined} element
 * @returns {string[]}
 */
export function noteLines(element) {
  if (!element) return [];
  /** @type {string[]} */
  const lines = [];
  if (element.description) lines.push(String(element.description));
  if (element.role) lines.push(`Role: ${element.role}`);
  if (element.objectType && element.objectType !== element.role) {
    lines.push(`Object type: ${element.objectType}`);
  }
  if (element.predefinedType && element.predefinedType !== element.role) {
    lines.push(`Predefined type: ${element.predefinedType}`);
  }
  if (element.tag) lines.push(`Tag: ${element.tag}`);
  for (const circuit of element.circuits || []) lines.push(`Circuit: ${circuit}`);
  for (const cable of element.cables || []) lines.push(`Cable: ${cable}`);
  for (const pset of element.propertySets || []) {
    const props = Object.entries(pset.properties || {}).filter(([key]) => key !== "id");
    if (!props.length) continue;
    lines.push(String(pset.name || "Pset"));
    for (const [key, value] of props) lines.push(`${key}: ${formatValue(value)}`);
  }
  return lines;
}

/**
 * @param {unknown} value
 */
export function formatValue(value) {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) return "";
    const rounded = Math.round(value * 1000) / 1000;
    return String(rounded);
  }
  if (typeof value === "boolean") return value ? "true" : "false";
  if (value == null) return "";
  return String(value);
}

/**
 * @param {object | null | undefined} element
 */
/**
 * First tap on a row pulses. A second tap on the row that is already
 * selected moves the camera.
 * @param {string | null | undefined} focusedId
 * @param {string} tappedId
 * @returns {"pulse" | "frame"}
 */
export function rowTapEffect(focusedId, tappedId) {
  return focusedId && focusedId === tappedId ? "frame" : "pulse";
}

export function dimensionLines(element) {
  if (!element) return [];
  return (element.dimensions || [])
    .filter((item) => item && item.value != null && item.value !== "")
    .map((item) => `${item.name}: ${formatValue(item.value)}`);
}
