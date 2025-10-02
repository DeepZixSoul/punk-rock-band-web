// Lógica JS separada para Conciertos.vue
import { ref } from "vue";
import { useHead } from "@vueuse/head";
/**
 * Lógica y controladores para el componente Conciertos
 * Separa la lógica para mantener el .vue limpio y profesional
 */
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
    // Añade más rutas según tus carteles
  ];
  const visible = ref(false);
  const index = ref(0);

  function showCartel(i) {
    index.value = i;
    visible.value = true;
  }
  function hideCartel() {
    visible.value = false;
  }

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

  return { carteles, visible, index, showCartel, hideCartel };
}