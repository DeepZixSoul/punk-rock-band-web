<template>
  <div class="inicio-content">
    <div class="inicio-title-wrapper">
      <h1 class="inicio-title">Gayola Punk Rock</h1>
    </div>
    <img
      class="grupo-foto loading"
      src="/src/assets/grupo.webp"
      alt="Foto del grupo Gayola"
      fetchpriority="high"
      v-img-load
    />

    <!-- Noticias -->
    <Noticias />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Noticias from "../Noticias/Noticias.vue";

useHead({
  title: 'Gayola - Punk Rock Oficial desde Alicante | Conciertos, Música y Tienda',
  meta: [
    {
      name: 'description',
      content: 'Gayola es una banda de punk rock desde Alicante. Descubre nuestros conciertos, discografía, galería de fotos, tienda oficial y últimas noticias. SOMOS GAYOLA, PRIMO, NO LOS STONES.'
    },
    {
      property: 'og:title',
      content: 'Gayola - Punk Rock Oficial desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Banda de punk rock desde Alicante. Conciertos, música, galería, tienda oficial y noticias.'
    }
  ]
});
</script>

<style src="./Inicio.css" scoped></style>
