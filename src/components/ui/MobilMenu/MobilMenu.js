import { defineProps, defineEmits } from 'vue';
export default function mobilMenuLogic() {
  const props = defineProps({
    menuOpen: Boolean,
    menuItems: Array,
  });
  const emit = defineEmits(["close"]);
  return { props, emit };
}