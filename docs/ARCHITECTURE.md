# Gayola Web — Architecture

## Overview

Static SPA for the punk rock band **Gayola**. No backend, no API — all content is static data.

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Routing | Vue Router 4 — `createWebHistory`, lazy-loaded routes |
| Build | Vite 7 |
| PWA | `vite-plugin-pwa` (Workbox, auto-update SW) |
| SEO | `@vueuse/head` para meta por página + JSON-LD en `index.html` |
| Estilos | CSS plano con custom properties (mobile-first, breakpoint 900px) |
| Deploy | Netlify (SPA redirect en `netlify.toml`, caché 1 año assets) |

## Project Structure

```
src/
├── components/
│   ├── pages/        # Una carpeta por ruta: Componente + lógica + estilos
│   └── ui/           # Compartidos: NavBar, Topbar, MobilMenu, Footer, SocialBar
├── data/             # Datos estáticos (arrays JS)
├── styles/
│   ├── variables.css # Sistema de diseño (colores, fuentes, sombras)
│   └── global.css    # Reset, shimmer, animaciones, sistema de cards
├── utils/            # focusTrap, imageDirective, schemaOrg
├── App.vue           # Layout raíz: header + router-view + footer
├── main.js           # Entry point
└── router.js         # 8 rutas lazy-loaded
```

Cada componente de página sigue el patrón: `Component.vue` + `Component.js` (lógica) + `Component.css` (estilos scoped).

## Design System

Las variables CSS en `src/styles/variables.css` definen la paleta completa:

```
--color-bg: #181818           Fondo principal
--color-accent: #ff66ff       Rosa de acento
--color-card: #222            Fondo de tarjetas
--color-shadow: #ff66ff44     Sombra base
--color-shadow-hover: #ff66ff88  Sombra hover
--color-shadow-light: #ff99ff22  Sombra sutil
--color-table-bg: #191919cc   Fondo de tabla
--font-title: 'Montserrat'    Titulares
--font-text: 'Roboto'         Cuerpo
--border-radius: 0.5em        Radio base
--max-width: 1200px           Ancho máximo contenido
```

Las tarjetas usan clases utilitarias `.card` y `.card-hover` definidas en `global.css`.

## Key Conventions

- **Script:** Composition API con `<script setup>`. Lógica compleja en `.js` separado
- **Estilos:** Scoped por componente (`<style src="./Comp.css" scoped></style>`)
- **Imágenes:** WebP, `loading="lazy"`, directiva global `v-img-load` para shimmer
- **Modales:** Focus trap, Escape cierra, flechas navegan, swipe táctil
- **SEO:** `useHead()` en cada página, JSON-LD en `index.html` y `utils/schemaOrg.js`
- **Rendimiento:** Code splitting por ruta, Terser drop console/debugger

## NPM Commands

```bash
npm run dev       # Dev server → localhost:5173
npm run build     # Build producción → dist/
npm run preview   # Preview build local
```
