import {Application} from 'express';
import {authenticate} from '../../middlewares/auth/authenticate/handler';
import {getUserByIdHandler} from './get-user-by-id/handler';
import {getUsersHandler} from './get-users/handler';
import {updateUserHandler} from './update-user/handler';
import {getMastersByCategoryHandler} from './get-masters-by-category/handler';

const path = '/users';

export function initUserEndpoints(app: Application): void {
  // app.use(path, authenticate);
  app.get(path, getUsersHandler);
  app.get(`${path}/:id`, getUserByIdHandler);
  app.get(`${path}/category/:id`, getMastersByCategoryHandler);
  app.put(`${path}/:id`, updateUserHandler);
}
