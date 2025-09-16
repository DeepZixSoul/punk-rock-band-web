import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import Biografia from './components/Biografia.vue';
import Conciertos from './components/Conciertos.vue';
import Discografia from './components/Discografia.vue';
import Galeria from './components/Galeria.vue';
import Tienda from './components/Tienda.vue';
import Videos from './components/Videos.vue';
import Contacto from './components/Contacto.vue';

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
