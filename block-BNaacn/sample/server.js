var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample7', (err) => {
    console.log(err? err: "Connected to database");
})
var app = express();

app.get((req,res) => {
    res.send("Welcome");
})

app.listen(3000, () => {
    console.log("Server listening on port 3k");
})