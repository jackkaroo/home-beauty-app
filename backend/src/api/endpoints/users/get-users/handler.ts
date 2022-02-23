import {Request, Response} from 'express';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../utils/handler-wrapper';

async function handler(req: Request, res: Response): Promise<void> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      avatarId: true,
      role: true,
    }
  });
  logger.info('Fetched users from DB');

  res.send(users);
}

export const getUsersHandler = wrapHandler(handler);
