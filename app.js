const express = require("express");
const app = express();

const bodyParser = require('body-parser');

const errorController = require('./controllers/errors');
const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/customer');    


const User = require("./models/user");
const Board = require('./models/board');
const List = require('./models/list');
const Card = require('./models/card');

app.use(bodyParser.json());  

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

sequelize.sync()
    .then(result => {
        // console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});