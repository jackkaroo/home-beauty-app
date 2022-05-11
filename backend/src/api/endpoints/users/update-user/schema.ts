import {Schema} from 'ajv';
import {RequestValidationSchemas} from '../../../../types';

const bodySchema: Schema = {
  type: 'object',
  properties: {
    name: {type: 'string', isNotEmpty: true},
    email: {type: 'string', format: 'email'},
  },
  minProperties: 1,
  additionalProperties: false,
};

export const schema: RequestValidationSchemas = {
  body: bodySchema,
};
