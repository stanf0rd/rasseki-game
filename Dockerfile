FROM node:16-alpine

WORKDIR /app
COPY build .
COPY package.json .

CMD ["node", "index.js"]