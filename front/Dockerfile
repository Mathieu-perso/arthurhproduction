FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["sh", "-c", "if [ -d dist ]; then cp -r dist/. /app/build/; else cp -r build/. /app/build/; fi"]
