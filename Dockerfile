FROM node:12

WORKDIR /var/www

RUN npm install -g @angular/cli@11.2.7

COPY . /var/www/