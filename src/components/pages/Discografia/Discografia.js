import { useHead } from "@vueuse/head";

export default function discografiaLogic() {
  useHead({
    title: "Discografía | Gayola - Punk Rock desde Alicante",
    meta: [
      {
        name: "description",
        content:
          "Descubre la discografía de Gayola: álbumes, singles y lanzamientos punk rock desde Alicante.",
      },
      {
        name: "keywords",
        content:
          "gayola, discografía, punk, rock, álbumes, singles, lanzamientos, Alicante, banda, España, música",
      },
      {
        property: "og:title",
        content: "Discografía | Gayola - Punk Rock desde Alicante",
      },
      {
        property: "og:description",
        content:
          "Descubre la discografía de Gayola: álbumes, singles y lanzamientos punk rock desde Alicante.",
      },
    ],
  });

  const discos = [
    {
      titulo: "ATERRIZA COMO PUEDAS",
      descripcion: `Aquí Gayola aterriza y se desparrama: un disco que mezcla oficio con las cicatrices de la batalla.

        “Aterriza como puedas” suena como una caída con estilo: los riffs son más complejos, el pulso más seguro, las voces más seguras. Hay canciones que descansan para respirar, otras que se enloquecen sin freno. Escuchas variedad, pero con un hilo de sangre común: no pierden la furia. Aquí hay atmósferas, contrastes, experimentos que funcionan.

        Es la banda madura en su caos: se permite abrir ventanas al mundo, pero sin dejar de golpear puertas.`,

      canciones: [
        {
          nombre: "INTRO",
          youtubeId: "xUjoTH9x3fc",
          spotifyId: "4oJMo9RSPf5McvKb3dAlAi",
        },
        {
          nombre: "BIENVENIDOS",
          youtubeId: "UQDkHE6DWVU",
          spotifyId: "0EYd2wp51yumWFHXOcjK02",
        },
        {
          nombre: "UNA VEZ MÁS",
          youtubeId: "JRQXxr0QxCc",
          spotifyId: "4VoDY32LFkVxwe1icvAk2T",
        },
        {
          nombre: "AMOR Y SEXO",
          youtubeId: "6UjpzeKDMNA",
          spotifyId: "33K6vXbrFx0GucRJoRfkw3",
        },
        {
          nombre: "LA DE IBERDROLA",
          youtubeId: "X8hWQjYJSaE",
          spotifyId: "7CnFo60xFVtNqZdboPcVQd",
        },
        {
          nombre: "TU PESADILLA (ft. Podri K, Rat-Zinger)",
          youtubeId: "ZbxkzlH5np4",
          spotifyId: "1SKqM35fLyP781cn1XwC1L",
        },
        {
          nombre: "ESKIZOFRENIA II (CARNE DE GUSANO)",
          youtubeId: "Dq8ILYVVtxg",
          spotifyId: "6SB0gbg3I03t5qiy2I8pLs",
        },
        {
          nombre: "EN LAS TRINCHERAS ",
          youtubeId: "rcjZHrnuGX4",
          spotifyId: "7ERees2EhBHOg5BAItolEP",
        },
      ],
      fecha: "2023",
      portada: "/discografia/aterriza-como-puedas.webp",
    },
    {
      titulo: "EL PUNK NO HA MUERTO",
      descripcion: `Aquí Gayola ya no empieza a preguntar, ya está dando hostias sin descanso. En este disco se nota evolución, más control, pero sin perder la furia. Hay un mensaje claro: el punk sigue respirando, y le importa una mierda tu opinión.

        Las canciones buscan conectar con heridas, recriminar injusticias, exponer la realidad y la necesidad de una libertad colectiva. Hay guitarras rasgadas, ritmos que corren, voces que gritan y reclaman. Es una declaración de intenciones: no nos vamos a callar, el punk no ha muerto.`,
      canciones: [
        { nombre: "INTRO", youtubeId: "", spotifyId: "7icLlDntH2UHw7Qhvb03Ut" },
        {
          nombre: "EL PUNK NO HA MUERTO",
          youtubeId: "T9Lj-rSWPV8",
          spotifyId: "0Z4DFn89N3b3ug4pUPjPqd",
        },
        {
          nombre: "PAKO EL MADERO",
          youtubeId: "w7Bp2HVtKIo",
          spotifyId: "3clI94AOakJElAtBwrAaKi",
        },
        {
          nombre: "ROCK N' ROLL",
          youtubeId: "MNqGMHl7Rw8",
          spotifyId: "4jGOnKLfJqhTy6eoY8mRAj",
        },
        {
          nombre: "ESKIZOFRENIA",
          youtubeId: "nMF2RzXfwcA",
          spotifyId: "66JXhveiZFeVsNAs2NiO0y",
        },
        {
          nombre: "EL PARKE",
          youtubeId: "KdgJdhwS2o8",
          spotifyId: "1P6HUTfOMgN7Ey5jKiT7JV",
        },
        {
          nombre: "MENDIGO",
          youtubeId: "irdlgRU14-k",
          spotifyId: "2dlLWcf2eI3ZqqPzzq61Mc",
        },
      ],
      fecha: "2021",
      portada: "/discografia/el-punk-no-ha-muerto.webp",
    },
    {
      titulo: "GAYOLA",
      descripcion: `Este primer puñetazo sirve como tarjeta de presentación: crudo, directo, sin adornos. En “Gayola” escuchas la rabia inicial, la electricidad de la juventud que grita para que la oigan. Temas cortos, explosivos, con riffs que no piden permiso y letras que escupen verdades sin filtro. Es la necesidad de la banda que dice “aquí estamos”, con ganas de romper el silencio.

                    Este disco huele a local sin insonorizar, suena a horas muertas con guitarras clavándose en tu cráneo, y pone los cimientos del carácter punk de Gayola: actitud, rabia y base sólida.`,
      canciones: [
        { nombre: "PPIRATAS", youtubeId: "CJYUYVAJFzw" },
        { nombre: "LEVÁNTATE", youtubeId: "QJ-UbXAdK1s" },
        { nombre: "COMUNICADO INTERPLANETARIO", youtubeId: "19qyI_PCiw8" },
        { nombre: "LA DE LA INFANTA", youtubeId: "lNBfNnnyZnk" },
        { nombre: "MANIATADO", youtubeId: "PkYdQbYMV_8" },
      ],
      fecha: "2017",
      portada: "/discografia/gayola.webp",
    },
  ];

  return { discos };
}