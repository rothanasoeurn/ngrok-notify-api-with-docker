FROM docker-registry.sabay.com/docker/node:20-alpine-release

COPY ./app ${APP_DIR}

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]