import Vue from 'vue'
import Vuex from 'vuex'
import filmes from './filmes'
import token from './token'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            filmes,
            token
        }
    })

    return Store
}