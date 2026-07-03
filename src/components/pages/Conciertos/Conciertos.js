import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useHead } from "@vueuse/head";

export default function conciertosLogic() {
  const carteles = [
    "/carteles/cartel1.webp",
    "/carteles/cartel2.webp",
    "/carteles/cartel3.webp",
    "/carteles/cartel4.webp",
    "/carteles/cartel5.webp",
    "/carteles/cartel6.webp",
    "/carteles/cartel7.webp",
    "/carteles/cartel8.webp",
  ];
  
  const visible = ref(false);
  const index = ref(0);
  const isMobile = ref(window.innerWidth <= 900);

  function showCartel(i) {
    index.value = i;
    visible.value = true;
  }

  function hideCartel() {
    visible.value = false;
  }

  // Navegación con flechas
  const prevCartel = () => {
    if (index.value > 0) index.value--;
  };

  const nextCartel = () => {
    if (index.value < carteles.length - 1) index.value++;
  };

  // Swipe en móvil
  let touchStartX = null;
  let touchEndX = null;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 50) {
        index.value = delta < 0 ? Math.min(index.value + 1, carteles.length - 1) : Math.max(index.value - 1, 0);
      }
    }
    touchStartX = null;
    touchEndX = null;
  };

  const handleKeydown = (e) => {
    if (!visible.value) return;
    if (e.key === "ArrowLeft") prevCartel();
    if (e.key === "ArrowRight") nextCartel();
    if (e.key === "Escape") hideCartel();
  };

  const handleResize = () => {
    isMobile.value = window.innerWidth <= 900;
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("resize", handleResize);
  });

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

  return { carteles, visible, index, isMobile, showCartel, hideCartel, prevCartel, nextCartel, handleTouchStart, handleTouchEnd };
}