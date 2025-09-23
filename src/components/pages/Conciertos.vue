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
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import { useHead } from "@vueuse/head";

const carteles = [
  "/carteles/cartel1.webp",
  "/carteles/cartel2.webp",
  "/carteles/cartel3.webp",
  "/carteles/cartel4.webp",
  "/carteles/cartel5.webp",
  "/carteles/cartel6.webp",
  "/carteles/cartel7.webp",
  "/carteles/cartel8.webp",
  // Añade más rutas según tus carteles
];
const visible = ref(false);
const index = ref(0);

function showCartel(i) {
  index.value = i;
  visible.value = true;
}
function hideCartel() {
  visible.value = false;
}

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
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.conciertos-bg {
  background: var(--color-bg);
  padding: 2em 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", Arial, sans-serif; /* Coherencia visual */
}

.conciertos-title {
  padding-top: 2em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
  letter-spacing: 2px;
}


.carteles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.cartel-item {
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  transition: box-shadow 0.2s, transform 0.2s;
}
.cartel-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.cartel-img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  border-radius: 0.4em;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  transition: box-shadow 0.2s;
}
@media (max-width: 1100px) {
  .carteles-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2em;
  }
  .cartel-img {
    max-height: 250px;
  }
}
@media (max-width: 900px) {
  .carteles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
  .cartel-img {
    max-height: 180px;
  }
}
@media (max-width: 600px) {
  .conciertos-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .conciertos-title {
    font-size: 1.5em;
    margin-bottom: 0.7em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .carteles-grid {
    grid-template-columns: 1fr;
    gap: 0.7em;
    max-width: 98vw;
  }
  .cartel-img {
    max-height: 120px;
  }
}
</style>
