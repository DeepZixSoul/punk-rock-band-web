<template>
  <div class="inicio-content">
    <div class="inicio-title-wrapper">
      <h1 class="inicio-title">Gayola Punk Rock</h1>
    </div>
    <img
      class="grupo-foto"
      src="/src/assets/grupo.webp"
      alt="Foto del grupo Gayola"
    />

    <!-- Noticias -->
    <Noticias />
  </div>
</template>

<script setup>
import Noticias from "./Noticias.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");

.inicio-content {
  background: rgba(20, 20, 20, 0.9);
  padding: 4em 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", Arial, sans-serif;
}

.inicio-title {
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.4em;
  padding: 0.5em 1.5em 0.3em 1.5em;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 700;
  display: block;
}

.grupo-foto {
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  object-fit: cover;
  box-shadow: 0 0 20px #ff99ff44;
  border-radius: 0.7em;

  display: block;
}

@media (max-width: 900px) {
  .inicio-title {
    font-size: 2em;
    padding: 0.4em 0.7em 0.2em 0.7em;
    letter-spacing: 1px;
  }
  .grupo-foto {
    height: 35vh;
    max-width: 98vw;
  }
}
@media (max-width: 600px) {
  .inicio-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    padding: 0.1em 0.5em 0.2em 0.5em;
  }
  .grupo-foto {
    height: 25vh;
    max-width: 98vw;
  }
  .inicio-content {
    padding: 2em 0.5em;
  }
  

}

</style>
