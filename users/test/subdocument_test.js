const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments", () => {
  it("can create a subdocument", (done) => {
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
});
