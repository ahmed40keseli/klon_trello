const express = require("express");
const app = express();

// const bodyParser = require('body-parser');
// const path = require('path');

// const errorController = require('./controllers/errors');
const sequelize = require('./util/database');

// const adminRoutes = require('./routes/admin');
// const userRoutes = require('./routes/shop');    


const User = require("./models/user");
const Board = require('./models/board');
const List = require('./models/list');
const Card = require('./models/card');

// app.use('/admin', adminRoutes);
// app.use(userRoutes);

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