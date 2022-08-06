import { textilApi } from "@/service/axios";

class ProductionDatasheetService {

    async getDatasheets(params) {
        try {
            const { data, status } = await textilApi.get('api/datasheets', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getDatasheets ", error)
            throw error
        }
    }

    async getDatasheetById(id) {
        try {
            const { data, status } = await textilApi.get('api/datasheets/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getDatasheet ", error)
            throw error
        }
    }

    async registerDatasheet(body) {
        try {
            const { data, status } = await textilApi.post('api/datasheets', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerDatasheet ", error)
            throw error
        }
    }

    async updateDatasheet(id, body) {
        try {
            const { data, status } = await textilApi.put('api/datasheet/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateDatasheet ", error)
            throw error
        }
    }

    async deleteDatasheet(id) {
        try {
            const { data, status } = await textilApi.delete('api/datasheets/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteDatasheet ", error)
            throw error
        }
    }

}

export default new ProductionDatasheetService();