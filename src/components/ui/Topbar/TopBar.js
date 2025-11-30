// Lógica JS separada para TopBar.vue
import { useRouter } from 'vue-router';

/**
 * Exporta funciones para ser usadas en <script setup> con props y emit locales
 */
export function handleMenuClick(_, emit) {
  emit("toggle-menu");
}

export function goHome(router, props, emit) {
  if (router.currentRoute.value.path === "/") {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    router.push("/").then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
  if (props.menuOpen) emit("toggle-menu");
}