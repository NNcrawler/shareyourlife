const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CommentSchema = new Schema({
  user : {type:Schema.Types.ObjectId, ref:"User"}
})

var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
