import Vue from 'vue'

import { getUserData, getUserToken } from '@/auth/utils'

const user = getUserData()
const token = getUserToken()

const state = {
    currentUser: user,
    token,
}

const getters = {
    currentUser: state => state.currentUser,
    isAdmin(){
        const rolUser = state.currentUser?.role
        return rolUser.role_name == "admin" ? true: false
    },
    G_MENU_OPTIONS() {
        const options = state.currentUser.menu_options
        return options
    }
}

const mutations = {
    SET_CURRENT_USER(state, val) {
        state.currentUser = val
    },
    SET_TOKEN(state, val) {
        state.token = val
    },
}

const actions = {
    updateCurrentUser({ commit }, user) {
        commit('SET_CURRENT_USER', user)
    },
    updateToken({ commit }, token) {
        commit('SET_TOKEN', token)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}