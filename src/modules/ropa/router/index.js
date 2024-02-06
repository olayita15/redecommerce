export default {
  name: "ropaLayout",
  meta: {title:'Categorías', redirection: 'ropaFirstPage'},
  component: () => import("../layouts/ropaLayout.vue"),
  children: [
    {
      path: "",
      name: "ropaFirstPage",
      component: () => import("../views/ropaFirstPage.vue"),
    },
    {
      path: "camisetas-category",
      name: "categoryPage",
      meta: {title:'Camisetas'},
      component: () => import("../views/categoryPage.vue"),
    },
  ]
};