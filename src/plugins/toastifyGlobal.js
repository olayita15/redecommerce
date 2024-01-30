import Vue3Toasity from 'vue3-toastify';
import { toast } from 'vue3-toastify';

const toastify = {
    install(app) {
        app.use(Vue3Toasity, globalOptions)
        //para poder usar $toast en cualquier componente
        app.config.globalProperties.$toast = toast;
        //Propiedad que provee para componentes en composition API
        app.provide('toast', app.config.globalProperties.$toast); 
    },
};
//Opciones globales
const globalOptions = {
    autoClose: 3000,
    dangerouslyHTMLString: true,
    containerClassName: 'container-classsssssss',
    toastClassName: 'toast-classssssss',
    bodyClassName: 'toast-body-Ccccct-size',
    progressClassName: 'fancy-progress-bar',
    transition: toast.TRANSITIONS.BOUNCE,
    position: toast.POSITION.BOTTOM_LEFT,
    style: {
        opacity: '1',
        userSelect: 'initial',
    },
};

export default toastify;