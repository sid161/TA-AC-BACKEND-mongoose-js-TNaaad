var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user.js')

mongoose.connect('mongodb://localhost/demo', (err) => {
    console.log(err ? err: "connected to database");
})

var app = express()

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Welcome");
})

app.post('/users', (req,res) => {
    console.log(req.body);
    User.create(req.body, (err,user) => {
        console.log(err,user);
       // res.json(user)
    })
})

app.get('/users', (req,res) => {
    User.find({},(err,user) => {
        res.json({user:user})
    })
})

app.get('/users/:id',(req,res) => {
    var id = req.params.id // id capture
    User.findById(id, (err,user) => {
        console.log(err);
        res.json(user);
    })
})

app.put('/users/:id', (req,res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true}, (err,updatedUser) =>{
        console.log(err);
        res.json(updatedUser);
    })
})

app.delete('/users/:id',(req,res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        console.log(err);
        res.send(`${deletedUser.name} is deleted`);
    })
})

app.listen(4000, () => {
    console.log("Server listening on port 4k")
})