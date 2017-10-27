// const dbStorage = require('../models/video')
// const storageHelp = require('../helper/videoHelp')
// const Storage = require('@google-cloud/storage')
// const projectId = process.env.PROJ_ID
// require('dotenv').config()
// const bucketName = process.env.BUCK_NAME
// const storage = Storage({
//   projectId:process.env.PROJ_ID,
//   keyFilename:process.env.KEY_FILE
// })
// const bucket = storage.bucket(process.env.BUCK_NAME)
//
// postVideo = (req, res) => {
//   dbStorage.create({
//     title: req.file.cloudStoragePublicUrl,
//     videoUrl: req.file.cloudStorageObject,
//     type: req.file.mimetype,
//     comment: req.body.comment
//   })
//   .then(data => {
//     res.send(data)
//   })
//   .catch(err => {
//     res.send(err)
//   })
// }
//
// let getAll = (req, res) => {
//   dbStorage.find({},function (err, result) {
//     if (!err) {
//       // console.log(result);
//       res.send(result)
//     } else {
//       res.send(err)
//     }
//   })
// }
// module.exports = {
//   postVideo,
//   getAll
// }
