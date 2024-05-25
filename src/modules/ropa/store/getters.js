export const actualFilterRopa = (state) => {
    return state.filterRopa;
};

export const actualRopajes = (state) => {
    const filters = { ...state.filterRopa }; // Objeto con los filtros dinámicos
    const ropajes = state.ropa;  // Array de ropajes a filtrar

    let atributosExcluir = ['lowPrice'];

    atributosExcluir.forEach(atributo => {
        delete filters[atributo];
    });

    // Aplicar los filtros dinámicos
    const ropajesFiltrados = ropajes.filter(ropaje => {
        return Object.entries(filters).every(([key, value]) => {
            if (Array.isArray(value) && Array.isArray(ropaje[key])) {
                return value.every(filter => ropaje[key].includes(filter));
            }
            else if (value === '') {
                return true;
            } else if (Array.isArray(value)) {
                return value.includes(ropaje[key]);
            }
            else {
                return ropaje[key] === value;
            }
        });
    });

    // Verificar si se debe ordenar por precio
    if (state.filterRopa.lowPrice) {
        return ropajesFiltrados.slice().sort((a, b) => (a.price - b.price));// Orden ascendente por precio
    } else {
        return ropajesFiltrados; // Devolver los ropajes filtrados sin ordenar
    };
};



export const actualCategoryList = (state) => {
    return state.categories;
};