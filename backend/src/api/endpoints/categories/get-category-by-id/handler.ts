import {Request, Response} from 'express';
import createHttpError from 'http-errors';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';
import {IdParamSchema} from '../../../utils/validator';

export async function handler(req: Request, res: Response): Promise<void> {
  const {id} = req.params;

  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      name: true,
      description: true
    }
  });

  if (!category) {
    throw createHttpError(404, 'category not found');
  }

  logger.info('Fetched category from DB with id: ', {message: id});

  res.send(category);
}

export const getCategoryByIdHandler = wrapHandler(handler, {params: IdParamSchema});
