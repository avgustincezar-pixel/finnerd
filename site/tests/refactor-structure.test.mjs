import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const requiredFiles = [
  "style.css",
  "styles/tokens.css",
  "styles/base.css",
  "styles/layout.css",
  "styles/components.css",
  "styles/screens.css",
  "styles/utilities.css",
  "scripts/content.js",
  "scripts/config.js",
  "scripts/dom.js",
  "scripts/audio.js",
  "scripts/engine.js",
  "scripts/main.js",
  "README.md"
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `${file} should exist`);
}

const html = readFileSync(join(root, "index.html"), "utf8");
const expectedScripts = [
  "scripts/content.js",
  "scripts/config.js",
  "scripts/dom.js",
  "scripts/audio.js",
  "scripts/engine.js",
  "scripts/main.js"
];

let previousIndex = -1;
for (const script of expectedScripts) {
  const index = html.indexOf(`src="${script}"`);
  assert.ok(index > previousIndex, `${script} should be loaded after previous scripts`);
  previousIndex = index;
}

const stylesheet = readFileSync(join(root, "style.css"), "utf8");
for (const file of requiredFiles.filter((file) => file.startsWith("styles/"))) {
  assert.match(stylesheet, new RegExp(`@import\\s+url\\("${file}"\\);`), `${file} should be imported from style.css`);
}

const engine = readFileSync(join(root, "scripts/engine.js"), "utf8");
assert.doesNotMatch(engine, /document\.createElement\("style"\)/, "component styles should live in CSS files");

console.log("Refactor structure is in place.");
