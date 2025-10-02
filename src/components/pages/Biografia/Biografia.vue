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
// Importa la lógica JS desde archivo externo para mantener el componente limpio y modular
import biografiaLogic from "./Biografia.js";
biografiaLogic();
</script>

<style src="./Biografia.css" scoped></style>
