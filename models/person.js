var mongoose = require('mongoose');
mongoose.connect('mongodb://rawu07:I7r0i1n6a7@ds015780.mlab.com:15780/rawu07');
//mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name: String,
  words: String,
});
module.exports = mongoose.model('Person', personSchema);
