export default [
    {
        path: '',
        name: 'web',
        component: () => import('@/modules/web/Web.vue'),
        meta: {
            layout: 'full',
        },
    },  
]