var request = require('supertest-as-promised');
var expect = require('chai').expect;
var httpStatus = require('http-status');
var app = require('./server');

describe('API', function () {

  describe('# GET /api/health-check', function () {
    it('should return OK', function (done) {
      request(app)
        .get('/api/health-check')
        .expect(httpStatus.OK)
        .then(function (res) {
          expect(res.text).to.equal('OK');
          done();
        });
    });
  });
});
