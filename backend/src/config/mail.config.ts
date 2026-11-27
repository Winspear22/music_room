/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mail.config.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adnen <adnen@student.42.fr>                +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/11/27 14:34:19 by adnen             #+#    #+#             */
/*   Updated: 2026/11/27 14:34:20 by adnen            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT ?? 1025),
  from: process.env.SMTP_FROM!,
}));
