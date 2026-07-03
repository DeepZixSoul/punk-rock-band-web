<!-- Componente de navegación móvil -->
<template>
  <div v-if="menuOpen" class="mobilmenu-wrapper menu-open">
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
            @click="$emit('close')"
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
import SocialBar from "../SocialBar/SocialBar.vue";
import { RouterLink } from 'vue-router';
const props = defineProps({
  menuOpen: Boolean,
  menuItems: Array,
});
const emit = defineEmits(["close"]);
</script>

<style src="./MobilMenu.css" scoped></style>
