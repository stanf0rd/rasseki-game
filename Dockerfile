FROM node:16-alpine

WORKDIR /app
COPY build .
RUN mv index.js index.mjs

EXPOSE 8080
ENV PORT=8080

CMD ["node", "index.mjs"]