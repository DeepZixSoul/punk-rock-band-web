<template>
  <div class="conciertos-bg">
    <h2 class="conciertos-title" id="conciertos-modal-title">Próximos Conciertos</h2>
    <div id="conciertos-modal-desc" style="display: none;">
      Visualizador de carteles de conciertos. Usa las flechas para navegar entre carteles o desliza en móvil.
    </div>
    <div class="carteles-grid">
      <div
        v-for="(cartel, i) in carteles"
        :key="i"
        class="cartel-item"
        @click="showCartel(i)"
        :tabindex="0"
        @keydown.enter.space="showCartel(i)"
      >
        <img
          :src="cartel"
          :alt="`Cartel de concierto número ${i + 1}`"
          class="cartel-img loading"
          loading="lazy"
           v-img-load
        />
      </div>
    </div>

    <!-- Fullscreen modal para carteles -->
    <div
      v-if="visible"
      class="conciertos-fullscreen"
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
        class="conciertos-arrow conciertos-arrow-left"
        @click.stop="prevCartel"
        aria-label="Cartel anterior"
      >
        &#8592;
      </button>
      <img
        :src="carteles[index]"
        :alt="`Cartel número ${index + 1}`"
        :title="`Cartel número ${index + 1} de ${carteles.length}`"
        class="conciertos-fullscreen-img loading"
        :id="`conciertos-modal-${index}`"
        @load="$event.target.classList.remove('loading'); $event.target.classList.add('loaded')"
      />
      <button
        v-if="index < carteles.length - 1 && !isMobile"
        class="conciertos-arrow conciertos-arrow-right"
        @click.stop="nextCartel"
        aria-label="Cartel siguiente"
      >
        &#8594;
      </button>
      <button
        class="conciertos-close"
        @click="hideCartel"
        aria-label="Cerrar cartel"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import conciertosLogic from "./Conciertos.js";
import { createFocusTrap } from "../../../utils/focusTrap.js";

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

let removeFocusTrap = null;

watch(visible, (newVal) => {
  if (newVal) {
    const modal = document.querySelector('.conciertos-fullscreen');
    if (modal) {
      removeFocusTrap = createFocusTrap(modal);
      modal.querySelector('button')?.focus();
    }
  } else {
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  }
});
</script>

<style src="./Conciertos.css" scoped></style>
