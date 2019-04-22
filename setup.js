const db = require('./models/db');
const dotenv = require('dotenv');

const User = require('./models/user');
const Library = require('./models/library');
const Book = require('./models/book');
const Member = require('./models/member');
const Borrow = require('./models/borrow');
const Bising = require('./models/bising');

const vars = dotenv.config();
if (vars.error) {
  throw vars.error
}

db.sync({ force: true }).then(() => {
    User.createUser({
        username: 'admin',
        password: 'satu',
        admin: true
    }, (err, token) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${token}`);
        }
    });

    Bising.createBising( {
        sound :  1008
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  561
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  971
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });


    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  970
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  970
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  970
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  969
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });
    Bising.createBising( {
        sound :  970
    }, (err, data) => {
        if (err) {
            console.log(`Error : ${err}`);
        } else {
            console.log(`Token : ${data.token}`);
        }


    });









});
