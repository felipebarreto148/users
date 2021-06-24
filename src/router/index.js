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
   name: 'Cadastrar',
   component: () => import('@/components/FormCadastro/VFormCadastro.vue'), 
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import('@/components/FormEditar/VFormEditar.vue'), 
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
