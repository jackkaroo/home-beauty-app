import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const {name, description} = req.body;

  const category = await prisma.category.create({
    data: {
      name,
      description
    },
  });
  logger.info('Inserted new category into DB with id', {message: category.id});

  res.send(category);
}

export const addCategoryHandler = wrapHandler(handler);
