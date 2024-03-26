const express = require("express");
const app = express();

const errorController = require('./controllers/errors');
const sequelize = require('./utility/database');

app.use(errorController.get404Page);


sequelize.sync()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('listening...')
})