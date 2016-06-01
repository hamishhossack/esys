var request = require('supertest');
var expect = require('chai').expect;
var httpStatus = require('http-status');
var app = require('../../server');

describe('API', function() {

  describe('Customers', function() {
    it('should return customers', function(done) {
      request(app)
        .get('/api/customers')
        .expect(httpStatus.NOT_FOUND)
        .end(function(err, res) {
          if (err) throw err;

          expect(res.body.length).to.be.above(1);

          done();
        });
    });
  });
});
