const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema({
  fb_id : String
})

var User = mongoose.model('User', UserSchema)

module.exports = User
