var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample6', (err) => {
    console.log(err ? err: "connected to database");
})
var app = express();

app.get((req,res) => {
    res.send("Welcome");
})

app.listen(4000, () => {
    console.log("Server listening on port 4k");
})