<template>
  <div v-if="menuOpen" class="mobilmenu-wrapper menu-open">
    <div class="mobile-overlay" @click.self="$emit('close')"></div>
    <nav class="mobile-navbar" aria-label="Navegación móvil">
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
            :aria-current="route.path === item.href ? 'page' : undefined"
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
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import SocialBar from "../SocialBar/SocialBar.vue";
import { createFocusTrap } from '../../../utils/focusTrap.js';

const route = useRoute();
const props = defineProps({
  menuOpen: Boolean,
  menuItems: Array,
});
const emit = defineEmits(["close"]);

let removeFocusTrap = null;

watch(() => props.menuOpen, (open) => {
  if (open) {
    const nav = document.querySelector('.mobile-navbar');
    if (nav) {
      removeFocusTrap = createFocusTrap(nav);
      const firstLink = nav.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  } else {
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  }
});
</script>

<style src="./MobilMenu.css" scoped></style>
