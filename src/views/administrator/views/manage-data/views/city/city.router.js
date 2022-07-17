export default [
  {
    path: '/city/admin',
    name: 'admin-city',
    component: () =>
      import('./City.vue'),
      meta:{
        module:5,
      }
  }
]
