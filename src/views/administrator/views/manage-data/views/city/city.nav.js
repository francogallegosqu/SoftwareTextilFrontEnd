
import createCity from './create-update-city/create.update.city.nav'
import listCity from './list-delete-city/list.delete.city.nav'
export default{
    title: 'City',
    icon: 'HomeIcon',
    rol:'admin',
    route: 'admin-create-city',
    children: [
        createCity,
        listCity,
    ],
}