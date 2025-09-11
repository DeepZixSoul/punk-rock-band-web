<template>
  <div class="discografia-bg">
    <h2 class="discografia-title">Discografía</h2>
    <div
      v-for="(disco, i) in discos"
      :key="disco.titulo"
      class="disco-container"
      :class="{ invertido: i % 2 !== 0 }"
    >
      <div class="disco-info">
        <h3 class="disco-titulo">{{ disco.titulo }}</h3>
        <p class="disco-descripcion">{{ disco.descripcion }}</p>
        <ul class="disco-canciones">
          <li v-for="(cancion, idx) in disco.canciones" :key="idx">
            {{ cancion }}
          </li>
        </ul>
        <span class="disco-fecha">{{ disco.fecha }}</span>
      </div>
      <div class="disco-portada">
        <img
          :src="disco.portada"
          :alt="`Portada de ${disco.titulo}`"
          class="portada-img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const discos = [
  {
    titulo: "Aterriza Como Puedas",
    descripcion:
      "Este disco recoge la esencia más pura de Gayola: letras directas, energía punk y una producción cuidada. Representa la evolución de la banda y su compromiso con el punk-rock nacional.",
    canciones: ["Canción 1", "Canción 2", "Canción 3"],
    fecha: "2025",
    portada: "/discografia/aterriza-como-puedas.png",
  },
  {
    titulo: "Segundo Asalto",
    descripcion:
      "El segundo disco de Gayola explora nuevos sonidos sin perder la actitud punk. Letras más personales y colaboraciones especiales.",
    canciones: ["Tema A", "Tema B", "Tema C"],
    fecha: "2023",
    portada: "/discografia/aterriza-como-puedas.png",
  },
  {
    titulo: "Directo en La Coca",
    descripcion:
      "Grabado en vivo en el barrio de La Coca, este álbum captura la energía y la conexión con el público.",
    canciones: ["Intro", "En Vivo", "Final"],
    fecha: "2022",
    portada: "/discografia/aterriza-como-puedas.png",
  },
  // Añade más discos aquí
];
</script>

<style scoped>
.discografia-bg {
  background: rgba(20, 20, 20, 0.9);
  padding: 2em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.discografia-title {
  color: #ff99ff;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1.5em;
  letter-spacing: 2px;
  text-align: center;
}
.disco-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3em;
  width: 100%;
  max-width: 900px;
  margin-bottom: 3em;
  background: rgba(20, 20, 20, 0.85);
  border-radius: 1em;
  box-shadow: 0 0 20px #ff99ff44;
  padding: 2em;
  transition: flex-direction 0.3s;
}
.disco-container.invertido {
  flex-direction: row-reverse;
}
.disco-info {
  flex: 1;
  color: #fff;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.disco-titulo {
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  color: #ff99ff;
  font-size: 1.5em;
  margin-bottom: 0.7em;
}
.disco-descripcion {
  font-size: 1.1em;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-bottom: 1em;
}
.disco-canciones {
  margin: 0 0 1em 0;
  padding-left: 1.2em;
  color: #ff99ff;
  font-size: 1em;
}
.disco-fecha {
  font-size: 0.95em;
  color: #ff99ff;
  font-weight: bold;
  margin-top: 0.5em;
}
.disco-portada {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.portada-img {
  width: 320px;
  max-width: 100%;
  border-radius: 1em;
  box-shadow: 0 0 20px #ff99ff44;
  border: 3px solid #ff99ff55;
  background: #181818;
  object-fit: contain;
}
@media (max-width: 900px) {
  .disco-container,
  .disco-container.invertido {
    flex-direction: column;
    gap: 2em;
    padding: 1em;
  }
  .portada-img {
    width: 220px;
  }
  .discografia-title {
    font-size: 1.3em;
    margin-bottom: 1em;
  }
}
@media (max-width: 600px) {
  .discografia-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .disco-container {
    padding: 0.7em;
    margin-bottom: 2em;
  }
  .portada-img {
    width: 98vw;
    max-width: 98vw;
  }
}
</style>
