import dashboard from '../views/dashboard/dashboard.router'
const routes = [
    { path: '/customer', redirect: { name: 'admin-dashboard-customer' } },
  ...dashboard, 
]

export default routes