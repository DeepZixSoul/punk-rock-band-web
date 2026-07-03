<template>
  <div class="galeria-bg">
    <h2 class="galeria-title">Galería</h2>
    <div v-if="isMobile" class="galeria-multi-carrusel">
      <div v-for="(carrusel, idx) in carruseles" :key="idx" class="galeria-carrusel-outer">
        <div class="galeria-carrusel" ref="setCarruselRef">
          <div
            v-for="(foto, i) in carrusel"
            :key="i"
            class="foto-item card card-hover"
            @click="showImg(idx * 10 + i)"
            :tabindex="0"
            @keydown.enter.space="showImg(idx * 10 + i)"
          >
            <img :src="foto" :alt="`Foto de Gayola número ${(idx*10)+i+1}`" class="foto-img vel-img loading" loading="lazy" v-img-load />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="galeria-grid">
      <div
        v-for="(foto, i) in images"
        :key="i"
        class="foto-item card card-hover"
        @click="showImg(i)"
        :tabindex="-1"
        @keydown.enter.space="showImg(i)"
      >
        <img :src="foto" :alt="`Foto de Gayola número ${i+1}`" class="foto-img vel-img loading" loading="lazy" v-img-load />
      </div>
    </div>
    <div v-if="visible" class="modal-overlay" @click.self="hideImg"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd">
      <button v-if="index > 0 && !isMobile" class="modal-arrow modal-arrow-left" @click.stop="prevImg" aria-label="Anterior">&#8592;</button>
      <img :src="images[index]" class="modal-img loading" alt="Imagen ampliada" v-img-load />
      <button v-if="index < images.length - 1 && !isMobile" class="modal-arrow modal-arrow-right" @click.stop="nextImg" aria-label="Siguiente">&#8594;</button>
    </div>
  </div>
</template>

<script setup>
import galeriaLogic from "./Galeria.js";
import "../../../styles/modal-gallery.css";
const { images, carruseles, carruselRefs, setCarruselRef, visible, index, isMobile, showImg, hideImg, handleTouchStart, handleTouchEnd, prevImg, nextImg } = galeriaLogic();
 
</script>

<style src="./Galeria.css" scoped></style>
