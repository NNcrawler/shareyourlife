const mongoose = require('mongoose')
const Schema = mongoose.Schema

let VideoSchema = new Schema({
  title : String,
  videoUrl : String,
  comment : [{type : Schema.Types.ObjectId, ref:"User"}],

})

var Video = mongoose.model('Video', VideoSchema)

module.exports = Video
