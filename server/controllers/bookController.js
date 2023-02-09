const { findByIdAndDelete } = require('../models/Book');
const Books = require('../models/Book');

exports.addBook = async (req, res) => {
  try {
    const { title, author, no_of_pages, published_at } = req.body;
    var d = new Date(published_at);
    var date = d.getDate();
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = d.getFullYear();
    var newDate = date + '/' + month + '/' + year;

    console.log('Formatted Date:', newDate);
    const book = new Books({
      title,
      author,
      no_of_pages,
      published_at: newDate,
    });
    const result = await book.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const result = await Books.find().sort({ createdAt: 'desc' });
    res.status(200).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Books.findById(id);
    if (!result) {
      return res.status(501).json('Book Not Found', err);
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.deleteAllBooks = async (req, res) => {
  try {
    await Books.deleteMany({});
    res.status(200).json('DELETED ALL');
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.editBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Books.findById(id);
    if (!book) {
      return res.status(501).json('Book Not Found', err);
    }
    const result = await Books.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(501).json(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Books.findById(id);
    if (!book) {
      return res.status(501).json('Book Not Found', err);
    }
    await Books.findByIdAndDelete(id);
    res.status(200).json('Successfully Deleted');
  } catch (err) {
    res.status(501).json(err);
  }
};
