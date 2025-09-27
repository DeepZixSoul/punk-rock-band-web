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
import { onMounted, ref, computed } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
const images = [
  "/galeria/foto1.webp",
  "/galeria/foto2.webp",
  "/galeria/foto3.webp",
  "/galeria/foto4.webp",
  "/galeria/foto5.webp",
  "/galeria/foto6.webp",
  "/galeria/foto7.webp",
  "/galeria/foto8.webp",
  "/galeria/foto9.webp",
  "/galeria/foto10.webp",
  "/galeria/foto11.webp",
  "/galeria/foto12.webp",
  "/galeria/foto13.webp",
  "/galeria/foto14.webp",
  "/galeria/foto15.webp",
  "/galeria/foto16.webp",
  "/galeria/foto17.webp",
  "/galeria/foto18.webp",
  "/galeria/foto19.webp",
  "/galeria/foto20.webp",
  "/galeria/foto21.webp",
  "/galeria/foto22.webp",
  "/galeria/foto23.webp",
  "/galeria/foto24.webp",
  "/galeria/foto25.webp",
  "/galeria/foto26.webp",
  "/galeria/foto27.webp",
  "/galeria/foto28.webp",
  "/galeria/foto29.webp",
  "/galeria/foto30.webp",
];


const carruseles = [
  images.slice(0, 10),
  images.slice(10, 20),
  images.slice(20, 30)
];

const carruselRefs = ref([]);
function setCarruselRef(el) {
  if (el) carruselRefs.value.push(el);
}

;
const visible = ref(false);
const index = ref(0);
const isMobile = computed(() => window.innerWidth <= 900);
const carruselRef = ref(null);

function showImg(i) {
  index.value = i;
  visible.value = true;
}
function hideImg() {
  visible.value = false;
}

// Carrusel scroll snap y feedback táctil
onMounted(() => {
  if (isMobile.value && carruselRefs.value.length) {
    carruselRefs.value.forEach(carruselEl => {
      carruselEl.querySelectorAll('.foto-item').forEach(el => {
        el.addEventListener('touchstart', () => {
          el.classList.add('foto-tap');
        });
        el.addEventListener('touchend', () => {
          setTimeout(() => el.classList.remove('foto-tap'), 120);
        });
      });
    });
  }
});
</script>

<style scoped>
.galeria-bg {
  background: var(--color-card-bg, rgba(20, 20, 20, 0.9));
  padding: 2em 1em;
  box-shadow: 0 0 40px var(--color-shadow, #000a);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.galeria-title {
  padding-top: 2em;
  color: var(--color-principal, #ff99ff);
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.galeria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.foto-item {  
  background: var(--color-card-bg, #222);
  border-radius: 0.7em;
  box-shadow: 0 0 20px var(--color-shadow, #ff99ff44);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.foto-item:hover {
  box-shadow: 0 0 40px var(--color-shadow-hover, #ff99ff88);
  transform: scale(1.03);
}
.foto-img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  box-shadow: 0 0 8px var(--color-shadow, #000a);
  background: var(--color-bg, #181818);
  transition: box-shadow 0.2s;
}


/* Responsive */
@media (max-width: 1100px) {
  .galeria-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2em;
  }
  .foto-img {
    max-height: 250px;
  }
}
@media (max-width: 900px) {
  .galeria-bg {
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
  }
  .galeria-multi-carrusel {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    height: 100%;
    box-sizing: border-box;
  }
  .galeria-carrusel-outer {
    width: 100vw;
    overflow-x: hidden;
    margin-bottom: 1.5em;
  }
  .galeria-carrusel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0.2em;
    padding-bottom: 0.5em;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    height: 80vw;
    box-sizing: border-box;
  }
  .galeria-carrusel .foto-item {
    min-width: 98vw;
    max-width: 98vw;
    flex: 0 0 auto;
    scroll-snap-align: center;
    margin: 0 auto;
    border-radius: 1em;
    box-shadow: 0 0 12px var(--color-shadow, #ff99ff44);
    padding: 0.2em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .galeria-carrusel .foto-img {
    width: 100%;
    height: 70vw;
    max-height: 75vw;
    object-fit: contain;
    border-radius: 1em;
    background: var(--color-bg, #181818);
    box-shadow: 0 0 8px var(--color-shadow, #000a);
  }
  .foto-img {
    max-height: 180px;
    border-radius: 0.7em;
    width: 100vw;
    object-fit: contain;
  }
  .foto-item {
    position: relative;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .foto-item.foto-tap {
    box-shadow: 0 0 24px var(--color-principal, #ff99ff);
    transform: scale(0.97);
  }
  .modal-img {
    max-width: 98vw;
    max-height: 70vh;
  }
}
@media (max-width: 600px) {
  .galeria-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .galeria-title {
    font-size: 1.5em;
    margin-bottom: 0.7em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .galeria-grid {
    grid-template-columns: 1fr;
    gap: 0.7em;
    max-width: 98vw;
  }
  .foto-img {
    max-height: 120px;
  }
  .modal-img {
    max-width: 98vw;
    max-height: 60vh;
  }
}
</style>
