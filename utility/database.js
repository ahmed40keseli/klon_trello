const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-app-trellodb', 'root', 'Ah123?kkk', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;

// define: {
//     timestamps: true,
//     underscored: true
// }