import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT ?? 1025),
  from: process.env.SMTP_FROM!,
}));
