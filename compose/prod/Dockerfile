FROM arm64v8/node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM arm64v8/nginx:1.25.2 as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY compose/prod/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
