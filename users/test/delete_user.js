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
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });

  it("class method deleteMany", done => {
    //removes many users
    User
      .deleteMany({name: "Josephine"})
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });

  // it("class method findAndRemove", done => {});
  //
  // it("class method findByIdAndRemove", done => {});
});
