<template>
  <div class="galeria-bg">
    <h2 class="galeria-title">Galería</h2>
    <div class="galeria-grid">
      <div
        v-for="(foto, i) in images"
        :key="i"
        class="foto-item"
        @click="showImg(i)"
      >
        <img :src="foto" alt="Foto Gayola" class="foto-img" />
      </div>
    </div>
    <VueEasyLightbox
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="hideImg"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
const images = [
  "/galeria/foto1.jpeg",
  "/galeria/foto2.jpeg",
  "/galeria/foto3.jpeg",
  "/galeria/foto4.jpeg",
  "/galeria/foto5.jpeg",
  "/galeria/foto6.jpeg",
  "/galeria/foto7.jpeg",
  "/galeria/foto8.jpeg",
  "/galeria/foto9.jpeg",
  "/galeria/foto10.jpeg",
  "/galeria/foto11.jpeg",
  "/galeria/foto12.jpeg",
  "/galeria/foto13.jpeg",
  "/galeria/foto14.jpeg",
  "/galeria/foto15.jpeg",
  "/galeria/foto16.jpeg",
  "/galeria/foto17.jpeg",
  "/galeria/foto18.jpeg",
];
const visible = ref(false);
const index = ref(0);

function showImg(i) {
  index.value = i;
  visible.value = true;
}
function hideImg() {
  visible.value = false;
}
visible.value = false;
</script>

<style scoped>
.galeria-bg {
  background: rgba(20, 20, 20, 0.9);
  padding: 2em 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.galeria-title {
  padding-top: 2em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
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
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.foto-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.foto-img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  transition: box-shadow 0.2s;
  /* Modal estilos */
  /* Eliminado: estilos del modal personalizado, ya que solo se usa VueEasyLightbox */
  background: #222;
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
  .galeria-grid {
    grid-template-columns: 1fr;
    gap: 1em;
  }
  .foto-img {
    max-height: 180px;
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
