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
  posts: [PostSchema],
  likes: Number,
  blogPosts: [
    {
      type: Schema.Types.ObjectId, //the IDs this array will contain will refer to the blogPost model
      ref: "blogPost" //should match the model definition for blogPost -> see blogPost.js;  associates the blogPost with the blogPost model
    }
  ]
});

// define virtual field; user.postCount will run the function
UserSchema.virtual("postCount").get(function() {
  // "this" returns the document instance i.e. {name: 'Tzetzo', posts: []}
  return this.posts.length;
});

// User represents the entire collection
const User = mongoose.model("user", UserSchema); // collection "users" is created if doesnt exist

module.exports = User;
