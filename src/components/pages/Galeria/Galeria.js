// Lógica JS separada para Galeria.vue
import { onMounted, ref, computed } from "vue";
/**
 * Lógica y controladores para el componente Galeria
 * Separa la lógica para mantener el .vue limpio y profesional
 */
export default function galeriaLogic() {
  const images = [
    "/galeria/foto1.webp",
    "/galeria/foto2.webp",
    "/galeria/foto3.webp",
    "/galeria/foto4.webp",
    "/galeria/foto5.webp",
    "/galeria/foto6.webp",
    "/galeria/foto7.webp",
    "/galeria/foto8.webp",
    "/galeria/foto9.webp",
    "/galeria/foto10.webp",
    "/galeria/foto11.webp",
    "/galeria/foto12.webp",
    "/galeria/foto13.webp",
    "/galeria/foto14.webp",
    "/galeria/foto15.webp",
    "/galeria/foto16.webp",
    "/galeria/foto17.webp",
    "/galeria/foto18.webp",
    "/galeria/foto19.webp",
    "/galeria/foto20.webp",
    "/galeria/foto21.webp",
    "/galeria/foto22.webp",
    "/galeria/foto23.webp",
    "/galeria/foto24.webp",
    "/galeria/foto25.webp",
    "/galeria/foto26.webp",
    "/galeria/foto27.webp",
    "/galeria/foto28.webp",
    "/galeria/foto29.webp",
    "/galeria/foto30.webp",
  ];

  const carruseles = [
    images.slice(0, 10),
    images.slice(10, 20),
    images.slice(20, 30)
  ];

  const carruselRefs = ref([]);
  function setCarruselRef(el) {
    if (el) carruselRefs.value.push(el);
  }

  const visible = ref(false);
  const index = ref(0);
  const isMobile = computed(() => window.innerWidth <= 900);

  function showImg(i) {
    index.value = i;
    visible.value = true;
  }
  function hideImg() {
    visible.value = false;
  }

  // Carrusel scroll snap y feedback táctil
  onMounted(() => {
    if (isMobile.value && carruselRefs.value.length) {
      carruselRefs.value.forEach(carruselEl => {
        carruselEl.querySelectorAll('.foto-item').forEach(el => {
          el.addEventListener('touchstart', () => {
            el.classList.add('foto-tap');
          });
          el.addEventListener('touchend', () => {
            setTimeout(() => el.classList.remove('foto-tap'), 120);
          });
        });
      });
    }
  });

  return { images, carruseles, carruselRefs, setCarruselRef, visible, index, isMobile, showImg, hideImg };
}