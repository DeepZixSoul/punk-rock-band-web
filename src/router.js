import { createRouter, createWebHistory } from 'vue-router';

const Inicio = () => import('./components/pages/Inicio/Inicio.vue');
const Biografia = () => import('./components/pages/Biografia/Biografia.vue');
const Conciertos = () => import('./components/pages/Conciertos/Conciertos.vue');
const Discografia = () => import('./components/pages/Discografia/Discografia.vue');
const Galeria = () => import('./components/pages/Galeria/Galeria.vue');
const Tienda = () => import('./components/pages/Tienda/Tienda.vue');
const Videos = () => import('./components/pages/Videos/Videos.vue');
const Contacto = () => import('./components/pages/Contacto/Contacto.vue');
const NoticiasPage = () => import('./components/pages/Noticias/NoticiasPage.vue');

const routes = [
  { path: '/', component: Inicio },
  { path: '/biografia', component: Biografia },
  { path: '/conciertos', component: Conciertos },
  { path: '/discografia', component: Discografia },
  { path: '/galeria', component: Galeria },
  { path: '/tienda', component: Tienda },
  { path: '/videos', component: Videos },
  { path: '/contacto', component: Contacto },
  { path: '/noticias', component: NoticiasPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.path !== from.path) {
      return { top: 0 };
    }
    return false;
  }
});

export default router;
