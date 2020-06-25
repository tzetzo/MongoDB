const mongoose = require("mongoose");

before(done => {
  // guarantees test will be run after mongoose connects to MongoDB; run just once!
  mongoose.connect(
    "mongodb://localhost:27017/users_test",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
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
  const { users, blogposts, comments } = mongoose.connection.collections; //mongoose lowercases the names of the collections!

  users.drop(() => { //we cant drop all collections in MongoDB at the same time!
    blogposts.drop(() => {
      comments.drop(() => {
        done();
      });
    });
  });
});
