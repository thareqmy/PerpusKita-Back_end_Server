var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://oizexedf:arZOWAbOj6nv2JoYnSxcK_Uy2TIwwXQK@baasu.db.elephantsql.com:5432/oizexedf" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT * FROM \"public\".\"users\"', function(err, result) {
        if(err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].username);
        console.log(client);
        // >> output: 2018-08-23T14:02:57.117Z
        client.end();
    });
});