var mongoose = require('mongoose');

var googleUserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String
  }
});

//mongoose has a function "model()"that takes a schema and makes a model out of it
var GoogleUser = mongoose.model('GoogleUser', googleUserSchema);

module.exports = GoogleUser;
