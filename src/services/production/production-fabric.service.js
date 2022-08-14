import { textilApi } from "@/service/axios"

class ProductionFabricService {

    async getFabrics(params) {
        try {
            const { data, status } = await textilApi.get('api/productionfabrics/', {
                params: params,
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabrics ", error)
            throw error
        }
    }

    async getFabricsPaginate(page, params) {
        try {
            const { data, status } = await textilApi.get('api/productionfabrics/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricsPaginate", error)
            throw error
        }
    }

    async getFabricById(id) {
        try {
            const { data, status } = await textilApi.get('api/productionfabrics/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFabricById ", error)
            throw error
        }
    }

    async registerFabric(body) {
        try {
            const { data, status } = await textilApi.post('api/productionfabrics/', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerFabric ", error)
            throw error
        }
    }

    async updateFabric(id, body) {
        try {
            const { data, status } = await textilApi.put('api/productionfabrics/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateFabric ", error)
            throw error
        }
    }

    async deleteFabric(id) {
        try {
            const { data, status } = await textilApi.delete('api/productionfabrics/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteFabric ", error)
            throw error
        }
    }


}

export default new ProductionFabricService();