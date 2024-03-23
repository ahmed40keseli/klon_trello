const Sequelize = require('sequelize');

const sequelize = new Sequelize('trello-DB', 'root', 'Ah123?kkk', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;