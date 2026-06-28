FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY build/ ./build/
COPY public/ ./public/

EXPOSE 3000

CMD ["npm", "start"]