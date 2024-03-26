const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-app-trellodb', 'root', 'Ah123?kkk', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: true,
        underscored: true
    }
});

module.exports = sequelize;

