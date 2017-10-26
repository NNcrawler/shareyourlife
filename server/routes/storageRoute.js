const express = require('express')
const router = express.Router()
// const storage = require('../controllers/storageCont')
const video = require('../helper/videoHelp')
const Storage = require('@google-cloud/storage')
const dbStorage = require('../models/video')
const projectId = process.env.PROJ_ID
require('dotenv').config()
const bucketName = process.env.BUCK_NAME
const mongoose = require('mongoose')
const storage = Storage({
  projectId:process.env.PROJ_ID,
  keyFilename:process.env.KEY_FILE
})
const bucket = storage.bucket(process.env.BUCK_NAME)

router.post('/post', video.multer.single('image'), video.sendUploadToGCS, (req, res) => {
  dbStorage.create({
    url: req.file.cloudStoragePublicUrl,
    filename: req.file.cloudStorageObject,
    type: req.file.mimetype,
  })
  .then(data => {
    res.send({
      status: 200,
      message: 'your file success upload',
      link: req.file.cloudStoragePublicUrl
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/', (req, res) => {
  dbStorage.find({}, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
})

router.delete('/delete/:id',(req,res)=>{
  storage
  .bucket(process.env.BUCK_NAME)
  .file(req.body.filename)
  .delete()
  .then(()=>{
    dbStorage.remove({_id:req.params.id},function(err){
      res.send('masuk ke then')
    })
  }).catch(err=>{
    res.send(err)
  })
})

module.exports = router
