<template>
  <div class="inicio-content">
    <div class="inicio-title-wrapper">
      <h1 class="inicio-title">Gayola Punk Rock</h1>
    </div>
    <img
      class="grupo-foto"
      src="/src/assets/grupo.jpeg"
      alt="Foto del grupo Gayola"
    />

    <!-- Noticias -->
    <section class="noticias-section">
      <h2 class="noticias-title">Noticias del grupo</h2>
      <transition-group name="noticia-fade" tag="div" class="noticias-list">
        <div v-for="noticia in noticiasPagina" :key="noticia.titulo" class="noticia-item">
          <img :src="noticia.imagen" :alt="noticia.titulo" class="noticia-img" />
          <div class="noticia-info">
            <h3 class="noticia-titulo">{{ noticia.titulo }}</h3>
            <p class="noticia-pie">{{ noticia.pie }}</p>
            <a v-if="noticia.enlace" :href="noticia.enlace" class="noticia-link" target="_blank">Ver más</a>
          </div>
        </div>
      </transition-group>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import noticias from '../data/noticias.js';

const paginaActual = ref(0);
const noticiasPorPagina = 5;
const totalPaginas = computed(() => Math.ceil(noticias.length / noticiasPorPagina));
const noticiasPagina = computed(() =>
  noticias.slice(paginaActual.value * noticiasPorPagina, (paginaActual.value + 1) * noticiasPorPagina)
);
function cambiarPagina(p) {
  paginaActual.value = p;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");

.noticias-section {
  width: 100%;
  max-width: 900px;
  margin: 3em auto 0 auto;
  background: #181818;
  border-radius: 0.5em;
  box-shadow: 0 0 20px #ff99ff44;
  padding: 2em 1em 1.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.noticias-title {
  font-family: "Montserrat", Arial, sans-serif;
  color: #ff99ff;
  font-size: 1.7em;
  margin-bottom: 1.2em;
  text-align: center;
  letter-spacing: 1px;
}
.noticias-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.noticia-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5em;
  background: #222;
  border-radius: 0.4em;
  box-shadow: 0 0 10px #ff99ff22;
  padding: 1em;
  font-family: "Roboto", Arial, sans-serif;
  animation: noticiaSophisticated 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
.noticia-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.4em;
  box-shadow: 0 0 8px #ff99ff44;
  background: #181818;
}
.noticia-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.noticia-titulo {
  font-family: "Montserrat", Arial, sans-serif;
  color: #ff99ff;
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.noticia-pie {
  color: #fff;
  font-size: 1em;
  margin-bottom: 0.5em;
}
.noticia-link {
  color: #ff99ff;
  font-weight: 500;
  text-decoration: underline;
  font-size: 1em;
  margin-top: 0.2em;
  transition: color 0.2s;
}
.noticia-link:hover {
  color: #fff;
}
.noticias-paginacion {
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-top: 2em;
}
.noticias-circulo {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff99ff44;
  border: none;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 4px #ff99ff22;
}
.noticias-circulo.activo {
  background: #ff99ff;
  box-shadow: 0 0 10px #ff99ff88;
}

/* Animación sofisticada para las noticias */
@keyframes noticiaSophisticated {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(-8deg);
    filter: blur(6px) brightness(1.2);
  }
  60% {
    opacity: 0.7;
    transform: scale(1.05) rotate(2deg);
    filter: blur(1px) brightness(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: blur(0) brightness(1);
  }
}
.noticia-fade-enter-active, .noticia-fade-leave-active {
  transition: all 0.7s cubic-bezier(.68,-0.55,.27,1.55);
}
.noticia-fade-enter-from, .noticia-fade-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(-8deg);
  filter: blur(6px) brightness(1.2);
}
.noticia-fade-leave-active {
  position: absolute;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");

.inicio-content {
  background: rgba(20, 20, 20, 0.9);
  padding: 4em 1em;

  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inicio-content {
  background: rgba(20, 20, 20, 0.9);
  padding: 4em 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", Arial, sans-serif;
}

.inicio-title {
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.4em;
  padding: 0.5em 1.5em 0.3em 1.5em;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;

  font-weight: 700;
  display: block;
}
.inicio-title {
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.4em;
  padding: 0.5em 1.5em 0.3em 1.5em;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 700;
  display: block;
}

.grupo-foto {
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  object-fit: cover;
  box-shadow: 0 0 20px #ff99ff44;
  border-radius: 0.7em;

  display: block;
}

@media (max-width: 900px) {
  .inicio-title {
    font-size: 2em;
    padding: 0.4em 0.7em 0.2em 0.7em;
    letter-spacing: 1px;
  }
  .grupo-foto {
    height: 35vh;
    max-width: 98vw;
  }
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
</style>
