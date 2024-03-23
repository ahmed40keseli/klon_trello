const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('trello-db', 'root', 'Ah123?kkk', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    }
});

module.exports = sequelize;