export function mutateNaoCurados (state, payload) {
    if (payload.acao === 'remover') {
        state.naoCurados.map(filme => {
            if (filme.id === payload.filme.id) state.naoCurados.shift()
        })
    } else if (payload.acao === 'pular') {
        // Move o primeiro item da lista no final
        state.naoCurados.push(state.naoCurados.shift())
    } else {
        state.naoCurados = payload
    }
}
export function mutateNaoCurtidos (state, payload) {
    state.naoCurtidos.push(payload)
}
export function mutateCurtidos (state, payload) {
    state.curtidos.push(payload)
}
export function mutateGeneros (state, payload) {
    state.generos = payload
}