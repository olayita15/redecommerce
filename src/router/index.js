import { createRouter, createWebHistory } from "vue-router";

import inicioRouter from "../modules/inicio/router";

const routes = [
  {
    path: '/redecommerce/',
    name: 'dashboard-admin',
    component: () => import('@/layouts/mainLayout.vue'),
    children: [
      {
        path: '/redecommerce/',
        ...inicioRouter
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
