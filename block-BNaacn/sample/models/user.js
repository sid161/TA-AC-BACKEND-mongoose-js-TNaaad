var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    email: {type:String,lowercase:true},
    age: {type:String,default:0},
    password: {type:String,minlength:5},
    createdAt: {type:Date,default:Date.now()},
    favourites: [String]
},{timeStamp:true})

var User = mongoose.model('User',userSchema)
module.exports = User;