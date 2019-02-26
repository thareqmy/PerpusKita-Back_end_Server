const express = require( 'express' )
    , https = require("https")
    , fs = require( 'fs' );
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// import api endpoint
const androidAPI = require('./android/router');
const adminAPI = require('./admin/controllers/router'); 
const api = require('express').Router();
const tokenAuth = require('./middlewares/tokenAuth');

// import admin page
const admin = require('./admin/views/index');

// port number
const PORT =process.env.PORT || 3000;
//var https = require('https');

// parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

// parse cookie
app.use(cookieParser());

app.get('/', (req, res) => {
    res.redirect('/admin');
});

app.use('/admin', admin);
app.use('/api', api);
app.use('/files', express.static(__dirname + '/files'));
app.use('/static', express.static(__dirname + '/admin/views/pages'));

api.use(tokenAuth);
api.use('/admin', adminAPI);
api.use('/android', androidAPI);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});


