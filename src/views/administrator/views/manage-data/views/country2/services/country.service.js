import { textilApi } from '@/service/axios'

class CountryService {
    //User Create
    async createCountry(params){
        const data = await textilApi.post('/api/countries',params)
        return data.data
    }
}
export default new CountryService()