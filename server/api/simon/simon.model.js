'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SimonSchema = new Schema({
  name: String,
  home: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Simon', SimonSchema);