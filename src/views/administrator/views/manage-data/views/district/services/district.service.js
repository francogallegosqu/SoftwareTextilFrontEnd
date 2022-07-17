import { textilApi } from '@/service/axios'

class DistrictService {
    //Create
    async createDistrict(params){
        const data = await textilApi.post('/api/districts',params)
        return data.data
    }
    // List
    async listDistrict(params){
        const data = await textilApi.get(`/api/districts/${params}`)
        return data.data
    }
    // Update
    async updateDistrict(id,params){
        const data = await textilApi.put(`/api/districts/${id}`,params)
        return data.data
    }
    // District
    async deleteDistrict(id){
        const data = await textilApi.delete(`/api/districts/${id}`)
        return data.data
    }
    // Options
    async listCity(params){
        const data = await textilApi.get(`/api/cities?${params}`)
        return data.data
    }
}
export default new DistrictService()