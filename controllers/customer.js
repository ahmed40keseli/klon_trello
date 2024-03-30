const express = require('express');
const bodyParser = require("body-parser");
const _ = require("underscore");


const Board = require("../models/board");
const User = require("../models/user");
const List = require("../models/list");
const Card = require("../models/card");

exports.postAddBoard = (req,res,next) => {

    const title = req.body.title;
    const description = req.body.description;
    const created_by = req.body.created_by;

    Board.create({
        title:title,
        description:description,
        created_by:created_by,
    })
    .then((result) => {
        console.log(result);
        // res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    });
}

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
        // let body = _.pick(req.body,"username")
        // let welcome=(`${body} hoşgeldiniz`)
        res.send("welcome")
    }).catch((err) => {
        console.log(err);
        res.send('noting')
    });
}

exports.postAddList = (req,res,next) =>{
    const title = req.body.title;
    const board_id = req.body.board_id;
    const position = req.body.position;

    List.create({
        title:title,
        board_id:board_id,
        position:position
    })
    .then((result)=>{
        console.log(result)
        res.send('success')
    }).catch((err)=>{
        console.log(err);
        res.send('nothing')
    });
}

exports.postAddCard = (req,res,next) =>{
    const title = req.body.title;
    const description = req.body.description;
    const list_id = req.body.list_id;
    const position = req.body.position;

    Card.create({
        title:title,
        description:description,
        list_id:list_id,
        position:position
    })
    .then((result)=>{
        console.log(result)
        res.send('success')
    }).catch((err)=>{
        console.log(err);
        res.send('nothing')
    })

}