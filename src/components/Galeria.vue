<template>
  <div class="galeria-bg">
    <h2 class="galeria-title">Galería Gayola</h2>
    <div class="galeria-grid">
      <div v-for="(foto, i) in fotos" :key="i" class="foto-item">
        <img :src="foto" alt="Foto del grupo" class="foto-img" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
  '/galeria/foto22.jpeg',
  '/galeria/foto23.jpeg',
  '/galeria/foto24.jpeg',
  '/galeria/foto25.jpeg',
  '/galeria/foto26.jpeg',
  '/galeria/foto27.jpeg',
  '/galeria/foto28.jpeg',
  '/galeria/foto29.jpeg',
  '/galeria/foto30.jpeg',
]
</script>

<style scoped>
.galeria-bg {
  background: rgba(0,0,0,0.85);
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
}
.galeria-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  width: 100%;
  max-width: 1200px;
}
.foto-item {
  background: #222;
  border-radius: 0.5em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
}
.foto-img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 0.3em;
  box-shadow: 0 0 8px #000a;
}
@media (max-width: 900px) {
  .galeria-grid {
    grid-template-columns: 1fr;
    gap: 1em;
  }
  .foto-img {
    max-height: 300px;
  }
}
</style>

