/* eslint-disable class-methods-use-this */
import { textilApi } from '@/service/axios'

class DepartmentService {
  // Create
  async createDepartment(params) {
    const data = await textilApi.post('/api/departments', params)
    return data.data
  }

  // List
  async listDepartment(params) {
    const data = await textilApi.get(`/api/departments/${params}`)
    return data.data
  }

  // Update
  async updateDepartment(id, params) {
    const data = await textilApi.put(`/api/departments/${id}`, params)
    return data.data
  }

  // Department
  async deleteDepartment(id) {
    const data = await textilApi.delete(`/api/departments/${id}`)
    return data.data
  }

  // Options
  async listCountry(params) {
    const data = await textilApi.get(`/api/countries?${params}`)
    return data.data
  }
}
export default new DepartmentService()
