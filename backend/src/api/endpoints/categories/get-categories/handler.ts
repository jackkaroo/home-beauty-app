import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      description: true
    }
  });
  logger.info('Fetched categories from DB');

  res.send(categories);
}

export const getCategoriesHandler = wrapHandler(handler);
