// const express = require("express");
// const app = express();

const sequelize = require('./util/database');

const board = require("./models/board");
const user = require("./models/user");



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