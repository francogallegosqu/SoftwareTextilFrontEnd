import { textilApi } from "@/service/axios";

class ServicesService {

    async getServices(params) {
        try {
            const { data, status } = await textilApi.get('api/services', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServices ", error)
            throw error
        }
    }

    async getServicesPaginate(page, params) {
        try {
            const { data, status } = await textilApi.get('api/services/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServicesPaginate ", error)
            throw error
        }
    }

    async getServicesByUser(userId) {
        try {
            const { data, status } = await textilApi.get('api/services/user/' + userId)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServicesByUser ", error)
            throw error
        }
    }

    async getServiceById(id) {
        try {
            const { data, status } = await textilApi.get('api/services/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getServiceById ", error)
            throw error
        }
    }

    async registerService(body) {
        try {
            const { data, status } = await textilApi.post('api/services', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerService  ", error)
            throw error
        }
    }

    async updateService(id, body) {
        try {
            const { data, status } = await textilApi.put('api/services/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateService ", error)
            throw error
        }
    }

    async deleteService(id) {
        try {
            const { data, status } = await textilApi.delete('api/services/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteService ", error)
            throw error
        }
    }

}

export default new ServicesService();