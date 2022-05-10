import {Application} from 'express';
import {addDayHandler} from './add-day/handler';
import {getDaysHandler} from './get-days/handler';

const path = '/working-days';

export function initMasterWorkingDaysEndpoints(app: Application): void {
  app.get(path, getDaysHandler);
  app.post(path, addDayHandler);
}
