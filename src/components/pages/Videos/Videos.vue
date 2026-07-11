<template>
  <div class="videos-bg">
    <h1 class="videos-title">Vídeos Gayola</h1>
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
                allow="autoplay; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </transition>
            <div class="video-overlay" aria-hidden="true">
              <span class="video-play" aria-hidden="true">▶</span>
            </div>
          </div>
          <button
            class="video-share"
            @click="shareVideo(video.id, $event)"
            :aria-label="`Compartir vídeo ${i + 1}: ${video.titulo}`"
          >
            <template v-if="sharedIndex === i">
              <span class="video-share-texto">Copiado!</span>
            </template>
            <svg v-else
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

    <!-- Modal de vídeo -->
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
            allow="autoplay; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
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
import { watch } from 'vue';
import { useHead } from '@vueuse/head';
import "./Videos.css";
import videosLogic from "./Videos.js";
import { createFocusTrap } from "../../../utils/focusTrap.js";
import { useScrollLock } from "../../../utils/useScrollLock.js";

const {
  videos,
  showLightbox,
  lightboxIndex,
  showIframe,
  sharedIndex,
  getYoutubeThumb,
  getYoutubeEmbed,
  openLightbox,
  closeLightbox,
  shareVideo,
} = videosLogic();

useHead({
  title: 'Vídeos | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Videoclips, actuaciones en directo y vídeos oficiales de Gayola, banda de punk rock desde Alicante.'
    },
    {
      name: 'keywords',
      content: 'gayola, vídeos, videoclips, punk, rock, directo, Alicante, YouTube, música'
    },
    {
      property: 'og:title',
      content: 'Vídeos | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Videoclips y actuaciones de Gayola. Punk rock desde Alicante.'
    }
  ]
});

let removeFocusTrap = null;
let savedFocus = null;
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock();

watch(showLightbox, (newVal) => {
  if (newVal) {
    savedFocus = document.activeElement;
    lockScroll();
    const modal = document.querySelector('.video-lightbox');
    if (modal) {
      removeFocusTrap = createFocusTrap(modal);
      const closeBtn = modal.querySelector('.lightbox-close');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  } else {
    unlockScroll();
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
    savedFocus?.focus({ preventScroll: true });
    savedFocus = null;
  }
});
</script>


