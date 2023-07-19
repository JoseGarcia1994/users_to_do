const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Tasks = db.define('tasks',{
    // omito id porque se genera por defecto cmo pk e increment
    title: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdBy: {
        type: DataTypes.INTEGER,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Tasks;