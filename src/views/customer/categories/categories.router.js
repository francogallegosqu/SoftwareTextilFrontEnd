export default [
    {
        path: '/customer/categories',
        name: 'app-customer-categories',
        component: () => import('@/views/customer/categories/Categories.vue'),
        meta: {
            pageTitle: 'Categorias',
            breadcrumb: [
                {
                    text: 'Categorias',
                    active: true
                }
            ],
            module: 1
        }
    },
    {
        path: '/customer/categories/register',
        name: 'app-customer-categories-register',
        component: () => import('@/views/customer/categories/views/register-category/RegisterCategory.vue'),
        meta: {
            pageTitle: 'Agregar Categoria',
            breadcrumb: [
                {
                    text: 'Agregar Categoria',
                    active: true
                }
            ],
            module: 1
        }
    },
    {
        path: '/customer/categories/update/:id',
        name: 'app-customer-categories-update',
        component: () => import('@/views/customer/categories/views/update-category/UpdateCategory.vue'),
        meta: {
            pageTitle: 'Actualizar Categoria',
            breadcrumb: [
                {
                    text: 'Actualizar Categoria',
                    active: true
                }
            ],
            module: 1
        }
    }
]