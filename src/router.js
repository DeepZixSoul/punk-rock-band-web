import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/pages/Inicio/Inicio.vue';
import Biografia from './components/pages/Biografia/Biografia.vue';
import Conciertos from './components/pages/Conciertos/Conciertos.vue';
import Discografia from './components/pages/Discografia/Discografia.vue';
import Galeria from './components/pages/Galeria/Galeria.vue';
import Tienda from './components/pages/Tienda/Tienda.vue';
import Videos from './components/pages/Videos/Videos.vue';
import Contacto from './components/pages/Contacto/Contacto.vue';

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
    // Solo hacer scroll al top si la ruta cambia realmente
    if (to.path !== from.path) {
      return { top: 0 };
    }
    // Si es navegación interna (paginación, etc), mantener posición
    return false;
  }
});

export default router;
