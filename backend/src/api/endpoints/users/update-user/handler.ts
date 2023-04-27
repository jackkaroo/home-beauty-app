import {Response, Request} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

export async function handler(req: Request, res: Response): Promise<void> {
  const {id} = req.params;

  const updateResult = await prisma.user.update({
    where: {id: parseInt(id)},
    data: req.body
  });

  logger.info('Updated user: ', {message: id});
  res.send(updateResult);
}

export const updateUserHandler = wrapHandler(handler);
