<template>
  <!-- <div class="footer-tagline">
    "Música que rebela, corazones que resuenan" 🎸
  </div> -->

  <footer class="footer">
    <div class="footer-container">
      <!-- Sección 1: Enlaces Rápidos -->
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li v-for="link in footerData.quickLinks" :key="link.href">
            <router-link :to="link.href">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Sección 2: Soporte -->
      <!-- <div class="footer-section">
        <h3>Soporte</h3>
        <ul>
          <li v-for="link in footerData.support" :key="link.href">
            <router-link :to="link.href">{{ link.label }}</router-link>
          </li>
        </ul>
      </div> -->

      <!-- Sección 3: Contacto -->
      <div class="footer-section">
        <h3>Contáctanos</h3>
        <div class="footer-contact">
          <span>📧</span>
          <a :href="`mailto:${footerData.contact.email}`">{{ footerData.contact.email }}</a>
        </div>
        <div class="footer-contact">
          <span>☎️</span>
          <span>{{ footerData.contact.phone }}</span>
        </div>
      </div>

      <!-- Sección 4: Sponsors -->
      <!-- <div class="footer-section">
        <h3>Sponsors</h3>
        <ul>
          <li v-for="sponsor in footerData.sponsors" :key="sponsor.name">
            <a :href="sponsor.url" target="_blank" rel="noopener noreferrer">
              {{ sponsor.name }}
            </a>
          </li>
        </ul>
      </div> -->

      <!-- Footer Bottom: Copyright - Alineado a la derecha -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; 2025 Gayola. Todos los derechos reservados.
        </p>
        <p class="footer-credit">
          Diseñado y desarrollado por
          <a href="#" title="Nuestro equipo">Equipo Gayola</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerLogic from "./Footer.js";

const footerData = footerLogic();
</script>

<style src="./Footer.css" scoped></style>
