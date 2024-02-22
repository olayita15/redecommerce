export default {
  name: "ropaLayout",
  meta: {title:'Categorías de ropa', redirection: 'ropaFirstPage'},
  component: () => import("../layouts/ropaLayout.vue"),
  children: [
    {
      path: "",
      name: "ropaFirstPage",
      component: () => import("../views/ropaFirstPage.vue"),
    },
    {
      path: "camisetas/",
      name: "categoryPage",
      meta: {title:'Camisetas', redirection: 'camisetasPage'},
      component: () => import("../layouts/categoryLayout.vue"),
      children: [
        {
          path: "",
          name: "camisetasPage",
          component: () => import("../views/categoryPage.vue"),
        },
        {
          path: ":id/",
          name: "ropaDetailPage",
          meta: {title:'Detalles'},
          component: () => import("../views/ropaDetailPage.vue"),
        },
      ]
    },
  ]
};