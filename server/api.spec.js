var request = require('supertest-as-promised');
var chai = require('chai');
var expect = chai.expect;
var httpStatus = require('http-status');
var app = require('./server');

chai.config.includeStack = true;

describe('API', function () {

  describe('# GET /api/health-check', function () {
    it('should return 200 with OK', function (done) {
      return request(app)
        .get('/api/health-check')
        .expect(httpStatus.OK)
        .then(function (res) {
          expect(res.text).to.equal('OK');
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/health-check-404', function () {
    it('should return 404 with message', function (done) {
      return request(app)
        .get('/api/health-check-404')
        .expect(httpStatus.NOT_FOUND)
        .then(function (res) {
          expect(res.body.error).to.equal('Invalid request');
          done();
        })
        .catch(done);
    });
  });
});
