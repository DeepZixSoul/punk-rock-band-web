<template>
  <div class="biografia-bg">
    <h2 class="biografia-title">Biografía</h2>
    <div class="biografia-main">
      <p class="biografia-text">
        “Somos Gayola, primo, no los Stones”. Venidos desde distintos puntos de
        la provincia de Alicante, pero con base en el barrio de “La Coca” de
        Aspe, llegan con todo a dar un golpe en la mesa. Sus temas, de corte
        agresivo y directo tanto en lo lírico como en lo instrumental, y una
        divertida y arrolladora puesta en escena, hacen ver que esta banda viene
        hambrienta y con los dientes afilados. Pese a su corta trayectoria, ya
        han compartido tablas con otros grandes del punk como “Envidia Kotxina”,
        “Kante Pinrelico”, “Mamá Ladilla” o “La Banda Trapera del Río” entre
        otros.
      </p>
    </div>
    <div class="integrantes-section">
      <h2 class="integrantes-title">Integrantes</h2>
      <div class="integrantes-list">
        <div class="integrante">
          <img
            src="/miembros/bateria.png"
            alt="Dani Mestre, batería de Gayola punk rock en Alicante"
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
            alt="Mendonça, guitarra de Gayola punk rock en Alicante"
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
            alt="Nacho Brökoly, voz de Gayola punk rock en Alicante"
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
            alt="Alex Tupá, bajo de Gayola punk rock en Alicante"
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
            src="/miembros/ian.jpeg"
            alt="Ian Bombilla de Cuero, guitarra de Gayola punk rock en Alicante"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            IAN "BOMBILLA DE CUERO" <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            Ian complementa el muro de guitarras con creatividad y energía en
            cada acorde. Su estilo aporta frescura y dinamismo a la banda.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
useHead({
  title: "Biografía | Gayola - Punk Rock desde Alicante",
  meta: [
    {
      name: "description",
      content:
        "Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.",
    },
    {
      name: "keywords",
      content:
        "gayola, biografía, punk, rock, grupo musical, integrantes, Alicante, Aspe, Elda, Orihuela, Murcia, historia, banda, España",
    },
    {
      property: "og:title",
      content: "Biografía | Gayola - Punk Rock desde Alicante",
    },
    {
      property: "og:description",
      content:
        "Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.",
    },
  ],
});
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");
/* Título de la biografía */
.biografia-title {
  padding-top: 2em;
  color: #ff99ff;
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 0.7em;
  text-align: center;
  letter-spacing: 1px;
}

.biografia-bg {
  background: #181818;
  padding: 2em 0.5em;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
  font-family: "Roboto", Arial, sans-serif;
}
.biografia-main {
  width: 100%;
  max-width: 900px;
  margin-bottom: 2em;
  background: transparent;
  box-shadow: none;
  padding: 1.2em 0.7em;
  box-sizing: border-box;
}
.biografia-text {
  color: #fff;
  font-size: 1.2em;
  font-family: "Roboto", Arial, sans-serif;
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
  box-sizing: border-box;
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
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
}
@media (max-width: 1100px) {
  .integrantes-list {
    gap: 1.2em;
  }
  .integrante-img {
    max-width: 110px;
    height: 160px;
  }
  .biografia-main,
  .integrantes-section {
    padding: 2em 1em;
  }
}

@media (max-width: 900px) {
  .integrantes-list {
    flex-direction: column;
    gap: 1.2em;
    align-items: center;
  }
  .integrante {
    width: 100%;
    max-width: 340px;
    align-items: center;
    padding: 1.2em 0.7em 1.5em 0.7em;
  }
  .integrante-img {
    max-width: 150px;
    height: 230px;
  }
  .biografia-main,
  .integrantes-section {
    padding: 2em 1em;
  }
}

@media (max-width: 600px) {
  .biografia-bg {
    padding: 1.2em 0.3em;
    overflow-x: hidden;
    width: 100vw;
    box-sizing: border-box;
  }
  .biografia-main {
    padding: 1.2em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .integrantes-section {
    padding: 1.2em 0.3em;
    max-width: 100vw;
    box-sizing: border-box;
  }
  .integrante {
    max-width: 98vw;
    padding: 1em 0.3em 1.2em 0.3em;
    box-sizing: border-box;
  }
  .integrante-img {
    max-width: 120px;
    height: 170px;
  }
  .biografia-title,
  .integrantes-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
  .biografia-text {
    padding-right: 0.5em;
    padding-left: 0.5em;
    font-size: 0.85em;
    line-height: 1.5;
  }
  .integrante p {
    font-size: 0.85em;
    line-height: 1.5;
  }
}
</style>
