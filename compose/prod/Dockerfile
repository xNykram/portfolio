# front-end
FROM node:19 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

#nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
