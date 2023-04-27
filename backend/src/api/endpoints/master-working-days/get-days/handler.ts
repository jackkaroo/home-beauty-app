import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const workingDays = await prisma.masterWorkingDay.findMany();
  logger.info('Fetched workingDays from DB');

  res.send(workingDays);
}

export const getDaysHandler = wrapHandler(handler);
