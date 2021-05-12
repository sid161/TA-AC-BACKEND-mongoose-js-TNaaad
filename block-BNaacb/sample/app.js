var express = require('express');
var mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/sample1',{ useNewUrlParser: true,   useUnifiedTopology: true}, (err) => {
    console.log(err? err: "connected to database")
})

var app = express();

app.listen(3000, () => {
    console.log("server listening on port 3k")
})