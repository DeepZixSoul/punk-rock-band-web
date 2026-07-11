# Gayola Web — Agent Instructions

## Overview
Official website for **Gayola**, a punk rock band from Aspe, Alicante. Static SPA, no backend, no API.

## Tech Stack
- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Routing:** Vue Router 4 (`createWebHistory`, lazy-loaded routes)
- **SEO:** `@vueuse/head` for per-page meta
- **Build:** Vite 7, Terser (drop console/debugger), CSS code splitting
- **PWA:** `vite-plugin-pwa` (Workbox, auto-update SW)
- **Styling:** Plain CSS with custom properties (no preprocessors)
- **Deploy:** Netlify (SPA redirect, 1-year asset caching)
- No TypeScript, no Pinia/Vuex, no linter

## Project Structure
```
src/
├── components/
│   ├── pages/          # Route pages (one folder per route)
│   └── ui/             # Shared: NavBar, MobilMenu, Footer, SocialBar
├── data/               # Static JS data
├── styles/
│   ├── variables.css   # CSS custom properties
│   └── global.css      # Base styles, card system, shimmer, animations
├── utils/              # focusTrap, imageDirective, schemaOrg
├── App.vue             # Root layout (header → router-view → footer)
├── main.js             # Entry point
└── router.js           # 8 lazy-loaded routes
```

Component folders have: `Component.vue` + `Component.css` (scoped styles). Optional `.js` for complex logic (e.g., `NavBar.js` was inlined).

## CSS Custom Properties
```
--color-bg: #181818         --color-accent: #ff66ff
--color-accent-hover: #ffccff  --color-text: #fff
--color-card: #222          --color-shadow: #ff66ff44
--color-shadow-hover: #ff66ff88  --color-shadow-light: #ff99ff22
--color-table-bg: #191919cc
--font-title: 'Montserrat'  --font-text: 'Roboto'
--border-radius: 0.5em      --max-width: 1200px
```

## Header Architecture

Single unified header (`NavBar.vue`) fixed at top:
- **Desktop (>900px):** [Logo] [nav links centered] [SocialBar]
- **Mobile (≤900px):** [Logo] [hamburger button]

`NavBar` handles logo click (`goHome` — scrolls to top or routes to `/`), hamburger toggle, and renders `SocialBar` on desktop. No separate `TopBar` component.

On mobile, `MobilMenu` slides down below the header with nav links + `SocialBar`.

**Header height:** 3.5em desktop, 3em mobile, 2.5em small mobile. Content has `padding-top: 4.5em` in `App.vue`.

## Coding Conventions
- **Naming:** PascalCase for components, camelCase for variables/functions. Component name = directory name = PascalCase (e.g., `MobileMenu/`, not `MobilMenu/`).
- **Script:** `<script setup>` with Composition API. Keep `.vue` clean; extract to `.js` only if logic warrants it
- **`.js` logic files:** Must export a function that encapsulates all state (`ref`, `computed`). Never export `ref`/`computed` at module level — that creates shared state across imports. Never call Vue composables (`useHead`, `onMounted`, etc.) inside `.js` files; those belong in `<script setup>` of the `.vue`.
- **External links:** Use `window.open()` for links that should not interrupt the current page navigation. Never use `window.location.href = mailto:...` — it replaces the page.
- **Styles:** Always use `<style src="./Component.css" scoped></style>`. Never import CSS via `import` in `<script>`.
- **Shared styles:** If a pattern (modal fullscreen, arrows, etc.) appears in ≥2 components, extract to a shared CSS file or a shared component. No duplication.
- **`useHead()`:** Call only inside `<script setup>` of the `.vue` component, never inside a `.js` function.
- **Images:** WebP format. Native `loading="lazy"`. Shimmer via class `loading` → `loaded` via `v-img-load` directive (global, defined in `utils/imageDirective.js`)
- **Assets from `src/assets/`:** Must be imported (e.g., `import logoUrl from '/src/assets/logo.webp'`), not referenced as static `/src/assets/...` paths
- **Modals:** Focus trap from `utils/focusTrap.js`. Escape closes, arrows navigate, touch swipe support
- **Cards:** Use `.card` + `.card-hover` utility classes from `global.css`
- **SEO:** `useHead()` from `@vueuse/head` inside `<script setup>`. JSON-LD in `index.html` and `utils/schemaOrg.js`

## Dead Code Rules
- Every file in `src/utils/` must have at least one function imported and called from a component. If not, delete it.
- A `.js` file should not exist if it only exports an empty object or no-op function. Delete on sight.
- Before adding new code, check if existing code already solves the problem (e.g., `v-img-load` already handles image loading — do not add another image loader).

## NPM Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on `localhost:5173` |
| `npm run build` | Production build to `dist/` |
| `npm run test` | Run all tests (single run) |
| `npm run test:watch` | Run tests in watch mode |

## Testing

**Framework:** Vitest + `@vue/test-utils` + jsdom.

### Where tests live
Tests co-located with source: `Foo.test.js` next to `Foo.js` or `Foo.vue`.

### Naming
- Files: `*.test.js` (not `*.spec.js`)
- `describe`/`it` in Spanish, present indicative
- `describe` → unit name, `it` → expected behavior

### Test priority
1. **Composables (`.js` logic)** — pure JS, no DOM, highest value
   - Initial state
   - State transitions
   - Edge cases
2. **UI Components (`.vue`)** — mount with `@vue/test-utils`
   - Props, emits, conditional render
3. **Page components** — integration (low priority)

### What NOT to test
- Vue Router, `@vueuse/head`, `vite-plugin-pwa` (dependencies)
- CSS, snapshots (never use snapshots)
- Static data in `data/` (test the composable that consumes it, not the raw file)

### Patterns

**Composable test:**
```js
import { describe, it, expect } from 'vitest';
import fooLogic from './Foo.js';

describe('Foo', () => {
  it('starts with X value', () => {
    const { x } = fooLogic();
    expect(x.value).toBe(...);
  });

  it('toggle changes X', () => {
    const { x, toggle } = fooLogic();
    toggle();
    expect(x.value).toBe(...);
  });
});
```

**Component test:**
```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

it('renders X elements', () => {
  const w = mount(Foo, {
    global: { stubs: ['router-link'] }
  });
  expect(w.findAll('a')).toHaveLength(3);
});
```

### Mocking
- `window`: jsdom provides it by default. Use `vi.stubGlobal()` to override
- Router: `global.stubs` in `mount options`
- Lifecycle hooks (`onMounted` etc.): `@vue/test-utils` executes them on mount

## Constraints
- No backend, no API — all data is static arrays in `.js` files
- No TypeScript, no Pinia/Vuex — plain JS + `ref()`/`reactive()` only
- Testing: Vitest + `@vue/test-utils` + jsdom (see Testing section above)
- No linter configured
- No `/public/` prefix in image paths — Vite serves `public/` at root, use `/logos/...` not `/public/logos/...`
- Dark theme (#181818 bg), pink accent (#ff66ff), Montserrat + Roboto fonts
- `sitemap.xml` uses clean URLs matching `createWebHistory()` (no hash fragments)
