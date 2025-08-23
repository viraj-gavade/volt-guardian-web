# Simple Dockerfile for production
FROM node:20-alpine as deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --ignore-scripts || yarn install --frozen-lockfile || true

FROM node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine as runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json .
RUN npm i --omit=dev --ignore-scripts || true
EXPOSE 3000
CMD ["node", "dist/server.js"]
