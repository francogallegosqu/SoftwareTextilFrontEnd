import fabricsNav from "./fabrics/fabrics.nav"
import accessoriesNav from "./accessories/accessories.nav"
import servicesNav from "./services/services.nav"

export default [
    {
        header: 'Proveedores',
        rol: 'Comprador',
        module: 1,
    },
    ...fabricsNav,
    ...accessoriesNav,
    ...servicesNav
]