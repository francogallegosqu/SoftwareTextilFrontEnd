// import dashboardCustomer from '../views/customer/router'
// import dashbboardProvider from '../views/provider/router'
import chooser from '../views/chooser/chooser.router'
import controller from '../views/manage-data/router'
const routes = [
  // ...dashboardCustomer,
  ...chooser,
  ...controller,
  // ...dashbboardProvider,
]

export default routes