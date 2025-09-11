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
  '/public/galeria/foto1.jpeg',
  '/public/galeria/foto2.jpeg',
  '/public/galeria/foto3.jpeg',
  '/public/galeria/foto4.jpeg',
  '/public/galeria/foto5.jpeg',
  '/public/galeria/foto6.jpeg',
  '/public/galeria/foto7.jpeg',
  '/public/galeria/foto8.jpeg',
  '/public/galeria/foto9.jpeg',
  '/public/galeria/foto10.jpeg',
  '/public/galeria/foto11.jpeg',
  '/public/galeria/foto12.jpeg',
  '/public/galeria/foto13.jpeg',
  '/public/galeria/foto14.jpeg',
  '/public/galeria/foto15.jpeg',
  '/public/galeria/foto16.jpeg',
  '/public/galeria/foto17.jpeg',
  '/public/galeria/foto18.jpeg',
  '/public/galeria/foto19.jpeg',
  '/public/galeria/foto20.jpeg',
  '/public/galeria/foto21.jpeg',
  '/public/galeria/foto22.jpeg',
  '/public/galeria/foto23.jpeg',
  '/public/galeria/foto24.jpeg',
  '/public/galeria/foto25.jpeg',
  '/public/galeria/foto26.jpeg',
  '/public/galeria/foto27.jpeg',
  '/public/galeria/foto28.jpeg',
  '/public/galeria/foto29.jpeg',
  '/public/galeria/foto30.jpeg',
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

