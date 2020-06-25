const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String, //String is JS global object
  postCount: Number
});

// User represents the entire collection
const User = mongoose.model("user", UserSchema); // collection "users" is created if doesnt exist

module.exports = User;
