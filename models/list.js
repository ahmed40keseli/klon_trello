const Sequelize =require('sequelize');
const sequelize = require('../util/database');
const Board = require('./board');

const List = sequelize.define('List', {
    list_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    board_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Board,
            key: 'board_id'
        }
    },
    position: {
        type: Sequelize.INTEGER,
        allowNull: true 
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
        onUpdate: Sequelize.NOW
    }
}, {
    timestamps: false, 
    underscored: true 
});

List.belongsTo(Board, { foreignKey: 'board_id' });

module.exports = List;



// const Sequelize =require('sequelize');
// const sequelize = require('../util/database');

// const List = sequelize.define('list', {
//     list_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         allowNull: true,
//         autoIncrement: true
//     },
//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     board_id: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         autoIncrement: false,
//     },
//     position:{
//         type:Sequelize.INTEGER
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

// List.belongsTo(require('./board'), { foreignKey: 'board_id' });

// module.exports = List;