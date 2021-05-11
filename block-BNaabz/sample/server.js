var express = require('express');
var mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/sample',{ useNewUrlParser: true,  useUnifiedTopology: true  }, (err) => {
    console.log(err ? err : "connected to database");
})

var app = express()

app.listen(2000, () => {
    console.log("server listening on port 2k")
})