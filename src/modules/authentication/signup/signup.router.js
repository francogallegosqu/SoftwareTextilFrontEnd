export default [
    {
        path: '/register',
        name: 'auth-register',
        component: () => import('@/modules/authentication/signup/SignUp.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
        },
    },
]