# Gayola Punk Rock - Página Oficial

Bienvenido a la web oficial de **Gayola**, banda de punk-rock de España.  
Aquí encontrarás toda la información sobre el grupo, sus integrantes, próximos conciertos, galería de fotos, vídeos, discografía, tienda oficial y contacto.

## Tecnologías

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- Componentes SFC con `<script setup>`
- CSS personalizado y responsivo

## Estructura de la web

- **Inicio:** Foto principal del grupo y nombre del último disco.
- **Biografía:** Historia de la banda y presentación de los integrantes.
- **Conciertos:** Carteles y fechas de próximos eventos.
- **Galería:** Imágenes de la banda en directo y sesiones.
- **Vídeos:** Reproductor de vídeos de YouTube.
- **Discografía:** Información sobre los discos publicados.
- **Tienda Oficial:** Merchandising y productos exclusivos.
- **Contacto:** Formulario y redes sociales.

## Cómo ejecutar el proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a [http://localhost:5173](http://localhost:5173) en tu navegador.

## Personalización

- Las imágenes y vídeos se encuentran en la carpeta `/src/assets/`.
- Puedes modificar los componentes en `/src/components/` para actualizar contenido, rutas y estilos.

## Optimización y Rendimiento

### Estructura Semántica
- Se implementó HTML semántico en [src/App.vue](../src/App.vue):
  - `<header>`: Envuelve TopBar, NavBar y MobilMenu para mejor accesibilidad y SEO.
  - `<main role="main">`: Identifica el contenido principal de la página.
  - `<footer role="contentinfo">`: Define claramente el pie de página.
- Beneficios: Mejora posicionamiento en buscadores, accesibilidad WCAG, experiencia en lectores de pantalla.

### Optimización de Imágenes

Se incluye **imagemin** para optimización manual de imágenes. Uso:

```bash
# Sintaxis general (después de instalar): 
npx imagemin src/assets/*.{png,jpg,jpeg,webp} --out-dir=dist/assets
```

Paquetes incluidos en `devDependencies`:
- **imagemin**: Herramienta base de optimización.
- **imagemin-mozjpeg**: Compresión JPEG (calidad ~75%).
- **imagemin-pngquant**: Compresión PNG lossless (70-85% calidad).
- **imagemin-webp**: Conversión y compresión a WebP.

**Recomendaciones**:
1. Las imágenes en `/public/` ya están optimizadas en el build.
2. Para nuevas imágenes, usar imagemin manualmente o integrar en un script personalizado.
3. Usar formatos moderno (WebP) para navegadores modernos; PNG/JPEG como fallback.
4. Siempre incluir atributo `alt` en todas las imágenes para accesibilidad.

### Medición con Lighthouse
- Script de auditoría incluido en [package.json](../package.json):
  ```bash
  npm run lighthouse
  ```
- **Flujo recomendado**:
  1. Iniciar el servidor: `npm run dev`
  2. En otra terminal: `npm run lighthouse`
  3. Reporte HTML guardado en `./reports/lighthouse.html`
- Metría de Lighthouse evalúa: Performance, Accessibility, Best Practices, SEO e PWA.

### Notas Técnicas
- El proyecto usa **Vue 3 + Vite** para máximo rendimiento en desarrollo.
- Se mantiene **VitePWA** para funcionalidad offline y caché de fuentes Google (estrategia CacheFirst).
- Las imágenes locales se cachean indefinidamente; fuentes externas se cachean 1 año.
- Asegurar siempre atributos `alt` en todas las imágenes para accesibilidad.

## Créditos

Desarrollado por Diego Mancebo y el equipo Gayola.  
Contacto: diego.mancebo.tortosa@gmail.com

---
¡Síguenos en [Instagram](https://instagram.com/gayolaseriopunk), [Spotify](https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9), [Facebook](https://www.facebook.com/Gayolaseriopunk/) y [YouTube](https://www.youtube.com/@gayolapunkrock)
