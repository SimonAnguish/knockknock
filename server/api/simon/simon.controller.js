'use strict';

var _ = require('lodash');
var Simon = require('./simon.model');

// Get list of simons
exports.index = function(req, res) {
  Simon.find(function (err, simons) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(simons);
  });
};

// Get a single simon
exports.show = function(req, res) {
  Simon.findById(req.params.id, function (err, simon) {
    if(err) { return handleError(res, err); }
    if(!simon) { return res.status(404).send('Not Found'); }
    return res.json(simon);
  });
};

// Creates a new simon in the DB.
exports.create = function(req, res) {
  Simon.create(req.body, function(err, simon) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(simon);
  });
};

// Updates an existing simon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Simon.findById(req.params.id, function (err, simon) {
    if (err) { return handleError(res, err); }
    if(!simon) { return res.status(404).send('Not Found'); }
    var updated = _.merge(simon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(simon);
    });
  });
};

// Deletes a simon from the DB.
exports.destroy = function(req, res) {
  Simon.findById(req.params.id, function (err, simon) {
    if(err) { return handleError(res, err); }
    if(!simon) { return res.status(404).send('Not Found'); }
    simon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}