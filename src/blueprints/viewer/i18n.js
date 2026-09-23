/**
 * Czech / English UI strings for the WebGL viewer.
 * CAD mesh ids stay stable; only display labels go through t().
 */

export const LOCALE_KEY = "blueprints.locale";

/** @typedef {"en" | "cs"} Locale */

const PART_EN = {
  shell: "Shell",
  slopes: "Slopes",
  soffit: "Soffit",
  bass_traps: "Bass traps",
  furniture: "Furniture",
  other: "Other",
  floor: "Floor",
  masonry: "Masonry",
  column: "Column",
  venec: "Ring beam",
  eps: "EPS",
  plaster: "Plaster",
  wall_plate: "Wall plate",
  rafters: "Rafters",
  roofing: "Roofing build-up",
  plenum_wool: "Domo Plus plenum",
  racking_strap: "Racking strap",
  pocket_frame: "Pocket-door frame",
  wall_gkf: "GKF plasterboard",
  glazing: "Glazing",
  slope_naturheld_140: "NaturHeld 140",
  slope_naturheld_flex_50: "NaturHeld Flex 50",
  slope_battens: "KVH battens",
  slope_gkf: "GKF plasterboard",
  slope_cd: "CD Rigips 60×27",
  slope_direct_hanger: "Direct hanger 125",
  slope_nonius: "Nonius hanger",
  soffit_naturheld_140: "NaturHeld 140",
  soffit_naturheld_flex_50: "NaturHeld Flex 50",
  soffit_battens: "KVH battens",
  soffit_gkf: "GKF plasterboard",
  soffit_cd: "CD Rigips 60×27",
  soffit_nonius: "Nonius hanger",
  bass_mineral_wool: "Mineral wool",
  bass_gkb: "GKB plasterboard",
  bass_cd: "CD frame",
  bass_wall_hanger: "CD wall hanger",
};

const PART_CS = {
  shell: "Obálka",
  slopes: "Šikminy",
  soffit: "Podhled",
  bass_traps: "Basstrapy",
  furniture: "Nábytek",
  other: "Ostatní",
  floor: "Podlaha",
  masonry: "Zdivo",
  column: "Sloup",
  venec: "Věnec",
  eps: "EPS",
  plaster: "Omítka",
  wall_plate: "Pozednice",
  rafters: "Krokve",
  roofing: "Střešní skladba",
  plenum_wool: "Domo Plus",
  racking_strap: "Zavětrovací páska",
  pocket_frame: "Pouzdro",
  wall_gkf: "GKF sádrokarton",
  glazing: "Zasklení",
  slope_naturheld_140: "NaturHeld 140",
  slope_naturheld_flex_50: "NaturHeld Flex 50",
  slope_battens: "Latě KVH",
  slope_gkf: "GKF sádrokarton",
  slope_cd: "CD Rigips 60×27",
  slope_direct_hanger: "Přímý závěs 125",
  slope_nonius: "Nonius závěs",
  soffit_naturheld_140: "NaturHeld 140",
  soffit_naturheld_flex_50: "NaturHeld Flex 50",
  soffit_battens: "Latě KVH",
  soffit_gkf: "GKF sádrokarton",
  soffit_cd: "CD Rigips 60×27",
  soffit_nonius: "Nonius závěs",
  bass_mineral_wool: "Minerální vata",
  bass_gkb: "GKB sádrokarton",
  bass_cd: "CD rám",
  bass_wall_hanger: "Třmen CD",
};

const UI_EN = {
  "ui.view": "View",
  "ui.sections": "Cuts",
  "ui.parts": "Parts",
  "ui.materials": "Materials",
  "ui.edges": "Edges",
  "ui.language": "Language",
  "ui.solid": "Solid",
  "ui.realistic": "Realistic",
  "ui.edgesNone": "None",
  "ui.edgesTransparent": "Transparent",
  "ui.edgesOpaque": "Opaque",
  "ui.iso": "Iso",
  "ui.front": "Front",
  "ui.side": "Side",
  "ui.top": "Top",
  "ui.fov": "FOV",
  "ui.sync": "Sync",
  "ui.measure": "Measure",
  "ui.ar": "AR",
  "ui.cut": "Cut",
  "ui.removeSection": "Remove",
  "ui.hideControls": "Hide controls",
  "ui.showControls": "Show controls",
  "ui.dragSheet": "Drag controls sheet",
  "ui.drawing": "Drawing",
  "ui.labels": "Labels",
  "scene.soffit": "Soffit",
  "scene.gable": "Gable",
  "scene.sikmina-lattice": "Slopes lattice",
  "scene.sikmina-section": "Slopes section",
};

const UI_CS = {
  "ui.view": "Pohled",
  "ui.sections": "Řezy",
  "ui.parts": "Díly",
  "ui.materials": "Materiály",
  "ui.edges": "Hrany",
  "ui.language": "Jazyk",
  "ui.solid": "Plné",
  "ui.realistic": "Realistické",
  "ui.edgesNone": "Žádné",
  "ui.edgesTransparent": "Průhledné",
  "ui.edgesOpaque": "Neprůhledné",
  "ui.iso": "Iso",
  "ui.front": "Čelo",
  "ui.side": "Bok",
  "ui.top": "Půdorys",
  "ui.fov": "FOV",
  "ui.sync": "Sjednotit",
  "ui.measure": "Měření",
  "ui.ar": "AR",
  "ui.cut": "Řez",
  "ui.removeSection": "Odstranit",
  "ui.hideControls": "Skrýt ovládání",
  "ui.showControls": "Zobrazit ovládání",
  "ui.dragSheet": "Přetáhnout panel",
  "ui.drawing": "Výkres",
  "ui.labels": "Popisky",
  "scene.soffit": "Podhled",
  "scene.gable": "Štít",
  "scene.sikmina-lattice": "Šikmina — rošt",
  "scene.sikmina-section": "Šikmina — řez",
};

/** @type {Record<Locale, Record<string, string>>} */
const DICTS = {
  en: { ...UI_EN, ...PART_EN },
  cs: { ...UI_CS, ...PART_CS },
};

/** @type {Locale} */
let currentLocale = detectDeviceLocale();

/** @type {Set<() => void>} */
const listeners = new Set();

/**
 * @returns {Locale}
 */
export function detectDeviceLocale() {
  try {
    const nav = typeof navigator !== "undefined" ? navigator.language || "" : "";
    if (String(nav).toLowerCase().startsWith("cs")) return "cs";
  } catch {
    /* ignore */
  }
  return "en";
}

/**
 * @returns {Locale}
 */
export function loadLocale() {
  try {
    const raw = localStorage.getItem(LOCALE_KEY);
    if (raw === "en" || raw === "cs") return raw;
  } catch {
    /* ignore */
  }
  return detectDeviceLocale();
}

/**
 * @param {Locale} locale
 */
export function saveLocale(locale) {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    /* ignore */
  }
}

/**
 * @returns {Locale}
 */
export function getLocale() {
  return currentLocale;
}

/**
 * @param {Locale} locale
 */
export function setLocale(locale) {
  if (locale !== "en" && locale !== "cs") return;
  if (locale === currentLocale) return;
  currentLocale = locale;
  saveLocale(locale);
  for (const fn of listeners) {
    try {
      fn();
    } catch {
      /* ignore */
    }
  }
}

/**
 * @param {() => void} fn
 * @returns {() => void} unsubscribe
 */
export function onLocaleChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/**
 * Initialize locale from storage / device. Call once at viewer mount.
 * @returns {Locale}
 */
export function initLocale() {
  currentLocale = loadLocale();
  return currentLocale;
}

/**
 * @param {string} id
 * @returns {string}
 */
export function t(id) {
  const dict = DICTS[currentLocale] || DICTS.en;
  if (Object.prototype.hasOwnProperty.call(dict, id)) return dict[id];
  const en = DICTS.en;
  if (Object.prototype.hasOwnProperty.call(en, id)) return en[id];
  if (id.startsWith("scene.")) return id.slice("scene.".length);
  return id;
}

/**
 * Apply data-i18n / data-i18n-aria / data-i18n-title on elements under root.
 * @param {ParentNode} [root]
 */
export function applyStaticI18n(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  scope.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key) el.setAttribute("aria-label", t(key));
  });
  scope.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (key) el.setAttribute("title", t(key));
  });
}
