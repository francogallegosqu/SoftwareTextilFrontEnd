import servicesService from "@/services/supplies/services.service";

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_SERVICES({ commit }, params) {
        try {
            const response = await servicesService.getServices(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_SERVICES_PAGINATE({ commit }, { page, params }) {
        try {
            const response = await servicesService.getServicesPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_SERVICE_BY_ID({ commit }, id) {
        try {
            const response = await servicesService.getServiceById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_SERVICES_BY_USER({ commit }, id) {
        try {
            const response = await servicesService.getServicesByUser(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_SERVICE({ commit }, body) {
        try {
            const response = await servicesService.registerService(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_SERVICE({ commit }, { id, body }) {
        try {
            const response = await servicesService.updateService(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_SERVICE({ commit }, id) {
        try {
            const response = await servicesService.deleteService(id)
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
    mutations,
}