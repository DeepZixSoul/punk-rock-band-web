<template>
  <div class="contacto-bg">
    <h1 class="contacto-title">Contacto</h1>
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

    <form class="contacto-form" @submit.prevent="enviarFormulario" novalidate>
      <h2 class="contacto-form-title">O escríbenos directamente</h2>
      <div class="form-grupo">
        <label for="form-nombre" class="form-label">Nombre</label>
        <input
          id="form-nombre"
          v-model="form.nombre"
          type="text"
          class="form-input"
          :class="{ 'form-error': errores.nombre }"
          placeholder="Tu nombre"
          required
        />
        <span v-if="errores.nombre" class="form-error-msg">{{ errores.nombre }}</span>
      </div>
      <div class="form-grupo">
        <label for="form-email" class="form-label">Email</label>
        <input
          id="form-email"
          v-model="form.email"
          type="email"
          class="form-input"
          :class="{ 'form-error': errores.email }"
          placeholder="tu@email.com"
          required
        />
        <span v-if="errores.email" class="form-error-msg">{{ errores.email }}</span>
      </div>
      <div class="form-grupo">
        <label for="form-asunto" class="form-label">Asunto</label>
        <select
          id="form-asunto"
          v-model="form.asunto"
          class="form-input form-select"
          :class="{ 'form-error': errores.asunto }"
          required
        >
          <option value="" disabled>Selecciona un asunto</option>
          <option value="Contratación">Contratación</option>
          <option value="Prensa">Prensa</option>
          <option value="Colaboración">Colaboración</option>
          <option value="Merchandising">Merchandising</option>
          <option value="Otro">Otro</option>
        </select>
        <span v-if="errores.asunto" class="form-error-msg">{{ errores.asunto }}</span>
      </div>
      <div class="form-grupo">
        <label for="form-mensaje" class="form-label">Mensaje</label>
        <textarea
          id="form-mensaje"
          v-model="form.mensaje"
          class="form-input form-textarea"
          :class="{ 'form-error': errores.mensaje }"
          placeholder="Cuéntanos lo que quieras..."
          rows="5"
          required
        ></textarea>
        <span v-if="errores.mensaje" class="form-error-msg">{{ errores.mensaje }}</span>
      </div>
      <button type="submit" class="form-btn" :disabled="enviando">
        {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
      </button>
      <p v-if="exito" class="form-exito">Mensaje enviado correctamente. Te responderemos pronto.</p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
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

const form = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
});

const errores = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
});

const enviando = ref(false);
const exito = ref(false);

function validar() {
  let valido = true;
  errores.nombre = '';
  errores.email = '';
  errores.asunto = '';
  errores.mensaje = '';

  if (!form.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio';
    valido = false;
  }
  if (!form.email.trim()) {
    errores.email = 'El email es obligatorio';
    valido = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errores.email = 'Email no válido';
    valido = false;
  }
  if (!form.asunto) {
    errores.asunto = 'Selecciona un asunto';
    valido = false;
  }
  if (!form.mensaje.trim()) {
    errores.mensaje = 'El mensaje no puede estar vacío';
    valido = false;
  }

  return valido;
}

function enviarFormulario() {
  if (!validar()) return;

  enviando.value = true;
  exito.value = false;

  const asunto = encodeURIComponent(`Contacto Gayola - ${form.asunto}`);
  const cuerpo = encodeURIComponent(
    `Nombre: ${form.nombre}\nEmail: ${form.email}\nAsunto: ${form.asunto}\n\n${form.mensaje}`
  );

  window.location.href = `mailto:contacto@gayola.com?subject=${asunto}&body=${cuerpo}`;

  setTimeout(() => {
    enviando.value = false;
    exito.value = true;
    form.nombre = '';
    form.email = '';
    form.asunto = '';
    form.mensaje = '';
  }, 500);
}
</script>

<style src="./Contacto.css" scoped></style>
