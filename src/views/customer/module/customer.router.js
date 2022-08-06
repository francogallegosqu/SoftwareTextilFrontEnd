import productionRouter from "../production/production.router";
import fitsRouter from "../fits/fits.router";
import providersRouter from "../providers/providers.router";

export default [
    ...productionRouter,
    ...fitsRouter,
    ...providersRouter
]