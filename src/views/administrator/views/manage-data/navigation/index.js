import countryNav from '../views/country/country.nav'
import departmentNav from '../views/department/department.nav'
import cityNav from '../views/city/city.nav'
import districtNav from '../views/district/district.nav'
import moduleNav from '../views/module/module.nav'
import rolNav from '../views/rol/rol.nav'

export default [
  {
    header: 'Manage',
    rol: 'administrador',
    module: 5,
  },
  countryNav,
  departmentNav,
  cityNav,
  districtNav,
  moduleNav,
  rolNav,

]
