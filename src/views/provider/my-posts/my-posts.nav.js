import accessoriesNav from "./accessories/accessories.nav"
import fabricsNav from "./fabrics/fabrics.nav"
import servicesNav from "./services/services.nav"

export default [
    {
        header: 'Mis publicaciones',
        rol: 'proveedor',
        module: 2,
    },
    ...fabricsNav,
    ...accessoriesNav,
    ...servicesNav,
]