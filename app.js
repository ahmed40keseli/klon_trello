const express = require("express");

const sequelize = require('./utility/database');

const app = express();

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(5009)
    })
    .catch(err=>{
        console.log(err);
    });
