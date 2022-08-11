export default [
    {
        path: '/customer/subcategories',
        name: 'app-customer-subcategories',
        component: () => import('@/views/customer/subcategories/Subcategories.vue'),
        meta: {
            pageTitle: 'Sub categorias',
            breadcrumb: [
                {
                    text: 'Sub categorias',
                    active: true
                }
            ],
            module: 1
        }
    },
    {
        path: '/customer/subcategories/register',
        name: 'app-customer-subcategories-register',
        component: () => import('@/views/customer/subcategories/views/register-subcategory/RegisterSubcategory.vue'),
        meta: {
            pageTitle: 'Agregar Sub categoria',
            breadcrumb: [
                {
                    text: 'Agregar Sub categoria',
                    active: true
                }
            ],
            module: 1
        }
    },
    {
        path: '/customer/subcategories/update/:id',
        name: 'app-customer-subcategories-update',
        component: () => import('@/views/customer/subcategories/views/update-subcategory/UpdateSubcategory.vue'),
        meta: {
            pageTitle: 'Editar Sub categoria',
            breadcrumb: [
                {
                    text: 'Editar Sub categoria',
                    active: true
                }
            ],
            module: 1
        }
    }
]