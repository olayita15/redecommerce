import { useRoute } from 'vue-router';
const route = useRoute();


export default {
  name: "ropaLayout",
  meta: {title:'Categorías de ropa', redirection: 'ropaFirstPage'},
  component: () => import("../layouts/ropaLayout.vue"),
  children: [
    {
      path: "category/",
      name: "ropaFirstPage",
      component: () => import("../views/ropaFirstPage.vue"),
    },
    {
      path: ":category/",
      name: "categoryLayout",
      meta: { redirection: 'filterByCategoryProductListPage'},
      component: () => import("../layouts/categoryLayout.vue"),
      children: [
        {
          path: "",
          name: "filterByCategoryProductListPage",
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