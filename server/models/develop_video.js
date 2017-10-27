const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

let CommentSchema = new Schema({
  user : {type:Schema.Types.ObjectId, ref:"User"},
  comment : String,
  createdAt: {type: Date, default:Date.now}
})

let VideoSchema = new Schema({
  title : String,
  videoUrl : String,
  comments : [CommentSchema],
  user : {type: Schema.Types.ObjectId, ref : "User"}

})

var Video = mongoose.model('Video', VideoSchema)

module.exports = Video
