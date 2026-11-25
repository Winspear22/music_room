# Active Node.js LTS on Debian (slim)
FROM node:26-slim AS base

WORKDIR /app

# Install dependencies deterministically from package-lock.json
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

# Development stage (hot-reload via bind mount)
FROM deps AS dev

ENV NODE_ENV=development

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

# Build stage for production
FROM deps AS builder

COPY . .
RUN npm run build

# Production stage
FROM base AS prod

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder --chown=node:node /app/dist ./dist

USER node

EXPOSE 3000

CMD ["node", "dist/main.js"]
