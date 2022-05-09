import {Application} from 'express';
import {getServicesHandler} from './get-services/handler';
import {addServiceHandler} from './add-service/handler';

const path = '/services';

export function initMasterServicesEndpoints(app: Application): void {
  app.get(path, getServicesHandler);
  app.post(path, addServiceHandler);
}
