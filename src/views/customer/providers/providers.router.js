import fabricsRouter from "./fabrics/fabrics.router";
import accessoriesRouter from "./accessories/accessories.router";
import servicesRouter from "./services/services.router";

export default [
    ...fabricsRouter,
    ...accessoriesRouter,
    ...servicesRouter,
]