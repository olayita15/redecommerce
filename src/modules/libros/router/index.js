export default {
    name: "librosLayout",
    meta: { title: 'Categorías', redirection: 'librosFirstPage' },
    component: () => import("../layouts/librosLayout.vue"),
    children: [
        {
            path: "",
            name: "librosFirstPage",
            component: () => import("../views/librosFirstPage.vue"),
        },
    ]
};