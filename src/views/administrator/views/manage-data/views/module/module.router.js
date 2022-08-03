export default [
  {
    path: '/module/admin',
    name: 'admin-module',
    component: () => import('./Module.vue'),
    meta: {
      module: 5,
    },
  },
]
