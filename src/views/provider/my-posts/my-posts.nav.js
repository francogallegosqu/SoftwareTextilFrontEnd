import accessoriesNav from "./accessories/accessories.nav"
import fabricsNav from "./fabrics/fabrics.nav"
import servicesNav from "./services/services.nav"

export default [
    {
        header: 'Clientes',
        rol: 'admin',
        module: 2,
    },
    ...accessoriesNav,
    ...fabricsNav,
    ...servicesNav,
]