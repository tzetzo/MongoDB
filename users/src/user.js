const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String } //String is JS global object
});

// User represents the entire collection
const User = mongoose.model("user", UserSchema); // collection "users" is created if doesnt exist

module.exports = User;
