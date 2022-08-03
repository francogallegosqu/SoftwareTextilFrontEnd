import manageCustomer from '../views/customer/navigation/index'
import manageProvider from '../views/provider/navigation/index'
import manageData from '../views/manage-data/navigation/index'

export default [
  ...manageCustomer,
  ...manageProvider,
  ...manageData,
]
