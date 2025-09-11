<template>
  <div class="top-bar">
    <div class="top-logo">
      <img
        id="gayola-logo-navbar"
        src="./assets/logo.png"
        alt="Gayola logo"
        class="logo-navbar"
      />
    </div>
    <!-- Menú hamburguesa solo en móvil -->
    <button class="menu-btn" v-if="isMobile" @click="menuOpen = !menuOpen">
      <span class="menu-icon">&#9776;</span>
    </button>
    <!-- Relleno y redes solo en escritorio -->
    <div class="top-fill" v-if="!isMobile">
      <img
        v-for="n in 8"
        :key="n"
        src="/public/gayola-blanco.png"
        alt="Gayola blanco"
        class="logo-blanco"
      />
    </div>
    <div id="social-bar" class="social-bar" v-if="!isMobile">
      <a
        href="https://www.instagram.com/gayolaseriopunk"
        target="_blank"
        class="social-link"
        id="instagram-link"
      >
        <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
      </a>
      <a
        href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9"
        target="_blank"
        class="social-link"
        id="spotify-link"
      >
        <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
      </a>
      <a
        href="https://www.facebook.com/Gayolaseriopunk/"
        target="_blank"
        class="social-link"
        id="facebook-link"
      >
        <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
      </a>
      <a
        href="https://www.youtube.com/@gayolaseriopunk"
        target="_blank"
        class="social-link"
        id="youtube-link"
      >
        <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
      </a>
    </div>
  </div>
  <!-- Navbar normal en escritorio -->
  <nav id="main-navbar" class="navbar" v-if="!isMobile">
    <ul id="navbar-list" class="navbar-list">
      <li class="navbar-item">
        <a class="navbar-link" href="#inicio-section">INICIO</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#biografia-section">BIOGRAFÍA</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#conciertos-section">CONCIERTOS</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#galeria-section">GALERÍA</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#videos-section">VIDEOS</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#discografia-section">DISCOGRAFÍA</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#tienda-section">TIENDA OFICIAL</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" href="#contacto-section">CONTACTO</a>
      </li>
    </ul>
  </nav>
  <!-- Menú desplegable en móvil -->
  <transition name="slide">
    <nav v-if="isMobile && menuOpen" class="mobile-navbar">
      <ul class="mobile-navbar-list">
        <li
          class="mobile-navbar-item"
          v-for="item in menuItems"
          :key="item.href"
        >
          <a
            class="mobile-navbar-link"
            :href="item.href"
            @click="menuOpen = false"
            >{{ item.label }}</a
          >
        </li>
      </ul>
      <div class="mobile-social-bar">
        <a
          href="https://www.instagram.com/gayolaseriopunk"
          target="_blank"
          class="social-link"
        >
          <img
            src="/public/instagram.svg"
            alt="Instagram"
            class="social-icon"
          />
        </a>
        <a
          href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9"
          target="_blank"
          class="social-link"
        >
          <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
        </a>
        <a
          href="https://www.facebook.com/Gayolaseriopunk/"
          target="_blank"
          class="social-link"
        >
          <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/@gayolaseriopunk"
          target="_blank"
          class="social-link"
        >
          <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
        </a>
      </div>
    </nav>
  </transition>
  <!-- Secciones -->
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
import { ref, onMounted, onUnmounted, watch } from "vue";
import INICIO from "./components/Inicio.vue";
import BIOGRAFÍA from "./components/Biografia.vue";
import CONCIERTOS from "./components/Conciertos.vue";
import GALERÍA from "./components/Galeria.vue";
import VIDEOS from "./components/Videos.vue";
import DISCOGRAFÍA from "./components/Discografia.vue";
// import TIENDA from './components/Tienda.vue'
// import CONTACTO from './components/Contacto.vue'

const menuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 600);

function checkMobile() {
  isMobile.value = window.innerWidth <= 600;
}

// Actualiza al montar y al cambiar tamaño
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

// Watcher para modo responsive en Chrome DevTools
watch(
  () => window.innerWidth,
  () => {
    checkMobile();
  }
);

const menuItems = [
  { label: "INICIO", href: "#inicio-section" },
  { label: "BIOGRAFÍA", href: "#biografia-section" },
  { label: "CONCIERTOS", href: "#conciertos-section" },
  { label: "GALERÍA", href: "#galeria-section" },
  { label: "VIDEOS", href: "#videos-section" },
  { label: "DISCOGRAFÍA", href: "#discografia-section" },
  { label: "TIENDA OFICIAL", href: "#tienda-section" },
  { label: "CONTACTO", href: "#contacto-section" },
];
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
  filter: drop-shadow(0 0 4px #ff99ff);
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
  filter: drop-shadow(0 0 4px #ff99ff);
}
.logo-blanco {
  height: 3.5em;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 0 4px #ff99ff);
}
.social-bar {
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
.social-icon:hover {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.5);
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
  filter: drop-shadow(0 0 4px #ff99ff);
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
  color: #ff99ff;
  text-decoration: none;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
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

@media (max-width: 900px) {
  .top-bar {
    flex-direction: column;
    padding: 0.5em 1em;
    margin: 0.5em;
    gap: 1em;
  }
  .top-logo,
  .top-fill,
  .social-bar {
    justify-content: center;
    margin-bottom: 0.5em;
  }
  .logo-navbar,
  .logo-blanco {
    height: 2.2em;
  }
  .navbar {
    top: 7.5em;
    margin: 0.5em;
    padding: 0.5em 0;
  }
  .navbar-list {
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
  }
  .navbar-item {
    margin: 0.5em 0;
  }
  .navbar-link {
    font-size: 1.1em;
  }
}

@media (max-width: 600px) {
  .top-bar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0.7em;
    margin: 0.2em 0.1em;
    gap: 0;
  }
  .top-logo {
    margin-right: auto;
    display: flex;
    align-items: center;
  }
  .logo-navbar {
    height: 2.2em;
  }
  .top-fill,
  .social-bar {
    display: none !important;
  }
  .navbar {
    display: none !important;
  }
}

/* Menú móvil */
.menu-btn {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: auto;
}
.menu-icon {
  font-size: 2em;
  color: #ff99ff;
  padding: 0.2em;
  border-radius: 0.3em;
  background: #222;
  box-shadow: 0 0 8px #ff99ff88;
}
.mobile-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #111;
  z-index: 9999;
  box-shadow: 0 0 40px #000a;
  border-radius: 0 0 1em 1em;
  padding-top: 4em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideDown 0.3s;
}
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  text-decoration: none;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  font-size: 1.3em;
  padding: 0.7em 0;
  display: block;
  width: 100%;
  background: #222;
  border-radius: 0.5em;
  box-shadow: 0 0 8px #ff99ff44;
  transition: background 0.2s, color 0.2s;
}
.mobile-navbar-link:hover,
.mobile-navbar-link:focus {
  background: #ff99ff33;
  color: #fff;
}
.mobile-social-bar {
  display: flex;
  justify-content: center;
  gap: 1.5em;
  margin-top: 2em;
}
</style>
