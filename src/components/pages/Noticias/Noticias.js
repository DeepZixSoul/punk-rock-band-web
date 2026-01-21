// Lógica modularizada de Noticias.vue
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useHead } from "@vueuse/head";
import noticias from "../../../data/noticias.js";

export function onNoticiasStructured() {
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
});}


export const paginaActual = ref(0);
const noticiasPorPagina = 5;
export const totalPaginas = computed(() =>
  Math.ceil(noticias.length / noticiasPorPagina)
);
export const noticiasPagina = computed(() =>
  noticias.slice(
    paginaActual.value * noticiasPorPagina,
    (paginaActual.value + 1) * noticiasPorPagina
  )
);

// Dirección del slide: 'slide-left' o 'slide-right'
export const slideDirection = ref("slide-left");
export const slideTransitionName = computed(() => {
  // Solo slide en móviles, fade en desktop
  return window.innerWidth <= 900 ? slideDirection.value : "noticia-fade";
});

export function cambiarPagina(p) {
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
export function onNoticiasMounted() {
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
}
export function onNoticiasBeforeUnmount() {
  onBeforeUnmount(() => {
    if (noticiasSectionEl) {
      noticiasSectionEl.removeEventListener("touchstart", handleTouchStart);
      noticiasSectionEl.removeEventListener("touchend", handleTouchEnd);
    }
  });
}
