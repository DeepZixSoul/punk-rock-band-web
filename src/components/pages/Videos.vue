<template>
  <div class="videos-bg">
    <h2 class="videos-title">Vídeos Gayola</h2>
    <div class="videos-list">
      <transition-group name="video-fade" tag="div">
        <div v-for="(video, i) in videos" :key="video.id" class="video-item">
          <h3 class="video-titulo">{{ video.titulo }}</h3>
          <div
            class="video-thumb-wrapper"
            @click="openLightbox(i)"
            tabindex="0"
            @keyup.enter="openLightbox(i)"
            :aria-label="`Ver vídeo ${i + 1}: ${video.titulo}`"
          >
            <img
              v-if="!showIframe[i]"
              :src="getYoutubeThumb(video.id)"
              :alt="`Miniatura vídeo ${i + 1}: ${video.titulo}`"
              class="video-thumb-img"
              loading="lazy"
            />
            <transition name="thumb-fade">
              <iframe
                v-if="showIframe[i]"
                :src="getYoutubeEmbed(video.id)"
                frameborder="0"
                allowfullscreen
                class="video-frame"
                :title="`Vídeo ${i + 1}: ${video.titulo}`"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerpolicy="no-referrer"
              ></iframe>
            </transition>
            <div class="video-overlay" aria-hidden="true">
              <span class="video-play">▶</span>
            </div>
          </div>
          <button
            class="video-share"
            @click="shareVideo(video.id, $event)"
            :aria-label="`Compartir vídeo ${i + 1}: ${video.titulo}`"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff99ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98" />
              <path d="M15.41 6.51l-6.82 3.98" />
            </svg>
          </button>
        </div>
      </transition-group>
    </div>

    <!-- Lightbox modal -->
    <div
      v-if="showLightbox"
      class="video-lightbox"
      @click.self="closeLightbox"
      aria-modal="true"
      role="dialog"
    >
      <transition name="lightbox-fade">
        <div class="lightbox-content" v-if="showLightbox">
          <iframe
            :src="getYoutubeEmbed(videos[lightboxIndex].id, true)"
            frameborder="0"
            allowfullscreen
            class="video-frame-lightbox"
            :title="`Vídeo ${lightboxIndex + 1}: ${
              videos[lightboxIndex].titulo
            }`"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="no-referrer"
          ></iframe>
          <button
            class="lightbox-close"
            @click="closeLightbox"
            aria-label="Cerrar vídeo"
          >
            ✕
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from "vue";

// Lista de vídeos de YouTube
const videos = [
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

const showLightbox = ref(false);
const lightboxIndex = ref(0);
const showIframe = reactive({});

// Devuelve la URL de la miniatura de YouTube
function getYoutubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Devuelve la URL embebida de YouTube
function getYoutubeEmbed(id, autoplay = false) {
  let params = "?rel=0&modestbranding=1&showinfo=0&color=white";
  if (autoplay) params += "&autoplay=1";
  return `https://www.youtube.com/embed/${id}${params}`;
}

// Abre el lightbox y muestra el iframe del vídeo seleccionado
function openLightbox(i) {
  lightboxIndex.value = i;
  showLightbox.value = true;
  nextTick(() => {
    showIframe[i] = true;
  });
}

// Cierra el lightbox y oculta el iframe para liberar recursos
function closeLightbox() {
  showLightbox.value = false;
  setTimeout(() => {
    showIframe[lightboxIndex.value] = false;
  }, 300);
}

// Comparte el enlace del vídeo usando la API nativa o copia al portapapeles
function shareVideo(id, event) {
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
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});
function handleKeydown(e) {
  if (showLightbox.value && e.key === "Escape") {
    closeLightbox();
  }
}
</script>

<style scoped>
/* Fuente global coherente */
:global(html) {
  font-family: "Montserrat", Arial, sans-serif;
}
/* Título de cada vídeo */
.video-titulo {
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 1.2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}

/* Fondo y estructura */
.videos-bg {
  background: rgba(20, 20, 20, 0.95);
  padding: 2em 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.videos-title {
  padding-top: 2em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.videos-list {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.video-item {
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 1.5em 1em 1.2em 1em;
  margin-bottom: 2.5em;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
  animation: videoFadeIn 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.video-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.video-thumb-wrapper {
  position: relative;
  cursor: pointer;
  border-radius: 0.7em;
  overflow: hidden;
  outline: none;
  box-shadow: 0 0 20px #ff99ff44, 0 0 0 0 #ff99ff;
  background: linear-gradient(135deg, #181818 60%, #ff99ff22 100%);
  transition: box-shadow 0.25s, filter 0.2s;
}
.video-thumb-wrapper:focus,
.video-thumb-wrapper:hover {
  box-shadow: 0 0 40px #ff99ffcc, 0 0 0 4px #ff99ff88;
  filter: brightness(1.08) saturate(1.1);
}
.video-thumb-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  border-radius: 0.7em;
  background: #181818;
  transition: filter 0.2s;
}
.thumb-fade-enter-active,
.thumb-fade-leave-active {
  transition: opacity 0.3s;
}
.thumb-fade-enter-from,
.thumb-fade-leave-to {
  opacity: 0;
}
.video-frame {
  width: 100%;
  height: 350px;
  border-radius: 0.4em;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  border: none;
  pointer-events: none;
  filter: brightness(0.8) blur(0.5px);
  transition: filter 0.2s;
}
.video-thumb-wrapper:hover .video-frame,
.video-thumb-wrapper:focus .video-frame {
  filter: brightness(1) blur(0);
}
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #181818cc 0%, #0000 100%);
  pointer-events: none;
}
.video-play {
  font-size: 3em;
  color: #ff99ff;
  text-shadow: 0 0 10px #000a;
  opacity: 0.85;
}
.video-share {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 0.7em;
  align-self: flex-end;
  transition: transform 0.2s;
}
.video-share:hover {
  transform: scale(1.15);
}

/* Lightbox modal */
.video-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.97);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: lightboxFadeIn 0.3s;
}
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.video-frame-lightbox {
  width: 80vw;
  height: 45vw;
  max-width: 900px;
  max-height: 70vh;
  border-radius: 0.5em;
  background: #181818;
  border: none;
  box-shadow: 0 0 40px #ff99ff88;
}
.lightbox-close {
  position: absolute;
  top: -2.2em;
  right: 0.2em;
  background: none;
  border: none;
  color: #ff99ff;
  font-size: 2.2em;
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s;
}
.lightbox-close:hover {
  color: #fff;
}
@keyframes videoFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes lightboxFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* Transiciones Vue */
.video-fade-enter-active,
.video-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.video-fade-enter-from,
.video-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
/* Responsive */
@media (max-width: 900px) {
  .videos-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .videos-title {
    font-size: 1.3em;
    margin-bottom: 0.5em;
  }
  .videos-list {
    max-width: 98vw;
    gap: 1em;
  }
  .video-frame {
    height: 180px;
  }
  .video-frame-lightbox {
    width: 98vw;
    height: 55vw;
    max-width: 98vw;
    max-height: 50vh;
  }
}
@media (max-width: 600px) {
  .videos-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .video-frame {
    height: 120px;
  }
  .video-frame-lightbox {
    height: 40vw;
  }
}
</style>
