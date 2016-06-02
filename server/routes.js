'use strict';

var config = require('./config/environment');

module.exports = function (app) {

  // API
  app.use('/api/customers', require('./api/customer'));

  app.get('/api/health-check', function (req, res) {
    res.send('OK');
  });

  app.route('/:url(api|app|bower_components|assets)/*')
    .get(function (req, res) {
      res.status(404).json({error: 'Invalid request'});
    });

  app.route('/*')
    .get(function (req, res) {
      res.sendFile(
        app.get('appPath') + '/index.html',
        { root: config.root }
      );
    });

};
