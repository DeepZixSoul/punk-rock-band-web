<template>
  <div class="error-boundary">
    <div v-if="hasError" class="error-container">
      <div class="error-icon" aria-hidden="true">⚠️</div>
      <h3 class="error-title">Algo salió mal</h3>
      <p class="error-message">{{ errorMessage }}</p>
      <button @click="resetError" class="error-button">Intentar de nuevo</button>
    </div>
    <slot v-else />
  </div>
</template>

<script setup>
import { ref, onErrorCaptured, provide } from 'vue';

const hasError = ref(false);
const errorMessage = ref('No se pudo cargar el contenido');

const resetError = () => {
  hasError.value = false;
  errorMessage.value = 'No se pudo cargar el contenido';
};

onErrorCaptured((err, instance, info) => {
  console.error('Error capturado:', err, info);
  
  hasError.value = true;
  
  if (err.message) {
    errorMessage.value = `Error: ${err.message}`;
  } else if (err instanceof TypeError) {
    errorMessage.value = 'Error al procesar datos';
  } else if (err instanceof ReferenceError) {
    errorMessage.value = 'Referencia no encontrada';
  }
  
  return false;
});

provide('resetError', resetError);
</script>

<style scoped>
.error-boundary {
  width: 100%;
}

.error-container {
  background: rgba(255, 102, 255, 0.1);
  border: 2px solid #ff66ff;
  border-radius: 1em;
  padding: 2em;
  margin: 2em auto;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 30px rgba(255, 102, 255, 0.2);
}

.error-icon {
  font-size: 3em;
  margin-bottom: 1em;
}

.error-title {
  color: #ff66ff;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-family: 'Montserrat', Arial, sans-serif;
}

.error-message {
  color: #fff;
  margin-bottom: 1.5em;
  line-height: 1.6;
  font-size: 1.05em;
}

.error-button {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
  color: #fff;
  border: none;
  padding: 0.7em 1.5em;
  border-radius: 0.5em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1em;
}

.error-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 102, 255, 0.4);
}

.error-button:active {
  transform: translateY(0);
}
</style>
