// Lógica modularizada de Tienda.vue
import { ref } from "vue";
import { useHead } from '@vueuse/head';

useHead({
  title: 'Tienda | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Compra merchandising oficial de Gayola: camisetas, discos, tazas y más productos punk rock.'
    },
    {
      name: 'keywords',
      content: 'gayola, tienda, merchandising, camisetas, discos, tazas, punk, rock, Alicante, banda, España, productos'
    },
    {
      property: 'og:title',
      content: 'Tienda | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Compra merchandising oficial de Gayola: camisetas, discos, tazas y más productos punk rock.'
    }
  ]
});

export const productos = [
  {
    nombre: "Camiseta Gayola",
    imagen: "/tienda/camiseta.webp",
    precio: 15,
    descripcion: "Camiseta oficial Gayola, disponible en varias tallas.",
  },
  {
    nombre: "Taza Gayola",
    imagen: "/tienda/taza.webp",
    precio: 10,
    descripcion: "Taza de cerámica con el logo de Gayola.",
  },
  {
    nombre: "Vino Gayola",
    imagen: "/tienda/vino.webp",
    precio: 12,
    descripcion: "Botella de vino edición especial Gayola.",
  },
  {
    nombre: "Disco Gayola",
    imagen: "/tienda/disco.webp",
    precio: 10,
    descripcion: "Último disco de Gayola en formato físico.",
  },
  {
    nombre: "Mochila Gayola",
    imagen: "/tienda/mochila.webp",
    precio: 8,
    descripcion: "Mochila resistente con el logo de Gayola.",
  },
  {
    nombre: "Grinder Gayola",
    imagen: "/tienda/grinder.webp",
    precio: 2,
    descripcion: "Grinder metálico con diseño exclusivo Gayola.",
  },
];
export const modalAbierto = ref(false);
export const productoModal = ref({});
export function abrirModal(producto) {
  productoModal.value = producto;
  modalAbierto.value = true;
}
export function cerrarModal() {
  modalAbierto.value = false;
  productoModal.value = {};
}
export function enviarEmail(producto) {
  const asunto = encodeURIComponent(`Pedido: ${producto.nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola,\n\nEstoy interesado en comprar el producto "${producto.nombre}" (${producto.precio} €).\n\n¿Podéis darme más información?\n\nGracias.`
  );
  window.location.href = `mailto:contacto@gayola.com?subject=${asunto}&body=${cuerpo}`;
}
