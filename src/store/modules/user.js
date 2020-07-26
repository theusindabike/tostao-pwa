import userAPI from '@/api/user.api';

const state = {
    profile: {},
    isAuthenticated: false
}

const mutations = {
    setUser(state, user) {
        state.profile = user;
    },
    setAuthenticated(state, authenticated) {
        state.isAuthenticated = authenticated;
    }
}

const actions = {
    signIn() {
        userAPI.authenticate();
    },
    // async validateUser({ commit }) {
    //     try {
    //         const isValid = await userAPI.validateUser();
    //         commit('setUser', userAPI.getCurrentUser());
    //         commit('setAuthenticated', isValid);
    //         return isValid;
    //     } catch (error) {
    //         return false;
    //     }
    // }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
