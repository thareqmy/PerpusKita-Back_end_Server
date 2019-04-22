const api = require('express').Router();

const bookAPI = require('./bookController');
const libraryAPI = require('./libraryController');
const memberAPI = require('./memberController');
const borrowAPI = require('./borrowController');
const bisingAPI = require('./bisingController');


const adminAuth = require('../../middlewares/adminAuth');

//api.use(adminAuth);
api.use('/book', bookAPI);
api.use('/library', libraryAPI);
api.use('/member', memberAPI);
api.use('/borrow', borrowAPI);
api.use('/bising', bisingAPI);

module.exports = api;