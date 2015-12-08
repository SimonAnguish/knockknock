'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AaronSchema = new Schema({
  name: String,
  home: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Aaron', AaronSchema);