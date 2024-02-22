export const cambiarMasBarato = async ({ commit }, masBarato) => {
        commit('establecerMasBarato', { data: masBarato });
};

export const cambiarCamisetas = async ({ commit }, camisetas_list) => {
        commit('establecerCamisetas', { data: camisetas_list });
};