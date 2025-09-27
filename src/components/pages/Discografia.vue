<template>
  <div class="discografia-bg">
    <h2 class="discografia-title">Discografía</h2>
    <div
      v-for="(disco, i) in discos"
      :key="disco.titulo"
      class="disco-container"
      :class="{ invertido: i % 2 !== 0 }"
    >
      <div class="disco-info">
        <h3 class="disco-titulo">{{ disco.titulo }}</h3>
        <p class="disco-descripcion">{{ disco.descripcion }}</p>

        <span class="disco-fecha">{{ disco.fecha }}</span>
      </div>
      <div class="disco-portada portada-fija">
        <img
          :src="disco.portada"
          :alt="`Portada del disco ${disco.titulo} de Gayola`"
          class="portada-img"
          loading="lazy"
        />
      </div>
      <div class="tabla-scroll-outer">
        <div class="tabla-scroll-wrapper tabla-fullwidth">
          <table class="disco-canciones-table">
            <thead>
              <tr>
                <!-- <th class="cancion-nombre-th">Canción</th>
                  <th class="cancion-logo-th">YouTube</th>
                  <th class="cancion-logo-th">Spotify</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cancion, idx) in disco.canciones" :key="idx">
                <td class="cancion-nombre">{{ cancion.nombre || cancion }}</td>
                <td class="cancion-logo-cell">
                  <a
                    v-if="cancion.youtubeId"
                    :href="`https://youtu.be/${cancion.youtubeId}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Escuchar en YouTube"
                  >
                    <img
                      src="/redes-sociales/youtube.webp"
                      alt="YouTube"
                      class="icono-cancion-img"
                    />
                  </a>
                </td>
                <td class="cancion-logo-cell">
                  <a
                    v-if="cancion.spotifyId"
                    :href="`https://open.spotify.com/track/${cancion.spotifyId}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Escuchar en Spotify"
                  >
                    <img
                      src="/redes-sociales/spotify.svg"
                      alt="Spotify"
                      class="icono-cancion-img"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
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
  // Añade más discos aquí
];
</script>

<style scoped>
.discografia-bg {
  background: var(--color-bg, #181818);
  padding: 2em 1em;
  min-height: 60vh;
  box-shadow: 0 0 40px var(--color-shadow, #ff99ff44);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
  font-family: var(--font-principal, "Roboto", Arial, sans-serif);
}
.discografia-title {
  padding-top: 2em;
  color: var(--color-principal, #ff99ff);
  font-family: var(--font-titulos, "Montserrat", Arial, sans-serif);
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.disco-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3em;
  width: 100%;
  max-width: 900px;
  margin-bottom: 3em;
  background: var(--color-card-bg, rgba(20, 20, 20, 0.85));
  border-radius: 1em;
  box-shadow: 0 0 20px var(--color-shadow, #ff99ff44);
  padding: 2em;
  transition: flex-direction 0.3s;
  box-sizing: border-box;
}
.disco-container.invertido {
  flex-direction: row-reverse;
}
.disco-info {
  flex: 1 1 45%;
  color: var(--color-text, #fff);
  font-family: var(--font-principal, "Roboto", Arial, sans-serif);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5em 1em;
  box-sizing: border-box;
  min-width: 0;
}
.disco-titulo {
  font-family: var(--font-titulos, "Montserrat", Arial, sans-serif);
  color: var(--color-principal, #ff99ff);
  font-size: 1.5em;
  margin-bottom: 0.7em;
  text-align: center;
}
.disco-descripcion {
  font-size: 1.1em;
  line-height: 1.7;
  letter-spacing: 0.5px;
  margin-bottom: 1.2em;
  padding: 0.3em 0.2em;
  font-family: var(--font-principal, "Roboto", Arial, sans-serif);
}
.disco-canciones {
  margin: 0 0 1em 0;
  padding-left: 1.2em;
  color: #ff99ff;
  font-size: 1em;
}
.disco-fecha {
  font-size: 0.95em;
  color: var(--color-principal, #ff99ff);
  font-weight: bold;
  margin-top: 0.5em;
}
.disco-portada {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  max-width: 320px;
}
.portada-fija {
  position: sticky;
  top: 2em;
  align-self: center;
  z-index: 1;
}
.portada-img {
  width: 320px;
  max-width: 100%;
  border-radius: 1em;
  box-shadow: 0 0 20px var(--color-shadow, #ff99ff44);
  border: 3px solid var(--color-principal-alpha, #ff99ff55);
  background: var(--color-bg, #181818);
  object-fit: contain;
}

/* Canciones tabla con logos en columnas */
.tabla-scroll-outer {
  flex: 1 1 100%;
  width: 100%;
  margin: 1.2em 0;
  display: flex;
  justify-content: center;
}
.tabla-fullwidth {
  width: 100%;
  max-width: 900px;
  min-width: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  background: var(--color-table-bg, #191919cc);
  border-radius: 0.5em;
  box-shadow: 0 0 8px var(--color-shadow-light, #ff99ff22);
  overflow-y: auto;
  max-height: 260px;
  display: block;
}

/* Scrollbar personalizada solo escritorio */
@media (min-width: 901px) {
  .tabla-scroll-wrapper::-webkit-scrollbar {
    width: 10px;
    background: #181818;
    border-radius: 8px;
  }
  .tabla-scroll-wrapper::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ff99ff 40%, #181818 100%);
    border-radius: 8px;
    box-shadow: 0 0 6px #ff99ff88;
  }
  .tabla-scroll-wrapper::-webkit-scrollbar-thumb:hover {
    background: #ff99ff;
  }
  .tabla-scroll-wrapper::-webkit-scrollbar-corner {
    background: #181818;
  }
}
.disco-canciones-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.2em;
}
/* Tabla canciones: th, td, iconos */
.cancion-nombre-th,
.cancion-logo-th {
  font-family: var(--font-titulos, "Montserrat", Arial, sans-serif);
  color: var(--color-principal, #ff99ff);
  font-size: 1em;
  padding-bottom: 0.3em;
}
.cancion-nombre-th {
  text-align: left;
}
.cancion-logo-th {
  text-align: right;
  width: 60px;
  padding-right: 0.5em;
}
.cancion-nombre {
  color: var(--color-principal, #ff99ff);
  font-weight: 500;
  font-size: 1em;
  padding: 0.2em 0.5em 0.2em 0.4em;
  text-align: left;
}
.cancion-logo-cell {
  text-align: right;
  vertical-align: middle;
  /* padding: 0.2em  0.2em 0.2em; */
  filter: drop-shadow(0 0 8px var(--color-principal, #ff99ff));
}
.icono-cancion-img {
  width: 2.6em;
  height: 1.9em;
  object-fit: contain;
  filter: drop-shadow(0 0 2px var(--color-shadow, #ff99ff44));
  transition: transform 0.15s, filter 0.15s;
  cursor: pointer;
  filter: grayscale(0.2) brightness(1.2);
}
.icono-cancion-img[src*="youtube"] {
  width: 3em;
  height: 3em;
}
.icono-cancion-img:hover {
  transform: scale(1.18);
  filter: brightness(1.2) drop-shadow(0 0 6px var(--color-principal, #ff99ff));
}
/* --- ESTILOS DISCOS Y TABLA DE CANCIONES --- */
@media (max-width: 900px) {
  .discografia-bg {
    padding: 1.2em 0.2em;
    border-radius: 0.5em;
    width: 100vw;
  }
  .disco-container,
  .disco-container.invertido {
    flex-direction: column;
    gap: 2em;
    padding: 1em;
    max-width: 100vw;
  }
  .disco-info {
    padding: 0.5em 0.2em;
    max-width: 100vw;
  }
  .portada-img {
    width: 90vw;
    max-width: 90vw;
  }
  .portada-fija {
    position: static;
    top: unset;
    align-self: center;
  }
  .tabla-scroll-wrapper {
    max-height: 220px;
  }
  .discografia-title {
    font-size: 2em;
    margin-bottom: 1em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .disco-titulo {
    font-size: 1.3em;
    margin-bottom: 0.7em;
    text-align: center;
  }
  
}
@media (max-width: 600px) {
  .discografia-title {
    font-size: 1.5em;
    margin-bottom: 1em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .disco-titulo {
    font-size: 1.1em;
    margin-bottom: 0.7em;
    text-align: center;
  }
  .disco-container {
    padding: 0.7em;
    margin-bottom: 2em;
    max-width: 100vw;
  }
  .disco-info {
    padding: 0.5em 0.1em;
    max-width: 100vw;
  }
  .portada-img {
    width: 90vw;
    max-width: 90vw;
  }
  .cancion-logo-cell {
    padding: 0.2em 0.6em 0.2em 0.4em;
  }
}
</style>
