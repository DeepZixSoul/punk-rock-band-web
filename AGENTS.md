# Gayola Web — Project Guide for AI Agents

## Project Overview
Official website for **Gayola**, a punk rock band from Aspe, Alicante. Static SPA, no backend, no API.

## Tech Stack
- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Routing:** Vue Router 4 (`createWebHistory`, lazy-loaded routes)
- **SEO:** `@vueuse/head` for per-page meta
- **Build:** Vite 7, Terser (drop console/debugger), CSS code splitting
- **PWA:** `vite-plugin-pwa` (Workbox, auto-update service worker)
- **Styling:** Plain CSS with custom properties (no preprocessors)
- **Deploy:** Netlify (SPA redirect, 1-year asset caching)
- No TypeScript, no Pinia/Vuex, no testing, no linter

## Project Structure
```
src/
├── components/
│   ├── pages/          # Route pages (one folder per route)
│   └── ui/             # Shared: NavBar, MobilMenu, Topbar, Footer, SocialBar
│   └── ErrorBoundary.vue
├── data/               # Static JS data
├── styles/
│   ├── variables.css   # CSS custom properties
│   └── global.css      # Base styles, shimmer animations
├── utils/              # focusTrap, imageLoader, performanceOptimizations, schemaOrg
├── App.vue             # Root layout (header → router-view → footer)
├── main.js             # Entry point
└── router.js           # 8 lazy-loaded routes
```

Each component folder has: `Component.vue` + `Component.js` (logic) + `Component.css` (scoped styles).

## CSS Custom Properties (`variables.css`)
```
--color-bg: #181818;         --color-accent: #ff66ff;
--color-accent-hover: #ffccff; --color-text: #fff;
--color-card: #222;          --color-shadow: #ff66ff44;
--font-title: 'Montserrat';  --font-text: 'Roboto';
--border-radius: 0.5em;      --max-width: 1200px;
```

## Coding Conventions
- **Naming:** PascalCase for components, camelCase for variables/functions
- **Script:** `<script setup>` with Composition API. Import `.js` for complex logic, keep `.vue` clean
- **Styles:** Scoped via `<style src="./Component.css" scoped></style>`. Use CSS vars. Mobile-first, breakpoint at 900px
- **Images:** WebP format. Native `loading="lazy"`. Shimmer via class `loading` → `loaded` via `v-img-load` directive (global, defined in `utils/imageDirective.js`)
- **Modals:** Focus trap from `utils/focusTrap.js`. Escape closes, arrows navigate, touch swipe support
- **SEO:** `useHead()` from `@vueuse/head` inside `<script setup>`. JSON-LD in `index.html` and `utils/schemaOrg.js`

## NPM Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on `localhost:5173` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

## Constraints
- No backend, no API — all data is static arrays in `.js` files
- No TypeScript, no Pinia/Vuex — plain JS + `ref()`/`reactive()` only
- No test framework or linter configured
- No `/public/` prefix in image paths — Vite serves `public/` at root, use `/logos/...` not `/public/logos/...`
- Dark theme (#181818 bg), pink accent (#ff66ff), Montserrat + Roboto fonts
- `sitemap.xml` uses clean URLs matching `createWebHistory()` (no hash fragments)
