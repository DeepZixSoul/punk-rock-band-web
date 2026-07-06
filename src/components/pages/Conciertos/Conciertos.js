import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export default function conciertosLogic() {
  const carteles = [
    { src: "/carteles/cartel1.webp", fecha: "15 Mar 2025", lugar: "Sala Stereo", ciudad: "Alicante" },
    { src: "/carteles/cartel2.webp", fecha: "22 Mar 2025", lugar: "Rock City", ciudad: "Murcia" },
    { src: "/carteles/cartel3.webp", fecha: "12 Abr 2025", lugar: "Sala Matisse", ciudad: "Valencia" },
    { src: "/carteles/cartel4.webp", fecha: "3 May 2025", lugar: "Festival Punkada", ciudad: "Barcelona" },
    { src: "/carteles/cartel5.webp", fecha: "17 May 2025", lugar: "Sala Wah Wah", ciudad: "Valencia" },
    { src: "/carteles/cartel6.webp", fecha: "14 Jun 2025", lugar: "La Guarida del Volumen", ciudad: "Madrid" },
    { src: "/carteles/cartel7.webp", fecha: "5 Jul 2025", lugar: "Sala Intimo", ciudad: "Elche" },
    { src: "/carteles/cartel8.webp", fecha: "19 Jul 2025", lugar: "Booza Fest", ciudad: "Aspe" },
  ];

  const proximoConcierto = computed(() => carteles[0]);
  const otrosConciertos = computed(() => carteles.slice(1));
  
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

  return { carteles, proximoConcierto, otrosConciertos, visible, index, isMobile, showCartel, hideCartel, prevCartel, nextCartel, handleTouchStart, handleTouchEnd };
}