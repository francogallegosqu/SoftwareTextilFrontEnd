export default [
    {
        path: '/customer/providers/accessories',
        name: 'app-customer-providers-accessories',
        component: () => import('@/views/customer/providers/accessories/Accessories.vue'),
        meta: {
            pageTitle: 'Avíos',
            breadcrumb: [
                {
                    text: 'Proveedores',
                },
                {
                    text: 'Avíos',
                    active: true,
                }
            ],
            module: 1
        }
    },
]