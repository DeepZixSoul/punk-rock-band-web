<template>
  <!-- Header semántico: navegación y menú -->
  <header>
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
  </header>

  <!-- Main: contenido principal con rol semántico -->
  <main class="section fondo-imagen" role="main">
    <ErrorBoundary>
      <router-view />
    </ErrorBoundary>
  </main>
  
  <!-- Footer semántico: información de contacto y enlaces -->
  <Footer />  
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import TopBar from "./components/ui/Topbar/TopBar.vue";
import NavBar from "./components/ui/NavBar/NavBar.vue";
import MobilMenu from "./components/ui/MobilMenu/MobilMenu.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
import Footer from "./components/ui/Footer/Footer.vue";

const menuOpen = ref(false);
const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 900;
};
const misTitulos = [
  "Gayola",
  "Soporte",
  "Contacto",
  "Sponsors" 
]


const quickLinks = [
      { label: "Inicio", href: "/" },
      { label: "Biografía", href: "/biografia" },
      { label: "Conciertos", href: "/conciertos" },
      { label: "Discografía", href: "/discografia" },
      { label: "Galería", href: "/galeria" },
    ];

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
