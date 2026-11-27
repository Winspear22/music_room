import Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().port().default(5432),
  POSTGRES_HOST_PORT: Joi.number().port().optional(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().port().default(6379),
  REDIS_PASSWORD: Joi.string().required(),
  SMTP_HOST: Joi.string().required(),
  SMTP_PORT: Joi.number().port().default(587),
  SMTP_FROM: Joi.string().required(),
  MAILPIT_UI_PORT: Joi.number().port().optional(),
});