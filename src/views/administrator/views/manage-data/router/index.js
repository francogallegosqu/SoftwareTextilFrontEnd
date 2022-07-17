import city from '../views/city/city.router'
import country from '../views/country/country.router'
import department from '../views/department/department.router'
const routes = [
    ...city,
    ...department,
    ...country,
]

export default routes