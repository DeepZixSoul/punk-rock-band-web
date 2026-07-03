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

<style src="./NavBar.css" scoped></style>