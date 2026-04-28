# Design.md для CV / portfolio landing page у стилі finerd

Мета: створити персональний CV landing page, який стилістично відчувається з того ж всесвіту, що й сайт finerd: pixel-game, financial nerd quest, dark retro interface, AI/game onboarding, без корпоративної ванілі.  
Важливо: не копіювати логотип, персонажів, ілюстрації або точні екрани finerd. Треба взяти принципи айдентики й адаптувати їх під персональний сайт кандидата.

Цей файл є тільки дизайн-брифом. Копірайтинг, готові формулювання, tone of voice і тексти секцій мають жити в окремому `.md` файлі.

## 1. Загальне враження

Сайт finerd виглядає як ретро-гра/квест про фінанси:

- 8-bit / pixel-art естетика;
- темний noisy фон;
- синьо-фіолетова perspective grid-сітка;
- великі піксельні заголовки;
- градієнти cyan → violet → magenta;
- інтерфейс із рівнями, статусами, картками персонажа;
- фінансові дії перетворені на game mechanics;
- ігрова подача замість корпоративного UI;
- усе виглядає “nerdy”, але не хаотично.

Для портфоліо треба передати ідею:

> Це не звичайне CV. Це кандидатський quest/proof-of-work для finerd.

## 2. Ключова дизайн-метафора для портфоліо

Рекомендована метафора:

> **Marketing Nerd Quest**

Або українською:

> **Квест маркетингового нерда**

Логіка:

- finerd має рівні: фіндитя → фінтерн → фінексперт → інвестор;
- портфоліо може мати рівні candidate fit:
  - Рівень 1: розібрав продукт;
  - Рівень 2: зрозумів аудиторію;
  - Рівень 3: зібрав AI workflow;
  - Рівень 4: запропонував growth-тести;
  - Рівень 5: показав proof-of-work;
  - Рівень 6: готовий до співбесіди.

Кандидатська айдентика має бути спорідненою з finerd, але не видавати себе за частину продуктового бренду.

## 3. Visual DNA

### 3.1. Style tags

Використовувати:

- retro game UI;
- pixel art;
- arcade onboarding;
- RPG character card;
- finance mini-game;
- dark CRT monitor;
- noisy texture;
- neon border;
- low-res charm;
- cyber grid;
- quest levels;
- HUD/sidebar;
- pixel interface labels.

Не використовувати:

- clean SaaS minimalism;
- banking corporate blue;
- rounded startup cards;
- glossy Web3 gradients;
- beige/cream portfolio;
- Apple-like whitespace;
- generic AI purple blobs;
- stock photos;
- elegant serif typography.

## 4. Color System

Кольори нижче приблизні, зібрані зі скрінів візуально. Перед фінальною версткою можна уточнити eyedropper-ом.

### 4.1. Core background

| Token | Hex | Use |
|---|---:|---|
| `--bg-black` | `#0D1112` | Основний фон сторінки |
| `--bg-panel` | `#171C1D` | Темні panels / cards |
| `--bg-panel-soft` | `#222829` | Напівпрозорі контейнери |
| `--bg-grid-dark` | `#10191C` | Hero/grid background |
| `--border-dark` | `#343B3B` | Тонкі сірі бордери |

### 4.2. Text

| Token | Hex | Use |
|---|---:|---|
| `--text-main` | `#F2F2EA` | Основний білий текст |
| `--text-muted` | `#A9B0AE` | Другорядний текст |
| `--text-dim` | `#6E7775` | Disabled / helper |

### 4.3. Neon accents

| Token | Hex | Use |
|---|---:|---|
| `--cyan` | `#62E8FF` | Рівні, активні стани, CTA border |
| `--blue` | `#1397E8` | Сині рівні / personal finance |
| `--violet` | `#A56CFF` | Hero gradient, level label |
| `--purple` | `#8B2BBA` | Purple game scene |
| `--magenta` | `#F05AC0` | Accent labels / character status |
| `--green` | `#20C878` | Success / correct / level 4 |
| `--yellow` | `#D9B51B` | Business finance / warning |
| `--orange` | `#F39A22` | Alternative / danger choice |
| `--red-brown` | `#7A2F2C` | Wrong/negative CTA gradient |

### 4.4. Gradients

Primary CTA gradient:

```css
linear-gradient(90deg, #31E7F4 0%, #6FA8FF 48%, #D84BDF 100%)
```

Hero headline accent:

```css
linear-gradient(90deg, #9F5BFF 0%, #C46CFF 45%, #78B8FF 100%)
```

Dark panel fill:

```css
linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))
```

Wrong/negative button:

```css
linear-gradient(90deg, #D98A22 0%, #7A2F2C 100%)
```

### 4.5. Color rules

1. Main background завжди темний.
2. White text + one accent color per section.
3. CTA can use cyan → violet → magenta gradient.
4. Не робити весь сайт фіолетовим. У finerd кожен рівень має свій mood:
   - purple: transaction complexity;
   - blue: family/personal sorting;
   - green: debt/person assignment;
   - yellow/olive: personal + business finance pipes.
5. Для портфоліо можна зробити секції-рівні з власним accent:
   - Product teardown: violet;
   - Audience insight: cyan;
   - AI workflow: blue;
   - Growth tests: green;
   - Proof/cases: yellow;
   - CTA: cyan-magenta gradient.

## 5. Typography

### 5.1. Main rule

Уся типографіка має бути pixel/bitmap або максимально схожа на неї.

На скрінах:

- logo and headings use blocky pixel font;
- body text also pixelated/monospace-like;
- українські літери великі, геометричні, з відчуттям 8-bit;
- letter spacing не негативний;
- великі заголовки мають бути дуже великі, але з короткими рядками.

### 5.2. Font recommendations

Основний шрифт сайту:

1. `Press Start 2P` - базовий display/UI font для hero, level labels, buttons, HUD, status cards.
2. `Pixelify Sans` - optional fallback для довших UI-блоків, якщо `Press Start 2P` погано читається в конкретному місці.
3. `Russo One` - fallback для великих кириличних headings, якщо потрібна краща читабельність.
4. `IBM Plex Mono` / `JetBrains Mono` - fallback для дрібного body/help text.

Правило: спочатку пробувати `Press Start 2P`. Відступати від нього тільки там, де читабельність реально ламається.

### 5.3. Font hierarchy

Desktop:

```css
--font-display: "Press Start 2P", "Pixelify Sans", monospace;
--font-body: "Press Start 2P", "Pixelify Sans", "JetBrains Mono", monospace;

h1: 96-150px, line-height 0.9-1.0;
h2: 56-84px, line-height 1.0;
h3: 28-40px, line-height 1.2;
body: 22-32px, line-height 1.35;
small: 14-18px, line-height 1.4;
button: 24-34px, uppercase or all-caps feel;
```

Mobile:

```css
h1: 48-64px;
h2: 34-44px;
h3: 22-28px;
body: 18-22px;
small: 13-16px;
button: 18-22px;
```

### 5.4. UI label casing

Design rules:

- багато uppercase;
- короткі UI labels;
- слова-акценти в cyan/violet/green/yellow;
- не робити довгі рядки в display font;
- line length має бути коротким, бо pixel font швидко втомлює.

Avoid:

- довгі абзаци в pixel font;
- дрібний текст нижче 14px;
- курсив;
- elegant serif;
- thin font weights.

## 6. Backgrounds and Texture

### 6.1. Global background

Обов’язково:

- темний фон;
- шум/grain;
- легкий CRT/scanline ефект;
- low opacity grid або texture;
- subtle glow по краях.

CSS pattern:

```css
body {
  background:
    radial-gradient(circle at 20% 10%, rgba(144, 60, 255, 0.16), transparent 35%),
    radial-gradient(circle at 80% 20%, rgba(42, 190, 255, 0.12), transparent 40%),
    #0D1112;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image: url("/noise.png");
  mix-blend-mode: screen;
}
```

Якщо немає `noise.png`, можна зробити CSS/SVG noise або маленький repeated PNG.

### 6.2. Hero grid

Hero має мати perspective grid:

- сітка йде в глибину;
- cyan/purple лінії;
- горизонт близько середини першого екрану;
- фон не має бути чистим flat.

Implementation options:

1. CSS perspective grid через `linear-gradient` + transform.
2. Canvas grid.
3. SVG grid background.
4. Статичний image background, якщо треба швидко.

Для портфоліо достатньо CSS/SVG grid, не треба важкий 3D.

## 7. Layout System

### 7.1. Page structure

Рекомендована структура у стилі гри:

1. **Start screen / Hero**
   - logo-like personal mark;
   - big pixel headline;
   - primary action button;
   - small floating game assets.

2. **Dialogue card**
   - avatar;
   - role label;
   - short intro area;
   - 2 кнопки-вибори.

3. **Level sections**
   - left sidebar with level number and section statement;
   - right gameplay/proof area;
   - status card at bottom left.

4. **Final level / action**
   - profile card;
   - progress 6/6;
   - final action button.

### 7.2. Desktop layout

Level sections use split layout:

```text
| 30% sidebar | 70% game/proof area |
```

Sidebar:

- fixed-ish within section;
- dark background;
- level label top;
- huge short heading/statement area;
- current status/player card bottom.

Main area:

- colored scene panel;
- proof artifact as game object;
- top instruction bar.

### 7.3. Mobile layout

На mobile не робити складний 2-column.

Use:

1. level label top;
2. title;
3. proof card;
4. action/CTA;
5. progress/status.

Keep pixel aesthetic, but reduce visual density.

## 8. Components

### 8.1. Header / Nav

Observed:

- top nav transparent/dark;
- left: icon/avatar + wordmark;
- right: language switch EN / UA + login CTA;
- CTA has thick gradient border.

Portfolio adaptation:

Left:

```text
[pixel avatar] [personal mark]
```

Right:

```text
[nav links] [primary contact button]
```

Rules:

- header height: 76-96px desktop;
- no rounded nav pills;
- pixel logo/avatar 48-64px;
- white text;
- active language in violet/cyan;
- button border 5-7px.

### 8.2. CTA buttons

Primary button anatomy:

- rectangular;
- no radius or max 2px;
- thick gradient border;
- inner dark gradient fill;
- large pixel text;
- drop shadow;
- optional pixel sparkles around it.

CSS:

```css
.btn-primary {
  border: 6px solid transparent;
  border-image: linear-gradient(90deg, #31E7F4, #D84BDF) 1;
  background: linear-gradient(90deg, rgba(35, 206, 216, .35), rgba(143, 42, 162, .45));
  color: #F2F2EA;
  font-family: var(--font-display);
  text-transform: uppercase;
  padding: 24px 56px;
  box-shadow: 12px 14px 0 rgba(0, 0, 0, .28);
}
```

Hover:

- slight translate `(-2px, -2px)`;
- stronger glow;
- cursor can become pixel hand if implemented.

### 8.3. Secondary / wrong-choice buttons

Use for secondary choices or alternate actions.

Style:

- orange → red/brown gradient border;
- dark fill;
- same pixel button shape.

### 8.4. Dialogue cards

Observed:

- large translucent dark rectangle;
- thick smoky border;
- avatar circle left;
- pink label;
- large white pixel body;
- choice buttons underneath.

Portfolio adaptation:

Use dialogue card for intro, short candidate context, or first proof block.

Rules:

- border: 8-12px translucent gray;
- background: rgba(255,255,255,.04);
- avatar: pixel portrait in circle;
- label in magenta/cyan;
- body text max 2-3 lines.

### 8.5. Player/status card

Observed:

- bottom-left in level sections;
- avatar;
- level name;
- segmented progress bar 0/6;
- dark translucent background.

Portfolio adaptation:

Use as sticky/recurring progress module.

Progress bar:

- 6 rectangular pixel blocks;
- inactive gray;
- active accent per section;
- no smooth round progress.

### 8.6. Level sidebar

Observed:

- left column;
- level label in cyan/violet;
- big statement area;
- selected words colored by level accent;
- status card bottom.

Portfolio sidebars should contain only:

- level label;
- section heading;
- 1-2 highlighted accent words;
- player/status card.

### 8.7. Game scene/proof panels

Each level right side should visualize proof as game mechanic:

| Portfolio content | Game metaphor |
|---|---|
| Product teardown | transaction sorting screen |
| Audience segments | character selection / quest cards |
| AI workflow | pipeline / machine / nodes |
| Growth experiments | cards to drag into test slots |
| UGC hooks | inventory items / spell cards |
| CTA | final level / progress complete |

Panels:

- large colored background;
- top instruction bar;
- subtle big vertical text in opacity 0.1;
- one central artifact;
- pixel/drop shadow.

## 9. Imagery and Assets

### 9.1. Pixel avatar

Strongly recommended:

- create a pixel avatar of you;
- circular crop;
- use in hero/dialogue/status cards;
- avoid using finerd’s actual character.

Avatar style:

- 8-bit;
- glasses or nerd signal if natural;
- blue/purple hair tones optional;
- not overly childish;
- keep professional enough.

### 9.2. Decorative assets

On-brand:

- pixel stars/sparkles around CTA;
- arrow down pixel icon;
- hand cursor pixel;
- paperclip / note / cards;
- finance tokens;
- pipes / nodes / small coins;
- progress blocks;
- pixel arrows.

Avoid:

- generic line icons;
- lucide icons in the main visual world;
- glossy 3D icons;
- realistic stock photos except if deliberately masked as game object.

### 9.3. Image treatment

If using screenshots/case proof:

- frame them as game cards;
- add pixel border;
- apply slight noise;
- use drop shadow;
- do not use smooth MacBook mockups.

## 10. Page Structure and Visual Blueprint

Цей розділ описує тільки функцію та візуальну роль блоків. Тексти, заголовки, CTA labels і microcopy не прописуються в цьому файлі.

### Section 1. Hero / Start Screen

Goal: за 5 секунд показати, що це спеціальна заявка під finerd.

Visual:

- perspective grid background;
- huge pixel headline area;
- gradient accent on one key word/line;
- primary action button with gradient border;
- pixel sparkles;
- header with avatar/name/contact action.

### Section 2. Dialogue / Intro

Goal: дати людський вступ і створити RPG/onboarding відчуття.

Visual:

- dialogue card with avatar;
- role label;
- short text area;
- two choice buttons;
- pixel cursor near primary button.

### Section 3. Level 1 / Product Teardown

Goal: показати, що кандидат розібрав продукт.

Visual:

- left level sidebar;
- right game scene as sorting/positioning board;
- 3-4 proof cards;
- top instruction bar.

### Section 4. Level 2 / Audience

Goal: показати user psychology.

Visual:

- character selection scene;
- audience cards as personas;
- pain/trigger slots;
- active accent color cyan/blue.

### Section 5. Level 3 / AI Workflow

Goal: показати AI-native процес практично.

Visual:

- pipeline/machine layout;
- connected nodes;
- source → extraction → prompting → critique → edit → QA flow;
- active accent color blue/violet.

### Section 6. Level 4 / Growth Tests

Goal: показати мислення експериментами.

Visual:

- draggable-looking experiment cards;
- test slots;
- metric/difficulty badges;
- active accent color green.

### Section 7. Level 5 / Proof Inventory

Goal: показати артефакти й докази.

Visual:

- inventory grid;
- files/cards/items as collectible objects;
- locked/unlocked states;
- progress indicator.

### Section 8. Final / Action

Goal: запросити до наступного кроку.

Visual:

- centered profile/status card;
- progress complete state;
- final large heading area;
- primary gradient action button.

## 11. Motion and Interaction

Use sparingly:

- CTA glow pulse;
- pixel cursor hover;
- slight screen noise animation;
- level progress update on scroll;
- cards tilt by 1-2 degrees;
- drag/drop illusion for proof cards;
- arrow down bounce.

Avoid:

- smooth luxury animations;
- bouncy startup transitions;
- heavy parallax that hurts readability;
- too many moving sprites;
- distracting auto-scroll.

## 12. Borders, Shadows, Radius

### Borders

Use:

- thick pixel borders: 4-8px;
- translucent panel borders: 8-12px;
- dashed drop zones;
- border-image gradients.

Avoid:

- 16-24px rounded cards;
- soft SaaS card shadows;
- glassmorphism blur as primary style.

### Radius

Default:

```css
border-radius: 0;
```

Allowed:

- avatar circles;
- transaction cards max 16-20px only if mimicking app cards;
- main panels can have 0-6px.

### Shadows

Use:

```css
box-shadow: 12px 14px 0 rgba(0,0,0,.28);
```

or

```css
filter: drop-shadow(10px 12px 0 rgba(0,0,0,.35));
```

## 13. Do / Don’t

### Do

- Зробити сайт як game quest.
- Використати pixel font і dark noisy фон.
- Дати кожній секції “рівень”.
- Показати progress/status.
- Використати avatar і proof inventory.
- Перетворити CV на proof-of-work.
- Вставити AI/Codex/Claude Code як частину системи.
- Тримати текстові блоки компактними для читабельності.
- Підсвічувати ключові слова кольором.

### Don’t

- Не копіювати персонажа finerd.
- Не використовувати логотип finerd як свій.
- Не робити сайт занадто дитячим.
- Не перевантажувати pixel font довгими абзацами.
- Не робити все тільки purple.
- Не робити generic SaaS cards.
- Не писати “AI enthusiast” без workflow.
- Не використовувати smooth corporate UI.

## 14. Implementation Notes

### 14.1. CSS base

```css
:root {
  --bg-black: #0D1112;
  --bg-panel: #171C1D;
  --text-main: #F2F2EA;
  --text-muted: #A9B0AE;
  --cyan: #62E8FF;
  --blue: #1397E8;
  --violet: #A56CFF;
  --purple: #8B2BBA;
  --magenta: #F05AC0;
  --green: #20C878;
  --yellow: #D9B51B;
  --orange: #F39A22;
}
```

### 14.2. Accessibility

Pixel style can hurt readability. Protect clarity:

- keep contrast high;
- use shorter text;
- use larger font sizes;
- avoid long paragraphs in display font;
- test mobile;
- add reduced-motion fallback;
- make buttons large.

### 14.3. Responsive rules

Desktop:

- big cinematic hero;
- split level sections;
- large typography.

Tablet:

- reduce heading size;
- keep split only if readable.

Mobile:

- stack layout;
- no massive sidebars;
- progress card under title;
- CTA full width;
- keep pixel visuals but lower density.

## 15. Quick QA Checklist

Before showing:

1. Чи виглядає сторінка як game quest, а не SaaS portfolio?
2. Чи є dark noisy background?
3. Чи є pixel typography?
4. Чи є gradient CTA border?
5. Чи є levels/progress?
6. Чи не скопійовано finerd assets напряму?
7. Чи зрозуміло за 5 секунд, що це заявка під finerd?
8. Чи видно, що ти AI-native через процес, а не через buzzword?
9. Чи текстові блоки читаються на mobile?
10. Чи дизайн не перебиває proof?
