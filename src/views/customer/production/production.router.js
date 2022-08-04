export default [
  {
    path: '/customer/production',
    name: 'app-customer-productions',
    component: () => import('@/views/customer/production/Production.vue'),
    meta: {
      pageTitle: 'Producción',
      breadcrumb: [
        {
          text: 'Producción',
          active: true,
        },
      ],
      permittedRoles: ['administrador', 'Comprador', 'comprador'],
      module: 1,
    },
  },
  {
    path: '/customer/production/register',
    name: 'app-customer-productions-register',
    component: () => import('@/views/customer/production/views/register-production/RegisterProduction.vue'),
    meta: {
      pageTitle: 'Agregar producción',
      breadcrumb: [
        {
          text: 'Producción',
          to: { name: 'app-customer-productions' },
        },
        {
          text: 'Agregar producción',
          active: true,
        },
      ],
      module: 1,
    },
  },
  {
    path: '/customer/production/update/:from?/:id',
    name: 'app-customer-productions-update',
    component: () => import('@/views/customer/production/views/update-production/UpdateProduction.vue'),
    meta: {
      pageTitle: 'Editar producción',
      breadcrumb: [
        {
          text: 'Producción',
          to: { name: 'app-customer-productions' },
        },
        {
          text: 'Editar producción',
          active: true,
        },
      ],
      module: 1,
    },
  },
  {
    path: '/customer/production/details/:id',
    name: 'app-customer-productions-details',
    component: () => import('@/views/customer/production/views/production-details/ProductionDetails.vue'),
    meta: {
      pageTitle: 'Detalles de la producción',
      breadcrumb: [
        {
          text: 'Producción',
          to: { name: 'app-customer-productions' },
        },
        {
          text: 'Detalles de la producción',
          active: true,
        },
      ],
      module: 1,
    },
  },
]
