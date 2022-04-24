FROM node:current-alpine
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "dev", "--host", "0.0.0.0"]