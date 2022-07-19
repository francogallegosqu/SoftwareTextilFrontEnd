import { textilApi } from "@/service/axios";

class SubcategoriesService {

    async getSubcategories(params) {
        try {

            params.sortDir = "asc";
            params.sort = "nameCategory";

            const { data, status } = await textilApi.get('api/subcategories', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getSubcategories ", error)
            throw error
        }
    }

    async getSubcategory(id) {
        try {
            const { data, status } = await textilApi.get('api/subcategories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wronnnng on getSubcategory ", error)
            throw error
        }
    }

    async registerSubcategory(body) {
        try {
            const { data, status } = await textilApi.post('api/subcategories', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerSubcategory ", error)
            throw error
        }
    }

    async updateSubcategory(id, body) {
        try {
            const { data, status } = await textilApi.put('api/subcategories/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateSubcategory ", error)
            throw error
        }
    }

    async deleteSubcategory(id) {
        try {
            const { data, status } = await textilApi.delete('api/subcategories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteSubcategory ", error)
            throw error
        }
    }

}

export default new SubcategoriesService();