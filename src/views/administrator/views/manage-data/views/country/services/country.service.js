/* eslint-disable class-methods-use-this */
import { textilApi } from '@/service/axios'

class CountryService {
  // Create
  async createCountry(params) {
    const data = await textilApi.post('/api/countries', params)
    return data.data
  }

  // List
  async listCountry(params) {
    const data = await textilApi.get(`/api/countries/${params}`)
    return data.data
  }

  // Update
  async updateCountry(id, params) {
    const data = await textilApi.put(`/api/countries/${id}`, params)
    return data.data
  }

  // Delete
  async deleteCountry(id) {
    const data = await textilApi.delete(`/api/countries/${id}`)
    return data.data
  }
}
export default new CountryService()
