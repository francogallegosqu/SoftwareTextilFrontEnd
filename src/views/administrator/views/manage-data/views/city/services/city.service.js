/* eslint-disable class-methods-use-this */
import { textilApi } from '@/service/axios'

class CityService {
  // Create
  async createCity(params) {
    const data = await textilApi.post('/api/cities', params)
    return data.data
  }

  // List
  async listCity(params) {
    const data = await textilApi.get(`/api/cities/${params}`)
    return data.data
  }

  // Update
  async updateCity(id, params) {
    const data = await textilApi.put(`/api/cities/${id}`, params)
    return data.data
  }

  // Delete
  async deleteCity(id) {
    const data = await textilApi.delete(`/api/cities/${id}`)
    return data.data
  }

  // Options
  async listDepartment(params) {
    const data = await textilApi.get(`/api/departments?${params}`)
    return data.data
  }
}
export default new CityService()
