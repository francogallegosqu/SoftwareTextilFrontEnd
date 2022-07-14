export default [
    {
      path: '/customer/dashboard/admin',
      name: 'admin-dashboard-customer',
      component: () =>
        import('./Dashboard.vue'),
        meta:{
          module:3,
        }
    }
  ]
  