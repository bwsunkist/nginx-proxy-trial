FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY main.js ./

RUN npm install

CMD [ "node", "main.js" ]
