
// Services
import categoryService from "@/services/category.service"
import categoriesService from "@/services/shared/categories.service"

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
    },
    async A_GET_CATEGORIES({ commit }, params) {
        try {
            const response = await categoriesService.getCategories(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_CATEGORY({ commit }, id) {
        try {
            const response = await categoriesService.getCategory(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_CATEGORY({ commit }, body) {
        try {
            const response = await categoriesService.registerCategory(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_CATEGORY({ commit }, { id, body }) {
        try {
            const response = await categoriesService.updateCategory(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_CATEGORY({ commit }, id) {
        try {
            const response = await categoriesService.deleteCategory(id)
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