<template>
  <section class="noticias-section">
    <h2 class="noticias-title">Noticias del grupo</h2>
    <!-- Slide horizontal solo en móviles, fade en desktop -->
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
        aria-label="Ir a página de noticias {{ i + 1 }}"
      ></button>
    </div>
  </section>
</template>

<script setup>
import "./Noticias.css";
import {
  paginaActual,
  totalPaginas,
  noticiasPagina,
  slideTransitionName,
  cambiarPagina,
  onNoticiasMounted,
  onNoticiasBeforeUnmount
} from "./Noticias.js";
onNoticiasMounted();
onNoticiasBeforeUnmount();
</script>


