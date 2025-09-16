<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/NavBar.vue -->
<template>
  <nav id="main-navbar" class="navbar">
    <ul id="navbar-list" class="navbar-list">
      <li class="navbar-item">
        <router-link class="navbar-link" to="/">INICIO</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/biografia">BIOGRAFÍA</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/conciertos">CONCIERTOS</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/galeria">GALERÍA</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/videos">VIDEOS</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/discografia">DISCOGRAFÍA</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/tienda">TIENDA OFICIAL</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/contacto">CONTACTO</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');

.navbar {
  position: fixed;
  top: 3em;
  z-index: 10000;
  margin: 0;
  background: #181818;
  padding: 0.5em 1.5em;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  box-shadow: 0 0 40px #000a;
  animation: navbarFadeIn 0.7s cubic-bezier(.77,0,.18,1);
}

@keyframes navbarFadeIn {
  from { opacity: 0; transform: translateY(-30px);}
  to { opacity: 1; transform: translateY(0);}
}

.navbar-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.2em;
}

.navbar-item {
  margin: 0;
}

.navbar-link {
  color: #ff99ff;
  text-decoration: none;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1.1em;
  padding: 0.4em 1em;
  border-left: 3px solid transparent;
  border-radius: 0.3em;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  background: transparent;
  text-align: left;
  display: block;
}

.navbar-link:hover,
.navbar-link:focus,
.navbar-link.active {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.1);
}

@media (max-width: 900px) {
  .navbar {
    display: none !important;
  }
}
</style>