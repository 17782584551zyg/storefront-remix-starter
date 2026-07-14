# Build timestamp: 2026-06-28-v3
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:20-alpine AS production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production && node -e "const fs=require('fs');try{const p=JSON.parse(fs.readFileSync('node_modules/remix-i18next/package.json'));delete p.browser;p.module='./build/index.js';if(p.exports&&p.exports['.'])p.exports['.'].import='./build/index.js';fs.writeFileSync('node_modules/remix-i18next/package.json',JSON.stringify(p,null,2));}catch(e){}"

COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production
CMD ["yarn", "start"]