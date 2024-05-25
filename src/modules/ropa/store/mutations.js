export const establecerMasBarato = (state, { data }) => {
    state.filterRopa['masBarato'] = data;
};

export const establecerFiltro = (state, { data }) => {
    state.filterRopa[data.atributo] = data.valor;
};

export const establecerRopa = (state, { data }) => {
    state.ropa = data;
};

export const establecerCategory = (state, { data }) => {
    state.categories = data;
};