var mongoose = require('mongoose');
var db = require('../../db');

var userSchema = mongoose.Schema({
  username: { type: String, required: true },
  userID: { type: Number, required: true},
  endpoints: {}
});

var User = mongoose.model('User', userSchema);

module.exports = User;

