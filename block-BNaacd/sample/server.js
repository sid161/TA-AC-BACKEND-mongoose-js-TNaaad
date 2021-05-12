var express = require('express');
var mongoose = require('mongoose');



mongoose.connect("mongodb://localhost/sample2",(err) => {
    console.log(err ? err : "connected to database");
})
var app = express();

app.listen(3000, () => {
    console.log("Server listening to port 3k")
})