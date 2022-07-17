import { textilApi } from '@/service/axios'

class CountryService {
    //Create
    async createCountry(params){
        const data = await textilApi.post('/api/countries',params)
        return data.data
    }
    // List
    async listCountry(params){
        const data = await textilApi.get(`/api/countries/${params}`)
        return data.data
    }
    // Update
    async updateCountry(id){
        const data = await textilApi.put(`/api/countries/${id}`)
    }
}
export default new CountryService()