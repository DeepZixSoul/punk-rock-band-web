<template>
  <div class="biografia-bg">
    <h2 class="biografia-title">Biografía</h2>
    <div class="biografia-main">
      <p class="biografia-text">
        “SOMOS GAYOLA, PRIMO, NO LOS STONES” VENIDOS DESDE DISTINTOS PUNTOS DE
        LA PROVINCIA DE ALICANTE, PERO CON BASE EN EL BARRIO DE “LA COCA” DE
        ASPE, LLEGAN CON TODO A DAR UN GOLPE EN LA MESA. SUS TEMAS, DE CORTE
        AGRESIVO Y DIRECTO TANTO EN LO LÍRICO COMO EN LO INSTRUMENTAL, Y UNA
        DIVERTIDA Y ARROLLADORA PUESTA EN ESCENA, HACEN VER QUE ESTA BANDA VIENE
        HAMBRIENTA Y CON LOS DIENTES AFILADOS. PESE A SU CORTA TRAYECTORIA, YA
        HAN COMPARTIDO TABLAS CON OTROS GRANDES DEL PUNK COMO “ENVIDIA KOTXINA”,
        “KANTE PINRELICO”, “MAMÁ LADILLA” O “LA BANDA TRAPERA DEL RÍO” ENTRE
        OTROS.
      </p>
    </div>
    <div class="integrantes-section">
      <h2 class="integrantes-title">Integrantes</h2>
      <div class="integrantes-list">
        <div class="integrante">
          <img
            src="/miembros/bateria.png"
            alt="Dani Mestre"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            DANI MESTRE <span class="rol">(BATERÍA)</span>
          </h3>
          <p>
            Ritmo y potencia tras la batería, Dani marca el pulso de Gayola con
            precisión y actitud punk. Su energía en directo contagia a toda la
            banda y al público.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/guita1.png"
            alt="Mendonça"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            MENDONÇA <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            Con riffs afilados y melodías potentes, Mendonça da fuerza y
            carácter a cada tema. Su creatividad y pasión por la guitarra son
            clave en el sonido de Gayola.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/nacho.png"
            alt="Nacho Brökoly"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            NACHO “BRÖKOLY” <span class="rol">(VOZ)</span>
          </h3>
          <p>
            La voz de Nacho transmite el mensaje y la actitud rebelde que
            caracteriza a Gayola. Su carisma y fuerza vocal son el sello de la
            banda.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/tupa.png"
            alt="Alex Tupá"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            ALEX “TUPÁ” <span class="rol">(BAJO)</span>
          </h3>
          <p>
            El bajo de Alex aporta la base sólida y el groove que define el
            sonido de la banda. Su presencia escénica y su técnica hacen vibrar
            cada concierto.
          </p>
        </div>
        <div class="integrante">
          <img src="/miembros/guita2.png" alt="Jayden" class="integrante-img" />
          <h3 class="integrante-nombre">
            JAYDEN <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            Jayden complementa el muro de guitarras con creatividad y energía en
            cada acorde. Su estilo aporta frescura y dinamismo a la banda.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No es necesario por ahora
</script>

<style scoped>
/* Título de la biografía */
.biografia-title {
  padding-top: 1em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 0.7em;
  text-align: center;
  letter-spacing: 1px;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.biografia-bg {
  background: #181818;
  padding: 2em 0.5em;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: topbarFadeIn 0.7s cubic-bezier(0.77, 0, 0.18, 1);
}
.biografia-main {
  width: 100%;
  max-width: 900px;
  margin-bottom: 2em;
  background: transparent;
  box-shadow: none;
  padding: 1.2em 0.7em;
}
.biografia-text {
  color: #fff;
  font-size: 1.1em;
  font-family: "Montserrat", Arial, sans-serif;
  text-align: justify;
  letter-spacing: 0.5px;
}
.integrantes-section {
  width: 100%;
  max-width: 1200px;
  background: #181818;
  box-shadow: 0 0 20px #ff99ff44;
  padding: 1.2em 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3em;
}
.integrantes-title {
  font-family: "Montserrat", Arial, sans-serif;
  color: #ff99ff;
  font-size: 1.7em;
  margin-bottom: 0.7em;
  letter-spacing: 1px;
}
.integrantes-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.2em;
  width: 100%;
  justify-content: center;
}
.integrante {
  flex: 1 1 180px;
  min-width: 180px;
  max-width: 220px;
  background: #222;
  box-shadow: 0 0 10px #ff99ff44;
  padding: 0.7em 0.7em 1.2em 0.7em;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  border-radius: 0.3em;
}
.integrante:hover {
  box-shadow: 0 0 20px #ff99ff88;
  transform: translateY(-4px) scale(1.03);
}
.integrante-img {
  width: 100%;
  max-width: 140px;
  height: 220px;
  object-fit: contain;
  border-radius: 0.3em;
  box-shadow: 0 0 8px #ff99ff44;
  margin-bottom: 0.7em;
  background: #181818;
}
.integrante-nombre {
  width: 100%;
  background: rgba(255, 153, 255, 0.12);
  color: #fff;
  font-size: 1em;
  font-family: "Montserrat", Arial, sans-serif;
  letter-spacing: 0.5px;
  margin: 0 0 0.3em 0;
  padding: 0.3em 0.1em;
  border-radius: 0.2em;
  text-align: center;
  box-shadow: 0 0 6px #ff99ff22;
}
.rol {
  font-size: 0.9em;
  color: #ff99ff;
  font-weight: bold;
  margin-left: 0.3em;
}
.integrante p {
  margin: 0.3em 0 0 0;
  color: #eee;
  font-size: 0.95em;
  font-family: "Montserrat", Arial, sans-serif;
  text-align: left;
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
@media (max-width: 1100px) {
  .integrantes-list {
    gap: 0.7em;
  }
  .integrante-img {
    max-width: 100px;
    height: 140px;
  }
}
@media (max-width: 900px) {
  .integrantes-list {
    flex-direction: column;
    gap: 0.7em;
    align-items: center;
  }
  .integrante {
    width: 100%;
    max-width: 320px;
    align-items: center;
  }
  .integrante-img {
    max-width: 140px;
    height: 220px;
  }
}
@media (max-width: 600px) {
  .biografia-bg {
    padding: 0.7em 0.1em;
  }
  .biografia-main {
    padding: 0.7em;
  }
  .integrantes-section {
    padding: 0.7em 0.1em;
  }
  .integrante {
    max-width: 98vw;
    padding: 0.5em 0.1em 0.7em 0.1em;
  }
  .integrante-img {
    max-width: 100px;
    height: 140px;
  }
}
</style>
