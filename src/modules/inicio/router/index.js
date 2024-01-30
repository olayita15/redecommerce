export default {
    name: "homeLayout",
    component: () => import("../layouts/homeLayout.vue"),
    children: [
      {
        path: "",
        name: "homeFirstPage",
        component: () => import("../views/homeFirstPage.vue"),
      },
    ]
};