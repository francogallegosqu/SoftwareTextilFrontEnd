export default [
    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/modules/authentication/login/SignIn.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },
]