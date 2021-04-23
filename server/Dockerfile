FROM node:14.16.1-slim

RUN apt-get update || : && apt-get install python -y

RUN apt-get install build-essential -y

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
RUN npm i

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
