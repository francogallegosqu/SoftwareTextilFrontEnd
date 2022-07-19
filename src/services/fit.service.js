import { textilApi } from "@/service/axios";

class FitService {

    async getFits(params) {
        try {

            params.sortDir = "asc";
            params.sort = "nameFit";

            const { data, status } = await textilApi.get('api/fits', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFits ", error)
            throw error
        }
    }

    async getFitById(params) {
        try {
            const { data, status } = await textilApi.get('api/fits/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFitById ", error)
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

export default new FitService();
