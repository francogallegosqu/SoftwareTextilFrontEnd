export default [
    {
      path: '/department/createUpdate/admin',
      name: 'admin-createUpdate-depart',
      component: () => import('./create-update-depart/CreateupdateDepart.vue'),
      meta:{
        module:3,
      }
    },
    {
      path: '/department/listDelete/admin',
      name: 'admin-listDelete-depart',
      component: () => import('./list-delete-depart/ListDeleteDepart.vue'),
      meta:{
        module:3,
      }
    }
  ]