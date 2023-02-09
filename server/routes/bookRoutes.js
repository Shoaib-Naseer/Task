const express = require('express');
const router = express.Router();

const {
  addBook,
  getAllBooks,
  editBook,
  deleteBook,
  deleteAllBooks,
  getBook,
} = require('../controllers/bookController');

router.post('/addBook', addBook);
router.get('/getAllBooks', getAllBooks);
router.get('/getBook/:id', getBook);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);
router.delete('/deleteAll', deleteAllBooks);

module.exports = router;
