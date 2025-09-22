<template>
  <div class="tienda-bg">
    <h2 class="tienda-title">Tienda Oficial Gayola</h2>
    <div class="productos-grid">
      <div
        v-for="(producto, i) in productos"
        :key="producto.nombre"
        class="producto-item"
        @click="abrirModal(producto)"
      >
        <img
          :src="producto.imagen"
          :alt="producto.nombre"
          class="producto-img"
        />
        <h3 class="producto-nombre">{{ producto.nombre }}</h3>
        <p class="producto-precio">{{ producto.precio }} €</p>
      </div>
    </div>
    <div v-if="modalAbierto" class="modal-bg" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-cerrar" @click="cerrarModal">✕</button>
        <img
          :src="productoModal.imagen"
          :alt="productoModal.nombre"
          class="modal-img"
        />
        <h3 class="modal-nombre">{{ productoModal.nombre }}</h3>
        <p class="modal-descripcion">{{ productoModal.descripcion }}</p>
        <p class="modal-precio">{{ productoModal.precio }} €</p>
        <button class="modal-comprar" @click="enviarEmail(productoModal)">
          Comprar por email
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const productos = [
  {
    nombre: "Camiseta Gayola",
    imagen: "/tienda/camiseta.png",
    precio: 15,
    descripcion: "Camiseta oficial Gayola, disponible en varias tallas.",
  },
  {
    nombre: "Taza Gayola",
    imagen: "/tienda/taza.png",
    precio: 10,
    descripcion: "Taza de cerámica con el logo de Gayola.",
  },
  {
    nombre: "Vino Gayola",
    imagen: "/tienda/vino.png",
    precio: 12,
    descripcion: "Botella de vino edición especial Gayola.",
  },
  {
    nombre: "Disco Gayola",
    imagen: "/tienda/disco.png",
    precio: 10,
    descripcion: "Último disco de Gayola en formato físico.",
  },
  {
    nombre: "Mochila Gayola",
    imagen: "/tienda/mochila.png",
    precio: 8,
    descripcion: "Mochila resistente con el logo de Gayola.",
  },
  {
    nombre: "Grinder Gayola",
    imagen: "/tienda/grinder.png",
    precio: 2,
    descripcion: "Grinder metálico con diseño exclusivo Gayola.",
  },
];
const modalAbierto = ref(false);
const productoModal = ref({});
function abrirModal(producto) {
  productoModal.value = producto;
  modalAbierto.value = true;
}
function cerrarModal() {
  modalAbierto.value = false;
  productoModal.value = {};
}
function enviarEmail(producto) {
  const asunto = encodeURIComponent(`Pedido: ${producto.nombre}`);
  const cuerpo = encodeURIComponent(
    `Hola,\n\nEstoy interesado en comprar el producto "${producto.nombre}" (${producto.precio} €).\n\n¿Podéis darme más información?\n\nGracias.`
  );
  window.location.href = `mailto:contacto@gayola.com?subject=${asunto}&body=${cuerpo}`;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.tienda-bg {
  background: #181818;
  padding: 2em 1em;
  min-height: 60vh;
  border-radius: 0.3em;
  box-shadow: 0 0 40px #ff99ff44;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tienda-title {
  padding-top: 2em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.productos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.producto-item {
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.producto-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.producto-img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 0.4em;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  margin-bottom: 0.7em;
}
.producto-nombre {
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 1.1em;
  margin-bottom: 0.3em;
  text-align: center;
  font-weight: 600;
}
.producto-precio {
  color: #fff;
  font-size: 1em;
  margin-bottom: 0.2em;
  text-align: center;
}

/* Modal estilos */
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  position: relative;
  background: #222;
  border-radius: 1em;
  box-shadow: 0 0 40px #ff99ff88;
  padding: 2em 1em 1em 1em;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-img {
  max-width: 80vw;
  max-height: 40vh;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff88;
  background: #181818;
  object-fit: contain;
  margin-bottom: 1em;
}
.modal-nombre {
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 1.3em;
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: 600;
}
.modal-descripcion {
  color: #fff;
  font-size: 1em;
  margin-bottom: 0.5em;
  text-align: center;
}
.modal-precio {
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 1em;
  text-align: center;
}
.modal-comprar {
  background: #ff99ff;
  color: #222;
  border: none;
  border-radius: 0.5em;
  font-size: 1.1em;
  padding: 0.7em 2em;
  cursor: pointer;
  box-shadow: 0 0 8px #ff99ff88;
  transition: background 0.2s;
}
.modal-comprar:hover {
  background: #fff;
  color: #ff99ff;
}
.modal-cerrar {
  position: absolute;
  top: 0.5em;
  right: 0.7em;
  background: #ff99ff;
  color: #222;
  border: none;
  border-radius: 50%;
  font-size: 1.5em;
  cursor: pointer;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px #ff99ff88;
  transition: background 0.2s;
}
.modal-cerrar:hover {
  background: #fff;
}

/* Responsive */
@media (max-width: 1100px) {
  .productos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2em;
  }
  .producto-img {
    max-height: 140px;
  }
}
@media (max-width: 900px) {
  .productos-grid {
    grid-template-columns: 1fr;
    gap: 1em;
    max-width: 98vw;
  }
  .producto-img {
    max-height: 100px;
  }
  .modal-img {
    max-width: 98vw;
    max-height: 30vh;
  }
}
@media (max-width: 600px) {
  .tienda-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .tienda-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .modal-content {
    padding: 1em 0.2em 0.7em 0.2em;
  }
  .modal-img {
    max-width: 98vw;
    max-height: 20vh;
  }
}

</style>
