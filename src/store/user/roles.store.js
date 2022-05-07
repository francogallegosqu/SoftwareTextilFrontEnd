
// Services
import rolesService from "@/services/user/roles.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_ROLES({ commit }, params) {
        try {
            const response = await rolesService.getRoles(params)
            return response
        } catch (error) {
            throw error
        }
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}