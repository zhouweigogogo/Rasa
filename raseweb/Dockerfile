# node 版本号
FROM node:16.16.0-alpine3.15

COPY package*.json ./
ENV NODE_PATH=/node_modules
ENV PATH=$PATH://node_modules/.bin
RUN npm install
ADD . /app
#ADD src/ ./
WORKDIR /app
EXPOSE 3000
CMD ["npm", "start"]