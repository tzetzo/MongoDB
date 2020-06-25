const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId, //the IDs this array will contain will refer to the user model
    ref: "user" //should match the model definition for user -> see user.js
  }
});

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
