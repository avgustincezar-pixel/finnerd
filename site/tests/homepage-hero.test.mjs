import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const screensCss = readFileSync(join(root, "styles/screens.css"), "utf8");

assert.match(html, /Marketing Nerd/, "homepage should use Marketing Nerd wording");
assert.match(html, /<div class="start-glitch-text">Marketing Nerd<\/div>/, "screen text should use Marketing Nerd wording");
assert.match(html, /Діма Шевченко/, "homepage should sign the avatar as Dima Shevchenko");
assert.match(html, /assets\/avatar-card\.png/, "homepage should show the mascot-style personal avatar");
assert.match(html, /assets\/finerd-logo\.svg/, "homepage should show the approved finerd logo asset");
assert.ok(existsSync(join(root, "assets/finerd-logo.svg")), "finerd logo image should exist in assets");
assert.match(screensCss, /\.start-characters/, "homepage should have dedicated character layout styles");

console.log("Homepage hero content is in place.");
