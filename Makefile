# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adnen <adnen@student.42.fr>                +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2026/11/25 10:13:11 by adnen             #+#    #+#              #
#    Updated: 2026/11/25 14:50:00 by adnen            ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

COMPOSE := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

.PHONY: all up dev down stop logs ps shell test lint build clean fclean re

all: up

up:
	$(COMPOSE) up -d --build -V

dev:
	$(COMPOSE) up --build -V

down:
	$(COMPOSE) down

stop:
	$(COMPOSE) stop

logs:
	$(COMPOSE) logs -f backend

ps:
	$(COMPOSE) ps

shell:
	$(COMPOSE) exec backend sh

test:
	$(COMPOSE) exec backend npm test

lint:
	$(COMPOSE) exec backend npm run lint

build:
	$(COMPOSE) build

clean:
	$(COMPOSE) down --remove-orphans

fclean:
	$(COMPOSE) down -v --rmi local --remove-orphans

re: fclean up
