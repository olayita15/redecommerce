export default {
  name: "ropaLayout",
  component: () => import("../layouts/ropaLayout.vue"),
  children: [
    {
      path: "",
      name: "ropaFirstPage",
      component: () => import("../views/ropaFirstPage.vue"),
    },
  ]
};