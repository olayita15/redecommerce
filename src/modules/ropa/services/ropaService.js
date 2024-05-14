import API from '@/services/api';

export const getRopa = () => API.get(`/ropa/`);

export const getCategory = () => API.get(`/category/`);


// export const getDependenciasAvaluo = (id) => API.get(`/inmuebles/avaluos/dependencias/${id}/`);

// export const createDependenciasAvaluo = (id, data) => API.post(`/inmuebles/avaluos/dependencias/${id}/`, data);

// export const getAvaluoForm = (data) => API.post("/formbuilder/", data);

// export async function createAvaluo(data) {
//     try {
//         const response = await API.post("/avaluos/", data, {
//             headers: {
//                 'Content-Type': 'multipart/form-data' // Set the Content-Type to multipart/form-data
//             }
//         });
//         return response;
//     } catch (error) {
//         console.log(error)
//         throw error;
//     };
// };

// export const getAvaluosbyInmueble = (inmueble_id) => API.get(`/avaluos/avaluos-by-inmueble/${inmueble_id}/`);

// export const getAvaluo = (avaluo_id) => API.get(`/avaluos/${avaluo_id}/`);

// export const patchAvaluo = (avaluo_id, data) => API.patch(`/avaluo/${avaluo_id}/`, data);

// export const patchPropiedadAnexa = (propiedades_anexas_id, data) => API.patch(`/propiedad-anexa/${propiedades_anexas_id}/`, data);

// export const patchConcepto = (concepto_id, data) => API.patch(`/concepto/${concepto_id}/`, data);

// export const postSwitchSujetoPropiedadHorizontal = (avaluo_id) => API.post(`/avaluos/switch-propiedad-horizontal/${avaluo_id}/`);

// export const postConcepto = (data) => API.post(`/concepto/`, data);

// export const deleteAvaluo = (avaluo_id) => API.delete(`/avaluo/${avaluo_id}/`);

// export const deleteConcepto = (concepto_id) => API.delete(`/concepto/${concepto_id}/`);

