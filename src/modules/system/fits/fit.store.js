
// Services
import fitService from "@/services/fit.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_FITS({ commit }, params) {
        try {
            const response = await fitService.getFits(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_FIT_BY_ID({ commit }, id) {
        try {
            const response = await fitService.getFitById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_FIT({ commit }, body) {
        try {
            const response = await fitService.registerFit(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_FIT({ commit }, { id, body }) {
        try {
            const response = await fitService.updateFit(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_FIT({ commit }, id) {
        try {
            const response = await fitService.deleteFit(id)
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