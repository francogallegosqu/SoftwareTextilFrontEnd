import { textilApi } from "@/service/axios";

class CategoryService {

    async getAllSubcategories(params) {
        try {

            params.sortDir = "asc";
            params.sort = "nameCategory";

            const { data, status } = await textilApi.get('api/subcategories', {
                params: params
            })

            return { data, status }
        } catch (error) {
            throw error
        }
    }

}

export default new CategoryService() 