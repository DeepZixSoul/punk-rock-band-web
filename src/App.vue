<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <div
    role="status"
    aria-live="polite"
    aria-atomic="true"
    class="visually-hidden"
  >
    {{ routeAnnouncement }}
  </div>

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

  <main id="main-content" class="section fondo-imagen" role="main">
    <ErrorBoundary>
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="default">
          <component :is="Component" />
        </Transition>
      </router-view>
    </ErrorBoundary>
  </main>

  <Footer />
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import NavBar from "./components/ui/NavBar/NavBar.vue";
import MobilMenu from "./components/ui/MobilMenu/MobilMenu.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
import Footer from "./components/ui/Footer/Footer.vue";

const route = useRoute();
const routeAnnouncement = ref("");

watch(
  () => route.path,
  (path) => {
    const names = {
      "/": "Inicio",
      "/biografia": "Biografía",
      "/conciertos": "Conciertos",
      "/galeria": "Galería",
      "/videos": "Videos",
      "/discografia": "Discografía",
      "/tienda": "Tienda",
      "/contacto": "Contacto",
    };
    routeAnnouncement.value = `Navegaste a ${names[path] || path}`;
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }
);

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
  flex: 1;
  padding: 4.5em 0 2em;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 10002;
  padding: 0.5em 1em;
  background: var(--color-accent, #ff66ff);
  color: #000;
  font-family: var(--font-title, 'Montserrat', Arial, sans-serif);
  font-weight: 700;
  text-decoration: none;
  border-radius: 0 0 0.3em 0;
  transition: top 0.15s;
}

.skip-link:focus {
  top: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
