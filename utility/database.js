const Sequelize = require('sequelize');

const sequelize = new Sequelize('sql_backend', 'root', 'Ah123?kkk', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;