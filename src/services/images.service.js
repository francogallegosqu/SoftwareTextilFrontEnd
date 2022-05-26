import { textilApi } from "@/service/axios";

class ImagesService {

    async getImagesById(id) {
        try {
            const { data, status } = await textilApi.get('api/images/images/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getImagesById ", error)
            throw error
        }
    }

}

export default new ImagesService()