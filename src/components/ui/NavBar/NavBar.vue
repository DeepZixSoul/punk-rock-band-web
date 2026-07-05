<template>
  <header class="main-header" :class="{ scrolled }">
    <div class="header-left">
      <img
        id="gayola-logo-navbar"
        :src="logoUrl"
        alt="Ir a la página de inicio"
        class="logo-navbar"
        @click="goHome"
        @keydown.enter.prevent="goHome"
        tabindex="0"
        role="button"
        fetchpriority="high"
      />
    </div>
    <nav class="navbar" v-if="!isMobile" aria-label="Navegación principal">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link class="navbar-link" to="/" :aria-current="route.path === '/' ? 'page' : undefined">INICIO</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/biografia" :aria-current="route.path === '/biografia' ? 'page' : undefined">BIOGRAFÍA</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/conciertos" :aria-current="route.path === '/conciertos' ? 'page' : undefined">CONCIERTOS</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/galeria" :aria-current="route.path === '/galeria' ? 'page' : undefined">GALERÍA</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/videos" :aria-current="route.path === '/videos' ? 'page' : undefined">VIDEOS</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/discografia" :aria-current="route.path === '/discografia' ? 'page' : undefined">DISCOGRAFÍA</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/tienda" :aria-current="route.path === '/tienda' ? 'page' : undefined">TIENDA OFICIAL</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/contacto" :aria-current="route.path === '/contacto' ? 'page' : undefined">CONTACTO</router-link>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SocialBar from '../SocialBar/SocialBar.vue'
import logoUrl from '/src/assets/logo.webp'

const props = defineProps({
  isMobile: Boolean,
  menuOpen: Boolean,
})
const emit = defineEmits(['toggle-menu'])
const router = useRouter()
const route = useRoute()

const scrolled = ref(false)
let scrollTicking = false

function onScroll() {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      scrolled.value = window.scrollY > 20
      scrollTicking = false
    })
    scrollTicking = true
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

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
