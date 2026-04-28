import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const screensCss = readFileSync(join(root, "styles/screens.css"), "utf8");

assert.match(html, /start-bonus-note/, "start screen should include a bonus note");
assert.match(html, /Пройди квіз до кінця, щоб отримати бонус\./, "bonus note copy should be present");
assert.match(screensCss, /\.start-bonus-note/, "bonus note should have dedicated styles");

console.log("Start bonus note is in place.");
