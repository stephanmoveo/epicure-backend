# syntax=docker/dockerfile:1

FROM node:12

# ENV NODE_ENV=production

WORKDIR /app

# ADD "./package.json" "./app/package.json"

COPY package*.json ./app

RUN npm install

COPY . .

CMD [ "node", "index.js" ]


