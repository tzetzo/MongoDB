const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments", () => {
  it("can create a subdocument", done => {
    const user = new User({
      name: "Joe",
      posts: [{ title: "PostTitle" }]
    });

    user
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(usr => {
        assert(usr.posts[0].title === "PostTitle");
        done();
      });
  });

  it("can add a subdocument to an existing document", done => {
    const user = new User({
      name: "Joe",
      posts: []
    });

    user
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(usr => {
        usr.posts = [...usr.posts, { title: "PostTitle" }];
        return usr.save();
      })
      .then(() => User.findOne({ name: "Joe" }))
      .then(usr => {
        assert(usr.posts[0].title === "PostTitle");
        done();
      });
  });

  it("can remove a subdocument from an existing document", done => {
    const user = new User({
      name: "Joe",
      posts: [{ title: "New Title" }]
    });

    user
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(usr => {
        // usr.posts = usr.posts.filter(post => post.title !== "New Title");
        usr.posts[0].remove();
        return usr.save();
      })
      .then(() => User.findOne({ name: "Joe" }))
      .then(usr => {
        assert(usr.posts.length === 0);
        done();
      });
  });
});
