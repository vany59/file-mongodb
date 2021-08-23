FROM node:12-alpine
WORKDIR /usr/src/app
COPY ./server/main.js ./
COPY ./server/package*.json ./
COPY ./server/db/ ./db/
COPY ./server/src/ ./src/
COPY ./server/public/ ./public/
RUN npm ci --only=production
CMD [ "node", "index.js" ]