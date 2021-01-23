import Vue from 'vue'
import Vuex from 'vuex'
import filmes from './filmes'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            filmes
        }
    })

    return Store
}