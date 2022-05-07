import { textilApi } from "@/service/axios";

class RolesService {

    async getRoles(params) {
        try {

            params.sortDir = "asc";
            params.sort = "idRole";

            const { data, status } = await textilApi.get('/api/roles', {
                params: params
            })

            return { data, status }
        } catch (error) {
            throw error
        }
    }

}

export default new RolesService();