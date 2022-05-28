import { textilApi } from "@/service/axios";

class AccesoriesService {

    async getAccessoriesByUser(userId) {
        try {
            const { data, status } = await textilApi.get('api/accessories/user/' + userId)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessoriesByUser ", error)
            throw error;
        }
    }

    async getAccessoriesById(id) {
        try {
            const { data, status } = await textilApi.get('api/accessories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessoriesById ", error)
            throw error;
        }
    }

    async registerAccessory(body) {
        try {
            const { data, status } = await textilApi.post('api/accessories', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerAccessory ", error)
            throw error;
        }
    }

    async updateAccessory(id, body) {
        try {
            const { data, status } = await textilApi.put('api/accessories/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateAccessory ", error)
            throw error;
        }
    }

    async deleteAccessory(id) {
        try {
            const { data, status } = await textilApi.delete('api/accessories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteAccessory ", error)
            throw error;
        }
    }

}

export default new AccesoriesService();
