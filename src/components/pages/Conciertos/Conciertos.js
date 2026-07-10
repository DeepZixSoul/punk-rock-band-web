import { ref, computed, onMounted, onBeforeUnmount } from "vue";

function parseFecha(fechaStr) {
  const meses = { Ene:0, Feb:1, Mar:2, Abr:3, May:4, Jun:5, Jul:6, Ago:7, Sep:8, Oct:9, Nov:10, Dic:11 };
  const [dia, mes, anio] = fechaStr.split(' ');
  return new Date(parseInt(anio), meses[mes], parseInt(dia));
}

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

  const cartelesConIndice = carteles.map((c, i) => ({ ...c, dateObj: parseFecha(c.fecha), idx: i }));

  const hoy = computed(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const conciertosFuturos = computed(() =>
    cartelesConIndice.filter(c => c.dateObj >= hoy.value).sort((a, b) => a.dateObj - b.dateObj)
  );
  const conciertosPasados = computed(() =>
    cartelesConIndice.filter(c => c.dateObj < hoy.value).sort((a, b) => b.dateObj - a.dateObj)
  );

  const proximoConcierto = computed(() => conciertosFuturos.value[0] || null);

  const otrosConciertos = computed(() => {
    const items = [];
    const futurosRest = conciertosFuturos.value.slice(1);
    const pasados = conciertosPasados.value;
    items.push(...futurosRest);
    if (pasados.length > 0) {
      items.push({ separador: true, tipo: 'pasados' });
      items.push(...pasados);
    }
    return items;
  });

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

  const prevCartel = () => {
    if (index.value > 0) index.value--;
  };

  const nextCartel = () => {
    if (index.value < carteles.length - 1) index.value++;
  };

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

  return { carteles, conciertosFuturos, proximoConcierto, otrosConciertos, visible, index, isMobile, showCartel, hideCartel, prevCartel, nextCartel, handleTouchStart, handleTouchEnd };
}
