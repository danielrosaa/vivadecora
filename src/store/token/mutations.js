export function mutateToken (state, payload) {
    state.token = 'Bearer ' + payload
}