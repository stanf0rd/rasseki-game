FROM node:16-alpine

WORKDIR /app
COPY build .
# RUN mv index.js index.mjs

CMD ["node", "index.js"]