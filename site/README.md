# Finerd CV Quest Site

Статичний сайт без білд-системи: відкривається напряму через `index.html`.

## Де що правити

- `index.html` — HTML-скелет, порядок блоків, підключення стилів і скриптів.
- `style.css` — мапа CSS-файлів. Тут тільки `@import`, щоб швидко бачити структуру стилів.
- `styles/tokens.css` — кольори, шрифти, градієнти, тіні.
- `styles/base.css` — reset, `body`, глобальні дефолти.
- `styles/layout.css` — великі зони сторінки: HUD, viewport, scene, dialogue.
- `styles/components.css` — кнопки, персонажі, прогрес, артефакти, reusable UI.
- `styles/screens.css` — стартовий екран і фінальний CTA.
- `styles/utilities.css` — responsive, level state, helper-класи.
- `scripts/content.js` — весь текст квесту, рівні, артефакти.
- `scripts/config.js` — shared config і mutable state.
- `scripts/dom.js` — DOM-мапа. Якщо змінюються `id` або класи в HTML, перевірити цей файл.
- `scripts/audio.js` — UI-звуки.
- `scripts/engine.js` — логіка гри: рівні, друкарка, артефакти, фінальний екран.
- `scripts/main.js` — event listeners і keyboard/click behavior.

## Перевірка після правок

```bash
node site/tests/refactor-structure.test.mjs
```

Для швидкої візуальної перевірки можна запустити локальний сервер:

```bash
cd site
python3 -m http.server 4173
```

Після цього відкрити `http://127.0.0.1:4173`.
