import {Application} from 'express';
import {addSlotHandler} from './add-slot/handler';
import {getSlotsHandler} from './get-slots/handler';
import {getSlotsByDateHandler} from './get-slots-by-date-master/handler';
import {bookSlotHandler} from './book-slot-by-client/handler';
import {getSlotsByClient} from './get-slots-by-client/handler';
import {getSlotsByMaster} from './get-slots-by-master/handler';

const path = '/service-slots';

export function initServiceSlotsEndpoints(app: Application): void {
  app.get(path, getSlotsHandler);
  app.get(`${path}/by-clients/:clientId`, getSlotsByClient);
  app.get(`${path}/by-masters/:masterId`, getSlotsByMaster);
  app.get(`${path}/:masterId/:date`, getSlotsByDateHandler);
  app.post(path, addSlotHandler);
  app.post(`${path}/:id`, bookSlotHandler);
}
