export default [
    {
        path: '',
        name: 'web',
        component: () => import('@/modules/web/Web3.vue'),
        meta: {
            layout: 'full',
        },
    },  
]