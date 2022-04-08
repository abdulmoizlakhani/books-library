const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
