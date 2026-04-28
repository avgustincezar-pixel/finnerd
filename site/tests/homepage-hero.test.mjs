import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const screensCss = readFileSync(join(root, "styles/screens.css"), "utf8");

assert.match(html, /Marketing Nerd/, "homepage should use Marketing Nerd wording");
assert.doesNotMatch(html, /MARKET NERD/, "homepage should not show old Market Nerd label");
assert.match(html, /Діма Шевченко/, "homepage should sign the avatar as Dima Shevchenko");
assert.match(html, /assets\/avatar-card\.png/, "homepage should show the mascot-style personal avatar");
assert.match(html, /assets\/finerd-finoob\.png/, "homepage should show the finerd mascot asset");
assert.ok(existsSync(join(root, "assets/finerd-finoob.png")), "finerd mascot image should exist in assets");
assert.match(screensCss, /\.start-characters/, "homepage should have dedicated character layout styles");

console.log("Homepage hero content is in place.");
