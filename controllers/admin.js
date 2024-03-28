const Board = require("../models/board");
const User = require("../models/user");
const List = require("../models/list");
const Card = require("../models/card");


// exports.getAddUser = (req,res,next) =>{
//     res.render('register form')
// }

exports.postAddUser = (req,res,next) =>{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.create({
        username:username,
        email:email,
        password:password           
    })
    .then((result) => {
        console.log(result);
        // res.redirect('/');
    }).catch((err) => {
        console.log(result);
    });
}