FROM node:alpine

WORKDIR /usr/expressmongo

COPY ./ ./

RUN npm install

CMD ["npm", "start"]