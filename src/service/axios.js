
import axios from 'axios'

export const textilApi = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})

export const fileHostingApi = axios.create({
    baseURL: process.env.VUE_APP_FILE_HOSTING_URL,
})

export const bsaleApi = axios.create({
    baseURL: process.env.VUE_APP_BSALE_URL,
})