import { textilApi } from "@/service/axios"

class ProductionServiceService {

    async getServices(params) {
        try {
            const { data, status } = await textilApi.get('api/productionservices/', {
                params: params,
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServices ", error)
            throw error
        }
    }

    async getServicesPaginate(page, params) {
        try {
            const { data, status } = await textilApi.get('api/productionservices/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServicesPaginate ", error)
            throw error
        }
    }

    async getServiceById(id) {
        try {
            const { data, status } = await textilApi.get('api/productionservices/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServiceById ", error)
            throw error
        }
    }

    async registerService(body) {
        try {
            const { data, status } = await textilApi.post('api/productionservices', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerService ", error)
            throw error
        }
    }

    async updateService(id, body) {
        try {
            const { data, status } = await textilApi.put('api/productionservices/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateService ", error)
            throw error
        }
    }

    async deleteService(id) {
        try {
            const { data, status } = await textilApi.delete('api/productionservices/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteService ", error)
            throw error
        }
    }

}

export default new ProductionServiceService()
