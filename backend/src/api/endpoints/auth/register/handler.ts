import {User} from '@prisma/client';
import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
import createHttpError from 'http-errors';
import {prisma} from '../../../../dal/client';
import {logger} from '../../../../logger/logger';
import {wrapHandler} from '../../../../api/utils/handler-wrapper';
import {userSelect} from '../../users/inputs/select-input';
import {schema} from './schema';

export async function handler(req: Request, res: Response): Promise<void> {
  const {name, surname, phone, email, password, role} = req.body;

  const existingUser = await prisma.user.findUnique({where: {email: email}});

  if (existingUser) {
    throw createHttpError(409, `User with email ${email} already exists.`);
  }

  const hash: string = await bcrypt.hash(password, 13);
  const user: Omit<User, 'hash'> = await prisma.user.create({
    data: {
      email,
      name,
      surname,
      phone,
      hash,
      role,
    },
    select: userSelect,
  });
  logger.info('Inserted new user into DB with id', {message: user.id});

  res.send(user);
}

export const registerHandler = wrapHandler(handler, schema);
