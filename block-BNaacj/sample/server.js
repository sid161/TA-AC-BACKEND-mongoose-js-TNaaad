var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample5', (err) => {
    console.log(err ? err: "connected to database");
})
 
var app = express();

app.get((req,res) => {
    res.send("welcome");
})

app.listen(4000,() => {
    console.log("server listening on 4k");
})
