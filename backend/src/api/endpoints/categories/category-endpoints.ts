import {Application} from 'express';
import {getCategoriesHandler} from './get-categories/handler';
import {addCategoryHandler} from './add-category/handler'
import {getCategoryByIdHandler} from './get-category-by-id/handler';

const path = '/categories';

export function initCategoriesEndpoints(app: Application): void {
  app.get(path, getCategoriesHandler);
  app.get(`${path}/:id`,getCategoryByIdHandler);
  app.post(path, addCategoryHandler);
}
