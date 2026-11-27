/**
 * Parse the material catalogue YAML (catalogue.js has the rules). Split from
 * catalogue.js so js-yaml loads with Realistic mode (realistic.js imports this
 * with import()), not with the viewer entry bundle.
 */
import yaml from "js-yaml";
import { normalizeCatalogue } from "./catalogue.js";

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
