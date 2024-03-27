const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const List = require('./list'); 

const Card = sequelize.define('Card', {
    card_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: List,
            key: 'list_id'
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

Card.belongsTo(List, { foreignKey: 'list_id' });

module.exports = Card;
