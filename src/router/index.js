import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'consulta',
    component: () => import('@/components/VTable/VTable.vue'),
  },
  {
   path: '/adicionar',
   name: 'cadastrar',
   component: () => import('@/components/pages/FormCadastro/VFormCadastro.vue'), 
  },
  {
    path: '/editar',
    name: 'editar',
    component: () => import('@/components/pages/FormEditar/VFormEditar.vue'), 
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    component: () => import('@/components/pages/PageDetalhes/VPageDetalhes.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
