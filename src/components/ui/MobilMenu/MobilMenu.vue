<template>
  <div v-if="menuOpen" class="mobilmenu-wrapper menu-open">
    <div class="mobile-overlay" @click.self="$emit('close')"></div>
    <div class="mobile-bg" :style="{ backgroundImage: `url(${bgImg})` }" aria-hidden="true"></div>
    <nav class="mobile-navbar" aria-label="Navegación móvil">
      <TransitionGroup name="menu-item" tag="ul" class="mobile-navbar-list">
        <li
          v-for="(item, i) in menuItems"
          :key="item.href"
          class="mobile-navbar-item"
          :style="{ '--i': i }"
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
      </TransitionGroup>
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
import { useScrollLock } from '../../../utils/useScrollLock.js';
import bgImg from '/src/assets/grupo.webp';

const route = useRoute();
const props = defineProps({
  menuOpen: Boolean,
  menuItems: Array,
});
const emit = defineEmits(["close"]);

let removeFocusTrap = null;
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock();

watch(() => props.menuOpen, (open) => {
  if (open) {
    lockScroll();
    const nav = document.querySelector('.mobile-navbar');
    if (nav) {
      removeFocusTrap = createFocusTrap(nav);
      const firstLink = nav.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  } else {
    unlockScroll();
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  }
});
</script>

<style src="./MobilMenu.css" scoped></style>
