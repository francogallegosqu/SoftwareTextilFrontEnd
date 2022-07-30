export default [
    {
        path: '/provider/my-posts/fabrics',
        name: 'app-provider-my-posts-fabrics',
        component: () => import('@/views/provider/my-posts/fabrics/Fabrics.vue'),
        meta: {
            pageTitle: 'Telas',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Telas',
                    active: true
                }
            ],
            module: 2,
        }
    },
    {
        path: '/provider/my-posts/fabrics/register',
        name: 'app-provider-my-posts-fabrics-register',
        component: () => import('@/views/provider/my-posts/fabrics/views/register-fabric/RegisterFabric.vue'),
        meta: {
            pageTitle: 'Crear Tela',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Telas',
                    to: { name: 'app-provider-my-posts-fabrics' }
                },
                {
                    text: 'Crear Tela',
                    active: true
                }
            ],
            module: 2,
        }
    },
    {
        path: '/provider/my-posts/fabrics/update/:from?/:id',
        name: 'app-provider-my-posts-fabrics-update',
        component: () => import('@/views/provider/my-posts/fabrics/views/update-fabric/UpdateFabric.vue'),
        meta: {
            pageTitle: 'Editar Tela',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Telas',
                    to: { name: 'app-provider-my-posts-fabrics' }
                },
                {
                    text: 'Editar Tela',
                    active: true
                }
            ],
            module: 2,
        }
    },
    {
        path: '/provider/my-posts/fabrics/details/:id',
        name: 'app-provider-my-posts-fabrics-details',
        component: () => import('@/views/provider/my-posts/fabrics/views/fabric-details/FabricDetails.vue'),
        meta: {
            pageTitle: 'Detalles de la Tela',
            breadcrumb: [
                {
                    text: 'Mis publicaciones'
                },
                {
                    text: 'Telas',
                    to: { name: 'app-provider-my-posts-fabrics' }
                },
                {
                    text: 'Detalles de la Tela',
                    active: true
                }
            ],
            module: 2,
        }
    }
]