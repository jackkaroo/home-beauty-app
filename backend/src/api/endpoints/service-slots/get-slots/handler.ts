import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const serviceSlots = await prisma.serviceSlot.findMany();
  logger.info('Fetched serviceSlots from DB');

  res.send(serviceSlots);
}

export const getSlotsHandler = wrapHandler(handler);
