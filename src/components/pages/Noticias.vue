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
            class="noticia-img"
          />
          <div class="noticia-info">
            <h3 class="noticia-titulo">{{ noticia.titulo }}</h3>
            <p class="noticia-pie">{{ noticia.pie }}</p>
            <a
              v-if="noticia.enlace"
              :href="noticia.enlace"
              class="noticia-link"
              target="_blank"
              rel="noopener noreferrer"
              >Ver más</a
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
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useHead } from "@vueuse/head";
import noticias from "../../data/noticias.js";

useHead({
  title: "Noticias | Gayola - Punk Rock desde Alicante",
  meta: [
    {
      name: "description",
      content:
        "Noticias y novedades de Gayola, grupo de punk rock en Alicante. Conciertos, lanzamientos, eventos y actualidad.",
    },
    {
      name: "keywords",
      content:
        "gayola, noticias, punk, rock, grupo musical, conciertos, novedades, Alicante, Aspe, Elda, Orihuela, Murcia, banda, España",
    },
    {
      property: "og:title",
      content: "Noticias | Gayola - Punk Rock desde Alicante",
    },
    {
      property: "og:description",
      content:
        "Noticias y novedades de Gayola, grupo de punk rock en Alicante. Conciertos, lanzamientos, eventos y actualidad.",
    },
  ],
});

const paginaActual = ref(0);
const noticiasPorPagina = 5;
const totalPaginas = computed(() =>
  Math.ceil(noticias.length / noticiasPorPagina)
);
const noticiasPagina = computed(() =>
  noticias.slice(
    paginaActual.value * noticiasPorPagina,
    (paginaActual.value + 1) * noticiasPorPagina
  )
);

// Dirección del slide: 'slide-left' o 'slide-right'
const slideDirection = ref("slide-left");
const slideTransitionName = computed(() => {
  // Solo slide en móviles, fade en desktop
  return window.innerWidth <= 900 ? slideDirection.value : "noticia-fade";
});

function cambiarPagina(p) {
  if (p === paginaActual.value) return;
  slideDirection.value = p > paginaActual.value ? "slide-left" : "slide-right";
  paginaActual.value = p;
  // Solo hacer scroll si la sección de noticias no está ya visible arriba
  nextTick(() => {
    const section = document.querySelector(".noticias-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      // Si la parte superior de la sección está fuera de la vista (más de 40px del top)
      if (rect.top < -40 || rect.top > 40) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}

// --- Swipe en móviles ---
let touchStartX = null;
let touchEndX = null;
const minSwipeDistance = 50; // px

function handleTouchStart(e) {
  if (window.innerWidth > 900) return; // Solo móviles/tablet
  touchStartX = e.changedTouches[0].screenX;
}
function handleTouchEnd(e) {
  if (window.innerWidth > 900) return;
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}
function handleSwipeGesture() {
  if (touchStartX === null || touchEndX === null) return;
  const distance = touchEndX - touchStartX;
  if (Math.abs(distance) < minSwipeDistance) return;
  if (distance < 0 && paginaActual.value < totalPaginas.value - 1) {
    // Swipe left: siguiente página
    slideDirection.value = "slide-left";
    paginaActual.value++;
  } else if (distance > 0 && paginaActual.value > 0) {
    // Swipe right: página anterior
    slideDirection.value = "slide-right";
    paginaActual.value--;
  }
  touchStartX = null;
  touchEndX = null;
}

let noticiasSectionEl = null;
onMounted(() => {
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
  if (noticiasSectionEl) {
    noticiasSectionEl.removeEventListener("touchstart", handleTouchStart);
    noticiasSectionEl.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");

/* Noticias sección */
.noticias-section {
  width: 100%;
  max-width: 1170px;
  margin: 3em auto 0 auto;
  background: var(--color-bg, #181818);
  border-radius: 0.5em;
  box-shadow: 0 0 20px var(--color-shadow, #ff99ff44);
  padding: 2em 1em 1.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.noticias-title {
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  color: var(--color-principal, #ff99ff);
  font-size: 1.7em;
  margin-bottom: 1.2em;
  text-align: center;
  letter-spacing: 1px;
}
/* Lista y noticia item */
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
  background: var(--color-card-bg, #222);
  border-radius: 0.4em;
  box-shadow: 0 0 10px var(--color-shadow-light, #ff99ff22);
  padding: 1em;
  font-family: var(--font-principal, 'Roboto', Arial, sans-serif);
}
.noticia-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.4em;
  box-shadow: 0 0 8px var(--color-shadow, #ff99ff44);
  background: var(--color-bg, #181818);
}
.noticia-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.noticia-titulo {
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  color: var(--color-principal, #ff99ff);
  font-size: 1.2em;
  margin-bottom: 0.5em;
}
.noticia-pie {
  color: var(--color-text, #fff);
  font-size: 1em;
  margin-bottom: 0.5em;
}
.noticia-link {
  color: var(--color-link, #ff99ff);
  font-weight: 500;
  text-decoration: underline;
  font-size: 1em;
  margin-top: 0.2em;
  transition: color 0.2s;
}
.noticia-link:hover {
  color: var(--color-text, #fff);
}
/* Paginación */
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
  background: var(--color-shadow-light, #ff99ff44);
  border: none;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 4px var(--color-shadow-light, #ff99ff22);
}
.noticias-circulo.activo {
  background: var(--color-principal, #ff99ff);
  box-shadow: 0 0 10px var(--color-shadow-hover, #ff99ff88);
}

/* --- Animación slide horizontal para móviles --- */
@media (max-width: 900px) {
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.18, 1),
      opacity 0.45s cubic-bezier(0.77, 0, 0.18, 1);
    will-change: transform, opacity;
  }
  .slide-left-enter-from {
    transform: translateX(100vw);
    opacity: 0.2;
  }
  .slide-left-leave-to {
    transform: translateX(-100vw);
    opacity: 0.2;
  }
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.45s cubic-bezier(0.77, 0, 0.18, 1),
      opacity 0.45s cubic-bezier(0.77, 0, 0.18, 1);
    will-change: transform, opacity;
  }
  .slide-right-enter-from {
    transform: translateX(-100vw);
    opacity: 0.2;
  }
  .slide-right-leave-to {
    transform: translateX(100vw);
    opacity: 0.2;
  }
  .noticias-section {
    width: 95vw;
    max-width: 100vw;
    padding: 1.2em 0.5em 1em 0.5em;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .noticia-item {
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em 0.5em;
  }
  .noticia-img {
    width: 98vw;
    height: 180px;
    margin-bottom: 0.7em;
  }
  .noticia-info {
    width: 100%;
    min-width: 0;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .noticias-title {
    font-size: 1.1em;
    margin-bottom: 0.5em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .noticias-section {
    width: 90vw;
    max-width: 100vw;
    padding: 0.7em 0.2em 0.7em 0.2em;
    border-radius: 0.5em;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .noticia-item {
    padding: 0.7em 0.2em;
    gap: 0.7em;
  }
  .noticia-img {
    width: 98vw;
    height: 120px;
  }
  .noticia-info {
    width: 100%;
    min-width: 0;
    align-items: center;
    text-align: center;
  }
}
</style>
