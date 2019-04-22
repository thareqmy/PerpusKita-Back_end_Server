const Sequelize = require('sequelize');
const fs = require('fs');


const db = require('./db');

const Bising = db.define('bising', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    sound: {type: Sequelize.INTEGER, allowNull: false}
});

Bising.createBising = (data, callback) => {

    Bising.create({
        sound: data.sound
    }).then((borrow) => {
        return callback(null, bising);
    }).catch((err) => {
        return callback(err);
    });
}


module.exports = Bising;