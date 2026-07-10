<template>
  <div class="noticias-page-bg">
    <h1 class="noticias-page-title">Noticias</h1>
    <Noticias />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Noticias from "./Noticias.vue";

useHead({
  title: 'Noticias | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Últimas noticias y novedades de Gayola, banda de punk rock desde Alicante.'
    },
    {
      property: 'og:title',
      content: 'Noticias | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Últimas noticias de Gayola. Punk rock desde Alicante.'
    }
  ]
});
</script>

<style scoped>
.noticias-page-bg {
  max-width: 800px;
  margin: 2.5em auto 2em;
  padding: 2.5em 2em 2em;
}
.noticias-page-title {
  font-family: var(--font-title);
  font-size: 2.5em;
  font-weight: 400;
  color: var(--color-accent);
  margin-bottom: 0.5em;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 0.3em;
  border-bottom: 2px solid rgba(255, 153, 255, 0.15);
}
@media (max-width: 600px) {
  .noticias-page-bg {
    padding: 1.2em 0.5em;
  }
  .noticias-page-title {
    font-size: 1.5em;
  }
}
</style>
