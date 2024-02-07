import { createRouter, createWebHistory } from "vue-router";

import inicioRouter from "@/modules/inicio/router";
import ropaRouter from "@/modules/ropa/router";
import libroRouter from "../modules/libros/router";
import contactoRouter from "../modules/contacto/router";

const routes = [
  {
    path: '/redecommerce/',
    name: 'dashboard',
    meta: {title:'Inicio', redirection: 'homeFirstPage'},
    component: () => import('@/layouts/mainLayout.vue'),
    children: [
      {
        ...inicioRouter
      },
      {
        path: '/redecommerce/ropa',
        ...ropaRouter
      },
      {
        path: '/redecommerce/libros/',
        ...libroRouter
      },
      {
        path: '/redecommerce/contacto/',
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
