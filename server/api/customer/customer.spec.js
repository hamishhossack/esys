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
          expect(res.body.length).to.be.above(1);

          done();
        })
        .catch(done);
    });

    it('should return a valid customer format', function (done) {
      request(app)
        .get('/api/customers')
        .expect(httpStatus.OK)
        .then(function (res) {
          expect(res.body[0].customer_cli).to.be.a('string');
          expect(res.body[0].telephone_number).to.be.a('string');
          expect(res.body[0].call_date).to.be.a('string');
          expect(res.body[0].call_time).to.be.a('string');
          expect(res.body[0].duration).to.be.a('string');
          expect(res.body[0].uk_national).to.be.a('string');
          expect(res.body[0].time_band).to.be.a('string');

          done();
        })
        .catch(done);
    });
  });
});
