### STAGE 1: Build ###
FROM node AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/untitled /usr/share/nginx/html
