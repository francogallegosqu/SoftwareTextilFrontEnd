export default [
  {
    path: '/signin',
    name: 'auth-login',
    component: () => import('./SignIn.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
]
