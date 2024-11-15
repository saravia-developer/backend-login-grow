FROM node:20-bullseye
WORKDIR /app
COPY /package*.json .
RUN npm install
COPY . .
RUN touch .env
COPY /@deploment/.env-develop .env
COPY /prisma ./prisma
EXPOSE 3000
CMD [ "npm", "run", "prod" ]