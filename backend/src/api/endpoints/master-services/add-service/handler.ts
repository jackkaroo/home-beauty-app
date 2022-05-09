import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {name, duration, price, masterId} = req.body;

  const service = await prisma.masterService.create({
    data: {
      name, duration, price, masterId
    },
  });
  logger.info('Inserted new service into DB with id', {message: service.id});

  res.send(service);
}

export const addServiceHandler = wrapHandler(handler);
