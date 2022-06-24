export default [
    {
      path: '/country/createUpdate/admin',
      name: 'admin-createUpdate-country',
      component: () => import('./create-update-country/CreateUpdateCountry.vue'),
      meta:{
        module:3,
      }
    },
    {
      path: '/country/createUpdate/admin',
      name: 'admin-listDelete-country',
      component: () => import('./list-delete-country/ListDeleteCountry.vue'),
      meta:{
        module:3,
      }
    }
  ]