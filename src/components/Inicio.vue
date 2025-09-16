<template>
  <div class="inicio-content">
    <div class="inicio-title-wrapper">
      <h1 class="inicio-title">Gayola Punk Rock</h1>
    </div>
    <img
      class="grupo-foto"
      src="/src/assets/grupo.jpeg"
      alt="Foto del grupo Gayola"
    />
  </div>
</template>

<script setup>
// No props necesarios
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.inicio-content {
 background: rgba(20, 20, 20, 0.9);
  padding: 4em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .inicio-title-wrapper {
  padding-top: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;
} */

.inicio-title {
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.4em;
  padding: 0.5em 1.5em 0.3em 1.5em;
  /* background: #181818; */
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
  border-radius: 0.3em;
  box-shadow: 0 0 20px #ff99ff44;

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

@keyframes topbarFadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
