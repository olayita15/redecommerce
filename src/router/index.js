import { createRouter, createWebHistory } from "vue-router";

import inicioRouter from "@/modules/inicio/router";
import ropaRouter from "@/modules/ropa/router";

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
