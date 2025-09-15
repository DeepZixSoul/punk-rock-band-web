<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/NavBar.vue -->
<template>
  <nav id="main-navbar" class="navbar">
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
</template>

<script setup>
// No es necesario por ahora
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
  /* box-shadow: 0 0 40px #000a; */
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