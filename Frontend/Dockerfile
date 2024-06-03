FROM node:20-alpine

WORKDIR /Frontend

COPY . .

RUN npm install
RUN npx vite build

EXPOSE 3001

CMD ["node", "dist/index.js"]