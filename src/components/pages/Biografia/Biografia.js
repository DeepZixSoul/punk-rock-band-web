import { useHead } from "@vueuse/head";

export default function biografiaLogic() {
  useHead({
    title: "Biografía | Gayola - Punk Rock desde Alicante",
    meta: [
      {
        name: "description",
        content:
          "Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.",
      },
      {
        name: "keywords",
        content:
          "gayola, biografía, punk, rock, grupo musical, integrantes, Alicante, Aspe, Elda, Orihuela, Murcia, historia, banda, España",
      },
      {
        property: "og:title",
        content: "Biografía | Gayola - Punk Rock desde Alicante",
      },
      {
        property: "og:description",
        content:
          "Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.",
      },
    ],
  });
}