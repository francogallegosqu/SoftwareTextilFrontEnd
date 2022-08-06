export default [
    {
        path: '/customer/providers/services',
        name: 'app-customer-providers-services',
        component: () => import('@/views/customer/providers/services/Services.vue'),
        meta: {
            pageTitle: 'Servicios',
            breadcrumb: [
                {
                    text: 'Proveedores',
                },
                {
                    text: 'Servicios',
                    active: true
                }
            ],
            module: 1
        }
    }
]