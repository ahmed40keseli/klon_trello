const express = require("express");


const sequelize = require('./utility/database.js');

const app = express();

sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(8008)
    })
    .catch(err=>{
        console.log(err);
    });
