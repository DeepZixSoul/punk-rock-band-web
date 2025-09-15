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
  />
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
import { ref, onMounted, onUnmounted } from "vue";
import TopBar from "./components/layout/TopBar.vue";
import NavBar from "./components/layout/NavBar.vue";
import MobilMenu from "./components/layout/MobilMenu.vue";
import INICIO from "./components/Inicio.vue";
import BIOGRAFÍA from "./components/Biografia.vue";
import CONCIERTOS from "./components/Conciertos.vue";
import GALERÍA from "./components/Galeria.vue";
import VIDEOS from "./components/Videos.vue";
import DISCOGRAFÍA from "./components/Discografia.vue";
import TIENDA from "./components/Tienda.vue";
import CONTACTO from "./components/Contacto.vue";

const menuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 900);

function checkMobile() {
  isMobile.value = window.innerWidth <= 900;
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
  
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

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
.section {
  min-height: 60vh;
  padding: 2em 0;
}
</style>
