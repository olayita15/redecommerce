import { createRouter, createWebHistory } from "vue-router";

import inicioRouter from "@/modules/inicio/router";
import ropaRouter from "@/modules/ropa/router";
import libroRouter from "../modules/libros/router";
import contactoRouter from "../modules/contacto/router";

const routes = [
  {
    path: '',
    name: 'dashboard',
    meta: { title: 'Inicio', redirection: 'homeFirstPage' },
    component: () => import('@/layouts/mainLayout.vue'),
    children: [
      {
        ...inicioRouter
      },
      {
        path: '/ropa/',
        ...ropaRouter
      },
      {
        path: '/libros/',
        ...libroRouter
      },
      {
        path: '/contacto/',
        ...contactoRouter
      },
    ]
  },
];

const router = createRouter({
  mode: "history",
  base: process.env.BASE_URL,
  history: createWebHistory(),
  routes,
});

export default router;
