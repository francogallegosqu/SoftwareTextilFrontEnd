export default [
    {
        path: '/app/my-posts',
        name: 'app-my-posts',
        component: () => import('@/modules/system/my-posts/MyPosts.vue'),
        meta: {
            pageTitle: 'Mis publicaciones',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                    active: true,
                }
            ]
        },
        children: [
            {
                path: 'fabrics',
                name: 'app-my-posts-fabrics',
                component: () => import('@/modules/system/my-posts/views/fabrics/Fabrics.vue'),
                meta: {
                    pageTitle: "Telas",
                    breadcrumb: [
                        {
                            text: 'Mis publicaciones'
                        },
                        {
                            text: 'Telas',
                            active: true,
                        }],
                },
            },
            {
                path: 'tackle',
                name: 'app-my-posts-tackle',
                component: () => import('@/modules/system/my-posts/views/tackle/Tackle.vue'),
                meta: {
                    pageTitle: "Avios",
                    breadcrumb: [
                        {
                            text: 'Mis publicaciones'
                        },
                        {
                            text: 'Avios',
                            active: true,
                        }],
                },
            },
            {
                path: 'services',
                name: 'app-my-posts-services',
                component: () => import('@/modules/system/my-posts/views/services/Services.vue'),
                meta: {
                    pageTitle: "Servicios",
                    breadcrumb: [
                        {
                            text: 'Mis publicaciones'
                        },
                        {
                            text: 'Servicios',
                            active: true,
                        }],
                },
            }
        ]
    },
    {
        path: '/app/my-posts/fabrics/details/:id',
        name: 'app-my-posts-fabrics-details',
        component: () => import('@/modules/system/my-posts/views/fabrics/components/fabric-details/FabricDetails.vue'),
        meta: {
            pageTitle: 'Detalles',
            breadcrumb: [
                {
                    text: 'Mis publicaciones',
                },
                {
                    text: 'Telas',
                    to: { name: 'app-my-posts-fabrics' }
                },
                {
                    text: 'Detalles',
                    active: true
                }
            ]
        },
    }
]