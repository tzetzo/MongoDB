const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String //String is JS global object
  }
});

module.exports = PostSchema;
