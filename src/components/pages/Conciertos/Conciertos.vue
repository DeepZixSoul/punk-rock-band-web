<template>
  <div class="conciertos-bg">
    <h1 class="conciertos-title" id="conciertos-modal-title">Próximos Conciertos</h1>
    <div id="conciertos-modal-desc" style="display: none;">
      Visualizador de carteles de conciertos. Usa las flechas para navegar entre carteles o desliza en móvil.
    </div>

    <!-- Desktop: hero + cuadrícula -->
    <template v-if="!isMobile">
      <div v-if="proximoConcierto" class="proximo-hero">
        <span class="proximo-badge">PRÓXIMO CONCIERTO</span>
        <div
          class="proximo-card card card-hover"
          @click="showCartel(proximoConcierto.idx)"
          tabindex="0"
          @keydown.enter.space="showCartel(proximoConcierto.idx)"
        >
          <img
            :src="proximoConcierto.src"
            :alt="'Cartel del próximo concierto de Gayola'"
            class="proximo-img loading"
            v-img-load
          />
          <div class="proximo-info">
            <span class="proximo-fecha">{{ proximoConcierto.fecha }}</span>
            <span class="proximo-lugar">{{ proximoConcierto.lugar }}, {{ proximoConcierto.ciudad }}</span>
          </div>
        </div>
      </div>

      <template v-if="otrosConciertos.length">
        <h2 v-if="conciertosFuturos.length > 1" class="conciertos-subtitle">Próximos conciertos</h2>
        <div class="carteles-grid">
          <template v-for="(cartel, i) in otrosConciertos" :key="i">
            <div v-if="cartel.separador" class="carteles-separador">
              <span v-if="cartel.tipo === 'pasados'" class="separador-texto">Conciertos pasados</span>
            </div>
            <div
              v-else
              class="cartel-item card card-hover"
              @click="showCartel(cartel.idx)"
              :tabindex="0"
              @keydown.enter.space="showCartel(cartel.idx)"
            >
              <img
                :src="cartel.src"
                :alt="'Cartel del concierto de Gayola en ' + cartel.lugar"
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
          </template>
        </div>
      </template>
    </template>

    <!-- Móvil: scroll horizontal -->
    <template v-if="isMobile">
      <div class="carteles-scroll">
        <template v-for="(item, i) in conciertosCombinados" :key="i">
          <div v-if="item.separador" class="scroll-separador">
            <span v-if="item.tipo === 'pasados'" class="scroll-separador-texto">Conciertos pasados</span>
          </div>
          <div
            v-else
            class="scroll-card card card-hover"
            @click="showCartel(item.idx)"
            :tabindex="0"
            @keydown.enter.space="showCartel(item.idx)"
          >
            <div v-if="item.badge" class="scroll-badge">{{ item.badge }}</div>
            <img
              :src="item.src"
              :alt="'Cartel del concierto de Gayola en ' + item.lugar"
              class="scroll-img loading"
              v-img-load
            />
            <div class="scroll-info">
              <span class="scroll-fecha">{{ item.fecha }}</span>
              <span class="scroll-lugar">{{ item.lugar }}, {{ item.ciudad }}</span>
            </div>
          </div>
        </template>
      </div>
    </template>

    <!-- Modal pantalla completa para carteles -->
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
import { useScrollLock } from "../../../utils/useScrollLock.js";
import "../../../styles/modal-gallery.css";

const {
  carteles,
  conciertosFuturos,
  proximoConcierto,
  otrosConciertos,
  conciertosCombinados,
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
  '@graph': conciertosFuturos.value.map((c) => ({
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
