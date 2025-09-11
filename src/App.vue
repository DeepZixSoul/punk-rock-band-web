<template>
  <div class="top-bar">
    <div class="top-logo">
      <img id="gayola-logo-navbar" src="./assets/logo.png" alt="Gayola logo" class="logo-navbar" />
    </div>
    <div class="top-fill">
      <img v-for="n in 8" :key="n" src="/public/gayola-blanco.png" alt="Gayola blanco" class="logo-blanco" />
    </div>
    <div id="social-bar" class="social-bar">
      <a href="https://www.instagram.com/gayolaseriopunk" target="_blank" class="social-link" id="instagram-link">
        <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
      </a>
      <a href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9" target="_blank" class="social-link" id="spotify-link">
        <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
      </a>
      <a href="https://www.facebook.com/Gayolaseriopunk/" target="_blank" class="social-link" id="facebook-link">
        <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
      </a>
      <a href="https://www.youtube.com/@gayolaseriopunk" target="_blank" class="social-link" id="youtube-link">
        <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
      </a>
    </div>
  </div>
  <nav id="main-navbar" class="navbar">
    <ul id="navbar-list" class="navbar-list">
      <li class="navbar-item"><a class="navbar-link" href="#inicio-section">INICIO</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#biografia-section">BIOGRAFÍA</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#conciertos-section">CONCIERTOS</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#galeria-section">GALERÍA</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#videos-section">VIDEOS</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#discografia-section">DISCOGRAFÍA</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#tienda-section">TIENDA OFICIAL</a></li>
      <li class="navbar-item"><a class="navbar-link" href="#contacto-section">CONTACTO</a></li>
    </ul>
  </nav>
  <div id="inicio-section" class="section fondo-imagen">
    <INICIO msg="Gayola Punk Rock" />
  </div>
  <div id="biografia-section" class="section fondo-negro">
    <BIOGRAFÍA />
  </div>
  <div id="conciertos-section" class="section fondo-imagen">
    <CONCIERTOS />
  </div>
  <div id="galeria-section" class="section fondo-negro">
    <GALERÍA />
  </div>
  <div id="videos-section" class="section fondo-imagen">
    <VIDEOS />
  </div>
  <div id="discografia-section" class="section fondo-negro">
    <!-- Aquí irá tu componente DISCOGRAFÍA -->
  </div>
  <div id="tienda-section" class="section fondo-imagen">
    <!-- Aquí irá tu componente TIENDA OFICIAL -->
  </div>
  <div id="contacto-section" class="section fondo-negro">
    <!-- Aquí irá tu componente CONTACTO -->
  </div>
</template>

<script setup>
import INICIO from './components/Inicio.vue'
import BIOGRAFÍA from './components/Biografia.vue'
import CONCIERTOS from './components/Conciertos.vue'
import GALERÍA from './components/Galeria.vue'
import VIDEOS from './components/Videos.vue'
// import DISCOGRAFÍA from './components/Discografia.vue'
// import TIENDA from './components/Tienda.vue'
// import CONTACTO from './components/Contacto.vue'
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
  padding: 0.5em 3em;
}
.top-logo {
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  /* filter: drop-shadow(0 0 1px #FF99FF); */
}
.top-fill {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  min-width: 0;
  overflow: hidden;
}
.logo-navbar {
  height: 3.5em;
  width: auto;
  border-radius: 0.5em;
  /* box-shadow: 0 0 10px #000a; */
  filter: drop-shadow(0 0 4px #FF99FF);
}
.logo-blanco {
  height: 3.5em;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 0 4px #FF99FF);
}
.social-bar {
  
  display: flex;
  align-items: center;
  gap: 1em;
  filter: drop-shadow(0 0 8px #FF99FF);
  
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
.social-icon:hover {
  filter: drop-shadow(0 0 8px #FF99FF) brightness(1.5);
}
.navbar {
  position: sticky;
  top: 5.5em; /* Ajusta según la altura de tu top-bar */
  z-index: 99;
  margin: 1em;
  background: #111;
  padding: 1em 0;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
}
.navbar-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-item {
  margin: 0 2em;
}
.navbar-link {
  color: #FF99FF;
  text-decoration: none;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 1.32em;
  transition: color 0.2s;
}
.navbar-link:hover {
  color: #ffffff;
}
.section {
  min-height: 60vh;
  padding: 2em 0;
}
/* .fondo-imagen {
  background: transparent;
}
.fondo-negro {
  background: rgba(0,0,0,0.85);
  box-shadow: 0 0 40px #000a;
  border-radius: 1em;
} */
</style>