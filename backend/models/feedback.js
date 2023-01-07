const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true, minlength: 10 },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("UserDetails", userSchema);
