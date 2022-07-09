import { textilApi, fileHostingApi } from "@/service/axios";

class ImagesService {

    cloudName = "dvewj2lqa";
    preset = "angular_textil";

    async uploadImageToHosting(file) {
        try {
            const body = new FormData()
            body.append("file", file);
            body.append('upload_preset', this.preset)
            body.append('cloud_name', this.cloudName)

            const { data, status } = await fileHostingApi.post(`${this.cloudName}/image/upload`, body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on uploadImageToHosting ", error)
            throw error
        }

    }

    async getImagesById(id) {
        try {
            const { data, status } = await textilApi.get('api/images/images/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getImagesById ", error)
            throw error
        }
    }

    async uploadImageById(body) {
        try {
            const { data, status } = await textilApi.post('api/images', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on uploadImageById ", error)
            throw error
        }
    }

}

export default new ImagesService()