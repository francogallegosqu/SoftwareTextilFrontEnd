import { textilApi } from "@/service/axios"

class AccessoriesServce {

    async getAccessories(params) {
        try {
            const { data, status } = await textilApi.get("api/accessories", { params: params })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessories ", error)
            throw error
        }
    }

    async getAccessory(id) {
        try {
            const { data, status } = await textilApi.get("api/accessories/" + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessory ", error)
            throw error
        }
    }

    async getAccessoriesByUser(id) {
        try {
            const { data, status } = await textilApi.get("api/accessories/user/" + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getAccessoriesByUser ", error)
            throw error
        }
    }

    async registerAccessory(body) {
        try {
            const { data, status } = await textilApi.post("api/accessories", body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerAccessory ", error)
            throw error
        }
    }

    async updateAccessory(id, body) {
        try {
            const { data, status } = await textilApi.put("api/accessories/" + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateAccessory ", error)
            throw error
        }
    }

    async deleteAccessory(id) {
        try {
            const { data, status } = await textilApi.delete("api/accessories/" + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteAccessory ", error)
            throw error
        }
    }

}

export default new AccessoriesServce();