import {Application} from 'express';
import {initAuthEndpoints} from './auth/auth-endpoints';
import {initUserEndpoints} from './users/user-endpoints';
import {initCategoriesEndpoints} from './categories/category-endpoints';


export function initEndpoints(app: Application): void {
  initAuthEndpoints(app);
  initUserEndpoints(app);
  initCategoriesEndpoints(app);
}
