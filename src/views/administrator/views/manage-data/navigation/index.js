import manageCity from '../views/city/city.nav'
import manageCountry from '../views/country/country.nav'
import manageCountry2 from '../views/country2/country.nav'
import manageDepartment from '../views/department/department.nav'
export default [
    {
        header: 'Manage',
        rol:'administrador',
        module:5,
    },
    manageCountry,
    manageDepartment,
    manageCity,
    manageCountry2,
    
]