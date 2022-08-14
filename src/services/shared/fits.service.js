import { textilApi } from "@/service/axios";

class FitsService {

    async getFits(params) {
        try {
            const { data, status } = await textilApi.get('api/fits', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFits ", error)
            throw error
        }
    }

    async getFitsPaginate(page, params) {
        try {
            const { data, status } = await textilApi.get('api/fits/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFitsPaginate ", error)
            throw error
        }
    }

    async getFit(id) {
        try {
            const { data, status } = await textilApi.get('api/fits/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFit ", error)
            throw error
        }
    }

    async getFitById(id) {
        try {
            const { data, status } = await textilApi.get('api/fits/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFit ", error)
            throw error
        }
    }

    async registerFit(body) {
        try {
            const { data, status } = await textilApi.post('api/fits', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerFit ", error)
            throw error
        }
    }

    async updateFit(id, body) {
        try {
            const { data, status } = await textilApi.put('api/fits/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateFit ", error)
            throw error
        }
    }

    async deleteFit(id) {
        try {
            const { data, status } = await textilApi.delete('api/fits/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteFit ", error)
            throw error
        }
    }

}

export default new FitsService();