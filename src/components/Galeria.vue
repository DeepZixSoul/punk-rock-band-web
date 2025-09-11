<template>
  <div class="galeria-bg">
    <h2 class="galeria-title">Galería</h2>
    <div class="galeria-grid">
      <div
        v-for="(foto, i) in fotos"
        :key="i"
        class="foto-item"
        @click="abrirModal(foto)"
      >
        <img :src="foto" alt="Foto Gayola" class="foto-img" />
      </div>
    </div>
    <div v-if="modalAbierto" class="modal-bg" @click.self="cerrarModal">
      <div class="modal-content">
        <button class="modal-cerrar" @click="cerrarModal">✕</button>
        <img :src="fotoModal" alt="Foto ampliada" class="modal-img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const fotos = [
  '/galeria/foto1.jpeg',
  '/galeria/foto2.jpeg',
  '/galeria/foto3.jpeg',
  '/galeria/foto4.jpeg',
  '/galeria/foto5.jpeg',
  '/galeria/foto6.jpeg',
  '/galeria/foto7.jpeg',
  '/galeria/foto8.jpeg',
  '/galeria/foto9.jpeg',
  '/galeria/foto10.jpeg',
  '/galeria/foto11.jpeg',
  '/galeria/foto12.jpeg',
  '/galeria/foto13.jpeg',
  '/galeria/foto14.jpeg',
  '/galeria/foto15.jpeg',
  '/galeria/foto16.jpeg',
  '/galeria/foto17.jpeg',
  '/galeria/foto18.jpeg',
  '/galeria/foto19.jpeg',
  '/galeria/foto20.jpeg',
  '/galeria/foto21.jpeg',
  // Añade más fotos si lo necesitas
]
const modalAbierto = ref(false)
const fotoModal = ref('')

function abrirModal(foto) {
  fotoModal.value = foto
  modalAbierto.value = true
}
function cerrarModal() {
  modalAbierto.value = false
  fotoModal.value = ''
}
</script>

<style scoped>
.galeria-bg {
  background: rgba(20, 20, 20, 0.9);
  padding: 2em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.galeria-title {
  color: #ff99ff;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.galeria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.foto-item {
  background: #222;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.foto-item:hover {
  box-shadow: 0 0 40px #ff99ff88;
  transform: scale(1.03);
}
.foto-img {
  width: 100%;
  max-height: 350px;
  object-fit: contain; /* No recorta la imagen */
  border-radius: 0.4em;
  box-shadow: 0 0 8px #000a;
  background: #181818;
  transition: box-shadow 0.2s;
}

/* Modal estilos */
.modal-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.85);
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
  padding: 1em;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-img {
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 0.7em;
  box-shadow: 0 0 20px #ff99ff88;
  background: #181818;
  object-fit: contain;
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
  .galeria-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2em;
  }
  .foto-img {
    max-height: 250px;
  }
}
@media (max-width: 900px) {
  .galeria-grid {
    grid-template-columns: 1fr;
    gap: 1em;
  }
  .foto-img {
    max-height: 180px;
  }
  .modal-img {
    max-width: 98vw;
    max-height: 70vh;
  }
}
@media (max-width: 600px) {
  .galeria-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .galeria-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  .galeria-grid {
    grid-template-columns: 1fr;
    gap: 0.7em;
    max-width: 98vw;
  }
  .foto-img {
    max-height: 120px;
  }
  .modal-img {
    max-width: 98vw;
    max-height: 60vh;
  }
}
</style>
