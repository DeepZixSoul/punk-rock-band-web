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
    <!-- Logos relleno solo en móvil/tablet -->
    <div class="top-fill-mobile" v-if="isMobile">
      <img
        v-for="n in 6"
        :key="n"
        src="/public/gayola-blanco.png"
        alt="Gayola relleno"
        class="logo-gayola-mobile"
      />
    </div>
    <!-- Botón hamburguesa/cerrar solo en móvil/tablet -->
    <button class="menu-btn" v-if="isMobile" @click="menuOpen = !menuOpen">
      <span class="menu-icon">
        {{ menuOpen ? '✕' : '☰' }}
      </span>
    </button>
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
  <!-- Menú móvil y overlay -->
  <div v-if="isMobile && menuOpen">
    <div class="mobile-overlay"></div>
    <nav class="mobile-navbar">
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
  </div>
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
import TIENDA from './components/Tienda.vue'
import CONTACTO from './components/Contacto.vue'

const menuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 900);

function checkMobile() {
  isMobile.value = window.innerWidth <= 900;
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
  { label: "DISCOGRAFÍA", href: "#discografia-section" }, // <-- Añadido
  { label: "TIENDA OFICIAL", href: "#tienda-section" },
  { label: "CONTACTO", href: "#contacto-section" },        // <-- Añadido
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
    padding: 0.7em 1em;
    margin: 0.3em 0.1em;
  }
  .top-logo {
    margin-right: 0.5em;
  }
  .top-fill-mobile {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4em;
    min-width: 0;
    overflow: hidden;
  }
  .logo-gayola-mobile {
    height: 1.7em;
    width: auto;
    opacity: 1;
    filter: drop-shadow(0 0 2px #ff99ff);
  }
  .menu-btn {
    margin-left: auto;
  }
  .mobile-overlay {
    position: fixed;
    top: calc(var(--topbar-height, 4em));
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--topbar-height, 4em));
    background: rgba(20, 20, 20, 0.7);
    z-index: 9998;
    pointer-events: none;
  }
  .mobile-navbar {
    position: fixed;
    top: calc(var(--topbar-height, 4em));
    left: 0;
    width: 95vw;
    height: calc(85vh - var(--topbar-height, 4em));
    background: #111;
    z-index: 9999;
    border-radius: 0 0 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* <-- Añade esto */
    padding: 0.5em;  /* Reduce el padding superior */
    box-shadow: 0 0 40px #000a;
    overflow: hidden;
  }
  .mobile-navbar-list {
    gap: 1.2em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    list-style: none;
    padding: 0;
  }
  .mobile-navbar-item {
    width: 100%;
    text-align: center;
  }
  .mobile-navbar-link {
    font-size: 1.2em;
    padding: 0.8em 0;
    color: #ff99ff;
    text-decoration: none;
    font-family: "Permanent Marker", cursive, Arial, sans-serif;
    background: #222;
    border-radius: 0.5em;
    box-shadow: 0 0 8px #ff99ff44;
    width: 100%;
    display: block;
    text-align: center;
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
    gap: 2em;
    margin-top: 1em;
    width: 100%;
  }
  .social-icon {
    width: 2.2em;
    height: 2.2em;
  }
}

@media (max-width: 600px) {
  /* Mejoras extra para móviles pequeños */
  .top-bar {
    padding: 0.5em 0.5em;
    margin: 0.1em 0.05em;
  }
  .logo-navbar {
    height: 1.7em;
  }
  .menu-btn {
    min-width: 44px;
    min-height: 44px;
    padding: 0.3em;
  }
  .menu-icon {
    font-size: 2em;
    padding: 0.2em;
  }
  .mobile-navbar {
    padding-top: 0.5em;
    padding-bottom: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 0 0 0.7em 0.7em;
  }
  .mobile-navbar-link {
    font-size: 1em;
    padding: 0.6em 0;
  }
  .mobile-social-bar {
    gap: 1em;
    margin-top: 1.2em;
  }
  .social-icon {
    width: 1.7em;
    height: 1.7em;
  }
}
</style>
