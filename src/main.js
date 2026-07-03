import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import './styles/global.css';
import './styles/variables.css';
import logoUrl from '/src/assets/logo.webp';
import grupoUrl from '/src/assets/grupo.webp';
import { preloadCriticalImages } from './utils/performanceOptimizations.js';
import { imageLoadDirective } from './utils/imageDirective.js';

const app = createApp(App);
const head = createHead();

preloadCriticalImages([logoUrl, grupoUrl]);

app.use(head);
app.use(router);
app.directive('img-load', imageLoadDirective);
app.mount('#app');
