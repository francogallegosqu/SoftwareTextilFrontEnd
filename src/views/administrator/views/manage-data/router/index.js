import city from '../views/city/city.router'
import country from '../views/country/country.router'
import country2 from '../views/country2/country.router'
import department from '../views/department/department.router'
const routes = [
    ...city,
    ...country,
    ...department,
    ...country2,
]

export default routes