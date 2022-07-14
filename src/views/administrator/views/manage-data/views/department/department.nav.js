import createUpdateDepart from './create-update-depart/create.update.depart.nav'
import listDeleteDepart from './list-delete-depart/list.delete.depart.nav'
export default{
    title: 'Departamento',
    icon: 'MapPinIcon',
    rol:'administrador',
    route: 'admin-createUpdate-depart',
    children: [
        createUpdateDepart,
        listDeleteDepart,
    ],
}