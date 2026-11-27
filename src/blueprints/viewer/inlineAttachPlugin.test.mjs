/**
 * inlineAttachPlugin: only mountViewer-level `const/let` of session names
 * become assignments to the hoisted `let`; nested shadows stay declarations.
 * Regression: the build rewrote edgeResolution's `const size = new Vector2()`
 * into `size = …`, clobbering the model size so camera near/far went NaN and
 * the deployed viewer drew nothing (AR still worked). Run: node inlineAttachPlugin.test.mjs
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { hoistTopLevelDecls, inlineAttachContents } from "./inlineAttachPlugin.mjs";

const here = dirname(fileURLToPath(import.meta.url));

// 1. Synthetic: top-level rewritten, nested function/block/arrow left alone.
{
  const src = [
    "export function mountViewer(canvas, glbBuffer, options = {}) {",
    "  const box = new Box3();",
    "  let size = new Vector3();",
    "  function edgeResolution() {",
    "    const size = new Vector2();",
    "    return size;",
    "  }",
    "  if (x) {",
    "    const box = other();",
    "  }",
    "  const f = () => {",
    "    let box = 1;",
    "  };",
    "  const s = `${ { a: 1 }.a }`;",
    "  const keep = 1;",
    "}",
    "",
  ].join("\n");
  const out = hoistTopLevelDecls(src, new Set(["box", "size", "f", "s"]));
  assert.match(out, /^  box = new Box3\(\);$/m);
  assert.match(out, /^  size = new Vector3\(\);$/m);
  assert.match(out, /^    const size = new Vector2\(\);$/m);
  assert.match(out, /^    const box = other\(\);$/m);
  assert.match(out, /^    let box = 1;$/m);
  assert.match(out, /^  f = \(\) => \{$/m);
  assert.match(out, /^  s = `/m);
  assert.match(out, /^  const keep = 1;$/m, "names outside the hoisted set are untouched");
  assert.throws(() => hoistTopLevelDecls("export function mountViewer() {\n", new Set()), /unbalanced/);
}

// 2. Real sources: every nested declaration of a hoisted name survives.
{
  const out = inlineAttachContents(join(here, "main.js"));
  const hoisted = out.match(/^  let ([^;]+);$/m);
  assert.ok(hoisted, "hoisted let line");
  const names = new Set(hoisted[1].split(",").map((s) => s.trim()));
  for (const n of ["box", "size", "center", "key", "camera", "controls", "renderer"]) {
    assert.ok(names.has(n), `${n} is a hoisted session name`);
  }
  assert.match(out, /function edgeResolution\(\) \{\n\s+const size = new THREE\.Vector2\(\);/);

  const files = [
    "main.js", "sceneSetup.js", "modelLoad.js", "cameraNav.js", "scenes.js", "partsVisibility.js",
    "sectionCuts.js", "hud.js", "drawingExport.js", "inspect.js", "homeInteractions.js", "renderLoop.js",
  ];
  const nested = /^ {4,}(?:const|let)[ \t]+([A-Za-z_$][\w$]*)[ \t]*=/gm;
  const count = (text) => {
    const c = new Map();
    for (const m of text.matchAll(nested)) if (names.has(m[1])) c.set(m[1], (c.get(m[1]) || 0) + 1);
    return c;
  };
  const want = new Map();
  for (const f of files) {
    for (const [k, v] of count(readFileSync(join(here, f), "utf8"))) want.set(k, (want.get(k) || 0) + v);
  }
  assert.ok(want.size > 0, "sources shadow some session names (sanity)");
  assert.deepEqual(Object.fromEntries([...count(out)].sort()), Object.fromEntries([...want].sort()));
}

console.log("inlineAttachPlugin.test.mjs: ok");
