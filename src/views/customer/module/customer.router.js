import productionRouter from "../production/production.router";
import fitsRouter from "../fits/fits.router";
import categoriesRouter from "../categories/categories.router";
import subcategoriesRouter from "../subcategories/subcategories.router";
import providersRouter from "../providers/providers.router";

export default [
    ...productionRouter,
    ...fitsRouter,
    ...categoriesRouter,
    ...subcategoriesRouter,
    ...providersRouter
]