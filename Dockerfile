FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run compose:up

COPY . .

CMD ["npm", "start"]