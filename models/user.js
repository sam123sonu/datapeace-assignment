const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
  id:Number,
  first_name:String,
  last_name:String,
  company_name:String,
  city:String,
  state:String,
  zip:Number,
  email:String,
  web:String,
  age:Number
  }) 
);

module.exports = User;
