import dashboard from '../views/dashboard/dashboard.router'

const routes = [
  { path: '/provider', redirect: { name: 'admin-dashboard-provider' } },
  ...dashboard,
]

export default routes
