var mongoose = require('mongoose');

var supplySchema = new mongoose.Schema({
  name: String,
  category: String,
});

var Supply = mongoose.model('Supply', supplySchema);

// make this available to our other files
module.exports = Supply;
