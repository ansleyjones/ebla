'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  info: String,
  active: Boolean
});


module.exports = mongoose.model('Thing', ThingSchema);
