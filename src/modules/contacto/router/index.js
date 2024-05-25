export default {
    name: "contactoLayout",
    meta: {title:'Contacto', redirection: 'contactoFirstPage'},
    component: () => import("../layouts/contactoLayout.vue"),
    children: [
      {
        path: "",
        name: "contactoFirstPage",
        component: () => import("../views/contactoFirstPage.vue"),
      },
    ]
  };