/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   database.config.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adnen <adnen@student.42.fr>                +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/11/27 14:34:34 by adnen             #+#    #+#             */
/*   Updated: 2026/11/27 14:34:35 by adnen            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.POSTGRES_HOST!,
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  user: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  name: process.env.POSTGRES_DB!,
}));
