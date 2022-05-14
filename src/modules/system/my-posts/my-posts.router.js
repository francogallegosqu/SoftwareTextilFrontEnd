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
        }
    }
]