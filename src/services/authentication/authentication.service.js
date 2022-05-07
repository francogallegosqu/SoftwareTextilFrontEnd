import { textilApi } from "@/service/axios";

class AuthenticationService {

    async register(body) {
        try {
            const { data, status } = await textilApi.post('/signup', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

}

export default new AuthenticationService();