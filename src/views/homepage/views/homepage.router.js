export default [
    {
        path: '/',
        name: 'web',
        component: () => import('@/views/homepage/views/HomePage.vue'),
        meta: {
            layout: 'full',
        },
    },  
]