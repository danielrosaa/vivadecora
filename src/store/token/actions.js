export function setToken (context, payload) {
    context.commit('mutateToken', payload)
}