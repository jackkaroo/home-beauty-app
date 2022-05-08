import {Application} from 'express';
import {getCategoriesHandler} from '../categories/get-categories/handler';
import {addCategoryHandler} from '../categories/add-category/handler'

const path = '/categories';

export function initCategoriesEndpoints(app: Application): void {
  app.get(path, getCategoriesHandler);
  app.post(path, addCategoryHandler);
}
