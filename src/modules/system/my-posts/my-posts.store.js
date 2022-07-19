
// Services
import fabricsService from "@/services/supplies/fabrics.service"
import servicesService from "@/services/supplies/services.service"

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
    },

    // Services
    async A_GET_SERVICES_BY_USER({ commit }, userId) {
        try {
            const response = await servicesService.getServicesByUser(userId)
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
    },

    // Accesories
    async A_GET_ACCESSORIES_BY_USER({ commit }, userId) {
        try {
            const response = await accesoriesService.getAccessoriesByUser(userId)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_ACCESSORY_BY_ID({ commit }, id) {
        try {
            const response = await accesoriesService.getAccessoriesById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_ACCESSORY({ commit }, body) {
        try {
            const response = await accesoriesService.registerAccessory(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_ACCESSORY({ commit }, { id, body }) {
        try {
            const response = await accesoriesService.updateAccessory(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_ACCESSORY({ commit }, id) {
        try {
            const response = await accesoriesService.deleteAccessory(id)
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