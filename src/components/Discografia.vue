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
  background: #181818;
  padding: 2em 1em;
  min-height: 60vh;
  box-shadow: 0 0 40px #ff99ff44;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
  font-family: "Roboto", Arial, sans-serif;
}
.discografia-title {
  color: #ff99ff;
  padding-top: 1em;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1.2em;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  background: rgba(24,24,24,0.85);
  border-radius: 0.4em;
  padding: 0.5em 1.5em 0.3em 1.5em;
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
  box-sizing: border-box;
}
.disco-container.invertido {
  flex-direction: row-reverse;
}
.disco-info {
  flex: 1;
  color: #fff;
  font-family: "Roboto", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em 1em;
  box-sizing: border-box;
}
.disco-titulo {
  font-family: "Montserrat", Arial, sans-serif;
  color: #ff99ff;
  font-size: 1.5em;
  margin-bottom: 0.7em;
}
.disco-descripcion {
  font-size: 1.15em;
  line-height: 1.7;
  letter-spacing: 0.5px;
  margin-bottom: 1.2em;
  padding: 0.3em 0.2em;
  font-family: "Roboto", Arial, sans-serif;
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
  .discografia-bg {
    overflow-x: hidden;
    width: 100vw;
    box-sizing: border-box;
  }
  .disco-container,
  .disco-container.invertido {
    flex-direction: column;
    gap: 2em;
    padding: 1em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .disco-info {
    padding: 0.5em 0.3em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .portada-img {
    width: 220px;
  }
  .discografia-title {
    font-size: 1.3em;
    margin-bottom: 1em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
}
@media (max-width: 600px) {
  .discografia-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
    overflow-x: hidden;
    width: 100vw;
    box-sizing: border-box;
  }
  .disco-container {
    padding: 0.7em;
    margin-bottom: 2em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .disco-info {
    padding: 0.5em 0.1em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .portada-img {
    width: 98vw;
    max-width: 98vw;
  }
}
</style>
