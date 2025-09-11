<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div id="inicio-content" class="inicio-content">
    <div class="disco-nombre">
      {{ msg }}
    </div>
    <img
      id="grupo-foto"
      class="grupo-foto"
      src="/src/assets/grupo.jpeg"
      alt="Foto del grupo Gayola"
    />
  </div>
</template>

<style scoped>
.inicio-content {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background: rgba(20, 20, 20, 0.85); */
  border-radius: 1em;
  /* box-shadow: 0 0 40px #000a; */
  margin: 2em 0;
}

.grupo-foto {
  width: 100%;
  max-width: 100%;
  height: 70vh;
  margin: 1em;
  object-fit: cover;
  /* opacity: 0.85; */
  border-radius: 1em;
  box-shadow: 0 0 40px #ff99ff44;
  filter: grayscale(10%) brightness(1.1);
  /* padding: 2em; */
}

.disco-nombre {
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(255, 255, 255);
  color: #ff99ff;
  opacity: 0.85; 
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  font-size: 3em;
  padding: 0.5em 1.5em;
  border-radius: 1em;
  text-align: center;
  box-shadow: 0 0 20px #ff99ff44;
  letter-spacing: 2px;
  border: 2px solid #ff99ff55;
}

@media (max-width: 900px) {
  .grupo-foto {
    width: 98vw;
    height: 40vh;
    border-radius: 2vw;
  }
  .disco-nombre {
    font-size: 2em;
    padding: 0.3em 0.7em;
    top: 5%;
  }
  .inicio-content {
    min-height: 40vh;
    margin: 1em 0;
    padding: 0.5em;
  }
}
</style>
