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
- No TypeScript, no Pinia/Vuex, no testing, no linter

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
- **Naming:** PascalCase for components, camelCase for variables/functions
- **Script:** `<script setup>` with Composition API. Keep `.vue` clean; extract to `.js` only if logic warrants it
- **Styles:** Scoped via `<style src="./Component.css" scoped></style>`. Use CSS vars. Mobile-first, breakpoint at 900px
- **Images:** WebP format. Native `loading="lazy"`. Shimmer via class `loading` → `loaded` via `v-img-load` directive (global, defined in `utils/imageDirective.js`)
- **Assets from `src/assets/`:** Must be imported (e.g., `import logoUrl from '/src/assets/logo.webp'`), not referenced as static `/src/assets/...` paths
- **Modals:** Focus trap from `utils/focusTrap.js`. Escape closes, arrows navigate, touch swipe support
- **Cards:** Use `.card` + `.card-hover` utility classes from `global.css`
- **SEO:** `useHead()` from `@vueuse/head` inside `<script setup>`. JSON-LD in `index.html` and `utils/schemaOrg.js`

## NPM Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on `localhost:5173` |
| `npm run build` | Production build to `dist/` |

## Constraints
- No backend, no API — all data is static arrays in `.js` files
- No TypeScript, no Pinia/Vuex — plain JS + `ref()`/`reactive()` only
- No test framework or linter configured
- No `/public/` prefix in image paths — Vite serves `public/` at root, use `/logos/...` not `/public/logos/...`
- Dark theme (#181818 bg), pink accent (#ff66ff), Montserrat + Roboto fonts
- `sitemap.xml` uses clean URLs matching `createWebHistory()` (no hash fragments)
