// Services
import productionService from "@/services/production/production.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_PRODUCTIONS({ commit }, params) {
        try {
            const response = await productionService.getProductions(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PRODUCTION_BY_ID({ commit }, id) {
        try {
            const response = await productionService.getProductionById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_PRODUCTION({ commit }, body) {
        try {
            const response = await productionService.registerProduction(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_PRODUCTION({ commit }, { id, body }) {
        try {
            const response = await productionService.updateProductions(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_PRODUCTION({ params }, id) {
        try {
            const response = await productionService.deleteProduction(id)
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