import * as ropaService from "../services/ropaService";


export const cambiarMasBarato = async ({ commit }, masBarato) => {
        commit('establecerMasBarato', { data: masBarato });
};

export const addFilter = async ({ commit }, data_object) => {
        commit('establecerFiltro', { data: data_object });
};

export const cambiarCamisetas = async ({ commit }) => {
        ropaService.getRopa()
        .then((result) => {
                commit('establecerRopa', { data: result });
        }).catch((error) => {
                throw error;
        });
};

export const cambiarCategories = async ({ commit }) => {
        await ropaService.getCategory()
        .then((result) => {
                commit('establecerCategory', { data: result.data });
        }).catch((error) => {
                console.log(error)
                throw error;
        });
};