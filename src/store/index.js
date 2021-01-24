import Vue from 'vue'
import Vuex from 'vuex'
import filmes from './filmes'
import estados from './estados'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            filmes,
            estados
        }
    })

    return Store
}