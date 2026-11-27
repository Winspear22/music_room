# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: adnen <adnen@student.42.fr>                +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2026/11/25 10:13:11 by adnen             #+#    #+#              #
#    Updated: 2026/11/27 00:45:51 by adnen            ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

COMPOSE := $(shell docker compose version >/dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

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

db-shell:
	$(COMPOSE) exec postgresql sh -c 'psql -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"'

redis-cli:
	@sh -c 'set -a && . ./.env && set +a && $(COMPOSE) exec redis redis-cli -a "$$REDIS_PASSWORD"'

.PHONY: all up dev down stop logs ps shell db-shell redis-cli test lint build clean fclean re