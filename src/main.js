import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import { computed } from "vue";
// import vuetify from "./plugins/vuetify";

//fuente
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/fonts/sora/sora.css";


import "vue3-toastify/dist/index.css";
import toastifyGlobal from "./plugins/toastifyGlobal";

import { initializeVuetify } from "./plugins/vuetify";

loadFonts();

const vuetifyInstance = initializeVuetify(
  computed(() => {
    return store.state.theme?.colores;
  }).value
);

async function initializeApp() {

  createApp(App)
    .use(store)
    .use(router)
    .use(toastifyGlobal)
    // .use(vuetify)
    .use(vuetifyInstance)
    .mount("#app");
}

//Inicializa la app
initializeApp();
