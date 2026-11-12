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
  interior: "Interior",
  cabinet: "Cabinets",
  worktop: "Worktop",
  hob: "Hob",
  appliance: "Appliances",
  sink: "Sink",
  rug: "Rug",
  light: "Lights",
  door: "Door",
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
  plenum_wool: "Mineral wool λ 0.039",
  racking_strap: "Racking strap",
  tie_rod: "Tie rod Ø14",
  slope_light: "Slope spotlight",
  pocket_frame: "Pocket-door frame",
  wall_gkf: "GKF plasterboard",
  glazing: "Glazing",
  slope_naturheld_140: "NaturHeld 140",
  slope_gkf: "GKF plasterboard",
  slope_cd: "CD Rigips 60×27",
  slope_foil: "Jutafol N AL 170 Speciál",
  eave_ud: "UD 28/27 on the wall plate",
  vapour_brake_tape: "Vapour brake bond tape",
  eave_acrylic: "Acrylic bead (planned cut)",
  joint_screw: "Screws",
  slope_direct_hanger: "Direct hanger 200",
  slope_nonius: "Nonius 440",
  soffit_naturheld_140: "NaturHeld 140",
  soffit_mineral_wool: "Mineral wool λ 0.039",
  soffit_ud: "UD channel",
  soffit_gkf: "GKF plasterboard",
  soffit_cd: "CD Rigips 60×27",
  soffit_nonius: "Nonius 440",
  soffit_duct: "Spiral duct Ø160",
  bass_mineral_wool: "Mineral wool λ 0.039",
  bass_gkb: "GKB plasterboard",
  bass_cw: "CW stud",
  bass_uw: "UW track",
  bass_strut: "CW strut to wall",
  bass_angle: "Wall angle",
  bass_anchor: "Anchor into the block",
  bass_tape: "Sealing tape",
  bass_acrylic: "Acrylic joint",
  bathroom: "Bathroom 1.20",
  tile: "Tiles",
  grout: "Grout",
  drain: "Floor drain",
  fixture: "Sanitary fixture",
  prewall: "Pre-wall",
  screen: "Shower screen",
  profile: "Sloped edge profile",
  vanity: "Vanity cabinet",
};

const PART_CS = {
  shell: "Obálka",
  slopes: "Šikminy",
  soffit: "Podhled",
  bass_traps: "Basstrapy",
  furniture: "Nábytek",
  interior: "Interiér",
  cabinet: "Skříňky",
  worktop: "Pracovní deska",
  hob: "Varná deska",
  appliance: "Spotřebiče",
  sink: "Dřez",
  rug: "Koberec",
  light: "Svítidla",
  door: "Dveře",
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
  plenum_wool: "Minerální vata λ 0,039",
  racking_strap: "Zavětrovací páska",
  tie_rod: "Táhlo ø14",
  slope_light: "Bodovka na šikmině",
  pocket_frame: "Pouzdro",
  wall_gkf: "GKF sádrokarton",
  glazing: "Zasklení",
  slope_naturheld_140: "NaturHeld 140",
  slope_gkf: "GKF sádrokarton",
  slope_cd: "CD Rigips 60×27",
  slope_foil: "Jutafol N AL 170 Speciál",
  eave_ud: "UD 28/27 na pozednici",
  vapour_brake_tape: "Lepicí páska parozábrany",
  eave_acrylic: "Akrylový tmel (řez)",
  joint_screw: "Šrouby",
  slope_direct_hanger: "Přímý závěs 200",
  slope_nonius: "Nonius 440",
  soffit_naturheld_140: "NaturHeld 140",
  soffit_mineral_wool: "Minerální vata λ 0,039",
  soffit_ud: "UD profil",
  soffit_gkf: "GKF sádrokarton",
  soffit_cd: "CD Rigips 60×27",
  soffit_nonius: "Nonius 440",
  soffit_duct: "Spiro Ø160",
  bass_mineral_wool: "Minerální vata λ 0,039",
  bass_gkb: "GKB sádrokarton",
  bass_cw: "CW stojka",
  bass_uw: "UW profil",
  bass_strut: "CW vzpěra do zdi",
  bass_angle: "Úhelník do zdi",
  bass_anchor: "Hmoždinka do zdiva",
  bass_tape: "Těsnicí páska",
  bass_acrylic: "Akrylový spoj",
  bathroom: "Koupelna 1.20",
  tile: "Dlažba",
  grout: "Spáry",
  drain: "Podlahová vpusť",
  fixture: "Zařizovací předmět",
  prewall: "Přízdívka",
  screen: "Sprchové sklo",
  profile: "Spádová lišta",
  vanity: "Skříňka umyvadla",
};

const UI_EN = {
  "ui.view": "View",
  "ui.sections": "Cuts",
  "ui.parts": "Parts",
  "ui.materials": "Materials",
  "ui.edges": "Edges",
  "ui.language": "Language",
  "ui.solid": "Solid",
  "ui.shaded": "Shaded",
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
  "ui.inspector": "Inspector",
  "ui.menu": "Menu",
  "ui.showAll": "Show all",
  "ui.hideThis": "Hide this",
  "ui.unhideThis": "Unhide this",
  "ui.hideOthers": "Hide all others",
  "ui.unhideOthers": "Unhide all others",
  "ui.expand": "Expand",
  "ui.collapse": "Collapse",
  "ui.globalId": "GlobalId",
  "ui.type": "Type",
  "ui.name": "Name",
  "ui.storey": "Storey",
  "ui.space": "Space",
  "ui.dimensions": "Dimensions",
  "ui.note": "Note",
  "ui.reveal": "Show in inspector",
  "ui.noIfc": "No IFC record",
  "ui.open": "Open",
  "ui.close": "Close",
  "ui.turnOn": "Turn on",
  "ui.turnOff": "Turn off",
  "ui.press": "Press",
  "ui.spatial": "Spatial",
  "ui.groups": "Groups",
  "ui.info": "Info",
  "ui.parentGroups": "Parent groups",
  "ui.childGroups": "Child groups",
  "ui.childElements": "Child elements",
  "home.title": "Home",
  "home.live": "Live",
  "home.off": "Off",
  "home.on": "On",
  "home.statusOff": "Offline model. Taps only change this view.",
  "home.statusConnecting": "Connecting to Home…",
  "home.statusLive": "Live: state from Home. Taps send commands.",
  "home.statusLiveNoSim": "Live: state from Home. Rocker presses are off on this server.",
  "home.statusUnreachable": "Home unreachable. Showing the offline model; retrying.",
  "home.failed": "Home refused the command",
  "home.deviceOffline": "Device offline (last known state)",
  "home.unknown": "Unknown",
  "home.level": "Level",
  "home.warm": "Warm",
  "home.cool": "Cool",
  "home.lastEvent": "Last event",
  "home.noEvents": "No presses yet",
  "home.contactClosed": "Closed (contact)",
  "home.contactOpen": "Open (no contact)",
  "home.occupied": "Occupied",
  "home.vacant": "Vacant",
  "home.closedPct": "Closed",
  "home.up": "Up",
  "home.down": "Down",
  "home.stop": "Stop",
  "scene.overview": "Overview",
  "scene.opening": "Door and window",
  "scene.posts": "120 mm posts",
  "scene.soffit": "Podhled",
  "scene.gable": "Štít",
  "scene.sikmina-lattice": "Šikmina — rošt",
  "scene.sikmina-section": "Šikmina — řez",
  "scene.bass-kitchen": "Basová past — kuchyň",
  "scene.bass-living": "Basová past — obývák",
  "scene.bass-kitchen-elevation": "Kuchyň — pohled",
  "scene.bass-kitchen-section": "Kuchyň — řez",
  "scene.bass-living-elevation": "Obývák — pohled",
  "scene.bass-living-section": "Obývák — řez",
  "scene.ties-front": "Táhla a světla — pohled",
  "scene.ties-plan": "Táhla a světla — půdorys",
  "scene.ties-section": "Táhlo — řez",
  "scene.kitchen-living": "Kuchyň k obýváku",
  "scene.living-kitchen": "Obývák ke kuchyni",
  "scene.kitchen-run": "Kuchyňská linka",
  "scene.bathroom-floor": "1.20 floor tiles",
  "scene.bathroom": "1.20 room",
  "scene.bathroom-door": "1.20 door and slope",
};

const UI_CS = {
  "ui.view": "Pohled",
  "ui.sections": "Řezy",
  "ui.parts": "Díly",
  "ui.materials": "Materiály",
  "ui.edges": "Hrany",
  "ui.language": "Jazyk",
  "ui.solid": "Plné",
  "ui.shaded": "Stínované",
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
  "ui.inspector": "Inspektor",
  "ui.menu": "Nabídka",
  "ui.showAll": "Zobrazit vše",
  "ui.hideThis": "Skrýt toto",
  "ui.unhideThis": "Zobrazit toto",
  "ui.hideOthers": "Skrýt ostatní",
  "ui.unhideOthers": "Zobrazit ostatní",
  "ui.expand": "Rozbalit",
  "ui.collapse": "Sbalit",
  "ui.globalId": "GlobalId",
  "ui.type": "Typ",
  "ui.name": "Název",
  "ui.storey": "Podlaží",
  "ui.space": "Místnost",
  "ui.dimensions": "Rozměry",
  "ui.note": "Poznámka",
  "ui.reveal": "Zobrazit v inspektoru",
  "ui.noIfc": "Bez IFC záznamu",
  "ui.open": "Otevřít",
  "ui.close": "Zavřít",
  "ui.turnOn": "Zapnout",
  "ui.turnOff": "Vypnout",
  "ui.press": "Stisknout",
  "ui.spatial": "Prostor",
  "ui.groups": "Skupiny",
  "ui.info": "Info",
  "ui.parentGroups": "Nadřazené skupiny",
  "ui.childGroups": "Podskupiny",
  "ui.childElements": "Prvky",
  "home.title": "Dům",
  "home.live": "Živě",
  "home.off": "Vyp.",
  "home.on": "Zap.",
  "home.statusOff": "Offline model. Klepnutí mění jen tento pohled.",
  "home.statusConnecting": "Připojuji se k Home…",
  "home.statusLive": "Živě: stav z Home. Klepnutí posílají příkazy.",
  "home.statusLiveNoSim": "Živě: stav z Home. Stisky vypínačů jsou na tomto serveru vypnuté.",
  "home.statusUnreachable": "Home nedostupný. Zobrazuji offline model a zkouším znovu.",
  "home.failed": "Home příkaz odmítl",
  "home.deviceOffline": "Zařízení offline (poslední známý stav)",
  "home.unknown": "Neznámý",
  "home.level": "Jas",
  "home.warm": "Teplá",
  "home.cool": "Studená",
  "home.lastEvent": "Poslední událost",
  "home.noEvents": "Zatím bez stisku",
  "home.contactClosed": "Zavřeno (kontakt)",
  "home.contactOpen": "Otevřeno (bez kontaktu)",
  "home.occupied": "Obsazeno",
  "home.vacant": "Volno",
  "home.closedPct": "Zavřeno",
  "home.up": "Nahoru",
  "home.down": "Dolů",
  "home.stop": "Stop",
  "scene.overview": "Celkově",
  "scene.opening": "Dveře a okno",
  "scene.posts": "Sloupky 120",
  "scene.soffit": "Podhled",
  "scene.gable": "Štít",
  "scene.sikmina-lattice": "Šikmina — rošt",
  "scene.sikmina-section": "Šikmina — řez",
  "scene.bass-kitchen": "Basová past — kuchyň",
  "scene.bass-living": "Basová past — obývák",
  "scene.bass-kitchen-elevation": "Kuchyň — pohled",
  "scene.bass-kitchen-section": "Kuchyň — řez",
  "scene.bass-living-elevation": "Obývák — pohled",
  "scene.bass-living-section": "Obývák — řez",
  "scene.ties-front": "Táhla a světla — pohled",
  "scene.ties-plan": "Táhla a světla — půdorys",
  "scene.ties-section": "Táhlo — řez",
  "scene.kitchen-living": "Kuchyň k obýváku",
  "scene.living-kitchen": "Obývák ke kuchyni",
  "scene.kitchen-run": "Kuchyňská linka",
  "scene.bathroom-floor": "1.20 dlažba",
  "scene.bathroom": "1.20 koupelna",
  "scene.bathroom-door": "1.20 práh a spád",
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
