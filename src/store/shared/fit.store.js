
// Services
import fitsService from "@/services/shared/fits.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_FITS({ commit }, params) {
        try {
            const response = await fitsService.getFits(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_FITS_PAGINATE({ commit }, { page, params }) {
        try {
            const response = await fitsService.getFitsPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_FIT({ commit }, id) {
        try {
            const response = await fitsService.getFit(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_FIT_BY_ID({ commit }, id) {
        try {
            const response = await fitsService.getFitById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_FIT({ commit }, body) {
        try {
            const response = await fitsService.registerFit(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_FIT({ commit }, { id, body }) {
        try {
            const response = await fitsService.updateFit(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_FIT({ commit }, id) {
        try {
            const response = await fitsService.deleteFit(id)
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