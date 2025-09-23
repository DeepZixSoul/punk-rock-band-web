<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/MobilMenu.vue -->
<template>
  <div v-if="menuOpen" class="mobilmenu-wrapper" aria-open="true">
    <div class="mobile-overlay" @click.self="$emit('close')"></div>
    <nav class="mobile-navbar">
      <ul class="mobile-navbar-list">
        <li
          class="mobile-navbar-item"
          v-for="item in menuItems"
          :key="item.href"
        >
          <router-link
            class="mobile-navbar-link"
            :to="item.href"
            @click.native="$emit('close')"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
      <div class="mobile-social-bar">
        <SocialBar />
      </div>
    </nav>
  </div>
</template>

<script setup>
import SocialBar from "./SocialBar.vue";
import { RouterLink } from 'vue-router';

defineProps({
  menuOpen: Boolean,
  menuItems: Array,
});
defineEmits(["close"]);
</script>

<style scoped>
.mobilmenu-wrapper {
  position: fixed;
  top: 4em; /* La altura real de tu topbar */
  left: 0;
  width: 100vw;
  height: calc(600vh - 4em); /* Resta la altura del topbar */
  z-index: 9999;
}

.mobile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(20, 20, 20, 0.7);
  z-index: 9998;
  pointer-events: auto;
}

.mobile-navbar {
  position: fixed;
  top: 1.7em; /* Ajusta según el alto real del topbar */
  left: 0;
  width: 100vw;
  height: 60vh;
  background: var(--color-bg) url("/public/punk-texture.webp") repeat;
  z-index: 9999;
  border-radius: 0 0 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1em 0.5em 0.5em 0.5em;
  box-shadow: 0 0 40px #000a;
  overflow: hidden;
  transform: translateY(-40px);
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.77, 0, 0.18, 1), opacity 0.35s;
}

.mobilmenu-wrapper[aria-open="true"] .mobile-navbar {
  transform: translateY(0);
  opacity: 1;
}

.mobile-navbar-list {
  gap: 0.7em;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2em;
  list-style: none;
  padding: 0;
}

.mobile-navbar-item {
  width: 100%;
  text-align: center;
}

.mobile-navbar-link {
  font-size: 1em;
  padding: 0.6em 0.7em;
  color: var(--color-accent);
  text-decoration: none;
  font-family: var(--font-title);
  border-left: 3px solid transparent;
  width: 100%;
  display: block;
  text-align: left;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
/* El primer elemento tiene más espacio arriba */
.mobile-navbar-item:first-child .mobile-navbar-link {
  padding-top: 0.9em;
}

.mobile-navbar-link:hover,
.mobile-navbar-link:focus,
.mobile-navbar-link.active {
  color: var(--color-text);
  border-left: 3px solid #ff99ff;
  background: var(--color-card);
}

.mobile-social-bar {
  position: absolute;
  right: 1em;
  bottom: 1em;
  gap: 1em;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.mobile-social-bar:hover {
  opacity: 1;
}

/* Responsive */
@media (max-width: 900px) {
  .mobile-navbar {
    height: 55vh;
    padding: 0.2em 0.5em;
  }
  .mobile-navbar-item:first-child {
    margin-top: 1em;
  }
  .mobile-navbar-link {
  
    font-size: 0.9em;
    padding: 0.2em 1em;
  }
}
@media (max-width: 600px) {
  .mobile-navbar {
    height: 55vh;
    padding: 0.2em 0.5em;
  }
  .mobile-navbar-item:first-child {
    margin-top: 0.8em;
  }
  .mobile-navbar-link {
  
    font-size: 0.9em;
    padding: 0.2em 0.5em;
  }
}
</style>
