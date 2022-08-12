
// Services
import subcategoriesService from "@/services/shared/subcategories.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_SUBCATEGORIES({ commit }, params) {
        try {
            const response = await subcategoriesService.getSubcategories(params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_SUBCATEGORIES_PAGINATE({ commit }, {page, params}) {
        try {
            const response = await subcategoriesService.getSubcategoriesPaginate(page, params)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_SUBCATEGORY({ commit }, id) {
        try {
            const response = await subcategoriesService.getSubcategory(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_REGISTER_SUBCATEGORY({ commit }, body) {
        try {
            const response = await subcategoriesService.registerSubcategory(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPDATE_SUBCATEGORY({ commit }, { id, body }) {
        try {
            const response = await subcategoriesService.updateSubcategory(id, body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_DELETE_SUBCATEGORY({ commit }, id) {
        try {
            const response = await subcategoriesService.deleteSubcategory(id)
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