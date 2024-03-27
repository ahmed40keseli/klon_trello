const Sequelize =require('sequelize');
const sequelize = require('../util/database');
const User = require('./user');

const Board = sequelize.define('board', {
    board_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id'
        }
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW
    }
});

Board.belongsTo(User, { foreignKey: 'created_by' });

module.exports = Board;

// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');
// const User = require('./user'); // Import User model after it's defined

// const Board = sequelize.define('board', {
//     board_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: true
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
//             model: 'user',
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