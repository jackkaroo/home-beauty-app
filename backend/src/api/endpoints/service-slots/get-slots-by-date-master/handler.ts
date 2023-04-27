import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {masterId, date} = req.params;

  const serviceSlots = await prisma.serviceSlot.findMany({
    where: {
      masterId: parseInt(masterId),
      date: date
    }
  });
  logger.info('Fetched serviceSlots from DB');

  res.send(serviceSlots);
}

export const getSlotsByDateHandler = wrapHandler(handler);
