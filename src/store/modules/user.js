import Vue from 'vue'

const vueAuth = Vue.VueAuthenticate

const state = {
    isAuthenticated: false
}

const getters = {
    isAuthenticated () {
        return vueAuth.isAuthenticated()
    }
}

const mutations = {
    isAuthenticated (state, payload) {
        state.isAuthenticated = payload.isAuthenticated
    }
}

const actions = {
    login (context, payload) {
        vueAuth.login(payload.user, payload.requestOptions).then((response) => {
            console.info('responsona', response)
            context.commit('isAuthenticated', {
                isAuthenticated: vueAuth.isAuthenticated()
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
