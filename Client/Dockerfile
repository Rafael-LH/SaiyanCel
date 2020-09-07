FROM node:12-alpine

COPY ["package.json","package-lock.json", "/usr/src/app/"]

WORKDIR /usr/src/app/

RUN npm i

COPY [".","."]

CMD ["npm","run","start"]