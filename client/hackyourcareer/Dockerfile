FROM node:20-alpine

WORKDIR /app

COPY client/hackyourcareer/package*.json ./

RUN npm install

COPY client/hackyourcareer/src ./

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
