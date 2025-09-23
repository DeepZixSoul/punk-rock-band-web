<template>
  <div class="contacto-bg">
    <h2 class="contacto-title">Contacto</h2>
    <p class="contacto-bienvenida">
      ¡Gracias por tu interés en Gayola! Si quieres contratarnos, colaborar,
      comprar merchandising o simplemente decirnos algo, aquí tienes todas las
      formas de contactar con nosotros.
    </p>
    <div class="contacto-info">
      <!-- <div class="contacto-item">
        <span class="contacto-label">Email:</span>
        <a href="mailto:contacto@gayola.com" class="contacto-link"
          >contacto@gayola.com</a
        >
      </div> -->
      <!-- <div class="contacto-item">
        <span class="contacto-label">Teléfono:</span>
        <a href="tel:+3461234567833" class="contacto-link"
          >+34 612 34 56 7833</a
        >
      </div> -->
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
              src="/public/logos/avispero-logo.webp"
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
              src="/public/redes-sociales/instagram.svg"
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
            <img src="/public/redes-sociales/spotify.svg" alt="Spotify" class="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/Gayolaseriopunk/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <img
              src="/public/redes-sociales/facebook.webp"
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
            <img src="/public/redes-sociales/youtube.webp" alt="YouTube" class="social-icon social-icon-youtube" />
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
import { useHead } from "@vueuse/head";
useHead({
  title: "Contacto | Gayola - Punk Rock desde Alicante",
  meta: [
    {
      name: "description",
      content:
        "Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.",
    },
    {
      name: "keywords",
      content:
        "gayola, contacto, contrataciones, prensa, colaboraciones, punk, rock, Alicante, banda, España, email",
    },
    {
      property: "og:title",
      content: "Contacto | Gayola - Punk Rock desde Alicante",
    },
    {
      property: "og:description",
      content:
        "Contacta con Gayola para contrataciones, prensa, colaboraciones o cualquier consulta.",
    },
  ],
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.contacto-bg {
  max-width: 700px;
  margin: 2.5em auto 2em auto;
  padding: 2.5em 2em 2em 2em;
  background: var(--color-bg, #222);
  color: var(--color-text, #fff);
  font-family: "Roboto", Arial, sans-serif;
}
.contacto-title {
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.2em;
  font-weight: 700;
  color: var(--color-accent, #ff99ff);
  margin-bottom: 0.5em;
  text-align: center;
  letter-spacing: 1px;
}
.contacto-bienvenida {
  font-size: 1.1em;
  margin-bottom: 2em;
  text-align: center;
  color: var(--color-text, #fff);
}
.contacto-info {
  box-shadow: 0 0 25px #ff99ff33;
  border-radius: 1.2em;

  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
.contacto-item {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  background: var(--color-bg-alt, #181818);
  border-radius: 0.7em;
  padding: 1em 1.2em;
  /* box-shadow: 0 0 12px #ff99ff22; */
}
.contacto-label {
  font-weight: 500;
  color: var(--color-accent, #ff99ff);
  font-size: 1em;
}
.contacto-link {
  color: var(--color-link, #ff99ff);
  font-size: 1.05em;
  word-break: break-all;
  transition: color 0.2s;
}
.contacto-link:hover {
  color: #fff;
}

.contacto-btn {
  display: inline-block;
  padding: 0.7em 1.5em;
  background: var(--color-accent, #ff99ff);
  color: #181818;
  font-weight: 700;
  border: none;
  border-radius: 0.7em;
  font-size: 1.1em;
  box-shadow: 0 0 12px #ff99ff44;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.contacto-btn:hover {
  background: #fff;
  color: var(--color-accent, #ff99ff);
}
/* Redes sociales mejoradas */
.contacto-redes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 1.1em;
  margin-top: 0.5em;
  padding: 0.2em 0;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.7em;
  height: 2.7em;
  background: #232323;
  border: 2px solid #ff99ff44;
  box-shadow: 0 2px 12px #ff99ff22;
  transition: background 0.2s, box-shadow 0.2s, border 0.2s;
  outline: none;
}

.social-link:focus {
  border: 2px solid var(--color-accent, #ff99ff);
  box-shadow: 0 0 0 2px #ff99ff88;
}
.social-link:hover {
  background: var(--color-accent, #ff99ff);
  box-shadow: 0 0 16px #ff99ff88;
  border: 2px solid #fff;
}
.social-icon {
  width: 1.6em;
  height: 1.6em;
  filter: drop-shadow(0 0 2px #ff99ff);
  transition: filter 0.2s;
}
.centrado-redes {
  justify-content: center !important;
  align-items: center !important;
}
.social-icon-youtube {
  width: 2.5em !important;
  height: 2.5em !important;
}
.avispero-representante {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.7em 0 0.2em 0;
}
.avispero-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 0.5em;
}
.social-icon-avispero {
  width: 5em;
  height: 5em;
  filter: drop-shadow(0 0 2px #ff99ff);
  transition: filter 0.2s;
  display: block;
  border-radius: 50%;
  background: #222;
  box-shadow: 0 0 12px #ff99ff44;
}
.avispero-link:hover .social-icon-avispero {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.1);
}
.avispero-user {
  color: var(--color-accent, #ff99ff);
  font-weight: 600;
  font-size: 1.1em;
  margin-top: 0.3em;
  text-align: center;
}
.social-link:hover .social-icon {
  filter: drop-shadow(0 0 6px #fff);
}


@media (max-width: 600px) {
  .contacto-bg {
    padding: 1.2em 0.5em;
    max-width: 98vw;
  }
  .contacto-title {
    font-size: 1.5em;
  }
  .contacto-item {
    padding: 0.7em 0.5em;
  }
  
  .contacto-btn {
    font-size: 1em;
    padding: 0.6em 1em;
  }
  .social-icon-avispero {
    width: 3.2em;
    height: 3.2em;
  }
  .avispero-user {
    font-size: 1em;
  }
  .social-icon-youtube {
    width: 1.7em !important;
    height: 1.7em !important;
  }
  .contacto-redes {
    gap: 0.7em;
    justify-content: center;
    padding: 0.1em 0;
  }
  .social-link {
    width: 2.4em;
    height: 2.4em;
    border-width: 1.5px;
  }
  .social-icon {
    width: 1.1em;
    height: 1.1em;
  }
}
</style>
