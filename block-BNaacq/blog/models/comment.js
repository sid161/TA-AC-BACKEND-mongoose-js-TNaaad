var mongoose = require('mongoose');
var Schema = mongoose.Schema

var commentSchema = new Schema({
    content: String,
    author: Schema.Types.ObjectId,
    article: String


}, {timestamps:true})

var Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment;


// content
// author -> ID of user
// article ->
// timestamps()