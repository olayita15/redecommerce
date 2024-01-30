FROM node:18.14.2-slim

# Instala git
RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

# Resto de tu Dockerfile
WORKDIR /usr/src/app/my-app
COPY front-basic/package*.json ./
RUN npm install
EXPOSE 6060
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0"]

