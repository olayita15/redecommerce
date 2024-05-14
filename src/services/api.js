import axios from "axios";
// import store from '@/storeindex'
import url from "@/services/url-config"
// import store from "@/store";
// import router from "@/router";

const headers = {
    'Content-Type': 'application/json'
}


export const API = axios.create({
    baseURL: url.BASE_URL,
    headers
})

// API.interceptors.request.use((config) => {

//     const idToken = localStorage.getItem("idtoken")
//     if (idToken) config.headers.Authorization = `Bearer ${idToken}`
//     return config
// })

// // Configuracion de un interceptor para las respuestas de error de autenticacion
// API.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response) {
//             //Interceptar error de token inválido
//             if (error.response.status === 401) {
//                 let modalAttrs = {
//                     title: "Error",
//                     type: "error",
//                     msg: "La sesión ha caducado. </br>Vuelva a iniciar sesión.",
//                     onClose: function () {
//                         router.replace({ path: "/login" })
//                     }
//                 }
//                 store.commit("auth/logout");
//                 //Envio de atributos al modal global
//                 store.dispatch('global/setModalAttrs', modalAttrs);
//                 store.commit("global/showModal");
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default API;