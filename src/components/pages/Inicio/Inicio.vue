<template>
  <div class="inicio-content">
    <div class="inicio-title-wrapper">
      <h1 class="inicio-title">Gayola Punk Rock</h1>
    </div>
    <img
      class="grupo-foto loading"
      src="/src/assets/grupo.webp"
      alt="Foto del grupo Gayola"
      loading="lazy"
      @load="$event.target.classList.remove('loading'); $event.target.classList.add('loaded')"
    />

    <!-- Noticias -->
    <Noticias />
  </div>
</template>

<script setup>
// Importa la lógica JS desde archivo externo para mantener el componente limpio y modular
import inicioLogic from "./Inicio.js";
import Noticias from "../Noticias/Noticias.vue";
inicioLogic();
</script>

<style src="./Inicio.css" scoped></style>
