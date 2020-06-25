const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const Comment = require("../src/comment");
const BlogPost = require("../src/blogPost");

describe("Associations", () => {
  let user, blogPost, comment;

  beforeEach(done => {
    user = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "JS is Great",
      content: "Yep it really is great"
    });
    comment = new Comment({ content: "Congrats on great post" });

    user.blogPosts.push(blogPost); //mongoose will extract only the ID from blogPost and insert it in the blogPosts array field of the user!
    blogPost.comments.push(comment);
    comment.user = user; //mongoose will extract only the ID from user and insert it in the user field of the comment!

    Promise.all([user.save(), blogPost.save(), comment.save()]).then(() => {
      done();
    });
  });

  it("saves a relation between a user and a blogpost", done => {
    //find user and all blogPosts associated with him:
    User.findOne({ name: "Joe" })
      .populate("blogPosts") //modifier populate() used thanks to the ref association in the user model -> see user.js
      .then(user => {
        assert(user.blogPosts[0].title === "JS is Great");
        done();
      });
  });
});
