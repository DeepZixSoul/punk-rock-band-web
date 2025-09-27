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
            src="/miembros/bateria.webp"
            alt="Foto de Dani Mestre, batería de Gayola"
            class="integrante-img"
            loading="lazy"
          />
          <h3 class="integrante-nombre">
            DANI MESTRE <span class="rol">(BATERÍA)</span>
          </h3>
          <p>
            El metrónomo de Gayola, pero con mala leche. Dani no solo marca el
            pulso, lo revienta. Con cada golpe mete gasolina al fuego y levanta
            al personal del suelo. Preciso como un reloj y bruto como un
            martillo, su pegada mantiene a la banda en pie y al público con el
            cuello a punto de partirse. Sin él, primo, no hay terremoto.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/mendoza.webp"
            alt="Foto de Mendonça, guitarra de Gayola"
            class="integrante-img"
            loading="lazy"
          />
          <h3 class="integrante-nombre">
            MENDONÇA <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            El cirujano de las seis cuerdas, capaz de hacer riffs que cortan más
            que un cuchillo jamonero. Mendonça no solo da fuerza y carácter,
            también da miedo si te acercas demasiado al ampli. Dice que practica
            en casa, pero los vecinos ya han pedido asilo político.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/nacho.webp"
            alt="Nacho Brökoly, voz de Gayola punk rock en Alicante"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            NACHO “BRÖKOLY” <span class="rol">(VOZ)</span>
          </h3>
          <p>
            El grito que pone nombre a Gayola. Nacho no canta, escupe verdades
            con carisma y mala baba. Su voz es la alarma de incendio de
            cualquier garito y su apodo viene porque, igual que el brócoli, no a
            todo el mundo le gusta, pero es necesario y jode dejarlo en el
            plato.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/tupa.webp"
            alt="Alex Tupá, bajo de Gayola punk rock en Alicante"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            ALEX “TUPÁ”<span class="rol">(BAJO)</span>
          </h3>
          <p>
            El bajo de Alex es el groove que emite el cosmos. Es el encargado de
            que todo tiemble, desde el escenario hasta el corazón de tu abuela.
            Su presencia escénica es tan potente que más de una vez ha hecho
            sombra a los focos… y se dice que le enseñó a sumar a Jordi Hurtado
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/ian.webp"
            alt="Ian Bombilla de Cuero, guitarra de Gayola punk rock en Alicante"
            class="integrante-img"
          />
          <h3 class="integrante-nombre">
            IAN "BOMBILLA DE CUERO" <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            Con un mate de dinamita en una mano y domando la guitarra con los
            pies, Ian se mueve entre el caos y la genialidad. Su creatividad es
            tan salvaje que le brotó pelo… y eso que era calvo. Suena brutal.
            Entre cuero y bombillas, mete la chispa que convierte cada tema en
            un cortocircuito punk con regusto a pólvora.
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500&display=swap");
.biografia-title {
  padding-top: 2em;
  color: var(--color-principal, #ff99ff);
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  font-size: 2.4em;
  text-align: center;
  letter-spacing: 1px;
}

.biografia-bg {
  background: var(--color-bg, #181818);
  padding: 2em 0.5em;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
  font-family: var(--font-principal, 'Roboto', Arial, sans-serif);
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
  color: var(--color-text, #fff);
  font-size: 1.2em;
  font-family: var(--font-principal, 'Roboto', Arial, sans-serif);
  text-align: justify;
  letter-spacing: 0.5px;
}
.integrantes-section {
  width: 100%;
  max-width: 1200px;
  background: var(--color-bg, #181818);
  box-shadow: 0 0 20px var(--color-shadow, #ff99ff44);
  padding: 1.2em 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3em;
  box-sizing: border-box;
}
.integrantes-title {
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  color: var(--color-principal, #ff99ff);
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
  background: var(--color-card-bg, #222);
  box-shadow: 0 0 10px var(--color-shadow, #ff99ff44);
  padding: 0.7em 0.7em 1.2em 0.7em;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
  border-radius: 0.3em;
}
.integrante:hover {
  box-shadow: 0 0 20px var(--color-shadow-hover, #ff99ff88);
  transform: translateY(-4px) scale(1.03);
}
.integrante-img {
  width: 100%;
  max-width: 140px;
  height: 220px;
  object-fit: contain;
  border-radius: 0.3em;
  box-shadow: 0 0 8px var(--color-shadow, #ff99ff44);
  margin-bottom: 0.7em;
  background: var(--color-bg, #181818);
}
.integrante-nombre {
  width: 100%;
  background: rgba(255, 153, 255, 0.12);
  color: var(--color-text, #fff);
  font-size: 1em;
  font-family: var(--font-titulos, 'Montserrat', Arial, sans-serif);
  letter-spacing: 0.5px;
  margin: 0 0 0.3em 0;
  padding: 0.3em 0.1em;
  border-radius: 0.2em;
  text-align: center;
  box-shadow: 0 0 6px var(--color-shadow-light, #ff99ff22);
}
.rol {
  display: block;
  white-space: pre-line;
  font-size: 0.9em;
  color: var(--color-principal, #ff99ff);
  font-weight: bold;
  margin-left: 0.3em;
}
.integrante p {
  margin: 0.3em 0 0 0;
  color: #eee;
  font-size: 0.95em;
  font-family: var(--font-principal, 'Roboto', Arial, sans-serif);
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
  .biografia-bg {
    padding: 1.2em 0.3em;
    overflow-x: hidden;
    width: 100vw;
    box-sizing: border-box;
  }
  .biografia-title{
    font-size: 2em;
    padding: 0.3em 0.5em 0.2em 0.5em;
  }
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
