import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';
import {IdParamSchema} from '../../../utils/validator';
import {userSelect} from '../inputs/select-input';

export async function handler(req: Request, res: Response): Promise<void> {
  const {id} = req.params;

  const users = await prisma.user.findMany({
    where: {
      categoryId: parseInt(id),
    },
    include: {
      category: true,
      services: true,
      workingDays: true,
    },
  });

  logger.info('Fetched user from DB with categoryId: ', {message: id});

  res.send(users);
}

export const getMastersByCategoryHandler = wrapHandler(handler, {params: IdParamSchema});
