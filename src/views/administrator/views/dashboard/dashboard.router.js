export default [
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () =>
      import('@/views/administrator/views/dashboard/Dashboard.vue'),
  }
]
