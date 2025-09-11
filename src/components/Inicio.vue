<template>
  <div id="inicio-content" class="inicio-content">
    <img
      id="grupo-foto"
      class="grupo-foto"
      src="/src/assets/grupo.jpeg"
      alt="Foto del grupo Gayola"
    />
    <div class="disco-nombre">
      {{ msg }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  msg: String,
});
</script>

<style scoped>
.inicio-content {
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1em;
  margin: 2em 0;
  box-shadow: 0 0 40px #000a;
  background: rgba(20, 20, 20, 0.9);
}

.grupo-foto {
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  object-fit: cover;
  border-radius: 1em;
  box-shadow: 0 0 40px #ff99ff44;
  filter: grayscale(10%) brightness(1.1);
  transition: filter 0.3s;
}

.disco-nombre {
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.85);
  color: #ff99ff;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  font-size: 2.5em;
  padding: 0.5em 1.5em;
  border-radius: 1em;
  text-align: center;
  box-shadow: 0 0 20px #ff99ff44;
  letter-spacing: 2px;
  border: 2px solid #ff99ff55;
  max-width: 90vw;
  word-break: break-word;
}

@media (max-width: 900px) {
  .inicio-content {
    min-height: 40vh;
    margin: 1em 0;
    padding: 0.5em;
  }
  .grupo-foto {
    height: 35vh;
    border-radius: 2vw;
  }
  .disco-nombre {
    font-size: 1.3em;
    padding: 0.3em 0.7em;
    top: 5%;
    max-width: 95vw;
  }
}

@media (max-width: 600px) {
  .inicio-content {
    min-height: 30vh;
    margin: 0.5em 0;
    padding: 0.2em;
  }
  .grupo-foto {
    height: 22vh;
    border-radius: 3vw;
  }
  .disco-nombre {
    font-size: 1em;
    padding: 0.2em 0.4em;
    top: 2%;
    max-width: 98vw;
  }
}
</style>
