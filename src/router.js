import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

// Lazy load all page components for better code splitting
const Inicio = defineAsyncComponent(() => import('./components/pages/Inicio/Inicio.vue'));
const Biografia = defineAsyncComponent(() => import('./components/pages/Biografia/Biografia.vue'));
const Conciertos = defineAsyncComponent(() => import('./components/pages/Conciertos/Conciertos.vue'));
const Discografia = defineAsyncComponent(() => import('./components/pages/Discografia/Discografia.vue'));
const Galeria = defineAsyncComponent(() => import('./components/pages/Galeria/Galeria.vue'));
const Tienda = defineAsyncComponent(() => import('./components/pages/Tienda/Tienda.vue'));
const Videos = defineAsyncComponent(() => import('./components/pages/Videos/Videos.vue'));
const Contacto = defineAsyncComponent(() => import('./components/pages/Contacto/Contacto.vue'));

const routes = [
  { path: '/', component: Inicio },
  { path: '/biografia', component: Biografia },
  { path: '/conciertos', component: Conciertos },
  { path: '/discografia', component: Discografia },
  { path: '/galeria', component: Galeria },
  { path: '/tienda', component: Tienda },
  { path: '/videos', component: Videos },
  { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
    return false;
  }
});

export default router;
