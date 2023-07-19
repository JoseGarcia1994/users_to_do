const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories',{
    // omito id porque se genera por defecto cmo pk e increment
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
});

module.exports = Categories;