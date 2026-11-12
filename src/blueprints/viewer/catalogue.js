/**
 * Material catalogue (`inputs/materials/catalogue.yaml`) for the Realistic
 * render mode: parsing, validation and the selector rules that decide which
 * catalogue entry paints which mesh. Pure data, no three.js, so node tests
 * can run it against the real catalogue. The contract is the comment at the
 * top of the catalogue and docs/materials/README.md; the Python validator
 * (`python -m blueprints.materials`) checks the same rules against the GLBs.
 *
 * A mesh is named `<label>__<id>__` or just `<label>`. A selector is
 *
 *   {label: cabinet}                                plain label
 *   {label: cabinet, id_pattern: "-BODY$"}           regex searched in the id
 *   {label: cabinet, ids: [SF-LB, SF-TC]}            listed ids
 *
 * Most specific wins: listed ids > id_pattern > label only
 * (`SELECTOR_WEIGHTS`). A tie goes to the entry listed first.
 */
import yaml from "js-yaml";

/** Specificity per selector kind: ids > id_pattern > label only. */
export const SELECTOR_WEIGHTS = { label: 1, id_pattern: 10, ids: 100 };

/**
 * @typedef {{ label: string, ids?: string[], idPattern?: RegExp, idPatternSource?: string }} Selector
 * @typedef {{
 *   id: string,
 *   name: string,
 *   description: string,
 *   pending: string,
 *   selectors: Selector[],
 *   baseColor: string,
 *   roughness: number,
 *   metalness: number,
 *   transmission: number,
 *   opacity: number,
 *   ior: number | null,
 *   thickness: number | null,
 *   clearcoat: number,
 *   clearcoatRoughness: number,
 *   sheen: number,
 *   sheenColor: string | null,
 *   sheenRoughness: number,
 *   normalScale: number,
 *   maps: { color?: string, normal?: string, roughness?: string, ao?: string },
 *   tileSize: [number, number],
 *   rotationDeg: number,
 *   directional: boolean,
 *   status: string,
 *   source: string,
 *   notes: string,
 * }} CatalogueEntry
 * @typedef {{ part: string, element?: string | null }} MeshInfo
 */

/**
 * @param {unknown} v
 * @param {number} fallback
 */
function num(v, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * @param {unknown} v
 * @returns {string[]}
 */
function strList(v) {
  if (v == null) return [];
  const list = Array.isArray(v) ? v : [v];
  return list.map((x) => String(x).trim()).filter(Boolean);
}

/**
 * @param {unknown} raw `{label, ids?, id_pattern?}`
 * @param {string[]} errors
 * @param {string} where
 * @returns {Selector | null}
 */
export function parseSelector(raw, errors = [], where = "selector") {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    errors.push(`${where}: expected {label, ids?, id_pattern?}`);
    return null;
  }
  const r = /** @type {Record<string, unknown>} */ (raw);
  for (const key of Object.keys(r)) {
    if (!["label", "ids", "id_pattern"].includes(key)) {
      errors.push(`${where}: unknown key "${key}" (label, ids, id_pattern)`);
    }
  }
  const label = String(r.label ?? "").trim();
  if (!label) {
    errors.push(`${where}: missing label`);
    return null;
  }
  /** @type {Selector} */
  const sel = { label };
  if (r.ids != null) {
    const ids = strList(r.ids);
    if (!ids.length) errors.push(`${where}: empty ids`);
    else sel.ids = ids;
  }
  if (r.id_pattern != null) {
    try {
      sel.idPattern = new RegExp(String(r.id_pattern));
      sel.idPatternSource = String(r.id_pattern);
    } catch (err) {
      errors.push(`${where}: id_pattern ${r.id_pattern}: ${err?.message || err}`);
      return null;
    }
  }
  if (sel.ids && sel.idPattern) errors.push(`${where}: use ids or id_pattern, not both`);
  return sel;
}

/**
 * three's GLTFLoader passes node names through
 * `PropertyBinding.sanitizeNodeName`: whitespace becomes `_` and `[ ] . : /`
 * are dropped, so `furniture__BED-1.11__` arrives as `BED-111`. Listed ids
 * are compared in both spellings. An `id_pattern` sees the sanitised id.
 * @param {string} id
 */
export function sanitizeId(id) {
  return id.replace(/\s/g, "_").replace(/[\[\]\.:\/]/g, "");
}

/**
 * Specificity of `sel` for a mesh, or 0 when it does not match.
 * @param {Selector} sel
 * @param {MeshInfo} info
 */
export function selectorScore(sel, info) {
  if (sel.label !== info.part) return 0;
  const id = info.element || "";
  if (sel.ids) {
    return id && sel.ids.some((x) => x === id || sanitizeId(x) === id) ? SELECTOR_WEIGHTS.ids : 0;
  }
  if (sel.idPattern) return id && sel.idPattern.test(id) ? SELECTOR_WEIGHTS.id_pattern : 0;
  return SELECTOR_WEIGHTS.label;
}

/**
 * @param {unknown} appliesTo
 * @param {string[]} errors
 * @param {string} where
 */
function selectorsOf(appliesTo, errors, where) {
  /** @type {Selector[]} */
  const out = [];
  if (!appliesTo || typeof appliesTo !== "object") return out;
  const listed = /** @type {Record<string, unknown>} */ (appliesTo).selectors;
  if (listed == null) return out;
  (Array.isArray(listed) ? listed : [listed]).forEach((raw, i) => {
    const sel = parseSelector(raw, errors, `${where}.selectors[${i}]`);
    if (sel) out.push(sel);
  });
  return out;
}

const HEX = /^#?[0-9a-f]{6}$/i;

/**
 * @param {unknown} raw parsed YAML
 * @returns {{ entries: CatalogueEntry[], errors: string[], warnings: string[] }}
 */
export function normalizeCatalogue(raw) {
  const errors = [];
  const warnings = [];
  /** @type {unknown[]} */
  let list = [];
  if (Array.isArray(raw)) list = raw;
  else if (raw && typeof raw === "object" && Array.isArray(/** @type {any} */ (raw).materials)) {
    list = /** @type {any} */ (raw).materials;
  } else {
    errors.push("catalogue: expected a YAML list of materials");
  }
  /** @type {CatalogueEntry[]} */
  const entries = [];
  const seen = new Set();
  list.forEach((item, i) => {
    if (!item || typeof item !== "object") {
      errors.push(`entry ${i}: not a mapping`);
      return;
    }
    const e = /** @type {Record<string, any>} */ (item);
    const id = String(e.id ?? "").trim();
    const where = id || `entry ${i}`;
    if (!id) errors.push(`entry ${i}: missing id`);
    if (id && seen.has(id)) errors.push(`${id}: duplicate id`);
    seen.add(id);
    let baseColor = String(e.base_color ?? "").trim();
    if (!HEX.test(baseColor)) {
      errors.push(`${where}: base_color "${baseColor}" is not an sRGB hex like #a1b2c3`);
      baseColor = "#b4b4b4";
    }
    if (!baseColor.startsWith("#")) baseColor = `#${baseColor}`;
    const tile = Array.isArray(e.tile_size_m) ? e.tile_size_m.map((v) => num(v, NaN)) : [];
    /** @type {[number, number]} */
    let tileSize = [1, 1];
    if (tile.length === 2 && tile.every((v) => v > 0)) tileSize = [tile[0], tile[1]];
    else if (e.tile_size_m != null) errors.push(`${where}: tile_size_m must be [w, h] in metres`);
    else if (e.maps) warnings.push(`${where}: maps without tile_size_m, assuming [1, 1]`);
    const maps = {};
    if (e.maps && typeof e.maps === "object") {
      for (const key of ["color", "normal", "roughness", "ao"]) {
        if (e.maps[key]) maps[key] = String(e.maps[key]);
      }
      for (const key of Object.keys(e.maps)) {
        if (!["color", "normal", "roughness", "ao"].includes(key)) {
          warnings.push(`${where}: maps.${key} is not used (color, normal, roughness, ao)`);
        }
      }
    }
    const selectors = selectorsOf(e.applies_to, errors, `${where}.applies_to`);
    const pending = String(e.applies_to?.pending ?? "");
    if (!selectors.length && !pending) warnings.push(`${where}: applies_to has no selectors and no pending`);
    const status = String(e.status ?? "").trim();
    if (status && status !== "known" && status !== "assumed") {
      warnings.push(`${where}: status "${status}" is neither known nor assumed`);
    }
    const sheenColor = e.sheen_color != null && HEX.test(String(e.sheen_color)) ? String(e.sheen_color) : null;
    entries.push({
      id,
      name: String(e.name ?? id),
      description:
        typeof e.applies_to === "string" ? e.applies_to : String(e.applies_to?.description ?? ""),
      pending,
      selectors,
      baseColor,
      roughness: Math.min(1, Math.max(0, num(e.roughness, 0.7))),
      metalness: Math.min(1, Math.max(0, num(e.metalness, 0))),
      transmission: Math.min(1, Math.max(0, num(e.transmission, 0))),
      opacity: Math.min(1, Math.max(0, num(e.opacity, 1))),
      ior: e.ior != null ? num(e.ior, 1.5) : null,
      thickness: e.thickness != null ? num(e.thickness, 0) : null,
      clearcoat: Math.min(1, Math.max(0, num(e.clearcoat, 0))),
      clearcoatRoughness: Math.min(1, Math.max(0, num(e.clearcoat_roughness, 0.1))),
      sheen: Math.min(1, Math.max(0, num(e.sheen, 0))),
      sheenColor: sheenColor ? (sheenColor.startsWith("#") ? sheenColor : `#${sheenColor}`) : null,
      sheenRoughness: Math.min(1, Math.max(0, num(e.sheen_roughness, 0.8))),
      normalScale: num(e.normal_scale, 1),
      maps,
      tileSize,
      rotationDeg: num(e.rotation_deg, 0),
      // rotation_deg present = the texture has a direction (grain, brushing).
      directional: e.rotation_deg != null,
      status: status || "assumed",
      source: Array.isArray(e.source) ? e.source.join(" ") : String(e.source ?? ""),
      notes: String(e.notes ?? ""),
    });
  });
  return { entries, errors, warnings };
}

/**
 * @param {string} text YAML
 */
export function parseCatalogue(text) {
  let raw;
  try {
    raw = yaml.load(text);
  } catch (err) {
    return { entries: [], errors: [`catalogue YAML: ${err?.message || err}`], warnings: [] };
  }
  return normalizeCatalogue(raw);
}

/**
 * Best entry for one mesh, or null when nothing in the catalogue claims it.
 * @param {CatalogueEntry[]} entries
 * @param {MeshInfo} info
 * @returns {{ entry: CatalogueEntry, score: number } | null}
 */
export function resolveEntry(entries, info) {
  /** @type {{ entry: CatalogueEntry, score: number } | null} */
  let best = null;
  for (const entry of entries) {
    for (const sel of entry.selectors) {
      const score = selectorScore(sel, info);
      if (score > 0 && (!best || score > best.score)) best = { entry, score };
    }
  }
  return best;
}

/**
 * Coverage report: which entry each mesh gets, entries that match nothing,
 * meshes nothing matches, and ties broken only by file order.
 * @param {CatalogueEntry[]} entries
 * @param {MeshInfo[]} infos
 */
export function catalogueCoverage(entries, infos) {
  /** @type {Map<string, number>} */
  const hits = new Map(entries.map((e) => [e.id, 0]));
  /** @type {MeshInfo[]} */
  const unresolved = [];
  /** @type {{ info: MeshInfo, ids: string[] }[]} */
  const ties = [];
  for (const info of infos) {
    /** @type {Map<string, number>} */
    const scores = new Map();
    for (const entry of entries) {
      for (const sel of entry.selectors) {
        const s = selectorScore(sel, info);
        if (s > (scores.get(entry.id) || 0)) scores.set(entry.id, s);
      }
    }
    if (!scores.size) {
      unresolved.push(info);
      continue;
    }
    const top = Math.max(...scores.values());
    const winners = [...scores].filter(([, s]) => s === top).map(([id]) => id);
    if (winners.length > 1) ties.push({ info, ids: winners });
    const won = entries.find((e) => winners.includes(e.id));
    if (won) hits.set(won.id, (hits.get(won.id) || 0) + 1);
  }
  const unused = [...hits].filter(([, n]) => n === 0).map(([id]) => id);
  return { hits, unused, unresolved, ties };
}

/**
 * URL for a map path. Catalogue paths are repo-relative under `docs/`
 * (`docs/materials/x/color.jpg`), and only `docs/` is published, so the URL
 * is the path without `docs/`, relative to the site root. The site root is
 * the folder above the published catalogue (`<site>/materials/catalogue.yaml`).
 * @param {string} path
 * @param {string} catalogueUrl
 */
export function resolveMapUrl(path, catalogueUrl) {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:") || path.startsWith("/")) return path;
  const dir = catalogueUrl.split("?")[0].replace(/[^/]*$/, "");
  if (path.startsWith("docs/")) return `${dir}../${path.slice(5)}`;
  return dir + path;
}
