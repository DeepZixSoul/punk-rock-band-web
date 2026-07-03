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
            class="integrante-img loading"
            loading="lazy"
            v-img-load
          />
          <h3 class="integrante-nombre">
            DANI MESTRE <span class="rol">(BATERÍA)</span>
          </h3>
          <p>
            A la batería tenemos a Dani: es dulce y simpático, pero peligroso en
            las distancias cortas, como el SIDA. Toca la batería mientras sonríe
            porque según él “es feliz”….qué desagradable. Nunca le pidas que te
            guarde unas gafas de sol, a menos que le hayas perdido el aprecio a
            tus córneas. Por alguna razón desconocida, odia los flanes.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/mendoza.webp"
            alt="Foto de Mendonça, guitarra de Gayola"
            class="integrante-img loading"
            loading="lazy"
            v-img-load
          />
          <h3 class="integrante-nombre">
            MENDONÇA <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            En una de las guitarras tenemos al Mendosa, un individuo calvo
            carente de melena que toca la guitarra rítmica (o eso dice él); ya
            que sus verdaderas pasiones son los carajillos y trasladar pelo de
            su cabeza directamente hacia su culo. Sigue jodido por la muerte de
            la peseta 25 años después.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/nacho.webp"
            alt="Nacho Brökoly, voz de Gayola punk rock en Alicante"
            class="integrante-img loading"
            loading="lazy"
            v-img-load
          />
          <h3 class="integrante-nombre">
            NACHO “BRÖKOLY” <span class="rol">(VOZ)</span>
          </h3>
          <p>
            Nuestro frontman es un apolíneo bastardo
            de cuerpo pétreo con solo un 10% de grasa corporal, un invierno o
            una mala brisa se lo lleva por delante. Antisemita, iconoclasta y
            tremendamente atractivo. Cantar no canta muy bien pero a quién le
            importa, mira esos bíceps. Tiene grandes ideas de negocio que son
            rechazadas de manera sistemática por los que dicen ser sus amigos.
            Abrir un bar en Roquetas especializado en rebozados de marisco
            llamado “Croquetas de Mar”…te cansas de ganar dinero, vamos.
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/tupa.webp"
            loading="lazy"
            v-img-load
            alt="Alex Tupá, bajo de Gayola punk rock en Alicante"
            class="integrante-img loading"
          />
          <h3 class="integrante-nombre">
            ALEX “TUPÁ”<span class="rol">(BAJO)</span>
          </h3>
          <p>
            Al bajo tenemos a Álex (o Tupa, da igual, es bajista) un imbécil
            secular de categorías bíblicas que toca una guitarra con pocas y
            gruesas cuerdas que suenan igual que un árbol al caer en mitad de un
            bosque sin nadie en sus inmediaciaciones (es un proverbio Chino).
            Dice ser el inventor del refrán "cuando el río suena, agua lleva",
            ¿pero qué sabrá de ríos siendo de Elche?
          </p>
        </div>
        <div class="integrante">
          <img
            src="/miembros/ian.webp"
            loading="lazy"
            v-img-load
            alt="Ian Bombilla de Cuero, guitarra de Gayola punk rock en Alicante"
            class="integrante-img loading"
          />
          <h3 class="integrante-nombre">
            IAN BANGHER <span class="rol">(GUITARRA)</span>
          </h3>
          <p>
            En la otra guitarra tenemos a Ian, argentino con nombre
            inglés...tremendo vendepatrias. Joven innovador con una mente
            preclara, probable futuro especulador inmobiliario sin escrúpulos,
            el tiempo dirá. Toca la guitarra muy bien, el hijo de puta. La
            buena, la solista, no como el calvo ese mencionado anteriormente.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Biografía | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.'
    },
    {
      name: 'keywords',
      content: 'gayola, biografía, punk, rock, grupo musical, integrantes, Alicante, Aspe, Elda, Orihuela, Murcia, historia, banda, España'
    },
    {
      property: 'og:title',
      content: 'Biografía | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Conoce la historia de Gayola, grupo de punk rock con base en Aspe (Alicante). Integrantes, trayectoria y espíritu rebelde.'
    }
  ]
});
</script>

<style src="./Biografia.css" scoped></style>
