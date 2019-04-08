const Sequelize = require('sequelize');
const fs = require('fs');

const Bising = db.define('borrow', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    sound: {type: Sequelize.INTEGER, allowNull: false}
});

Bising.createBising = (data, callback) => {

    Borrow.create({
        sound: data.sound
    }).then((borrow) => {
        return callback(null, bising);
    }).catch((err) => {
        return callback(err);
    });
}


module.exports = Bising;