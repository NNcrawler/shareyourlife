const ControllerComment = require('../controllers/comments');
const express = require('express');
const router = express.Router();

router.post('/from-video/:video_id', ControllerComment.commentOnAVideo)

module.exports = router;
