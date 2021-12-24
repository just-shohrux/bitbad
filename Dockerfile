FROM node:12.4

COPY . /src
WORKDIR /src

COPY package.json /src

RUN npm install --unsafe-perm

ENV NODE_ENV=production

COPY . /src

RUN npm run build

ENV HOST 0.0.0.0
