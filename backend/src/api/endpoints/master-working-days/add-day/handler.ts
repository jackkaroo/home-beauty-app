import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {dayOfWeek, startWorkingTime, endWorkingTime, masterId} = req.body;

  const workingDays = await prisma.masterWorkingDay.create({
    data: {
      dayOfWeek, startWorkingTime, endWorkingTime, masterId
    },
  });
  logger.info('Inserted new workingDay into DB with id', {message: workingDays.id});

  res.send(workingDays);
}

export const addDayHandler = wrapHandler(handler);
