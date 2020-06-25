const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [
    {
      type: Schema.Types.ObjectId, //the IDs this array will contain will refer to the comment model
      ref: "comment" //should match the model definition for comment -> see comment.js
    }
  ]
});

const BlogPost = mongoose.model("blogPost", BlogPostSchema);
module.exports = BlogPost;
