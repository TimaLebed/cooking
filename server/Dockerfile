FROM node:latest

WORKDIR /usr/app

COPY package*.json ./
RUN npm i
COPY ./src ./src

COPY ./.env .

CMD ["npm", "run" , "start"]