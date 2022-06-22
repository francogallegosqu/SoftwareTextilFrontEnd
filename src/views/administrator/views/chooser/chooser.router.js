export default [
    {
      path: '/admin/chooser',
      name: 'admin-chooser',
      component: () =>
        import('@/views/administrator/views/chooser/Chooser.vue'),
        meta:{
            layout:'full'
        }
    }
  ]
  