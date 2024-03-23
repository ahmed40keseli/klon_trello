const { DataTypes } = require('sequelize');
const sequelize = require('../utility/database');
const User = require('./user'); // Uncomment if needed

const Board = sequelize.define('board', {
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


// const { sequelize } = require('sequelize');
// const Sequelize = require('sequelize');
// const sequelize = require('../utility/database');
// const User = require('./User');

// const Board = sequelize.define('board', {
//     board_id: {
//         type: sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: sequelize.STRING(100),
//         allowNull: false
//     },
//     description: {
//         type: sequelize.TEXT
//     },
//     created_by: {
//         type: sequelize.INTEGER,
//         allowNull: false,
//         references: {
//             model: User,
//             key: 'user_id'
//         }
//     },
//     created_at: {
//         type: sequelize.DATE,
//         defaultValue: sequelize.NOW
//     },
//     updated_at: {
//         type: sequelize.DATE,
//         defaultValue: sequelize.NOW,
//         onUpdate: sequelize.NOW
//     }
// });

// module.exports = Board;
