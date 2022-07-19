export default [
    {
        path: '/app/production',
        name: 'app-production',
        component: () => import('@/modules/system/production/Production.vue'),
        meta: {
            pageTitle: 'Producción',
            breadcrumb: [
                {
                    text: 'Producción',
                    active: true,
                }
            ]
        },
    },
    {
        path: '/app/production/details',
        name: 'app-production-details',
        component: () => import('@/modules/system/production/views/production-details/ProductionDetails.vue'),
        meta: {
            pageTitle: 'Detalles',
            breadcrumb: [
                {
                    text: 'Producción'
                },
                {
                    text: 'Detalles',
                    active: true
                }
            ]
        }
    }
]