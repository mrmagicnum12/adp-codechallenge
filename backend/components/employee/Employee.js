var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Employee = new Schema({
  fName : String,
  lName : String,
  phone : String,
  email : String,
  department : String,
  title : String
}); 

module.exports = mongoose.model('Employee',Employee);
