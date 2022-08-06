export default [
    {
        path: '/customer/fits',
        name: 'app-customer-fits',
        component: () => import('@/views/customer/fits/Fits.vue'),
        meta: {
            pageTitle: 'Fits',
            breadcrumb: [
                {
                    text: 'Fits',
                    active: true
                }
            ],
            module: 1,
        },
    },
    {
        path: '/customer/fits/register',
        name: 'app-customer-fits-register',
        component: () => import('@/views/customer/fits/views/register-fit/RegisterFit.vue'),
        meta: {
            pageTitle: 'Agregar Fit',
            breadcrumb: [
                {
                    text: 'Fits',
                    to: { name: 'app-customer-fits' },
                },
                {
                    text: 'Agregar Fit',
                    active: true
                }
            ],
            module: 1,
        },
    },
    {
        path: '/customer/fits/update/:from?/:id',
        name: 'app-customer-fits-update',
        component: () => import('@/views/customer/fits/views/update-fit/UpdateFit.vue'),
        meta: {
            pageTitle: 'Editar Fit',
            breadcrumb: [
                {
                    text: 'Fits',
                    to: { name: 'app-customer-fits' },
                },
                {
                    text: 'Editar Fit',
                    active: true
                }
            ],
            module: 1,
        }
    },
]