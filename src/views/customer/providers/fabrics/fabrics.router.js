export default [
    {
        path: '/customer/providers/fabrics',
        name: 'app-customer-providers-fabrics',
        component: () => import('@/views/customer/providers/fabrics/Fabrics.vue'),
        meta: {
            pageTitle: 'Telas',
            breadcrumb: [
                {
                    text: 'Proveedores',
                },
                {
                    text: 'Telas',
                    active: true
                }
            ],
            module: 1,
        }
    }
]