const mongoose = require('mongoose')
const Schema = mongoose.Schema

let VideoSchema = new Schema({
  url: String,
  filename : String,
  comment : [{type : Schema.Types.ObjectId, ref:"User"}],
  type: String
})

var Video = mongoose.model('Video', VideoSchema)

module.exports = Video
