<template>
  <TopBar
    :isMobile="isMobile"
    :menuOpen="menuOpen"
    @toggle-menu="menuOpen = !menuOpen"
  />
  <NavBar v-if="!isMobile" />
  <MobilMenu
    :menuOpen="menuOpen"
    :menuItems="menuItems"
    @close="menuOpen = false"
    v-if="isMobile"
  />
  <div class="section fondo-imagen">
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TopBar from "./components/ui/TopBar.vue";
import NavBar from "./components/ui/NavBar.vue";
import MobilMenu from "./components/ui/MobilMenu.vue";

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
  padding: 2em 0;
}
</style>
