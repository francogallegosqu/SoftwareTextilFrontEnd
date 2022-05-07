
// Services
import authenticationService from "@/services/authentication/authentication.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_REGISTER_NEW_USER({ commit }, body) {
        try {
            const response = await authenticationService.register(body)
            return response
        } catch (error) {
            throw error
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}