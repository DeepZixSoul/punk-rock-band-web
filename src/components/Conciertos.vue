<template>
  <div class="conciertos-bg">
    <h2 class="conciertos-title">Próximos Conciertos</h2>
    <div class="carteles-grid">
      <div v-for="(cartel, i) in carteles" :key="i" class="cartel-item">
        <img :src="cartel" alt="Cartel de concierto" class="cartel-img" @click="showCartel(i)" />
      </div>
    </div>
    <VueEasyLightbox
      :visible="visible"
      :imgs="carteles"
      :index="index"
      @hide="hideCartel"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { useHead } from '@vueuse/head';

const carteles = [
  "/carteles/cartel1.jpg",
  "/carteles/cartel2.jpg",
  "/carteles/cartel3.jpg",
  "/carteles/cartel4.jpg",
  "/carteles/cartel5.jpg",
  "/carteles/cartel6.jpg",
  "/carteles/cartel7.jpg",
  "/carteles/cartel8.jpg",
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
  title: 'Conciertos | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Próximos conciertos y eventos de Gayola. Fechas, lugares y entradas para ver a la banda en directo.'
    },
    {
      name: 'keywords',
      content: 'gayola, conciertos, punk, rock, eventos, directo, Alicante, banda, España, música, fechas, entradas'
    },
    {
      property: 'og:title',
      content: 'Conciertos | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Próximos conciertos y eventos de Gayola. Fechas, lugares y entradas para ver a la banda en directo.'
    }
  ]
});
</script>

<style scoped>
.conciertos-bg {
  background: rgba(20, 20, 20, 0.9);
  padding: 2em 1em;
 
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.conciertos-title {
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  .conciertos-bg {
    background: #181818;
    padding: 2em 0.5em;
    min-height: 60vh;
    border-radius: 0.3em;
    box-shadow: 0 0 40px #ff99ff44;
    animation: topbarFadeIn 0.7s cubic-bezier(0.77, 0, 0.18, 1);
  }
  .conciertos-title {
    color: #ff99ff;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 2em;
    margin-bottom: 1em;
    text-align: center;
  }
  @keyframes topbarFadeIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  letter-spacing: 2px;
  text-align: center;
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
