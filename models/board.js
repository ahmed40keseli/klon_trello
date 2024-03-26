const Sequelize =require('sequelize');

const sequelize = require('../utility/database');

const Board = sequelize.define('board', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = Board;