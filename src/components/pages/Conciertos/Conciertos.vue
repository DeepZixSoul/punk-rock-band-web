<template>
  <div class="conciertos-bg">
    <h1 class="conciertos-title" id="conciertos-modal-title">Próximos Conciertos</h1>
    <div id="conciertos-modal-desc" style="display: none;">
      Visualizador de carteles de conciertos. Usa las flechas para navegar entre carteles o desliza en móvil.
    </div>
    <div class="carteles-grid">
      <div
        v-for="(cartel, i) in carteles"
        :key="i"
        class="cartel-item card card-hover"
        @click="showCartel(i)"
        :tabindex="0"
        @keydown.enter.space="showCartel(i)"
      >
        <img
          :src="cartel.src"
          :alt="'Cartel del concierto ' + (i + 1) + ' de Gayola'"
          class="cartel-img loading"
          loading="lazy"
           v-img-load
        />
        <div class="cartel-meta">
          <span class="cartel-fecha">{{ cartel.fecha }}</span>
          <span class="cartel-lugar">{{ cartel.lugar }}</span>
          <span class="cartel-ciudad">{{ cartel.ciudad }}</span>
        </div>
      </div>
    </div>

    <!-- Fullscreen modal para carteles -->
    <div
      v-if="visible"
      class="modal-overlay"
      @click.self="hideCartel"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      role="dialog"
      aria-modal="true"
      aria-labelledby="conciertos-modal-title"
      aria-describedby="conciertos-modal-desc"
    >
      <button
        v-if="index > 0 && !isMobile"
        class="modal-arrow modal-arrow-left"
        @click.stop="prevCartel"
        aria-label="Cartel anterior"
      >
        &#8592;
      </button>
      <img
        :src="carteles[index].src"
        :alt="'Cartel del concierto ' + (index + 1) + ' de Gayola'"
        :title="'Cartel ' + (index + 1) + ' de ' + carteles.length"
        class="modal-img loading"
        :id="`conciertos-modal-${index}`"
        @load="$event.target.classList.remove('loading'); $event.target.classList.add('loaded')"
      />
      <div class="modal-concierto-info">
        <span class="modal-concierto-fecha">{{ carteles[index].fecha }}</span>
        <span class="modal-concierto-lugar">{{ carteles[index].lugar }}, {{ carteles[index].ciudad }}</span>
      </div>
      <button
        v-if="index < carteles.length - 1 && !isMobile"
        class="modal-arrow modal-arrow-right"
        @click.stop="nextCartel"
        aria-label="Cartel siguiente"
      >
        &#8594;
      </button>
      <button
        class="modal-close"
        @click="hideCartel"
        aria-label="Cerrar cartel"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useHead } from '@vueuse/head';
import conciertosLogic from "./Conciertos.js";
import { createFocusTrap } from "../../../utils/focusTrap.js";
import "../../../styles/modal-gallery.css";

const {
  carteles,
  visible,
  index,
  isMobile,
  showCartel,
  hideCartel,
  prevCartel,
  nextCartel,
  handleTouchStart,
  handleTouchEnd
} = conciertosLogic();

const eventStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': carteles.map((c, i) => ({
    '@type': 'Event',
    name: `Concierto de Gayola en ${c.lugar}`,
    startDate: c.fecha,
    location: {
      '@type': 'Place',
      name: c.lugar,
      address: { '@type': 'PostalAddress', addressLocality: c.ciudad, addressRegion: c.ciudad, addressCountry: 'ES' }
    },
    performer: { '@type': 'MusicGroup', name: 'Gayola' },
    image: `https://gayola.netlify.app${c.src}`,
    url: `https://gayola.netlify.app/conciertos`
  }))
}));

useHead({
  title: "Conciertos | Gayola - Punk Rock desde Alicante",
  meta: [
    {
      name: "description",
      content:
        "Próximos conciertos y eventos de Gayola. Fechas, lugares y entradas para ver a la banda en directo.",
    },
    {
      name: "keywords",
      content:
        "gayola, conciertos, punk, rock, eventos, directo, Alicante, banda, España, música, fechas, entradas",
    },
    {
      property: "og:title",
      content: "Conciertos | Gayola - Punk Rock desde Alicante",
    },
    {
      property: "og:description",
      content:
        "Próximos conciertos y eventos de Gayola. Fechas, lugares y entradas para ver a la banda en directo.",
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(eventStructuredData.value))
    }
  ]
});

let removeFocusTrap = null;

watch(visible, (newVal) => {
  if (newVal) {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      removeFocusTrap = createFocusTrap(modal);
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  } else {
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  }
});

watch(visible, (newVal) => {
  const mainEl = document.getElementById('main-content');
  if (mainEl) {
    mainEl.inert = newVal;
  }
});

function handleKeydown(e) {
  if (e.key === 'Escape' && visible.value) {
    hideCartel();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="./Conciertos.css" scoped></style>
