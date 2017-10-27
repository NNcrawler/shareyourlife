const mongoose = require('mongoose')

const Schema = mongoose.Schema

let CommentSchema = new Schema({
  user : {type:Schema.Types.ObjectId, ref:"User"},
  content : {type:String},
  token : String
})

let VideoSchema = new Schema({
  url: String,
  filename : String,
  comments : [CommentSchema],
  type: String
})

var Video = mongoose.model('Video', VideoSchema)

module.exports = Video
