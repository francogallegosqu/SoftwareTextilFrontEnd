
// Services
import imagesService from "@/services/images.service"

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_UPLOAD_IMAGE_TO_HOSTING({ commit }, body) {
        try {
            const response = await imagesService.uploadImageToHosting(body)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_IMAGES_BY_ID({ commit }, id) {
        try {
            const response = await imagesService.getImagesById(id)
            return response
        } catch (error) {
            throw error
        }
    },
    async A_UPLOAD_IMAGE_BY_ID({ commit }, body) {
        try {
            const response = await imagesService.uploadImageById(body)
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