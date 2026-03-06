import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import './styles/global.css';
import './styles/variables.css';
import { preloadCriticalImages } from './utils/performanceOptimizations.js';

const app = createApp(App);
const head = createHead();

// Preload critical images for above-the-fold content
preloadCriticalImages([
  '/src/assets/logo.webp',
  '/src/assets/grupo.webp'
]);

app.use(head);
app.use(router);
app.mount('#app');
