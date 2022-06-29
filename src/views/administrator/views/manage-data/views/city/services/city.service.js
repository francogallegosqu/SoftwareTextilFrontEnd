import { textilApi } from '@/service/axios'

class CityService {
    //User Create
    async createCity(params){
        const data = await textilApi.post('/api/cities',params)
        return data.data
    }
    async listCity(params){
        const data = await textilApi.get('/api/cities')
        return data.data
    }
    async deleteCity(id){
        const data = await textilApi.delete('/api/cities/'+id)
        return data.data
    }
    async  updateCity(id){
        const data = await textilApi.put('/api/cities/'+id)
        return data.data
    }
    async  getCity(id){
        const data = await textilApi.get('/api/cities/'+id)
        return data.data
    }

}
export default new CityService()