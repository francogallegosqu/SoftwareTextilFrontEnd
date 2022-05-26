
// Services
import fabricsService from "@/services/supplies/fabrics.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_FABRICS_BY_USER({ commit }, userId) {
        try {
            const response = await fabricsService.getFabricsByUser(userId)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_FABRIC_BY_ID({ commit }, id) {
        try {
            const response = await fabricsService.getFabricById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_FABRIC({ commit }, body) {
        try {
            const response = await fabricsService.registerFabric(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_FABRIC({ commit }, { code, body }) {
        try {
            const response = await fabricsService.updateFabric(code, body)
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