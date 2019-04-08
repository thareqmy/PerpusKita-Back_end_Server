const api = require('express').Router();

const bisingAPI = require('./bisingkAPI');

api.use(bisingAPI);
module.exports = api;