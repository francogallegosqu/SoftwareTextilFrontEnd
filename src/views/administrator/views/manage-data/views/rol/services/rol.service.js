/* eslint-disable class-methods-use-this */
import { textilApi } from '@/service/axios'

class RolService {
  // Create
  async createRol(params) {
    const data = await textilApi.post('/api/roles', params)
    return data.data
  }

  // List
  async listRol(params) {
    const data = await textilApi.get(`/api/roles/${params}`)
    return data.data
  }

  // Update
  async updateRol(id, params) {
    const data = await textilApi.put(`/api/roles/${id}`, params)
    return data.data
  }

  // Rol
  async deleteRol(id) {
    const data = await textilApi.delete(`/api/roles/${id}`)
    return data.data
  }
  // Options
  // async listCity(params){
  //     const data = await textilApi.get(`/api/cities?${params}`)
  //     return data.data
  // }
}
export default new RolService()
