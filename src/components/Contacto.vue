<template>
  <div class="contacto-bg">
    <h2 class="contacto-title">Contacto</h2>
    <p class="contacto-bienvenida">
      ¡Gracias por tu interés en Gayola! Si quieres contratarnos, colaborar, comprar merchandising o simplemente decirnos algo, aquí tienes todas las formas de contactar con nosotros.
    </p>
    <div class="contacto-info">
      <div class="contacto-item">
        <span class="contacto-label">Email:</span>
        <a href="mailto:contacto@gayola.com" class="contacto-link">contacto@gayola.com</a>
      </div>
      <div class="contacto-item">
        <span class="contacto-label">Teléfono:</span>
        <a href="tel:+3461234567833" class="contacto-link">+34 612 34 56 7833</a>
      </div>
      <div class="contacto-item">
        <span class="contacto-label">Representante:</span>
        <a href="https://www.instagram.com/juan_el_avispero/" target="_blank" class="contacto-link">@juan_el_avispero</a>
      </div>
      <div class="contacto-item">
        <span class="contacto-label">Redes sociales:</span>
        <div class="contacto-redes">
          <a href="https://www.instagram.com/gayolaseriopunk" target="_blank" class="social-link">
            <img src="/public/instagram.svg" alt="Instagram" class="social-icon" />
          </a>
          <a href="https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9" target="_blank" class="social-link">
            <img src="/public/spotify.svg" alt="Spotify" class="social-icon" />
          </a>
          <a href="https://www.facebook.com/Gayolaseriopunk/" target="_blank" class="social-link">
            <img src="/public/facebook.png" alt="Facebook" class="social-icon" />
          </a>
          <a href="https://www.youtube.com/@gayolaseriopunk" target="_blank" class="social-link">
            <img src="/public/youtube.png" alt="YouTube" class="social-icon" />
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
// No es necesario por ahora
</script>

<style scoped>
.contacto-bg {
  background: #111;
  padding: 2em 1em;
  border-radius: 1em;
  box-shadow: 0 0 40px #000a;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contacto-title {
  color: #ff99ff;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 2em;
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-align: center;
}
.contacto-bienvenida {
  color: #fff;
  font-size: 1.1em;
  margin-bottom: 2em;
  text-align: center;
  max-width: 700px;
}
.contacto-info {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: flex-start;
}
.contacto-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.contacto-label {
  color: #ff99ff;
  font-weight: bold;
  font-size: 1.1em;
}
.contacto-link {
  color: #fff;
  text-decoration: underline;
  font-size: 1em;
  word-break: break-all;
}
.contacto-redes {
  display: flex;
  gap: 1.2em;
  margin-top: 0.3em;
}
.social-icon {
  width: 2em;
  height: 2em;
  filter: grayscale(0.2) brightness(1.2);
  transition: filter 0.2s;
}
.social-icon:hover {
  filter: drop-shadow(0 0 8px #ff99ff) brightness(1.5);
}
.contacto-btn {
  background: #ff99ff;
  color: #222;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  padding: 0.7em 2em;
  cursor: pointer;
  box-shadow: 0 0 8px #ff99ff88;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5em;
  transition: background 0.2s;
}
.contacto-btn:hover {
  background: #fff;
  color: #ff99ff;
}

/* Responsive */
@media (max-width: 900px) {
  .contacto-info {
    max-width: 98vw;
    gap: 1em;
  }
  .contacto-bienvenida {
    font-size: 1em;
    margin-bottom: 1em;
  }
}
@media (max-width: 600px) {
  .contacto-bg {
    padding: 1em 0.2em;
    border-radius: 0.5em;
  }
  .contacto-title {
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  .contacto-info {
    gap: 0.7em;
  }
  .contacto-btn {
    padding: 0.5em 1em;
    font-size: 0.95em;
  }
  .social-icon {
    width: 1.5em;
    height: 1.5em;
  }
}
</style>

