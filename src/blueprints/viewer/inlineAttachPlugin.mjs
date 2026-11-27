/**
 * Build-only plugin: inline attach*(ctx) modules into mountViewer and rewrite
 * `ctx.foo` to a real local `foo` so esbuild can minify identifiers the way it
 * did when everything lived in main.js. Source stays split; only the bundle
 * (and the IIFE) see the inlined form. Without this, `ctx.property` names
 * cannot be renamed and the startup bundle grows ~20 KiB.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ATTACH = [
  ["attachSceneSetup", "sceneSetup.js"],
  ["attachModelLoad", "modelLoad.js"],
  ["attachCameraNav", "cameraNav.js"],
  ["attachScenes", "scenes.js"],
  ["attachPartsVisibility", "partsVisibility.js"],
  ["attachSectionCuts", "sectionCuts.js"],
  ["attachHud", "hud.js"],
  ["attachDrawingExport", "drawingExport.js"],
  ["attachInspect", "inspect.js"],
  ["attachHomeInteractions", "homeInteractions.js"],
  ["attachRenderLoop", "renderLoop.js"],
];

const PARAMS = new Set(["canvas", "glbBuffer", "options"]);

/** Scan JS, skipping strings and comments. Calls fn(type, text, start, end). */
function scan(src, fn) {
  const n = src.length;
  let i = 0;
  while (i < n) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") {
      const q = c;
      let j = i + 1;
      while (j < n) {
        if (src[j] === "\\") { j += 2; continue; }
        if (q === "`" && src[j] === "$" && src[j + 1] === "{") {
          // template expression: scan recursively until matching }
          const innerStart = j + 2;
          let d = 1, k = innerStart;
          while (k < n && d) {
            // naive; strings inside ${} handled by recursive scan of slice later
            if (src[k] === '"' || src[k] === "'" || src[k] === "`") {
              const qq = src[k];
              k++;
              while (k < n) {
                if (src[k] === "\\") { k += 2; continue; }
                if (src[k] === qq) { k++; break; }
                k++;
              }
              continue;
            }
            if (src[k] === "{") d++;
            else if (src[k] === "}") { d--; if (!d) break; }
            k++;
          }
          scan(src.slice(innerStart, k), (t, x, a, b) => fn(t, x, innerStart + a, innerStart + b));
          j = k + 1;
          continue;
        }
        if (src[j] === q) { j++; break; }
        j++;
      }
      fn("string", src.slice(i, j), i, j);
      i = j;
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      let j = i + 2;
      while (j < n && src[j] !== "\n") j++;
      fn("comment", src.slice(i, j), i, j);
      i = j;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      const j = src.indexOf("*/", i + 2);
      const end = j < 0 ? n : j + 2;
      fn("comment", src.slice(i, end), i, end);
      i = end;
      continue;
    }
    // slash regex vs divide: treat / as punct, regex literals are rare in this code
    fn("code", c, i, i + 1);
    i++;
  }
}

function replaceCtxProps(src) {
  const ops = [];
  // Find ctx.IDENT in code (not strings/comments)
  const codeMask = Array(src.length).fill(false);
  scan(src, (type, _t, a, b) => {
    if (type === "code") for (let i = a; i < b; i++) codeMask[i] = true;
  });
  const re = /\bctx\.([A-Za-z_$][\w$]*)/g;
  let m;
  while ((m = re.exec(src))) {
    if (codeMask[m.index]) ops.push({ start: m.index, end: m.index + m[0].length, text: m[1] });
  }
  let out = src;
  for (const op of ops.sort((a, b) => b.start - a.start)) {
    out = out.slice(0, op.start) + op.text + out.slice(op.end);
  }
  return out;
}

function collectCtxKeys(src) {
  const keys = new Set();
  const codeMask = Array(src.length).fill(false);
  scan(src, (type, _t, a, b) => {
    if (type === "code") for (let i = a; i < b; i++) codeMask[i] = true;
  });
  const re = /\bctx\.([A-Za-z_$][\w$]*)/g;
  let m;
  while ((m = re.exec(src))) {
    if (codeMask[m.index]) keys.add(m[1]);
  }
  return keys;
}

function functionNames(src) {
  const names = new Set();
  const re = /\bfunction\s+([A-Za-z_$][\w$]*)/g;
  let m;
  while ((m = re.exec(src))) names.add(m[1]);
  return names;
}

function extractAttachBody(fileSrc, exportName) {
  const needle = `export function ${exportName}(ctx) {`;
  const start = fileSrc.indexOf(needle);
  if (start < 0) throw new Error(`missing ${exportName}`);
  const bodyStart = start + needle.length;
  let depth = 1;
  let i = bodyStart;
  while (i < fileSrc.length && depth) {
    const c = fileSrc[i];
    if (c === '"' || c === "'" || c === "`") {
      const q = c;
      i++;
      while (i < fileSrc.length) {
        if (fileSrc[i] === "\\") { i += 2; continue; }
        if (fileSrc[i] === q) { i++; break; }
        i++;
      }
      continue;
    }
    if (c === "/" && fileSrc[i + 1] === "/") {
      while (i < fileSrc.length && fileSrc[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && fileSrc[i + 1] === "*") {
      const j = fileSrc.indexOf("*/", i + 2);
      i = j < 0 ? fileSrc.length : j + 2;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") depth--;
    i++;
  }
  const end = i - 1; // index of closing brace
  let body = fileSrc.slice(bodyStart, end);
  // Drop the `ctx.foo = foo;` footer assignments.
  body = body.replace(/\n(?:  ctx\.[A-Za-z_$][\w$]* = [A-Za-z_$][\w$]*;\n)+$/, "\n");
  return body.replace(/^\n/, "").replace(/\s*$/, "\n");
}

function parseImportNames(src) {
  /** @type {Map<string, { source: string, kind: string, imported?: string }>} */
  const names = new Map();
  const re = /import\s+([^;]+);/g;
  let m;
  while ((m = re.exec(src))) {
    const stmt = m[1];
    const from = stmt.match(/from\s+"([^"]+)"/);
    if (!from) continue;
    const source = from[1];
    const head = stmt.slice(0, from.index);
    const ns = head.match(/\*\s+as\s+(\w+)/);
    if (ns) names.set(ns[1], { source, kind: "namespace" });
    const def = head.match(/^(\w+)\s*(?:,|from)/);
    if (def && !head.includes("*")) names.set(def[1], { source, kind: "default" });
    const br = head.match(/\{([^}]+)\}/);
    if (br) {
      for (const part of br[1].split(",")) {
        const p = part.trim();
        if (!p) continue;
        if (p.includes(" as ")) {
          const [imp, loc] = p.split(/\s+as\s+/);
          names.set(loc.trim(), { source, kind: "named", imported: imp.trim() });
        } else {
          names.set(p, { source, kind: "named", imported: p });
        }
      }
    }
  }
  return names;
}

function formatImports(nameMap) {
  const bySource = new Map();
  for (const [name, info] of nameMap) {
    if (!bySource.has(info.source)) bySource.set(info.source, []);
    bySource.get(info.source).push({ name, ...info });
  }
  // Stable: three/* first, then ./ relative in a reasonable order
  const sources = [...bySource.keys()].sort((a, b) => {
    const ra = a.startsWith(".") ? 1 : 0;
    const rb = b.startsWith(".") ? 1 : 0;
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b);
  });
  const lines = [];
  for (const source of sources) {
    const items = bySource.get(source);
    const ns = items.find((i) => i.kind === "namespace");
    const def = items.find((i) => i.kind === "default");
    const named = items.filter((i) => i.kind === "named");
    if (ns) lines.push(`import * as ${ns.name} from "${source}";`);
    const namedList = named.map((n) => (n.imported === n.name ? n.name : `${n.imported} as ${n.name}`));
    const namedFmt = (list) => {
      if (list.length <= 3 && list.join(", ").length < 80) return `{ ${list.join(", ")} }`;
      return `{\n  ${list.join(",\n  ")},\n}`;
    };
    if (def && named.length) lines.push(`import ${def.name}, ${namedFmt(namedList)} from "${source}";`);
    else if (def) lines.push(`import ${def.name} from "${source}";`);
    else if (named.length) lines.push(`import ${namedFmt(namedList)} from "${source}";`);
  }
  return lines.join("\n");
}

/**
 * Brace depth (code only, not strings/comments) at every index of src.
 * Throws when the braces do not balance, so a scanner miss (e.g. a regex
 * literal containing a brace) fails the build instead of shipping a bad
 * rewrite.
 */
function braceDepths(src) {
  const depth = new Int32Array(src.length + 1);
  const delta = new Int8Array(src.length);
  scan(src, (type, text, a) => {
    if (type !== "code") return;
    if (text === "{") delta[a] = 1;
    else if (text === "}") delta[a] = -1;
  });
  let d = 0;
  for (let i = 0; i < src.length; i++) {
    depth[i] = d;
    d += delta[i];
    if (d < 0) throw new Error(`inlineAttach: unbalanced braces at ${i}`);
  }
  depth[src.length] = d;
  if (d !== 0) throw new Error("inlineAttach: unbalanced braces in mountViewer");
  return depth;
}

/**
 * `const/let name =` directly in mountViewer (depth 1: main.js's own top
 * level and every inlined attach body) would collide with the hoisted
 * `let name`, so it becomes `name =`. Declarations inside nested functions
 * or blocks are left alone: they shadow the session variable on purpose
 * (e.g. edgeResolution's `const size = new Vector2()`). Rewriting those
 * clobbered the shared model `size`/`box`/`center`/`key` and blanked the
 * canvas (camera near/far became NaN).
 * @param {string} body source starting at `export function mountViewer`
 * @param {Set<string>} letSet hoisted session names
 */
export function hoistTopLevelDecls(body, letSet) {
  const depth = braceDepths(body);
  const re = /^([ \t]*)(?:const|let)[ \t]+([A-Za-z_$][\w$]*)[ \t]*=/gm;
  const ops = [];
  let m;
  while ((m = re.exec(body))) {
    const at = m.index + m[1].length;
    if (!letSet.has(m[2]) || depth[at] !== 1) continue;
    ops.push({ start: m.index, end: m.index + m[0].length, text: `${m[1]}${m[2]} =` });
  }
  let out = body;
  for (const op of ops.reverse()) out = out.slice(0, op.start) + op.text + out.slice(op.end);
  return out;
}

export function inlineAttachContents(mainPath) {
  const dir = dirname(mainPath);
  let main = readFileSync(mainPath, "utf8");
  const imports = parseImportNames(main);
  const bodies = [];
  let keys = collectCtxKeys(main);
  const fns = new Set();

  for (const [name, file] of ATTACH) {
    const src = readFileSync(join(dir, file), "utf8");
    for (const [nm, info] of parseImportNames(src)) {
      if (!imports.has(nm)) imports.set(nm, info);
    }
    const body = extractAttachBody(src, name);
    keys = new Set([...keys, ...collectCtxKeys(body)]);
    for (const fn of functionNames(body)) fns.add(fn);
    bodies.push(`  // --- inlined ${file} ---\n${body}`);
  }
  for (const fn of functionNames(main)) fns.add(fn);

  // Drop attach imports from the merged map (they will be inlined).
  for (const [, file] of ATTACH) {
    const source = `./${file}`;
    for (const [nm, info] of [...imports]) {
      if (info.source === source) imports.delete(nm);
    }
  }

  // Replace the import section of main with the merged imports, keep the
  // leading file comment and the mountViewer JSDoc + function.
  const commentEnd = main.indexOf("import ");
  const mountAt = main.indexOf("export function mountViewer");
  const jsdocAt = main.lastIndexOf("/**", mountAt);
  const prelude = main.slice(0, commentEnd);
  const jsdoc = main.slice(jsdocAt, mountAt);
  let body = main.slice(mountAt);

  // Remove individual attach imports already in body (they're in prelude we'll replace).
  body = body.replace(/const ctx = \{ canvas, glbBuffer, options \};\n\n/, "");

  const attachBlockRe = /  attachSceneSetup\(ctx\);\n(?:  attach\w+\(ctx\);\n)+/;
  if (!attachBlockRe.test(body)) throw new Error("attach call block not found");
  body = body.replace(attachBlockRe, `${bodies.join("\n")}\n`);

  body = replaceCtxProps(body);
  // `foo = foo;` leftovers from `ctx.foo = foo`.
  body = body.replace(/^[ \t]*([A-Za-z_$][\w$]*) = \1;\n/gm, "");

  const letNames = [...keys].filter((k) => !PARAMS.has(k) && !fns.has(k)).sort();
  const letSet = new Set(letNames);
  body = hoistTopLevelDecls(body, letSet);
  const letDecl = `  let ${letNames.join(", ")};\n`;
  body = body.replace(
    /export function mountViewer\(canvas, glbBuffer, options = \{\}\) \{\n/,
    `export function mountViewer(canvas, glbBuffer, options = {}) {\n${letDecl}`,
  );

  return `${prelude}${formatImports(imports)}\n\n${jsdoc}${body}`;
}

export function inlineAttachPlugin() {
  return {
    name: "inline-attach",
    setup(build) {
      build.onLoad({ filter: /[\\/]main\.js$/ }, (args) => {
        if (!args.path.includes("viewer")) return null;
        return { contents: inlineAttachContents(args.path), loader: "js" };
      });
    },
  };
}
