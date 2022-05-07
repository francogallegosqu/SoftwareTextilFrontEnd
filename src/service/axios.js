
import axios from 'axios'

export const textilApi = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})

