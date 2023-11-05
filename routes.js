const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const booksController = require('./controllers/booksController');
const authorsController = require('./controllers/authorsController');
const createAuthorController = require('./controllers/createAuthorController');
const createBookController = require('./controllers/createBookController');

router.get('/', homeController.homePage);
router.get('/home', homeController.homePage);
router.get('/books', booksController.booksPage);
router.get('/authors', authorsController.authorsPage);
router.get('/create-author', createAuthorController.createAuthorPage);
router.get('/create-book', createBookController.createBookPage);

module.exports = router;
