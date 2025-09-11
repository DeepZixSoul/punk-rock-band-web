<template>
  <div class="top-bar">
    <button v-if="isMobile" class="menu-btn" @click="menuOpen = !menuOpen">
      <span class="menu-icon">&#9776;</span>
    </button>
    <div class="top-logo">
      <img id="gayola-logo-navbar" src="./assets/logo.png" alt="Gayola logo" class="logo-navbar" />
    </div>
  </div>
  <transition name="menu-fade">
    <div v-if="isMobile && menuOpen" class="mobile-menu">
      <ul class="mobile-navbar-list">
        <li v-for="item in menuItems" :key="item.href" class="mobile-navbar-item">
          <a class="mobile-navbar-link" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
        </li>
      </ul>
      <div class="mobile-social-bar">
        <a href="https://www.instagram.com/gayolaseriopunk" target="_blank" class="social-link">
          <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
        </a>
        <a href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9" target="_blank" class="social-link">
          <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
        </a>
        <a href="https://www.facebook.com/Gayolaseriopunk/" target="_blank" class="social-link">
          <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
        </a>
        <a href="https://www.youtube.com/@gayolaseriopunk" target="_blank" class="social-link">
          <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
        </a>
      </div>
    </div>
  </transition>
  <!-- Desktop navbar y social bar -->
  <nav v-if="!isMobile" id="main-navbar" class="navbar">
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
    <div id="social-bar" class="social-bar">
      <a href="https://www.instagram.com/gayolaseriopunk" target="_blank" class="social-link">
        <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
      </a>
      <a href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9" target="_blank" class="social-link">
        <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
      </a>
      <a href="https://www.facebook.com/Gayolaseriopunk/" target="_blank" class="social-link">
        <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
      </a>
      <a href="https://www.youtube.com/@gayolaseriopunk" target="_blank" class="social-link">
        <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
      </a>
    </div>
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
    <DISCOGRAFÍA />
  </div>
  <div id="tienda-section" class="section fondo-imagen">
    <TIENDA />
  </div>
  <div id="contacto-section" class="section fondo-negro">
    <CONTACTO />
  </div>
</template>

<script setup>
import INICIO from './components/Inicio.vue'
import BIOGRAFÍA from './components/Biografia.vue'
import CONCIERTOS from './components/Conciertos.vue'
import GALERÍA from './components/Galeria.vue'
import VIDEOS from './components/Videos.vue'
import DISCOGRAFÍA from './components/Discografia.vue'
// import TIENDA from './components/Tienda.vue'
// import CONTACTO from './components/Contacto.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isMobile = ref(window.innerWidth <= 900)

const menuItems = [
  { label: 'INICIO', href: '#inicio-section' },
  { label: 'BIOGRAFÍA', href: '#biografia-section' },
  { label: 'CONCIERTOS', href: '#conciertos-section' },
  { label: 'GALERÍA', href: '#galeria-section' },
  { label: 'VIDEOS', href: '#videos-section' },
  { label: 'DISCOGRAFÍA', href: '#discografia-section' },
  { label: 'TIENDA OFICIAL', href: '#tienda-section' },
  { label: 'CONTACTO', href: '#contacto-section' },
]

function handleResize() {
  isMobile.value = window.innerWidth <= 900
  if (!isMobile.value) menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Top Bar */
.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 1em;
  display: flex;
  align-items: center;
  background: #111;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
  padding: 0.5em 3em;
  transition: padding 0.3s, margin 0.3s;
  justify-content: center;
}
.menu-btn {
  background: none;
  border: none;
  color: #ff99ff;
  font-size: 2.2em;
  margin-right: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.menu-icon {
  font-size: 1.5em;
}
.top-logo {
  display: flex;
  align-items: center;
  border-radius: 0.5em;
}
.logo-navbar {
  height: 3.5em;
  width: auto;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 20, 20, 0.98);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5em;
  animation: fadeIn 0.3s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
.mobile-navbar-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
.mobile-navbar-item {
  width: 100%;
  text-align: center;
}
.mobile-navbar-link {
  color: #ff99ff;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 1.5em;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  background: #222;
  display: block;
  margin: 0 auto;
  transition: background 0.2s, color 0.2s;
}
.mobile-navbar-link:hover,
.mobile-navbar-link:focus {
  background: #ff99ff33;
  color: #fff;
  outline: none;
}
.mobile-social-bar {
  margin-top: auto;
  padding-bottom: 2em;
  display: flex;
  gap: 1.5em;
  justify-content: center;
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

/* Ocultar navbar y social bar en móvil */
@media (max-width: 900px) {
  .navbar,
  .social-bar,
  .top-fill {
    display: none !important;
  }
  .top-bar {
    justify-content: flex-start;
    padding: 0.5em 1em;
    margin: 0.5em 0.2em;
  }
  .logo-navbar {
    height: 2.5em;
  }
}
</style>