// const express = require("express");
// const app = express();

const sequelize = require('./util/database');

const User = require("./models/user");
const Board = require('./models/board');

sequelize.sync()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

// app.listen(3000, () => {
//     console.log('listening...')
// })