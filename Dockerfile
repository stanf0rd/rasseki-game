FROM node:16-alpine

ARG DIST_PATH

WORKDIR /app
COPY ${DIST_PATH} .
RUN mv index.js index.mjs

EXPOSE 8080
ENV PORT=8080

CMD ["node", "index.mjs"]