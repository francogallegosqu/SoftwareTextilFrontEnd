import fabricsService from "@/services/supplies/fabrics.service";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_FABRICS({ commit }, params) {
        try {
            const response = await fabricsService.getFabrics(params)
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
    async A_GET_FABRICS_BY_USER({ commit }, id) {
        try {
            const response = await fabricsService.getFabricsByUser(id)
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
    async A_UPDATE_FABRIC({ commit }, { id, body }) {
        try {
            const response = await fabricsService.updateFabric(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_FABRIC({ commit }, id) {
        try {
            const response = await fabricsService.deleteFabric(id)
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