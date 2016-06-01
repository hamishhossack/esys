var request = require('supertest-as-promised');
var expect = require('chai').expect;
var httpStatus = require('http-status');
var app = require('../../server');

describe('API', function () {

  describe('# GET /api/customers', function () {
    it('should return customers', function (done) {
      request(app)
        .get('/api/customers')
        .expect(httpStatus.OK)
        .then(function (res) {
          console.log(res);

          expect(res.body.length).to.be.above(1);

          done();
        });
    });
  });
});
