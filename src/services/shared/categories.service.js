import { textilApi } from "@/service/axios";

class CategoriesService {

    async getCategories(params) {
        try {
            params.sortDir = "asc";
            params.sort = "nameCategory";

            const { data, status } = await textilApi.get('api/categories', {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getCategories ", error)
            throw error
        }
    }

    async getCategoriesPaginate(page, params) {
        try {
            const { data, status } = await textilApi.get('api/categories/page/' + page, {
                params: params
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getCategoriesPaginate ", error)
            throw error
        }
    }

    async getCategory(id) {
        try {
            const { data, status } = await textilApi.get('api/categories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getCategory ", error)
            throw error
        }
    }

    async registerCategory(body) {
        try {
            const { data, status } = await textilApi.post('api/categories', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on registerCategory ", error)
            throw error
        }
    }

    async updateCategory(id, body) {
        try {
            const { data, status } = await textilApi.put('api/categories/' + id, body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on updateCategory ", error)
            throw error
        }
    }

    async deleteCategory(id) {
        try {
            const { data, status } = await textilApi.delete('api/categories/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on deleteCategory ", error)
            throw error
        }
    }

}

export default new CategoriesService();