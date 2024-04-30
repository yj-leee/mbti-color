FROM node:gallium-alpine AS builder
COPY . /app
WORKDIR /app
RUN npm ci && npm run build

FROM node:gallium-alpine
COPY --from=builder /app/dist /app
COPY package*.json /app/
WORKDIR /app
RUN npm ci --production
EXPOSE 5000
USER daemon
ENTRYPOINT ["node", "src/main.js"]
