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

// const Sequelize = require('sequelize');
// const Sequelize =require('sequelize');
// const sequelize = require('../utility/database');
// const User = require('./user'); // Uncomment if needed

// const Board = sequelize.define('board', {
//     board_id: {
//         type: Sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: Sequelize.STRING(100),
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.TEXT
//     },
//     created_by: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//             model: User,
//             key: 'user_id'
//         }
//     },
//     created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW
//     },
//     updated_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW,
//         onUpdate: Sequelize.NOW
//     }
// });

// module.exports = Board;
