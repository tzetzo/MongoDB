const assert = require("assert");
const User = require("../src/user");

describe("Deleting records", () => {
  let user;

  beforeEach(done => {
    user = new User({ name: "Josephine" }); //mongoose creates the _id of the document here
    user.save().then(() => done());
  });

  it("model instance remove", done => {
    user
      .remove()
      .then(() => {
        return User.findOne({ name: "Josephine" });
      })
      .then(usr => {
        assert(!usr);
        done();
      });
  });

  // it("class method remove", done => {});
  //
  // it("class method findAndRemove", done => {});
  //
  // it("class method findByIdAndRemove", done => {});
});
