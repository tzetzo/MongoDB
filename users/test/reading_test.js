const assert = require("assert");
const User = require("../src/user");

describe("Reading records", () => {
  let user;

  beforeEach(done => {
    user = new User({ name: "Joe" });
    user.save().then(() => done());
  });

  it("finds all users with a name of Joe", done => {
    User.find({ name: "Joe" })
      .then(users => {
        assert(user._id.toString() === users[0]._id.toString());
        done();
      });
  });
});
