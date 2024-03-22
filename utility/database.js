const mysql = require("mysql2");

const pool  = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Ah123?kkk",
    database:"trellodb"
})

module.exports=pool.promise();




// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('trellodb', 'root', 'Ah123?kkk', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;