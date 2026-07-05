<template>
  <div class="discografia-bg">
    <h1 class="discografia-title">Discografía</h1>
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
import discografiaLogic from "./Discografia.js";
const { discos } = discografiaLogic();
 
</script>

<style src="./Discografia.css" scoped></style>
 
