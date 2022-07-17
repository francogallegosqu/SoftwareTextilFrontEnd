
import createUpdateCountry from './create-update-country/create.update.country.nav'
import listDeleteCountry from './list-delete-country/list.delete.country.nav'
export default{
    title: 'Country',
    icon: 'FlagIcon',
    rol:'administrador',
    route: 'admin-createUpdate-country',
    children: [
        createUpdateCountry,
        listDeleteCountry,
    ],
}