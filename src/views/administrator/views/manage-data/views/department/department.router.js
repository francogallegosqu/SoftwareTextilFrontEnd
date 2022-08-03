export default [
  {
    path: '/department/admin',
    name: 'admin-department',
    component: () => import('./Department.vue'),
    meta: {
      module: 5,
    },
  },
]
