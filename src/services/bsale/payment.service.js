import { bsaleApi } from "@/service/axios";

class PaymentService {

    constructor() {
        this.token = "7d878169be57ff7e062b3d0e633950fac541e233";
    }

    async getPaymentTypes() {
        try {
            const { data, status } = await bsaleApi.get('payment_types.json', {
                headers: {
                    access_token: this.token
                }
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getPaymentTypes ", error)
            throw error
        }
    }

    async getDocumentDocuments() {
        try {
            const { data, status } = await bsaleApi.get('document_types.json', {
                headers: {
                    access_token: this.token
                }
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getDocumentTypes ", error)
            throw error
        }
    }

    async makePayment(body) {
        try {
            const { data, status } = await bsaleApi.post('documents.json', body, {
                headers: {
                    access_token: this.token
                }
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on makePayment ", error)
            throw error
        }
    }

}

export default new PaymentService();