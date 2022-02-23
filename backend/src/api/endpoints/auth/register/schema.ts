import {Schema} from 'ajv';
import {RequestValidationSchemas} from '../../../../types';

const bodySchema: Schema = {
  type: 'object',
  properties: {
    name: {type: 'string', isNotEmpty: true},
    surname: {type: 'string', isNotEmpty: true},
    phone: {type: 'string', isNotEmpty: true},
    email: {type: 'string', format: 'email', isNotEmpty: true},
    password: {type: 'string', format: 'password', isNotEmpty: true},
    role: {type: 'string', isNotEmpty: true}
  },
  required: ['name', 'email', 'password', 'phone'],
  additionalProperties: false,
};

export const schema: RequestValidationSchemas = {
  body: bodySchema,
};
