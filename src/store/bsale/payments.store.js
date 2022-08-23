import paymentService from "@/services/bsale/payment.service"

// Services
paymentService

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    async A_GET_PAYMENT_TYPES({ commit }) {
        try {
            const response = await paymentService.getPaymentTypes()
            return response
        } catch (error) {
            throw error
        }
    },
    async A_GET_PAYMENT_DOCUMENTS({ commit }) {
        try {
            const response = await paymentService.getDocumentDocuments()
            return response
        } catch (error) {
            throw error
        }
    },
    async A_MAKE_PAYMENT({ commit }, body) {
        try {
            const response = await paymentService.makePayment(body)
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