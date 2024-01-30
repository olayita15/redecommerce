FROM node:18.14.2-slim

# make the 'app' folder the current working directory
WORKDIR /usr/src/app/my-app
COPY front-basic/package*.json ./


RUN npm install


EXPOSE 6060

CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]
