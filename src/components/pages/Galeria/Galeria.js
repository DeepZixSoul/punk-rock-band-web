import { onMounted, onBeforeUnmount, ref, computed } from "vue";

export default function galeriaLogic() {
  const images = Array.from({ length: 30 }, (_, i) => `/galeria/foto${i + 1}.webp`);
  const LOTE = 10;
  const visibleCount = ref(LOTE);

  const imagesMostradas = computed(() => images.slice(0, visibleCount.value));

  function cargarMas() {
    visibleCount.value = Math.min(visibleCount.value + LOTE, images.length);
  }

  function tieneMas() {
    return visibleCount.value < images.length;
  }

  const carruseles = computed(() => {
    const chunk = Math.ceil(imagesMostradas.value.length / 3);
    return [
      imagesMostradas.value.slice(0, chunk),
      imagesMostradas.value.slice(chunk, chunk * 2),
      imagesMostradas.value.slice(chunk * 2),
    ];
  });

  const carruselRefs = ref([]);
  const setCarruselRef = (el) => {
    if (el) carruselRefs.value.push(el);
  };
  const visible = ref(false);
  const index = ref(0);
  const isMobile = ref(window.innerWidth <= 900);

  const showImg = (i) => {
    index.value = i;
    visible.value = true;
  };
  
  const hideImg = () => {
    visible.value = false;
  };

  let startX = null;
  let endX = null;
  let startTime = null;
  let isPinch = false;
  let initialDistance = null;

  const getDistance = (touches) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    // Si hay 2 o más dedos, es un pinch
    if (e.touches.length >= 2) {
      isPinch = true;
      initialDistance = getDistance(e.touches);
      return;
    }
    
    isPinch = false;
    startX = e.touches[0].clientX;
    startTime = Date.now();
    initialDistance = null;
  };

  const handleTouchEnd = (e) => {
    // Si fue pinch, ignorar
    if (isPinch) {
      isPinch = false;
      initialDistance = null;
      return;
    }

    // Si solo hay 1 toque y tenemos datos válidos
    if (e.changedTouches.length === 1 && startX !== null) {
      endX = e.changedTouches[0].clientX;
      const delta = endX - startX;
      const timeDelta = Date.now() - startTime;
      
      // Swipe debe ser: distancia > 60px Y tiempo < 500ms (swipe rápido)
      if (Math.abs(delta) > 60 && timeDelta < 500) {
        index.value = delta < 0 
          ? Math.min(index.value + 1, images.length - 1) 
          : Math.max(index.value - 1, 0);
      }
    }
    
    startX = null;
    endX = null;
    startTime = null;
    isPinch = false;
  };

  const handleResize = () => {
    isMobile.value = window.innerWidth <= 900;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);

    if (isMobile.value && carruselRefs.value.length) {
      carruselRefs.value.forEach(carruselEl => {
        const fotoItems = carruselEl.querySelectorAll('.foto-item');
        fotoItems.forEach(el => {
          el.addEventListener('touchstart', () => el.classList.add('foto-tap'));
          el.addEventListener('touchend', () => setTimeout(() => el.classList.remove('foto-tap'), 120));
        });
      });
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  const prevImg = () => {
    if (index.value > 0) index.value--;
  };
  const nextImg = () => {
    if (index.value < images.length - 1) index.value++;
  };
  return { images, imagesMostradas, carruseles, carruselRefs, setCarruselRef, visible, index, isMobile, showImg, hideImg, handleTouchStart, handleTouchEnd, prevImg, nextImg, cargarMas, tieneMas };
}
