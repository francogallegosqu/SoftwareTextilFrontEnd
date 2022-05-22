import { textilApi } from "@/service/axios";

class FabricsService {

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
            const { data, status } = await textilApi.get('/fabrics/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricById ", error)
            throw error
        }
    }

    async registerFabric(body) {
        try {
            const { data, status } = await textilApi.post('/fabrics', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerFabric ", error)
            throw error
        }
    }

    async updateFabric(code, body) {
        try {
            const { data, status } = await textilApi.put('/fabrics/' + code, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateFabric ", error)
            throw error
        }
    }

}

export default new FabricsService();