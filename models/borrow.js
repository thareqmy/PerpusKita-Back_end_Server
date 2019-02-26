const Sequelize = require('sequelize');
const fs = require('fs');

const Member = require('./member');
const Book = require('./book');
const db = require('./db');

const Borrow = db.define('borrow', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    bookId: {type: Sequelize.INTEGER, allowNull: false},
    memberId: {type: Sequelize.INTEGER, allowNull: false},
    numDay: {type: Sequelize.INTEGER, allowNull: false}
});


Borrow.createBorrow = (data, callback) => {

    Borrow.create({
        bookId: data.bookId,
        memberId: data.memberId,
        numDay: data.numDay
    }).then((borrow) => {
        return callback(null, borrow);
    }).catch((err) => {
        return callback(err);
    });
}

Borrow.updateBorrow = (data, callback) => {
    Borrow.findOne({
        where: {
            bookId: data.bookId,
            memberId: data.memberId
        }
    }).then((borrow) => {
        return callback(null, borrow);
    }).catch((err) => {
        return callback(err);
    });
}

Borrow.deleteBorrow = (data, callback) => {
    Borrow.findOne({
        where: {
            bookId: data.bookId,
            memberId: data.memberId
        }
    }).then((borrow) => {
        // delete from database
        Borrow.destroy().then(() => {
            return callback(null);
        }).catch((err) => {
            return callback(err);
        });
    }).catch((err) => {
        return callback(err);
    });
}

module.exports = Borrow;