export const establecerMasBarato = (state, { data }) => {
    state.filterRopa['masBarato'] = data;
};

export const establecerCamisetas = (state, { data }) => {
    state.camisetas = data;
};