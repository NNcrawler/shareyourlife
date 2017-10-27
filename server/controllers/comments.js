'use strict';
const video = require('../models/video');
const mongoose = require('mongoose');
const user = require('../models/user');

class Controller{
  static getCommentFromVideo(req, res, next){
    let videoUrl = req.params.url;
    video.findOne({videoUrl})
    .then(response=>{
      if(response){
        console.log(response);
        res.send(response)
      }else{
        throw 'video not found'
      }
    }).catch(err=>{
      res.send(err)
    })
  }

  static commentOnAVideo(req, res, next){
    //let userId = mongoose.Types.ObjectId(req.body.userId);
    let comment = req.body.comment || '';
    let vidId = req.params.video_id;
    let token = req.body.token || '';
    console.log(vidId);
    console.log('asdasd');
    //let videoId = mongoose.Types.ObjectId(req.params.video_id);
    video.findOne({_id:vidId})
    .then(response=>{
      if(response){
        console.log("before",response);
        response.comments.push({token, content:comment});
        console.log("after",response);
        response.save()
        .then(response=>{
          res.send('berhasil');
        })
      }else{
        throw 'video not Found';
      }
    }).catch(err=>{
      res.send(err)
    })
  }

  static removeComment(req, res, next){
    let dateComment = req.body.commentDate;
    let videoUrl = 'asdasd';
    let userId = mongoose.Types.ObjectId(req.body.userId);
    let user = null;

    user.findOne({_id:userId})
    .then(response=>{
      if(response){
        user = response;
        return video.findOne({videoUrl, $and:[{"comments.createdAt":dateComment}, {"comments.user":user}]})
      }else{
        throw 'wrong user'
      }
    })
    .then(response=>{
      if(response){
        response.comments.createdAt(dateComment).remove();
        response.save()
        .then(response=>{
          res.send('berhasil');
        })
      }else{
        throw 'video not found'
      }
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = Controller;
