import { onMounted, ref, computed } from "vue";

export default function galeriaLogic() {
  const images = Array.from({ length: 30 }, (_, i) => `/galeria/foto${i + 1}.webp`);

  const carruseles = [
    images.slice(0, 10),
    images.slice(10, 20),
    images.slice(20, 30)
  ];

  const carruselRefs = ref([]);
  const visible = ref(false);
  const index = ref(0);
  const isMobile = computed(() => window.innerWidth <= 900);

  const showImg = (i) => {
    index.value = i;
    visible.value = true;
  };
  
  const hideImg = () => {
    visible.value = false;
  };

  let startX = null;
  let endX = null;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX !== null && endX !== null) {
      const delta = endX - startX;
      if (Math.abs(delta) > 50) {
        index.value = delta < 0 ? Math.min(index.value + 1, images.length - 1) : Math.max(index.value - 1, 0);
      }
    }
    startX = null;
    endX = null;
  };

  onMounted(() => {
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

  const prevImg = () => {
    if (index.value > 0) index.value--;
  };
  const nextImg = () => {
    if (index.value < images.length - 1) index.value++;
  };
  return { images, carruseles, carruselRefs, visible, index, isMobile, showImg, hideImg, handleTouchStart, handleTouchEnd, prevImg, nextImg };
}
