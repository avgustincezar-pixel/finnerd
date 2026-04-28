import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(join(root, "index.html"), "utf8");
const config = readFileSync(join(root, "scripts/config.js"), "utf8");
const engine = readFileSync(join(root, "scripts/engine.js"), "utf8");
const layoutCss = readFileSync(join(root, "styles/layout.css"), "utf8");

assert.match(html, /assets\/avatar-card\.png/, "quest scene should use Dima mascot avatar");
assert.match(html, /Діма Шевченко/, "quest scene should label Dima by name");
assert.match(html, /hud-name-main/, "HUD should have a dedicated Dima name line");
assert.match(html, /hud-name-role/, "HUD should keep the Marketing Nerd role line");
assert.match(html, /assets\/finerd-logo\.svg/, "quest scene should use approved finerd logo");
assert.match(html, />finerd</, "quest scene should label finerd");
assert.match(html, /btnNextDialogue/, "dialogue should include an explicit next button");
assert.match(html, /Наступна репліка/, "next button should explain how to continue");
assert.match(config, /typingSpeedMs:\s*1[0-9]/, "typewriter should be faster than the original 28ms");
assert.match(engine, /from-nerd/, "engine should mark Dima dialogue bubbles");
assert.match(engine, /from-finerd/, "engine should mark finerd dialogue bubbles");
assert.match(layoutCss, /top:\s*2[0-9]%/, "dialogue bubbles should sit above the mascots");
assert.match(layoutCss, /\.scene[\s\S]*top:\s*4[0-9]%/, "mascots should sit lower in the scene");
assert.match(layoutCss, /\.dialogue-container\.from-nerd/, "CSS should position Dima speech bubbles");
assert.match(layoutCss, /\.dialogue-container\.from-finerd/, "CSS should position finerd speech bubbles");
assert.match(layoutCss, /\.dialogue-box::after/, "dialogue box should render a speech bubble tail");

console.log("Quest dialogue scene is in place.");
