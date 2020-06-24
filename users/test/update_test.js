const assert = require("assert");
const User = require("../src/user");

describe("Updating records", () => {
  let user;

  beforeEach(done => {
    user = new User({ name: "John" }); //mongoose creates the _id of the document here
    user.save().then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find())
      .then(users => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  }

  it("should update Model Instance i.e. Document using set and save", done => {
    user.set("name", "Alex"); //update property of the document
    assertName(user.save(), done);
  });

  it("should update Model Instance i.e. Document", done => {
    assertName(user.update({ name: "Alex" }), done);
  });
});
