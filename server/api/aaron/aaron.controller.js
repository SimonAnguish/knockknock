'use strict';

var _ = require('lodash');
var Aaron = require('./aaron.model');

// Get list of aarons
exports.index = function(req, res) {
  Aaron.find(function (err, aarons) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(aarons);
  });
};

// Get a single aaron
exports.show = function(req, res) {
  Aaron.findById(req.params.id, function (err, aaron) {
    if(err) { return handleError(res, err); }
    if(!aaron) { return res.status(404).send('Not Found'); }
    return res.json(aaron);
  });
};

// Creates a new aaron in the DB.
exports.create = function(req, res) {
  Aaron.create(req.body, function(err, aaron) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(aaron);
  });
};

// Updates an existing aaron in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Aaron.findById(req.params.id, function (err, aaron) {
    if (err) { return handleError(res, err); }
    if(!aaron) { return res.status(404).send('Not Found'); }
    var updated = _.merge(aaron, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(aaron);
    });
  });
};

// Deletes a aaron from the DB.
exports.destroy = function(req, res) {
  Aaron.findById(req.params.id, function (err, aaron) {
    if(err) { return handleError(res, err); }
    if(!aaron) { return res.status(404).send('Not Found'); }
    aaron.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}