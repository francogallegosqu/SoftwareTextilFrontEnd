import { textilApi } from "@/service/axios";

class LocationService {

    async getCountries(params) {
        try {

            params.sortDir = "asc";
            params.sort = "idCountry";

            const { data, status } = await textilApi.get('/api/countries', {
                params: params
            })

            return { data, status }

        } catch (error) {
            throw error
        }
    }

    async getDepartmentsByCountryId(params) {
        try {

            params.sortDir = "asc";
            params.sort = "idDepartment";

            const { data, status } = await textilApi.get('/api/departments', {
                params: params
            })

            return { data, status }

        } catch (error) {
            throw error
        }
    }

    async getCitiesByDepartmentId() {
        try {

            params.sortId = "asc";
            params.sort = "idCity";

            const { data, status } = await textilApi.get('/api/cities', {
                params: params
            })

            return { data, status }

        } catch (error) {
            throw error
        }
    }

}

export default new LocationService();