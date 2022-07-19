import { textilApi } from "@/service/axios";

class ProductionAccessoryService {

    async getAccessories(params) {
        try {
            const { data, status } = await textilApi.get('api/productionaccessories/', {
                params: params,
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessories ", error)
            throw error
        }
    }

    async getAccessoriesById(id) {
        try {
            const { data, status } = await textilApi.get('api/productionaccessories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessoriesById ", error)
            throw error
        }
    }

    async registerAccessory(body) {
        try {
            const { data, status } = await textilApi.post('api/productionaccessories/', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerAccessory ", error)
            throw error
        }
    }

    async updateAccessory(id, body) {
        try {
            const { data, status } = await textilApi.put('api/productionaccessories/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateAccessory ", error)
            throw error
        }
    }

    async deleteAccessory(id) {
        try {
            const { data, status } = await textilApi.delete('api/productionaccesories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteAccessory ", error)
            throw error
        }
    }


}

export default new ProductionAccessoryService();