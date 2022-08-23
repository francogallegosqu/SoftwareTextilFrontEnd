import { initialAbility } from '@/libs/acl/config'
import { Ability } from '@casl/ability';
import { textilApi } from './axios';

const ability = new Ability();

export function initialize(router) {
    textilApi.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('accessToken')
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`; // for Laravel or Spring boot application
                //config.headers["access_token"] = 
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    textilApi.interceptors.response.use(null, (error) => {
        if (error.response.status == 401) {
            // Remove userData from localStorage
            // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
            localStorage.removeItem('accessToken')
            // Remove userData from localStorage
            localStorage.removeItem('userData')
            ability.update(initialAbility)
            router.push({ name: 'auth-login' })
        }
        return Promise.reject(error);
    })
}