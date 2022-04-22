FROM node:17-alpine3.14

WORKDIR /app

COPY package.json /app
COPY . /app

EXPOSE 3000

CMD npm run start
