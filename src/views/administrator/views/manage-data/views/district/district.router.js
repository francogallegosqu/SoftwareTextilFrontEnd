export default [
  {
    path: '/district/admin',
    name: 'admin-district',
    component: () => import('./District.vue'),
    meta: {
      module: 5,
    },
  },
]
