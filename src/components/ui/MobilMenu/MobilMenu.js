// Lógica JS separada para MobilMenu.vue
import { defineProps, defineEmits } from 'vue';
/**
 * Lógica y controladores para el componente MobilMenu
 * Separa props y emits para mantener el .vue limpio y profesional
 */
export default function mobilMenuLogic() {
  const props = defineProps({
    menuOpen: Boolean,
    menuItems: Array,
  });
  const emit = defineEmits(["close"]);
  return { props, emit };
}