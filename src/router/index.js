import { createRouter, createWebHistory } from "vue-router";

import inicioRouter from "../modules/inicio/router";

const routes = [
  {
    path: '',
    name: 'dashboard-admin',
    component: () => import('@/layouts/mainLayout.vue'),
    children: [
      {
        path: '',
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
