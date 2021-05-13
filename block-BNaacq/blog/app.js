var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', (err) => {
    console.log("Database Connected");
})

var app = express()

app.get('/', (req,res) => {
    res.send("Welcome");
})

app.listen(3000, (req,res) => {
    console.log("Server listening on port 3k");
})