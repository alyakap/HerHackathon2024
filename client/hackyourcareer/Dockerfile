FROM node:22-alpine

WORKDIR /app


RUN npm config set registry https://registry.npmjs.org/

COPY package.json /app/

RUN npm install

COPY public /app/public
COPY src /app/src

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
