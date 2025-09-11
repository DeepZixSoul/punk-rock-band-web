<template>
  <div class="conciertos-bg">
    <h2 class="conciertos-title">Próximos Conciertos</h2>
    <div class="carteles-grid">
      <div v-for="(cartel, i) in carteles" :key="i" class="cartel-item">
        <img :src="cartel" alt="Cartel de concierto" class="cartel-img" />
      </div>
    </div>
  </div>
</template>

<script setup>
const carteles = [
  '/carteles/cartel1.jpg',
  '/carteles/cartel2.jpg',
  '/carteles/cartel3.jpg',
  '/carteles/cartel4.jpg',
  '/carteles/cartel5.jpg',
  '/carteles/cartel6.jpg',
  '/carteles/cartel7.jpg',
  '/carteles/cartel8.jpg',
  // Añade más rutas según tus carteles
]
</script>

<style scoped>
.conciertos-bg {
  background: #111;
  padding: 2em 1em;
  /* border-radius: 1em; */
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.conciertos-title {
  color: #ff99ff;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
}
.carteles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5em;
  width: 100%;
  max-width: 1200px;
}
.cartel-item {
  background: #222;
  border-radius: 0.5em;
  box-shadow: 0 0 20px #ff99ff44;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
}
.cartel-img {
  width: 100%;
  /* height: auto; */
  max-height: 1000px;
  object-fit: contain;
  border-radius: 0.3em;
  box-shadow: 0 0 8px #000a;
}
@media (max-width: 900px) {
  .carteles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
}
@media (max-width: 600px) {
  .carteles-grid {
    grid-template-columns: 1fr;
    gap: 1em;
  }
}
</style>

