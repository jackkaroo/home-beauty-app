import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {date, slotStartTime, slotEndTime, serviceId, masterId, clientId} = req.body;

  const serviceSlot = await prisma.serviceSlot.create({
    data: {
      date, slotStartTime, slotEndTime, serviceId, masterId, clientId
    },
  });
  logger.info('Inserted new serviceSlot into DB with id', {message: serviceSlot.id});

  res.send(serviceSlot);
}

export const addSlotHandler = wrapHandler(handler);
