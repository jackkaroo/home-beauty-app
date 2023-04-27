import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const services = await prisma.masterService.findMany();
  logger.info('Fetched categories from DB');

  res.send(services);
}

export const getServicesHandler = wrapHandler(handler);
