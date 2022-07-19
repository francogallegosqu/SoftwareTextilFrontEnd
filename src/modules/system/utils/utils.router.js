export default [
    {
        path: '/app/utils',
        name: 'app-utils',
        redirect: { name: 'app-utils-categories' },
        component: () => import('@/modules/system/utils/Utils.vue'),
        meta: {
            pageTitle: 'Utilidades',
            breadcrumb: [
                {
                    text: 'Utilidades',
                    active: true
                }
            ]
        },
        children: [
            {
                path: 'categories',
                name: 'app-utils-categories',
                component: () => import('@/modules/system/utils/views/categories/Categories.vue'),
                meta: {
                    pageTitle: 'Categorias',
                    breadcrumb: [
                        {
                            text: 'Utilidades'
                        },
                        {
                            text: 'Categorias',
                            active: true
                        }
                    ]
                }
            },
            {
                path: 'subcategories',
                name: 'app-utils-subcategories',
                component: () => import('@/modules/system/utils/views/subcategories/Subcategories.vue'),
                meta: {
                    pageTitle: 'Sub Categorias',
                    breadcrumb: [
                        {
                            text: 'Utilidades'
                        },
                        {
                            text: 'Sub Categorias',
                            active: true
                        }
                    ]
                }
            },
            {
                path: 'fits',
                name: 'app-utils-fits',
                component: () => import('@/modules/system/utils/views/fits/Fits.vue'),
                meta: {
                    pageTitle: 'Unidades',
                    breadcrumb: [
                        {
                            text: 'Utilidades'
                        },
                        {
                            text: 'Unidades',
                            active: true
                        }
                    ]
                }
            },
        ]
    }
]