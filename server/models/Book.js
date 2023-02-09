const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book Title is Compulsory'],
    },
    author: {
      type: String,
      required: [true, 'Author Name is Compulsory'],
    },
    no_of_pages: {
      type: Number,
    },
    published_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Books', bookSchema);
