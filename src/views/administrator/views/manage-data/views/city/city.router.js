export default [
  {
    path: '/city/create/admin',
    name: 'admin-create-city',
    component: () => import('./create-update-city/CreateUpdateCity.vue'),
    meta:{
      module:5,
    }
  },
  {
    path: '/city/list/admin',
    name: 'admin-list-city',
    component: () => import('./list-delete-city/ListDeleteCity.vue'),
    meta:{
      module:5,
    }
  }
]

