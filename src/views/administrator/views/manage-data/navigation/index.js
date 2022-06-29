import manageCity from '../views/city/city.nav'
import manageCountry from '../views/country/country.nav'
import manageDepartment from '../views/department/department.nav'
export default [
    {
        header: 'Manage',
        rol:'admin',
        module:3,
    },
    manageCountry,
    manageDepartment,
    manageCity,
    
]