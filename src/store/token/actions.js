export function setToken (context, payload) {
    console.log('action payload')
    context.commit('mutateToken', payload)
}