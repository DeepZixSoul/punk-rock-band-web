<template>
  <div class="tienda-bg">
  <h1 class="tienda-title">Tienda Oficial Gayola</h1>
    <div class="productos-grid">
      <div
        v-for="(producto, i) in productos"
        :key="producto.nombre"
        class="producto-item card card-hover"
        @click="abrirModal(producto)"
      >
        <img
          :src="producto.imagen"
          :alt="`Foto de producto: ${producto.nombre}`"
          class="producto-img loading"
          loading="lazy"
           v-img-load
        />
  <h3 class="producto-nombre">{{ producto.nombre }}</h3>
        <p class="producto-precio">{{ producto.precio }} €</p>
      </div>
    </div>
    <div v-if="modalAbierto" class="modal-overlay" @click.self="cerrarModal"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tienda-modal-title"
      aria-describedby="tienda-modal-desc">
      <div id="tienda-modal-desc" style="display: none;">
        Detalle del producto. Usa las flechas para navegar entre productos o desliza en móvil. Presiona Escape para cerrar.
      </div>
      <div class="modal-content">
        <button class="modal-cerrar modal-close" @click="cerrarModal" aria-label="Cerrar producto">✕</button>
        <button v-if="indexProducto > 0" class="modal-arrow modal-arrow-left" @click.stop="productoAnterior" aria-label="Anterior"> <</button>
        <img
          :src="productoModal.imagen"
          :alt="`Foto ampliada de producto: ${productoModal.nombre}`"
          class="modal-img loading"
          loading="lazy"
           v-img-load
        />
        <button v-if="indexProducto < productos.length - 1" class="modal-arrow modal-arrow-right" @click.stop="siguienteProducto" aria-label="Siguiente">></button>
  <h3 class="modal-nombre" id="tienda-modal-title">{{ productoModal.nombre }}</h3>
        <p class="modal-descripcion">{{ productoModal.descripcion }}</p>
        <p class="modal-precio">{{ productoModal.precio }} €</p>
        <p class="modal-contador">{{ indexProducto + 1 }} / {{ productos.length }}</p>
        <button class="modal-comprar" @click="enviarEmail(productoModal)">
          Comprar por email
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./Tienda.css";
import { useHead } from '@vueuse/head';
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import tiendaLogic from "./Tienda.js";
import { createFocusTrap } from "../../../utils/focusTrap.js";

const {
  productos,
  modalAbierto,
  productoModal,
  indexProducto,
  abrirModal,
  cerrarModal,
  siguienteProducto,
  productoAnterior,
  handleTouchStart,
  handleTouchEnd,
  enviarEmail
} = tiendaLogic();

let removeFocusTrap = null;

watch(modalAbierto, (newVal) => {
  if (newVal) {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      removeFocusTrap = createFocusTrap(modal);
      const closeBtn = modal.querySelector('.modal-cerrar');
      closeBtn?.focus();
    }
  } else {
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  }
});

function handleKeydown(e) {
  if (e.key === 'Escape' && modalAbierto.value) {
    cerrarModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const productStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': productos.map((p) => ({
    '@type': 'Product',
    name: p.nombre,
    description: p.descripcion,
    image: `https://gayola.netlify.app${p.imagen}`,
    offers: {
      '@type': 'Offer',
      price: p.precio,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://gayola.netlify.app/tienda'
    }
  }))
}));

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
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify(productStructuredData.value))
    }
  ]
});
</script>


