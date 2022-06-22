export default [
    {
      path: '/provider/dashboard/admin',
      name: 'admin-dashboard-provider',
      component: () =>
        import('./Dashboard.vue'),
    }
  ]