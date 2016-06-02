FROM node:4.4.2

ENV NODE_ENV $env

RUN npm install -g gulp

ADD . /opt/applications/esys

WORKDIR /opt/applications/esys

RUN npm install && bower install

EXPOSE 9000

CMD /usr/local/bin/gulp serve
