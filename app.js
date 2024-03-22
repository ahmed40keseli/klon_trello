const express = require("express");
const mysql = require("mysql");


const db = require('./utility/database.js');

const app = express();

db.execute('SELECT * FROM boards')
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});