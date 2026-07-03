<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h3 class="footer-brand-name">Gayola</h3>
        <p class="footer-brand-desc">Punk Rock desde {{ footerData.location.city }}, {{ footerData.location.region }}</p>
      </div>

      <div class="footer-section">
        <h3>Enlaces</h3>
        <ul>
          <li v-for="link in footerData.links" :key="link.href">
            <router-link :to="link.href">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contacto</h3>
        <div class="footer-contact">
          <span>📧</span>
          <a :href="`mailto:${footerData.contact.email}`">{{ footerData.contact.email }}</a>
        </div>
        <div class="footer-contact">
          <span>📍</span>
          <span>{{ footerData.location.city }}, {{ footerData.location.region }}</span>
        </div>
      </div>

      <div class="footer-section footer-social">
        <h3>Síguenos</h3>
        <SocialBar />
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">
        &copy; 2026 Gayola. Todos los derechos reservados.
      </p>
      <p class="footer-credit">
        Diseñado y desarrollado por Equipo Gayola
      </p>
    </div>
  </footer>
</template>

<script setup>
import SocialBar from "../SocialBar/SocialBar.vue";
import footerLogic from "./Footer.js";

const footerData = footerLogic();
</script>

<style src="./Footer.css" scoped></style>
