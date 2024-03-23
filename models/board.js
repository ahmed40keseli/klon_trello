// const { sequelize } = require('sequelize');
const sequelize = require('../database/connection');
// const User = require('./User');

const Board = sequelize.define('board', {
    board_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: sequelize.TEXT
    },
    created_by: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    created_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
    updated_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW,
        onUpdate: sequelize.NOW
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