import accesoriesService from "@/services/supplies/accessories.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_ACCESSORIES({ commit }, params) {
        try {
            const response = await accesoriesService.getAccessories(params)
            return response
        } catch (error) {
            console.log()
        }
    },
    async A_GET_ACCESSORY({ commit }, id) {
        try {
            const response = await accesoriesService.getAccessory(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_ACCESSORIES_BY_USER({ commit }, id) {
        try {
            const response = await accesoriesService.getAccessoriesByUser(id)
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