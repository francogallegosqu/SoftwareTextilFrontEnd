import { textilApi } from "@/service/axios";

class ProductionService {
    async getProductions(params) {
        try {
            const { data, status } = await textilApi.get('/api/productions', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getProductions ", error)
            throw error
        }
    }

    async getProductionsByUser(id) {
        try {
            const { data, status } = await textilApi.get('/api/productions/user/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getProductionsByUser", error)
            throw error
        }
    }

    async getProductionById(id) {
        try {
            const { data, status } = await textilApi.get('api/productions/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getProductionById ", error)
            throw error
        }
    }

    async registerProduction(body) {
        try {
            const { data, status } = await textilApi.post('api/productions', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerProduction ", error)
            throw error
        }
    }

    async updateProductions(id, body) {
        try {
            const { data, status } = await textilApi.put('api/productions/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateProductions ", error)
            throw error
        }
    }

    async deleteProduction(id) {
        try {
            const { data, status } = await textilApi.delete('api/productions/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteProduction ", error)
            throw error
        }
    }
}

export default new ProductionService();