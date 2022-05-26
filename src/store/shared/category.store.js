
// Services
import categoryService from "@/services/category.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_ALL_SUB_CATEGORIES({ commit }, params) {
        try {
            const response = await categoryService.getAllSubcategories(params)
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