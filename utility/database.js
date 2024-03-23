const Sequelize = require('sequelize');

const sequelize = new Sequelize('trello-DB', 'root', 'Ah123?kkk', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;



// const mysql = require("mysql2");

// const pool  = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"Ah123?kkk",
//     database:"trellodb"
// })

// module.exports=pool.promise();