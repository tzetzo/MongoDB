const mongoose = require("mongoose");
const PostSchema = require("./post");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String, //String is JS global object
    validate: {
      validator: name => name.length > 2,
      message: "Name must be longer than 2 characters."
    },
    required: [true, "Name is required."]
  },
  postCount: Number,
  posts: [PostSchema]
});

// User represents the entire collection
const User = mongoose.model("user", UserSchema); // collection "users" is created if doesnt exist

module.exports = User;
