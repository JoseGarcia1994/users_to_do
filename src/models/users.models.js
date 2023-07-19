const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Users = db.define('users', {
    // omito id porque se genera por defecto cmo pk e increment
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
       type:  DataTypes.STRING,
       unique: true,
       allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Users;