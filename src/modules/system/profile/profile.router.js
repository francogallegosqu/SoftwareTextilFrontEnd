export default [
    {
        path: '/app/profile',
        name: 'app-profile',
        component: () => import('@/modules/system/profile/Profile.vue'),
        meta: {
            pageTitle: 'Mis Datos',
            breadcrumb: [
                {
                    text: 'Mis Datos',
                    active: true,
                }
            ]
        }
    }
]