'use strict';

var express = require('express');
var chalk = require('chalk');
var config = require('./config/environment');

var app = express();

require('./config/express')(app);
require('./routes')(app);

app.listen(config.port, config.ip, function () {

  console.log(
    chalk.red('\nExpress server listening on port ')
    + chalk.yellow('%d')
    + chalk.red(', in ')
    + chalk.yellow('%s')
    + chalk.red(' mode.\n'),
    config.port,
    app.get('env')
  );

  if (config.env === 'development') {
    require('ripe').ready();
  }

});

module.exports = app;
