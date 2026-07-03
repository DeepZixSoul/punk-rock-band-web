<template>
  <header class="main-header">
    <div class="header-left">
      <img
        id="gayola-logo-navbar"
        :src="logoUrl"
        alt="Gayola logo"
        class="logo-navbar"
        @click="goHome"
        loading="lazy"
      />
    </div>
    <nav class="navbar" v-if="!isMobile">
      <ul class="navbar-list">
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
    <div class="header-right">
      <SocialBar v-if="!isMobile" />
      <button class="menu-btn" v-if="isMobile" @click="emit('toggle-menu')" aria-label="Menú" :aria-expanded="menuOpen">
        <span class="menu-icon">
          {{ menuOpen ? "✕" : "☰" }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SocialBar from '../SocialBar/SocialBar.vue'
import logoUrl from '/src/assets/logo.webp'

const props = defineProps({
  isMobile: Boolean,
  menuOpen: Boolean,
})
const emit = defineEmits(['toggle-menu'])
const router = useRouter()

function goHome() {
  if (router.currentRoute.value.path === '/') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  } else {
    router.push('/').then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
  }
  if (props.menuOpen) emit('toggle-menu')
}
</script>

<style src="./NavBar.css" scoped></style>
