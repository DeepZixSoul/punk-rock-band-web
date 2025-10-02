// Lógica modularizada de Videos.vue
import { ref, reactive, nextTick, onMounted } from "vue";

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
  // Puedes añadir más vídeos aquí
];

export const showLightbox = ref(false);
export const lightboxIndex = ref(0);
export const showIframe = reactive({});

// Devuelve la URL de la miniatura de YouTube
export function getYoutubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Devuelve la URL embebida de YouTube
export function getYoutubeEmbed(id, autoplay = false) {
  let params = "?rel=0&modestbranding=1&showinfo=0&color=white";
  if (autoplay) params += "&autoplay=1";
  return `https://www.youtube.com/embed/${id}${params}`;
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
  showLightbox.value = false;
  setTimeout(() => {
    showIframe[lightboxIndex.value] = false;
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

// Accesibilidad: cerrar lightbox con Escape
export function onVideosMounted() {
  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });
}
function handleKeydown(e) {
  if (showLightbox.value && e.key === "Escape") {
    closeLightbox();
  }
}
