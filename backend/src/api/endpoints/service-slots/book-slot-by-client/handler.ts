import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {id} = req.params;

  const updatedSlot = await prisma.serviceSlot.update({
    where: {id: parseInt(id)},
    data: req.body
  });

  logger.info('Updated serviceSlot into DB with id', {message: updatedSlot.id});

  res.send(updatedSlot);
}

export const bookSlotHandler = wrapHandler(handler);
