<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/TopBar.vue -->
<template>
  <div class="top-bar">
    <div class="top-logo">
      <img
        id="gayola-logo-navbar"
        src="/src/assets/logo.png"
        alt="Gayola logo"
        class="logo-navbar"
        @click="goHome"
        style="cursor:pointer"
      />
    </div>
    <button class="menu-btn" v-if="isMobile" @click="handleMenuClick">
      <span class="menu-icon">
        {{ menuOpen ? "✕" : "☰" }}
      </span>
    </button>
    <div class="top-fill" v-if="!isMobile">
      <img
        v-for="n in 8"
        :key="n"
        src="/public/gayola-blanco.png"
        alt="Gayola blanco"
        class="logo-blanco"
      />
    </div>
    <SocialBar v-if="!isMobile" />
  </div>
</template>

<script setup>
import SocialBar from "./SocialBar.vue";

const props = defineProps({
  isMobile: Boolean,
  menuOpen: Boolean,
});
const emit = defineEmits(["toggle-menu"]);
import { useRouter } from 'vue-router';
const router = useRouter();

function handleMenuClick() {
  emit("toggle-menu");
}

function goHome() {
  router.push("/");
  if (props.menuOpen) emit("toggle-menu");
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.top-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10001;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg);
  padding: 0.3em 1em;
  min-height: 3em;
  /* transition: background 0.3s; */
  /* animation: topbarFadeIn 0.7s cubic-bezier(0.77, 0, 0.18, 1); */
}
.mobile-navbar {
  position: sticky;
  top: 0;
  z-index: 10000;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #181818;
  padding: 0.3em 1em;
  min-height: 3em;
  transition: background 0.3s;
  animation: topbarFadeIn 0.7s cubic-bezier(0.77, 0, 0.18, 1);
}
@keyframes topbarFadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.top-logo {
  display: flex;
  align-items: center;
}
.logo-navbar {
  margin-left: 0.8em;
  height: 2.5em;
  padding: 0.2em 0.3em;
  width: auto;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #ff99ff);
  transition: box-shadow 0.2s;
}
.logo-navbar:hover {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.1);
}
.top-fill {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  min-width: 0;
  overflow: hidden;
}
.logo-blanco {
  height: 2.2em;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 0 4px #ff99ff);
}
/* .top-fill-mobile {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em;
  min-width: 0;
  overflow: hidden;
} */
.logo-gayola-mobile {
  height: 1.2em;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 0 2px #ff99ff);
}
.menu-btn {
  margin-left: auto;
  min-width: 40px;
  min-height: 40px;
  padding: 0.2em;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 10001;
  position: relative;
  transition: background 0.4s;
}
.menu-icon {
  font-size: 1.7em;
  color: var(--color-accent);
  padding: 0.15em;
  border-radius: 0.3em;
  /* background: #222; */
  /* box-shadow: 0 0 8px #ff99ff88; */
  font-family: var(--font-title);
  transition: background 0.2s, color 0.2s;
}
.menu-btn:hover .menu-icon {
  /* background: #ff99ff22; */
  color: var(--color-text);
}

@media (max-width: 900px) {
  .top-bar {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
    padding: 0.6em 1em;
    margin: 0;
    min-height: 3em;
  }
  .top-logo {
    margin-right: 0.5em;
  }
  
  .logo-navbar {
    padding: 0.2em 0em;
    height: 2.2em;
  }
  .top-fill {
    display: none !important;
  }
}

@media (max-width: 600px) {
  .top-bar {
    padding: 0.2em 0.3em;
    min-height: 2.2em;
  }
  .logo-navbar {
    padding: 0.1em 0.1em;
    height: 2em;
  }
}
</style>
