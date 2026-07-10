<template>
  <div class="galeria-bg">
    <h1 class="galeria-title">Galería</h1>
    <div v-if="isMobile" class="galeria-multi-carrusel">
      <div v-for="(carrusel, idx) in carruseles" :key="idx" class="galeria-carrusel-outer">
        <div
          class="galeria-carrusel"
          ref="setCarruselRef"
          :data-carrusel="idx"
          @scroll="onCarruselScroll($event, idx)"
        >
          <div
            v-for="(foto, i) in carrusel"
            :key="i"
            class="foto-item card card-hover"
            @click="showImg(galleryIndex(idx, i))"
            :tabindex="0"
            @keydown.enter.space="showImg(galleryIndex(idx, i))"
          >
            <img :src="foto" :alt="'Fotografía del grupo Gayola ' + (galleryIndex(idx, i) + 1)" class="foto-img vel-img loading" loading="lazy" v-img-load />
          </div>
        </div>
        <div class="carrusel-dots" v-if="carrusel.length > 1">
          <span
            v-for="(_, di) in carrusel"
            :key="di"
            class="carrusel-dot"
            :class="{ active: carruselActivos[idx] === di }"
          ></span>
        </div>
      </div>
    </div>
    <div v-else class="galeria-grid">
      <div
        v-for="(foto, i) in imagesMostradas"
        :key="i"
        class="foto-item card card-hover"
        @click="showImg(i)"
        :tabindex="0"
        @keydown.enter.space="showImg(i)"
      >
        <img :src="foto" :alt="'Fotografía del grupo Gayola ' + (i+1)" class="foto-img vel-img loading" loading="lazy" v-img-load />
      </div>
    </div>
    <button v-if="tieneMas()" class="galeria-cargar-mas" @click="cargarMas">
      Cargar más fotos ({{ imagesMostradas.length }} / {{ images.length }})
    </button>
    <div v-if="visible" class="modal-overlay" @click.self="hideImg"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos">
      <button v-if="index > 0 && !isMobile" class="modal-arrow modal-arrow-left" @click.stop="prevImg" aria-label="Foto anterior">&#8592;</button>
      <img :src="images[index]" class="modal-img loading" :alt="'Foto de Gayola ' + (index + 1) + ' de ' + images.length" v-img-load />
      <button v-if="index < images.length - 1 && !isMobile" class="modal-arrow modal-arrow-right" @click.stop="nextImg" aria-label="Foto siguiente">&#8594;</button>
      <button class="modal-close" @click="hideImg" aria-label="Cerrar galería">✕</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useHead } from '@vueuse/head';
import galeriaLogic from "./Galeria.js";
import { createFocusTrap } from "../../../utils/focusTrap.js";
import { useScrollLock } from "../../../utils/useScrollLock.js";
import "../../../styles/modal-gallery.css";
const { images, imagesMostradas, carruseles, carruselRefs, setCarruselRef, visible, index, isMobile, showImg, hideImg, handleTouchStart, handleTouchEnd, prevImg, nextImg, cargarMas, tieneMas } = galeriaLogic();

useHead({
  title: 'Galería | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Galería de fotos de Gayola: conciertos, ensayos y momentos de la banda de punk rock desde Alicante.'
    },
    {
      name: 'keywords',
      content: 'gayola, galería, fotos, conciertos, punk, rock, Alicante, banda, imágenes'
    },
    {
      property: 'og:title',
      content: 'Galería | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Fotos de Gayola en conciertos y sesiones. Punk rock desde Alicante.'
    }
  ]
});

const carruselActivos = ref([0, 0, 0]);

function galleryIndex(carruselIdx, itemIdx) {
  let offset = 0;
  for (let c = 0; c < carruselIdx; c++) {
    offset += carruseles.value[c].length;
  }
  return offset + itemIdx;
}

function onCarruselScroll(event, idx) {
  const el = event.target;
  const itemWidth = el.querySelector('.foto-item')?.offsetWidth || 1;
  const scrollLeft = el.scrollLeft;
  const active = Math.round(scrollLeft / (itemWidth + 4));
  carruselActivos.value[idx] = Math.min(active, carruseles.value[idx].length - 1);
}

let removeFocusTrap = null;
let savedFocus = null;
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock();

watch(visible, (newVal) => {
  if (newVal) {
    savedFocus = document.activeElement;
    lockScroll();
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      removeFocusTrap = createFocusTrap(modal);
      const closeBtn = modal.querySelector('.modal-close');
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

function handleKeydown(e) {
  if (e.key === 'Escape' && visible.value) {
    hideImg();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="./Galeria.css" scoped></style>
