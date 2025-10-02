// Lógica JS separada para TopBar.vue
import { useRouter } from 'vue-router';

/**
 * Exporta funciones para ser usadas en <script setup> con props y emit locales
 */
export function handleMenuClick(_, emit) {
  emit("toggle-menu");
}

export function goHome(props, emit) {
  const router = useRouter();
  router.push("/");
  if (props.menuOpen) emit("toggle-menu");
}