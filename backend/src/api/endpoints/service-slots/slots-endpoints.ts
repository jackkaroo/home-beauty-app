import {Application} from 'express';
import {addSlotHandler} from './add-slot/handler';
import {getSlotsHandler} from './get-slots/handler';
import {getSlotsByDateHandler} from './get-slots-by-date-master/handler';

const path = '/service-slots';

export function initServiceSlotsEndpoints(app: Application): void {
  app.get(path, getSlotsHandler);
  app.get(`${path}/:masterId/:date`, getSlotsByDateHandler);
  app.post(path, addSlotHandler);
}
