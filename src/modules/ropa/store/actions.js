export const cambiarMasBarato = async ({ commit }, masBarato) => {
        commit('establecerMasBarato', { data: masBarato });
};