import { textilApi } from "@/service/axios";

class FabricsService {

    async getFabrics(params) {
        try {
            const { data, status } = await textilApi.get('api/fabrics', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabrics ", error)
            throw error
        }
    }

    async getFabricsPaginate(params, page) {
        try {
            const { data, status } = await textilApi.get('api/fabrics/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricsPaginate", error)
            throw error
        }
    }

    async getFabricsByUser(userId) {
        try {
            const { data, status } = await textilApi.get('api/fabrics/user/' + userId)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricsByUser ", error)
            throw error
        }
    }

    async getFabricById(id) {
        try {
            const { data, status } = await textilApi.get('api/fabrics/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricById ", error)
            throw error
        }
    }

    async registerFabric(body) {
        try {
            const { data, status } = await textilApi.post('api/fabrics', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerFabric ", error)
            throw error
        }
    }

    async updateFabric(id, body) {
        try {
            const { data, status } = await textilApi.put('api/fabrics/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateFabric ", error)
            throw error
        }
    }

    async deleteFabric(id) {
        try {
            const { data, status } = await textilApi.delete('api/fabrics/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteService ", error)
            throw error
        }
    }

}

export default new FabricsService();