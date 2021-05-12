var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: String,
    email: {type:String,lowercase:true},
    age:{type: Number,default:18},
    password:{type:String,min:5,max:20},
    createdAt:{type:Date,default:Date.now()}
})