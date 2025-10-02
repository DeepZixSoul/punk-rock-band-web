// Lógica JS separada para Contacto.vue
import { useHead } from "@vueuse/head";
/**
 * Lógica y controladores para el componente Contacto
 * Separa la lógica para mantener el .vue limpio y profesional
 */
export default function contactoLogic() {
  useHead({
    title: "Contacto | Gayola - Punk Rock desde Alicante",
    meta: [
      {
        name: "description",
        content:
          "Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.",
      },
      {
        name: "keywords",
        content:
          "gayola, contacto, contrataciones, prensa, colaboraciones, punk, rock, Alicante, banda, España, email",
      },
      {
        property: "og:title",
        content: "Contacto | Gayola - Punk Rock desde Alicante",
      },
      {
        property: "og:description",
        content:
          "Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.",
      },
    ],
  });
}