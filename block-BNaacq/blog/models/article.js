var mongoose = require('mongoose');
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: {type:String,required:true},
    description: {type:String,minlength:10,maxlength:30},
    tags: [string],
    author: Schema.Types.ObjectId,
    comments: [string]
},{timestamps:true})

var Article = mongoose.model('Article',articleSchema);

module.exports = Article;


// title
// description
// tags
// likes
// author -> ID of user
// comments
// timestamps()