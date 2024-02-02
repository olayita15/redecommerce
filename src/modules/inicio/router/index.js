export default {
    name: "homeLayout",
    path: '',
    component: () => import("../layouts/homeLayout.vue"),
    children: [
      {
        path: "",
        name: "homeFirstPage",
        component: () => import("../views/homeFirstPage.vue"),
      },
    ]
};