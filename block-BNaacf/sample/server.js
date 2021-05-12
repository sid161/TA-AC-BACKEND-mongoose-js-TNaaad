var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample3', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? err: "connected to database");
})

var app = express();




app.listen(3000, () => {
    console.log("Server listening on port 3k");
})