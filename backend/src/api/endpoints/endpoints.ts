import {Application} from 'express';
import {initAuthEndpoints} from './auth/auth-endpoints';
import {initUserEndpoints} from './users/user-endpoints';
import {initCategoriesEndpoints} from './categories/category-endpoints';
import {initMasterServicesEndpoints} from './master-services/services-endpoints';
import {initMasterWorkingDaysEndpoints} from './master-working-days/days-endpoints';
import {initServiceSlotsEndpoints} from './service-slots/slots-endpoints';


export function initEndpoints(app: Application): void {
  initAuthEndpoints(app);
  initUserEndpoints(app);
  initCategoriesEndpoints(app);
  initMasterServicesEndpoints(app);
  initMasterWorkingDaysEndpoints(app);
  initServiceSlotsEndpoints(app);
}
