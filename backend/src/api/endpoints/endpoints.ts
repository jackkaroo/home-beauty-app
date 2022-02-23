import {Application} from 'express';
import {initAuthEndpoints} from './auth/auth-endpoints';
import {initUserEndpoints} from './users/user-endpoints';

export function initEndpoints(app: Application): void {
  initAuthEndpoints(app);
  initUserEndpoints(app);
  //TODO add images
  //TODO add some kind of feed
}
