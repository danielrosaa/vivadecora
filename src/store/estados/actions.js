export function setSinopse (context, payload) {
    context.commit('mutateSinopse', payload)
}
export function setDrawer (context, payload) {
    context.commit('mutateDrawer', payload)
}
export function setClientWidth (context, payload) {
    context.commit('mutateClientWidth', payload)
}