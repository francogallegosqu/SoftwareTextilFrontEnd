import countryRouter from '../views/country/country.router'
import departmentRouter from '../views/department/department.router'
import cityRouter from '../views/city/city.router'
import districtRouter from '../views/district/district.router'
import moduleRouter from '../views/module/module.router'
import rolRouter from '../views/rol/rol.router'

const routes = [
  ...countryRouter,
  ...departmentRouter,
  ...cityRouter,
  ...districtRouter,
  ...moduleRouter,
  ...rolRouter,
]

export default routes
