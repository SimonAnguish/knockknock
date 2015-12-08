'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JamesSchema = new Schema({
  name: String,
  home: Boolean,
  active: Boolean
});

module.exports = mongoose.model('James', JamesSchema);