# Pull base image.
FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install npm@latest -g
RUN npm install

# Expose ports.
EXPOSE 8100

ENV AWS_ENABLE=true

CMD [ "npm", "start" ]
