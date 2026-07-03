# Gayola — Official Website

Sitio web oficial de **Gayola**, banda de punk rock desde Alicante.

## Stack

- **Vue 3** + Composition API + `<script setup>`
- **Vite** + lazy loading (code splitting)
- **Vue Router 4** (SPA con rutas limpias)
- **VitePWA** (service worker + offline support)
- CSS personalizado con sistema de diseño propio

## Características

- Arquitectura componentizada, mobile-first
- PWA instalable con manifest y service worker
- SEO: sitemap.xml, robots.txt, JSON-LD, Open Graph, Twitter Cards
- Imágenes optimizadas en WebP
- Sistema de diseño con CSS custom properties
- Animaciones de entrada unificadas con `prefers-reduced-motion`

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # previsualizar build localmente
```

## Estructura

```
src/
├── components/
│   ├── pages/       # Páginas (Inicio, Biografia, Conciertos...)
│   └── ui/          # Componentes compartidos (NavBar, Footer...)
├── styles/
│   ├── variables.css  # CSS custom properties
│   └── global.css     # Reset, utilidades, sistema de cards
├── utils/           # Utilidades (focusTrap, directiva v-img-load)
├── router.js        # Configuración de rutas
├── App.vue          # Layout principal
└── main.js          # Entry point
```

## Despliegue

`npm run build` genera los archivos estáticos en `dist/`. Compatible con Netlify (incluye `netlify.toml`).

---

[gayola.netlify.app](https://gayola.netlify.app)
