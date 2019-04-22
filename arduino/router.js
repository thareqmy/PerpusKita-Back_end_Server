const api = require('express').Router();

const bisingAPI = require('./bisingAPI');

api.use(bisingAPI);
module.exports = api;