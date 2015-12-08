'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/james', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/james')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});