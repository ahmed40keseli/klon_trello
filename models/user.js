
const { DataTypes } = require('sequelize');
const sequelize = require('../utility/database');

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
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

module.exports = User;


// const { sequelize } = require('sequelize');
// const sequelize = require('../utility/database');

// const User = sequelize.define('user', {
//     user_id: {
//         type: sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     username: {
//         type: sequelize.STRING(50),
//         allowNull: false,
//         unique: true
//     },
//     email: {
//         type: sequelize.STRING(100),
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: sequelize.STRING(255),
//         allowNull: false
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

// module.exports = User;