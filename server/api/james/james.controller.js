'use strict';

var _ = require('lodash');
var James = require('./james.model');

// Get list of jamess
exports.index = function(req, res) {
  James.find(function (err, jamess) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(jamess);
  });
};

// Get a single james
exports.show = function(req, res) {
  James.findById(req.params.id, function (err, james) {
    if(err) { return handleError(res, err); }
    if(!james) { return res.status(404).send('Not Found'); }
    return res.json(james);
  });
};

// Creates a new james in the DB.
exports.create = function(req, res) {
  James.create(req.body, function(err, james) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(james);
  });
};

// Updates an existing james in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  James.findById(req.params.id, function (err, james) {
    if (err) { return handleError(res, err); }
    if(!james) { return res.status(404).send('Not Found'); }
    var updated = _.merge(james, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(james);
    });
  });
};

// Deletes a james from the DB.
exports.destroy = function(req, res) {
  James.findById(req.params.id, function (err, james) {
    if(err) { return handleError(res, err); }
    if(!james) { return res.status(404).send('Not Found'); }
    james.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}