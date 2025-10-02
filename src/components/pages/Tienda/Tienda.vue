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
          :alt="`Foto de producto: ${producto.nombre}`"
          class="producto-img"
          loading="lazy"
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
          :alt="`Foto ampliada de producto: ${productoModal.nombre}`"
          class="modal-img"
          loading="lazy"
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
import "./Tienda.css";
import {
  productos,
  modalAbierto,
  productoModal,
  abrirModal,
  cerrarModal,
  enviarEmail
} from "./Tienda.js";
</script>


