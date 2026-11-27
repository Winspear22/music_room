/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   redis.config.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adnen <adnen@student.42.fr>                +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/11/27 14:34:13 by adnen             #+#    #+#             */
/*   Updated: 2026/11/27 14:34:14 by adnen            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST!,
  port: Number(process.env.REDIS_PORT ?? 6379),
  password: process.env.REDIS_PASSWORD!,
}));
