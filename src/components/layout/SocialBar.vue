<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/SocialBar.vue -->
<template>
  <div class="social-bar">
    <a
      href="https://www.instagram.com/gayolaseriopunk"
      target="_blank"
      class="social-link"
      aria-label="Instagram"
    >
      <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
    </a>
    <a
      href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9"
      target="_blank"
      class="social-link"
      aria-label="Spotify"
    >
      <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
    </a>
    <a
      href="https://www.facebook.com/Gayolaseriopunk/"
      target="_blank"
      class="social-link"
      aria-label="Facebook"
    >
      <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
    </a>
    <a
      href="https://www.youtube.com/@gayolaseriopunk"
      target="_blank"
      class="social-link"
      aria-label="YouTube"
    >
      <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
    </a>
  </div>
</template>

<script setup>
// No es necesario por ahora
</script>

<style scoped>
.social-bar {
  
  justify-content: flex-start;
  padding-right: 2em;
  display: flex;
  align-items: center;
  gap: 1em;
  filter: drop-shadow(0 0 8px #ff99ff);
}
.social-link {
  display: inline-block;
}
.social-icon {
  
  width: 2em;
  height: 2em;
  filter: grayscale(0.2) brightness(1.2);
  transition: filter 0.2s;
}
.social-link[aria-label="YouTube"] .social-icon {
  width: 2.6em;
  height: 2.6em;
}

@media (max-width: 900px) {
  .social-link[aria-label="YouTube"] .social-icon {
    width: 2em;
    height: 2em;
  }
}
@media (max-width: 600px) {
  .social-link[aria-label="YouTube"] .social-icon {
    width: 1.7em;
    height: 1.7em;
  }
}
.social-icon:hover {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.5);
}

/* Responsive */
@media (max-width: 900px) {
  .social-bar {
    gap: 1em;
  }
  .social-icon {
    width: 1.7em;
    height: 1.7em;
  }
}
@media (max-width: 600px) {
  .social-bar {
    gap: 0.9em;
  }
  .social-icon {
    width: 1.4em;
    height: 1.4em;
  }
}
</style>