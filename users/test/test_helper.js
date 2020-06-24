const mongoose = require("mongoose");

before(done => { // guarantees test will be run after mongoose connects to MongoDB; run just once!
  mongoose.connect(
    "mongodb://localhost:27017/users_test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Warning", error);
    });
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => done());
});
