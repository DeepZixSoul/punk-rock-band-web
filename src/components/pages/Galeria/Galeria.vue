<template>
  <div class="galeria-bg">
    <h2 class="galeria-title">Galería</h2>
    <div v-if="isMobile" class="galeria-multi-carrusel">
      <div v-for="(carrusel, idx) in carruseles" :key="idx" class="galeria-carrusel-outer">
        <div class="galeria-carrusel" ref="setCarruselRef">
          <div
            v-for="(foto, i) in carrusel"
            :key="i"
            class="foto-item"
            @click="showImg(idx * 10 + i)"
            :tabindex="0"
            @keydown.enter.space="showImg(idx * 10 + i)"
          >
            <img :src="foto" :alt="`Foto de Gayola número ${(idx*10)+i+1}`" class="foto-img vel-img" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="galeria-grid">
      <div
        v-for="(foto, i) in images"
        :key="i"
        class="foto-item"
        @click="showImg(i)"
        :tabindex="-1"
        @keydown.enter.space="showImg(i)"
      >
        <img :src="foto" :alt="`Foto de Gayola número ${i+1}`" class="foto-img vel-img" loading="lazy" />
      </div>
    </div>
    <VueEasyLightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="hideImg"
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
import galeriaLogic from "./Galeria.js";
import VueEasyLightbox from "vue-easy-lightbox";
const { images, carruseles, carruselRefs, setCarruselRef, visible, index, isMobile, showImg, hideImg } = galeriaLogic();
 
</script>

<style src="./Galeria.css" scoped></style>
 
