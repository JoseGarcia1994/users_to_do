const Users = require('./users.models');
const Categories = require('./categories.models');
const Tasks = require('./tasks.models');

const initModels = () => {
    // Tasks - Users
    Tasks.belongsTo(Users, {foreignKey: 'createdBy'});
    Users.hasMany(Tasks, {foreignKey: 'createdBy'});
    
    //Tasks - Categories
    Tasks.belongsTo(Categories, {foreignKey: 'categoryId'});
    Categories.hasMany(Tasks, {foreignKey: 'categoryId'});
}

module.exports = initModels;