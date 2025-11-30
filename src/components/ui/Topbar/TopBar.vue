<!-- filepath: /home/diego/Escritorio/gayola-web/gayola-web/src/components/layout/TopBar.vue -->
<template>
  <div class="top-bar">
    <div class="top-logo">
      <img
        id="gayola-logo-navbar"
        src="/src/assets/logo.webp"
        alt="Gayola logo"
        class="logo-navbar"
        @click="goHome(router, props, emit)"
        style="cursor:pointer"
      />
    </div>
    <button class="menu-btn" v-if="isMobile" @click="handleMenuClick(null, emit)">
      <span class="menu-icon">
        {{ menuOpen ? "✕" : "☰" }}
      </span>
    </button>
    <div class="top-fill" v-if="!isMobile">
      <img
        v-for="n in 8"
        :key="n"
        src="/public/logos/gayola-blanco.webp"
        alt="Gayola blanco"
        class="logo-blanco"
      />
    </div>
    <SocialBar v-if="!isMobile" />
  </div>
</template>

<script setup>

import SocialBar from "../SocialBar/SocialBar.vue";
import { handleMenuClick, goHome } from "./TopBar.js";
import { useRouter } from 'vue-router';

const props = defineProps({
  isMobile: Boolean,
  menuOpen: Boolean,
});
const emit = defineEmits(["toggle-menu"]);

const router = useRouter();
</script>

<style src="./TopBar.css" scoped></style>
