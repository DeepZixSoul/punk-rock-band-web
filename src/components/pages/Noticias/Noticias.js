import { ref, computed } from "vue";
import noticias from "../../../data/noticias.js";

export default function useNoticias() {
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

  const slideDirection = ref("slide-left");
  const isMobile = ref(window.innerWidth <= 900);
  const slideTransitionName = computed(() =>
    isMobile.value ? slideDirection.value : "noticia-fade"
  );

  function cambiarPagina(p) {
    if (p === paginaActual.value) return;
    slideDirection.value = p > paginaActual.value ? "slide-left" : "slide-right";
    paginaActual.value = p;
    const section = document.querySelector(".noticias-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < -40 || rect.top > 40) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  let touchStartX = null;
  let touchEndX = null;
  const minSwipeDistance = 50;

  function handleTouchStart(e) {
    if (!isMobile.value) return;
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    if (!isMobile.value) return;
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (distance < 0 && paginaActual.value < totalPaginas.value - 1) {
      slideDirection.value = "slide-left";
      paginaActual.value++;
    } else if (distance > 0 && paginaActual.value > 0) {
      slideDirection.value = "slide-right";
      paginaActual.value--;
    }
    touchStartX = null;
    touchEndX = null;
  }

  function handleResize() {
    isMobile.value = window.innerWidth <= 900;
  }

  return {
    paginaActual,
    totalPaginas,
    noticiasPagina,
    slideTransitionName,
    cambiarPagina,
    handleTouchStart,
    handleTouchEnd,
    handleResize,
  };
}
