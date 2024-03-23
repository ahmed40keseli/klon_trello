const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./User');

const Board = sequelize.define('Board', {
    board_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }
});

module.exports = Board;



// const Sequelize = require('sequelize');

// const sequelize = require('../utility/database');

// const Board = sequelize.define('board', {
//     id: {
//         type: Sequelize.INTEGER(25),
//         autoincrement: true,
//         allownull: true,
//         primaryKey: true,
//     },
//     title: {
//         type: Sequelize.VARCHAR(255),
//         autoincrement: true
//     },
//     description: Sequelize.TEXT(255),
//     creator_id: {
//         type: Sequelize.INTEGER(25),
//         allownull: false,
//     },
//     // FOREIGN KEY (creator_id) REFERENCES users(user_id)

// });


// module.exports = Board;