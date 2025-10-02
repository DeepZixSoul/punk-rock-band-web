<template>
  <div class="conciertos-bg">
  <h2 class="conciertos-title">Próximos Conciertos</h2>
    <div class="carteles-grid">
      <div v-for="(cartel, i) in carteles" :key="i" class="cartel-item">
        <img
          :src="cartel"
          :alt="`Cartel de concierto número ${i+1}`"
          class="cartel-img"
          @click="showCartel(i)"
          loading="lazy"
        />
      </div>
    </div>
    <VueEasyLightbox
      :visible="visible"
      :imgs="carteles"
      :index="index"
      @hide="hideCartel"      
      :resizeDisabled="true"
      :moveDisabled="true"
      :downloadDisabled="true"
      :rotateDisabled="true"
      :zoomDisabled="true"
      :escDisabled="true"      
      :zoomScale="true"
    />
  </div>
</template>

<script setup>
// Importa la lógica JS desde archivo externo para mantener el componente limpio y modular
import conciertosLogic from "./Conciertos.js";
const { carteles, visible, index, showCartel, hideCartel } = conciertosLogic();
import VueEasyLightbox from "vue-easy-lightbox";
</script>

<style src="./Conciertos.css" scoped></style>
