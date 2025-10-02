<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/SocialBar.vue -->
<template>
  <div class="social-bar">
    <a
      href="https://www.instagram.com/gayolaseriopunk"
      target="_blank"
      class="social-link"
      aria-label="Instagram"
    >
      <img src="/public/redes-sociales/instagram.svg" alt="Instagram" class="social-icon" />
    </a>
    <a
      href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9"
      target="_blank"
      class="social-link"
      aria-label="Spotify"
    >
      <img src="/public/redes-sociales/spotify.svg" alt="Spotify" class="social-icon" />
    </a>
    <a
      href="https://www.facebook.com/Gayolaseriopunk/"
      target="_blank"
      class="social-link"
      aria-label="Facebook"
    >
  <img src="/public/redes-sociales/facebook.webp" alt="Facebook" class="social-icon" />
    </a>
    <a
      href="https://www.youtube.com/@gayolaseriopunk"
      target="_blank"
      class="social-link"
      aria-label="YouTube"
    >
  <img src="/public/redes-sociales/youtube.webp" alt="YouTube" class="social-icon" />
    </a>
  </div>
</template>

<script setup>
// Importa la lógica JS desde archivo externo para mantener el componente limpio y modular
import socialBarLogic from "./SocialBar.js";
socialBarLogic();
</script>

<style src="./SocialBar.css" scoped></style>