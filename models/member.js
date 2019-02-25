const Sequelize = require('sequelize');
const db = require('./db');

const Member = db.define('member', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false }
});

Member.createMember = (data, callback) => {
    Member.create({
        email: data.email,
        password: data.password
    }).then((member) => {
        return callback(null, member);
    }).catch((err) => {
        return callback(err);
    });
}

module.exports = Member;