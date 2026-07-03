<template>
  <header>
    <NavBar
      :isMobile="isMobile"
      :menuOpen="menuOpen"
      @toggle-menu="menuOpen = !menuOpen"
    />
    <MobilMenu
      :menuOpen="menuOpen"
      :menuItems="menuItems"
      @close="menuOpen = false"
      v-if="isMobile"
    />
  </header>

  <main class="section fondo-imagen" role="main">
    <ErrorBoundary>
      <router-view />
    </ErrorBoundary>
  </main>

  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavBar from "./components/ui/NavBar/NavBar.vue";
import MobilMenu from "./components/ui/MobilMenu/MobilMenu.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
import Footer from "./components/ui/Footer/Footer.vue";

const menuOpen = ref(false);
const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 900;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const menuItems = [
  { label: "INICIO", href: "/" },
  { label: "BIOGRAFÍA", href: "/biografia" },
  { label: "CONCIERTOS", href: "/conciertos" },
  { label: "GALERÍA", href: "/galeria" },
  { label: "VIDEOS", href: "/videos" },
  { label: "DISCOGRAFÍA", href: "/discografia" },
  { label: "TIENDA OFICIAL", href: "/tienda" },
  { label: "CONTACTO", href: "/contacto" },
];
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.section {
  min-height: 60vh;
  padding: 4.5em 0 2em;
}
</style>
