const assert = require("assert");
const User = require("../src/user");


describe("Creating records", () => {
  it("saves a user", done => {
    const user = new User({ name: "Tzetzo" }); //here mongoose sets user.isNew = true
    user.save().then(() => { //here mongoose sets user.isNew = false
      //make sure the user got saved in the DB
      assert(!user.isNew);
      done();
    });
  });
  // it("", () => {});
});
