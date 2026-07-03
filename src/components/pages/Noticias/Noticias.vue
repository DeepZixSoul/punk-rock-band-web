<template>
  <section class="noticias-section">
    <h2 class="noticias-title">Noticias del grupo</h2>
    <transition :name="slideTransitionName">
      <div class="noticias-list" :key="paginaActual">
        <div
          v-for="noticia in noticiasPagina"
          :key="noticia.titulo"
          class="noticia-item"
        >
          <img
            :src="noticia.imagen"
            :alt="noticia.titulo"
            class="noticia-img loading"
            loading="lazy"
            v-img-load
          />
          <div class="noticia-info">
            <div>
              <h3 class="noticia-titulo">{{ noticia.titulo }}</h3>
              <p v-if="noticia.fuente" class="noticia-fuente">{{ noticia.fuente }}</p>
            </div>
            <p class="noticia-pie">{{ noticia.pie }}</p>
            <a
              v-if="noticia.enlace"
              :href="noticia.enlace"
              class="noticia-link"
              target="_blank"
              rel="noopener noreferrer"
              :title="`Ver ${noticia.fuente || 'noticia'} completa`"
              >Ver enlace</a
            >
          </div>
        </div>
      </div>
    </transition>
    <div class="noticias-paginacion">
      <button
        v-for="(p, i) in totalPaginas"
        :key="i"
        :class="['noticias-circulo', { activo: paginaActual === i }]"
        @click="cambiarPagina(i)"
        :aria-label="`Ir a página de noticias ${i + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import useNoticias from "./Noticias.js";

const {
  paginaActual,
  totalPaginas,
  noticiasPagina,
  slideTransitionName,
  cambiarPagina,
  handleTouchStart,
  handleTouchEnd,
  handleResize,
} = useNoticias();

let noticiasSectionEl = null;

onMounted(() => {
  window.addEventListener("resize", handleResize);
  noticiasSectionEl = document.querySelector(".noticias-section");
  if (noticiasSectionEl) {
    noticiasSectionEl.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    noticiasSectionEl.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (noticiasSectionEl) {
    noticiasSectionEl.removeEventListener("touchstart", handleTouchStart);
    noticiasSectionEl.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<style src="./Noticias.css" scoped></style>
