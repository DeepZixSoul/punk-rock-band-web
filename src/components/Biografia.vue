<template>
  <div class="biografia-bg">
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
            src="/src/assets/miembros/bateria.png"
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
            src="/src/assets/miembros/guita1.png"
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
            src="/src/assets/miembros/nacho.png"
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
            src="/src/assets/miembros/tupa.png"
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
          <img
            src="/src/assets/miembros/guita2.png"
            alt="Jayden"
            class="integrante-img"
          />
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
.biografia-bg {
  background: #111;
  padding: 3em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.biografia-main {
  width: 100%;
  max-width: 900px;
  margin-bottom: 2em;
  background: rgba(20, 20, 20, 0.85);
  border-radius: 1em;
  box-shadow: 0 0 20px #000a;
  padding: 2em;
}
.biografia-text {
  color: #fff;
  font-size: 1.2em;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  text-align: justify;
  letter-spacing: 1px;
}
.integrantes-section {
  width: 100%;
  max-width: 1100px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 1em;
  box-shadow: 0 0 20px #ff99ff;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.integrantes-title {
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  color: #ff99ff;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
}
.integrantes-list {
  display: flex;
  flex-direction: row;
  gap: 2em;
  width: 100%;
  justify-content: space-between;
}
.integrante {
  flex: 1;
  background: #fff;
  border-radius: 0.5em;
  box-shadow: 0 0 10px #ff99ff44;
  padding: 1em 1em 2em 1em;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.integrante-img {
  width: 100%;
  height: 500px;
  max-width: 160px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.5em;
  box-shadow: 0 0 8px #222a;
  margin-bottom: 1em;
}
.integrante-nombre {
  width: 100%;
  background: rgba(255, 153, 255, 0.25);
  color: #222;
  font-size: 1.1em;
  font-family: "Permanent Marker", cursive, Arial, sans-serif;
  letter-spacing: 1px;
  margin: 0 0 0.5em 0;
  padding: 0.5em 0.2em;
  border-radius: 0.3em;
  text-align: center;
  box-shadow: 0 0 6px #ff99ff44;
}
.rol {
  font-size: 0.9em;
  color: #ff99ff;
  font-weight: bold;
  margin-left: 0.5em;
}
.integrante p {
  margin: 0.5em 0 0 0;
  color: #333;
  font-size: 0.95em;
  font-family: Arial, sans-serif;
  text-align: left;
}
@media (max-width: 1100px) {
  .integrantes-list {
    gap: 1em;
  }
  .integrante-img {
    max-width: 120px;
  }
}
@media (max-width: 900px) {
  .integrantes-list {
    flex-direction: column;
    gap: 1em;
  }
  .integrante {
    width: 100%;
    align-items: center;
  }
  .integrante-img {
    max-width: 180px;
  }
}
</style>
