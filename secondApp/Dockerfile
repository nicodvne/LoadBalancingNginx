FROM node
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./
EXPOSE 3111

CMD ["npm" , "run", "start"]