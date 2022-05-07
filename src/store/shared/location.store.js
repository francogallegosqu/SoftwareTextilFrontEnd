
// Services
import locationService from "@/services/location.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_COUNTRIES({ commit }, params) {
        try {
            const response = await locationService.getCountries(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_DEPARTMENTS_BY_COUNTRY({ commit }, params) {
        try {
            const response = await locationService.getDepartmentsByCountryId(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_CITIES_BY_DEPARTMENT({ commit }, params) {
        try {
            const response = await locationService.getCitiesByDepartmentId(params)
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