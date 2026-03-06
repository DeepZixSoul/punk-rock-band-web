// Lógica modularizada de Videos.vue
import { ref, reactive, nextTick } from "vue";

// Lista de vídeos de YouTube
export const videos = [
  { id: "ij8A73rEoaM", titulo: "PVTA POLICIA (VIDEOCLIP) - GAYOLA" },
  { id: "npum7ZPXTYM", titulo: "ATV - GAYOLA (VIDEOLYRICS)" },
  { id: "SAU3yBZLEB4", titulo: "LA LLORONA (VIDEOCLIP) - GAYOLA" },
  { id: "9Xv-neb0l3s", titulo: "UNA VEZ MÁS (VIDEOCLIP) - GAYOLA" },
  { id: "YQQQZDJejmg", titulo: "EN LAS TRINCHERAS (VIDEOLYRIC) - Gayola" },
  { id: "wRHWZDAPmjo", titulo: "MENDIGO (VIDEOCLIP) - Gayola" },
  { id: "vkMLXJq1vPE", titulo: "PAKO EL MADERO - GAYOLA (VIDEOCLIP)" },
  { id: "SNxjRfa7yxM", titulo: "EL PUNK NO HA MUERTO (VIDEOCLIP) - Gayola" },
];

export const showLightbox = ref(false);
export const lightboxIndex = ref(0);
// Estado simplificado para mostrar iframes en thumbnails
export const showIframe = reactive({});

// Inicializar showIframe para cada video
videos.forEach((_, i) => {
  showIframe[i] = false;
});

// Devuelve la URL de la miniatura de YouTube
export function getYoutubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Devuelve la URL de reproducción de YouTube
export function getYoutubeUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

// Devuelve la URL embebida de YouTube con parámetros correctos
export function getYoutubeEmbed(id, autoplay = false) {
  let url = `https://www.youtube.com/embed/${id}`;
  const params = [
    "fs=1",              // Permitir pantalla completa
    "rel=0",             // No mostrar videos relacionados
    "modestbranding=1"   // Ocultar logo de YouTube
  ];
  
  if (autoplay) {
    params.push("autoplay=1");
  }
  
  url += "?" + params.join("&");
  
  return url;
}

// Abre el lightbox y muestra el iframe del vídeo seleccionado
export function openLightbox(i) {
  lightboxIndex.value = i;
  showLightbox.value = true;
  nextTick(() => {
    showIframe[i] = true;
  });
}

// Cierra el lightbox y oculta el iframe para liberar recursos
export function closeLightbox() {
  const prevIndex = lightboxIndex.value;
  showLightbox.value = false;
  setTimeout(() => {
    showIframe[prevIndex] = false;
  }, 300);
}

// Comparte el enlace del vídeo usando la API nativa o copia al portapapeles
export function shareVideo(id, event) {
  event.stopPropagation();
  const url = `https://youtu.be/${id}`;
  if (navigator.share) {
    navigator.share({
      url,
      title: "Vídeo Gayola",
      text: "¡Mira este vídeo de Gayola!",
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Enlace copiado: " + url);
  }
}

// Hook de montaje para añadir listeners de teclado
export function useVideosMount() {
  const handleKeydown = (e) => {
    if (showLightbox.value && e.key === "Escape") {
      closeLightbox();
    }
  };
  
  window.addEventListener("keydown", handleKeydown);
  
  // Retorna función de limpieza para remover el listener
  return () => {
    window.removeEventListener("keydown", handleKeydown);
  };
}
