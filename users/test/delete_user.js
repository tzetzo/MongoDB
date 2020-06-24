const assert = require("assert");
const User = require("../src/user");

describe("Deleting records", () => {
  let user;

  beforeEach(done => {
    user = new User({ name: "Josephine" }); //mongoose creates the _id of the document here
    user.save().then(() => done());
  });

  it("model instance deleteOne", done => {
    user
      .deleteOne()
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });

  it("class method deleteMany", done => {
    //deletes many users
    User.deleteMany({ name: "Josephine" })
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });

  it("class method findOneAndDelete", done => {
    User.findOneAndDelete({ name: "Josephine" })
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });

  it("class method findByIdAndDelete", done => {
    User.findByIdAndDelete(user._id)
      .then(() => User.findOne({ name: "Josephine" }))
      .then(usr => {
        assert(usr === null);
        done();
      });
  });
});
