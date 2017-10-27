const ControllerComment = require('../controllers/comments');
const express = require('express');
const router = express.Router();

router.post('/from-video/:video_id', ControllerComment.commentOnAVideo)
router.get('/from-video/:video_id', ControllerComment.getCommentFromVideo)
router.delete('/from-video/:video_id', ControllerComment.removeComment)

module.exports = router;
