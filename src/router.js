import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/pages/Inicio.vue';
import Biografia from './components/pages/Biografia.vue';
import Conciertos from './components/pages/Conciertos.vue';
import Discografia from './components/pages/Discografia.vue';
import Galeria from './components/pages/Galeria.vue';
import Tienda from './components/pages/Tienda.vue';
import Videos from './components/pages/Videos.vue';
import Contacto from './components/pages/Contacto.vue';

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
});

export default router;
