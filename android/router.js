const api = require('express').Router();

const bookAPI = require('./bookAPI');
const borrowAPI = require('./borrowAPI');
const memberAPI = require('./memberAPI');
const libraryAPI = require('./libraryAPI');

api.use(borrowAPI);
api.use(bookAPI);
api.use(libraryAPI);
api.use(memberAPI);

module.exports = api;