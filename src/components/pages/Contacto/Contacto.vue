<template>
  <div class="contacto-bg">
    <h2 class="contacto-title">Contacto</h2>
    <p class="contacto-bienvenida">
      ¡Gracias por tu interés en Gayola! Si quieres contratarnos, colaborar,
      comprar merchandising o simplemente decirnos algo, aquí tienes todas las
      formas de contactar con nosotros.
    </p>
    <div class="contacto-info">
      <div class="contacto-item">
        <span class="contacto-label">Representante:</span>
        <div class="avispero-representante">
          <a
            href="https://www.instagram.com/juan_el_avispero/"
            target="_blank"
            rel="noopener noreferrer"
            class="avispero-link"
          >
            <img
              src="/logos/avispero-logo.webp"
              alt="Logo representante Juan El Avispero"
              class="social-icon-avispero"
            />
            <span class="avispero-user">@juan_el_avispero</span>
          </a>
        </div>
      </div>
      <div class="contacto-item">
        <span class="contacto-label">Redes sociales:</span>
  <div class="contacto-redes centrado-redes">
          <a
            href="https://www.instagram.com/gayolaseriopunk"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <img
              src="/redes-sociales/instagram.svg"
              alt="Instagram"
              class="social-icon"
            />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <img src="/redes-sociales/spotify.svg" alt="Spotify" class="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/Gayolaseriopunk/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <img
              src="/redes-sociales/facebook.webp"
              alt="Facebook"
              class="social-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/@gayolaseriopunk"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link youtube-link"
          >
            <img src="/redes-sociales/youtube.webp" alt="YouTube" class="social-icon social-icon-youtube" />
          </a>
        </div>
      </div>
      <div class="contacto-item">
        <span class="contacto-label">Enviar email directo:</span>
        <a
          class="contacto-btn"
          href="mailto:contacto@gayola.com?subject=Contacto%20Gayola&body=Hola%2C%20me%20gustaría%20ponerme%20en%20contacto%20con%20vosotros..."
        >
          Escribir email
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Contacto | Gayola - Punk Rock desde Alicante',
  meta: [
    {
      name: 'description',
      content: 'Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.'
    },
    {
      name: 'keywords',
      content: 'gayola, contacto, contrataciones, prensa, colaboraciones, punk, rock, Alicante, banda, España, email'
    },
    {
      property: 'og:title',
      content: 'Contacto | Gayola - Punk Rock desde Alicante'
    },
    {
      property: 'og:description',
      content: 'Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.'
    }
  ]
});
</script>

<style src="./Contacto.css" scoped></style>
