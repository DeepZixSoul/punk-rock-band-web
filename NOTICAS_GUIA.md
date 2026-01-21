# Guía: Gestión de Noticias y Entrevistas

## Descripción General
La sección de Noticias ha sido mejorada para destacar **entrevistas y menciones** de Gayola en otras páginas web. Ahora puedes:
- ✅ Usar imágenes de tu servidor local (`/carteles/`, `/tienda/`, etc.)
- ✅ Usar imágenes de otras webs (URLs completas)
- ✅ Indicar la fuente/medio de cada noticia
- ✅ Vincular a entrevistas externas

---

## Estructura de datos

Cada noticia se define en [src/data/noticias.js](src/data/noticias.js) con esta estructura:

```javascript
{
  titulo: "Título de la noticia",
  imagen: "/ruta/imagen.webp",        // O URL completa: "https://..."
  fuente: "Nombre del medio",          // Nuevo: muestra dónde se publicó
  pie: "Breve descripción...",
  enlace: "https://URL-externa.com"   // Hipervínculo a la noticia completa
}
```

---

## Ejemplos de Uso

### 1️⃣ Noticia de un periódico (con imagen externa)

```javascript
{
  titulo: "Gayola triunfa en el festival Breva Rock",
  imagen: "https://www.informacion.es/fotos/2024/gayola.jpg",
  fuente: "Información.es",
  pie: "La banda punk rock de Aspe fue la estrella del festival...",
  enlace: "https://www.informacion.es/cultura/2024/10/06/gayola-..."
}
```

### 2️⃣ Entrevista en radio/podcast

```javascript
{
  titulo: "Entrevista en Radio Aspe",
  imagen: "/public/logos/radio-aspe-logo.webp",  // O URL externa
  fuente: "Radio Aspe",
  pie: "Charlamos sobre el nuevo álbum y los conciertos previstos...",
  enlace: "https://www.youtube.com/watch?v=..."
}
```

### 3️⃣ Mención en redes/blog

```javascript
{
  titulo: "Gayola en Rockpunk Magazine",
  imagen: "https://rockpunk.es/wp-content/uploads/gayola-cover.jpg",
  fuente: "Rockpunk Magazine",
  pie: "Una análisis profundo sobre el resurgimiento del punk en Alicante...",
  enlace: "https://rockpunk.es/articulo-gayola"
}
```

---

## ℹ️ Sobre las imágenes externas

### ✅ Lo que funciona:
- **URLs HTTPS** de portales de noticias públicos
- **Imágenes de medios** que permitan reproducción externa
- **Logos de portales** disponibles públicamente
- **Screenshots** o capturas que tú mismo hayas tomado

### ⚠️ Consideraciones legales:
- Asegúrate de tener **derechos** para usar las imágenes
- Si es de un medio, verifica su **política de uso**
- Siempre da **crédito** (el campo `fuente` lo hace automáticamente)

### 🔒 CORS (Cross-Origin Resource Sharing):
- La mayoría de servidores modernos lo permiten
- Si una imagen no carga, es probable que el servidor la bloquee
- Solución: descarga y guarda en `/public/`

---

## 🎨 Mejoras Visuales Implementadas

✨ **Nuevo diseño:**
- Cards más grandes y atractivas (160x160px de imágenes)
- Efectos hover mejorados (escala, brillo, sombra)
- Botón "Leer entrevista" con gradiente y animación
- Indicador de fuente con emoji 🔗
- Animación suave al pasar el ratón

📱 **Responsive:**
- Desktop: layout horizontal
- Mobile: layout vertical optimizado
- Swipe en móvil para navegar

---

## Cómo Agregar una Nueva Noticia

### Opción 1: Imagen local (recomendado)
```javascript
{
  titulo: "Gayola toca en Elda",
  imagen: "/carteles/concierto-elda.webp",
  fuente: "Gayola Oficial",
  pie: "Este sábado 15 de marzo en la plaza...",
  enlace: "https://..."
}
```

### Opción 2: Imagen externa (URL)
```javascript
{
  titulo: "Entrevista en XYZ",
  imagen: "https://xyz.com/img/gayola.jpg",
  fuente: "XYZ Magazine",
  pie: "Nos hablan del nuevo disco...",
  enlace: "https://xyz.com/noticia"
}
```

---

## Pasos para Agregar Noticias

1. **Abre** `src/data/noticias.js`
2. **Copia-pega** un bloque de noticia existente
3. **Modifica** los campos `titulo`, `imagen`, `fuente`, `pie`, `enlace`
4. **Guarda** y actualiza la web (F5)

---

## ⚠️ Solución de problemas

| Problema | Causa | Solución |
|----------|-------|----------|
| Imagen no carga | URL externa inaccesible | Guarda la imagen en `/public/` |
| Error CORS | Servidor bloquea acceso | Usa imagen local o contacta al servidor |
| Página se ve rara | JSON mal formateado | Revisa las comas y comillas |
| Hipervínculo roto | URL incorrecto | Verifica la URL completa |

---

## 📝 Notas Finales

- El campo `fuente` es **opcional** - si no lo agregas, no se muestra
- El campo `enlace` es **opcional** - si es `null`, no aparece botón
- Las imágenes deben ser **webp** o **jpg** para mejor rendimiento
- Máximo **5 noticias** por página (configurable en `Noticias.js` línea 20)

**¡Listo! Ya puedes destacar todas las entrevistas y menciones de Gayola. 🎸🔥**
