export default [
  {
    path: '/country/admin',
    name: 'admin-country',
    component: () => import('./Country.vue'),
    meta: {
      module: 5,
    },
  },
]
