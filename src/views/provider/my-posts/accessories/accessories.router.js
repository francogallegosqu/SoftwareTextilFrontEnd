export default [
    {
        path: '/provider/my-posts/accessories',
        name: 'app-provider-my-posts-accessories',
        component: () => import('@/views/provider/my-posts/accessories/Accessories.vue'),
        meta: {
            pageTitle: 'Avios',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Avios',
                    active: true,
                }
            ]
        }
    },
    {
        path: '/provider/my-posts/accessories/register',
        name: 'app-provider-my-posts-accessories-register',
        component: () => import('@/views/provider/my-posts/accessories/views/register-accessory/RegisterAccessory.vue'),
        meta: {
            pageTitle: 'Crear Avio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Avios',
                    to: { name: 'app-provider-my-posts-accessories' }
                },
                {
                    text: 'Crear Avio',
                    active: true
                }
            ]
        }
    },
    {
        path: '/provider/my-posts/accessories/update/:from?/:id',
        name: 'app-provider-my-posts-accessories-update',
        component: () => import('@/views/provider/my-posts/accessories/views/update-accessory/UpdateAccessory.vue'),
        meta: {
            pageTitle: 'Editar Avio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Avios',
                    to: { name: 'app-provider-my-posts-accessories' },
                },
                {
                    text: 'Editar Avio',
                    active: true
                }
            ]
        }
    },
    {
        path: '/provider/my-posts/accessories/details/:id',
        name: 'app-provider-my-posts-accessories-details',
        component: () => import('@/views/provider/my-posts/accessories/views/accessory-details/AccessoryDetails.vue'),
        meta: {
            pageTitle: 'Detalles del Avio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Avios',
                    to: { name: 'app-provider-my-posts-accessories' }
                },
                {
                    text: 'Detalles del Avio',
                    active: true
                }
            ]
        }
    }
]