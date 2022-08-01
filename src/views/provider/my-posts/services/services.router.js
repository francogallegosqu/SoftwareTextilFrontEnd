export default [
    {
        path: '/provider/my-posts/services',
        name: 'app-provider-my-posts-services',
        component: () => import('@/views/provider/my-posts/services/Services.vue'),
        meta: {
            pageTitle: 'Servicios',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Servicios',
                    active: true
                }
            ],
            module:2,
        }
    },
    {
        path: '/provider/my-posts/services/register',
        name: 'app-provider-my-posts-services-register',
        component: () => import('@/views/provider/my-posts/services/views/register-service/RegisterService.vue'),
        meta: {
            pageTitle: 'Crear Servicio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Servicios',
                    to: { name: 'app-provider-my-posts-services' }
                },
                {
                    text: 'Crear Servicio',
                    active: true
                }
            ],
            module:2,

        }
    },
    {
        path: '/provider/my-posts/services/update/:from?/:id',
        name: 'app-provider-my-posts-services-update',
        component: () => import('@/views/provider/my-posts/services/views/update-service/UpdateService.vue'),
        meta: {
            pageTitle: 'Editar Servicio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Servicios',
                    to: { name: 'app-provider-my-posts-services' }
                },
                {
                    text: 'Editar Servicio',
                    active: true
                }
            ],
            module:2,
        }
    },
    {
        path: '/provider/my-posts/services/details/:id',
        name: 'app-provider-my-posts-services-details',
        component: () => import('@/views/provider/my-posts/services/views/service-details/ServiceDetails.vue'),
        meta: {
            pageTitle: 'Detalles del Servicio',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Servicios',
                    to: { name: 'app-provider-my-posts-services' }
                },
                {
                    text: 'Detalles del Servicio',
                    active: true
                }
            ],
            module:2,
        }
    }
]