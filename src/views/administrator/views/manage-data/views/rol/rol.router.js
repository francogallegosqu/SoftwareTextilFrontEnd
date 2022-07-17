export default [
    {
      path: '/rol/admin',
      name: 'admin-rol',
      component: () =>
        import('./Rol.vue'),
        meta:{
          module:5,
        }
    }
  ]
  